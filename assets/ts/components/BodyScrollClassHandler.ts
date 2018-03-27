import {ScrollHandler} from "./ScrollManager";

export default class BodyScrollClassHandler implements ScrollHandler {

  scrollClass : string = 'scroll';
  scrollLimit : number = 20;
  hasScrolled : boolean = false;

  update(scroll: number) {
    if(scroll < this.scrollLimit && this.hasScrolled) {
      document.body.classList.remove(this.scrollClass);
      this.hasScrolled = false;
    }

    if(scroll >= this.scrollLimit && !this.hasScrolled) {
      document.body.classList.add(this.scrollClass);
      this.hasScrolled = true;
    }
  }

}