// eslint-disable-next-line import/no-cycle
import { state } from './utils/state';
// eslint-disable-next-line import/no-cycle
import { registrationHelpers } from './utils/registrationHelpers';
// eslint-disable-next-line import/no-cycle
import PAGES, { PAGE_NAME } from './utils/listPageAndSetting';

function renderPages(pages: Record<string, any>): any {
  const objPages: Record<string, any> = {};
  Object.entries(pages)
    .forEach(([key, value]) => {
      // eslint-disable-next-line new-cap
      objPages[key] = new value({ ...state });
    });
  return objPages;
}

registrationHelpers();

const listPage = renderPages(PAGES);

export function togglePage(namePage: string) {
  document.querySelector('#root')!.innerHTML = '';
  document.querySelector('#root')!.append(listPage[namePage].getContent());
}

window.togglePage = togglePage;

// Временное решение которое помогает объединить состояния у страниц которы мы передали в функцию
// eslint-disable-next-line @typescript-eslint/no-shadow
export const exchangeOfStates = (state: any, listPagesUpdate: string[]) => {
  Object.entries(listPage)
    .forEach(([key]) => {
      if (listPagesUpdate.includes(key)) {
        listPage[key].setProps(state);
      }
    });
};

// window.exchangeOfStates = exchangeOfStates;

document.addEventListener('DOMContentLoaded', () => {
  togglePage(PAGE_NAME.registration);
});
