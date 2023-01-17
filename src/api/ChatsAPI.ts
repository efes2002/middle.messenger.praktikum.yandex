import HTTPTransport from '../utils/HTTPTransport';
import { User } from './AuthAPI';

export interface PasswordData {
  oldPassword: string;
  newPassword: string;
};

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  }
}

export class ChatsAPI {
  protected _http: HTTPTransport;

  constructor(endpoint: string) {
    this._http = new HTTPTransport(endpoint);
  }

  create(title: string) {
    return this._http.post('', {
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  delete(id: number): Promise<unknown> {
    return this._http.delete('', {
      body: JSON.stringify({ chatId: id }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  read(): Promise<unknown> {
    return this._http.get('', {});
  }

  getUsers(id: number): Promise<unknown> {
    return this._http.get(`/${id}/users`, {});
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this._http.put('/users', {
      body: JSON.stringify({ users, chatId: id }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  async getToken(id: number): Promise<string> {
    const response: any = await this._http.post(`/token/${id}`, {});
    return JSON.parse(response).token;
  }
}

export default new ChatsAPI('/chats');
