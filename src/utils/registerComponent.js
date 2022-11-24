import Block from './block';
import Handlebars from 'handlebars/dist/handlebars.runtime';

export function registerComponent(name, Component) {
    Handlebars.registerHelper(name, ({ data, fn, hash }) => {
        console.log(data, fn, hash)

        const component = new Component(hash);

        if (!data.root.children) { data.root.children = {}; }

        data.root.children[component.id] = component;

        return `<div data-id="${component.id}"></div>`;
    });
}


