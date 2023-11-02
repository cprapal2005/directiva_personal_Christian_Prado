import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directivaPersonalizada]'
})

export class DirectivaPersonalizadaDirective {

  @Input() directivaPersonalizada: { colorTexto: string, colorBorde: string } = { colorTexto: 'initial', colorBorde: 'initial' };


  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover') onMouseOver() {

    this.renderer.setStyle(this.el.nativeElement, 'border-style', 'solid');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.directivaPersonalizada.colorBorde);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.directivaPersonalizada.colorTexto);
    this.el.nativeElement.textContent = this.el.nativeElement.textContent.toUpperCase();

  }

  @HostListener('mouseout') onMouseOut() {

    this.renderer.setStyle(this.el.nativeElement, 'border-style', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'initial');
    this.el.nativeElement.textContent = this.el.nativeElement.textContent.toLowerCase();

  }

}
