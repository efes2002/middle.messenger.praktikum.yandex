declare module '*.hbs';
declare module 'handlebars';

declare global {
  interface Window {
    togglePage:any;
  }
}

interface Root {
  isLogin: boolean;
}

interface User {
  'id': number | null;
  'avatar': string;
  'email': string;
  'login': string;
  'first_name': string;
  'second_name': string;
  'display_name': string;
  'phone': string
}

interface PopupProfile {
  'isOpen': boolean;
  'namePopupForm': {
    'isSimpleForm': boolean;
    'isPasswordForm': boolean;
    'isAvatarForm': boolean;
  };
  'setting': {
    'title': string;
    'name': string;
    'id': string;
    'value': string;
    'classNameError': string;
    'errorText': string;
  };
}

interface Main {
  'chats': Array<any> | null;
  'liveChatId': number | null;
  'messages': Array<any> | null;
}

export interface State {
  root?: Root;
  user?: User;
  popupProfile?: PopupProfile;
  main?: Main;
}
