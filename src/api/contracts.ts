export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginResponse {
  access_token: string;
}
export interface ISignupRequest {
  email: string;
  password: string;
}

export interface IGetUserResponse {
  email: string;
  id: number;
  avatar: string | null;
  firstName: string;
  secondName: string;
  displayName: string | null;
  noticeRoomId: string;
}
export interface IMessage {
  author?: IGetUserResponse;
  id: number;
  authorId: number;
  text: string;
  dialogId: string;
  createdAt: Date;
  isRead: boolean;
}

export interface IDialog {
  Messages: IMessage[];
  id: string;
  usersId: number[];
}
