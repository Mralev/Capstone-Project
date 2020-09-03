import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-admin-create-office-hour',
  templateUrl: './clinic-admin-create-office-hour.component.html',
  styleUrls: ['./clinic-admin-create-office-hour.component.scss']
})
export class ClinicAdminCreateOfficeHourComponent implements OnInit {

  officeHoursWeek = {
    monday: 'Monday',
    thursday: 'Thursday',
    wednesday: 'Wednesday',
    tuesday: 'Tuesday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };

  constructor() { }

  ngOnInit() {
  }

}
