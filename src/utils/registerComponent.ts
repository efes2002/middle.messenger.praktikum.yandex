import Handlebars from 'handlebars';

export default function registerComponent(name: string, Component: any): any {
  Handlebars.registerHelper(name, ({
    data,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fn,
    hash,
  }) => {
    const component = new Component(hash);
    if (!data.root.children) {
      // eslint-disable-next-line no-param-reassign
      data.root.children = {};
    }
    // eslint-disable-next-line no-param-reassign
    data.root.children[component.id] = component;
    return `<div data-id="${component.id}"></div>`;
  });
}
