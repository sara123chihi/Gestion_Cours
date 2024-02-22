import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  SelectedCourse:any;
  tabCourses:any = [];
 

  constructor(private courseServ:ListCoursesService,
     private activatedRoute:ActivatedRoute,
    private router:Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    let SelectedId=this.activatedRoute.snapshot.paramMap.get('id');
    // lezem nhot SelectedId khater heya eli feha el valeur eli jeni mel url mta3 el Id.
    this.SelectedCourse=this.courseServ.getCourseById(SelectedId);
    // console.log("Selected Course:",this.SelectedCourse);
   

  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sur de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.courseServ.deleteCourse(this.SelectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
        'Non',
      ],
    });

    await alert.present();
  }

}
