var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkDeviceCodeView = function (e) {
  const {
    screenreaderOnlySubtitle: t,
    alternativeLinkDeviceMethodHint: n
  } = e;
  return c.default.createElement(c.default.Fragment, null, c.default.createElement(o.default, null), c.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)({
      [l.default.qrViewWrapper]: e.codeType === d.QR,
      [l.default.phoneNumberLinkCodeViewWrapper]: e.codeType === d.PHONE_NUMBER_LINK_CODE,
      [l.default.linkDeviceCodeViewContainer]: true
    })
  }, e.banners, c.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)({
      [l.default.containsAlternateDeviceLinkNux]: n != null,
      [l.default.linkDeviceCodeWrapper]: true
    })
  }, c.default.createElement("div", {
    className: l.default.text
  }, c.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)("landing-title", l.default.headline)
  }, e.title), t == null ? null : c.default.createElement(a.Clickable, {
    onClick: t.onClick,
    className: l.default.screenreaderOnlySubtitle
  }, t.node), e.subtitle == null ? c.default.createElement("div", {
    className: l.default.headlineSpacer
  }) : c.default.createElement("div", {
    className: l.default.subtitle
  }, e.subtitle), c.default.createElement("ol", {
    id: e.a11yInstructionsDomId,
    className: l.default.list
  }, e.instructions.map((t, n) => c.default.createElement("li", {
    key: `${e.instructionsKey}#${n}`,
    className: l.default.listItem
  }, t)))), c.default.createElement("div", {
    className: l.default.linkCode
  }, c.default.createElement(s.LinkDeviceApiCmdTooltip, {
    apiCmd: e.apiCmd
  }), e.children), c.default.createElement(u.default, {
    component: "div",
    transitionName: "scaleAndFade",
    className: l.default.hintContainer
  }, n != null ? c.default.createElement("div", {
    className: l.default.hint
  }, n) : null))));
};
exports.LinkDeviceCodeViewCodeType = undefined;
var i = require("./396574.js");
var a = require("./950987.js");
var o = r(require("./937161.js"));
var s = require("./614134.js");
var l = r(require("./547909.js"));
var u = r(require("./844453.js"));
var c = r(require("../vendor/667294.js"));
const d = require("../vendor/76672.js").Mirrored(["QR", "PHONE_NUMBER_LINK_CODE"]);
exports.LinkDeviceCodeViewCodeType = d;