import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../core/services/login.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  rightPassword = true;
  wrongCredentials = 'username or password incorrect';

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
    private toastrService: ToastService,
    private route: ActivatedRoute) {
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.onLogout();
  }

  clickLoginButton(): void {
    this.loginService.userLogin(this.loginForm.value.userName, this.loginForm.value.password)
      .subscribe(data => {
        console.log(data);
        if (data.userName === this.loginForm.value.userName) {
          this.router.navigate(['/home'], {relativeTo: this.route}); // navigate to home page if the credentials are correct
          // @ts-ignore
          const user = data.firstName + ' ' + data.lastName;
          this.showSuccessLogin(user); // display welcome message
          // @ts-ignore
          localStorage.setItem('is_admin', data.isAdmin);
          localStorage.setItem('loggedUser', user);
          // @ts-ignore
          localStorage.setItem('session id', data.id);
        }
      }, (error => this.displayNotification()));
  }

  /**
   * @description logout
   */
  onLogout(): void {
    localStorage.clear();
  }

  /**
   * @description display the welcome message
   */
  showSuccessLogin(userName): void {
    const options = {opacity: 1};
    this.toastrService.success('Welcome ' + userName, 'Money Tree Billing!', options);
  }

  /**
   * @description display contact admin message
   */
  showContactAdminMessage(): void {
    const options = {opacity: 1};
    this.toastrService.warning('We are unable to reset your password, please contact admin.', 'Money Tree Billing!', options);
  }

  /**
   * @description display contact admin message
   */
  showCreateAccountContactAdminMessage(): void {
    const options = {opacity: 1};
    this.toastrService.warning('We are unable to create a new account, please contact admin.', 'Money Tree Billing!', options);
  }

  displayNotification(): void {
    this.rightPassword = false;
    setTimeout(() => {
      this.rightPassword = true;
    }, 4000);
  }
}
