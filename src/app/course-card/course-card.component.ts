import { CourseImageComponent } from './../course-image/course-image.component';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ContentChild, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { PrimeTemplate } from './PrimeTemplate';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit , AfterViewInit, AfterContentInit{

  @Input() course: Course;
  @Output() courseSelected = new EventEmitter<Course>();
  @Input() noImageTtpl: TemplateRef<any>
  // when on the content itself (not ng-content) we have tepmlate reference #courseImage
  @ContentChild('courseImage')
  image : CourseImageComponent;

  @ContentChildren('courseImage',{read:ElementRef})
  images:QueryList<CourseImageComponent>;


  // get tepmlate  using directive as a selector
  @ContentChild(PrimeTemplate)
  templates;


  // when we referencing the first coresponing component (not by template reference)
  // @ContentChild(CourseImageComponent, {read: ElementRef})
  // image : ElementRef;

  constructor() { }
  ngAfterContentInit(): void {
    console.log("courseImages:", this.images);
    console.log("templates:", this.templates);

  }

  ngAfterViewInit(): void {
    console.log("courseImage:", this.image);

  }

  ngOnInit(): void {
  }

  onCourseViewd() {
    this.courseSelected.emit(this.course);
  }

  cardStyle() {
    return {
      'text-decoration': 'underline',
      'background-image': `url(${this.course.iconUrl})`
    }
  }
  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      // return 'beginner'
      return ['beginner']
    }
    // return {
    //   'beginner': this.course.category == 'BEGINNER'
    // };
  }

}
