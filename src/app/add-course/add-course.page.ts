import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCoursesService } from '../list-courses.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

 
  
  constructor(private courseSer: ListCoursesService, private router: Router) {}

  ngOnInit() {}
  // 
  onSubmit(newCourse:any) {
    this.courseSer.addCourse(newCourse);
    this.router.navigateByUrl('/home');
  }
  }
  