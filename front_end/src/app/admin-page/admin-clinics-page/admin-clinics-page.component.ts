import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IMyOptions, ToastService} from 'ng-uikit-pro-standard';
import {ClinicService} from '../../core/services/clinics.service';
import {ClinicNotesService} from '../../core/services/clinic_notes.service';
import {ClinicBillingService} from '../../core/services/clinic_billing.service';
import {ClinicAgingService} from '../../core/services/clinic_aging.service';
import {ClinicPatientStatementService} from '../../core/services/clinic_patient_statement.service';
import {ClinicDepositEntryService} from '../../core/services/clinic_deposit_entry.service';
import {ClinicMonthEndService} from '../../core/services/clinic_month_end.service';
import {InsuranceCompanyService} from '../../core/services/insurance_company.service';
import {ClinicNotesModelRead} from '../../core/models/clinic_notes.model';
import {InsuranceCompanyModelRead} from '../../core/models/insurance_comapny.model';
import {ClinicRemitsService} from '../../core/services/clinic_remits.service';
import {ClinicNetworkService} from '../../core/services/clinic_network.service';
import {ClinicWebsiteLoginsService} from '../../core/services/clinic_website_login.service';
import {ClinicOfficeHoursService} from '../../core/services/clinic_office_hours.service';

@Component({
  selector: 'app-admin-clinics-page',
  templateUrl: './admin-clinics-page.component.html',
  styleUrls: ['./admin-clinics-page.component.scss']
})
export class AdminClinicsPageComponent implements OnInit {

  isLoading = false;
  sessionUser = '';
  chiroTouch;
  clinicName = '';
  clinicNewId; // id of the clinic created
  insuranceCompanyData: InsuranceCompanyModelRead[] = [];
  remitsOptionsSelect = [];
  networkOptionsSelect = [
    {value: 1, label: 'YES'},
    {value: 0, label: 'NO'}
  ];

