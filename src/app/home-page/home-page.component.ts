import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})

export class homePage implements OnInit {
   
    constructor( private router: Router) {
  
      }
  
    ngOnInit(){
  
    }
  
  }

