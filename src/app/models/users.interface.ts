export type Roles = 'USER' | 'ADMIN';

export interface UserI {
  email: string;
  password: string;
  lastName: string;
  name: string;
  userName: string;
  password2: string;
  city: string;
  country: string;
  token: string;
  userId: number;
  role: Roles;
}


