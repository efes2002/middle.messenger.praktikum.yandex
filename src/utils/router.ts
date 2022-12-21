// eslint-disable-next-line max-classes-per-file
import Block from 'src/utils/block';

function render(query: string, block: Block | null) {
  const root = document.querySelector(query);
  if (root === null) { throw new Error(`root not found by selector "${query}"`); }
  root.innerHTML = '';
  root.append(block!.getContent()!);
  return root;
}

class Route {
  private readonly _pathname: string;

  private readonly _blockClass: any;

  private _block: Block | null = null;

  private readonly _query: string;

  constructor(pathname: string, view: typeof Block, query: string) {
    this._pathname = pathname;
    this._blockClass = view;
    this._query = query;
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass({});
      render(this._query, this._block);
    }
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
    this.routes = [];
    Router.__instance = this;
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, '#root');

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    };

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
