Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t,
    photoSize: n,
    waitIdle: i,
    rowSection: u,
    rowIndex: s
  } = e;
  const [c, d] = (0, o.useState)(() => a.StatusV3Collection.get(t.id));
  const [f, p] = (0, o.useState)(t.id);
  if (t.id !== f) {
    d(a.StatusV3Collection.get(t.id));
    p(t.id);
  }
  (0, l.useListener)(a.StatusV3Collection, ["change:msgsChanged"], () => {
    d(a.StatusV3Collection.get(t.id));
  });
  return o.default.createElement("div", null, o.default.createElement(r.StatusV3ProfilePhotoRingWrapper, {
    key: t.id.toString(),
    contact: t,
    photoSize: n,
    waitIdle: i,
    hideWhenNoUnreadStatuses: true,
    rowSection: u,
    rowIndex: s
  }));
};
var a = require("../app/657694.js");
var r = require("./83271.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
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
var l = require("../app/808446.js");
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}