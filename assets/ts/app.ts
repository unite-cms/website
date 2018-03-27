import random = require("lodash/fp/random");
import throttle = require("lodash/fp/throttle");
import delay = require("lodash/fp/delay");
import feather = require('feather-icons');

class FloatingUnit {

  public scrollFactor : number;
  public baseLeft : number;
  public baseTop : number;
  public baseScroll : number;
  public scaleFactor : number;
  public fixed : boolean = false;
  public fixedTop : number = 0;
  public fixedLeft : number = 0;
  public fixedScale : number = 1;
  public domElement : HTMLElement;

  constructor(domElement : HTMLElement, index : number, container : HTMLElement, content : HTMLElement) {
    this.domElement = domElement;
    this.domElement.classList.add('floating-unit');
    this.domElement.classList.add(["red", "purple", "green", "yellow"][index % 4]);
    this.scrollFactor = random(1, 10);
    this.baseScroll = 0;

    // We add a default position of the units to top, right, bottom or left of the content.
    let minTop = 50;
    let minLeft = 20;
    let maxRight = container.offsetWidth - 20;
    let maxBottom = container.offsetHeight - 20;
    let contentLeft = content.offsetLeft;
    let contentRight = content.offsetLeft + content.offsetWidth;
    let contentTop = content.offsetTop;
    let contentBottom = content.offsetTop + content.offsetHeight;
    let default_area = random(0, 3);

    // LEFT
    if(default_area == 0) {
      this.baseLeft = random(minLeft, contentLeft);
      this.baseTop = random(minTop, maxBottom);
    }

    // TOP
    if(default_area == 1) {
      this.baseLeft = random(minLeft, maxRight);
      this.baseTop = random(minTop, contentTop);
    }

    // RIGHT
    if(default_area == 2) {
      this.baseLeft = random(contentRight, maxRight);
      this.baseTop = random(minTop, maxBottom);
    }

    // BOTTOM
    if(default_area == 3) {
      this.baseLeft = random(minLeft, maxRight);
      this.baseTop = random(contentBottom, maxBottom);
    }


    this.scaleFactor = random(5, 10) / 10;
    document.body.appendChild(this.domElement);
    return this;
  }

  public update() {

    if(this.fixed) {
      this.domElement.style.top = this.fixedTop + "px";
      this.domElement.style.left = this.fixedLeft + "px";
      this.domElement.style.transform = "scale(" + (this.fixedScale) + ")";
    } else {

      if(this.baseLeft < 20) {
        this.baseLeft = 20;
      }

      if(this.baseLeft > window.innerWidth - 20) {
        this.baseLeft = window.innerWidth - 20;
      }

      if(this.baseTop < 20) {
        this.baseTop = 20;
      }

      if(this.baseTop > window.innerHeight - 20) {
        this.baseTop = window.innerHeight - 20;
      }

      this.domElement.style.left = this.baseLeft + "px";
      this.domElement.style.top = this.baseScroll + this.baseTop + "px";
      this.domElement.style.transform = "scale(" + (this.scaleFactor) + ")";
      this.domElement.style.opacity = '1';
    }
  }
}

let units : FloatingUnit[] = [];

/*for(let i = 0; i < 20; i++) {
  units.push(new FloatingUnit(
    document.createElement('div'),
    i,
    document.body.querySelector('.front-intro'),
    document.body.querySelector('.front-intro > .main')
  ));
}*/

let centerPoint1 = <HTMLElement>document.body.querySelector('#units-center-point1');
let centerPoint1Top = centerPoint1.offsetTop;
let centerPoint1Height = centerPoint1.offsetTop + window.innerHeight;

window.addEventListener(
  "scroll",
  throttle(100, () => {
    units.forEach((unit : FloatingUnit) => {

      if(window.scrollY > centerPoint1Top - 300 && window.scrollY < centerPoint1Height - 500) {

        let rect = centerPoint1.getBoundingClientRect();
        unit.fixedLeft = rect.left + rect.width / 2;
        unit.fixedTop = centerPoint1Top + rect.height / 2;
        unit.fixedScale = 1;
        unit.fixed = true;
        unit.domElement.style.position = 'absolute';
        unit.domElement.style.display = 'block';
      } else if(window.scrollY > centerPoint1Height - 500) {
        unit.domElement.style.display = 'none';
      } else {
        unit.baseScroll = window.scrollY / unit.scrollFactor;
        unit.domElement.style.position = 'fixed';
        unit.domElement.style.display = 'block';
        unit.fixed = false;
      }

      unit.update();
    });

    if(window.scrollY > 20) {
      document.body.classList.add('scroll');
    } else {
      document.body.classList.remove('scroll');
    }
  }),
  {passive: true}
);

units.forEach((unit : FloatingUnit, index) => {
  delay(500 * index, () => { unit.update(); });
});

feather.replace();