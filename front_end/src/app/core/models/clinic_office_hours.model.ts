import {FormControl, FormGroup} from '@angular/forms';

export interface ClinicOfficeHoursModel {
  clinicId: number;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  note: string;
}

export interface ClinicOfficeHoursModelRead {
  officeHoursId: number;
  clinicId: number;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  note: string;
}
