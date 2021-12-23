import $  from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bodymovin from 'lottie-web/build/player/lottie_svg.min.js';
import bodymovinCanvas from 'lottie-web/build/player/lottie_canvas.min.js';

gsap.registerPlugin(ScrollTrigger);

class Scene {
    constructor() {
        this.screenWidth = $(window).width();
        this.screenHeight = $(window).height();

        this.sceneBlock = $('#scene'); //jquery scene container
        this.sceneScrollOuter = this.sceneBlock.find('#sceneScrollOuter');
        this.sceneScrollInner = this.sceneBlock.find('#sceneScrollInner');

        this.itemWidth = this.screenHeight*0.5 / 0.1385;
        this.totalWidth = 0.973 * (3 * this.itemWidth);

        this.sceneBar = $('.scene-bar');
        this.sceneFooter = $('#footer');

        this.sceneIntro = $('.scene__intro');
        this.startButton = $('.js-scene-start');

        this.soundButton = $('#sound-button');
        this.sound = $('#sound').get(0);

        this.progress = 0; //current progress of the scene
        this.muted = true;

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

            $(element).find('.scene-item__content-point').each(function(){
                let point = {};
                point.block = $(this);
                point.position = $(this).data('appear');
                item.points.push(point);
            });

            item.bgLayer1 = this.sceneBlock.find('.scene-bg-layer-1 .scene-bg-layer__item[data-index="'+item.index+'"]');
            item.bgLayer2 = this.sceneBlock.find('.scene-bg-layer-2 .scene-bg-layer__item[data-index="'+item.index+'"]');
            item.bgLayer3 = this.sceneBlock.find('.scene-bg-layer-3 .scene-bg-layer__item[data-index="'+item.index+'"]');
           
            this.items.push(item);
        });

        
       
    }
    init() {
        
        this.startButton.click((e)=>this.startScene(e));

        this.bgLayer1.width(this.totalWidth);

        this.items.forEach(element => {
            element.block.height(this.itemWidth);
            element.bgLayer1.width(this.itemWidth);
        
        });
    
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

        this.firstText = gsap.from( this.items[0].points[0].block ,{
            opacity: 0,
            y: 50
        }).pause();

        setTimeout(()=>{
            this.startButton.hide();
            this.sceneIntro.hide();
            this.firstText.play();

            this.initScenesChange();

        },700);

        this.car.play();
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

        this.items.forEach(element => {
            element.block.height(this.itemWidth);
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