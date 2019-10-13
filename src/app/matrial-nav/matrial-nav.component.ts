import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {OverlayContainer} from '@angular/cdk/overlay';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animateChild, group, animate, animation } from '@angular/animations';
import { routerAnimation } from './animation';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-matrial-nav',
  templateUrl: './matrial-nav.component.html',
  styleUrls: ['./matrial-nav.component.less'],
  animations: [routerAnimation()],
})


export class MatrialNavComponent implements OnInit {

  
  isDarkmodeActivated:boolean=false;

  constructor(private breakpointObserver: BreakpointObserver,private tosterservice:ToastrService) {
        
    if(localStorage.getItem("isDarkModeactivated") != null)
      {
        this.isDarkmodeActivated = !this.isDarkmodeActivated;
      }
      }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
 ngOnInit()
 {
  this.tosterservice.success( 'Dashboard created successfully!','System Update!');
 } 

  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }
  
  ActivateDarktheme()
  {
    if(localStorage.getItem("isDarkModeactivated") != null)
    {
       localStorage.removeItem("isDarkModeactivated");
       this.tosterservice.warning('Dark Mode Deativated!','System Update!' );
    }
    else
    {
      localStorage.setItem("isDarkModeactivated","ture"); 
      this.tosterservice.info( 'Dark Mode Activated!','System Update!');
    }
      
       this.isDarkmodeActivated = !this.isDarkmodeActivated;
       
  }
   
}
