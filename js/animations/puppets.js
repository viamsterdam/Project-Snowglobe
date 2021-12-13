
import $ from 'jquery';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

import { TweenMax } from "gsap";

class Puppets {
    constructor() {

        this.animateFlag = false;
        this.puppets = [];

        this.theta = 0;
        this.pointer = new THREE.Vector2();
        this.radius = 100;
    }
    init() {
        this.container = document.createElement('div');
        document.getElementById('scene').appendChild(this.container);

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
        this.camera.position.set(100, 100, 500);

        this.scene = new THREE.Scene();
        //this.scene.background = new THREE.Color(0xa0a0a0);

        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        this.hemiLight.position.set(0, 200, 0);
        this.scene.add(this.hemiLight);

        this.dirLight = new THREE.DirectionalLight(0xffffff);
        this.dirLight.position.set(0, 70, 130);
        this.dirLight.castShadow = true;
        this.dirLight.shadow.camera.top = 180;
        this.dirLight.shadow.camera.bottom = - 100;
        this.dirLight.shadow.camera.left = - 120;
        this.dirLight.shadow.camera.right = 120;
        this.scene.add(this.dirLight);

        //background
        /*
        this.loaderBg = new THREE.TextureLoader();
        this.textureBg = this.loaderBg.load(
            'wp-content/themes/snowglobe/assets/models/bg.jpeg',
            () => {
                const rt = new THREE.WebGLCubeRenderTarget(this.textureBg.image.height);
                rt.fromEquirectangularTexture(this.renderer, this.textureBg);
                this.scene.background = rt.texture;
            }
        );
        */

        this.renderer = new THREE.WebGLRenderer({ alpha: true , antialias: true });
        this.renderer.setClearColor( 0x000000, 0 );
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.container.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 70, 0);
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.3;
        this.controls.enableZoom = false;

        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        //cursor
        this.cursor = $(".cursor");
        this.parallaxTitle = $(".parallax-title"),
        this.cursorAcive = false;
        this.initCursor();
    

    }

    animate() {

        if (this.animateFlag) {
            requestAnimationFrame(() => this.animate());

            this.controls.update();
            if (this.mixer) this.mixer.update(delta);
            this.renderer.render(this.scene, this.camera);
        }

    }

    startAnimation() {
        this.animateFlag = true;
        this.animate();
    }

    stopAnimation() {
        this.animateFlag = false;
    }
    
    loadPuppet(index) {
        // model
        for (let i = 1; i < 6; i++) {
            if (i in this.puppets) {
                this.puppets[i].visible = false;
            }
        }
        if (index in this.puppets) {
            this.puppets[index].visible = true;
        } 
    }

    preloadPuppets(){
        var manager = new THREE.LoadingManager();
        manager.onStart = function (item, loaded, total) {
            console.log('Loading started');
        };
        manager.onLoad = () => {
            console.log('Loading complete');  
            $('body').removeClass('loading').addClass('loaded');
            setTimeout(()=>{
                
                this.mouseX = $(window).width()/2;
                this.mouseY = $(window).height()/2;
                this.cursorAcive = true;
            } , 300)
        };
        manager.onProgress = function (item, loaded, total) {            
            let percent = Math.round(loaded / total * 100, 2);
            $('.landing-start__cursor__loading #value').text(percent);
        };
        manager.onError = function (url) {
            console.log('Error loading');
        };

        for (let i = 1; i < 6; i++) {
            if (i in this.puppets) {
                this.puppets[i].visible = false;
            }
        }

        for (let i = 1; i < 6; i++) {

                new FBXLoader(manager).load(customjs_ajax_object.content_url+'wp-content/themes/snowglobe/assets/models/scena' + i + '.fbx', (object) => {
    
                    object.traverse(function (child) {
    
                        if (child.isMesh) {
    
                            child.castShadow = true;
                            child.receiveShadow = true;
    
                        }
    
                    });
    
                    this.scene.add(object);
                    this.puppets[i] = object;
                    this.puppets[i].position.x = -85;
                    if(i==2){
                        this.puppets[i].position.x = 75;
                    }
    
                });
        }
        
    }

    initCursor(){
        this.posX = $(window).width()/2;
        this.posY = $(window).height()/2;

        this.mouseX = $(window).width()/2;
        this.mouseY = $(window).height()/2;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: ()=>{
                this.posX += (this.mouseX - this.posX) / 9;
                this.posY += (this.mouseY - this.posY) / 9;

                TweenMax.set(this.cursor, {
                    css: {
                        left: this.posX ,
                        top: this.posY
                    }
                });

      
            }
        });

        $('.landing-start').on("mousemove", (e) => {
            if(this.cursorAcive){
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
            }
        });

        $(".hide-cursor").on("mouseenter", () => {
            this.cursor.addClass("active");
            this.cursorAcive = false;
        });
        $(".hide-cursor").on("mouseleave", () => {
            this.cursor.removeClass("active");
            this.cursorAcive = true;
        });
    }
    initParallaxImage(){

    }
}

export { Puppets };
