import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClinicBillingModel, ClinicBillingModelRead} from '../models/clinic_billing.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicBillingService {

  selectedClinicBillingData: ClinicBillingModel [] = [];

  constructor(private http: HttpClient) {
  }

  // create a new clinic billing
  createNewClinicBilling(
    inClinicId: number,
    inBillBackDays: number,
    inBillCaseTypePro: string,
    inBillingNotes: string
  ) {
    const postData: ClinicBillingModel = {
      clinicId: inClinicId,
      billBackDays: inBillBackDays,
      BillCaseTypePro: inBillCaseTypePro,
      BillingNotes: inBillingNotes
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-billing/add',
        postData
      );
  }

  // // delete a clinic note
  // deleteClinicNote(inClinicNotesId: number) {
  //   const postData: ClinicNotesModelUpdateDelete = {clinicNotesId: inClinicNotesId};
  //   return this.http
  //     .put<{ name: string }>(
  //       CHILD_URL + 'clinics/delete',
  //       postData
  //     );
  // }
}
