import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IsAdminModel, LoginModel} from 'src/app/core/models/login.model';

// comes from environment
const ROOT_URL = 'http://localhost:8000';
const CHILD_URL = ROOT_URL + '/api/';

@Injectable({providedIn: 'root'})
export class LoginService {

  // logged in user
  public isAdmin = false;

  constructor(private http: HttpClient) {}

  userLogin(uName: string, pw: string) {
    const postData: LoginModel = {userName: uName, password: pw};
    return this.http
      .post<{userName: string, password: string}>(
        CHILD_URL + 'login',
        postData
      );
  }

  isAdminUser(admin: boolean) {
    const postData: IsAdminModel = {isAdmin: admin};
    return this.http
      .post<{isAdmin: boolean}>(
        CHILD_URL + 'admin',
        postData
      );
  }
}
