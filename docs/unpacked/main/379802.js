var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.default.createElement(r.ConfirmPopup, {
    title: d.default.createElement(s.TextHeader, {
      xstyle: f.title
    }, (0, l.SYNCING_PAUSED_POPUP_TITLE)()),
    type: i.ModalTheme.HistorySyncProgress,
    cancelText: c.fbt._("Learn more", null, {
      hk: "2S4fxr"
    }),
    onOK: () => {
      u.ModalManager.close();
    },
    onCancel: () => {
      window.open((0, o.getMessageHistoryOnLinkedDevicesFAQUrl)());
    }
  }, d.default.createElement(s.TextParagraph, {
    xstyle: f.body
  }, (0, l.SYNCING_PAUSED_POPUP_DESC)()));
};
var r = require("../app/103440.js");
var o = require("../app/258105.js");
var l = require("../app/631588.js");
var i = require("../app/118612.js");
var u = require("../app/114850.js");
var s = require("../app/180519.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const f = {
  title: {
    fontWeight: "hnx8ox4h",
    fontSize: "p9fp32ui"
  },
  body: {
    fontWeight: "m1e7cby3",
    fontSize: "enbbiyaj",
    lineHeight: "l85iiqla",
    color: "k35l1n51"
  }
};