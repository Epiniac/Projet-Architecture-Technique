import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export enum EOrigineApi {
  SANDBOX = 'https://6myb3pibvnn6vr6gggmd7f3uie0jschy.lambda-url.eu-west-3.on.aws/'
}

export enum EMethod {
  GET = 'GET',
  POST = 'POST',
  UPDATE = 'PUT', 
  DELETE = 'DELETE',
}

export interface IDatas {
  method: EMethod;
  origineApi: EOrigineApi;
  pathname: string;
  headers?: Record<string, string>;
  body?: any;
}

export class AxiosService {

  constructor(){}

  private getToken(): string | null {
    const storage = JSON.parse(localStorage.getItem('state') || '{}');
    return storage?.access_token || null;
  }

  async send(datas: IDatas): Promise<AxiosResponse | null> {
    try {
      const token = this.getToken();

      const config: AxiosRequestConfig = {
        url: datas.origineApi + datas.pathname,
        method: datas.method,
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': `Bearer ${token}` }), 
          ...datas.headers
        },
        data: datas.body
      };

      const response = await axios(config);
      return response;
    } catch (e: any) {
      console.error('Error in AxiosService:', e.message);
      return null;
    }
  }
  
} 

export default new AxiosService()