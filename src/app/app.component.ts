import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { HighlightedDirective } from './courses/directives/highlighted.directive';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;

    // @ViewChild('hilighter') hilighter: HighlightedDirective
    // in case of multiple custom directives applied to the same component, we can query them seperetly
    @ViewChild(CourseCardComponent, {read: HighlightedDirective}) highlightedDirective: HighlightedDirective

    constructor() {

    }

    ngAfterViewInit() {
      console.log('highlightedDirective',this.highlightedDirective)
    }

    onToggle($event){
      console.log("$event",$event);

    }
    onCourseSelected(course:Course) {
      console.log(course);

    }

}
