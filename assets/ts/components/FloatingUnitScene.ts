import FloatingUnit from "./FloatingUnit";

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

    let rect = this.visibleSection.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    let space = this.units[0].domElement.clientWidth;
    let small_device = space < 20;
    let centerX = rect.left + (width) / 2;
    let centerY = window.scrollY + rect.top + (height) / 2 - (small_device ? 0 : (height * 0.02));
    let w1 = width / 100;
    let h1 = height / 100;

    this.units.forEach((unit : FloatingUnit, index) => {
      unit.fixed = true;
      unit.left = centerX;
      unit.top = centerY;

      if(index % 4 == 0) {
        unit.left = centerX - w1 * (small_device ? 21 : 30);
      }

      if(index % 4 == 1) {
        unit.left = centerX - w1 * (small_device ? 7 : 10);
      }

      if(index % 4 == 2) {
        unit.left = centerX + w1 * (small_device ? 7 : 10);
      }

      if(index % 4 == 3) {
        unit.left = centerX + w1 * (small_device ? 21 : 30);
      }

      if(index < 4) {
        unit.top = centerY - h1 * (small_device ? 15 : 13.5);
      } else if(index < 8) {
        unit.top = centerY - h1 * (small_device ? -5 : 4.5);
      } else if(index < 12) {
        if(!small_device) {
          unit.top = centerY + h1 * 4.5;
        }
      } else {
        if(!small_device) {
          unit.top = centerY + h1 * 13.5;
        }
      }
    });
  }
}

export class CircleUnitsScene extends FloatingUnitScene {
  protected setActive() {

    let rect = this.visibleSection.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    let space = this.units[0].domElement.clientWidth;
    let small_device = space < 20;
    let centerX = rect.left + (width) / 2;
    let centerY = window.scrollY + rect.top + (height) / 2 - (small_device ? 0 : (height * 0.02));

    this.units.forEach((unit : FloatingUnit, index) => {
      unit.fixed = true;
      unit.left = centerX + Math.cos((index / (small_device ? 3 : 8)) * Math.PI) * (space * (small_device ? 4 : 6));
      unit.top = centerY + Math.sin((index / (small_device ? 3 : 8)) * Math.PI) * (space * (small_device ? 4 : 6));
    });
  }
}

export class RowUnitsScene extends FloatingUnitScene {
  protected setActive() {

    let rect = this.visibleSection.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;
    let space = this.units[0].domElement.clientWidth;
    let small_device = space < 20;
    let centerX = rect.left + (width) / 2;
    let centerY = window.scrollY + rect.top + (height) / 2 - (small_device ? 0 : (height * 0.02));
    let w1 = width / 100;
    let h1 = height / 100;

    this.units.forEach((unit : FloatingUnit, index) => {
      unit.fixed = true;
      unit.top = centerY;
      unit.left = window.innerWidth + 20;

      if(index % 4 == 1) {
        unit.left = centerX - w1 * (small_device ? 21 : 30) + (index * (small_device ? 21 : 30));
      }
    });
  }
}

export class FinishScene extends FloatingUnitScene {
  protected setActive() {
    this.units.forEach((unit : FloatingUnit, index) => {
      unit.domElement.style.display = 'none';
    });
  }
  protected setInactive() {
    this.units.forEach((unit : FloatingUnit, index) => {
      unit.domElement.style.display = 'block';
    });
  }
}