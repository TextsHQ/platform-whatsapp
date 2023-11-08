Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterNotAvailableModal = function (e) {
  const t = (0, u.useCallback)(() => r.ModalManager.close(), []);
  const n = (0, u.useCallback)(() => {
    r.ModalManager.close();
    (0, l.updateApp)();
  }, []);
  let s;
  let c;
  let d;
  let f;
  let p;
  let m = t;
  switch (e.gating) {
    case o.NewsletterCompanionGating.Disabled:
      f = i.fbt._("WhatsApp Channels isn't currently available for you.", null, {
        hk: "11GW5X"
      });
      p = null;
      break;
    case o.NewsletterCompanionGating.NeedsUpgrade:
      f = i.fbt._("To use Channels, you need to update to the most recent version of WhatsApp Web.", null, {
        hk: "4poSVT"
      });
      p = i.fbt._("Update needed", null, {
        hk: "3VGk7Z"
      });
      c = t;
      d = i.fbt._("Dismiss", null, {
        hk: "1LXFsO"
      });
      m = n;
      s = i.fbt._("Update", null, {
        hk: "YMfTW"
      });
      break;
    case o.NewsletterCompanionGating.AvailableOnPhone:
      f = i.fbt._("To use Channels, open the link on your mobile phone.", null, {
        hk: "3omYjH"
      });
      p = i.fbt._("Not yet available on web", null, {
        hk: "32Vpei"
      });
      break;
    case o.NewsletterCompanionGating.Enabled:
      __LOG__(4, undefined, new Error())`[LoadingNewsletterPreviewModal] Shown when newsletter is enabled`;
      return null;
  }
  return u.default.createElement(a.ConfirmPopup, {
    title: p,
    onOK: m,
    okText: s,
    onCancel: c,
    cancelText: d
  }, f);
};
var a = require("../app/103440.js");
var r = require("../app/114850.js");
var o = require("../app/73225.js");
var l = require("./405585.js");
var i = require("../vendor/548360.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
}(require("../vendor/667294.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}