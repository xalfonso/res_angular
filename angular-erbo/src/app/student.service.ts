import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Student} from './student';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('https://aplpre.favorita.ec/springmvc/student/json');
  }
}
