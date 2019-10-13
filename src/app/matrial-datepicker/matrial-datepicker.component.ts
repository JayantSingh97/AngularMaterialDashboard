import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-matrial-datepicker',
  templateUrl: './matrial-datepicker.component.html',
  styleUrls: ['./matrial-datepicker.component.less']
})
export class MatrialDatepickerComponent implements OnInit {

  constructor() { }
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  ngOnInit() {
  }

}
