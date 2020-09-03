import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClinicNotesModel, ClinicNotesModelSearch, ClinicNotesModelUpdateDelete} from '../models/clinic_notes.model';
import {ClinicPatientStatementModel} from '../models/clinic_patient_statement.model';
import {ClinicDepositEntryModel} from '../models/clinic_deposit_entry.model';
import {ClinicMonthEndModel} from '../models/clinic_month_end.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicMonthEndService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic month end
  createNewClinicMonthEnd(
    inClinicId: number,
    inMonthCaseTypePro: string,
    inCtCashCodes: string,
    inClinicInvoiceEmail: string,
    inStatsGraph: string,
    inStatsGraphToClinic: string,
    inNote: string,
  ) {
    const postData: ClinicMonthEndModel = {
      clinicId: inClinicId,
      monthCaseTypePro: inMonthCaseTypePro,
      ctCashCodes: inCtCashCodes,
      clinicInvoiceEmail: inClinicInvoiceEmail,
      statsGraph: inStatsGraph,
      statsGraphToClinic: inStatsGraphToClinic,
      note: inNote
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-month-end/add',
        postData
      );
  }
}
