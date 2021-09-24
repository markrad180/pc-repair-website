import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {
  name: String = '';
  email: String = '';
  message: String = '';

  constructor() { }

  ngOnInit(): void {
    let something = '';
  }

  submitForm() {
    //grab all the fields and their values
    const message = `my name is ${this.name}. My email is ${this.email}. My message is ${this.message}.`;
    alert(message);

  }

}
