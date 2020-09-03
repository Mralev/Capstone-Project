export interface InsuranceCompanyModel {
  name: string;
  phone: string;
  fax: string;
  note: string;
  isActive: boolean;
}

export interface InsuranceCompanyModelRead {
  insuranceCompId: number;
  name: string;
  phone: string;
  fax: string;
  note: string;
  isActive: boolean;
}

export interface InsuranceCompanyModelSearch {
  insuranceCompId: number;
}

