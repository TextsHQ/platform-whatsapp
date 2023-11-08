var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, f.useModelValues)(e.groupMetadata, ["participants", "support"]);
  const [n, a] = (0, s.useState)(() => (0, i.calculateParticipantsList)(t));
  const h = (0, m.default)(() => {
    t.participants.ensureSorted();
  });
  const g = (0, m.default)(() => {
    a((0, i.calculateParticipantsList)(t));
  });
  const E = (0, c.default)(() => new r.ShiftTimer(g));
  (0, s.useEffect)(() => {
    h();
  }, []);
  (0, p.default)(() => {
    E.current.cancel();
  });
  (0, d.useListener)(t.participants, "sort remove reset add", () => {
    E.current.debounce(100);
  });
  (0, s.useEffect)(() => {
    h();
    E.current.cancel();
    a((0, i.calculateParticipantsList)(t));
  }, [h, t, E]);
  const v = t.support ? (0, u.SupportChatSubtitle)() : e.overridingText || n.join(l.default.t(54)) || e.placeholder;
  if (v) {
    return s.default.createElement(o.default, {
      text: v,
      ariaLabel: e.ariaLabel,
      location: e.location
    });
  }
  return null;
};
var r = require("../app/685639.js");
var o = a(require("./753884.js"));
var l = a(require("../app/932325.js"));
var i = require("../app/843337.js");
var u = require("../app/666836.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var c = a(require("../app/637660.js"));
var d = require("../app/808446.js");
var f = require("../app/655241.js");
var p = a(require("../app/558532.js"));
var m = a(require("../app/17533.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}