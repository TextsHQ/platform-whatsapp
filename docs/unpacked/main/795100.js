var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    error: t,
    text: n,
    retry: a
  } = e;
  const m = () => l.ModalManager.closeMedia();
  return u.default.createElement("div", {
    className: (0, s.default)(d),
    "data-animate-status-v3-viewer": true
  }, u.default.createElement("button", {
    className: (0, s.default)(c, f, false),
    onClick: m
  }, u.default.createElement(i.XViewerIcon, null)), u.default.createElement("button", {
    className: (0, s.default)(c, p, false),
    onClick: m
  }, u.default.createElement(r.BackIcon, {
    directional: true
  })), u.default.createElement(o.default, {
    error: t,
    text: n,
    retry: a
  }));
};
var r = require("../main-chunk/238608.js");
a(require("../app/932325.js"));
var o = a(require("./876486.js"));
var l = require("../app/114850.js");
var i = require("./776770.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  zIndex: "cv1ohgtz"
};
const d = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  zIndex: "bgigc5s4",
  width: "ln8gz9je",
  height: "ppled2lx",
  backgroundColor: "ss9a15xu"
};
const f = {
  position: "lhggkp7q",
  top: "q177n8ra",
  end: "n642r0m2",
  zIndex: "b9fczbqn",
  color: "lxozqee9"
};
const p = {
  position: "lhggkp7q",
  top: "q177n8ra",
  start: "nsmajyb3",
  zIndex: "b9fczbqn",
  display: "p357zi0d",
  color: "lxozqee9"
};