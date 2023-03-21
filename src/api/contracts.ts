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