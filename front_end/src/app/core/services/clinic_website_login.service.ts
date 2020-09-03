import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClinicRemitsModel} from '../models/clinic_remits.model';
import {ClinicWebsiteLoginsModel} from '../models/clinic_website_login.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicWebsiteLoginsService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic remits
  createNewClinicWebsiteLogins(
    inClinicId: number,
    inInsuranceCompId: number,
    inWebsiteAddress: string,
    inUserName: string,
    inPassword: string,
    inAdmin: string,
    inSecurity: string,
    inNote: string,
    inIsActive: boolean
  ) {
    const postData: ClinicWebsiteLoginsModel = {
      clinicId: inClinicId,
      insuranceCompId: inInsuranceCompId,
      websiteAddress: inWebsiteAddress,
      userName: inUserName,
      password: inPassword,
      admin: inAdmin,
      security: inSecurity,
      note: inNote,
      isActive: inIsActive
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-website-login/add',
        postData
      );
  }
}
