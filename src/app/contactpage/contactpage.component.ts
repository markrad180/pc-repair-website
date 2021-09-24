import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {
  name: String | undefined;
  email: String | undefined;
  message: String | undefined;

  constructor() { }

  ngOnInit(): void {
    let something = '';
  }

  submitForm() {
    //grab all the fields and their values

  }

}
