import { COURSES } from './../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  coreCourses = COURSES

  @ViewChild('cardRef1')
  card: CourseCardComponent;


  @ViewChild('courseImage', {read: ElementRef})
  courseImage: ElementRef;


  // {read: ElementRef}: the vakues in the list are ElementRef
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<CourseCardComponent>;
  // @ViewChildren('cardsRef', {read: Eleme
  // @ViewChild('container')
  // containerDiv:ElementRef;


  /**
   *
   */
  constructor() {
  }
  onCoursesEdited(){
    this.coreCourses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
  })
  }
  ngAfterViewInit(): void {
    console.log("card", this.card)
    console.log("courseImage", this.courseImage)
    // this.coreCourses[0].description =" test"
    console.log("cards", this.cards);
    this.cards.changes.subscribe(changes => console.log(changes));


  }
  ngOnInit(): void {

  }



  onCourseViewd() {
    console.log("in app component")
  }

  onCourseSelected(course: Course) {
    console.log("cardRef1", this.card)
  }
}
