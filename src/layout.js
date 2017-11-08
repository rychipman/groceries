import m from "mithril";
import { RaisedButton } from "polythene-mithril-raised-button";

let Layout = {
    view: (vnode) => {
        return m(RaisedButton, {
            label: "Press Me!",
            events: {
                onclick: () => console.log('clicked'),
            },
        });
    },
};

export default Layout;
