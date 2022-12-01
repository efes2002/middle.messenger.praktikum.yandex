// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';

export default function registerComponent(name: string, Component: any): any {
  Handlebars.registerHelper(name, ({ data, hash }) => {
    const component: any = new Component(hash);
    if (!data.root.children) {
      // eslint-disable-next-line no-param-reassign
      data.root.children = {};
    }
    // eslint-disable-next-line no-param-reassign
    data.root.children[component._id] = component;
    return `<div data-id="${component._id}"></div>`;
  });
}
