var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/581354.js");
var i = a(require("../app/97359.js"));
var u = a(require("./983123.js"));
var s = require("./104900.js");
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
var d = require("./839062.js");
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
const p = require("../vendor/76672.js").Mirrored(["Requests", "ContactInfo", "GroupSettings"]);
function m(e, t) {
  const {
    onBack: a,
    chat: f
  } = e;
  const [m, h] = (0, d.useFlow)(p.Requests, {
    transitions: d.FlowTransitions.DrawerRight
  });
  const [g, E] = (0, c.useState)(null);
  const [v, _] = (0, c.useState)(s.MembershipApprovalRequestsOrder.Source);
  const y = () => {
    _(s.MembershipApprovalRequestsOrder.Source);
  };
  const C = () => {
    _(s.MembershipApprovalRequestsOrder.Time);
  };
  const b = function () {
    var e = (0, r.default)(function* (e) {
      const t = yield (0, l.findChat)(e.id, "membershipApprovalRequests");
      E(t);
      h.push(p.ContactInfo);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  if (!h.step) {
    return null;
  }
  let M;
  switch (h.step) {
    case p.Requests:
      M = c.default.createElement(u.default, {
        chat: f,
        orderBy: v,
        onBack: a,
        onRequestClick: b,
        onSortBySource: y,
        onSortByTime: C,
        onGroupSettings: () => h.push(p.GroupSettings)
      });
      break;
    case p.ContactInfo:
      {
        const {
          InfoFlowLoadable: e
        } = require("./81095.js");
        M = c.default.createElement(e, {
          displayName: "MembershipApprovalRequestInfoFlow",
          chat: (0, o.default)(g, "requestChat"),
          onEnd: () => h.pop()
        });
        break;
      }
    case p.GroupSettings:
      {
        const e = (0, i.default)(require("./422325.js"));
        M = c.default.createElement(e, {
          chat: f,
          groupMetadata: (0, o.default)(f.groupMetadata, "chat.groupMetadata"),
          onClose: () => h.pop()
        });
      }
  }
  return c.default.createElement(m, {
    ref: t,
    displayName: "MembershipApprovalRequestsFlow",
    flow: h
  }, M);
}
var h = (0, c.forwardRef)(m);
exports.default = h;