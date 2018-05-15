import {ScrollHandler} from "./ScrollManager";
import Tween = require("component-tween");
import raf = require("component-raf");


export default class DocsMenuScrollHandler implements ScrollHandler {

  offset : number = -100;
  init : Boolean = false;
  nav : HTMLElement;
  blocks : NodeListOf<Element>;

  navScrollTo(y) {

    // setup tween
    let tween = Tween({y : this.nav.parentElement.scrollTop})
      .ease('out-circ')
      .to({y : y})
      .duration(100);

    // scroll
    tween.update((o) => {
      this.nav.parentElement.scrollTo(0, o.y);
    });

    function animate() {
      raf(animate);
      tween.update();
    }

    animate();

    return tween;
  }

  update(scroll: number) {

    if(!this.init) {
      this.init = true;
      this.nav = document.querySelector('.docs-navigation ul');
      this.blocks = document.querySelectorAll('.docs-content *[class*="anchor"]');
    }

    let wHeight = window.innerHeight;
    let found = false;

    if(this.nav && this.blocks.length > 0) {
      for(let i = this.blocks.length - 1 ; i >= 0; i--) {
        let top = this.blocks[i].nextElementSibling.getBoundingClientRect().top;
        if(!found && top - wHeight < this.offset) {
          let menuElement = this.nav.querySelector('a[href="#' + this.blocks[i].id + '"]');

          if(!menuElement.classList.contains('active')) {
            menuElement.classList.add('active');
            let navScroll = ((window.scrollY / document.body.clientHeight) * this.nav.clientHeight  - (wHeight / 4));
            this.navScrollTo(navScroll > 0 ? navScroll : 0);
          }

          found = true;
        } else {
          this.nav.querySelector('a[href="#' + this.blocks[i].id + '"]').classList.remove('active');
        }
      }
    }
  }

}