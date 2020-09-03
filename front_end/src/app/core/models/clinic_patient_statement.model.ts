export interface ClinicPatientStatementModel {
  clinicId: number;
  patCaseTypePro: string;
  patGlobWriteOff: string;
  note: string;
}

export interface ClinicPatientStatementModelRead {
  patientStatementId: number;
  clinicId: number;
  patCaseTypePro: string;
  patGlobWriteOff: string;
  note: string;
}
