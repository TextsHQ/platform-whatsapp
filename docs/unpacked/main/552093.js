var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExistingGroupsSubgroupSuggestionsAction = function () {
  return _.apply(this, arguments);
};
exports.createNewGroupSubgroupSuggestionAction = function () {
  return y.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/122583.js");
var i = require("../app/328620.js");
var u = require("../app/900890.js");
var s = require("../app/984330.js");
var c = require("../app/369461.js");
var d = a(require("../app/932325.js"));
var f = require("../app/163139.js");
var p = require("./348817.js");
var m = require("../app/390737.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));
const E = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    initialAction: new i.ActionType(h.fbt._({
      "*": "Creating group suggestions.",
      _1: "Creating group suggestion."
    }, [h.fbt._plural(e)], {
      hk: "1L7858"
    })),
    exitedAction: new i.ActionType(h.fbt._({
      "*": "Suggestions sent for admin approval.",
      _1: "Suggestion sent for admin approval."
    }, [h.fbt._plural(e)], {
      hk: "3C94ER"
    })),
    defaultErrorAction: new i.ActionType(h.fbt._({
      "*": "Couldn't create group suggestions.",
      _1: "Couldn't create group suggestion."
    }, [h.fbt._plural(e)], {
      hk: "36m5VB"
    }))
  };
};
const v = (e, t) => {
  switch (e.status) {
    case 406:
      return new i.ActionType(h.fbt._("Couldn't create group suggestion. Please enter a shorter group name.", null, {
        hk: "3zd7aR"
      }));
    case 419:
      t();
      return new i.ActionType(h.fbt._("Couldn't create group suggestion. The community has reached the limit of suggestions.", null, {
        hk: "wHAYo"
      }));
    default:
      t();
      return E().defaultErrorAction;
  }
};
function _() {
  return (_ = (0, o.default)(function* (e, t, n, a) {
    const {
      initialAction: r,
      exitedAction: o,
      defaultErrorAction: u
    } = E(t.length);
    const c = (0, p.createExistingGroupSubgroupSuggestion)(e, t);
    const f = c.then(e => {
      const r = e.filter(e => e.error == null).length;
      if (r === 0) {
        n();
        return u;
      } else {
        a();
        if (r !== t.length) {
          return new i.ActionType(h.fbt._("Only {succeeded-suggestions} of {total-suggestions} pending group suggestions were sent successfully.", [h.fbt._param("succeeded-suggestions", d.default.n(r)), h.fbt._param("total-suggestions", d.default.n(t.length))], {
            hk: "2vfWvR"
          }));
        } else {
          return o;
        }
      }
    }).catch((0, l.filteredCatch)(s.ServerStatusCodeError, e => v(e, n))).catch(() => {
      n();
      return u;
    });
    m.ToastManager.open(g.default.createElement(i.ActionToast, {
      initialAction: r,
      pendingAction: f
    }));
    yield c;
  })).apply(this, arguments);
}
function y() {
  return (y = (0, o.default)(function* (e, t, n, a) {
    const r = (0, f.unproxy)(e);
    const {
      initialAction: o,
      exitedAction: u,
      defaultErrorAction: c
    } = E();
    const d = (0, p.createNewGroupSubgroupSuggestion)(r.id, t.subject, t.description);
    const h = d.then(e => {
      C(r, e);
      if (!(a == null)) {
        a();
      }
      return u;
    }).catch((0, l.filteredCatch)(s.ServerStatusCodeError, e => v(e, n))).catch(() => {
      n();
      return c;
    });
    m.ToastManager.open(g.default.createElement(i.ActionToast, {
      initialAction: o,
      pendingAction: h
    }));
    yield d;
  })).apply(this, arguments);
}
function C() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, o.default)(function* (e, t) {
    try {
      var n;
      var a;
      yield (0, u.addSubgroupSuggestions)(e.id, [t]);
      if (!((n = e.groupMetadata) === null || n === undefined || (a = n.subgroupSuggestions) === null || a === undefined)) {
        a.add((0, r.default)((0, r.default)({}, t), {}, {
          id: (0, c.getSubgroupSuggestionId)(t.id, t.owner),
          groupId: t.id
        }));
      }
    } catch (e) {
      __LOG__(4, true, new Error())`failed to add subgroup suggestion to table`;
    }
  })).apply(this, arguments);
}