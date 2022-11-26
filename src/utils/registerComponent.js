import Handlebars from 'handlebars';

export function registerComponent(name, Component) {

    console.log(1, name, Component, Handlebars.registerHelper)

    Handlebars.registerHelper(name, ({ data, fn, hash }) => {

        console.log(2)


        const component = new Component(hash);
        if (!data.root.children) { data.root.children = {}; }
        data.root.children[component.id] = component;


        return `<div data-id="${ component.id }"></div>`;
    });
}
