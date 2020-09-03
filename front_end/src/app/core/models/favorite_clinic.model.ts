export interface FavoriteClinic {
  userId: number;
  clinicId: number;
  isActive: boolean;
}

export interface FavoriteClinicRead {
  favoriteClinicId: number;
  userId: number;
  clinicId: number;
  isActive: boolean;
}

export interface FavoriteClinicSearchUser {
  userId: number;
}

export interface FavoriteClinicRemove {
  userId: number;
  clinicId: number;
}
