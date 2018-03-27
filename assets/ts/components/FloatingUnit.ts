import random = require("lodash/fp/random");

export default class FloatingUnit {

  public scrollFactor : number = 1;
  public baseLeft : number = 50;
  public baseTop : number = 50;
  public baseScroll : number = 0;
  public scaleFactor : number = 1;
  public fixed : boolean = false;
  public fixedTop : number = 0;
  public fixedLeft : number = 0;
  public fixedScale : number = 1;
  public domElement : HTMLElement;

  constructor(domElement : HTMLElement, index : number) {
    this.domElement = domElement;
    this.scrollFactor = random(1, 10);
    this.scaleFactor = random(5, 10) / 10;
    document.body.appendChild(this.domElement);
    return this;
  }

  public update(scroll : number) {

    this.domElement.style.opacity = '1';

    if(this.fixed) {
      this.domElement.style.top = this.fixedTop + "px";
      this.domElement.style.left = this.fixedLeft + "px";
      this.domElement.style.transform = "scale(" + (this.fixedScale) + ")";
      this.domElement.style.position = 'absolute';

    } else {

      this.baseScroll = scroll / this.scrollFactor;

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
      this.domElement.style.position = 'fixed';
    }
  }
}