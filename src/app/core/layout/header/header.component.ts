import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'karios-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    // Empty
   }

  ngOnInit(): void {
    console.log("Comment avoid error");
  }

}