import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClinicContactModel} from '../models/clinic_contact.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicContactService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic contact
  createNewClinicContact(
    inClinicId: number,
    inFirstName: string,
    inLastName: string,
    inPrefix: string,
    inSufix: string,
    inPhone: string,
    inFax: string,
    inEmail: string,
    inIndNpi: number,
    inIsPrimary: boolean,
    inIsContact: boolean,
    inIsActive: boolean,
    inNote: string,
  ) {
    const postData: ClinicContactModel = {
        clinicId: inClinicId,
        firstName: inFirstName,
        lastName: inLastName,
        prefix: inPrefix,
        sufix: inSufix,
        phone: inPhone,
        fax: inFax,
        email: inEmail,
        indNpi: inIndNpi,
        isPrimary: inIsPrimary,
        isContact: inIsContact,
        isActive: inIsActive,
        note: inNote
      }
    ;
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-contact/add',
        postData
      );
  }
}
