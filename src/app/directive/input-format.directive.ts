import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

@HostListener('focus') onfocus() {
console.log('focus');
}
@HostListener('blur') onblure() {
  console.log('blur');
}

@HostListener('mouseenter') onmouseenter() {
  this.el.nativeElement.style.backgroundColor = 'green';
  }

}
