import { Component, OnInit } from '@angular/core';
import {ClinicContactService} from '../../../core/services/clinic_contact.service';
import {ToastService} from 'ng-uikit-pro-standard';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClinicsModelRead} from '../../../core/models/clinics.model';
import {ClinicService} from '../../../core/services/clinics.service';

@Component({
  selector: 'app-clinic-contact-create',
  templateUrl: './clinic-contact-create.component.html',
  styleUrls: ['./clinic-contact-create.component.scss']
})
export class ClinicContactCreateComponent implements OnInit {

  clinicContactForm = new FormGroup({
    clinicId: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    prefix: new FormControl('', ),
    sufix: new FormControl('', ),
    phone: new FormControl('', ),
    fax: new FormControl('', ),
    email: new FormControl('', ),
    indNpi: new FormControl('', ),
    isPrimary: new FormControl('', ),
    isContact: new FormControl('', ),
    isActive: new FormControl('', ),
    note: new FormControl('', ),
  });

  clinicId = null;
  clinicData: ClinicsModelRead[] = [];
  clinicDataSelect = [];
  prefixList = [];
  suffixList = [];
  booleanOption = [];

  constructor(
    private clinicContactService: ClinicContactService,
    private clinicService: ClinicService,
    private toastrService: ToastService
  ) { }

  ngOnInit() {
    this.onGetClinics();
    this.loadPrefixesAndSuffixes();
  }

  onReset(): void {
    this.clinicContactForm.reset();
  }

  /**
   * @description add a note to the clinic created
   */
  onSubmit(): void {
    this.clinicContactService.createNewClinicContact(
      this.clinicContactForm.value.clinicId,
      this.clinicContactForm.value.firstName,
      this.clinicContactForm.value.lastName,
      this.clinicContactForm.value.prefix,
      this.clinicContactForm.value.sufix,
      this.clinicContactForm.value.phone,
      this.clinicContactForm.value.fax,
      this.clinicContactForm.value.email,
      this.clinicContactForm.value.indNpi,
      this.clinicContactForm.value.isPrimary,
      this.clinicContactForm.value.isContact,
      true,
      this.clinicContactForm.value.note
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.onReset();
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
   * @description display the fail notification when unable to create contact
   */
  showFailCreated(text) {
    const options = {opacity: 1};
    this.toastrService.error(text, 'Fail to create', options);
  }

  /**
   * @description load prefix name
   */
  loadPrefixesAndSuffixes(): void {
    this.prefixList = [
      { value: 'Dr.', label: 'Dr' },
      { value: 'Mr.', label: 'Mr' },
      { value: 'Mrs.', label: 'Mrs' },
      { value: 'Ms.', label: 'Ms' },
    ];

    this.suffixList = [
      { value: 'Jr', label: 'Jr' },
      { value: 'MD', label: 'MD' },
      { value: 'Sr', label: 'Sr' },
      { value: 'RN', label: 'RN' },
      { value: 'II', label: 'II' },
      { value: 'III', label: 'III' },
      { value: 'IV', label: 'IV' },
      { value: 'JD', label: 'JD' },
    ];

    this.booleanOption = [
      { value: true, label: 'YES' },
      { value: false, label: 'NO' },
    ];
  }
}
