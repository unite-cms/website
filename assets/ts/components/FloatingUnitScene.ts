import FloatingUnit from "./FloatingUnit";

export abstract class FloatingUnitScene {

  visibleSection : HTMLElement;
  active : boolean = false;
  units : FloatingUnit[] = [];

  constructor(visibleSection : HTMLElement, units : FloatingUnit[]) {
    this.visibleSection = visibleSection;
    this.units = units;
  }

  protected setActive() {}
  protected setInactive() {
    this.units.forEach((unit : FloatingUnit) => {
      unit.fixed = false;
      unit.left = 200;
      unit.top = 200;
    });
  }

  public update() {
    let rect = this.visibleSection.getBoundingClientRect();
    if(window.innerHeight - rect.bottom >= 0 && ((window.scrollY < 20 && rect.top >= 0) || (window.scrollY >= 20 && rect.top >= 50))) {
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

export class FrontIntroScene extends FloatingUnitScene {
  protected setActive() {
    this.units.forEach((unit : FloatingUnit) => {
      unit.fixed = false;
      unit.left = 200;
      unit.top = 200;
    });
  }
}

export class GroupUnitsScene extends FloatingUnitScene {
  protected setActive() {
    let offsetTop = window.scrollY + this.visibleSection.getBoundingClientRect().top;
    this.units.forEach((unit : FloatingUnit, index) => {
      unit.fixed = true;
      unit.left = 80 + (index * 30);
      unit.top = offsetTop + 30;
    });
  }
}