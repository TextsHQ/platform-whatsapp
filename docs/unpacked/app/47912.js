var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityLeaveRetryError = function (e) {
  const {
    onOK: t
  } = e;
  return l.default.createElement(i.ConfirmPopup, {
    onOK: t,
    okText: s.fbt._("RETRY", null, {
      hk: "31zj1D"
    }),
    onCancel: u
  }, l.default.createElement(o.TextParagraph, {
    size: "16"
  }, s.fbt._("There was a problem leaving all groups in this community. Please try again.", null, {
    hk: "22x9gm"
  })));
};
exports.CommunityLeaveStandardError = function () {
  return l.default.createElement(i.ConfirmPopup, {
    onOK: u
  }, l.default.createElement(o.TextParagraph, {
    size: "16"
  }, s.fbt._("Could not leave all groups in this community.", null, {
    hk: "4FoEW5"
  })));
};
exports.CommunityLeaveTryAgainLaterError = function () {
  return l.default.createElement(i.ConfirmPopup, {
    onOK: u
  }, l.default.createElement(o.TextParagraph, {
    size: "16"
  }, s.fbt._("Something went wrong. Please try again later.", null, {
    hk: "3ScUVF"
  })));
};
var i = require("./103440.js");
var a = require("./114850.js");
var o = require("./180519.js");
var s = require("../vendor/548360.js");
var l = r(require("../vendor/667294.js"));
function u() {
  a.ModalManager.close();
}