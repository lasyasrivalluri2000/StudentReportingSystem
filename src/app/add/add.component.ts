import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  students!: Student;

  constructor(private studentserv:StudentserviceService) { 
this.students=new Student();
  }
  insertuserss(){
    console.log("students in ts",this.students);
    this.studentserv.saveuser(this.students).subscribe(result=>{
      console.log(result);
    });

}
}
