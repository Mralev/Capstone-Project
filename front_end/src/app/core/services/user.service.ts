import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel, UserModelRead, UserModelUpdate} from 'src/app/core/models/user.model';
import {Observable} from 'rxjs';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createNewUser(
    fName: string,
    lName: string,
    uName: string,
    emails: string,
    pw: string,
    active: boolean,
    admin: boolean,
    dates: string
  ) {
    const postData: UserModel = {
      firstName: fName,
      lastName: lName,
      userName: uName,
      email: emails,
      password: pw,
      isActive: active,
      isAdmin: admin,
      dateCreated: dates
    };
    return this.http
      .post<{ name: string }>(
        CHILD_URL + 'users/add',
        postData
      );
  }

  //  get all users
  getAllUsers(): Observable<UserModelRead[]> {
    return this.http.get<UserModelRead[]>(CHILD_URL + 'users').pipe();
  }

  updateUser(
    inUserId: number,
    fName: string,
    lName: string,
    uName: string,
    emails: string,
    active: boolean,
    admin: boolean
  ) {
    const postData: UserModelUpdate = {
      userId: inUserId,
      firstName: fName,
      lastName: lName,
      userName: uName,
      email: emails,
      isActive: active,
      isAdmin: admin
    };
    return this.http
      .put<{ name: string }>(
        CHILD_URL + 'users/update',
        postData
      );
  }

}
