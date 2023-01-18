import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/store';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);
    this.fetchChats();
  }

  async fetchChats() {
    const answer: any = await this.api.read();
    const chats = JSON.parse(answer);
    const tempFunc = async (chat: { id: number; }) => {
      const token = await this.getToken(chat.id);
      await MessagesController.connect(chat.id, token);
    };
    if (chats.length !== 0) {
      chats.map(tempFunc);
      store.set('chats', chats);
    }
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  async delete(id: number) {
    await this.api.delete(id);
    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  // eslint-disable-next-line class-methods-use-this
  selectChat(id: number) {
    const { chats } = store.getState();
    const chat = chats.find((item: any) => item.id === id);
    store.set('selectedChatData', { ...chat });
    store.set('selectedChatId', id);
  }
}

const controller = new ChatsController();

export default controller;
