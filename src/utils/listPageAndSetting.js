import {Main} from "../pages/main/main";
import {Page404} from "../pages/page404/page404";
import settingPage404 from "../pages/page404/settingPage404";
import {Page500} from "../pages/page500/page500";
import settingPage500 from "../pages/page500/settingPage500";
import {Profile} from "../pages/profile/profile";
import settingProfile from "../pages/profile/settingProfile";
import {Login} from "../pages/login/login";
import settingLogin from "../pages/login/settingLogin";
import {Registration} from "../pages/registration/registration";
import settingRegistration from "../pages/registration/settingRegistration";

export default {
    main: {
        page: Main,
        setting: {}
    },
    page404: {
        page: Page404,
        setting: settingPage404
    },
    page500: {
        page: Page500,
        setting: settingPage500
    },
    profile: {
        page: Profile,
        setting: settingProfile
    },
    login: {
        page: Login,
        setting: settingLogin
    },
    registration: {
        page: Registration,
        setting: settingRegistration
    },
}