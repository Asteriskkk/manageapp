import { Component , OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'help-tab';
  isVisible = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    ); 

    constructor(private breakpointObserver: BreakpointObserver,private router: Router) {
      
    }
    ngOnInit() {
      console.log("roue")
            if(this.router.url === '/'){
              this.isVisible = true;
            }
           }

}
