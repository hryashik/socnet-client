import axios, { AxiosError } from 'axios';
import { ILoginContract } from './contracts';

class Api {
  private readonly baseUrl: string;
  constructor(url: string) {
    this.baseUrl = url;
  }

  public async login(dto: ILoginContract) {
    try {
      console.log(dto)
      const response = await axios.post(`${this.baseUrl}/auth/login`, dto);
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data)
      }
    }
  }
}

export default new Api(process.env.REACT_APP_BASE_URL as string);
