export interface ClinicBillingModel {
  clinicId: number;
  billBackDays: number;
  BillCaseTypePro: string;
  BillingNotes: string;
}

export interface ClinicBillingModelRead {
  billingId: number;
  clinicId: number;
  billBackDays: number;
  BillCaseTypePro: string;
  BillingNotes: string;
}
