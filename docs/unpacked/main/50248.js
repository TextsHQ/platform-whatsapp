var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    onConfirm: n
  } = e;
  const a = (t = e.disabled) !== null && t !== undefined && t;
  return u.default.createElement("button", {
    className: (0, s.default)(c),
    onMouseDown: e => {
      if (e.button === 0) {
        n();
      }
    },
    onKeyPress: e => {
      if (!(e.key !== r.KEYBOARD_EVENT_KEY_VALUE.ENTER && e.key !== r.KEYBOARD_EVENT_KEY_VALUE.SPACE)) {
        e.preventDefault();
        e.stopPropagation();
        n();
      }
    },
    disabled: a,
    "aria-label": i.fbt._("Voice message", null, {
      hk: "3xevvy"
    }),
    "data-tab": a ? undefined : l.TAB_ORDER.PTT_BUTTON
  }, u.default.createElement(o.PttIcon, null));
};
var r = require("../app/368156.js");
var o = require("./429852.js");
var l = require("../main-chunk/931109.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  color: "svlsagor",
  width: "qssinsw9",
  height: "lniyxyh2",
  display: "p357zi0d",
  justifyContent: "ac2vgrno",
  alignItems: "gndfcl4n"
};