import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InsuranceCompanyService} from '../../../core/services/insurance_company.service';
import {ToastService} from 'ng-uikit-pro-standard';
import {ClinicWebsiteLoginsService} from '../../../core/services/clinic_website_login.service';
import {InsuranceCompanyModelRead} from '../../../core/models/insurance_comapny.model';
import {ClinicMonthEndModel} from '../../../core/models/clinic_month_end.model';
import {ClinicsModelRead} from '../../../core/models/clinics.model';
import {ClinicService} from '../../../core/services/clinics.service';

@Component({
  selector: 'app-website-logins-create',
  templateUrl: './website-logins-create.component.html',
  styleUrls: ['./website-logins-create.component.scss']
})
export class WebsiteLoginsCreateComponent implements OnInit {

  insuranceCompId = null;
  insuranceCompanyData: InsuranceCompanyModelRead[] = [];
  clinicId = null;
  clinicData: ClinicsModelRead[] = [];
  insCompDataSelect = [];
  clinicDataSelect = [];

  websiteLoginsForm = new FormGroup({
    clinicId: new FormControl('', [Validators.required]),
    insuranceCompId: new FormControl('', ),
    websiteAddress: new FormControl('', ),
    userName: new FormControl('', ),
    password: new FormControl('', ),
    admin: new FormControl('', ),
    security: new FormControl('', ),
    note: new FormControl('', ),
    isActive: new FormControl('', ),
  });

  constructor(
    private clinicWebsiteLoginsService: ClinicWebsiteLoginsService,
    private insuranceCompanyService: InsuranceCompanyService,
    private clinicService: ClinicService,
    private toastrService: ToastService
  ) { }

  ngOnInit() {
    this.onGetInsuranceCompany();
    this.onGetClinics();
  }

  onReset(): void {
    this.websiteLoginsForm.reset();
  }

  /**
   * @description add a website logins to the clinic created
   */
  onSubmit(): void {
    this.clinicWebsiteLoginsService.createNewClinicWebsiteLogins(
      this.websiteLoginsForm.value.clinicId,
      this.websiteLoginsForm.value.insuranceCompId,
      this.websiteLoginsForm.value.websiteAddress,
      this.websiteLoginsForm.value.userName,
      this.websiteLoginsForm.value.password,
      this.websiteLoginsForm.value.admin,
      this.websiteLoginsForm.value.security,
      this.websiteLoginsForm.value.note,
      true
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.websiteLoginsForm.reset();
  }

  /**
   * @description get insurance company data
   */
  onGetInsuranceCompany(): void {
    this.insuranceCompanyService.getAllInsuranceCompany()
      .subscribe(data => {
        console.log(data);
        this.insuranceCompanyData = data;
      }, (error => console.log(error)));
  }

  /**
   * @description populate with insurance company data
   */
  onPopulateDropDown(): void {
    const dataOne = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.insuranceCompanyData.length; i++) { // populate insurance company dropdown under remits
      dataOne.push({value: this.insuranceCompanyData[i].insuranceCompId, label: this.insuranceCompanyData[i].name});
      this.insCompDataSelect = dataOne;
    }
  }

  /**
   * @description get clinics data
   */
  onGetClinics(): void {
    this.clinicService.getAllClinics()
      .subscribe(data => {
        console.log(data);
        this.clinicData = data;
      }, (error => console.log(error)));
  }

  /**
   * @description populate clinics data
   */
  onPopulateClinicDropDown(): void {
    const dataOne = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.clinicData.length; i++) {
      dataOne.push({value: this.clinicData[i].clinicId, label: this.clinicData[i].displayName});
      this.clinicDataSelect = dataOne;
    }
  }

  /**
   * @description display created ok
   */
  showSuccessCreated() {
    const options = {opacity: 1};
    this.toastrService.success('Successfully created!', 'Success', options);
  }

  /**
   * @description display the fail notification when unable to create a insurance company
   */
  showFailCreated(text) {
    const options = {opacity: 1};
    this.toastrService.error(text, 'Fail to create', options);
  }

}
