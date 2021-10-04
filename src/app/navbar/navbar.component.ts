import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navBurger', {static: true}) navBurger!: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    let something = '';
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

}
