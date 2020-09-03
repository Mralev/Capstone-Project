import {Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {ClinicService} from '../../core/services/clinics.service';
import {ClinicsModelFull} from '../../core/models/clinics.model';
import {ToastService} from 'ng-uikit-pro-standard';
import {InsuranceCompanyService} from '../../core/services/insurance_company.service';


@Component({
  selector: 'app-clinic-display-weblogins-datatable',
  templateUrl: './clinic-display-weblogins-datatable.component.html',
  styleUrls: ['./clinic-display-weblogins-datatable.component.scss']
})
export class ClinicDisplayWebloginsDatatableComponent implements OnInit {

  clinicData: ClinicsModelFull[] = [];

  elements: any = [];
  insCo: any = [];

  headElements = ['Insurance Company', 'Website', 'User Name', 'Password', 'Admin', 'Security', 'Action'];

  constructor(
    private clinicService: ClinicService,
    private insuranceCompanyService: InsuranceCompanyService,
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
    const size = this.clinicData[0].website_logins.length;
    for (let i = 0; i < size; i++) {
      this.onGetInsuranceCompanyName(this.clinicData[0].website_logins[i].insuranceCompId);
      this.elements.push(
        {
          id: this.clinicData[0].website_logins[i].websiteLoginsId,
          ins_co: this.insCo[i],
          website: this.clinicData[0].website_logins[i].websiteAddress,
          user_name: this.clinicData[0].website_logins[i].userName,
          password: this.clinicData[0].website_logins[i].password,
          admin: this.clinicData[0].website_logins[i].admin,
          security: this.clinicData[0].website_logins[i].security,
          note: this.clinicData[0].website_logins[i].note
        });
    }
  }

  /**
   * @description get insurance company name
   */
  onGetInsuranceCompanyName(insCompId): void {
    this.insuranceCompanyService.getInsuranceCompanyById(insCompId)
      .subscribe(data => {
        this.insCo.push(data[0].name);
        console.log(this.insCo);
      }, (error => console.log(error)));
  }

  /**
   * @description display the favorite failed message
   */
  notImplementedMessage() {
    const options = {opacity: 1};
    this.toastrService.warning('This feature is not yet implemented.', 'Attention', options);
  }
}
