import HTTPTransport from '../utils/HTTPTransport';

export interface PasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface ProfileData {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export class UserAPI {
  protected _http: HTTPTransport;

  constructor(endpoint: string) {
    this._http = new HTTPTransport(endpoint);
  }

  editAvatar(data: FormData) {
    return this._http.put('profile/avatar', {
      body: data,
    });
  }

  editPassword(data: PasswordData) {
    return this._http.put('password', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  editProfile(data: ProfileData) {
    return this._http.put('profile', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}

export default new UserAPI('/user/');
