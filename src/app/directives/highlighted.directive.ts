import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted') isHighlighted = false;

  @Output()
  toggleHightlight = new EventEmitter();

  constructor() {
    console.log("directed created");

  }


  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  // Shorthand
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }
  // @HostBinding('style.border')
  // get cssStyles() {
  //   return '1px solid blue';
  // }

  // change attributs
  @HostBinding('attr.disabled')
  get disable() {
    return true
  }

  // edit native DOM event
  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);

    this.isHighlighted = true;
    this.toggleHightlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHightlight.emit(this.isHighlighted);
  }


  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHightlight.emit(this.isHighlighted);
  }
}
