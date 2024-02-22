import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCoursesService {
  private listCourses=[{
    id:1,
    title:'Angular',
    author:'Anis Zouari',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
    keyword:['module', 'component', 'binding']
  },
  {
    id:2,
    title:'Android',
    author:'Nidhale Jelassi',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1200px-Android_logo_2019_%28stacked%29.svg.png',
    keyword:['activity', 'intent', 'xml']
  },

 
  
  ];
  constructor() { }


  getAllCourses(){
    return this.listCourses;
  }
  // find kn ma talqa chay traja3lek null filter taaml parcours un tableau el kol w kn ma talqash el 
  // hajja eli hachtek beha traja3lek tableau vide
  
  getCourseById(idC:any) {
    return this.listCourses.find((element) => element.id == idC);
  }

  addCourse(newCourse:any)
   {   // js orienté prototype: najem nzid w naqes kima nheb 
    newCourse.id=this.listCourses[this.listCourses.length-1].id+1;
    // newCourse["id"]=this.listCourses[this.listCourses.length-1]["id"]+1;
    // split transforme une chaine de caractère un tableau 
    newCourse.keyword=newCourse.keyword.split(',');
    this.listCourses.push(newCourse);


  }

  // deleteCourse(course: Course) {
  //   const index = this.courses.indexOf(course);
  //   if (index !== -1) {
  //      this.courses.splice(index, 1);
  //   }
  //  }
  
  // The indexOf() method returns the index of the first occurrence of the specified course in the array,
  deleteCourse(courseD:any){
    // findindex a3tyni un critère kima id w awel élément qui vérifie le critère yaatini el indice mte3ou 
    // indexof theb aal objet el kol w traja3lek el indice mte3ou  
    let index = this.listCourses.indexOf(courseD);
    // the splice() method is used to remove it from the array.
    this.listCourses.splice(index, 1);
    // 2eme méthode de suppression en utilisant filter besh tkhali aandha eli el id mta3hom != aala el idCourse
    // this.listCourses.filter((element)=>element.id != courseD.id);
   }
  
}
