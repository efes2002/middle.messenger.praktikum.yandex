type Options = {
  data?: any;
  method?: string;
  headers?: any;
  timeout?: number;
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
  get:FunHTTP = (url, options = {}) => {
    const params = options.data ? queryStringify(options.data) : '';
    return this.request(url + params, { ...options, method: METHODS.GET }, options.timeout);
  };

  put:FunHTTP = (url, options = {}) => this.request(
    url,
    { ...options, method: METHODS.PUT },
    options.timeout,
  );

  post:FunHTTP = (url, options = {}) => this.request(
    url,
    { ...options, method: METHODS.POST },
    options.timeout,
  );

  delete:FunHTTP = (url, options = {}) => this.request(
    url,
    { ...options, method: METHODS.DELETE },
    options.timeout,
  );

  // eslint-disable-next-line class-methods-use-this
  request = (url: string, options: any, timeout = 5000) => {
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
      xhr.timeout = timeout;

      if (method === METHODS.GET) { xhr.send(); } else { xhr.send(JSON.stringify(data)); }

      // eslint-disable-next-line func-names
      xhr.onload = function () { resolve(xhr); };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
    });
  };
}
