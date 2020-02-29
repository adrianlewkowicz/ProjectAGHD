import { Component, AfterViewInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  currentSection = 'section1';

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

   onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }
}
