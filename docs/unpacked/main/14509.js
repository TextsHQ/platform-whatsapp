var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneNumberPrivacyNux = undefined;
var r = require("../app/103440.js");
var o = a(require("./74997.js"));
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  marginTop: "opp68qpq",
  marginEnd: "mg7w9a8q",
  marginBottom: "brac1wpa",
  marginStart: "a6gmrtb7",
  boxSizing: "cm280p3y",
  display: "p357zi0d",
  flexDirection: "f8m0rgwh",
  justifyContent: "ac2vgrno",
  alignItems: "gndfcl4n"
};
const s = {
  width: "ln8gz9je",
  fontSize: "ctdnaqea",
  marginTop: "fgtikrv0",
  marginEnd: "jnwc1y2a",
  marginBottom: "dblt22a0",
  marginStart: "svoq16ka",
  lineHeight: "cpwx3oa4",
  fontWeight: "sy6s5v3r",
  color: "p5g9vl8k",
  textAlign: "qfejxiq4"
};
const c = {
  fontSize: "enbbiyaj",
  marginBottom: "or9x5nie",
  fontWeight: "m1e7cby3",
  lineHeight: "l85iiqla",
  color: "k06jqncy",
  textAlign: "qfejxiq4"
};
exports.PhoneNumberPrivacyNux = e => {
  let {
    onOK: t,
    onCancel: n,
    okText: a,
    cancelText: d,
    title: f,
    subTitle: p,
    displayName: m,
    pictureWid: h,
    okButtonType: g,
    testid: E,
    customContent: v
  } = e;
  return l.default.createElement(r.ConfirmPopup, {
    onOK: t,
    okText: a,
    onCancel: n,
    cancelText: d,
    okButtonType: g,
    testid: E
  }, l.default.createElement("div", {
    className: (0, i.default)(u)
  }, l.default.createElement(o.default, {
    displayName: m,
    pictureWid: h
  }), l.default.createElement("div", {
    className: (0, i.default)(s)
  }, f), p != null && l.default.createElement("div", {
    className: (0, i.default)(c)
  }, p), v));
};