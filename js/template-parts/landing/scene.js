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
                point.position = $(this).data('appear');
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
       
    }
    init() {
        
        this.startButton.click((e)=>this.startScene(e));

        this.resize();
        $(window).resize(this.resize.bind(this));
    
    }

    resize(){
        this.screenWidth = $(window).width();
        this.screenHeight = $(window).height();

        this.itemWidth = this.screenHeight*0.5 / 0.1385;
        this.totalWidth = 0.973 * (3 * this.itemWidth);

        this.bgLayer1.width(this.totalWidth);

        this.items.forEach(element => {

            element.bgLayer1.width(this.itemWidth);
        
        });
    }

    initFullScroll(){

        $('body').bind(
            'mousewheel', 
            throttle(
                1000, 
                false, 
                (e) => {
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
            this.prevSlide();
        });
        $('body').on('swipedown',()=>{
            console.log('swipe down');
            this.nextSlide();
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

    }

    nextSlide(){
        let oldPoint = this.currentPoint;
        this.currentPoint = this.currentPoint>=this.points.length?this.currentPoint:this.currentPoint+1;

        this.progress = 0.01*this.points[this.currentPoint].position;
        this.onProgressChange();

        //previous animation
        let that = this;
        this.points[oldPoint].block.removeClass('enter').addClass('leave').removeClass('active');
        this.points[this.currentPoint].block.addClass('enter').addClass('active');
        
        //gsap.to( that.points[oldPoint].block, {opacity: 0, y: -20 , duration: 0.2 });
        //gsap.to( that.this.points[this.currentPoint].block , {opacity: 1, y: 0 , duration: 0.2 })

        //change logos
        this.logoChange();

        if(this.currentPoint==14){
            this.fireworks.play();
        }
    }

    onProgressChange(){
        gsap.to(this.bgGlobal,{ 
            ease: "easein",
            left:  this.progress * (-this.totalWidth + this.screenWidth) , 
            duration: 1
        });

        gsap.to($('.scene-bg-layer:not(.scene-bg-layer-1)'),{
            ease: "easein",
            xPercent: -this.progress*100,
            left: this.progress * this.totalWidth,
            duration: 1
        });

        gsap.to(this.progressCircle,{
            ease: "easein",
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


    initScroll(){
        let that = this;

        gsap.to(that.bgGlobal,{
            scrollTrigger: {
                id: "Scene",
                trigger: that.sceneScrollInner,
                scroller: that.sceneScrollOuter,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true,
                onUpdate: self => {
                    that.progress = self.progress;
                    //console.log("progress:", self.progress);
                }
            },
            ease: "none",
            left:  -that.totalWidth + that.screenWidth,
        });

        gsap.to(that.sceneFooter,{
            scrollTrigger: {
                id: "Footer",
                trigger: that.sceneScrollInner,
                scroller: that.sceneScrollOuter,
                scrub: false,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true,
                toggleActions: "reverse play reverse reverse",
                onUpdate: self => {
                    
                }
            },
            top:  '0%',
        });
        
        gsap.to($('.scene-bg-layer:not(.scene-bg-layer-1)'),{
            scrollTrigger: {
                id: "Scene",
                trigger: that.sceneScrollInner,
                scroller: that.sceneScrollOuter,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true
            },
            ease: "none",
            x: '-100%',
            left: that.totalWidth,
        });

        
    }

    initColors(){
        gsap.to(this.bgGlobal,{
            scrollTrigger: {
                id: "Scene Background",
                trigger: this.items[0].block,
                scroller: this.sceneScrollOuter,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true
            },
            ease: "none",
            backgroundColor: '#F1AB79',
        });
        gsap.to(this.bgGlobal,{
            scrollTrigger: {
                id: "Scene Background",
                trigger: this.items[1].block,
                scroller: this.sceneScrollOuter,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true
            },
            ease: "none",
            backgroundColor: '#13558C',
        });

        gsap.to(this.sceneBar,{
            scrollTrigger: {
                id: "Scene Background",
                trigger: this.items[0].block,
                scroller: this.sceneScrollOuter,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true
            },
            ease: "none",
            backgroundColor: '#2F2954',
        });
        gsap.to(this.sceneBar,{
            scrollTrigger: {
                id: "Scene Background",
                trigger: this.items[1].block,
                scroller: this.sceneScrollOuter,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true
            },
            ease: "none",
            backgroundColor: '#072A4D',
        });
    }

    initScenesChange(){
        this.items.forEach(( element , index ) => {

            gsap.from(element.block ,{
                scrollTrigger: {
                    trigger: element.block,
                    scroller: this.sceneScrollOuter,
                    start: "-2% top",
                    end: "bottom 95%",
                    scrub: false,
                    markers: false,
                    onToggle: function(self){
                        if(self.isActive){
                            $('.header-logo__item').removeClass('active');
                            $('.header-logo__item-'+(index+1)).addClass('active');

                            element.animation1.play();
                            element.animation2.play();
                            element.animation3.play();

                        } else{
                            element.animation1.pause();
                            element.animation2.pause();
                            element.animation3.pause();
                        }
                    },
                },        
            });
           
        });
    }

    initContent(){

        //first screen
        this.items.forEach((element , indexBlock ) => {
            if(element.points.length){
                let that = this;

                let tl1 = gsap.from( element.points[0].block ,{
                    scrollTrigger: {
                      trigger: element.block,
                      scroller: this.sceneScrollOuter,
                      start: "-2% top",
                      end: "20% 20%",
                      scrub: false,
                      markers: false,
                      toggleActions: "play reverse play reverse",
                      onUpdate: self => {
                       
                        //console.log("item progress "+indexBlock+"  first screen:", self.progress);
        
                      }
                    },
                    opacity: 0,
                    y: 50
                }); 
                
                let tl2 = gsap.from( element.points[1].block ,{
                    scrollTrigger: {
                      trigger: element.block,
                      scroller: this.sceneScrollOuter,
                      start: "20% top",
                      end: "40% 40%",
                      scrub: false,
                      markers: false,
                      toggleActions: "play reverse play reverse",
                      onUpdate: self => {
                       
                        //console.log("item progress" +index+ ":", self.progress);
        
                      }
                    },
                    duration: 1, 
                    opacity: 0,
                    y: 50
                }); 


                let tl = gsap.timeline({
                    scrollTrigger: {
                      trigger: element.block,
                      scroller: this.sceneScrollOuter,
                      start: "40% top",
                      end: "bottom 100%",
                      scrub: true,
                      markers: false,
                      onUpdate: self => {
                       
                        //console.log("item progress" +indexBlock+ ":", self.progress);

                      }
                    }
                });
                let tl_end = gsap.timeline({
                    scrollTrigger: {
                      trigger: element.block,
                      scroller: this.sceneScrollOuter,
                      start: "90% top",
                      end: "bottom 95%",
                      scrub: false,
                      markers: false,
                      toggleActions: "reverse play play reverse",
                      onUpdate: self => {
                       
                        //console.log("item progress" +indexBlock+ ":", self.progress);

                      }
                    }
                });
                
                element.points.forEach((point,index) => {
                    if(index >=2 ){
                        tl.from(point.block, {left: this.screenWidth + 200, rotation: 360, duration: 1});
                        tl_end.to(point.block, {scale: 0.1, opacity: 0, duration: 0.2});
                    }
                });
            }
        });

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
    
    startScene(e){
        $('body').addClass('started');

        $('.header-logo__item').removeClass('active');
        $('.header-logo__item-'+1).addClass('active');
        /*this.firstText = gsap.from( this.items[0].points[0].block ,{
            opacity: 0,
            y: 50
        }).pause();

        setTimeout(()=>{
            this.startButton.hide();
            this.sceneIntro.hide();
            this.firstText.play();

            this.initScenesChange();

        },700);

        this.car.play();*/
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