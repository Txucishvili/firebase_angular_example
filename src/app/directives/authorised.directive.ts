import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer, Renderer2} from '@angular/core';
import {InsidePageComponent} from '../inside-page/inside-page.component';
import {TickerService} from '../services/ticker.service';
import {AuthService} from '../services/auth.service';

@Directive({
  selector: '[authEd]'
})
export class TickerDirective implements OnChanges, OnInit {

  @Input('authEd') authEd: any;

  private $matCard;

  constructor(
    private targetEl: ElementRef,
    private renderer: Renderer,
    private tickerService: TickerService,
    private authService: AuthService
  ) {
  }

  ngOnChanges() {

  }

  ngOnInit() {
    console.log('Directive init');
    this.renderer.setElementStyle(this.targetEl.nativeElement, 'display', 'none');
    this.authService.checkStatus.subscribe(resp => {
      if (resp) {
        this.renderer.setElementStyle(this.targetEl.nativeElement, 'display', 'none');
      } else {
        this.renderer.setElementStyle(this.targetEl.nativeElement, 'display', 'block');

      }
    });
  }

}
