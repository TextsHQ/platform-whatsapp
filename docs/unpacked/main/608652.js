var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = function () {
  return y.apply(this, arguments);
};
exports.getTextStatus = function () {
  return E.apply(this, arguments);
};
exports.setMyTextStatus = v;
exports.setSuggestions = function () {
  return C.apply(this, arguments);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/632157.js");
var i = require("../app/328620.js");
var u = require("./214466.js");
var s = require("../app/177938.js");
var c = require("../app/380900.js");
var d = require("../app/491805.js");
var f = require("../app/596328.js");
var p = require("../app/390737.js");
var m = require("../app/557883.js");
var h = require("../vendor/548360.js");
var g = r(require("../vendor/667294.js"));
function E() {
  return (E = (0, o.default)(function* (e, t) {
    if (!(0, d.receiveTextStatusEnabled)()) {
      return;
    }
    const n = s.ContactCollection.get(e);
    const r = new a();
    let o;
    try {
      o = (0, c.getTextStatus)(e, t);
      if (n) {
        var l;
        const {
          promises: e
        } = n;
        if (!((l = e.getTextStatus) === null || l === undefined)) {
          l.abortController.abort();
        }
        n.promises.getTextStatus = {
          promise: o,
          abortController: r
        };
      }
      const a = yield o;
      if (r.signal.aborted) {
        return;
      }
      if (a.error) {
        if (!(n == null)) {
          n.textStatusString;
        }
        return;
      }
      (0, m.updateTextStatusForContact)(e, a.text, a.emoji, a.ephemeralDurationSeconds, a.lastUpdateTime);
    } finally {
      var i;
      var u;
      if (n != null && ((i = n.promises) === null || i === undefined || (u = i.getTextStatus) === null || u === undefined ? undefined : u.promise) === o) {
        n.promises.getTextStatus = null;
      }
    }
  })).apply(this, arguments);
}
function v() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, o.default)(function* (e, t, n) {
    let a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, i.genId)();
    let r = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    if (!(0, d.sendTextStatusEnabled)()) {
      return;
    }
    const o = s.ContactCollection.getMeContact();
    if (!o) {
      return;
    }
    const u = !Boolean(e) && !Boolean(t);
    const f = (0, c.setTextStatus)(o.id, e, t, n);
    const E = "Setting text status";
    const _ = "Setting text status failed";
    const y = new i.ActionType(E);
    const {
      textStatusString: C,
      textStatusEmoji: b,
      textStatusEphemeralDuration: M
    } = o;
    const S = f.then(s => {
      if (s.result === "SUCCESS") {
        (0, m.updateTextStatusForContact)(o.id, e, t, n, u ? 0 : (0, l.unixTime)());
        const s = r ? undefined : {
          actionText: h.fbt._("Undo.", null, {
            hk: "3qYxdb"
          }),
          actionHandler: () => C != null && M != null ? v(C, b, M, a, true) : Promise.resolve()
        };
        return new i.ActionType(E, s);
      }
      if (s.result === "FAILURE") {
        return new i.ActionType(_);
      }
    }).catch(() => {
      throw new i.ActionType(_, {
        actionText: h.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => v(e, t, n, a)
      });
    });
    p.ToastManager.open(g.default.createElement(i.ActionToast, {
      id: a,
      initialAction: y,
      pendingAction: S
    }));
    return S;
  })).apply(this, arguments);
}
function y() {
  return (y = (0, o.default)(function* () {
    return (0, u.getTextStatusSuggestions)();
  })).apply(this, arguments);
}
function C() {
  return (C = (0, o.default)(function* (e) {
    const t = e.slice(0, f.SUGGESTIONS_MAX_COUNT);
    return (0, u.setTextStatusSuggestions)(t);
  })).apply(this, arguments);
}