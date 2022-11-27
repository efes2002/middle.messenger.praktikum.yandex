import { Chats } from "../pages/main/chats/chats";
import { Chat } from "../pages/main/chats/chat/chat";
import { Messages } from "../pages/main/messages/messages";
import { Message } from "../pages/main/messages/message/message";
import { ErrorPage } from "../components/errorPage/errorPage";
import { StartForm } from "../components/startForm/startForm";
import { RegForm } from "../components/regForm/regForm";
import { Popup } from "../components/popup/popup";
import { EditSimpleForm } from "../pages/profile/editSimpleForm/editSimpleForm";
import { EditPasswordForm } from "../pages/profile/editPasswordForm/editPasswordForm";
import { EditAvatarForm } from "../pages/profile/editAvatarForm/editAvatarForm";
import { registerComponent } from "./registerComponent";
import { InputProfile } from "../pages/profile/inputProfile/inputProfile";

const HELPERS = {
    'Chats': Chats,
    'Chat': Chat,
    'Messages': Messages,
    'Message': Message,
    'ErrorPage': ErrorPage,
    'StartForm': StartForm,
    'RegForm': RegForm,
    'Popup': Popup,
    'EditSimpleForm': EditSimpleForm,
    'EditPasswordForm': EditPasswordForm,
    'EditAvatarForm': EditAvatarForm,
    'InputProfile': InputProfile,
}

export const registrationHelpers = () => {Object.entries(HELPERS).map(([key, value]) => registerComponent(key, value));}
