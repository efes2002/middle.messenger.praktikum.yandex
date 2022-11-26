import Handlebars from 'handlebars';

export function registerComponent(name, Component) {
    Handlebars.registerHelper(name, ({ data, fn, hash }) => {
        const component = new Component(hash);
        if (!data.root.children) { data.root.children = {}; }
        data.root.children[component.id] = component;
        return `<div data-id="${ component.id }"></div>`;
    });
}
