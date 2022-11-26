import {v4 as makeUUID} from 'uuid';
import {EventBus} from './eventBus.js';
import Handlebars from 'handlebars';

export default class Block {

    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    props = {};
    _element = null;
    _meta = null;
    eventBus = ()=> EventBus;
    id = makeUUID();
    children = {};

    constructor(childrenAndProps = {}) {
        const eventBus = new EventBus();
        const { props, children } = this._getChildrenAndProps(childrenAndProps)
        this._meta = { props };
        this.id = makeUUID();
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    get element() {
        return this._element;
    }

    _getChildrenAndProps(childrenAndProps) {
        const props = {};
        const children = {};
        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) { children[key] = value; }
            else { props[key] = value; }
        })
        return { props, children };
    }

    _addEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        };
    }

    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                const answer = typeof value === "function" ? value.bind(target): value;
                return answer
            },
            set(target, prop, value) {
                const oldTarget = { ...target };
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа")
            },
        });
    }

    _render() {
        const template = this.render();
        const fragment = this.compile(template, { ...this.props, children: this.children })
        const newElement = fragment.firstElementChild;
        this._element?.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }

    _init() {
        this._createResources();
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    init() {
    }

    getContent() {
        return this.element;
    }

    setProps = nextProps => {
        if (!nextProps) { return; }
        Object.assign(this.props, nextProps);
    };

    dispatchComponentDidMoun() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    componentDidMount(oldProps) {
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    compile(template, context) {
        const contextAndStubs = { ...context };
        const compiled = Handlebars.compile(template);
        const temp = document.createElement('template');
        temp.innerHTML = compiled(contextAndStubs);
        Object.entries(this.children).forEach(([name, component])=>{
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
            if (!stub) { return; }
            stub.replaceWith(component.getContent());
        })
        return temp.content;
    }

    render() {
        return '';
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}
