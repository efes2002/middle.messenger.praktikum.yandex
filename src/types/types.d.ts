declare module '*.hbs';
declare module 'handlebars';

declare global {
  interface Window {
    togglePage:any;
  }
}

export type State = any;
