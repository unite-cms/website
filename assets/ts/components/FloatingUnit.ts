import random = require("lodash/fp/random");

export default class FloatingUnit {

  public scrollFactor : number = 1;
  public top : number = 200;
  public left: number = 200;
  public scaleFactor : number = 1;
  public fixed : boolean = false;
  public domElement : HTMLElement;

  constructor(domElement : HTMLElement, index : number) {
    this.domElement = domElement;
    this.scrollFactor = random(100, 110) / 100;
    this.scaleFactor = random(5, 10) / 10;
    document.body.appendChild(this.domElement);
    return this;
  }

  public update(scroll : number) {
    let scale = this.fixed ? 1 : this.scaleFactor;
    let y = this.fixed ? this.top : this.top + (scroll * this.scrollFactor);
    let x = this.left;

    this.domElement.style.opacity = '1';
    this.domElement.style.transform = 'translate3d(0,0,0) translateX(' + x + 'px) translateY(' + y + 'px) scale(' + scale + ')';
  }
}