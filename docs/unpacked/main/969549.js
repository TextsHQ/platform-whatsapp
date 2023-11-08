var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    otpCode: t
  } = e;
  const n = t.split("");
  const a = n.slice(0, 3);
  const g = n.slice(3);
  const _ = p.default.createElement(r.ChangePhoneIcon, null);
  const y = p.default.createElement("div", {
    dir: "ltr"
  }, p.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center"
  }, a.map((e, t) => p.default.createElement(v, {
    key: `${t}:${e}`,
    content: e
  })), p.default.createElement("span", {
    className: (0, m.default)(E, d.uiPadding.top20, d.uiPadding.horiz8),
    "aria-hidden": "true"
  }, "-"), g.map((e, t) => p.default.createElement(v, {
    key: `${t + 3}:${e}`,
    content: e
  }))));
  return p.default.createElement(o.ConfirmPopup, {
    onOK: () => {
      s.ModalManager.close();
    },
    okText: (0, l.default)("OK"),
    type: u.ModalTheme.InviteNew,
    buttonAlign: "center"
  }, p.default.createElement(i.FlexColumn, {
    align: "center",
    xstyle: d.uiPadding.all24
  }, _, p.default.createElement(c.WDSTextLarge, {
    paddingTop: 24,
    paddingBottom: 24,
    weight: "medium"
  }, f.fbt._("Code for new phone", null, {
    hk: "2pFnJ3"
  })), p.default.createElement("div", {
    className: (0, m.default)(h)
  }, f.fbt._("Enter this verification code on your new phone. Please don't share it with anyone. If you didn't request a code, you can safely ignore this.", null, {
    hk: "EjF8V"
  })), y));
};
var r = require("./289697.js");
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = require("../app/690495.js");
var u = require("../app/118612.js");
var s = require("../app/114850.js");
var c = require("../app/180519.js");
var d = require("../app/676345.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
const h = {
  fontSize: "enbbiyaj"
};
const g = {
  textAlign: "qfejxiq4",
  fontWeight: "hnx8ox4h",
  fontSize: "dupc5dfw",
  fontVariantNumeric: "j6weg29j",
  color: "tviruh8d"
};
const E = {
  textAlign: "qfejxiq4",
  fontWeight: "hnx8ox4h",
  fontSize: "lymqd4c5",
  color: "tviruh8d"
};
function v(e) {
  return p.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: [d.uiMargin.horiz14, d.uiPadding.top20]
  }, p.default.createElement("span", {
    className: (0, m.default)(g)
  }, e.content));
}