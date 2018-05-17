import {ScrollHandler} from "./ScrollManager";

export default class UiScreenScrollHandler implements ScrollHandler {

  initialized : boolean = false;
  section : HTMLElement = null;
  overlays : NodeListOf<HTMLElement>;

  update(scroll: number) {

    if(!this.initialized) {
      this.section = <HTMLElement>document.getElementsByClassName('section-ui-screenshot')[0];
      this.overlays = this.section.querySelectorAll('img[class^=overlay]');
      this.initialized = true;
      for(let i = 0; i < this.overlays.length; i++) {
        this.overlays[i].classList.add('initialized');
      }
    }

    if(this.section) {
      let rect = this.section.getBoundingClientRect();

      if(rect.top < window.innerHeight - 100) {
        this.section.style.opacity = '' + (window.innerHeight - 100 - rect.top) / 300;
      }

      if(rect.top < (window.innerHeight / 4)) {
        for(let i = 0; i < this.overlays.length; i++) {
          this.overlays[i].classList.add('visible');
        }
      } else {
        for(let i = 0; i < this.overlays.length; i++) {
          this.overlays[i].classList.remove('visible');
        }
      }
    }
  }

}