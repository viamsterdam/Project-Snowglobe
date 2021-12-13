import $  from 'jquery';
import LazyLoad from "vanilla-lazyload";

//lazy loading
function lazy(){
    var myLazyLoad = new LazyLoad({
        elements_selector: '.lazy-img',
        callback_loaded: function(){
            $(window).trigger('heightChanges');
        }
    });  
    var myLazyLoad = new LazyLoad({
        elements_selector: '.lazy',
        callback_loaded: function(){
            $(window).trigger('heightChanges');
        }
    });  
}

export { lazy };