var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./103440.js");
var a = require("./753233.js");
var o = require("./258105.js");
var s = require("../vendor/548360.js");
var l = r(require("../vendor/667294.js"));
function u() {
  (0, a.openExternalLink)((0, o.getCannotConnectFaqUrl)());
}
exports.default = () => l.default.createElement(i.ConfirmPopup, {
  cover: true,
  title: s.fbt._("Can't Load WhatsApp", null, {
    hk: "riAGs"
  }),
  okText: s.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }),
  onOK: u
}, s.fbt._("Your computer is connected to a network that prevents WhatsApp from working correctly", null, {
  hk: "GhGFR"
}));