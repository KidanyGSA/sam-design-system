import { Component } from '@angular/core';
import { VideoPlayerSampleData } from './video-player-sample-data';

@Component({
  selector: `video-basic-demo`,
  templateUrl: './video-basic.component.html',
  styleUrls: ['./video-basic.component.scss']
})

export class VideoBasic {
  public data = VideoPlayerSampleData;
}
