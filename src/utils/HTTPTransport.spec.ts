import { expect } from 'chai';
import Sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport';

describe('Тест HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = Sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    instance = new HTTPTransport('/auth');
  });

  afterEach(() => {
    requests.length = 0;
  });

  it('метод get должен отправить запрос GET', () => {
    instance.get('/user', {});

    const [request] = requests;

    expect(request.method).to.eq('GET');
  });

  it('метод get должен отправить запрос POST', () => {
    instance.post('/user', {});

    const [request] = requests;

    expect(request.method).to.eq('POST');
  });

  it('метод get должен отправить запрос PUT', () => {
    instance.put('/user', {});

    const [request] = requests;

    expect(request.method).to.eq('PUT');
  });

  it('метод get должен отправить запрос на DELETE', () => {
    instance.delete('/user', {});

    const [request] = requests;

    expect(request.method).to.eq('DELETE');
  });
});
