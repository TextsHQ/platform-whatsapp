var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningKeepOfflineModal = function () {
  return i.default.createElement(r.ConfirmPopup, {
    testid: "kic_offline_modal",
    onOK: u
  }, l.fbt._("You can't update a message while offline. Check your internet connection and try again.", null, {
    hk: "2dYVUo"
  }));
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));
const u = () => {
  o.ModalManager.close();
};