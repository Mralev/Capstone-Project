import { Component, OnInit } from '@angular/core';
import {ClinicsModelFull} from '../../core/models/clinics.model';
import {ClinicService} from '../../core/services/clinics.service';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-clininc-display-contact-datatable',
  templateUrl: './clininc-display-contact-datatable.component.html',
  styleUrls: ['./clininc-display-contact-datatable.component.scss']
})
export class ClinincDisplayContactDatatableComponent implements OnInit {


  clinicData: ClinicsModelFull[] = [];

  elements: any = [];
  insCo: any = [];

  headElements = ['Name', 'Phone', 'Fax', 'Email', 'Ind Npi', 'Is Primary Doctor', 'Is Primary Contact', 'Action'];

  constructor(
    private clinicService: ClinicService,
    private toastrService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.onOpenClinic();
    this.onLoadData();
  }

  onOpenClinic(): void {
    this.clinicData = this.clinicService.selectedClinicData;
  }

  onLoadData() {
    const size = this.clinicData[0].clinic_contacts.length;

    for (let i = 0; i < size; i++) {
      const isPrimary =  this.clinicData[0].clinic_contacts[i].isPrimary === 1 ? 'YES' : 'NO';
      const isContact =  this.clinicData[0].clinic_contacts[i].is_contact === 1 ? 'YES' : 'NO';
      const prefix = this.clinicData[0].clinic_contacts[i].prefix;
      const firstName = this.clinicData[0].clinic_contacts[i].firstName;
      const lastName = this.clinicData[0].clinic_contacts[i].lastName;
      const suffix = this.clinicData[0].clinic_contacts[i].sufix;
      const fullName = prefix + ' ' + firstName + ' ' + lastName + ' ' + suffix;
      this.elements.push(
        {
          name: fullName,
          phone: this.clinicData[0].clinic_contacts[i].phone,
          fax: this.clinicData[0].clinic_contacts[i].fax,
          email: this.clinicData[0].clinic_contacts[i].email,
          ind_npi: this.clinicData[0].clinic_contacts[i].indNpi,
          is_primary: isPrimary,
          is_contact: isContact,
          note: this.clinicData[0].clinic_contacts[i].note,
        });
    }
  }

  /**
   * @description display the favorite failed message
   */
  notImplementedMessage() {
    const options = {opacity: 1};
    this.toastrService.warning('This feature is not yet implemented.', 'Attention', options);
  }

}
