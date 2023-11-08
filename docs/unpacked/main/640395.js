var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, m.default)();
  const t = p.default.createElement(i.FlexItem, null, p.default.createElement(r.BotPictogramIcon, {
    width: 112,
    height: 112
  }));
  const n = f.fbt._("AI chats aren't available for you yet", null, {
    hk: "3MyENs"
  });
  return p.default.createElement(l.ConfirmPopup, {
    onOK: () => {
      s.ModalManager.close();
    },
    type: u.ModalTheme.Promote,
    ref: e
  }, p.default.createElement(i.FlexColumn, {
    align: "center",
    xstyle: [c.uiMargin.vertAuto, c.uiPadding.bottom16]
  }, t, p.default.createElement(o.Box, {
    xstyle: [h.headerText, c.uiMargin.horiz8, c.uiMargin.top16, c.uiMargin.bottom8]
  }, p.default.createElement(d.WDSTextLarge, {
    weight: "bold"
  }, n))));
};
var r = require("./714033.js");
var o = require("../app/58972.js");
var l = require("../app/103440.js");
var i = require("../app/690495.js");
var u = require("../app/118612.js");
var s = require("../app/114850.js");
var c = require("../app/676345.js");
var d = require("../app/851488.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var m = a(require("../app/401715.js"));
const h = {
  headerText: {
    textAlign: "qfejxiq4"
  }
};