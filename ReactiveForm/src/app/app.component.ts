import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';

  objectKeys = Object.keys;

  countryList = {1: 'India', 2: 'Sri Lanka', 3: 'New Zealand'};

  // countryList = ['India', 'America'];
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
