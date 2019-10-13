import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatrialNavComponent } from './matrial-nav/matrial-nav.component';
import { MatrailDashboardComponent } from './matrail-dashboard/matrail-dashboard.component';
import { MatrailTableComponent } from './matrail-table/matrail-table.component';
import { DragComponentComponent } from './drag-component/drag-component.component';
import { AngularformComponent } from './angularform/angularform.component';
import { AngularbuttonComponent } from './angularbutton/angularbutton.component';
import { MatrialStepperComponent } from './matrial-stepper/matrial-stepper.component';
import { AngularDialogComponent } from './angular-dialog/angular-dialog.component';
import { DailogComponentComponent } from './dailog-component/dailog-component.component';
import { MatrialDatepickerComponent } from './matrial-datepicker/matrial-datepicker.component';
import { MaterialImgComponent } from './material-img/material-img.component';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';
import { BaRadarChartComponent } from './ba-radar-chart/ba-radar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
const routes: Routes = [

  { path:'dashboard',component:MatrailDashboardComponent,pathMatch:'full',data: { num: 1 } },
  { path:'Home' ,component:AppComponent ,pathMatch:'full'},
  { path:'table' ,component:MatrailTableComponent ,pathMatch:'full',data: { num: 2 } },
  { path:'Drag' ,component:DragComponentComponent ,pathMatch:'full',data: { num: 3 }},
  { path:'angularform' ,component:AngularformComponent ,pathMatch:'full',data: { num: 4 }},
  { path:'angularbtn' ,component:AngularbuttonComponent ,pathMatch:'full',data: { num: 5 }},
  { path:'MatrialStepper' ,component:MatrialStepperComponent ,pathMatch:'full',data: { num: 6 }},
  { path:'MatrialDialog' ,component:AngularDialogComponent ,pathMatch:'full',data: { num: 7 }},
  { path:'dialog' ,component:DailogComponentComponent ,pathMatch:'full',data: { num: 8 }},
  { path:'materialDatepicker' ,component:MatrialDatepickerComponent ,pathMatch:'full',data: { num: 9 }},
  { path:'materialimg' ,component:MaterialImgComponent ,pathMatch:'full',data: { num: 10 }},
  { path:'Chart' ,component:AngularChartsComponent ,pathMatch:'full'},
  { path:'radarChart' ,component:RadarChartComponent ,pathMatch:'full'},
  { path:'barChart' ,component:BaRadarChartComponent ,pathMatch:'full'},
  { path:'**' ,component:MatrailDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
