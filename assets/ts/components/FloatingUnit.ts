import random = require("lodash/fp/random");

export default class FloatingUnit {

  public scrollFactor : number = 1;
  protected initialTop : number;
  protected initialLeft: number;
  public top : number;
  public left: number;
  public scaleFactor : number = 1;
  public fixed : boolean = false;
  public domElement : HTMLElement;

  constructor(domElement : HTMLElement, index : number, initialLeft : number = 100, initialTop : number = 100) {
    this.initialLeft = initialLeft;
    this.initialTop = initialTop;
    this.left = window.innerWidth / 2 - 10;
    this.top = 200;
    this.domElement = domElement;
    this.scrollFactor = random(100, 150) / 100;
    this.scaleFactor = random(3, 10) / 10;
    document.body.appendChild(this.domElement);
    return this;
  }

  public setToInitialPosition() {
    this.left = this.initialLeft;
    this.top = this.initialTop;
  }

  public update(scroll : number) {
    if(this.domElement.style.display !== 'none') {
      let scale = this.fixed ? 1 : this.scaleFactor;
      let y = this.fixed ? this.top : this.top + (scroll * this.scrollFactor);
      let x = this.left;

      if(x > document.body.clientWidth) {
        x = document.body.clientWidth;
      }

      if(y > document.body.clientHeight) {
        y = document.body.clientHeight;
      }

      this.domElement.style.opacity = '1';
      this.domElement.style.transform = 'translate3d(0,0,0) translateX(' + x + 'px) translateY(' + y + 'px) scale(' + scale + ')';
    }
  }
}