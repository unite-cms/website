import random = require("lodash/fp/random");
import each = require("lodash/fp/each");
import feather = require('feather-icons');

import FloatingUnit from "./components/FloatingUnit";
import ScrollManager from "./components/ScrollManager";
import BodyScrollClassHandler from "./components/BodyScrollClassHandler";
import {CircleUnitsScene, FloatingUnitScene, GroupUnitsScene} from "./components/FloatingUnitScene";
import delay = require("lodash/fp/delay");


let scroll = new ScrollManager();
let units : FloatingUnit[] = [];
let scenes : FloatingUnitScene[] = [];

if(document.body.querySelector('.group-units-scene .computer-frame')) {
  scenes.push(new GroupUnitsScene(document.body.querySelector('.group-units-scene .computer-frame'), units));
}

if(document.body.querySelector('.circle-units-scene .computer-frame')) {
  scenes.push(new CircleUnitsScene(document.body.querySelector('.circle-units-scene .computer-frame'), units));
}

if(document.body.querySelector('.group2-units-scene .computer-frame')) {
  scenes.push(new CircleUnitsScene(document.body.querySelector('.group2-units-scene .computer-frame'), units));
}

scroll.registerHandler(new BodyScrollClassHandler());
each((scene : FloatingUnitScene) => {
  scroll.registerHandler(scene);
}, scenes);


// Find initial position of units
let findUnitPosition = function(index : number, rect : ClientRect, windowWidth : number, windowHeight : number) {

  let pos = [0, 0];

  // Check if there is no space left and right from rect. If not, render all units in the top left and right area.
  if(rect.left < 50 || windowWidth - rect.right < 50) {
    if(random(0, 1) === 0) {
      pos[0] = random(5, (windowWidth / 2) - 80);
    } else {
      pos[0] = random((windowWidth / 2) + 40, windowWidth - 40);
    }
    pos[1] = random(50, 130);
  }

  // If there is space left and right from the rect
  else {
    if(random(0, 1) === 0) {
      pos[0] = random(5, (windowWidth / 2) - (rect.width / 2));
    } else {
      pos[0] = random((windowWidth / 2) + (rect.width / 2), windowWidth - 40);
    }

    pos[1] = random(100, windowHeight - 100);
  }

  return pos;
};

if(document.body.querySelector('.front-intro article.main')) {
  let rect = document.body.querySelector('.front-intro article.main').getBoundingClientRect();
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  each((element: HTMLElement) => {
    let initialPosition = findUnitPosition(units.length + 1, rect, windowWidth, windowHeight);
    let unit = new FloatingUnit(element, units.length + 1, initialPosition[0], initialPosition[1]);
    units.push(unit);
    scroll.registerHandler(unit);
  }, document.body.querySelectorAll('.floating-unit'));
}





feather.replace();

window.onload = function(){

  units.forEach((unit : FloatingUnit, index) => {
    unit.setToInitialPosition();
  });

  scroll.updateHandler();
  delay(200, () => {
    document.body.classList.add(('window-loaded'));
  });
};