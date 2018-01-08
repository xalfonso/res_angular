import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, CustomValidators.validateEmail]],
            content: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    submitForm(): void {
        console.log(this.contactForm);
    }

    addMessageSuccess() {
        console.log("call addMessageSuccess");
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
    }

    addMessageInfo() {
        console.log("call addMessageInfo");
        this.messageService.add({severity: 'info', summary: 'Service Message', detail: 'Via MessageService'});
    }

    addMessageWarning() {
        console.log("call addMessageWarning");
        this.messageService.add({severity: 'warn', summary: 'Service Message', detail: 'Via MessageService'});
    }

    addMessageError() {
        console.log("call addMessageError");
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
    }

    clearMessages() {
        this.messageService.clear();
    }
}
