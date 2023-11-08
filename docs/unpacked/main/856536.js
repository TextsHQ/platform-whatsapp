var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterMessageDeletedPopup = function () {
  const e = l.fbt._("Update deleted", null, {
    hk: "3mdlqT"
  });
  const t = l.fbt._("The channel admin deleted this update.", null, {
    hk: "31mIxI"
  });
  return i.default.createElement(r.ConfirmPopup, {
    title: e,
    onOK: () => o.ModalManager.close()
  }, t);
};
exports.NewsletterMessageNotFoundPopup = function (e) {
  var t;
  let {
    chat: n
  } = e;
  const a = l.fbt._("Update not available", null, {
    hk: "2O9Gvi"
  });
  const u = l.fbt._("You can follow this channel to see all future updates", null, {
    hk: "19YgdB"
  });
  const s = ((t = n.newsletterMetadata) === null || t === undefined ? undefined : t.isPreview) === true;
  const c = s ? a : null;
  const d = s ? u : a;
  return i.default.createElement(r.ConfirmPopup, {
    title: c,
    onOK: () => o.ModalManager.close()
  }, d);
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));