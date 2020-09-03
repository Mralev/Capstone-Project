export interface ClinicContactModel {
  clinicId: number;
  firstName: string;
  lastName: string;
  prefix: string;
  sufix: string;
  phone: string;
  fax: string;
  email: string;
  indNpi: number;
  isPrimary: boolean;
  isContact: boolean;
  isActive: boolean;
  note: string;
}


export interface ClinicContactModelRead {
  contactId: number;
  clinicId: number;
  firstName: string;
  lastName: string;
  prefix: string;
  sufix: string;
  phone: string;
  fax: string;
  email: string;
  indNpi: number;
  isPrimary: boolean;
  isContact: boolean;
  isActive: boolean;
  note: string;
}
