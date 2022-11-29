import { registrationHelpers } from "./utils/registrationHelpers";
import PAGES, {PAGE_NAME} from "./utils/listPageAndSetting";
import { state } from "./utils/state";

function renderPages(pages) {
    const objPages = {};
    Object.entries(pages).forEach(([key, value]) => {
        objPages[key] = new value({ ...state});
    });
    return objPages;
}

registrationHelpers();

const listPage = renderPages(PAGES);

function togglePage(namePage) {
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').append(listPage[namePage].getContent());
}

window.renderPage = togglePage;

//Временное решение которое помогает объединить состояния у страниц которы мы передали в функцию
const exchangeOfStates = (state, listPagesUpdate)=> {
    Object.entries(listPage).forEach(([key, value]) => {
        if (listPagesUpdate.includes(key)) { listPage[key].setProps(state); }
    });
}

window.exchangeOfStates = exchangeOfStates;

document.addEventListener('DOMContentLoaded', () => {
    togglePage(PAGE_NAME.registration);
})
