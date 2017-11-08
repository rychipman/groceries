import m from "mithril";
import stream from "mithril/stream";
import { Card, List, ListTile, TextField } from "polythene-mithril";

var state = {
    data: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Thing 1',
        'Thing 2',
        'Thing 3',
        'Thing 4',
    ],
    search: '',
    setSearch: (val) => state.search = val,
};

let SearchCard = {
    view: (vnode) =>
        m(Card, {
            content: [{
                text: {
                    content: m(TextField, {
                        label: 'Search',
                        floatingLabel: true,
                        onChange: newState => {
                            vnode.attrs.setSearch(newState.value);
                        },
                    }),
                },
            }],
        })
};

let ResultsCard = {
    view: (vnode) => {
        var search = vnode.attrs.search;
        var elts = vnode.attrs.items;
        var filtered = elts.filter(elt => elt.includes(search));
        var tiles = filtered.map(elt => m(Result, {title: elt}));
        return m(Card, {
            content: [{
                text: {
                    content: m(List, {
                        tiles: tiles,
                    }),
                },
            }],
        });
    },
};

let Result = {
    view: (vnode) =>
        m(ListTile, {
            title: vnode.attrs.title,
            subtitle: 'this is a subtitle',
        }),
};

let SearchApp = {
    view: (vnode) => {
        return [
            m(SearchCard, {
                search: state.search,
                setSearch: state.setSearch,
            }),
            m(ResultsCard, {
                items: state.data,
                search: state.search,
            }),
        ];
    },
};

export default SearchApp;
