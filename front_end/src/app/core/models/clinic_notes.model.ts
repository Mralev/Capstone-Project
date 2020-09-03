export interface ClinicNotesModel {
  clinicId: number;
  clientContact: string;
  mtmi: string;
  treatmentNotes: string;
  isDeleted: boolean;
}

export interface ClinicNotesModelRead {
  clinicNotesId: number;
  clinicId: number;
  clientContact: string;
  mtmi: string;
  treatmentNotes: string;
  isDeleted: boolean;
}

export interface ClinicNotesModelSearch {
  clinicId: number;
}

export interface ClinicNotesModelUpdateDelete {
  clinicNotesId: number;
}
