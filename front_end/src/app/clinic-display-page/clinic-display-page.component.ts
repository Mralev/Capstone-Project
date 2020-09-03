import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from 'ng-uikit-pro-standard';
import {ClinicService} from '../core/services/clinics.service';
import {ClinicNotesService} from '../core/services/clinic_notes.service';
import {ClinicsModelFull} from '../core/models/clinics.model';
import {ClinicNotesModelRead} from '../core/models/clinic_notes.model';
import {FavoriteClinicService} from '../core/services/favorite_clinic.services';
import {FavoriteClinic} from '../core/models/favorite_clinic.model';
import {InsuranceCompanyService} from '../core/services/insurance_company.service';

@Component({
  selector: 'app-clinic-display-page',
  templateUrl: './clinic-display-page.component.html',
  styleUrls: ['./clinic-display-page.component.scss']
})
export class ClinicDisplayPageComponent implements OnInit {

  noteDataAvailable = true;
  clinicData: ClinicsModelFull[] = [];
  clinicNotes: ClinicNotesModelRead[] = [];
  clinicBillingObj;
  clinicAgingObj;
  clinicPatientStatementObj;
  clinicDepositEntryObj;
  clinicMonthEndObj;
  clinicRemitsObj;
  clinicNetworkObj;
  clinicOfficeHoursObj;
  clinicContactObj;

  clinicAddress = '';
  chiroTouch = '';
  numberOfNotes = 0;
  numberOfBillingNotes = 1;
  numberOfAgingNotes = 1;
  numberOfPStatementNotes = 1;
  numberOfDepEntryNotes = 1;
  numberOfMonthEndNotes = 1;
  numberOfRemitsNotes = 1;
  numberOfNetworkNotes = 1;
  numberOfOfficeHoursNotes = 1;
  numberOfClinicNotes = 1;
  isFavoriteClinic = false;
  changeIconColor = '';
  changeIconText = '';
  insuranceCompId = null;
  insuranceCompanyName = '';
  inNetwork = '';

  constructor(
    private router: Router,
    private clinicService: ClinicService,
    private clinicNotesServiceService: ClinicNotesService,
    private toastrService: ToastService,
    private route: ActivatedRoute,
    private favoriteClinicService: FavoriteClinicService,
    private insuranceCompanyService: InsuranceCompanyService
  ) {
  }

  ngOnInit() {
    this.onVerifyActiveSession();
    this.onOpenClinic();
    this.verifyData();
    this.clinicBilling();
    this.clinicAging();
    this.clinicPatientStatement();
    this.clinicDepositEntry();
    this.clinicMonthEnd();
    this.clinicRemits();
    this.clinicNetwork();
    this.clinicOfficeHours();
    this.onUpdateFavIcon();
  }

  /**
   * @description check session
   */
  onVerifyActiveSession(): void {
    if (localStorage.getItem('loggedUser') === null) {
      this.router.navigateByUrl('');
      this.showWrongSession();
    }
  }

  /**
   * @description display the session expired message
   */
  showWrongSession(): void {
    const options = {opacity: 1};
    this.toastrService.warning('Please login first', 'Unknown Session', options);
  }

  onOpenClinic(): void {
    this.clinicData = this.clinicService.selectedClinicData;
    try {
      this.clinicNotes = this.clinicData[0].clinic_notes;
    } catch (e) {
      this.router.navigateByUrl('/home');
    }

  }

  verifyData(): void {
    if (this.clinicData.length === 0) {
      this.router.navigate(['/home'], {relativeTo: this.route}); // navigate to home page if the credentials are correct
    }

    // create clinic full address
    this.clinicAddress = this.clinicData[0].streetAddress
      + ', ' + this.clinicData[0].city + ', '
      + this.clinicData[0].state + ', '
      + this.clinicData[0].zipCode;

    // update chiro touch value
    // tslint:disable-next-line:triple-equals
    this.chiroTouch = this.clinicData[0].chiroTouch == true ? 'YES' : 'NO';

    // update note numbers
    this.numberOfNotes = this.clinicData[0].clinic_notes.length;
    this.noteDataAvailable = this.numberOfNotes > 0 ? false : true;
  }

