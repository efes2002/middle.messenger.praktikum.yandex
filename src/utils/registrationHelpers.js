import { Chats } from "../pages/main/chats/chats";
import { Chat } from "../pages/main/chats/chat/chat";
import { Messages } from "../pages/main/messages/messages";
import { Message } from "../pages/main/messages/message/message";
import { ErrorPage } from "../components/errorPage/errorPage";
import { RegForm } from "../components/regForm/regForm";
import { Popup } from "../components/popup/popup";
import { EditSimpleForm } from "../pages/profile/editSimpleForm/editSimpleForm";
import { EditPasswordForm } from "../pages/profile/editPasswordForm/editPasswordForm";
import { EditAvatarForm } from "../pages/profile/editAvatarForm/editAvatarForm";
import { registerComponent } from "./registerComponent";
import { InputProfile } from "../pages/profile/inputProfile/inputProfile";
import { Button } from "../components/button/button";
import { AvatarProfile } from "../pages/profile/avatarProfile/avatarProfile";
import { ButtonSendMessage } from "../pages/main/buttonSendMessage/buttonSendMessage";
import { AddFileMessage } from "../pages/main/addFileMessage/addFileMessage";
import { InputMessage } from "../pages/main/inputMessage/inputMessage";
import { FormElement } from "../components/form/formElement/formElement";
import { InputValidation } from "../components/InputValidation/InputValidation";

const HELPERS = {
    'Chats': Chats,
    'Chat': Chat,
    'Messages': Messages,
    'Message': Message,
    'ErrorPage': ErrorPage,
    'RegForm': RegForm,
    'Popup': Popup,
    'EditSimpleForm': EditSimpleForm,
    'EditPasswordForm': EditPasswordForm,
    'EditAvatarForm': EditAvatarForm,
    'InputProfile': InputProfile,
    'AvatarProfile': AvatarProfile,
    'Button': Button,
    'ButtonSendMessage': ButtonSendMessage,
    'AddFileMessage': AddFileMessage,
    'InputMessage': InputMessage,
    'FormElement': FormElement,
    'InputValidation': InputValidation,
}

export const registrationHelpers = () => {Object.entries(HELPERS).map(([key, value]) => {
    registerComponent(key, value);
});}
