var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t,
    targetRef: n
  } = e;
  const [a, f] = (0, d.default)(o.NUX.CHAT_ASSIGNMENT);
  const [p, m] = (0, c.useState)(true);
  const h = (0, i.default)("MD_EXTENSION");
  const {
    tooltip: g,
    showTooltip: E,
    hideTooltip: v
  } = (0, l.useTooltip)({
    target: n,
    element: s.fbt._("Assign chat to a linked device", null, {
      hk: "1Xi9QB"
    }),
    position: l.PopoverPosition.Bottom,
    alignment: l.PopoverAlignment.End,
    onClick: () => {
      v();
      m(false);
    }
  });
  const _ = (0, c.useMemo)(() => u.default.getUser("chat_assignment_agent_has_assigned_chats"), []);
  const y = (0, c.useCallback)(() => {
    v();
    m(false);
  }, [v]);
  const C = a && p && h && t.assignedAgent == null && _ == null;
  (0, c.useEffect)(() => {
    if (C && g == null && n.current != null) {
      E();
      f();
      (0, r.logNuxShown)(t);
    }
  }, [C, g, n, E, y, f, t]);
  return g;
};
var r = require("../app/2772.js");
var o = require("../app/95589.js");
var l = require("../app/258290.js");
var i = a(require("../main-chunk/806077.js"));
var u = a(require("../app/53575.js"));
var s = require("../vendor/548360.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var d = a(require("./157558.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}