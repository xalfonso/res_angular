import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css'],
  providers: []
})
export class InsertUserComponent implements OnInit {
  name: String;
  surname: String;
  email: String;
  skype: String;
  facebook: String;
  numberClick = 0;

  constructor(private messageService: MessageService) {
  }

  count() {
    this.numberClick++;
  }

  ngOnInit() {
  }

  addMessageFromSpecificModuleSuccess() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

}
