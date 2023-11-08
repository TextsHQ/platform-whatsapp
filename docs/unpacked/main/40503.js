var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    hasText: t,
    recordingSession: n,
    onStartRecording: a,
    onClickSend: f,
    supportsPtt: p
  } = e;
  const m = Boolean(r.default && window.AudioContext);
  if (!t && m && p) {
    return s.default.createElement(o.default, {
      disabled: n != null,
      onConfirm: a
    });
  }
  return s.default.createElement("button", {
    "data-tab": i.TAB_ORDER.SEND_BUTTON,
    "aria-label": u.fbt._("Send", null, {
      hk: "25FkwM"
    }),
    className: (0, c.default)(d),
    onClick: f,
    disabled: !t
  }, s.default.createElement(l.SendIcon, {
    directional: true
  }));
};
var r = a(require("./65162.js"));
var o = a(require("./50248.js"));
var l = require("./848605.js");
var i = require("../main-chunk/931109.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
var c = a(require("../app/156720.js"));
const d = {
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c",
  color: "svlsagor",
  opacity: "p2rjqpw5",
  ":disabled": {
    opacity: "epia9gcq"
  }
};