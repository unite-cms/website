
import * as throttle from "lodash/fp/throttle";
import * as random from "lodash/fp/random";
import * as delay  from "lodash/fp/delay";

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

  constructor(domElement : HTMLElement, index : number) {
    this.domElement = domElement;
    this.domElement.classList.add('floating-unit');
    this.domElement.classList.add(["red", "purple", "green", "yellow"][index % 4]);
    this.scrollFactor = random(1, 10);
    this.baseScroll = 0;
    this.baseLeft = random(10, 1000);
    this.baseTop = random(10, 100);
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
      this.domElement.style.left = this.baseLeft + "px";
      this.domElement.style.top = this.baseScroll + this.baseTop + "px";
      this.domElement.style.transform = "scale(" + (this.scaleFactor) + ")";
    }
  }
}

let units : FloatingUnit[] = [];

for(let i = 0; i < 20; i++) {
  units.push(new FloatingUnit(document.createElement('div'), i));
}

let shiftElements = (units : FloatingUnit[]) => {
  units.forEach((unit : FloatingUnit) => {
    if(!unit.fixed) {
      unit.baseLeft += random(-10, 10);
      unit.baseTop += random(-10, 10);

      if (unit.baseLeft < 20) {
        unit.baseLeft = 20;
      }

      if (unit.baseTop < 20) {
        unit.baseTop = 20;
      }

      unit.update();
    }
  });

  delay(500, () => { shiftElements(units); });
};

window.addEventListener(
  "scroll",
  throttle(100, () => {
    units.forEach((unit : FloatingUnit) => {

      if(window.scrollY > 300 && window.scrollY < 1200) {
        unit.fixedLeft = 300;
        unit.fixedTop = 300;
        unit.fixedScale = 1;
        unit.fixed = true;
      } else {
        unit.baseScroll = window.scrollY / unit.scrollFactor;
        unit.fixed = false;
      }

      unit.update();
    });
  }),
  {passive: true}
);

shiftElements(units);