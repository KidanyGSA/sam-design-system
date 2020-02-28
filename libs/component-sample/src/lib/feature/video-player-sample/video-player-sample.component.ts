import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './video-player-sample.component.html',
  styleUrls: ['./video-player-sample.component.scss']
})

export class VideoPlayerSampleComponent implements OnInit {
  sourceWebm: string;
  sourceMp4: string;
  height: string;
  width: string;
	caption: string;
  poster: string;
	controls: string;
  id: string;
	seekInterval: number;
	debug: boolean;
  preload: string;
  imageSrc: string;
  videoTitle: string;
  videoCaptionOnDefault: boolean;

  constructor() {

   }

  ngOnInit() {
    this.sourceMp4 = "https://media.w3.org/2010/05/sintel/trailer.mp4";
    this.height = '360';
    this.width = "550";
    this.id = "sampleVid1";
    this.caption = '';
    this.poster = "http://www.kodaikanalholidays.com/img/packages/Ooty3Nights4DaysHolidayPackage.jpg";
    this.seekInterval = 20;
    this.debug = true;
    this.videoCaptionOnDefault = true;
    this.videoTitle = 'clips of stand-up comedy';
    this.preload = "none";
    this.imageSrc = "http://images.crestock.com/150000-159999/151031-xs.jpg";
  }
}
