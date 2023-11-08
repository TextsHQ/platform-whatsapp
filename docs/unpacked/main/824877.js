var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = s.default.createElement(r.default, {
    testid: "popup-controls-ok",
    type: "primary",
    onClick: () => i.ModalManager.close(),
    key: 0
  }, (0, o.default)("OK"));
  i.ModalManager.open(s.default.createElement(l.Modal, {
    actions: [e]
  }, u.fbt._("Calls are not supported on WhatsApp Web. Open WhatsApp on your phone to call this business.", null, {
    hk: "2GJELE"
  })));
};
var r = a(require("../app/692629.js"));
var o = a(require("../app/395767.js"));
var l = require("../app/118612.js");
var i = require("../app/114850.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));