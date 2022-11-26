import { TestButton } from './components/testButton/testButton.js';
import { registerComponent } from './utils/registerComponent.js'
import { TestMain} from './pages/testMain/testMain.js';
import  indexData from './indexData.js';
import { TestPage1 } from "./pages/testPage1/testPage1.js";
import { TestPage2 } from "./pages/testPage2/testPage2.js";
import { Chats2 } from "./pages/Chats2/Chats2.js";
import { Page4042 } from "./pages/page4042/page4042.js";
import { Page5xx2 } from "./pages/page5xx2/page5xx2.js";
import page4042Data from "./pages/Page4042/page4042Data.js";
import page5xx2Data from "./pages/page5xx2/page5xx2Data.js";
import { ErrorPage2 } from "./components/errorPage2/errorPage2";



const HELPER = {
    'TestButton': TestButton,
    'ErrorPage2': ErrorPage2,
}

const PAGE = {
    testMain: {
        page: TestMain,
        data: indexData
    },
    testPage1: {
        page: TestPage1,
        data: {}
    },
    chats2: {
        page: Chats2,
        data: {}
    },
    page4042: {
        page: Page4042,
        data: page4042Data
    },
    page5xx2: {
        page: Page5xx2,
        data: page5xx2Data
    },
    profile: {
        page: TestMain,
        data: {}
    },
    login: {
        page: TestMain,
        data: {}
    },
    registration: {
        page: TestMain,
        data: {}
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
    renderPage('chats2');
})
