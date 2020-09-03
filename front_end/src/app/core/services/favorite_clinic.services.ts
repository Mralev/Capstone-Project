import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FavoriteClinic, FavoriteClinicRemove, FavoriteClinicSearchUser} from '../models/favorite_clinic.model';
import {ClinicsModelDelete} from '../models/clinics.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class FavoriteClinicService {

  selectedFavoriteClinicData: FavoriteClinic [] = [];

  constructor(private http: HttpClient) {
  }

  // add a new favorite clinic
  addNewFavoriteClinic(
    // inFavoriteClinicId: number,
    inUserId: number,
    inClinicId: number,
    inIsActive: boolean,
  ) {
    const postData: FavoriteClinic = {
      // favoriteClinicId: inFavoriteClinicId,
      userId: inUserId,
      clinicId: inClinicId,
      isActive: inIsActive
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-favorite/add',
        postData
      );
  }

  // find favorite clinic bu user
  findFavoriteClinics(inUserId: number) {
    const postData: FavoriteClinicSearchUser = {userId: inUserId};
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-favorite',
        postData
      );
  }

  // remove favorite clinic bu user
  removeFavoriteClinics(inUserId: number, inClinicId: number) {
    const postData: FavoriteClinicRemove = {userId: inUserId, clinicId: inClinicId};
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'clinic-favorite/remove',
        postData
      );
  }
}
