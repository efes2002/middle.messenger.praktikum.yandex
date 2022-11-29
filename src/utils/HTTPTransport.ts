type Options = {
    data?: unknown;
    method?: string;
    headers?: unknown;
    timeout?: number;
}

type funHTTP = (string , Options) => Promise<unknown>;

const METHODS: Record<string, string> = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
};

function queryStringify(data: any): string {
    return "?" + Object
        .entries(data)
        .map((item)=>`${item[0]}=${item[1]}`)
        .join("&")
}

export class HTTPTransport {

    get:funHTTP  = (url, options = {}) => {
        const params = options.data ? queryStringify(options.data) : '';
        return this.request(url + params, {...options, method: METHODS.GET}, options.timeout);
    };

    put:funHTTP = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post:funHTTP = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    delete:funHTTP = (url, options = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url, options, timeout = 5000) => {
        const {method, headers = {}, data = {}} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            function setHeaders(headers){
                for(let key in headers){
                    xhr.setRequestHeader(key, headers[key])
                }
            }
            setHeaders(headers);
            xhr.timeout = timeout;

            if (method === METHODS.GET) { xhr.send(); }
            else { xhr.send(JSON.stringify(data)); }

            xhr.onload = function() {resolve(xhr);};
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

        });
    };
}
