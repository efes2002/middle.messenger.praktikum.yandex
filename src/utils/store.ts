import { State } from '../types/types';

export default class Store {
  private _state: State = {};

  private _onBlockArray: Array<any> = [];

  public getState() {
    return this._state;
  }

  public setState(state: any) {
    this._state = { ...this._state, ...state };
    this._onBlockArray.forEach((block: any) => block.setProps({ ...this._state }));
  }

  public initializationState(state: any) {
    this._state = { ...this._state, ...state };
  }

  public on(block: any) {
    this._onBlockArray.push(block);
  }
}
