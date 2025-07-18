export interface IUserWithTokens {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}
//модель відовіді з токенами з бази даних для логування
