var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongLinkPopup = function (e) {
  const {
    link: t
  } = e;
  return d.default.createElement(a.ConfirmPopup, {
    title: c.fbt._("Open in browser", null, {
      hk: "4nwCde"
    }),
    okText: c.fbt._("Open link", null, {
      hk: "1yYoWm"
    }),
    cancelText: c.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    onOK: () => {
      var n;
      if (((n = e.statusItemViewEventRef) === null || n === undefined ? undefined : n.current) != null) {
        e.statusItemViewEventRef.current.urlStatusClicked = u.URL_STATUS_CLICKED.TWO_CLICKS;
      }
      l.ModalManager.close();
      (0, o.openExternalLink)(t.href);
    },
    onCancel: p,
    type: s.ModalTheme.LinkPopup
  }, d.default.createElement("div", null, t.href));
};
var i = require("./780549.js");
var a = require("./103440.js");
var o = require("./753233.js");
var s = require("./118612.js");
var l = require("./114850.js");
var u = require("./913249.js");
var c = require("../vendor/548360.js");
var d = r(require("../vendor/667294.js"));
const p = () => {
  l.ModalManager.close();
  i.Cmd.closeLongLinkModal(true);
};