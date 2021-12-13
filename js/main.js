import $  from 'jquery';

import { lazy } from './lazy';

import { sceneInit } from './scene';
import { postcardsInit } from './postcards';


import { header } from './template-parts/header/header';

import { scrollToAnchor} from './animations/scroll-to-anchor';
import { appearence } from './animations/appearence';




header();
lazy();


//animations
sceneInit();
postcardsInit();

//puppets();
