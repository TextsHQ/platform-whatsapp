var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, i.useState)(false);
  const a = (0, u.default)(() => new o.default([], e => e.id.toString()));
  const c = (t, o, i) => {
    n(true);
    const u = a.current.getSelected().pop();
    const s = i == null ? undefined : i.shiftKey;
    a.current.setVal(t, o, true);
    if (o) {
      l.UiRevokeActionHelper.messageSelected();
    }
    if (s) {
      ((t, n, o) => {
        if (!t || !e) {
          return;
        }
        const l = e.indexOf(t);
        if (!l) {
          return;
        }
        let i = e.indexOf(n);
        const u = i > l ? -1 : 1;
        const s = l + (o ? u : i < l ? 0 : u * 2);
        for (; i !== s;) {
          a.current.setVal((0, r.default)(e.at(i), "msgCollection.at(currentSelectedIndex)").safe(), o, true);
          i += u;
        }
      })(u, t, o);
    }
  };
  (0, s.useListener)(e, "remove", e => {
    if (a.current.isSelected(e)) {
      c(e, false);
    }
  });
  return {
    selectable: t,
    selectedMessages: a.current,
    handleSelectMessages: () => {
      l.UiRevokeActionHelper.startSession();
      n(true);
    },
    handleMessageSelect: c,
    handleCancelSelection: () => {
      if (t) {
        a.current.unsetAll();
        n(false);
      }
    }
  };
};
var r = a(require("../app/670983.js"));
var o = a(require("./930440.js"));
var l = require("./774401.js");
var i = require("../vendor/667294.js");
var u = a(require("../app/637660.js"));
var s = require("../app/808446.js");