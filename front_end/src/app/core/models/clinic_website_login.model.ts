export interface ClinicWebsiteLoginsModel {
  clinicId: number;
  insuranceCompId: number;
  websiteAddress: string;
  userName: string;
  password: string;
  admin: string;
  security: string;
  note: string;
  isActive: boolean;
}

export interface ClinicWebsiteLoginsModelRead {
  websiteLoginsId: number;
  clinicId: number;
  insuranceCompId: number;
  websiteAddress: string;
  userName: string;
  password: string;
  admin: string;
  security: string;
  note: string;
  isActive: boolean;
}
