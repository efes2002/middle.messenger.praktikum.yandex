type Options = {
  data?: any;
  method?: string;
  headers?: any;
};

type FunHTTP = (
  arg0: string,
  arg1: {},
) => Promise<unknown>;

const METHODS: Record<string, string> = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

function queryStringify(data: any): string {
  return `?${Object
    .entries(data)
    .map((item) => `${item[0]}=${item[1]}`)
    .join('&')}`;
}

export default class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get:FunHTTP = (path, options: Options = {}) => {
    const params = options.data ? queryStringify(options.data) : '';
    return this.request(
      this.endpoint + path + params,
      { ...options, method: METHODS.GET },
    );
  };

  put:FunHTTP = (path, options: Options = {}) => this.request(
    this.endpoint + path,
    { ...options, method: METHODS.PUT },
  );

  post:FunHTTP = (path, options: Options = {}) => this.request(
    this.endpoint + path,
    { ...options, method: METHODS.POST },
  );

  delete:FunHTTP = (path, options: Options = {}) => this.request(
    this.endpoint + path,
    { ...options, method: METHODS.DELETE },
  );

  // eslint-disable-next-line class-methods-use-this
  request = (url: string, options: any) => {
    const {
      method, headers = {}, body = {}, data = {},
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.withCredentials = true;

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        console.log(8801, xhr.status, xhr);
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !body) {
        xhr.send();
      } else {
        xhr.send(body);
      }
    });
  };
}
