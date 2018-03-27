import FloatingUnit from "./FloatingUnit";

export abstract class FloatingUnitScene {

  visibleSection : HTMLElement;
  active : boolean = false;
  units : FloatingUnit[] = [];
  protected trashhold : number = 250;

  constructor(visibleSection : HTMLElement, units : FloatingUnit[]) {
    this.visibleSection = visibleSection;
    this.units = units;
  }

  protected abstract setActive()
  protected abstract setInactive()

  public update() {
    let rect = this.visibleSection.getBoundingClientRect();
    if(rect.top < this.trashhold && rect.bottom > this.trashhold - 10) {
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
    });
  }

  protected setInactive() {
    console.log("SET INACTIVE FRONT");
  }

}

export class GroupUnitsScene extends FloatingUnitScene {
  protected setActive() {

    let offsetTop = this.visibleSection.offsetTop + this.visibleSection.querySelector('.computer-frame').offsetTop + this.visibleSection.querySelector('.computer-frame').clientHeight / 2;

    this.units.forEach((unit : FloatingUnit, index) => {
      unit.fixed = true;
      unit.fixedLeft = 80 + (index * 30);
      unit.fixedTop = offsetTop + 30;
    });
  }

  protected setInactive() {
    console.log("SET INACTIVE GROUP UNIT");
  }

}