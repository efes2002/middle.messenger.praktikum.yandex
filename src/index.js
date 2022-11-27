import { registrationHelpers } from "./utils/registrationHelpers";
import PAGE from "./utils/listPageAndSetting";
import { state } from "./utils/state";





function renderPage(namePage) {
    const page = new PAGE[namePage].page({...PAGE[namePage].setting, ...state, isOpenPopupProfile: false,})
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').append(page.getContent());
}

window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', () => {
    registrationHelpers();
    renderPage('profile');
})
