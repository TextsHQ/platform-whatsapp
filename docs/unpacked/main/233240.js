var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsFlow = function (e) {
  const {
    msg: t
  } = e;
  const [n, a] = (0, d.useFlow)(p.Details, {
    transitions: d.FlowTransitions.DrawerRight
  });
  const [f, m] = (0, c.useState)(null);
  const h = (0, o.getChat)(t.unsafe());
  (0, c.useEffect)(() => {
    (0, l.commitPollsActionsMetric)({
      action: s.POLL_ACTION_TYPE.VIEW_RESULTS_MODAL,
      chat: h,
      creationDateInSeconds: t.t,
      pollOptionsCount: t.pollOptions.length
    });
  }, []);
  if (a.step == null) {
    return null;
  }
  let g;
  switch (a.step) {
    case p.Details:
      g = c.default.createElement(i.DetailsDrawer, {
        msg: t,
        onClose: () => {
          a.pop();
        },
        onViewAllVotes: e => {
          m(e);
          a.push(p.ViewAll);
        }
      });
      break;
    case p.ViewAll:
      g = c.default.createElement(u.ViewAllVotesDrawer, {
        msg: t,
        optionLocalId: (0, r.default)(f, "activeOptionLocalId"),
        onBack: () => {
          a.pop();
        }
      });
  }
  return c.default.createElement(n, {
    flow: a
  }, g);
};
var r = a(require("../app/670983.js"));
var o = require("../app/163755.js");
var l = require("./561820.js");
var i = require("./388575.js");
var u = require("./608531.js");
var s = require("./607693.js");
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
const p = require("../vendor/76672.js").Mirrored(["Details", "ViewAll"]);