import {Component, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  listStudent: Student[];


  constructor(private studentService: StudentService) {

  }

  ngOnInit(): void {
  }

  loadStudentList(): void {
    this.studentService.getAllStudent().subscribe(
      data => {
        this.listStudent = data;
        console.log('Mostrando la lista de estudiantes');
        console.log(this.listStudent);
      }
    );
  }
}
