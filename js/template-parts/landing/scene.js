import $  from 'jquery';
import { TweenMax , TimelineLite} from "gsap";
import bodymovin from 'lottie-web/build/player/lottie_svg.min.js';
import bodymovinCanvas from 'lottie-web/build/player/lottie_canvas.min.js';

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
        this.sound.volume = 0.5;
        this.muted = true;

        this.progress = 0; //current progress of the scene
        this.stepCount = 0;


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
                
                if($(window).width()>768){
                    point.position = parseInt($(this).data('appear'));
                } else{
                    point.position = parseInt($(this).data('appear-mobile'));
                }

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

        this.items.forEach(element => {
            element.bgLayer1.width(this.itemWidth);
        });

        if(this.stepCount != 0){
            this.onProgressChange();
        }

        this.stepCount++;
    }

    initFullScroll(){
        var that = this;
        var g_supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function() {
              g_supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {}

        var scrollings = [];
        /**
        * Gets the average of the last `number` elements of the given array.
        */
       function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = false;

            if(true){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));


                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(scrollings.length == 0){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            that.nextSlide();
                        //scrolling up?
                        }else {
                            that.prevSlide();
                        }
                    }
                }

                return false;
            }

        }
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

            // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
            var passiveEvent = g_supportsPassive ? {passive: false }: false;

            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);
            }
        }

        addMouseWheelHandler();


        $('body').on('swipeup',()=>{
            this.nextSlide();
        });
        $('body').on('swipedown',()=>{
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

        this.sceneBlock.attr('data-point', this.currentPoint+1);
        this.sceneBlock.removeClass('scene-forward').addClass('scene-back');

        this.progress = 0.01*this.points[this.currentPoint].position;
        this.onProgressChange();

        this.points[oldPoint].block.removeClass('leave').addClass('enter').removeClass('active');
        this.points[this.currentPoint].block.removeClass('enter').addClass('leave').addClass('active');

        //change logos
        this.logoChange();
        this.linkChange();
        setTimeout(()=>{
            this.lottieAnimations();
        },1000);
    }

    nextSlide(){
        let oldPoint = this.currentPoint;
        this.currentPoint = this.currentPoint>=this.points.length?this.currentPoint:this.currentPoint+1;

        this.sceneBlock.attr('data-point', this.currentPoint+1);
        this.sceneBlock.removeClass('scene-back').addClass('scene-forward');

        this.progress = 0.01*this.points[this.currentPoint].position;
        this.onProgressChange();

        //previous animation
        if(this.currentPoint!=15){
            this.points[oldPoint].block.removeClass('enter').addClass('leave').removeClass('active');
        }
        this.points[this.currentPoint].block.addClass('enter').addClass('active');

        //change logos
        this.logoChange();
        this.linkChange();
        setTimeout(()=>{
            this.lottieAnimations();
        },1000);
    }

    onProgressChange(){

        $('.scene-bg-layer').each((index , element)=>{
            let el = $(element);
            TweenMax.to(el,{
                ease: "easeout",
                x: -this.progress*(el.width()-this.screenWidth),
                duration: 1,
            });
        });

        TweenMax.to(this.progressCircle,{
            ease: "easeout",
            strokeDashoffset: this.progressCircleLength - (this.progressCircleLength * this.progress),
            duration: 1
        });

        //colors change
        TweenMax.to(this.bgColorAnimation,0.5, {progress: this.progress });
        TweenMax.to(this.barColorAnimation,0.5, {progress: this.progress });
        TweenMax.to(this.progressColorAnimation,0.5, {progress: this.progress });

    }

    logoChange(){
        
        if(this.currentPoint<4){
            $('.header-logo__item').removeClass('active');
            $('.header-logo__item-'+1).addClass('active');
        } else if(this.currentPoint >= 4 && this.currentPoint<=8){
            $('.header-logo__item').removeClass('active');
            $('.header-logo__item-'+2).addClass('active');
        } else if(this.currentPoint >= 9 && this.currentPoint < 14){
            $('.header-logo__item').removeClass('active');
            $('.header-logo__item-'+3).addClass('active');
        } else if(this.currentPoint >= 14){
            $('.header-logo__item').removeClass('active');
        } 
        
    }
    linkChange(){
        
        
    }

    lottieAnimations(){
        
        if(this.currentPoint>4){
            this.items[0].animation1.pause();
            this.items[0].animation2.pause();
            this.items[0].animation3.pause();
        } else{
            this.items[0].animation1.play();
            this.items[0].animation2.play();
            this.items[0].animation3.play();
        }

        if(this.currentPoint>=3 && this.currentPoint<=9){
            this.items[1].animation1.play();
            this.items[1].animation2.play();
            this.items[1].animation3.play();
            
        } else{
            this.items[1].animation1.pause();
            this.items[1].animation2.pause();
            this.items[1].animation3.pause();
        }

        if(this.currentPoint>=8){
            this.items[2].animation1.play();
            this.items[2].animation2.play();
            this.items[2].animation3.play();
            
        } else{
            this.items[2].animation1.pause();
            this.items[2].animation2.pause();
            this.items[2].animation3.pause();
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

        TweenMax.to($('.scene-bg-layer'),{
            ease: "easeout",
            y: 0,
            duration: 1.2
        });

        this.sceneBlock.attr('data-point', 1);

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