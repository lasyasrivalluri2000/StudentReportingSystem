import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
students: Student[]=[];

  constructor(
    private studentsserv:StudentserviceService
  ) { }

  ngOnInit() {

  }
  loaduserdata(){
    this.studentsserv.findAll().subscribe(data =>{
      console.log(data);
      this.students=data;
  });

}
}
