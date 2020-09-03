import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClinicNetworkModel} from '../models/clinic_network.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class ClinicNetworkService {

  constructor(private http: HttpClient) {
  }

  // create a new clinic network
  createNewClinicNetwork(
    inClinicId: number,
    inInsuranceCompId: number,
    inInNetwork: boolean,
    inInNetworkDate: string,
    inFileClaimTo: string,
    inNote: string
  ) {
    const postData: ClinicNetworkModel = {
      clinicId: inClinicId,
      insuranceCompId: inInsuranceCompId,
      inNetwork: inInNetwork,
      inNetworkDate: inInNetworkDate,
      fileClaimTo: inFileClaimTo,
      note: inNote
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-network/add',
        postData
      );
  }
}
