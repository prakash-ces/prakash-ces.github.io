import { Component } from '@angular/core'
import { TimelineService } from './../../common/timeline.service'

@Component({
  // selector: 'header-bar',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  constructor(private timelinedata: TimelineService){
    let posts_data = timelinedata.getPosts()
    console.log(posts_data);
  }

}
