type Options = {
  data?: any;
  method?: string;
  headers?: any;
};

type FunHTTP = (arg0: string, arg1: Options) => Promise<unknown>;

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

  get:FunHTTP = (path, options = {}) => {
    const params = options.data ? queryStringify(options.data) : '';
    return this.request(
      this.endpoint + path + params,
      { ...options, method: METHODS.GET },
    );
  };

  put:FunHTTP = (path, options = {}) => this.request(
    this.endpoint + path,
    { ...options, method: METHODS.PUT },
  );

  post:FunHTTP = (path, options = {}) => this.request(
    this.endpoint + path,
    { ...options, method: METHODS.POST },
  );

  delete:FunHTTP = (path, options = {}) => this.request(
    this.endpoint + path,
    { ...options, method: METHODS.DELETE },
  );

  // eslint-disable-next-line class-methods-use-this
  request = (url: string, options: any) => {
    const { method, headers = {}, data = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      // eslint-disable-next-line @typescript-eslint/no-shadow
      function setHeaders(headers: any) {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const key in headers) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }
      setHeaders(headers);

      if (method === METHODS.GET) { xhr.send(); } else { xhr.send(JSON.stringify(data)); }

      // eslint-disable-next-line func-names
      xhr.onload = function () { resolve(xhr); };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
    });
  };
}
