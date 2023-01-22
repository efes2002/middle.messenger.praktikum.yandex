// eslint-disable-next-line import/no-cycle
import ButtonImg from '../components/buttonImg/buttonImg';
import Chats from '../pages/messenger/chats/chats';
import Chat from '../pages/messenger/chats/chat/chat';
import Messages from '../pages/messenger/messages/messages';
import Message from '../pages/messenger/messages/message/message';
import ErrorPage from '../components/errorPage/errorPage';
import RegForm from '../components/regForm/regForm';
import Popup from '../components/popup/popup';
import EditSimpleForm from '../pages/profile/editSimpleForm/editSimpleForm';
import EditPasswordForm from '../pages/profile/editPasswordForm/editPasswordForm';
import EditAvatarForm from '../pages/profile/editAvatarForm/editAvatarForm';
// eslint-disable-next-line import/no-named-as-default
import registerComponent from './registerComponent';
import InputProfile from '../pages/profile/inputProfile/inputProfile';
import Button from '../components/button/button';
import AvatarProfile from '../pages/profile/avatarProfile/avatarProfile';
// eslint-disable-next-line max-len
import ButtonSendMessage from '../pages/messenger/messengerRightBottom/buttonSendMessage/buttonSendMessage';
import InputMessage from '../pages/messenger/messengerRightBottom/inputMessage/inputMessage';
import FormElement from '../components/form/formElement/formElement';
// eslint-disable-next-line import/no-cycle
import InputValidation from '../components/InputValidation/InputValidation';
// eslint-disable-next-line import/no-cycle
import Link from '../components/link/link';
// eslint-disable-next-line import/no-cycle
import LinkImg from '../components/linkImg/linkImg';
import ButtonSimple from '../components/buttonSimple/buttonSimple';
// eslint-disable-next-line import/no-cycle
import LinkActive from '../components/linkAction/linkAction';
import MiniForm from '../components/miniForm/miniForm';
import MenuCreateChat from '../pages/messenger/menuCreateChat/menuCreateChat';
import MessengerLeftBottom from '../pages/messenger/messengerLeftBottom/messengerLeftBottom';
import MessengerLeftTop from '../pages/messenger/messengerLeftTop/messengerLeftTop';
// eslint-disable-next-line import/no-cycle
import MessengerRightTop from '../pages/messenger/messengerRightTop/messengerRightTop';
// eslint-disable-next-line import/no-cycle
import MessengerRightBottom from '../pages/messenger/messengerRightBottom/messengerRightBottom';
import MenuAddUser from '../pages/messenger/menuAddUser/menuAddUser';
import MenuEditChatAvatar from '../pages/messenger/menuEditChatAvatar/menuEditChatAvatar';
import ButtonCancel from '../components/buttonСancel/buttonСancel';

const HELPERS: Record<string, any> = {
  Chats,
  Chat,
  MenuCreateChat,
  MenuEditChatAvatar,
  MenuAddUser,
  Messages,
  MessengerLeftBottom,
  MessengerLeftTop,
  MessengerRightTop,
  MessengerRightBottom,
  Message,
  ErrorPage,
  RegForm,
  Popup,
  EditSimpleForm,
  EditPasswordForm,
  EditAvatarForm,
  InputProfile,
  AvatarProfile,
  Button,
  ButtonCancel,
  ButtonSimple,
  ButtonSendMessage,
  InputMessage,
  FormElement,
  InputValidation,
  Link,
  LinkImg,
  LinkActive,
  MiniForm,
  ButtonImg,
};

// eslint-disable-next-line import/prefer-default-export
export const registrationHelpers = (): void => {
  Object.entries(HELPERS)
    // eslint-disable-next-line array-callback-return
    .map(([key, value]: [string, any]) => {
      registerComponent(key, value);
    });
};
