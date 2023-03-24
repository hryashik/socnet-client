import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import {
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
  ISignupRequest,
} from './contracts';

export interface IError {
  message: string;
}

class Api {
  private readonly baseUrl: string;
  constructor(url: string) {
    this.baseUrl = url;
  }

  public async login(dto: ILoginRequest): Promise<ILoginResponse> {
    try {
      const { data, status } = await axios.post<ILoginResponse>(
        `${this.baseUrl}/auth/login`,
        dto
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({ error: error.response?.data.message });
        throw new Error('Incorrect credentials');
      } else {
        console.log({ error: 'Unexpected Error' });
        throw new Error('unexpected error');
      }
    }
  }
  public async signup(dto: ISignupRequest): Promise<ILoginResponse> {
    try {
      const { data } = await axios.post<ILoginResponse>(
        `${this.baseUrl}/auth/signup`,
        dto
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message);
        throw new Error(error.message);
      } else {
        console.log(error);
        throw new Error('unexpected error');
      }
    }
  }
  public async getUser(): Promise<IGetUserResponse> {
    try {
      const { data } = await axios.get(`${this.baseUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('token'),
        },
      });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message);
        throw new Error(error.message);
      } else {
        console.log(error);
        throw new Error('unexpected error');
      }
    }
  }
  public async getUserById(id: string): Promise<IGetUserResponse> {
    try {
      const { data } = await axios.get<IGetUserResponse>(
        `${this.baseUrl}/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message)
        throw new Error(error.message)
      } else {
        console.log('unexpected error')
        throw new Error('unexpected error')
      }
    }
  }
}

export default new Api(process.env.REACT_APP_BASE_URL as string);
