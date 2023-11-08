var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionInput = function (e) {
  let {
    initialText: t,
    error: n,
    testid: a,
    onChange: f,
    onInputFocus: p,
    onInputBlur: m,
    onTextInputRef: h,
    onDragThumbMouseDown: g
  } = e;
  return i.default.createElement("div", {
    className: (0, u.default)(s)
  }, i.default.createElement("div", {
    className: (0, u.default)(c)
  }, i.default.createElement("div", {
    className: (0, u.default)(d)
  }, i.default.createElement(o.RichTextField, {
    ref: e => {
      h(e);
    },
    testid: a,
    hideFloatingLabel: true,
    showRemaining: true,
    supportsEmoji: true,
    textFormatEnabled: true,
    value: t,
    error: n != null ? n : undefined,
    maxLength: (0, r.getMaxPollOptionLength)(),
    maxCodeUnits: (0, r.getMaxPollOptionLengthForIncomingMessages)(),
    onChange: e => {
      let {
        text: t
      } = e;
      return f(t);
    },
    placeholder: l.fbt._("Add", null, {
      hk: "H8KgK"
    }),
    onDragThumbMouseDown: g,
    onFocus: p,
    onBlur: m
  }))));
};
var r = require("../app/671598.js");
var o = require("./202391.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  width: "ln8gz9je"
};
const c = {
  width: "ln8gz9je",
  display: "p357zi0d",
  alignItems: "gndfcl4n"
};
const d = {
  width: "ln8gz9je"
};