import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClinicBillingModel, ClinicBillingModelRead} from '../models/clinic_billing.model';
import {ClinicAgingModel} from '../models/clinic_aging.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicAgingService {

  selectedClinicAgingData: ClinicAgingModel [] = [];

  constructor(private http: HttpClient) {
  }

  // create a new clinic billing
  createNewClinicAging(
    inClinicId: number,
    inAgingCaseTypePro: string,
    inOldAgeDates: string,
    inCurrentAgeDates: string,
    inCompAgeDates: string,
    inAgingNotes: string
  ) {
    const postData: ClinicAgingModel = {
      clinicId: inClinicId,
      agingCaseTypePro: inAgingCaseTypePro,
      oldAgeDates: inOldAgeDates,
      currentAgeDates: inCurrentAgeDates,
      compAgeDates: inCompAgeDates,
      agingNotes: inAgingNotes
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-aging/add',
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
