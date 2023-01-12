import HTTPTransport from '../utils/HTTPTransport';

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
}

export default new UserAPI('/user/');
