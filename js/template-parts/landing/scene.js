import $  from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bodymovin from "lottie-web";

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
        this.startButton = $('#start-button');
        this.soundButton = $('#sound-button');

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
        
        this.bgLayer1.width(this.totalWidth);

        this.items.forEach(element => {
            element.block.height(this.itemWidth);
            element.bgLayer1.width(this.itemWidth);

            element.animation1 = bodymovin.loadAnimation({
                container: element.bgLayer1.get(0), // Required
                path: element.bgLayer1.data('path'), // Required
                renderer: 'svg', // Required
                loop: true, // Optional
                autoplay: true, // Optional
                name: "Layer 1", // Name for future reference. Optional.
                rendererSettings: {
                    
                }
            });

            element.animation2 = bodymovin.loadAnimation({
                container: element.bgLayer2.get(0), // Required
                path: element.bgLayer2.data('path'), // Required
                renderer: 'svg', // Required
                loop: true, // Optional
                autoplay: true, // Optional
                name: "Layer 2", // Name for future reference. Optional.
                rendererSettings: {
                    
                }
            });

            element.animation3 = bodymovin.loadAnimation({
                container: element.bgLayer3.get(0), // Required
                path: element.bgLayer3.data('path'), // Required
                renderer: 'svg', // Required
                loop: true, // Optional
                autoplay: true, // Optional
                name: "Layer 3", // Name for future reference. Optional.
                rendererSettings: {
                    
                }
            })
            
        });

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
                    console.log("progress:", self.progress);
                }
            },
            x:  -that.totalWidth + that.screenWidth,
        });

        gsap.to(that.bgLayer2,{
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
            x: '-100%',
            left: that.totalWidth,
        });

        gsap.to(that.bgLayer3,{
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
            x: '-100%',
            left: that.totalWidth,
        });

        gsap.to(that.bgLayer4,{
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
            x: '-100%',
            left: that.totalWidth,
        });

        gsap.to(that.bgLayer5,{
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
            backgroundColor: '#072A4D',
        });
    }
}

export { Scene };