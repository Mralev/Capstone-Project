import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InsuranceCompanyModel, InsuranceCompanyModelRead, InsuranceCompanyModelSearch} from '../models/insurance_comapny.model';
import {Observable} from 'rxjs';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class InsuranceCompanyService {

  constructor(private http: HttpClient) {
  }

  // find a insurance company by id
  getInsuranceCompanyById(inInsuranceCompId: number) {
    const postData: InsuranceCompanyModelSearch = {insuranceCompId: inInsuranceCompId};
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'insurance-company/find',
        postData
      );
  }

  //  get all insurance company
  getAllInsuranceCompany(): Observable<InsuranceCompanyModelRead[]> {
    return this.http.get<InsuranceCompanyModelRead[]>(CHILD_URL + 'insurance-company').pipe();
  }

  //  get all active and inactive insurance company
  getInsuranceCompanyFullList(): Observable<InsuranceCompanyModelRead[]> {
    return this.http.get<InsuranceCompanyModelRead[]>(CHILD_URL + 'insurance-company/all').pipe();
  }

  // create a new insurance company
  createNewInsuranceCompany(
    inName: string,
    inPhone: string,
    inFax: string,
    inNote: string,
    inIsActive: boolean,
  ) {
    const postData: InsuranceCompanyModel = {
      name: inName,
      phone: inPhone,
      fax: inFax,
      note: inNote,
      isActive: inIsActive
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'insurance-company/add',
        postData
      );
  }

  // update insurance company
  updateInsuranceCompany(
    inInsCompId: number,
    inName: string,
    inPhone: string,
    inFax: string,
    inNote: string,
    inIsActive: boolean,
  ) {
    const postData: InsuranceCompanyModelRead = {
      insuranceCompId: inInsCompId,
      name: inName,
      phone: inPhone,
      fax: inFax,
      note: inNote,
      isActive: inIsActive
    };
    return this.http
      .put<{ name: string }>(
        CHILD_URL + 'insurance-company/update',
        postData
      );
  }
}
