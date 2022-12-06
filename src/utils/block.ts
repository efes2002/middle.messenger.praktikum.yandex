import { v4 as makeUUID } from 'uuid';
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import EventBus from './eventBus';

export type Children = Record<string, Block>;
export type Props = {
  [key: string]: any | Block;
  children?: Children;
  events?: Record<string, (...args: any) => void>;
};

export default abstract class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  props: Props;

  _element: HTMLElement;

  _meta: { props: Props };

  _eventBus: () => EventBus;

  _id: string = makeUUID();

  children: Children;

  protected constructor(childrenAndProps: Props = {}) {
    const { props, children } = this._getChildrenAndProps(childrenAndProps);
    const eventBus = new EventBus();
    this._eventBus = () => eventBus;
    this._meta = { props };
    this._id = makeUUID();
    this.children = children;
    this.props = this._makePropsProxy(props);
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  get element() {
    return this._element;
  }

  // eslint-disable-next-line class-methods-use-this
  _getChildrenAndProps(childrenAndProps: Props) {
    const props: Props = {};
    const children: Children = {};
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

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
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
      this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  _makePropsProxy(props: Props) {
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        self._eventBus()
          .emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
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
    this._eventBus()
      .emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
  }

  getContent() {
    return this.element;
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }
    // @ts-ignore
    Object.assign(this.props, nextProps);
  };

  dispatchComponentDidMount() {
    this._eventBus()
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
        const stub = temp.content.querySelector(`[data-id="${component._id}"]`);
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
