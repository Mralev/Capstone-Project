export interface ClinicMonthEndModel {
  clinicId: number;
  monthCaseTypePro: string;
  ctCashCodes: string;
  clinicInvoiceEmail: string;
  statsGraph: string;
  statsGraphToClinic: string;
  note: string;
}

export interface ClinicMonthEndModelRead {
  monthEndId: number;
  clinicId: number;
  monthCaseTypePro: string;
  ctCashCodes: string;
  clinicInvoiceEmail: string;
  statsGraph: string;
  statsGraphToClinic: string;
  note: string;
}
