var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemEditLabel = function (e) {
  let {
    chat: t,
    searchQuery: n,
    selectableState: a,
    multiSelection: r,
    onStartMultiSelect: l
  } = e;
  return p.default.createElement(o.DropdownItem, {
    testid: "mi-edit-label",
    action: () => {
      if (!n || n.isEmptyQuery()) {
        if (t.archive) {
          m(t);
        } else if (a && r && l) {
          a.setSelectable(true);
          r.setVal((0, c.unproxy)(t));
          l(u.MultiSelectEntryPoint.Label);
        }
      } else {
        m(t);
      }
    },
    key: "EditLabel"
  }, f.fbt._("Edit label", null, {
    hk: "3QX44B"
  }));
};
var r = a(require("../app/883891.js"));
var o = require("../app/675085.js");
var l = require("./614724.js");
var i = require("../app/114850.js");
var u = require("./608834.js");
var s = a(require("./444537.js"));
var c = require("../app/163139.js");
var d = require("./767301.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
const m = e => {
  s.default.maybeShowLabelDataSharingDialog([e], r.default.SmbDataSharingLabelTargetValues.CHAT, () => (e => {
    const t = [(0, c.unproxy)(e)];
    i.ModalManager.open(p.default.createElement(l.ManageLabelFlowLoadable, {
      modelsToUpdate: t,
      onClose: () => i.ModalManager.close()
    }));
  })(e), d.SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT);
};