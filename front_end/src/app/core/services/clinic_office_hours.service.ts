import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClinicOfficeHoursModel} from '../models/clinic_office_hours.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicOfficeHoursService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic office hours
  createNewClinicOfficeHour(
    inClinicId: number,
    inMonday: string,
    inTuesday: string,
    inWednesday: string,
    inThursday: string,
    inFriday: string,
    inSaturday: string,
    inSunday: string,
    inNote: string,
  ) {
    const postData: ClinicOfficeHoursModel = {
      clinicId: inClinicId,
      monday: inMonday,
      tuesday: inTuesday,
      wednesday: inWednesday,
      thursday: inThursday,
      friday: inFriday,
      saturday: inSaturday,
      sunday: inSunday,
      note: inNote
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-hours/add',
        postData
      );
  }
}
