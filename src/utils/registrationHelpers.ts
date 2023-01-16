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
import ButtonSendMessage from '../pages/messenger/buttonSendMessage/buttonSendMessage';
import AddFileMessage from '../pages/messenger/addFileMessage/addFileMessage';
import InputMessage from '../pages/messenger/inputMessage/inputMessage';
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

const HELPERS: Record<string, any> = {
  Chats,
  Chat,
  MenuCreateChat,
  Messages,
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
  ButtonSimple,
  ButtonSendMessage,
  AddFileMessage,
  InputMessage,
  FormElement,
  InputValidation,
  Link,
  LinkImg,
  LinkActive,
  MiniForm,
};

// eslint-disable-next-line import/prefer-default-export
export const registrationHelpers = (): void => {
  Object.entries(HELPERS)
    // eslint-disable-next-line array-callback-return
    .map(([key, value]: [string, any]) => {
      registerComponent(key, value);
    });
};
