export interface JwtResponseI {
  dataUser:{
    email: string;
    password: string;
    lastName: string;
    name: string;
    userName: string;
    password2: string;
    city: string;
    country: string;
    token: string;
    expires: string;
    expiresIn: string;
    userId: number;
    message: string;
  }

}
