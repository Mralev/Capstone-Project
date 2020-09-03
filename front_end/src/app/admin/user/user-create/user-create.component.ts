import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastService} from 'ng-uikit-pro-standard';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  optionsSelect: Array<any>;

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    isAdmin: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    cPassword: new FormControl('', )
  });

  rightPassword = true;
  isAdminSelectedValue = false;
  isAdminPlaceHolder = 'Is Admin';
  userName;

  constructor(
    private toastrService: ToastService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.optionsSelect = [
      {value: true, label: 'YES'},
      {value: false, label: 'NO'},
    ];
  }

  /**
   * @description submit new user
   */
  onSubmit(): void {
    if (this.userForm.value.password === this.userForm.value.cPassword) {
      this.onCreateUser();
    } else {
      this.displayNotification();
    }
  }

  /**
   * @description reset user form
   */
  onReset(): void {
    this.userForm.reset();
  }

  /**
   * @description create user name
   */
  onCreateUserName(): void {
    const fName = this.userForm.value.firstName;
    const uName = fName.substr(0, 1) + '.' + this.userForm.value.lastName;
    this.userName = uName.toLowerCase();
  }

  /**
   * @description display message
   */
  showSuccess(): void {
    const options = {opacity: 1};
    this.toastrService.success('User ' + this.userName + ' successfully created ', 'Success', options);
  }

  /**
   * @description display message
   */
  showFail(): void {
    const options = {opacity: 1};
    this.toastrService.error('Unable to create user ' + this.userName + ', please try again', 'Fail', options);
  }

  displayNotification(): void {
    this.rightPassword = false;
    setTimeout(() => {
      this.rightPassword = true;
    }, 4000);
  }

  /**
   * @description create a new user
   */
  onCreateUser(): void {
    this.userService.createNewUser(
      this.userForm.value.firstName,
      this.userForm.value.lastName,
      this.userName,
      this.userForm.value.email,
      this.userForm.value.password,
      true,
      this.userForm.value.isAdmin,
      this.getCurrentDate().toString()
    )
      .subscribe(data => {
        this.showSuccess();
      }, (error => this.showFail()));
    this.onReset();
  }

  /**
   * @description get today' date and format
   */
  getCurrentDate() {
    return new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  }
}
