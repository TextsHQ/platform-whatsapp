var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  (0, l.useEffect)(() => {
    o.Updater.restart(true).then(() => {
      o.Updater.restart();
    });
  }, []);
  return l.default.createElement(i.Modal, {
    cover: true,
    title: s.fbt._("Updating", null, {
      hk: "1PjA60"
    })
  }, l.default.createElement("div", null, s.fbt._("WhatsApp is out of date. Updating now…", null, {
    hk: "2op4p5"
  })), l.default.createElement("div", {
    className: (0, u.default)(d)
  }, l.default.createElement(a.Spinner, {
    stroke: 4,
    size: 40,
    color: "highlight"
  })));
};
var i = require("./118612.js");
var a = require("./956113.js");
var o = require("./366320.js");
var s = require("../vendor/548360.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var u = r(require("./156720.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  display: "p357zi0d",
  justifyContent: "ac2vgrno",
  marginTop: "nylzjxre",
  marginEnd: "lfum0007",
  marginBottom: "bvhm1occ",
  marginStart: "r6x3u63k"
};