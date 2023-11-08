var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParticipants = function (e, t) {
  return C((0, p.unproxy)(e), t);
};
exports.demoteCommunityParticipants = function (e, t) {
  return function () {
    return O.apply(this, arguments);
  }((0, p.unproxy)(e), t);
};
exports.demoteParticipants = function (e, t) {
  return A((0, p.unproxy)(e), t);
};
exports.promoteCommunityParticipants = function (e, t) {
  return function (e, t) {
    var n;
    let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
    if (((n = e.groupMetadata) === null || n === undefined ? undefined : n.participants) == null) {
      return Promise.reject(new d.ActionError());
    }
    const r = (0, u.promoteCommunityParticipants)(e.id, t.map(e => e.id));
    const l = t.map(e => (0, i.getFormattedShortName)(e.contact)).join(c.default.t(54));
    const s = new o.ActionType(E.fbt._({
      "*": "Making {userNames} community admins.",
      _1: "Making {userNames} community admin."
    }, [E.fbt._plural(t.length), E.fbt._param("userNames", l)], {
      hk: "spmCZ"
    }));
    const f = r.then(e => {
      if (e.status === 207) {
        return new o.ActionType(E.fbt._({
          "*": "{userNames} are now community admins.",
          _1: "{userNames} is now a community admin."
        }, [E.fbt._plural(t.length), E.fbt._param("userNames", l)], {
          hk: "kEJDg"
        }));
      }
    }).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:promoteCommunityParticipants dropped`;
      return new o.ActionType(E.fbt._("Promotion to community admin of {userNames} failed.", [E.fbt._param("userNames", l)], {
        hk: "ySNJt"
      }));
    });
    h.ToastManager.open(v.default.createElement(o.ActionToast, {
      id: a,
      initialAction: s,
      pendingAction: f
    }));
    return r;
  }((0, p.unproxy)(e), t);
};
exports.promoteParticipants = function (e, t) {
  return T((0, p.unproxy)(e), t);
};
exports.removeParticipants = function (e, t) {
  return M((0, p.unproxy)(e), t);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/328620.js");
var l = require("../app/12643.js");
var i = require("../app/714574.js");
var u = require("./464991.js");
var s = y(require("./677303.js"));
var c = a(require("../app/932325.js"));
var d = y(require("../app/288057.js"));
var f = a(require("../app/99398.js"));
var p = require("../app/163139.js");
var m = require("../app/625786.js");
var h = require("../app/390737.js");
var g = require("../app/459857.js");
var E = require("../vendor/548360.js");
var v = a(require("../vendor/667294.js"));
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
}
function C() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, r.default)(function* (e, t) {
    var n;
    var a;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
    const f = (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants;
    if (f == null) {
      return Promise.reject(new d.ActionError());
    }
    if (t.some(e => f.get(e.id))) {
      __LOG__(3)`models:groupMetadata:participantCollection:addParticipants already a group member`;
      return Promise.reject(new d.ActionError());
    }
    if (!f.canAdd()) {
      return Promise.reject(new d.ActionError());
    }
    const p = ((a = e.groupMetadata) === null || a === undefined ? undefined : a.isLidAddressingMode) === true ? t.map(e => ({
      phoneNumber: e.id,
      lid: (0, l.getCurrentLid)(e.id)
    })) : t.map(e => ({
      phoneNumber: e.id
    }));
    const m = (0, u.addGroupParticipants)(e.id, p);
    const g = t.map(e => (0, i.getFormattedShortName)(e)).join(c.default.t(54));
    const _ = new o.ActionType(s.addingString(g, t.length));
    const y = m.then(e => {
      f.sendForNeededAddRequest(e);
      const n = e.participants.filter(e => e.code === "417");
      if (n.length > 0) {
        const e = E.fbt._({
          "*": "{participant_count} participants can't be added to the community. You can invite them privately to join this group through its invite link.",
          _1: "1 participant can't be added to the community. You can invite them privately to join this group through its invite link."
        }, [E.fbt._plural(n.length, "participant_count")], {
          hk: "1s8nIO"
        });
        return new o.ActionType(e);
      }
      const a = s.formatResult(e, s.addSuccessString, s.addFailedString, s.addPartialFailedString, t);
      return new o.ActionType(a);
    }).catch(n => {
      switch (n.status) {
        case 419:
          return new o.ActionType(E.fbt._("This participant can't be added because the community is full.", null, {
            hk: "FIXp"
          }));
        default:
          __LOG__(3)`models:groupMetadata:participantCollection:addParticipants dropped`;
          return new o.ActionType(E.fbt._({
            "*": "Couldn't add {participantNames}.",
            _1: "Couldn't add {participantNames}."
          }, [E.fbt._plural(t.length), E.fbt._param("participantNames", g)], {
            hk: "3RhnyW"
          }), {
            actionText: E.fbt._("Try again.", null, {
              hk: "262nZi"
            }),
            actionHandler: () => C(e, t, r)
          });
      }
    });
    h.ToastManager.open(v.default.createElement(o.ActionToast, {
      id: r,
      initialAction: _,
      pendingAction: y
    }));
    yield m;
  })).apply(this, arguments);
}
function M() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, r.default)(function* (e, t) {
    var n;
    let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
    const r = (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants;
    if (r == null) {
      return Promise.reject(new d.ActionError());
    }
    if (t.some(e => !r.canRemove(e))) {
      return Promise.reject(new d.ActionError());
    }
    const l = (0, u.removeGroupParticipants)(e.id, t.map(e => e.id));
    const f = t.map(e => (0, i.getFormattedShortName)(e.contact)).join(c.default.t(54));
    const p = new o.ActionType(s.removingString(f, t.length));
    const m = l.then(e => {
      const n = s.formatRemoveResult(e, t.map(e => e.contact));
      return new o.ActionType(n);
    }).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:removeParticipants dropped`;
      return new o.ActionType(E.fbt._({
        "*": "Couldn't remove {participantNames}.",
        _1: "Couldn't remove {participantNames}."
      }, [E.fbt._plural(t.length), E.fbt._param("participantNames", f)], {
        hk: "1TpAQ2"
      }), {
        actionText: E.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => M(e, t, a)
      });
    });
    h.ToastManager.open(v.default.createElement(o.ActionToast, {
      id: a,
      initialAction: p,
      pendingAction: m
    }));
    yield l;
  })).apply(this, arguments);
}
function T() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, r.default)(function* (e, t) {
    var n;
    let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
    const r = (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants;
    if (r == null) {
      return Promise.reject(new d.ActionError());
    }
    if (t.some(e => !r.canPromote(e))) {
      return Promise.reject(new d.ActionError());
    }
    const l = (0, u.promoteGroupParticipants)(e.id, t.map(e => e.id));
    const f = t.map(e => (0, i.getFormattedShortName)(e.contact)).join(c.default.t(54));
    const p = new o.ActionType(E.fbt._({
      "*": "Making {participantNames} group admins.",
      _1: "Making {participantNames} a group admin."
    }, [E.fbt._plural(t.length), E.fbt._param("participantNames", f)], {
      hk: "3P4pzy"
    }));
    const m = l.then(e => {
      const n = s.formatResult(e, s.promoteSuccessString, s.promoteFailedString, s.promotePartialFailedString, t.map(e => e.contact));
      return new o.ActionType(n);
    }).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:promoteParticipants dropped`;
      return new o.ActionType(E.fbt._({
        "*": "Couldn't make {participantNames} admins.",
        _1: "Couldn't make {participantNames} an admin."
      }, [E.fbt._plural(t.length), E.fbt._param("participantNames", f)], {
        hk: "21ub4m"
      }), {
        actionText: E.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => T(e, t, a)
      });
    });
    h.ToastManager.open(v.default.createElement(o.ActionToast, {
      id: a,
      initialAction: p,
      pendingAction: m
    }));
    yield l;
  })).apply(this, arguments);
}
function A() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, r.default)(function* (e, t) {
    var n;
    let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
    const r = (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants;
    if (r == null) {
      return Promise.reject(new d.ActionError());
    }
    if (t.some(e => !r.canDemote(e))) {
      return Promise.reject(new d.ActionError());
    }
    const l = (0, u.demoteGroupParticipants)(e.id, t.map(e => e.id));
    const f = t.map(e => (0, i.getFormattedShortName)(e.contact)).join(c.default.t(54));
    const p = new o.ActionType(E.fbt._({
      "*": "Removing {participantNames} as group admins.",
      _1: "Removing {participantNames} as a group admin."
    }, [E.fbt._plural(t.length), E.fbt._param("participantNames", f)], {
      hk: "oeIRK"
    }));
    const m = l.then(e => {
      const n = s.formatResult(e, s.demoteSuccessString, s.demoteFailedString, s.demotePartialFailedString, t.map(e => e.contact));
      return new o.ActionType(n);
    }).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:demoteParticipants dropped`;
      return new o.ActionType(E.fbt._({
        "*": "Removing {participantNames} as admins failed.",
        _1: "Removing {participantNames} as an admin failed."
      }, [E.fbt._plural(t.length), E.fbt._param("participantNames", f)], {
        hk: "1AQo2z"
      }), {
        actionText: E.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => A(e, t, a)
      });
    });
    h.ToastManager.open(v.default.createElement(o.ActionToast, {
      id: a,
      initialAction: p,
      pendingAction: m
    }));
    yield l;
  })).apply(this, arguments);
}
function O() {
  return (O = (0, r.default)(function* (e, t) {
    var n;
    let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.genId)();
    if (!f.default.online) {
      const e = t.map(e => (0, i.getFormattedShortName)(e.contact)).join(c.default.t(54));
      const n = t.length === 1 && (0, g.isMeAccount)(t[0].id) ? E.fbt._("You were not dismissed as a community admin. Check your connection and try again.", null, {
        hk: "b4OQQ"
      }) : E.fbt._({
        "*": "{userNames} were not dismissed as community admins. Check your connection and try again.",
        _1: "{userNames} was not dismissed as a community admin. Check your connection and try again."
      }, [E.fbt._plural(t.length), E.fbt._param("userNames", e)], {
        hk: "x4Nab"
      });
      return void h.ToastManager.open(v.default.createElement(m.Toast, {
        msg: n
      }));
    }
    const r = (n = e.groupMetadata) === null || n === undefined ? undefined : n.participants;
    if (r == null) {
      return Promise.reject(new d.ActionError());
    }
    const l = (0, u.demoteCommunityParticipants)(e.id, t.map(e => e.id));
    const s = t.map(e => (0, i.getFormattedShortName)(e.contact)).join(c.default.t(54));
    const p = new o.ActionType(t.length === 1 && (0, g.isMeAccount)(t[0].id) ? E.fbt._("Removing you as a community admin.", null, {
      hk: "3JExzV"
    }) : E.fbt._({
      "*": "Dismissing {userNames} as community admins.",
      _1: "Dismissing {userNames} as a community admin."
    }, [E.fbt._plural(t.length), E.fbt._param("userNames", s)], {
      hk: "2oU9lr"
    }));
    const _ = l.then(e => {
      if (e.status === 207) {
        return new o.ActionType(t.length === 1 && (0, g.isMeAccount)(t[0].id) ? E.fbt._("You're no longer a community admin.", null, {
          hk: "uw6c7"
        }) : E.fbt._({
          "*": "{userNames} are no longer community admins.",
          _1: "{userNames} is no longer a community admin."
        }, [E.fbt._plural(t.length), E.fbt._param("userNames", s)], {
          hk: "4hmEKz"
        }));
      }
    }).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:demoteCommunityParticipants dropped`;
      return new o.ActionType(t.length === 1 && (0, g.isMeAccount)(t[0].id) ? E.fbt._("Removing you as a community admin failed.", null, {
        hk: "1TAh5z"
      }) : E.fbt._({
        "*": "Removing {userNames} as community admins failed.",
        _1: "Removing {userNames} as a community admin failed."
      }, [E.fbt._plural(t.length), E.fbt._param("userNames", s)], {
        hk: "3tK8La"
      }));
    });
    h.ToastManager.open(v.default.createElement(o.ActionToast, {
      id: a,
      initialAction: p,
      pendingAction: _
    }));
    yield l;
  })).apply(this, arguments);
}