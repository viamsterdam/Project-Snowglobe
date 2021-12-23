import $  from 'jquery';
import { gsap , TimelineLite} from "gsap";
import bodymovin from 'lottie-web/build/player/lottie_svg.min.js';
import bodymovinCanvas from 'lottie-web/build/player/lottie_canvas.min.js';
import { throttle } from 'throttle-debounce';

const loadTouchEvents = require('jquery-touch-events');
loadTouchEvents($);

class Scene {
    constructor() {
        this.screenWidth = $(window).width();
        this.screenHeight = $(window).height();

        this.sceneBlock = $('#scene'); //jquery scene container
        this.sceneScrollOuter = this.sceneBlock.find('#sceneScrollOuter');
        this.sceneScrollInner = this.sceneBlock.find('#sceneScrollInner');

        this.sceneBar = $('.scene-bar');
        this.sceneFooter = $('#footer');

        this.sceneIntro = $('.scene__intro');
        this.startButton = $('.js-scene-start');

        this.soundButton = $('#sound-button');
        this.sound = $('#sound').get(0);
        this.muted = true;

        this.progress = 0; //current progress of the scene

        this.progressCircle = $('#progress-circle');
        this.progressCircleLength = 150.72;

        this.points = [];
        this.currentPoint = 0;

        this.items = []; //scene items

        this.bgGlobal = this.sceneBlock.find('.scene-bg');
        this.bgLayer1 = this.sceneBlock.find('.scene-bg-layer-1');
        this.bgLayer2 = this.sceneBlock.find('.scene-bg-layer-2');
        this.bgLayer3 = this.sceneBlock.find('.scene-bg-layer-3');
        this.bgLayer4 = this.sceneBlock.find('.scene-bg-layer-4');
        this.bgLayer5 = this.sceneBlock.find('.scene-bg-layer-5');

        $('.scene-item').each((index, element)=>{

            let item = {};

            item.block = $(element);                   //jquery object of scene item
            item.points = [];                          //array of content points
            item.logo = $('.header-logo__item-'+index);
            item.bgBlock = null;
            item.index = $(element).data('index');

            let that = this;
            $(element).find('.scene-item__content-point').each(function(){
                let point = {};
                point.block = $(this);
                point.block.addClass('enter');
                point.position = parseInt($(this).data('appear'));
                point.animation = $(this).data('animation');
                that.points.push(point);
            });


            item.bgLayer1 = this.sceneBlock.find('.scene-bg-layer-1 .scene-bg-layer__item[data-index="'+item.index+'"]');
            item.bgLayer2 = this.sceneBlock.find('.scene-bg-layer-2 .scene-bg-layer__item[data-index="'+item.index+'"]');
            item.bgLayer3 = this.sceneBlock.find('.scene-bg-layer-3 .scene-bg-layer__item[data-index="'+item.index+'"]');
           
            this.items.push(item);
        });

        this.points.push({
            block : this.sceneFooter,
            position : 100,
            animation : 'footer'
        });

        console.log(this.points);
       
    }
    init() {
    
        this.resize();
        $(window).resize(this.resize.bind(this));
    
    }

    resize(){
        this.screenWidth = $(window).width();
        this.screenHeight = $(window).height();

        this.itemWidth = this.screenHeight*0.5 / 0.1385;
        this.totalWidth = 0.973 * (3 * this.itemWidth);

        this.bgLayer1.width(this.totalWidth);
        this.bgLayer2.width(this.totalWidth * 0.92);
        this.bgLayer3.width(this.totalWidth * 0.74);
        this.bgLayer4.width(this.totalWidth * 0.51);
        this.bgLayer5.width(this.totalWidth * 0.32);

        this.onProgressChange();
    }

    initFullScroll(){

        $('body').bind(
            'mousewheel', 
            throttle(
                2500, 
                false, 
                (e) => {
                    e.stopPropagation();
                    if(e.originalEvent.wheelDelta /120 > 0) {
                        console.log('scrolling up !');
                        this.prevSlide();
                    }
                    else{
                        console.log('scrolling down !');
                        this.nextSlide();
                    }
                    //console.log('num:', num);
                } /*,
                true*/
            )
        );

        $('body').on('swipeup',()=>{
            console.log('swipe up');
            this.nextSlide();
        });
        $('body').on('swipedown',()=>{
            console.log('swipe down');
            this.prevSlide();
        });

        
        //colors
        this.bgColorAnimation = new TimelineLite({paused:true});
        this.bgColorAnimation.to(this.bgGlobal , { backgroundColor: '#F1AB79' } ).to(this.bgGlobal , { backgroundColor: '#13558C' } );

        this.barColorAnimation = new TimelineLite({paused:true});
        this.barColorAnimation.to(this.sceneBar , { backgroundColor: '#2F2954' } ).to(this.sceneBar , { backgroundColor: '#072A4D' } );

        this.progressColorAnimation = new TimelineLite({paused:true});
        this.progressColorAnimation.to(this.progressCircle , { stroke: '#F1AB79' } ).to(this.progressCircle , { stroke: '#13558C' } );
        
    }

