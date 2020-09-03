import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClinicRemitsModel} from '../models/clinic_remits.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicRemitsService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic remits
  createNewClinicRemits(
    inClinicId: number,
    inInsuranceCompId: number,
    inWhereToFind: string,
    inWhenToPost: string,
    inNote: string
  ) {
    const postData: ClinicRemitsModel = {
      clinicId: inClinicId,
      insuranceCompId: inInsuranceCompId,
      whereToFind: inWhereToFind,
      whenToPost: inWhenToPost,
      note: inNote
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-remit/add',
        postData
      );
  }
}
