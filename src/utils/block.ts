import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './eventBus';

type Nul<E> = E | null;

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  props: any | null = {};

  _element: Nul<HTMLElement> | null = null;

  _meta: { props: any } | null = null;

  // eslint-disable-next-line class-methods-use-this
  eventBus = (): any => EventBus;

  id = makeUUID();

  children: Record<string, Block> = {};

  constructor(childrenAndProps: any = {}) {
    const eventBus = new EventBus();
    const {
      props,
      children,
    } = this._getChildrenAndProps(childrenAndProps);
    this._meta = { props };
    this.id = makeUUID();
    this.children = children;
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  get element(): any {
    return this._element;
  }

  // eslint-disable-next-line class-methods-use-this
  _getChildrenAndProps(childrenAndProps: any) {
    const props: any = {};
    const children: any = {};
    Object.entries(childrenAndProps)
      .forEach(([key, value]: [string, any]) => {
        if (value instanceof Block) {
          children[key] = value;
        } else {
          props[key] = value;
        }
      });
    return {
      props,
      children,
    };
  }

  protected _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events)
      .forEach((eventName: string) => {
        this._element!.addEventListener(eventName, events[eventName]);
      });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  _createResources() {
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  _componentDidUpdate() {
    if (this.componentDidUpdate()) {
      this.eventBus()
        .emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  _makePropsProxy(props: any) {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: any, prop: any, value: any) {
        const oldTarget = { ...target };
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        self.eventBus()
          .emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _render() {
    const template = this.render();
    const fragment = this.compile(template, {
      ...this.props,
      children: this.children,
    });
    const newElement = fragment.firstElementChild as HTMLElement;
    this._element?.replaceWith(newElement);
    this._element = newElement;
    this._addEvents();
  }

  _init() {
    this._createResources();
    this.init();
    this.eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
  }

  getContent() {
    return this.element;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  dispatchComponentDidMount() {
    this.eventBus()
      .emit(Block.EVENTS.FLOW_CDM);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    return true;
  }

  compile(template: any, context: any) {
    const contextAndStubs: any = { ...context };
    const compiled = Handlebars.compile(template);
    const temp = document.createElement('template');
    temp.innerHTML = compiled(contextAndStubs);
    Object.entries(this.children)
      .forEach(([, component]: [string, Block]) => {
        const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
        if (!stub) {
          return;
        }
        stub.replaceWith(component.getContent());
      });
    return temp.content;
  }

  render() {
    return '';
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}
