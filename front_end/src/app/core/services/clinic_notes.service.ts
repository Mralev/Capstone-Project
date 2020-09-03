import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClinicNotesModel, ClinicNotesModelSearch, ClinicNotesModelUpdateDelete} from '../models/clinic_notes.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicNotesService {

  selectedClinicNotesData: ClinicNotesModel [] = [];

  constructor(private http: HttpClient) {
  }

  // create a new clinic note
  createNewClinicNote(
    inClinicId: number,
    inClientContact: string,
    inMtmi: string,
    inTreatmentNotes: string,
    inIsDeleted: boolean,
  ) {
    const postData: ClinicNotesModel = {
      clinicId: inClinicId,
      clientContact: inClientContact,
      mtmi: inMtmi,
      treatmentNotes: inTreatmentNotes,
      isDeleted: inIsDeleted,
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-notes/add',
        postData
      );
  }

  // delete a clinic note
  deleteClinicNote(inClinicNotesId: number) {
    const postData: ClinicNotesModelUpdateDelete = {clinicNotesId: inClinicNotesId};
    return this.http
      .put<{ name: string }>(
        CHILD_URL + 'clinics/delete',
        postData
      );
  }
}
