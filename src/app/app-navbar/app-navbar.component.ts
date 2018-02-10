import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  isCollapsed = true;

  constructor() {
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
