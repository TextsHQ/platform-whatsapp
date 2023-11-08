Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, r.useState)(i(e));
  (0, o.useListener)(e.newsletterMetadata, ["change:isPreview"], () => n(i(e)));
  const l = (0, r.useCallback)(() => {
    n(false);
  }, []);
  if (t) {
    return r.default.createElement(a.NewsletterPrivacyMsgBar, {
      onDismiss: l
    });
  } else {
    return null;
  }
};
var a = require("./155801.js");
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, o, i);
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
var o = require("../app/808446.js");
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function i(e) {
  var t;
  return e.isNewsletter && ((t = e.newsletterMetadata) === null || t === undefined ? undefined : t.isPreview) === true && !e.isSuspendedOrTerminated();
}