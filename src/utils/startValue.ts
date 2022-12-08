import { State } from 'src/types/types';

const startValue: State = {
  root: { isLogin: true },
  user: {
    id: null,
    avatar: '',
    email: 'pochta@yandex.ru',
    login: 'Ivan1989',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иванчик',
    phone: '+7(907)777-77-77',
  },
  popupProfile: {
    isOpen: false,
    namePopupForm: {
      isSimpleForm: false,
      isPasswordForm: false,
      isAvatarForm: false,
    },
    setting: {
      title: '',
      name: '',
      id: '',
      value: '',
      classNameError: '',
      errorText: '',
    },
  },
  main: {
    chats: [
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
      { time: '12:45', name: 'Иван Петренко' },
    ],
    liveChatId: null,
    messages: [
      {
        img: true,
        author: true,
        time: '12:45',
        status: '3',
        url: 'https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg',
      },
      {
        img: false,
        author: false,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Дорогие друзья, рамки и место обучения кадров требует от нас анализа дальнейших направлений развитая системы массового участия. ',
      },
      {
        img: false,
        author: false,
        time: '12:45',
        status: '2',
        // eslint-disable-next-line max-len
        text: 'Дорогие друзья, рамки и место обучения кадров способствует подготовке и реализации системы масштабного изменения ряда параметров. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от существующих финансовых и административных условий.',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '1',
        // eslint-disable-next-line max-len
        text: 'Повседневная практика показывает, что реализация намеченного плана развития требует от нас анализа соответствующих условий активизации.',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Не следует, однако, забывать о том, что курс на социально-ориентированный национальный',
      },
      {
        img: false,
        author: false,
        time: '12:45',
        status: '2',
        // eslint-disable-next-line max-len
        text: 'Не следует, однако, забывать о том, что консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании системы обучения кадров, соответствующей насущным потребностям. Соображения высшего порядка, а также консультация с профессионалами из IT позволяет оценить значение всесторонне сбалансированных нововведений.',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        text: 'Повседневная практика показывает, что дальнейшее развитие различных форм',
      },
      {
        img: false,
        author: false,
        time: '12:45',
        status: '1',
        text: 'Иван Петренко',
      },
      {
        img: true,
        author: false,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        url: 'https://e-tex24.ru/wp-content/uploads/2021/12/b4fb6a4a7ecb2476f852a7fe37c43bc5.jpeg',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Дорогие друзья, рамки и место обучения кадров требует от нас анализа дальнейших направлений развитая системы массового участия. ',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Дорогие друзья, рамки и место обучения кадров способствует подготовке и реализации системы масштабного изменения ряда параметров. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности напрямую зависит от существующих финансовых и административных условий.',
      },
      {
        img: false,
        author: false,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Повседневная практика показывает, что реализация намеченного плана развития требует от нас анализа соответствующих условий активизации.',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Не следует, однако, забывать о том, что курс на социально-ориентированный национальный',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        // eslint-disable-next-line max-len
        text: 'Не следует, однако, забывать о том, что консультация с профессионалами из IT обеспечивает широкому кругу специалистов участие в формировании системы обучения кадров, соответствующей насущным потребностям. Соображения высшего порядка, а также консультация с профессионалами из IT позволяет оценить значение всесторонне сбалансированных нововведений.',
      },
      {
        img: false,
        author: false,
        time: '12:45',
        status: '3',
        text: 'Повседневная практика показывает, что дальнейшее развитие различных форм',
      },
      {
        img: false,
        author: true,
        time: '12:45',
        status: '3',
        text: 'Иван Петренко',
      },
    ],
  },
};

export default startValue;
