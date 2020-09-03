import {OnInit} from '@angular/core';
import {Component, HostListener, ViewChild} from '@angular/core';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {ToastService} from 'ng-uikit-pro-standard';
import {Router} from '@angular/router';
import {LoginService} from '../core/services/login.service';
import {FavoriteClinicService} from '../core/services/favorite_clinic.services';
import {FavoriteClinic} from '../core/models/favorite_clinic.model';
import {ClinicService} from '../core/services/clinics.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loggedInUser = '';
  isAdmin;
  favoriteClinicData = [];
  selectedClinicName = '';
  disableFav = this.router.url.includes('clinic') ? true : false;

  constructor(
    private router: Router,
    private toastrService: ToastService,
    private loginService: LoginService,
    private favoriteClinicService: FavoriteClinicService,
    private clinicService: ClinicService,
  ) {}

  ngOnInit() {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    this.isAdminUser();
    this.onGetLoggedInUser();
    this.onVerifyActiveSession();
    this.onGetUserFavoriteClinic();
  }

  /**
   * @description get the logged in user first and last anme
   */
  onGetLoggedInUser(): void {
    this.loggedInUser = localStorage.getItem('loggedUser');
  }

  /**
   * @description navigate to the admin page
   */
  openClinicsPage(): void {
    this.router.navigateByUrl('/admin');
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
   * @description display session expired message
   */
  showWrongSession(): void {
    const options = { opacity: 1 };
    this.toastrService.warning('Please login first', 'Unknown Session', options);
  }

  /**
   * @description logout
   */
  onLogout(): void {
    localStorage.clear();
  }

  /**
   * @description verify the user right
   */
  isAdminUser(): void {
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    this.loginService.isAdminUser(localStorage.getItem('is_admin'))
      .subscribe( data => {
        // tslint:disable-next-line:triple-equals
        if (data.status == 1) {
          this.isAdmin = 1;
          // tslint:disable-next-line:triple-equals
        } else if (data.status == 0) {
          this.isAdmin = 0;
        }
      }, (error => console.log(error)));
  }

  /**
   * @description get all favorite clinic by user
   */
  onGetUserFavoriteClinic(): void {
    const id = Number(localStorage.getItem('session id'));
    this.favoriteClinicService.findFavoriteClinics(id)
      .subscribe( data => {
        // @ts-ignore
        this.favoriteClinicData.push(data);
        this.favoriteClinicService.selectedFavoriteClinicData = this.favoriteClinicData;
        this.favoriteClinicData = this.favoriteClinicData[0];
      }, (error => console.log(error)));
  }

  /**
   * @description open a clinic by name
   */
  onOpenClinic(selectedClinicName: string): void {
    this.clinicService.getClinicByDisplayName(selectedClinicName)
      .subscribe(data => {
        // @ts-ignore
        this.clinicService.selectedClinicData = data;
      }, (error => this.showFailOpen(error.statusText + ' ' + error.error.error)));
  }

  /**
   * @description display error message
   */
  showFailOpen(text) {
    const options = {opacity: 1};
    this.toastrService.error(text, 'Fail to open clinic', options);
  }

}
