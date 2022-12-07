// eslint-disable-next-line max-classes-per-file
import Block from 'src/utils/block';

class Route {
  private _pathname: string;

  private readonly _blockClass: any;

  private _block: Block | null = null;

  private _props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.getContent();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }

    const root = document.querySelector(this._props.rootQuery);

    root.innerHTML = '';
    root.appendChild(this._block!.getContent());
  }
}

export default class Router {
  private static __instance: Router;

  private routes: Array<Route> = [];

  private history = window.history;

  private _currentRoute: Route | null = null;

  constructor() {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }
    this._currentRoute = null;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: '#root' });

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (() => {
      this._onRoute(window.location.pathname);
    });

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) { return; }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
