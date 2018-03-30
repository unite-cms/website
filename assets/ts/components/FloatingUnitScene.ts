import FloatingUnit from "./FloatingUnit";
import random = require("lodash/fp/random");

export abstract class FloatingUnitScene {

  visibleSection : HTMLElement;
  active : boolean = false;
  minVisiblePixelsEnter : number = 300;
  minVisiblePixelsLeave : number = 200;
  units : FloatingUnit[] = [];

  constructor(visibleSection : HTMLElement, units : FloatingUnit[]) {
    this.visibleSection = visibleSection;
    this.units = units;
  }

  protected setActive() {}
  protected setInactive() {
    this.units.forEach((unit : FloatingUnit) => {
      unit.fixed = false;
      unit.setToInitialPosition();
    });
  }

  public update(scroll : number) {
    let rect = this.visibleSection.getBoundingClientRect();

    // get center point of visible section.
    let centerPoint = rect.top + (rect.height / 2);

    // This area is active, if centerPoint is not passed and top reached the screen.
    if(rect.top < this.minVisiblePixelsEnter && centerPoint > this.minVisiblePixelsLeave) {
      if(!this.active) {
        this.active = true;
        this.setActive();
      }
    } else {
      if(this.active) {
        this.active = false;
        this.setInactive();
      }
    }
  }
}

export class GroupUnitsScene extends FloatingUnitScene {
  protected setActive() {
    let offsetTop = window.scrollY + this.visibleSection.getBoundingClientRect().top + this.visibleSection.getBoundingClientRect().height / 2;
    let offsetLeft = this.visibleSection.getBoundingClientRect().left + this.visibleSection.getBoundingClientRect().width / 2;
    this.units.forEach((unit : FloatingUnit, index) => {
      unit.fixed = true;
      unit.left = offsetLeft;
      unit.top = offsetTop;
    });
  }
}