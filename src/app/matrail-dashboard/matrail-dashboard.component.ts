import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ToastrService, ToastRef } from 'ngx-toastr';

@Component({
  selector: 'app-matrail-dashboard',
  templateUrl: './matrail-dashboard.component.html',
  styleUrls: ['./matrail-dashboard.component.less'],
})
export class MatrailDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  loading:boolean =false;
  constructor(private breakpointObserver: BreakpointObserver,private tosterservice :ToastrService) {}

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Clicks', cols: 1, rows: 1 },
          { title: 'Impression', cols: 1, rows: 1 },
          { title: 'Install', cols: 1, rows: 1 },
          { title: 'Transaction', cols: 1, rows: 1 },
          { title: 'Table', cols: 2, rows: 2 }
        ];
      }

      return [
        { title: 'Clicks', cols: 1, rows: 1 },
        { title: 'Impression', cols: 1, rows: 1 },
        { title: 'Install', cols: 1, rows: 1 },
        { title: 'Transaction', cols: 1, rows: 1 },
        { title: 'Table', cols: 2, rows: 2 },

      ];
    })
  );

  LoadData()
  { 
    this.tosterservice.info('Updating Dashboard...','System Update!',
    {
      positionClass: 'toast-center-center',
      timeOut:5000
    })
    console.log("Locad Click"+this.loading);
    this.loading = !this.loading;
    setTimeout(() => {
      this.loading = !this.loading;
      this.tosterservice.success('Dashboard Updated Successfully!','System Update!')
    },5000);
     
   
  }

  
}
