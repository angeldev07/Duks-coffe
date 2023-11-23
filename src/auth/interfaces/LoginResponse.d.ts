export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  rol: string;
};

export interface LoginResponse {
  message: string;
  token?: string;
  user: User;
}
