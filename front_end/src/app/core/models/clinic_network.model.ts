export interface ClinicNetworkModel {
  clinicId: number;
  insuranceCompId: number;
  inNetwork: boolean;
  inNetworkDate: string; // date
  fileClaimTo: string;
  note: string;
}


export interface ClinicNetworkModelRead {
  networkId: number;
  clinicId: number;
  insuranceCompId: number;
  inNetwork: boolean;
  inNetworkDate: string; // date
  fileClaimTo: string;
  note: string;
}
