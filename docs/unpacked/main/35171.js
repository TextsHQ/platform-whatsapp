var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
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
var o = a(require("../app/156720.js"));
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
const i = {
  backgroundColor: "ecxtzlut",
  height: "ppled2lx",
  top: "qq0sjtgm"
};
const u = {
  start: "tkdu00h0",
  pointerEvents: "m62443ks",
  position: "lhggkp7q",
  width: "ln8gz9je"
};
const s = {
  backgroundImage: "d4q9loza",
  bottom: "jxacihee"
};
const c = {
  borderTopStartRadius: "l147y7tb",
  borderTopEndRadius: "mjscftrx",
  borderBottomEndRadius: "fqwk616h",
  borderBottomStartRadius: "pkud3j3x"
};
const d = {
  height: "fsgosuut"
};
const f = {
  backgroundImage: "ly777k5r",
  top: "qq0sjtgm"
};
function p(e, t) {
  let n = null;
  switch (e.theme) {
    case "upper":
      n = r.default.createElement("div", {
        ref: t,
        key: "upper-shade",
        className: (0, o.default)(u, d, f)
      });
      break;
    case "lower":
      n = r.default.createElement("div", {
        ref: t,
        key: "lower-shade",
        className: (0, o.default)(u, d, s)
      });
      break;
    case "full-rounded":
      n = r.default.createElement("div", {
        ref: t,
        key: "full-rounded-shade",
        className: (0, o.default)(u, i, c)
      });
      break;
    case "full-sharp":
      n = r.default.createElement("div", {
        ref: t,
        key: "full-sharp-shade",
        className: (0, o.default)(u, i)
      });
  }
  return n;
}
var m = (0, r.forwardRef)(p);
exports.default = m;