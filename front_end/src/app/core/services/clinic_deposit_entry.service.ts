import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClinicNotesModel, ClinicNotesModelSearch, ClinicNotesModelUpdateDelete} from '../models/clinic_notes.model';
import {ClinicPatientStatementModel} from '../models/clinic_patient_statement.model';
import {ClinicDepositEntryModel} from '../models/clinic_deposit_entry.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicDepositEntryService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic deposit entry
  createNewClinicDepositEntry(
    inClinicId: number,
    inDepositName: string,
    inDepositPr: string,
    inDepositStatus: string,
    inWriteOff: string,
    inNote: string,
  ) {
    const postData: ClinicDepositEntryModel = {
      clinicId: inClinicId,
      depositName: inDepositName,
      depositPr: inDepositPr,
      depositStatus: inDepositStatus,
      writeOff: inWriteOff,
      note: inNote
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-deposit-entry/add',
        postData
      );
  }
}
