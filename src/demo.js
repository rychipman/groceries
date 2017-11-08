import m from "mithril";
import { Dialog } from "polythene-mithril-dialog";
import { RaisedButton } from "polythene-mithril-raised-button";

let Demo = {
  view: () =>
    m("div", [
      m(RaisedButton, {
        label: "Open dialog",
        events: {
          onclick: () => {
            Dialog.show({
              /* note the Dialog component is below the other elements in the app */
              title: "Hello",
              body: "Click background to hide or press ESCAPE.",
              backdrop: true
            });
          }
        }
      }),
      m(Dialog)
    ])
};

export default Demo;
