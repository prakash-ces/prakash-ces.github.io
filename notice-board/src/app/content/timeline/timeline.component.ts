import { Component } from '@angular/core'
import { TimelineService } from './../../common/timeline.service'

@Component({
  // selector: 'header-bar',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  posts_data ;
  constructor(private timelinedata: TimelineService){
    this.posts_data = timelinedata.getPosts()
  }
}