  officeHoursWeek = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  };


  constructor(
    private clinicService: ClinicService,
    private clinicNotesService: ClinicNotesService,
    private clinicBillingService: ClinicBillingService,
    private clinicAgingService: ClinicAgingService,
    private clinicPatientStatementService: ClinicPatientStatementService,
    private clinicDepositEntryService: ClinicDepositEntryService,
    private clinicMonthEndService: ClinicMonthEndService,
    private insuranceCompanyService: InsuranceCompanyService,
    private clinicRemitsService: ClinicRemitsService,
    private clinicNetworkService: ClinicNetworkService,
    private clinicOfficeHoursService: ClinicOfficeHoursService,
    private clinicWebsiteLoginsService: ClinicWebsiteLoginsService,
    private toastrService: ToastService
  ) {
  }

  clinicForm = new FormGroup({
    displayName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    clinicName: new FormControl('', [Validators.required]),
    streetAddress: new FormControl('', [Validators.required]),
    streetAddressTwo: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    clinicEmail: new FormControl('', [Validators.required]),
    clinicPhone: new FormControl('', [Validators.required]),
    clinicFax: new FormControl('', ),
    taxId: new FormControl(''),
    mtbCode: new FormControl(''),
    mtbStartDate: new FormControl(''),
    chiroAssociation: new FormControl('', ),
    chiroTouch: new FormControl('', ),
    infinediCode: new FormControl('', ),
    grpNpi: new FormControl('', ),
    remoteAccess: new FormControl('', ),
    remoteUserName: new FormControl(''),
    remotePassword: new FormControl(''),
    isActive: new FormControl(''),
    dateCreated: new FormControl('')
  });

  clinicNoteForm = new FormGroup({
    clientContact: new FormControl('', [Validators.required]),
    mtmi: new FormControl('', [Validators.required]),
    treatmentNotes: new FormControl('', [Validators.required])
  });

  clinicBillingForm = new FormGroup({
    billBackDays: new FormControl('', [Validators.required]),
    BillCaseTypePro: new FormControl('', ),
    BillingNotes: new FormControl('', )
  });

  clinicAgingForm = new FormGroup({
    agingCaseTypePro: new FormControl('', [Validators.required]),
    oldAgeDates: new FormControl('', ),
    currentAgeDates: new FormControl('', ),
    compAgeDates: new FormControl('', ),
    agingNotes: new FormControl('', )
  });

  clinicPatientStatementForm = new FormGroup({
    patCaseTypePro: new FormControl('', [Validators.required]),
    patGlobWriteOff: new FormControl('', ),
    patientStatementMote: new FormControl('', ),
  });

  clinicDepositEntryForm = new FormGroup({
    depositName: new FormControl('', [Validators.required]),
    depositPr: new FormControl('', ),
    depositStatus: new FormControl('', ),
    writeOff: new FormControl('', ),
    depositEntryNote: new FormControl('', ),
  });

  clinicMonthEndForm = new FormGroup({
    monthCaseTypePro: new FormControl('', [Validators.required]),
    ctCashCodes: new FormControl('', ),
    clinicInvoiceEmail: new FormControl('', ),
    statsGraph: new FormControl('', ),
    statsGraphToClinic: new FormControl('', ),
    monthEndNote: new FormControl('', ),
  });

  clinicRemitsForm = new FormGroup({
    insuranceCompId: new FormControl('', [Validators.required]),
    whereToFind: new FormControl('', ),
    whenToPost: new FormControl('', ),
    remitsNote: new FormControl('', ),
  });

  clinicNetworkForm = new FormGroup({
    insuranceCompId: new FormControl('', [Validators.required]),
    inNetwork: new FormControl('', ),
    inNetworkDate: new FormControl('', ),
    fileClaimTo: new FormControl('', ),
    networkNote: new FormControl('', ),
  });

  clinicWebsiteLoginsForm = new FormGroup({
    insuranceCompId: new FormControl('', [Validators.required]),
    websiteAddress: new FormControl('', ),
    userName: new FormControl('', ),
    password: new FormControl('', ),
    admin: new FormControl('', ),
    security: new FormControl('', ),
    webLoginNote: new FormControl('', ),
    isActive: new FormControl('', ),
  });

  clinicOfficeHoursForm = new FormGroup({
    monday: new FormControl('', ),
    monday_open: new FormControl('', ),
    monday_closed: new FormControl('', ),
    tuesday: new FormControl('', ),
    tuesday_open: new FormControl('', ),
    tuesday_closed: new FormControl('', ),
    wednesday: new FormControl('', ),
    wednesday_open: new FormControl('', ),
    wednesday_closed: new FormControl('', ),
    thursday: new FormControl('', ),
    thursday_open: new FormControl('', ),
    thursday_closed: new FormControl('', ),
    friday: new FormControl('', ),
    friday_open: new FormControl('', ),
    friday_closed: new FormControl('', ),
    saturday: new FormControl('', ),
    saturday_open: new FormControl('', ),
    saturday_closed: new FormControl('', ),
    sunday: new FormControl('', ),
    sunday_open: new FormControl('', ),
    sunday_closed: new FormControl('', ),
    officeHoursNote: new FormControl('', )
  });


  ngOnInit() {
    console.log(this.clinicService.selectedClinicData);
    this.sessionUser = localStorage.getItem('loggedUser');
    this.onGetInsuranceCompany();
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
   * @description populate remitsOptionsSelect with insurance company data
   */
  onPopulateDropDown(): void {
    this.isLoading = true;
    const dataOne = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.insuranceCompanyData.length; i++) { // populate insurance company dropdown under remits
      dataOne.push({value: this.insuranceCompanyData[i].insuranceCompId, label: this.insuranceCompanyData[i].name});
      this.remitsOptionsSelect = dataOne;
    }
    this.isLoading = false;
  }

  /**
   * @description create a new clinic
   */
  onSubmitClinic(): void {
    console.log(this.clinicForm.value);
    this.clinicService.createNewClinic(
      // this.generateRandomNumber(),
      this.clinicForm.value.displayName,
      this.clinicForm.value.clinicName,
      this.clinicForm.value.streetAddress,
      this.clinicForm.value.streetAddressTwo,
      this.clinicForm.value.city,
      this.clinicForm.value.state,
      this.clinicForm.value.zipCode,
      this.clinicForm.value.clinicEmail,
      this.clinicForm.value.clinicPhone,
      this.clinicForm.value.clinicFax,
      this.clinicForm.value.taxId,
      this.clinicForm.value.mtbCode,
      this.clinicForm.value.mtbStartDate,
      this.clinicForm.value.chiroAssociation,
      this.chiroTouch,
      this.clinicForm.value.infinediCode,
      this.clinicForm.value.grpNpi,
      this.clinicForm.value.remoteAccess,
      this.clinicForm.value.remotePassword,
      this.clinicForm.value.remotePassword,
      true,
      this.getCurrentDate().toString(),
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicName = this.clinicForm.value.displayName;
    this.resetClinicForm();
  }

  /**
   * @description add a note to the clinic created
   */
  onSubmitClinicNote(): void {
    console.log(this.clinicNoteForm.value);
    this.clinicNotesService.createNewClinicNote(
      this.clinicNewId,
      this.clinicNoteForm.value.clientContact,
      this.clinicNoteForm.value.mtmi,
      this.clinicNoteForm.value.treatmentNotes,
      false
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicNoteForm.reset();
  }

  /**
   * @description add billing to the clinic created
   */
  onSubmitClinicBilling(): void {
    this.clinicBillingService.createNewClinicBilling(
      this.clinicNewId,
      this.clinicBillingForm.value.billBackDays,
      this.clinicBillingForm.value.BillCaseTypePro,
      this.clinicBillingForm.value.BillingNotes
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicBillingForm.reset();
  }

  /**
   * @description add aging to the clinic created
   */
  onSubmitClinicAging(): void {
    this.clinicAgingService.createNewClinicAging(
      this.clinicNewId,
      this.clinicAgingForm.value.agingCaseTypePro,
      this.clinicAgingForm.value.oldAgeDates,
      this.clinicAgingForm.value.currentAgeDates,
      this.clinicAgingForm.value.compAgeDates,
      this.clinicAgingForm.value.agingNotes
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicAgingForm.reset();
  }

  /**
   * @description add patient statement to the clinic created
   */
  onSubmitClinicPatientStatement(): void {
    this.clinicPatientStatementService.createNewClinicPatientStatement(
      this.clinicNewId,
      this.clinicPatientStatementForm.value.patCaseTypePro,
      this.clinicPatientStatementForm.value.patGlobWriteOff,
      this.clinicPatientStatementForm.value.patientStatementMote
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicPatientStatementForm.reset();
  }

  /**
   * @description add clinic deposit entry to the clinic created
   */
  onSubmitClinicDepositEntry(): void {
    this.clinicDepositEntryService.createNewClinicDepositEntry(
      this.clinicNewId,
      this.clinicDepositEntryForm.value.depositName,
      this.clinicDepositEntryForm.value.depositPr,
      this.clinicDepositEntryForm.value.depositStatus,
      this.clinicDepositEntryForm.value.writeOff,
      this.clinicDepositEntryForm.value.depositEntryNote
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicDepositEntryForm.reset();
  }

  /**
   *
   * @description add clinic month end to the clinic created
   */
  onSubmitClinicMonthEnd(): void {
    this.clinicMonthEndService.createNewClinicMonthEnd(
      this.clinicNewId,
      this.clinicMonthEndForm.value.monthCaseTypePro,
      this.clinicMonthEndForm.value.ctCashCodes,
      this.clinicMonthEndForm.value.clinicInvoiceEmail,
      this.clinicMonthEndForm.value.statsGraph,
      this.clinicMonthEndForm.value.statsGraphToClinic,
      this.clinicMonthEndForm.value.monthEndNote
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicMonthEndForm.reset();
  }

  /**
   *
   * @description add clinic remits to the clinic created
   */
  onSubmitClinicRemits(): void {
    this.clinicRemitsService.createNewClinicRemits(
      this.clinicNewId,
      this.clinicRemitsForm.value.insuranceCompId,
      this.clinicRemitsForm.value.whereToFind,
      this.clinicRemitsForm.value.whenToPost,
      this.clinicRemitsForm.value.remitsNote,
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicRemitsForm.reset();
  }

  /**
   *
   * @description add clinic network to the clinic created
   */
  onSubmitClinicNetwork(): void {
    this.clinicNetworkService.createNewClinicNetwork(
      this.clinicNewId,
      this.clinicNetworkForm.value.insuranceCompId,
      this.clinicNetworkForm.value.inNetwork,
      this.clinicNetworkForm.value.inNetworkDate,
      this.clinicNetworkForm.value.fileClaimTo,
      this.clinicNetworkForm.value.networkNote,
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicNetworkForm.reset();
  }

  /**
   *
   * @description add clinic office hours to the clinic created
   */
  onSubmitClinicOfficeHour(): void {

    const formData = this.clinicOfficeHoursForm.value;
    const hoursData = {
      monday: formData.monday_open + '  to  ' + formData.monday_closed,
      tuesday: formData.tuesday_open + '  to  ' + formData.tuesday_closed,
      wednesday: formData.wednesday_open + '  to  ' + formData.wednesday_closed,
      thursday: formData.thursday_open + '  to  ' + formData.thursday_closed,
      friday: formData.friday_open + '  to  ' + formData.friday_closed,
      saturday: formData.saturday_open + '  to  ' + formData.saturday_closed,
      sunday: formData.sunday_open + '  to  ' + formData.sunday_closed,
    };

    this.clinicOfficeHoursService.createNewClinicOfficeHour(
      this.clinicNewId,
      hoursData.monday,
      hoursData.tuesday,
      hoursData.wednesday,
      hoursData.thursday,
      hoursData.friday,
      hoursData.saturday,
      hoursData.sunday,
      this.clinicOfficeHoursForm.value.officeHoursNote,
    )
      .subscribe(data => {
        this.showSuccessCreated();
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
    this.clinicOfficeHoursForm.reset();
  }

  /**
   * @description get today' date and format
   */
  getCurrentDate() {
    return new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  }

  /**
   * @description get the id of the clinic created
   */
  onAssignClinicId() {
    this.clinicService.getClinicByDisplayName(this.clinicName)
      .subscribe(data => {
        this.clinicNewId = data[0].clinicId;
      }, (error => this.showFailCreated(error.statusText + ' ' + error.error.error)));
  }

  /**
   * @description reset the form
   */
  resetClinicForm() {
    this.chiroTouch = '- Chiro Touch -';
    this.clinicForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicBillingForm() {
    this.clinicBillingForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicAgingForm() {
    this.clinicAgingForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicPatientStatementForm() {
    this.clinicPatientStatementForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicDepositEntryForm() {
    this.clinicDepositEntryForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicMonthEndForm() {
    this.clinicMonthEndForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicRemitsForm() {
    this.clinicRemitsForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicNetworkForm() {
    this.clinicNetworkForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicWebsiteLoginsForm() {
    this.clinicWebsiteLoginsForm.reset();
  }

  /**
   * @description reset the form
   */
  resetClinicOfficeHoursForm() {
    this.clinicOfficeHoursForm.reset();
  }

  /**
   * @description display the welcome message
   */
  showSuccessCreated() {
    const options = {opacity: 1};
    this.toastrService.success('Successfully created!', 'Success', options);
  }

  /**
   * @description display the fail notification when unable to create a clinic
   */
  showFailCreated(text) {
    const options = {opacity: 1};
    this.toastrService.error(text, 'Fail to create', options);
  }

  /**
   * @description event handler for the select element's change event (chiro touch)
   */
  selectChangeHandler(event: any) {
    // update the ui
    this.chiroTouch = event.target.value;
  }
}
