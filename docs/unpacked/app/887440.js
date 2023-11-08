var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localExitGroup = A;
exports.sendExitCommunity = function (e) {
  return T((0, _.unproxy)(e));
};
exports.sendExitGroup = function (e) {
  return v((0, _.unproxy)(e));
};
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./328620.js");
var s = require("./984330.js");
var l = require("./47912.js");
var u = require("./150869.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
var d = require("./114850.js");
var p = require("./295217.js");
var f = require("./61229.js");
var _ = require("./163139.js");
var g = require("./390737.js");
var m = require("./459857.js");
var h = r(require("./556869.js"));
var y = require("../vendor/548360.js");
var E = r(require("../vendor/667294.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function v(e) {
  const {
    isGroup: t,
    promises: n
  } = e;
  if (!t) {
    return Promise.reject(new c.ActionError());
  }
  if (n.sendExit) {
    return n.sendExit;
  }
  const r = n.sendExit = (0, u.leaveGroup)(e.id).then(e => {
    if (e.code !== 200) {
      throw new s.ServerStatusCodeError(e.code);
    }
  });
  const i = new o.ActionType(y.fbt._("Exiting group", null, {
    hk: "2dvN0a"
  }));
  const l = r.then(() => new o.ActionType(y.fbt._("Exited group", null, {
    hk: "1qtcEw"
  }))).catch((0, a.filteredCatch)(s.ServerStatusCodeError, e => {
    if (e.status >= 400) {
      return new o.ActionType(y.fbt._("Couldn't exit group.", null, {
        hk: "3oI3Ag"
      }));
    }
  })).catch(function () {
    __LOG__(3)`actions:chat:sendExit dropped`;
    return new o.ActionType(y.fbt._("Couldn't exit group.", null, {
      hk: "3oI3Ag"
    }), {
      actionText: y.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => v(e)
    });
  });
  g.ToastManager.open(E.default.createElement(o.ActionToast, {
    initialAction: i,
    pendingAction: l
  }));
  return r.then(() => {
    A(e);
    return true;
  }).finally(() => {
    n.sendExit = null;
  }).catch((0, a.filteredCatch)(s.ServerStatusCodeError, () => false));
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    const {
      isGroup: t,
      promises: r
    } = e;
    if (!t) {
      return Promise.reject(new c.ActionError());
    }
    if (r.sendExit) {
      return r.sendExit;
    }
    const i = r.sendExit = (0, u.leaveCommunity)(e.id);
    const a = new o.ActionType(y.fbt._("Exiting community", null, {
      hk: "2Mruou"
    }));
    const s = i.then(t => {
      const {
        Name: r
      } = require("./21645.js");
      const i = e.formattedTitle != null ? y.fbt._("You left the community \"{community}\"", [y.fbt._param("community", E.default.createElement(r, {
        chat: e
      }))], {
        hk: "1PNE8e"
      }) : y.fbt._("You left the community", null, {
        hk: "23OdmD"
      });
      const a = () => {
        d.ModalManager.close();
        T(e);
      };
      if (t.code === 200) {
        return new o.ActionType(i);
      }
      if (t.code === 500) {
        d.ModalManager.open(E.default.createElement(l.CommunityLeaveRetryError, {
          onOK: a
        }));
      } else {
        d.ModalManager.open(E.default.createElement(l.CommunityLeaveStandardError, null));
      }
    }).catch(e => {
      __LOG__(3)`models:groupMetadata:participantCollection:exitCommunity dropped`;
      if (e.statusCode === 429 || e.statusCode === 500) {
        d.ModalManager.open(E.default.createElement(l.CommunityLeaveTryAgainLaterError, null));
      } else {
        d.ModalManager.open(E.default.createElement(l.CommunityLeaveStandardError, null));
      }
    }).finally(() => {
      r.sendExit = null;
    });
    g.ToastManager.open(E.default.createElement(o.ActionToast, {
      initialAction: a,
      pendingAction: s
    }));
    yield i;
  })).apply(this, arguments);
}
function A(e) {
  var t;
  if (e.isGroup) {
    if (!((t = e.groupMetadata) === null || t === undefined)) {
      t.participants.remove((0, m.getMaybeMeUser)());
    }
    (0, f.getChatTable)().merge(e.id.toString(), {
      isReadOnly: true
    }).then(() => {
      e.isReadOnly = true;
      (0, p.invalidateChatPollMsgs)(e);
    }).catch(e => {
      __LOG__(4, true, new Error(), true)`failed to merge chat table`;
      SEND_LOGS("failed to merge chat table when exiting group: " + e);
      throw (0, h.default)("failed to merge chat table");
    });
  }
}