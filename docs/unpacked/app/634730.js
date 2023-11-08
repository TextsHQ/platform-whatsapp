var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyOTPCode = function (e, t) {
  const n = e.url;
  if (e.subtype !== s.TEMPLATE_BUTTON_SUBTYPE.URL || n == null) {
    return;
  }
  const r = p(new URL(n));
  if (r == null) {
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(r).then(() => {
      u.ToastManager.open(d.default.createElement(l.Toast, {
        msg: c.fbt._("Code Copied", null, {
          hk: "2yw2Ib"
        })
      }));
    });
  }
  (0, o.logOTPButtonClick)((0, a.msgDataFromMsgModel)(t));
};
exports.getOTPCode = p;
exports.getOTPCodeFromButton = function (e) {
  const t = e.url;
  if (e.subtype !== s.TEMPLATE_BUTTON_SUBTYPE.URL || t == null) {
    return null;
  }
  try {
    return p(new URL(t));
  } catch (e) {
    return null;
  }
};
exports.isOTPCopyCodeButton = function (e) {
  if ((0, i.getABPropConfigValue)("web_otp_copy_code_disabled")) {
    return false;
  }
  if (!navigator.clipboard) {
    return false;
  }
  const t = e.url;
  if (e.subtype !== s.TEMPLATE_BUTTON_SUBTYPE.URL || t == null) {
    return false;
  }
  try {
    return p(new URL(t)) != null;
  } catch (e) {
    return false;
  }
};
var i = require("./287461.js");
var a = require("./678794.js");
var o = require("./575472.js");
var s = require("./517286.js");
var l = require("./625786.js");
var u = require("./390737.js");
var c = require("../vendor/548360.js");
var d = r(require("../vendor/667294.js"));
function p(e) {
  var t;
  if ((t = function (e) {
    const t = (0, i.getABPropConfigValue)("unified_otp_copy_code_url");
    if (!e.toString().startsWith(t)) {
      return null;
    }
    return e.toString().slice(t.length);
  }(e)) !== null && t !== undefined) {
    return t;
  } else {
    return function (e) {
      const t = (0, i.getABPropConfigValue)("unified_otp_retriever_url");
      if (!e.toString().startsWith(t)) {
        return null;
      }
      const n = e.searchParams.get("code");
      if (n == null) {
        return null;
      }
      const r = "otp";
      if (n.startsWith(r)) {
        return n.slice(r.length);
      }
      return n;
    }(e);
  }
}