import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statement = false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  setVideo() {
    jarallax(document.querySelectorAll('.jarallax-my-video'), {
      speed: 0.2,
      videoSrc: 'https://vimeo.com/groups/freehd/videos/153749650'
    });
  }
  changeStatement() {
    this.statement = true;
    this.changeDetector.detectChanges();
    this.setVideo();
  }
}
