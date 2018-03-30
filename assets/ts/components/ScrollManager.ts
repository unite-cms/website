import throttle = require("lodash/fp/throttle");

export interface ScrollHandler {
  update(scroll : number)
}

export default class ScrollManager {

  event : string = 'scroll';
  throttle : number = 100;
  scrollHandler : ScrollHandler[] = [];
  initialized : boolean = false;

  constructor() {
    window.addEventListener(this.event, throttle(this.throttle, () => {
      this.updateHandler();
    }));
  }

  public updateHandler() {
    this.scrollHandler.forEach((handler : ScrollHandler) => {
      handler.update(window.scrollY);
    });
  }

  public registerHandler(handler : ScrollHandler) {
    if(this.scrollHandler.indexOf(handler) === -1) {
      this.scrollHandler.push((handler));
    }
  }

}