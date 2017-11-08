import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

import { addFastClick } from "polythene-fastclick"; // optional
addFastClick()

import m from "mithril";
import Demo from "./demo";
import Layout from "./layout";

m.route(document.body, '/', {
    '/': {
        onmatch: () => m.route.set('/app'),
    },
    '/demo': {
        render: () => m(Demo),
    },
    '/app': {
        render: () => m(Layout),
    },
});