    prevSlide(){
        let oldPoint = this.currentPoint;
        this.currentPoint = this.currentPoint<=0?this.currentPoint:this.currentPoint-1;

        this.progress = 0.01*this.points[this.currentPoint].position;
        this.onProgressChange();

        this.points[oldPoint].block.removeClass('leave').addClass('enter').removeClass('active');
        this.points[this.currentPoint].block.addClass('leave').addClass('active');

        this.logoChange();
        this.lottieAnimations();
    }

    nextSlide(){
        let oldPoint = this.currentPoint;
        this.currentPoint = this.currentPoint>=this.points.length?this.currentPoint:this.currentPoint+1;

        this.progress = 0.01*this.points[this.currentPoint].position;
        

        this.onProgressChange();

        //previous animation
        this.points[oldPoint].block.removeClass('enter').addClass('leave').removeClass('active');
        this.points[this.currentPoint].block.addClass('enter').addClass('active');
        
        //gsap.to( that.points[oldPoint].block, {opacity: 0, y: -20 , duration: 0.2 });
        //gsap.to( that.this.points[this.currentPoint].block , {opacity: 1, y: 0 , duration: 0.2 })

        //change logos
        this.logoChange();
        this.lottieAnimations();

    }

    onProgressChange(){

        gsap.to($('.scene-bg-layer-1'),{
            ease: "easeout",
            xPercent: -this.progress*100,
            left: this.progress*this.screenWidth,
            duration: 1
        });

        gsap.to($('.scene-bg-layer:not(.scene-bg-layer-1)'),{
            ease: "easeout",
            xPercent: -this.progress*100,
            left: this.progress*this.screenWidth,
            duration: 1
        });

        gsap.to(this.progressCircle,{
            ease: "easeout",
            strokeDashoffset: this.progressCircleLength - (this.progressCircleLength * this.progress),
            duration: 1
        });

        //colors change
        gsap.to(this.bgColorAnimation,0.5, {progress: this.progress });
        gsap.to(this.barColorAnimation,0.5, {progress: this.progress });
        gsap.to(this.progressColorAnimation,0.5, {progress: this.progress });

    }

    logoChange(){
        
        if(this.currentPoint<4){
            $('.header-logo__item').removeClass('active');
            $('.header-logo__item-'+1).addClass('active');
        } else if(this.currentPoint >= 4 && this.currentPoint<=8){
            $('.header-logo__item').removeClass('active');
            $('.header-logo__item-'+2).addClass('active');
        } else if(this.currentPoint >= 9){
            $('.header-logo__item').removeClass('active');
            $('.header-logo__item-'+3).addClass('active');
        } 
        
    }

    lottieAnimations(){
        
        if(this.currentPoint>4){
            this.items[0].animation1.pause();
            this.items[0].animation2.pause();
            this.items[0].animation2.pause();
        } else{
            this.items[0].animation1.play();
            this.items[0].animation2.play();
            this.items[0].animation2.play();
        }

        if(this.currentPoint>=3 && this.currentPoint<=9){
            this.items[1].animation1.play();
            this.items[1].animation2.play();
            this.items[1].animation2.play();
            
        } else{
            this.items[1].animation1.pause();
            this.items[1].animation2.pause();
            this.items[1].animation2.pause();
        }

        if(this.currentPoint>=8){
            this.items[2].animation1.play();
            this.items[2].animation2.play();
            this.items[2].animation2.play();
            
        } else{
            this.items[2].animation1.pause();
            this.items[2].animation2.pause();
            this.items[2].animation2.pause();
        }
        

        if(this.currentPoint>=14){
            this.fireworksWrapper.fadeIn();
            this.fireworks.play();
        } else{
            this.fireworksWrapper.fadeOut();
            this.fireworks.pause();
        }
    }

    initSound(){
        if(this.sound){
            this.soundButton.click(()=>{
                if(this.muted){
                    this.muted = false;
                    this.sound.play();
                    this.soundButton.addClass('active');
                } else{
                    this.muted = true;
                    this.sound.pause();
                    this.soundButton.removeClass('active');
                }
            });
        }
    }

