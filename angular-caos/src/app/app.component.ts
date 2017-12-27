import {Component} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';
  valorA = 0;
  valorB = 0;
  sum: number;

  add() {
    this.sum = +this.valorA + +this.valorB;
  }

  constructor(private messageService: MessageService) {
  }

  addMessageSuccess() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

  addMessageInfo() {
    this.messageService.add({severity: 'info', summary: 'Service Message', detail: 'Via MessageService'});
  }

  addMessageWarning() {
    this.messageService.add({severity: 'warn', summary: 'Service Message', detail: 'Via MessageService'});
  }

  addMessageError() {
    this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
  }

  clearMessages() {
    this.messageService.clear();
  }
}
