import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InsuranceCompanyService} from '../../../core/services/insurance_company.service';
import {InsuranceCompanyModelRead} from '../../../core/models/insurance_comapny.model';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {ToastService} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-insurance-company-manage',
  templateUrl: './insurance-company-manage.component.html',
  styleUrls: ['./insurance-company-manage.component.scss']
})
export class InsuranceCompanyManageComponent implements OnInit {


  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;

  insCompData: InsuranceCompanyModelRead[] = [];
  elements: any = [];
  headElements = ['Id', 'Name', 'Phone', 'Fax', 'Is Active', 'Action'];
  searchText = '';
  previous: string;
  selectedInsComp = null;
  activeOptionsSelect = [];
  isAdmin = '';
  isActive = '';

  editForm = new FormGroup({
    insuranceCompId: new FormControl('', ),
    name: new FormControl('', ),
    phone: new FormControl('', ),
    fax: new FormControl('', ),
    note: new FormControl('', ),
    isActive: new FormControl('', )
  });

  constructor(
    private insuranceCompanyService: InsuranceCompanyService,
    private toastrService: ToastService
  ) {
  }

  @HostListener('input') oninput() {
    this.searchNames();
  }

  ngOnInit() {
    this.onGetInsComp();
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
  onGetInsComp(): void {
    this.insuranceCompanyService.getInsuranceCompanyFullList()
      .subscribe(data => {
        console.log(data);
        this.insCompData = data;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.length; i++) {

          // @ts-ignore
          const isUserActive = data[i].isActive === 1 ? 'YES' : 'NO';

          this.elements.push({
            id: data[i].insuranceCompId,
            name: data[i].name,
            phone: data[i].phone,
            fax: data[i].fax,
            isActive: isUserActive,
            note: data[i].note
          });
        }
      }, (error => console.log(error)));
    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
  }

  /**
   * @description get the selected insurance company
   */
  onGetSelectedInsComp(userId): void {
    this.selectedInsComp = userId;
  }

  /**
   * @description set form value
   */
  onSetEditFormValue(): void {
    this.editForm.setValue(
      {
        insuranceCompId: this.insCompData[this.selectedInsComp].insuranceCompId,
        name: this.insCompData[this.selectedInsComp].name,
        phone: this.insCompData[this.selectedInsComp].phone,
        fax: this.insCompData[this.selectedInsComp].fax,
        isActive: this.insCompData[this.selectedInsComp].isActive,
        note: this.insCompData[this.selectedInsComp].note,
      });
    this.onPopulateSelect();
  }

  /**
   * @description populate select drop-downs
   */
  onPopulateSelect(): void {

    this.activeOptionsSelect = [
      { value: 1, label: 'YES' },
      { value: 0, label: 'NO' },
    ];

    this.isActive = this.editForm.value.isActive === 1 ? 'YES' : 'NO';
  }

  /**
   * @description update insurance company
   */
  onUpdateInsuranceCompany(): void {
    this.insuranceCompanyService.updateInsuranceCompany(
      this.insCompData[this.selectedInsComp].insuranceCompId,
      this.editForm.value.name,
      this.editForm.value.phone,
      this.editForm.value.fax,
      this.editForm.value.note,
      this.editForm.value.isActive
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
