export interface ClinicRemitsModel {
  clinicId: number;
  insuranceCompId: number;
  whereToFind: string;
  whenToPost: string;
  note: string;
}

export interface ClinicRemitsModelRead {
  remitsId: number;
  clinicId: number;
  insuranceCompId: number;
  whereToFind: string;
  whenToPost: string;
  note: string;
}
