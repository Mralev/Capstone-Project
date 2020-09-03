import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClinicsModel, ClinicsModelDelete, ClinicsModelFull, ClinicsModelId, ClinicsModelRead} from '../models/clinics.model';
import {Observable} from 'rxjs';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicService {

  selectedClinicData: ClinicsModelFull [] = [];

  constructor(private http: HttpClient) {
  }

  // create a new clinic
  createNewClinic(
    // clinicId: number,
    inDisplayName: string,
    inClinicName: string,
    inStreetAddress: string,
    inStreetAddressTwo: string,
    inCity: string,
    inState: string,
    inZipCode: string,
    inClinicEmail: string,
    inClinicPhone: string,
    inClinicFax: string,
    inTaxId: string,
    inMtbCode: string,
    inMtbStartDate: string,
    inChiroAssociation: string,
    inChiroTouch: boolean,
    inInfinediCode: string,
    inGrpNpi: string,
    inRemoteAccess: string,
    inRemoteUserName: string,
    inRemotePassword: string,
    inIsActive: boolean,
    inDateCreated: string
  ) {
    const postData: ClinicsModel = {
      // clinics_id: clinicId,
      displayName: inDisplayName,
      clinicName: inClinicName,
      streetAddress: inStreetAddress,
      streetAddressTwo: inStreetAddressTwo,
      city: inCity,
      state: inState,
      zipCode: inZipCode,
      clinicEmail: inClinicEmail,
      clinicPhone: inClinicPhone,
      clinicFax: inClinicFax,
      taxId: inTaxId,
      mtbCode: inMtbCode,
      mtbStartDate: inMtbStartDate,
      chiroAssociation: inChiroAssociation,
      chiroTouch: inChiroTouch,
      infinediCode: inInfinediCode,
      grpNpi: inGrpNpi,
      remoteAccess: inRemoteAccess,
      remoteUserName: inRemoteUserName,
      remotePassword: inRemotePassword,
      isActive: inIsActive,
      dateCreated: inDateCreated
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinics/add',
        postData
      );
  }

  //  get all clinics
  getAllClinics(): Observable<ClinicsModelRead[]> {
    return this.http.get<ClinicsModelRead[]>(CHILD_URL + 'clinics').pipe();
  }

  // find a clinic by display name field
  getClinicByDisplayName(inDisplayName: string) {
    const postData: ClinicsModelDelete = {displayName: inDisplayName};
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinics/find',
        postData
      );
  }

  // find a clinic by id
  getClinicById(inClinicId: number) {
    const postData: ClinicsModelId = {clinicId: inClinicId};
    return this.http
        .post<{ name: string }>(
            CHILD_URL + 'clinics/find/id',
            postData
        );
  }

  // delete a clinic
  deleteClinic(inDisplayName: string) {
    const postData: ClinicsModelDelete = {displayName: inDisplayName};
    return this.http
      .put<{ name: string }>(
        CHILD_URL + 'clinics/delete',
        postData
      );
  }

  // restore a clinic
  restoreClinic(inDisplayName: string) {
    const postData: ClinicsModelDelete = {displayName: inDisplayName};
    return this.http
      .put<{ name: string }>(
        CHILD_URL + 'clinics/delete',
        postData
      );
  }
}
