import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialNavComponent } from './matrial-nav/matrial-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatrailDashboardComponent } from './matrail-dashboard/matrail-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MatrailTableComponent } from './matrail-table/matrail-table.component';
import { DragComponentComponent } from './drag-component/drag-component.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularformComponent } from './angularform/angularform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularbuttonComponent } from './angularbutton/angularbutton.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatrialStepperComponent } from './matrial-stepper/matrial-stepper.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularDialogComponent } from './angular-dialog/angular-dialog.component';
import { DailogComponentComponent } from './dailog-component/dailog-component.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatrialDatepickerComponent } from './matrial-datepicker/matrial-datepicker.component';
import { MatFormFieldModule,  MatCheckboxModule,  MatNativeDateModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaterialImgComponent } from './material-img/material-img.component';
import { ChartsModule } from 'ng2-charts'; 
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { BaRadarChartComponent } from './ba-radar-chart/ba-radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';
import { ToastrModule } from 'ngx-toastr';
import { animation } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    MatrialNavComponent,
    MatrailDashboardComponent,
    MatrailTableComponent,
    DragComponentComponent,
    AngularformComponent,
    AngularbuttonComponent,
    MatrialStepperComponent,
    AngularDialogComponent,
    DailogComponentComponent,
    MatrialDatepickerComponent,
    MaterialImgComponent,
    MyLineChartComponent,
    RadarChartComponent,
    BaRadarChartComponent,
    DoughnutChartComponent,
    AngularChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    ChartsModule,ToastrModule.forRoot(
    {
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressAnimation:"decreasing",
      easeTime:300,
      progressBar:true,
      tapToDismiss:true,
      onActivateTick:true
     })
     
  ],
  providers: [],
  bootstrap: [MatrialNavComponent]
})
export class AppModule { }
