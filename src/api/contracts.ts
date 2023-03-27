export interface ILoginRequest {
  email: string
  password: string
}
export interface ILoginResponse {
  access_token: string
}
export interface ISignupRequest {
  email: string
  password: string
}

export interface IGetUserResponse {
  email: string;
  id: number;
  avatar: string | null;
  firstName: string
  secondName: string
  displayName: string | null;
  noticeRoomId: string;
}