var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockContact = function (e) {
  const {
    contact: t,
    blockEntryPoint: n,
    bizOptOutArgs: r
  } = e;
  const i = (0, l.getBlockEventMetricFromBlockEntryPoint)(n);
  (0, _.logBlockEvent)({
    contact: t,
    blockEntryPoint: i,
    isBlock: true
  });
  return y((0, d.unproxy)(t), true, r);
};
exports.unblockContact = function (e, t) {
  const n = (0, l.getBlockEventMetricFromBlockEntryPoint)(t);
  (0, _.logBlockEvent)({
    contact: e,
    blockEntryPoint: n,
    isBlock: false
  });
  return y((0, d.unproxy)(e), false);
};
exports.updatePSAUserBlockingStatus = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./328620.js");
var o = require("./984330.js");
var s = require("./474596.js");
var l = require("./157550.js");
var u = require("./208016.js");
var c = require("./714574.js");
var d = require("./163139.js");
var p = require("./390737.js");
var f = require("./121085.js");
var _ = require("./437175.js");
var g = require("../vendor/548360.js");
var m = r(require("../vendor/667294.js"));
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = e;
    if (yield (0, f.updateBlockingStatusForPSAUser)(e)) {
      s.BlocklistCollection.add({
        id: t
      });
    } else {
      s.BlocklistCollection.remove(t);
    }
  })).apply(this, arguments);
}
function y(e, t, n, r) {
  const {
    id: l,
    phoneNumber: d
  } = e;
  const _ = t && l.isLid() && d != null ? d : l;
  const h = e.isContactBlocked;
  if (t && h || !t && !h) {
    return Promise.resolve();
  }
  const E = (t ? (0, u.blockUser)(_, n) : (0, u.unblockUser)(_)).then(function () {
    var e = (0, i.default)(function* (e) {
      if (e && e.errorCode != null) {
        throw new o.ServerStatusCodeError(e.errorCode, e.errorText);
      }
      yield (0, f.updateBlocklistDbJob)(_, t);
      if (t) {
        s.BlocklistCollection.add({
          id: _
        });
      } else {
        s.BlocklistCollection.remove(_);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  (function (e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, a.genId)();
    const s = (0, c.getFormattedName)(e);
    const l = n ? new a.ActionType(g.fbt._("Blocking {participant}", [g.fbt._param("participant", s)], {
      hk: "25R7mo"
    })) : new a.ActionType(g.fbt._("Unblocking {participant}", [g.fbt._param("participant", s)], {
      hk: "1vz9xT"
    }));
    const u = t.then(() => {
      const t = n ? g.fbt._("{participant} blocked", [g.fbt._param("participant", s)], {
        hk: "4nUqpY"
      }) : g.fbt._("{participant} unblocked", [g.fbt._param("participant", s)], {
        hk: "rIZiH"
      });
      return new a.ActionType(t, {
        actionText: g.fbt._("Undo", null, {
          hk: "4sCkfZ"
        }),
        actionHandler: () => y(e, !n, r, i)
      });
    }).catch(t => {
      if (!(t instanceof o.ServerStatusCodeError)) {
        __LOG__(3)`action:setBlock dropped`;
        const t = n ? g.fbt._("Couldn't block {participant}", [g.fbt._param("participant", s)], {
          hk: "3uVKv9"
        }) : g.fbt._("Couldn't unblock {participant}", [g.fbt._param("participant", s)], {
          hk: "TpR9O"
        });
        throw new a.ActionType(t, {
          actionText: g.fbt._("Try again.", null, {
            hk: "262nZi"
          }),
          actionHandler: () => y(e, n, r, i)
        });
      }
      if (t.statusCode >= 400) {
        throw n ? new a.ActionType(g.fbt._("Couldn't block {participant}", [g.fbt._param("participant", s)], {
          hk: "3uVKv9"
        })) : new a.ActionType(g.fbt._("Couldn't unblock {participant}", [g.fbt._param("participant", s)], {
          hk: "TpR9O"
        }));
      }
    });
    p.ToastManager.open(m.default.createElement(a.ActionToast, {
      id: i,
      initialAction: l,
      pendingAction: u
    }));
  })(e, E, t, n, r);
  return E;
}