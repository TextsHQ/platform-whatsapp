var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatus = function () {
  return f.apply(this, arguments);
};
exports.setMyStatus = _;
var i = r(require("../vendor/348926.js"));
var a = require("./328620.js");
var o = require("./374100.js");
var s = function (e, t) {
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
}(require("./288057.js"));
var l = require("./390737.js");
var u = require("./459857.js");
var c = require("../vendor/548360.js");
var d = r(require("../vendor/667294.js"));
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
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = yield (0, o.getStatus)(e);
    if (t.stale === true) {
      const t = require("./476473.js").StatusCollection.get(e);
      if (t) {
        return {
          id: e,
          status: t.status
        };
      }
    }
    return {
      id: e,
      status: t.status
    };
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, a.genId)();
    let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    const i = e.trim();
    if (!i) {
      return Promise.reject(new s.ActionError());
    }
    const p = (0, o.setMyStatus)(i);
    const f = new a.ActionType(c.fbt._("Changing About…", null, {
      hk: "1hTGL6"
    }));
    const g = (0, u.getMaybeMeUser)();
    const m = require("./476473.js").StatusCollection;
    const h = m.assertGet(g).status;
    const y = p.then(e => {
      if (e.status === 200) {
        const e = r ? undefined : {
          actionText: c.fbt._("Undo", null, {
            hk: "4sCkfZ"
          }),
          actionHandler: () => _(h, t, true)
        };
        return new a.ActionType(c.fbt._("About changed", null, {
          hk: "nd4Ds"
        }), e);
      }
      if (e.status >= 400) {
        return new a.ActionType(c.fbt._("Couldn't change About.", null, {
          hk: "3HTnZ0"
        }));
      }
    }).catch(() => {
      __LOG__(3)`models:statusCollection:setMyStatus dropped`;
      throw new a.ActionType(c.fbt._("Couldn't change About.", null, {
        hk: "3HTnZ0"
      }), {
        actionText: c.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => _(e, t)
      });
    });
    l.ToastManager.open(d.default.createElement(a.ActionToast, {
      id: t,
      initialAction: f,
      pendingAction: y
    }));
    const E = yield p;
    if (E.status === 200) {
      m.assertGet(g).status = e;
    }
  })).apply(this, arguments);
}