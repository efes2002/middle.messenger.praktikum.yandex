import Handlebars from 'handlebars/dist/handlebars.runtime';

import chats from '../../pages/chats/chats.hbs';
import page404 from '../../pages/page404/page404.hbs';
import page404Data from '../../pages/page404/page404.js';
import page5xx from '../../pages/page5xx/page5xx.hbs';
import page5xxData from '../../pages/page5xx/page5xx.js';
import profile from '../../pages/profile/profile.hbs';
import profileData from '../../pages/profile/profileData.js';
import editSimpleForm from '../../pages/profile/editSimpleForm/editSimpleForm.hbs';
import editPasswordForm from '../../pages/profile/editPasswordForm/editPasswordForm.hbs';
import editAvatarForm from '../../pages/profile/editAvatarForm/editAvatarForm.hbs';
import login from '../../pages/login/login.hbs';
import loginData from '../../pages/login/loginData.js';
import registration from '../../pages/registration/registration.hbs';
import registrationData from '../../pages/registration/registrationData.js';

import startForm from '../../components/startForm/startForm.hbs';
import errorPage from '../../components/errorPage/errorPage.hbs';
import popup from '../../components/popup/popup.hbs';

Handlebars.registerPartial('errorPage', errorPage);
Handlebars.registerPartial('startForm', startForm);
Handlebars.registerPartial('popup', popup);
Handlebars.registerPartial('editSimpleForm', editSimpleForm);
Handlebars.registerPartial('editPasswordForm', editPasswordForm);
Handlebars.registerPartial('editAvatarForm', editAvatarForm);


const PAGE = {
    chats: {
        component: chats,
        data: {}
    },
    page404: {
        component: page404,
        data: page404Data
    },
    page5xx: {
        component: page5xx,
        data: page5xxData
    },
    profile: {
        component: profile,
        data: profileData
    },
    login: {
        component: login,
        data: loginData
    },
    registration: {
        component: registration,
        data: registrationData
    }
}
/*
function renderPage(namePage) {
    const component = PAGE[namePage].component;
    const data = PAGE[namePage].data;
    document.querySelector('#root').innerHTML = component(data);
}

window.renderPage = renderPage;

document.addEventListener('DOMContentLoaded', () => {
    renderPage('chats');
})
*/

import { Home } from '../../utils/pages/Home';

const homePage = new Home();
document.querySelector('#root').innerHTML = homePage.render();
