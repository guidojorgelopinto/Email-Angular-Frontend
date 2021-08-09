export type Roles = 'USER' | 'ADMIN';

export interface UserI {
  email: string;
  password: string;
}
export interface ResponseI {
lastName: string;
name: string;
userName: string;
birthday: string;
city: string;
country: string;
token: string;
userId: string;
role: Roles;
message: string;
}

