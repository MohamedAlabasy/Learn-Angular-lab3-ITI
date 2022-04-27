import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() bgColor = "red"
  constructor(public ref: ElementRef) {
    // this.ref.nativeElement.style.background="red";
    this.ref.nativeElement.style.background = this.bgColor;
  }
  ngOnChanges() {
    this.ref.nativeElement.style.background = this.bgColor;
    // throw new Error('Method not implemented.');
  }

  @HostListener('mouseenter')
  changeColorEnter() {
    this.ref.nativeElement.style.background = "brown";
  }
  @HostListener('mouseleave')
  changeColorLeave() {
    this.ref.nativeElement.style.background = "aqua";
  }
}
