import { registrationHelpers } from "./utils/registrationHelpers";
import PAGE from "./utils/listPageAndSetting";
import { state } from "./utils/state";

function renderPages(pages) {
    const arrPages = {};
    Object.entries(pages).forEach(([key, value]) => {
        arrPages[key] = new value.page({...value.setting, ...state});
    });
    return arrPages;
}

registrationHelpers();

const listPage = renderPages(PAGE);

function togglePage(namePage) {
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').append(listPage[namePage].getContent());
}

window.renderPage = togglePage;

//Временное решение которое помогает объединить состояния у всех страниц
const exchangeOfStates = (state)=> {
    for (let key in listPage) {
        listPage[key].setProps(state);
    }
}

window.exchangeOfStates = exchangeOfStates;

document.addEventListener('DOMContentLoaded', () => {
    togglePage('profile');
})