  clinicBilling(): boolean {
    const noData = '';
    let dataPresent = false;

    // console.log(this.clinicData[0]);
    this.clinicBillingObj = {
      billingId: this.clinicData[0].clinic_billing != null ? this.clinicData[0].clinic_billing.billingId : noData,
      clinicId: this.clinicData[0].clinic_billing != null ? this.clinicData[0].clinic_billing.clinicId : noData,
      billBackDays: this.clinicData[0].clinic_billing != null ? this.clinicData[0].clinic_billing.billBackDays : noData,
      BillCaseTypePro: this.clinicData[0].clinic_billing != null ? this.clinicData[0].clinic_billing.BillCaseTypePro : noData,
      BillingNotes: this.clinicData[0].clinic_billing != null ? this.clinicData[0].clinic_billing.BillingNotes : noData
    };
    // update note numbers

    // tslint:disable-next-line:triple-equals
    if (this.clinicBillingObj.BillingNotes == noData) {
      this.numberOfBillingNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  clinicAging(): boolean {
    const noData = '';
    let dataPresent = false;

    // console.log(this.clinicData[0]);
    this.clinicAgingObj = {
      agingId: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.agingId : noData,
      clinicId: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.clinicId : noData,
      agingCaseTypePro: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.agingCaseTypePro : noData,
      oldAgeDates: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.oldAgeDates : noData,
      currentAgeDates: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.currentAgeDates : noData,
      compAgeDates: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.compAgeDates : noData,
      agingNotes: this.clinicData[0].clinic_aging != null ? this.clinicData[0].clinic_aging.agingNotes : noData
    };
    // update note numbers

    // tslint:disable-next-line:triple-equals
    if (this.clinicAgingObj.agingNotes == noData) {
      this.numberOfAgingNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  clinicPatientStatement(): boolean {
    const noData = '';
    let dataPresent = false;

    this.clinicPatientStatementObj = {
      patientStatementId: this.clinicData[0].clinic_patient_statement != null ?
        this.clinicData[0].clinic_patient_statement.patientStatementId : noData,
      clinicId: this.clinicData[0].clinic_patient_statement != null ?
        this.clinicData[0].clinic_patient_statement.clinicId : noData,
      patCaseTypePro: this.clinicData[0].clinic_patient_statement != null ?
        this.clinicData[0].clinic_patient_statement.patCaseTypePro : noData,
      patGlobWriteOff: this.clinicData[0].clinic_patient_statement != null ?
        this.clinicData[0].clinic_patient_statement.patGlobWriteOff : noData,
      note: this.clinicData[0].clinic_patient_statement != null ?
        this.clinicData[0].clinic_patient_statement.note : noData,
    };
    // update note numbers

    // tslint:disable-next-line:triple-equals
    if (this.clinicPatientStatementObj.note == noData) {
      this.numberOfPStatementNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  clinicDepositEntry(): boolean {
    const noData = '';
    let dataPresent = false;

    this.clinicDepositEntryObj = {
      depositEntryId: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.depositEntryId : noData,
      clinicId: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.clinicId : noData,
      depositName: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.depositName : noData,
      depositPr: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.depositPr : noData,
      depositStatus: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.depositStatus : noData,
      writeOff: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.writeOff : noData,
      note: this.clinicData[0].clinic_deposit_entry != null ? this.clinicData[0].clinic_deposit_entry.note : noData
    };
    // update note numbers

    // tslint:disable-next-line:triple-equals
    if (this.clinicDepositEntryObj.note == noData) {
      this.numberOfDepEntryNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  clinicMonthEnd(): boolean {
    const noData = '';
    let dataPresent = false;

    this.clinicMonthEndObj = {
      monthEndId: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.monthEndId : noData,
      clinicId: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.clinicId : noData,
      clinicInvoiceEmail: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.clinicInvoiceEmail : noData,
      ctCashCodes: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.ctCashCodes : noData,
      monthCaseTypePro: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.monthCaseTypePro : noData,
      statsGraph: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.statsGraph : noData,
      statsGraphToClinic: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.statsGraphToClinic : noData,
      note: this.clinicData[0].clinic_month_end != null ? this.clinicData[0].clinic_month_end.note : noData
    };
    // update note numbers

    // tslint:disable-next-line:triple-equals
    if (this.clinicDepositEntryObj.note == noData) {
      this.numberOfMonthEndNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }


  clinicRemits(): boolean {
    const noData = '';
    let dataPresent = false;

    this.clinicRemitsObj = {
      remitsId: this.clinicData[0].clinic_remit != null ? this.clinicData[0].clinic_remit.remitsId : noData,
      clinicId: this.clinicData[0].clinic_remit != null ? this.clinicData[0].clinic_remit.clinicId : noData,
      insuranceCompId: this.clinicData[0].clinic_remit != null ? this.clinicData[0].clinic_remit.insuranceCompId : noData,
      whereToFind: this.clinicData[0].clinic_remit != null ? this.clinicData[0].clinic_remit.whereToFind : noData,
      whenToPost: this.clinicData[0].clinic_remit != null ? this.clinicData[0].clinic_remit.whenToPost : noData,
      note: this.clinicData[0].clinic_remit != null ? this.clinicData[0].clinic_remit.note : noData,
    };
    // update note numbers
    this.insuranceCompId = this.clinicRemitsObj.insuranceCompId;
    // tslint:disable-next-line:triple-equals
    if (this.clinicRemitsObj.note == noData) {
      this.numberOfRemitsNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  clinicNetwork(): boolean {
    const noData = '';
    let dataPresent = false;

    this.clinicNetworkObj = {
      networkId: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.networkId : noData,
      clinicId: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.clinicId : noData,
      insuranceCompId: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.insuranceCompId : noData,
      inNetwork: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.inNetwork : noData,
      inNetworkDate: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.inNetworkDate : noData,
      fileClaimTo: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.fileClaimTo : noData,
      note: this.clinicData[0].clinic_network != null ? this.clinicData[0].clinic_network.note : noData
    };
    // update note numbers
    // tslint:disable-next-line:triple-equals
    this.inNetwork = this.clinicNetworkObj.inNetwork == 1 ? 'YES' : 'NO';
    this.insuranceCompId = this.clinicNetworkObj.insuranceCompId;
    // tslint:disable-next-line:triple-equals
    if (this.clinicNetworkObj.note == noData) {
      this.numberOfNetworkNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  clinicOfficeHours(): boolean {
    const noData = '';
    let dataPresent = false;

    this.clinicOfficeHoursObj = {
      officeHourId: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].officeHourId : noData,
      clinicId: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].clinicId : noData,
      monday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].monday : noData,
      tuesday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].tuesday : noData,
      wednesday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].wednesday : noData,
      thursday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].thursday : noData,
      friday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].friday : noData,
      saturday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].saturday : noData,
      sunday: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].sunday : noData,
      note: this.clinicData[0].clinic_office_hours[0] != null ? this.clinicData[0].clinic_office_hours[0].note : noData
    };
    // update note numbers
    // tslint:disable-next-line:triple-equals
    if (this.clinicOfficeHoursObj.note == noData) {
      this.numberOfOfficeHoursNotes = 0;
      dataPresent = true;
    }
    return dataPresent;
  }

  /**
   * @description update insurance company name
   */
  onUpdateInsuranceCompanyName(): void {
    this.insuranceCompanyService.getInsuranceCompanyById(this.insuranceCompId)
      .subscribe(data => {
        this.insuranceCompanyName = data[0].name;
      }, (error => {
        }
      ));
  }

  /**
   * @description add a favorite clinic
   */
  onAddClinicToFav(): void {

    this.favoriteClinicService.addNewFavoriteClinic(
      Number(localStorage.getItem('session id')),
      this.clinicData[0].clinicId,
      true,
    )
      .subscribe(data => {
        this.showSuccessMessage('Added');
        this.router.navigateByUrl('/home');
      }, (error => {
          this.showFailMessage('add');
        }
      ));
  }

  /**
   * @description add a favorite clinic
   */
  onRemoveClinicToFav(): void {
    this.favoriteClinicService.removeFavoriteClinics(
      Number(localStorage.getItem('session id')),
      this.clinicData[0].clinicId
    )
      .subscribe(data => {
        this.showSuccessMessage('Removed');
        this.router.navigateByUrl('/home');
      }, (error => {
          this.showFailMessage('remove');
        }
      ));
  }

  /**
   * @description display the favorite added message
   */
  showSuccessMessage(action) {
    const options = {opacity: 1};
    this.toastrService.success('Successfully ' + action + '!', 'Success', options);
  }

  /**
   * @description display the favorite failed message
   */
  showFailMessage(action) {
    const options = {opacity: 1};
    this.toastrService.error('Fail to ' + action + ' to favorite!', 'Failed', options);
  }

  /**
   * @description verify favorite clinics and update favorite icon
   */
  onUpdateFavIcon(): void {
    const obj = this.favoriteClinicService.selectedFavoriteClinicData;

    // @ts-ignore
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj[0].length; i++) {
      if (obj[0][i].clinicId === this.clinicData[0].clinicId) {
        this.isFavoriteClinic = true;
      }
    }
    this.changeIconColor = this.isFavoriteClinic === true ? 'orange' : 'teal'; // change color of fav
    this.changeIconText = this.isFavoriteClinic === true ? 'Remove from favorite' : 'Add to favorite';
  }
}
