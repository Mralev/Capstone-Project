import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClinicNotesModel, ClinicNotesModelSearch, ClinicNotesModelUpdateDelete} from '../models/clinic_notes.model';
import {ClinicPatientStatementModel} from '../models/clinic_patient_statement.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicPatientStatementService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic patient statement
  createNewClinicPatientStatement(
    inClinicId: number,
    inPatCaseTypePro: string,
    inPatGlobWriteOff: string,
    inNote: string,
  ) {
    const postData: ClinicPatientStatementModel = {
      clinicId: inClinicId,
      patCaseTypePro: inPatCaseTypePro,
      patGlobWriteOff: inPatGlobWriteOff,
      note: inNote
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-patient-statement/add',
        postData
      );
  }
}
