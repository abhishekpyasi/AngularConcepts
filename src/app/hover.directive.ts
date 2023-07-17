import { DOCUMENT } from "@angular/common";
import {
  Directive,
  ElementRef,
  OnInit,
  Inject,
  Renderer2,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appHover]",
})
export class HoverDirective implements OnInit {
  color: string = "cyan";

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "yellow"
    );
  }

  @HostListener("mouseleave") onMouse() {
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "green"
    );
  }
}
