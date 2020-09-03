export interface ClinicAgingModel {
  clinicId: number;
  agingCaseTypePro: string;
  oldAgeDates: string;
  currentAgeDates: string;
  compAgeDates: string;
  agingNotes: string;
}

export interface ClinicAgingModelRead {
  agingId: number;
  clinicId: number;
  agingCaseTypePro: string;
  oldAgeDates: string;
  currentAgeDates: string;
  compAgeDates: string;
  agingNotes: string;
}
