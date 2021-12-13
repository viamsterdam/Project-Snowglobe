import $  from 'jquery';
import jQuery  from 'jquery';
import { Puppets } from './animations/puppets';

function sceneInit(){
    let landingStart = $('.landing-start');
    let landingScene = $('.landing-scene');
    let landingPostcard = $('.landing-postcard');
    let header = $('.header');

    //items array
    let videoItems = [];
    $('.landing-scene__item').each(function(index){
        let video = $(this).find('.landing-scene__item__video');
        if($(window).width()>992){
            video.attr('src',video.data('src'));
        } else if($(window).width()>768){
            video.attr('src',video.data('src-tablet'));
        } else{
            video.attr('src',video.data('src-mobile'));
        }

        let obj = {}
        obj.item = $(this);
        obj.video = $(this).find('.landing-scene__item__video').get(0);
        obj.image = $(this).find('.landing-scene__item__image');
        obj.tootip = $('.video-controls__item__tooltip[data-index="'+(index+1)+'"]');
        
        obj.popups = $('.landing-scene__popups__item[data-index="'+(index+1)+'"]');

        videoItems.push(obj);
    });

    //puppets scene
    let puppets = new Puppets();
    puppets.init();

    //scene variables
    let activeIndex = 1;
    let activeScene = videoItems[activeIndex-1];
    let sound = true;
    let play = false;
    
    //buttons
    let playBtn = $('#videoPlay');
    let soundBtn = $('#videoSound');
    let nextBtn = $('#sceneNext');
    let prevBtn = $('#scenePrev');
    let allBtn = $('#sceneAll');

    //functions
    function videoPlayPause(){
        activeScene.tootip.show();
        if(play){
            play = false;
            activeScene.video.pause();
            playBtn.addClass('active');
        } else{
            play = true;
            activeScene.video.play();
            playBtn.removeClass('active');
        }
    }
    function videoMuteUnmute(){
        if(sound){
            sound = false;
            activeScene.video.muted = true;
            soundBtn.addClass('active');
        } else{
            sound = true;
            activeScene.video.muted = false;
            soundBtn.removeClass('active');
        }
    }

    function videoReset(){
        play = false;
        activeScene.video.pause();
        activeScene.video.currentTime = 0;
        activeScene.popups.removeClass('active');
        activeScene.image.removeClass('active');
        playBtn.addClass('active');
        puppets.stopAnimation();
    }

    function nextVideo(){
        videoReset();
        activeIndex++;
        if(activeIndex > 5){//if no more videos
            activeIndex = 5;
            openPostcard();
        } else{
            activeScene.item.removeClass('active');
            activeScene.image.removeClass('active');
            activeScene = videoItems[activeIndex-1];
            activeScene.item.addClass('active');
            $('canvas').removeClass('active');
            videoPlayPause();
            puppets.loadPuppet(activeIndex);
        }
    }

    function prevVideo(){
        videoReset();
        activeIndex--;
        if(activeIndex < 1){//if no more videos
            activeIndex = 1;
            videoPlayPause();
            activeScene.image.removeClass('active');
            activeScene.popups.removeClass('active');
            $('canvas').removeClass('active');
        } else{
            activeScene.item.removeClass('active');
            activeScene.image.removeClass('active');
            activeScene = videoItems[activeIndex-1];
            activeScene.item.addClass('active');
            $('canvas').removeClass('active');
            videoPlayPause();
            puppets.loadPuppet(activeIndex);
        }
    }

    function openPostcard(){
        landingScene.fadeOut(function(){
            videoReset();
            header.fadeIn();
            landingPostcard.fadeIn();
        });
    }

    //buttons click
    playBtn.click(function(e){
        e.preventDefault();
        videoPlayPause();
    });
    soundBtn.click(function(e){
        e.preventDefault();
        videoMuteUnmute();
    });

    $('.js-scene-next').click(function(){
        nextVideo();
    });
    $('.js-scene-prev').click(function(){
        prevVideo();
    });

    $('.js-back-home').click(function(){
        videoReset();
        landingScene.fadeOut(function(){
            landingStart.fadeIn();
            header.fadeIn();
        });
    });

    //popups
    $('.popup').each(function(){
        let popup = $(this);
        let index = $(this).data('index');
        let openBtn = $('.popup-open[data-index="'+index+'"]');
        let closeBtn = $(this).find('.popup__close');

        openBtn.click(function(){
            popup.fadeIn();
            openBtn.addClass('active');
        });
        
        closeBtn.click(function(){
            popup.fadeOut();
            openBtn.removeClass('active');
        });
    });

    //Add video events
    for(let i = 0; i<videoItems.length; i++){
        //init video progress bars
        videoItems[i].video.ontimeupdate = function(){
            var percentage = ( videoItems[i].video.currentTime / videoItems[i].video.duration ) * 100;
            videoItems[i].tootip.css("left", percentage+"%");
        };
        videoItems[i].video.onended = function(e) {
            videoPlayPause();
            videoItems[i].image.addClass('active');
            videoItems[i].popups.addClass('active');
            $('canvas').addClass('active');
            puppets.startAnimation();
        };
    }


    //Loading
    $( document ).ready(function(){
        
        puppets.preloadPuppets();

    });

    //Start scene
    $('.js-start-scene').click(function(){
        landingStart.fadeOut(function(){
            landingScene.fadeIn(function(){
                videoPlayPause();
                puppets.loadPuppet(1);
            });
            activeScene.item.addClass('active');
        });
        header.fadeOut();
    });
    //$('.js-start-scene').trigger('click');

}


export { sceneInit };