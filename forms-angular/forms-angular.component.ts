import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-angular',
  templateUrl: './forms-angular.component.html',
  styleUrls: ['./forms-angular.component.css']
})
export class FormsAngularComponent {
formData: any = [];

  firstName: any;
  lastName:any;
  userName: any;
  Email:any;
  Password:any;
  confirmPassword:any;
  phoneNumber:any;
  
  constructor() {
  
  }
  submit() {
    var formDetails = {
      'firstName': this.firstName,
      'lastName':this.lastName,
      'userName':this.userName,
      'Email':this.Email,
      'Password':this.Password,
      'confirmPassword':this.confirmPassword,
      'phoneNumber':this.phoneNumber
    }
    this.formData.push(formDetails);
    console.log(this.formData);
    this.firstName = null;
  this.lastName = null;
  this.userName = null;
  this.Email = null;
  this.Password = null;
  this.confirmPassword = null;
  this.phoneNumber = null;
     
  }
}
