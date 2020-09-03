export interface UserModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isActive: boolean;
  isAdmin: boolean;
  dateCreated: string;
}

export interface UserModelRead {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isActive: boolean;
  isAdmin: boolean;
  dateCreated: string;
}

export interface UserModelUpdate {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
}

