export interface ClinicDepositEntryModel {
  clinicId: number;
  depositName: string;
  depositPr: string;
  depositStatus: string;
  writeOff: string;
  note: string;
}

export interface ClinicDepositEntryModelRead {
  depositEntryId: number;
  clinicId: number;
  depositName: string;
  depositPr: string;
  depositStatus: string;
  writeOff: string;
  note: string;
}
