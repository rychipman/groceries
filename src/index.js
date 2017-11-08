import { addTypography } from "polythene-css";
addTypography();

//import { addFastClick } from "polythene-fastclick"; // optional
//addFastClick();

import m from "mithril";
import Demo from "./demo";
import Layout from "./layout";
import SearchApp from "./search-app";

m.route(document.body, '/', {
    '/': {
        onmatch: () => m.route.set('/app'),
    },
    '/demo': {
        render: () => m(Demo),
    },
    '/app': {
        render: () => m(Layout, m(SearchApp)),
    },
});
