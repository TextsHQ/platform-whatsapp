var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkDeviceApiCmdTooltip = function (e) {
  if (e.apiCmd) {
    switch (e.apiCmd.resultType) {
      case i.APICmd.GROUP_INVITE:
        return s.default.createElement("div", {
          className: a.default.groupInviteTip
        }, s.default.createElement("div", {
          className: a.default.tip
        }, o.fbt._("Log in to WhatsApp Web to join this WhatsApp group", null, {
          hk: "3OnLb2"
        })));
      case i.APICmd.MSG_SEND:
        return s.default.createElement("div", {
          className: a.default.groupInviteTip
        }, s.default.createElement("div", {
          className: a.default.tip
        }, o.fbt._("Log in to WhatsApp Web to share", null, {
          hk: "2k3JEY"
        })));
    }
  }
  return s.default.createElement(s.default.Fragment, null);
};
var i = require("./251780.js");
var a = r(require("./978835.js"));
var o = require("../vendor/548360.js");
var s = r(require("../vendor/667294.js"));