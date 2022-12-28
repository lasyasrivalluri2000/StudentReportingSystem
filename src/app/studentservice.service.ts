import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private userlisturl:string
  private userposturl:string

students:Student[]=[]

  constructor(private http:HttpClient) {
    this.userlisturl='http://localhost:8080/api/getstudentreport';
    this.userposturl='http://localhost:8080/api/getstudentreport';

   }
   findAll():Observable<Student[]>{
    return this.http.get<Student[]>(this.userlisturl);
  }
  saveuser(students:Student){
    console.log(students.id+"-"+students.name+"-"+students.semester+"-"+students.english+"-"+students.math+"-"+students.science+"-"+students.totalavg);
    return this.http.post<Student>(this.userposturl,students);
  }
}