    playSound(){
        if(this.sound){
            if(this.muted){
                this.muted = false;
                this.sound.play();
                this.soundButton.addClass('active');
            }
        }
    }
    
    startScene(e){
        $('body').addClass('started');

        $('.header-logo__item').removeClass('active');
        $('.header-logo__item-'+1).addClass('active');

        gsap.to($('.scene-bg-layer:not(.scene-bg-layer-1)'),{
            ease: "easein",
            y: 0,
            duration: 0.7
        });

        this.car.play();
        this.playSound();
        
    }

    load(){
        this.loadScreen = $('#loader');
        this.loadProgress = $('#loader-value');

        this.animationsArray = [];
        this.loadAnimation = bodymovinCanvas.loadAnimation({
            container: $('.scene-loader__img-wrapper').get(0), // Required
            path: $('#load-animation').data('path'), // Required
            renderer: 'canvas', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "Loader", // Name for future reference. Optional.
            rendererSettings: {
                
            }
        });
        this.animationsArray.push(this.loadAnimation);

        this.carWrapper = $('#scene-car');
        this.car = bodymovin.loadAnimation({
            container: this.carWrapper.get(0), // Required
            path: this.carWrapper.data('path'), // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "Loader", // Name for future reference. Optional.
            rendererSettings: {
                
            }
        });
        this.animationsArray.push(this.car);

        this.snowWrapper = $('#snow');
        this.snow = bodymovin.loadAnimation({
            container: this.snowWrapper.get(0), // Required
            path: this.snowWrapper.data('path'), // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "Snow", // Name for future reference. Optional.
            rendererSettings: {
                
            }
        });
        this.animationsArray.push(this.snow);

        this.fireworksWrapper = $('#fireworks');
        this.fireworks = bodymovin.loadAnimation({
            container: this.fireworksWrapper.get(0), // Required
            path: this.fireworksWrapper.data('path'), // Required
            renderer: 'svg', // Required
            loop: true, // Optional
            autoplay: false, // Optional
            name: "Fireworks", // Name for future reference. Optional.
            rendererSettings: {
                
            }
        });
        this.animationsArray.push(this.fireworks);



        this.items.forEach(element => {
            //element.block.height(this.itemWidth);
            element.bgLayer1.width(this.itemWidth);

            element.animation1 = bodymovin.loadAnimation({
                container: element.bgLayer1.get(0), // Required
                path: element.bgLayer1.data('path'), // Required
                renderer: 'svg', // Required
                loop: true, // Optional
                autoplay: false, // Optional
                name: "Layer 1", // Name for future reference. Optional.
                rendererSettings: {
                    
                }
            });
            this.animationsArray.push(element.animation1);

            element.animation2 = bodymovin.loadAnimation({
                container: element.bgLayer2.get(0), // Required
                path: element.bgLayer2.data('path'), // Required
                renderer: 'svg', // Required
                loop: true, // Optional
                autoplay: false, // Optional
                name: "Layer 2", // Name for future reference. Optional.
                rendererSettings: {
                    
                }
            });
            this.animationsArray.push(element.animation2);

            element.animation3 = bodymovin.loadAnimation({
                container: element.bgLayer3.get(0), // Required
                path: element.bgLayer3.data('path'), // Required
                renderer: 'svg', // Required
                loop: true, // Optional
                autoplay: false, // Optional
                name: "Layer 3", // Name for future reference. Optional.
                rendererSettings: {
                    
                }
            });
            this.animationsArray.push(element.animation3);
        });

        this.totalAnimations = this.animationsArray.length;
        this.loadedAnimations = 0;

        for (var i=0; i<this.animationsArray.length; i++) {
            this.animationsArray[i].addEventListener('DOMLoaded', (e) => { 
                this.loadedAnimations++;
                if (this.loadedAnimations == this.totalAnimations) {
                    this.loadScreen.addClass('screen-loaded');
                    this.loadAnimation.addEventListener('complete', (e) => { this.showScene(); });
                    this.loadProgress.text(100);
                    this.loadAnimation.play();
                }
                else {
                    let val = (100*this.loadedAnimations/this.totalAnimations);
                    let randomShift = Math.floor(Math.random() * (5 + 5 + 1)) - 5;
                    val += randomShift;
                    val = Math.floor(val);
                    this.loadProgress.text(val);
                }
            });
           
        }
    }

    showScene(){
        setTimeout(()=>{
            this.loadScreen.hide();
        },1000);
        $('.scene-loader__img-wrapper').hide();
        $('body').removeClass('loading');

        //start first scene
        this.items[0].animation1.play();
        this.items[0].animation2.play();
        this.items[0].animation3.play();
    }
}

export { Scene };