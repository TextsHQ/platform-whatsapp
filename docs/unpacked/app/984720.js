Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatOversizedMsgNotification = function () {
  return i.fbt._("This message can't be viewed in WhatsApp Web. View it on your phone instead.", null, {
    hk: "2Cf4Ej"
  });
};
exports.formatOversizedMsgText = function () {
  if (r.UA.isElectron) {
    return i.fbt._("This message can't be viewed in WhatsApp Desktop. View it on your phone instead.", null, {
      hk: "3rLTDP"
    });
  } else {
    return i.fbt._("This message can't be viewed in WhatsApp Web. View it on your phone instead.", null, {
      hk: "2Cf4Ej"
    });
  }
};
var r = require("./368170.js");
var i = require("../vendor/548360.js");