import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { Event } from '@angular/router';

@Component({
  selector: 'contact-me',
  templateUrl: 'contact-me.component.html',
  styleUrls: ['contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  //secretKey: string = "mqkowdyz";
  emailForm!: FormGroup;
  phone: string = '';

  constructor(private fb: FormBuilder, private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
      message: new FormControl('')
    })
  }
  
  getEmailErrorMessage() {
    if (this.emailForm.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getPhoneErrorMessage() {
    if (this.emailForm.controls['phone'].hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailForm.controls['phone'].hasError('pattern') ? 'Not a valid phone number' : '';
  }

  getMessageErrorMessage() {
    return this.emailForm.controls['message'].hasError('required') ? 'You must enter a value' : '';
  }

  onDelete(event: any) {
    let inputElement = (event.target as HTMLInputElement);
    let pos = inputElement.selectionStart;
    setTimeout(() => inputElement.selectionStart = inputElement.selectionEnd = pos, .5);
  }

  addHyphen() {
    for (let i = 0; i < this.phone.length; i++) {
      if (i == 3)
        this.phone = this.phone.slice(0, i) + '-' + this.phone.slice(i, this.phone.length);
      else if (i == 7)
        this.phone = this.phone.slice(0, i) + '-' + this.phone.slice(i, this.phone.length);
      else if (this.phone[i] == '-')
        this.phone = this.phone.slice(0, i) + '' + this.phone.slice(i + 1, this.phone.length);
    }
  }

  onSubmit(formDirective: any) {
    /*Set the url with your secretKey from formspree.io*/
    let url = this.baseUrl + "email/";
    let email: Email = {
      emailAddress: this.emailForm.value.email,
      phoneNumber: this.emailForm.value.phone,
      message: this.emailForm.value.message
    }
    /*Set Headers*/
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
      })
    };

    //let data = `emailAddress=${this.emailForm.value.email}&message=${this.emailForm.value.message}&phone=${this.emailForm.value.phone}`;
    let errorMessage: string = "";

    console.log(email.emailAddress + "\n" + email.message + "\n" + email.phoneNumber);

    if (this.emailForm.valid) {
      this.httpClient.post<Email>(url, email, httpOptions).subscribe({
        next: email => {
          console.log("email sent" + JSON.stringify(email));
        },
        error: error => {
          errorMessage = error.message;
          console.log('error!', errorMessage);
        }
      })

      console.log(`Message Sent!`);
      this.emailForm.reset();
      formDirective.resetForm();
    }
    else {
      console.log("Form Not Submitted!\nPlease Fill All Fields!");
    }
  }
}

interface Email {
  emailAddress: string,
  phoneNumber: string,
  message: string
}
