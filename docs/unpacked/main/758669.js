Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatParsedVcardsDisplayText = function (e) {
  if (e.length > 1) {
    const t = e.map(e => (0, o.vcardGetNameFromParsed)(e)).filter(Boolean);
    return (0, l.getNameStringFromNames)(t);
  }
  return (0, o.vcardGetNameFromParsed)(e[0]) || i.fbt._("Contact", null, {
    hk: "30KbdJ"
  });
};
exports.formatPayment = function (e) {
  switch (e.subtype) {
    case "ciphertext":
      return i.fbt._("Waiting for this payment message's note. This may take a while.", null, {
        hk: "4EzoLe"
      });
    case "futureproof":
      return i.fbt._("This payment message has a note but your version of WhatsApp doesn't support viewing it.", null, {
        hk: "2rWw9k"
      });
    case "send":
      {
        var t;
        const n = ((t = e.paymentNoteMsg) === null || t === undefined ? undefined : t.body) != null ? " - " + e.paymentNoteMsg.body : "";
        return (e.paymentCurrency && e.paymentAmount1000 ? a.formatAmount1000(e.paymentCurrency, e.paymentAmount1000) : i.fbt._("Payment", null, {
          hk: "96zjD"
        }).toString()) + n;
      }
    case "request":
      {
        var n;
        const t = ((n = e.paymentNoteMsg) === null || n === undefined ? undefined : n.body) != null ? " - " + e.paymentNoteMsg.body : "";
        return (e.paymentCurrency && e.paymentAmount1000 ? a.formatAmount1000(e.paymentCurrency, e.paymentAmount1000) : i.fbt._("Payment", null, {
          hk: "96zjD"
        }).toString()) + t;
      }
    case "invite":
      return (0, r.formatPaymentInviteMessageText)(e.id);
    default:
      return i.fbt._("Payment message. Open WhatsApp on your phone to view.", null, {
        hk: "3VcAwk"
      });
  }
};
exports.maybeAddFooter = function (e, t) {
  if (e == null) {
    return null;
  }
  const n = t.isDynamicReplyButtonsMsg === true;
  if (t.footer && n) {
    return `${e}\n${t.footer}`;
  } else {
    return e;
  }
};
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/27578.js"));
var r = require("../app/498362.js");
var o = require("../app/517660.js");
var l = require("../app/105284.js");
var i = require("../vendor/548360.js");
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}