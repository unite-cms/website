import random = require("lodash/fp/random");
import throttle = require("lodash/fp/throttle");
import delay = require("lodash/fp/delay");
import feather = require('feather-icons');

import FloatingUnit from "./components/FloatingUnit";
import ScrollManager from "./components/ScrollManager";
import BodyScrollClassHandler from "./components/BodyScrollClassHandler";
import {FloatingUnitScene, FrontIntroScene, GroupUnitsScene} from "./components/FloatingUnitScene";


let scroll = new ScrollManager();
let units : FloatingUnit[] = [];
let scenes : FloatingUnitScene[] = [
  new FrontIntroScene(document.body.querySelector('.front-intro'), units),
  new GroupUnitsScene(document.body.querySelector('.group-units-scene .computer-frame'), units),
  new GroupUnitsScene(document.body.querySelector('.circle-units-scene .computer-frame'), units)
];

scroll.registerHandler(new BodyScrollClassHandler());

scenes.forEach((scene : FloatingUnitScene) => {
  scroll.registerHandler(scene);
});

document.body.querySelectorAll('.floating-unit').forEach((element : HTMLElement) => {
  let unit = new FloatingUnit(element, units.length + 1);
  units.push(unit);
  scroll.registerHandler(unit);
});

/*for(let i = 0; i < 20; i++) {
  units.push(new FloatingUnit(
    document.createElement('div'),
    i,
    document.body.querySelector('.front-intro'),
    document.body.querySelector('.front-intro > .main')
  ));
}*/

/*let centerPoint1 = <HTMLElement>document.body.querySelector('#units-center-point1');
let centerPoint1Top = centerPoint1.offsetTop;
let centerPoint1Height = centerPoint1.offsetTop + window.innerHeight;*/

/*window.addEventListener(
  "scroll",
  throttle(100, () => {*/
    /*units.forEach((unit : FloatingUnit) => {

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
    });*/

    /*if(window.scrollY > 20) {
      document.body.classList.add('scroll');
    } else {
      document.body.classList.remove('scroll');
    }
  }),
  {passive: true}
);*/

/*if(window.scrollY > 20) {
  document.body.classList.add('scroll');
}*/

/*units.forEach((unit : FloatingUnit, index) => {
  delay(500 * index, () => { unit.update(); });
});*/

feather.replace();
scroll.updateHandler();