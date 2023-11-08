Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBizBot3pTos = function (e) {
  const t = (0, c.useBusinessProfile)((0, r.isBizBot3pAvailable)() ? e.id : null, ["isBizBot3p"]);
  const p = (0, d.useRef)();
  const m = () => {
    var s;
    if (!((s = p.current) === null || s === undefined)) {
      s.close();
    }
    if (t && (0, r.isBizBot3pAvailable)() && t.isBizBot3p && !(0, o.hasSeenBizBotTos)(l.BizBotType.BIZ_3P)) {
      require.g.setTimeout(() => {
        var t;
        u.ModalManager.open(d.default.createElement(a.BizBotTos, {
          ref: p,
          automatedType: l.BizBotAutomatedType.FULL_3P,
          chatEntryPoint: (t = e.chatEntryPoint) !== null && t !== undefined ? t : i.ChatEntryPoint.Unknown
        }), {
          blockClose: true
        });
      }, 250);
    }
  };
  (0, d.useEffect)(m, [e, t]);
  (0, f.useListener)(s.TosManager, "change", m);
};
var a = require("../app/750997.js");
var r = require("../app/354458.js");
var o = require("../app/292167.js");
var l = require("../app/37237.js");
var i = require("../app/338042.js");
var u = require("../app/114850.js");
var s = require("../app/87429.js");
var c = require("./508228.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var f = require("../app/808446.js");
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}