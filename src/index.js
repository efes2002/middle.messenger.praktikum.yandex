import { registerComponent } from './utils/registerComponent.js'
import { Chats } from "./pages/chats/chats.js";
import { Page404 } from "./pages/page404/page404.js";
import { Page5xx } from "./pages/page5xx/page5xx.js";
import page404Data from "./pages/page404/page404Data.js";
import page5xxData from "./pages/page5xx/page5xxData.js";
import { ErrorPage } from "./components/errorPage/errorPage";
import { RegForm } from "./components/regForm/regForm";
import { StartForm } from "./components/startForm/startForm";
import { Popup } from "./components/popup/popup";
import { Login } from "./pages/login/login";
import loginData from "./pages/login/loginData.js";
import { Registration } from "./pages/registration/registration";
import registrationData from "./pages/registration/registrationData.js";
import { Profile } from "./pages/profile/profile";
import profileData from "./pages/profile/profileData";
import { EditSimpleForm } from "./pages/profile/editSimpleForm/editSimpleForm";
import { EditPasswordForm } from "./pages/profile/editPasswordForm/editPasswordForm";
import { EditAvatarForm } from "./pages/profile/editAvatarForm/editAvatarForm";

const HELPER = {
    'ErrorPage': ErrorPage,
    'StartForm': StartForm,
    'RegForm': RegForm,
    'Popup': Popup,
    'EditSimpleForm': EditSimpleForm,
    'EditPasswordForm': EditPasswordForm,
    'EditAvatarForm': EditAvatarForm,
}

const PAGE = {
    chats: {
        page: Chats,
        data: {}
    },
    page404: {
        page: Page404,
        data: page404Data
    },
    page5xx: {
        page: Page5xx,
        data: page5xxData
    },
    profile: {
        page: Profile,
        data: profileData
    },
    login: {
        page: Login,
        data: loginData
    },
    registration: {
        page: Registration,
        data: registrationData
    }
}

function renderPage(namePage) {
    const page = new PAGE[namePage].page(PAGE[namePage].data)
    document.querySelector('#root').innerHTML = '';
    document.querySelector('#root').append(page.getContent());
}

window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', () => {
    Object.entries(HELPER).map(([key, value]) => registerComponent(key, value));
    renderPage('chats');
})
