
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id:any;
  //Sou2el: chnia el faraq bin  tabCourses:any = []; w  tabCourses = [];
  tabCourses:any = [];
  course: any;


  // Injection de dépandance
  constructor(private courseSer: ListCoursesService) {}
  // initialiser le composant
  ngOnInit() {
    this.tabCourses = this.courseSer.getAllCourses();
  }
  
}
