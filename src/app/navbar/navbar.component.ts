import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  imageSrc = 'assets/images/vango-logo.svg'  

  constructor() { }

  ngOnInit(): void {
  }

}
