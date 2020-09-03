import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, ToastService} from 'ng-uikit-pro-standard';
import {UserService} from '../../../core/services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClinicsModelFull} from '../../../core/models/clinics.model';
import {UserModelRead} from '../../../core/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;

  userData: UserModelRead[] = [];
  elements: any = [];
  headElements = ['User Id', 'First Name', 'Last Name', 'User Name', 'Is Admin', 'Is Active', 'Email', 'Action'];
  searchText = '';
  previous: string;
  selectedUser = null;
  adminOptionsSelect = [];
  activeOptionsSelect = [];
  isAdmin = '';
  isActive = '';

  userEditForm = new FormGroup({
    userId: new FormControl('', ),
    firstName: new FormControl('', ),
    lastName: new FormControl('', ),
    email: new FormControl('', ),
    isAdmin: new FormControl('', ),
    password: new FormControl('', ),
    userName: new FormControl('', ),
    isActive: new FormControl('', ),
  });

  constructor(
    private userService: UserService,
    private toastrService: ToastService
  ) {
  }

  @HostListener('input') oninput() {
    this.searchNames();
  }

  ngOnInit() {
    this.onGetUsers();
  }

  searchNames() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  /**
   * @description get all users
   */
  onGetUsers(): void {
    this.userService.getAllUsers()
      .subscribe(data => {
        console.log(data);
        this.userData = data;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.length; i++) {

          // @ts-ignore
          const isUserAdmin = data[i].isAdmin === 1 ? 'YES' : 'NO';
          // @ts-ignore
          const isUserActive = data[i].isActive === 1 ? 'YES' : 'NO';

          this.elements.push({
            id: data[i].userId,
            firstName: data[i].firstName,
            lastName: data[i].lastName,
            userName: data[i].userName,
            isAdmin: isUserAdmin,
            isActive: isUserActive,
            email: data[i].email
          });
        }
      }, (error => console.log(error)));
    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
  }

  /**
   * @description get the selected user
   */
  onGetSelectedUser(userId): void {
    this.selectedUser = userId;
  }

  /**
   * @description set form value
   */
  onSetEditFormValue(): void {
    this.userEditForm.setValue(
      {
        userId: this.userData[this.selectedUser].userId,
        firstName: this.userData[this.selectedUser].firstName,
        lastName: this.userData[this.selectedUser].lastName,
        email: this.userData[this.selectedUser].email,
        isAdmin: this.userData[this.selectedUser].isAdmin,
        password: this.userData[this.selectedUser].password,
        userName: this.userData[this.selectedUser].userName,
        isActive: this.userData[this.selectedUser].isActive,
      });
    this.onPopulateSelect();
  }

  /**
   * @description populate select drop-downs
   */
  onPopulateSelect(): void {
    this.adminOptionsSelect = [
      { value: 1, label: 'YES' },
      { value: 0, label: 'NO' },
    ];

    this.activeOptionsSelect = [
      { value: 1, label: 'YES' },
      { value: 0, label: 'NO' },
    ];

    this.isAdmin = this.userEditForm.value.isAdmin === 1 ? 'YES' : 'NO';
    this.isActive = this.userEditForm.value.isActive === 1 ? 'YES' : 'NO';
  }

  /**
   * @description update a user
   */
  onUpdateUser(): void {
    this.userService.updateUser(
      this.userData[this.selectedUser].userId,
      this.userEditForm.value.firstName,
      this.userEditForm.value.lastName,
      this.userEditForm.value.userName,
      this.userEditForm.value.email,
      this.userEditForm.value.isActive,
      this.userEditForm.value.isAdmin,
    )
      .subscribe(data => {
        // @ts-ignore
        setTimeout(this.showSuccess(), 3000);
        location.reload();
      }, (error => this.showFail()));
  }
  /**
   * @description display message
   */
  showSuccess(): void {
    const options = {opacity: 1};
    this.toastrService.success('User successfully Updated ', 'Success', options);
  }

  /**
   * @description display message
   */
  showFail(): void {
    const options = {opacity: 1};
    this.toastrService.error('Unable to update user, please try again', 'Fail', options);
  }

}


