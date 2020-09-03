import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {ClinicService} from '../../core/services/clinics.service';
import {LoginService} from '../../core/services/login.service';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnInit {

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  selectedClinicName = '';
  elements: any = [];
  headElements = ['Clinic Id', 'Clinic Name', 'Infinedi Code', 'MTB Code', 'Action'];
  searchText = '';
  previous: string;
  isAdmin;

  constructor(
    private clinicService: ClinicService,
    private loginService: LoginService,
    private toastrService: ToastService
  ) {
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.isAdminUser();
    // load clinic data to table
    this.onGetClinics();
  }

  isAdminUser(): void {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    this.loginService.isAdminUser(localStorage.getItem('is_admin'))
      .subscribe(data => {
        // tslint:disable-next-line:triple-equals
        if (data.status == 1) {
          this.isAdmin = 1;
          // tslint:disable-next-line:triple-equals
        } else if (data.status == 0) {
          this.isAdmin = 0;
        }
      }, (error => console.log(error)));
  }

  searchItems() {
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
   * @description get all clinics
   */
  onGetClinics(): void {
    this.clinicService.getAllClinics()
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.length; i++) {
          this.elements.push({
            id: data[i].clinicId,
            clinicName: data[i].displayName,
            infinidiCode: data[i].infinediCode,
            MtbCode: data[i].mtbCode
          });
        }
      }, (error => console.log(error)));
    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
  }

  /**
   * @description edit a clinic by name
   */
  onEditClinic(clinicName): void {
    this.selectedClinicName = clinicName;
    // alert('edit clinic: ' + this.selectedClinicName);
  }

  /**
   * @description find the selected clinic by name
   */
  findSelectedClinic(clinicName): void {
    this.selectedClinicName = clinicName;
  }

  /**
   * @description open a clinic by name
   */
  onOpenClinic(selectedClinicName: string): void {
    this.clinicService.getClinicByDisplayName(selectedClinicName)
      .subscribe(data => {
        // @ts-ignore
        this.clinicService.selectedClinicData = data;
      }, (error => this.showFailOpen(error.statusText + ' ' + error.error.error)));
  }

  /**
   * @description display error message
   */
  showFailOpen(text) {
    const options = {opacity: 1};
    this.toastrService.error(text, 'Fail to open clinic', options);
  }

  /**
   * @description delete a clinic by name
   */
  onDeleteClinic(): void {
    this.clinicService.deleteClinic(this.selectedClinicName)
      .subscribe(data => {
        // console.log(data);
        const options = {opacity: 1};
        this.toastrService.success('Clinic deleted', 'Clinic ' + this.selectedClinicName + ' has been deleted', options);
      }, (error => console.log(error)));
  }

  /**
   * @description restore a clinic by name
   */
  onRestoreClinic(): void {
    this.clinicService.restoreClinic(this.selectedClinicName)
      .subscribe(data => {
        console.log(data);
      }, (error => console.log(error)));
  }
}
