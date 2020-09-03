export interface ClinicsModel {
  // clinicId: number;
  displayName: string;
  clinicName: string;
  streetAddress: string;
  streetAddressTwo: string;
  city: string;
  state: string;
  zipCode: string;
  clinicEmail: string;
  clinicPhone: string;
  clinicFax: string;
  taxId: string;
  mtbCode: string;
  mtbStartDate: string;
  chiroAssociation: string;
  chiroTouch: boolean;
  infinediCode: string;
  grpNpi: string;
  remoteAccess: string;
  remoteUserName: string;
  remotePassword: string;
  isActive: boolean;
  dateCreated: string;
}

export interface ClinicsModelRead {
  clinicId: number;
  displayName: string;
  clinicName: string;
  streetAddress: string;
  streetAddressTwo: string;
  city: string;
  state: string;
  zipCode: string;
  clinicEmail: string;
  clinicPhone: string;
  clinicFax: string;
  taxId: string;
  mtbCode: string;
  mtbStartDate: string;
  chiroAssociation: string;
  chiroTouch: boolean;
  infinediCode: string;
  grpNpi: string;
  remoteAccess: string;
  remoteUserName: string;
  remotePassword: string;
  isActive: boolean;
  dateCreated: string;
}

export interface ClinicsModelFull {
  clinicId: number;
  displayName: string;
  clinicName: string;
  streetAddress: string;
  streetAddressTwo: string;
  city: string;
  state: string;
  zipCode: string;
  clinicEmail: string;
  clinicPhone: string;
  clinicFax: string;
  taxId: string;
  mtbCode: string;
  mtbStartDate: string;
  chiroAssociation: string;
  chiroTouch: boolean;
  infinediCode: string;
  grpNpi: string;
  remoteAccess: string;
  remoteUserName: string;
  remotePassword: string;
  isActive: boolean;
  dateCreated: string;
  clinic_billing: any;
  clinic_notes: any;
  clinic_aging: any;
  clinic_patient_statement: any;
  clinic_deposit_entry: any;
  clinic_month_end: any;
  clinic_remit: any;
  clinic_network: any;
  website_logins: any;
  clinic_office_hours: any;
  clinic_contacts: any;
}

export interface ClinicsModelDelete {
  displayName: string;
}

export interface ClinicsModelId {
  clinicId: number;
}

export interface ClinicBillingModel {
  billingId: number;
  clinicId: number;
  billBackDays: number;
  BillCaseTypePro: string;
  BillingNotes: string;
}
