var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewGroupFlowStep = exports.NewGroupFlow = undefined;
var r = require("../app/287461.js");
var o = require("../app/351053.js");
var l = require("../app/780549.js");
var i = require("../app/177938.js");
var u = require("../app/271307.js");
var s = a(require("./530513.js"));
var c = a(require("./900454.js"));
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var f = require("./839062.js");
var p = require("../app/808446.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = require("../vendor/76672.js").Mirrored(["ADD_PARTICIPANTS_DRAWER", "SET_GROUP_INFO_DRAWER"]);
exports.NewGroupFlowStep = h;
const g = (e, t) => {
  const {
    parentGroupWid: n,
    initialSelectedSubgroup: a,
    initialStep: m = h.ADD_PARTICIPANTS_DRAWER,
    shortenedCreationFlow: g
  } = e;
  const E = n != null ? o.ChatCollection.get(n) : null;
  const v = E != null ? E.formattedTitle : null;
  const [_, y] = (0, f.useFlow)(m, {
    transitions: f.FlowTransitions.DrawerLeft,
    onEnd: e.onEnd
  });
  const [C, b] = (0, d.useState)([]);
  const [M, S] = (0, d.useState)(true);
  const [T, w] = (0, d.useState)();
  const [A, P] = (0, d.useState)();
  const [O, k] = (0, d.useState)();
  const [D, I] = (0, d.useState)();
  (0, p.useListener)(l.Cmd, "end_flow", () => {
    y.end();
  });
  (0, d.useEffect)(() => {
    i.ContactCollection.ensureSorted();
  }, []);
  const R = function (t, a, r, o) {
    let l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    const i = (0, u.createGroup)(t, a, r, l, o, n);
    if (e.onCreateGroup) {
      e.onCreateGroup(i);
    }
  };
  const N = (e, t) => {
    b(e);
    S(t);
    if (g === true) {
      y.pop();
    } else {
      y.push(h.SET_GROUP_INFO_DRAWER);
    }
  };
  const x = e => {
    if (e.text != null) {
      w(e.text);
    }
    if (e.thumb != null) {
      P(e.thumb);
    }
    if (e.full != null) {
      k(e.full);
    }
    if (e.ephemeralDuration != null) {
      I(e.ephemeralDuration);
    }
  };
  if (y.step == null) {
    return null;
  }
  let L;
  switch (y.step) {
    case h.SET_GROUP_INFO_DRAWER:
      {
        var j;
        const e = (0, r.getABPropConfigValue)("parent_group_no_disclaimer") && (E == null || (j = E.groupMetadata) === null || j === undefined ? undefined : j.isParentGroupClosed) === true;
        L = d.default.createElement(s.default, {
          participants: C,
          onBack: () => y.pop(),
          onSubmit: R,
          communityName: e ? null : v,
          allowUnnamedGroup: M,
          parentGroupId: n,
          shortenedCreationFlow: g,
          onAddParticipants: () => y.push(h.ADD_PARTICIPANTS_DRAWER),
          handleLiftGroupInfo: x,
          subject: T,
          thumb: A,
          full: O,
          ephemeralDuration: D
        });
        break;
      }
    case h.ADD_PARTICIPANTS_DRAWER:
      L = d.default.createElement(c.default, {
        onBack: () => y.pop(),
        onContinue: N,
        participants: C,
        communityName: v,
        parentGroupId: n,
        initialSelectedSubgroup: a
      });
  }
  return d.default.createElement(_, {
    ref: t,
    flow: y
  }, L);
};
const E = (0, d.forwardRef)(g);
exports.NewGroupFlow = E;
E.displayName = "NewGroupFlow";