import $  from 'jquery';


//animations
import { lottie } from './lottie';
import { Scene } from './template-parts/landing/scene';
import { buttons } from './template-parts/landing/buttons';

lottie();
var scene = new Scene();

scene.init();
scene.load();

scene.initScroll();
scene.initColors();
scene.initSound();
scene.initContent();