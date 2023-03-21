import axios, { AxiosError, AxiosResponse } from 'axios';
import { ILoginRequest, ILoginResponse } from './contracts';

export interface IError {
  message: string;
}

class Api {
  private readonly baseUrl: string;
  constructor(url: string) {
    this.baseUrl = url;
  }

  public async login(dto: ILoginRequest): Promise<ILoginResponse | string> {
    try {
      const { data, status } = await axios.post<ILoginResponse>(
        `${this.baseUrl}/auth/login`,
        dto
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({error: error.response?.data.message})
        throw new Error('Incorrect credentials');
      } else {
        console.log({error: 'Unexpected Error'})
        throw new Error('unexpected error')
      }
    }
  }
}

export default new Api(process.env.REACT_APP_BASE_URL as string);
