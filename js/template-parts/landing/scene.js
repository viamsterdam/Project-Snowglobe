import $  from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class Scene {
    constructor() {
        this.screenWidth = $(window).width();
        this.screenHeight = $(window).height();

        this.sceneBlock = $('#scene'); //jquery scene container
        this.sceneWrapper = this.sceneBlock.find('#sceneScroll');
        this.scrollBlock = this.sceneBlock.find('.scene-bg');
        this.progress = 0; //current progress of the scene
        this.totalLength = 0; //total road length
        this.items = []; //scene items

        $('.scene-item').each((index, element)=>{
            let item = {};

            item.block = $(element);                   //jquery object of scene item
            item.length = $(element).data('length');   //length of scene item
            item.points = [];                          //array of content points
            item.bgBlock = null;
            item.bgLayers = [];
            item.index = $(element).data('index');

            $(element).find('.scene-item__content-point').each(function(){
                let point = {};
                point.block = $(this);
                point.position = $(this).data('appear');
                item.points.push(point);
            });

            this.sceneBlock.find('.scene-bg-item[data-index="'+item.index+'"]').each(function(){               
                item.bgBlock = $(this);
            });

            this.items.push(item);
        });

        //calculate total length
        this.items.forEach(element => {
            this.totalLength += element.length;
        });
    }
    init() {

        //set height to each scene item
        this.items.forEach(element => {
            element.block.height(element.length);
            element.bgBlock.width(element.length);
        });

        let that = this;
        gsap.to(that.scrollBlock,{
            scrollTrigger: {
                id: "Scene",
                trigger: that.sceneWrapper,
                scrub: true,
                pin: false,
                start: "top top",
                end: "bottom bottom",
                markers: false,
                invalidateOnRefresh: true
            },
            x: -that.totalLength + that.screenWidth,
        });

        this.items.forEach(element => {
           
            /*gsap.to(element.bgBlock,{
                scrollTrigger: {
                    id: "Scene",
                    trigger: element.block,
                    scrub: true,
                    pin: false,
                    start: "top top",
                    end: "bottom bottom",
                    markers: false,
                    invalidateOnRefresh: true
                },
                x: -element.length,
            });*/


        });
    }


}

export { Scene };