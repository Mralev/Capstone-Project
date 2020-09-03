import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InsuranceCompanyService} from '../../../core/services/insurance_company.service';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-insurance-company-create',
  templateUrl: './insurance-company-create.component.html',
  styleUrls: ['./insurance-company-create.component.scss']
})
export class InsuranceCompanyCreateComponent implements OnInit {

  insuranceCompanyForm = new FormGroup({
    insuranceCompName: new FormControl('', [Validators.required]),
    insuranceCompPhone: new FormControl('', ),
    insuranceCompFax: new FormControl('', ),
    insuranceCompNote: new FormControl('', ),
    insuranceCompIsActive: new FormControl('', ),
  });

  constructor(
    private insuranceCompanyService: InsuranceCompanyService,
    private toastrService: ToastService
  ) { }

  ngOnInit() {
  }

  onReset(): void {
    this.insuranceCompanyForm.reset();
  }

  /**
   * @description add a note to the clinic created
   */
  onSubmit(): void {
    this.insuranceCompanyService.createNewInsuranceCompany(
      this.insuranceCompanyForm.value.insuranceCompName,
      this.insuranceCompanyForm.value.insuranceCompPhone,
      this.insuranceCompanyForm.value.insuranceCompFax,
      this.insuranceCompanyForm.value.insuranceCompNote,
      true
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.insuranceCompanyForm.reset();
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
