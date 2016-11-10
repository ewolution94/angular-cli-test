import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})

export class EditorComponent implements AfterViewInit {

  constructor(private location: Location, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://localhost:4200/assets/js/start-summernote.js';
    this.elementRef.nativeElement.appendChild(s);
  }

  goBack(): void {
    this.location.back();
  }
}
