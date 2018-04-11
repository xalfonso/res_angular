import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Student} from './student';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/spring-hisperon-1.0-SNAPSHOT/student/json');
  }
}
