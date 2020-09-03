import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordResetPageComponent } from './password-reset-page/password-reset-page.component';
import { HttpClientModule  } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'angular-bootstrap-md';
import { HomeTabsComponent } from './home-page/home-tabs/home-tabs.component';
import {
  AccordionModule,
  MDBBootstrapModulesPro, ProgressBars,
  SelectModule,
  SidenavModule,
  StepperModule,
  TabsModule,
  ToastModule
} from 'ng-uikit-pro-standard';
import { SearchTableComponent } from './home-page/search-table/search-table.component';
import { AdminClinicsPageComponent } from './admin-page/admin-clinics-page/admin-clinics-page.component';
import { ClinicDisplayPageComponent } from './clinic-display-page/clinic-display-page.component';
import { InsuranceCompanyComponent } from './admin/insurance-company/insurance-company.component';
import { InsuranceCompanyCreateComponent } from './admin/insurance-company/insurance-company-create/insurance-company-create.component';
// tslint:disable-next-line:max-line-length
import { ClinicDisplayWebloginsDatatableComponent } from './clinic-display-page/clinic-display-weblogins-datatable/clinic-display-weblogins-datatable.component';
// tslint:disable-next-line:max-line-length
import { ClinicAdminCreateOfficeHourComponent } from './admin-page/admin-clinics-page/clinic-admin-create-office-hour/clinic-admin-create-office-hour.component';
import {WebsiteLoginsCreateComponent} from './admin/website-logins/website-logins-create/website-logins-create.component';
import { ClinicContactCreateComponent } from './admin/contact/clinic-contact-create/clinic-contact-create.component';
import {UserCreateComponent} from './admin/user/user-create/user-create.component';
import { ClinincDisplayContactDatatableComponent } from './clinic-display-page/clininc-display-contact-datatable/clininc-display-contact-datatable.component';
import { UserManageComponent } from './admin/user/user-manage/user-manage.component';
import { InsuranceCompanyManageComponent } from './admin/insurance-company/insurance-company-manage/insurance-company-manage.component';
import { HomeDropboxComponent } from './home-page/home-tabs/home-dropbox/home-dropbox.component';
import { HomeResourceComponent } from './home-page/home-tabs/home-resource/home-resource.component';
import { PageInConstructionComponent } from './home-page/page-in-construction/page-in-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PasswordResetPageComponent,
    HomePageComponent,
    AdminPageComponent,
    UserCreateComponent,
    HomeTabsComponent,
    SearchTableComponent,
    AdminClinicsPageComponent,
    ClinicDisplayPageComponent,
    InsuranceCompanyComponent,
    InsuranceCompanyCreateComponent,
    ClinicDisplayWebloginsDatatableComponent,
    ClinicAdminCreateOfficeHourComponent,
    WebsiteLoginsCreateComponent,
    ClinicContactCreateComponent,
    ClinincDisplayContactDatatableComponent,
    UserManageComponent,
    InsuranceCompanyManageComponent,
    HomeDropboxComponent,
    HomeResourceComponent,
    PageInConstructionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MDBBootstrapModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        DropdownModule,
        MDBBootstrapModule.forRoot(),
        ToastModule.forRoot(),
        AccordionModule,
        SidenavModule,
        TabsModule.forRoot(),
        StepperModule,
        SelectModule,
        ProgressBars,
        TabsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
