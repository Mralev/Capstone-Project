import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {PasswordResetPageComponent} from './password-reset-page/password-reset-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {UserCreateComponent} from './admin/user/user-create/user-create.component';
import {AdminClinicsPageComponent} from './admin-page/admin-clinics-page/admin-clinics-page.component';
import {ClinicDisplayPageComponent} from './clinic-display-page/clinic-display-page.component';
import {HomeTabsComponent} from './home-page/home-tabs/home-tabs.component';
import {InsuranceCompanyCreateComponent} from './admin/insurance-company/insurance-company-create/insurance-company-create.component';
import {WebsiteLoginsCreateComponent} from './admin/website-logins/website-logins-create/website-logins-create.component';
import {ClinicContactCreateComponent} from './admin/contact/clinic-contact-create/clinic-contact-create.component';
import {UserManageComponent} from './admin/user/user-manage/user-manage.component';
import {InsuranceCompanyManageComponent} from './admin/insurance-company/insurance-company-manage/insurance-company-manage.component';
import {PageInConstructionComponent} from './home-page/page-in-construction/page-in-construction.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'home', component: HomeTabsComponent},
  { path: 'clinic', component: ClinicDisplayPageComponent},
  { path: 'password-reset', component: PasswordResetPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: 'admin-user-create', component: UserCreateComponent},
  { path: 'admin-user-manage', component: UserManageComponent},
  { path: 'admin-clinic-create', component: AdminClinicsPageComponent},
  { path: 'insurance-company-create', component: InsuranceCompanyCreateComponent},
  { path: 'insurance-company-manage', component: InsuranceCompanyManageComponent},
  { path: 'website-logins-create', component: WebsiteLoginsCreateComponent},
  { path: 'contact-create', component: ClinicContactCreateComponent},
  { path: 'working', component: PageInConstructionComponent},
  { path: '**', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
