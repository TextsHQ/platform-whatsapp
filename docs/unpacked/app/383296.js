var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessageReport = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : g.SpamFlow.MessageMenu;
  const n = (0, m.unproxy)(e);
  return v({
    chat: (0, c.getChat)(n),
    spamFlow: t,
    msg: n
  });
};
exports.sendMessageReportBlock = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : g.SpamFlow.MessageMenu;
  return M((0, m.unproxy)(e), t);
};
exports.sendNotSpam = function (e, t) {
  return T((0, m.unproxy)(e), t);
};
exports.sendReport = function (e) {
  const {
    spamFlow: t,
    chat: n,
    msg: r,
    msgType: i
  } = e;
  return v({
    chat: n,
    spamFlow: t,
    msg: r,
    msgType: i
  });
};
exports.sendSpamBlockClear = function (e, t) {
  return function (e, t) {
    const {
      promises: n,
      isGroup: r,
      contact: i
    } = e;
    if (n.reportSpamBlockClear) {
      return n.reportSpamBlockClear;
    }
    if (r) {
      return Promise.reject(new d.ActionError());
    }
    const a = (0, l.getBlockEntryPointFromSpamFlow)(t);
    const o = v({
      chat: e,
      spamFlow: t
    });
    n.reportSpamBlockClear = o.then(() => (0, s.blockContact)({
      contact: i,
      blockEntryPoint: a
    })).then(() => (0, _.sendClear)(e, false)).catch(() => {}).finally(() => {
      n.reportSpamBlockClear = null;
    });
    return n.reportSpamBlockClear;
  }((0, m.unproxy)(e), t);
};
exports.sendSpamExitClear = function (e, t) {
  return function (e, t) {
    const {
      promises: n,
      isGroup: r,
      isReadOnly: i
    } = e;
    if (n.reportSpamExitClear) {
      return n.reportSpamExitClear;
    }
    if (!r) {
      return Promise.reject(new d.ActionError());
    }
    let a;
    const o = v({
      chat: e,
      spamFlow: t
    });
    if (i) {
      a = o;
    } else {
      const t = (0, u.sendExitGroup)(e);
      a = Promise.all([o, t]);
    }
    n.reportSpamExitClear = a.then(() => (0, _.sendClear)(e, false)).catch(() => {}).finally(() => {
      n.reportSpamExitClear = null;
    });
    return n.reportSpamExitClear;
  }((0, m.unproxy)(e), t);
};
var i = require("./122583.js");
var a = require("./328620.js");
var o = require("./984330.js");
var s = require("./547979.js");
var l = require("./157550.js");
var u = require("./887440.js");
var c = require("./163755.js");
var d = function (e, t) {
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
var p = require("./373070.js");
var f = require("./662193.js");
var _ = require("./383510.js");
var g = require("./453603.js");
var m = require("./163139.js");
var h = require("./390737.js");
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
  var t;
  const {
    spamFlow: n,
    chat: r,
    msg: s,
    toastId: l = (0, a.genId)(),
    msgType: u
  } = e;
  const {
    sendingReportMsg: d,
    couldntSendReportMsg: _,
    tryAgainMsg: g,
    reportSentMsg: m,
    reportNotSentMsg: S
  } = {
    couldntSendReportMsg: y.fbt._("Couldn't send report", null, {
      hk: "2ZtJYN"
    }),
    sendingReportMsg: y.fbt._("Sending report", null, {
      hk: "2uydPK"
    }),
    reportSentMsg: y.fbt._("Report sent", null, {
      hk: "bZRkW"
    }),
    reportNotSentMsg: y.fbt._("Report not sent", null, {
      hk: "2fMKVK"
    }),
    tryAgainMsg: y.fbt._("Try again.", null, {
      hk: "JaKh8"
    })
  };
  const T = (t = r == null ? undefined : r.promises) !== null && t !== undefined ? t : null;
  if (T == null ? undefined : T.sendSpamReport) {
    return T.sendSpamReport;
  }
  let M;
  if (u === p.MSG_TYPE.STATUS_V3 && s != null) {
    M = (0, f.reportStatus)(n, s).then(e => {
      if ((e == null ? undefined : e.errorCode) != null) {
        throw new o.ServerStatusCodeError(e.errorCode, e.errorText);
      }
    });
  } else {
    if (!T) {
      return new Promise(() => {});
    }
    if (s != null) {
      M = T.sendSpamReport = (0, f.reportSpam)((0, c.getChat)(s), n, s).then(e => {
        if ((e == null ? undefined : e.errorCode) != null) {
          throw new o.ServerStatusCodeError(e.errorCode, e.errorText);
        }
      });
    } else if (r != null) {
      M = T.sendSpamReport = (0, f.reportSpam)(r, n).then(e => {
        if ((e == null ? undefined : e.errorCode) != null) {
          throw new o.ServerStatusCodeError(e.errorCode, e.errorText);
        }
      });
    }
  }
  if (!M) {
    return new Promise(() => {});
  }
  const A = new a.ActionType(d);
  const b = M.then(() => new a.ActionType(m), () => new a.ActionType(S)).catch((0, i.filteredCatch)(o.ServerStatusCodeError, () => new a.ActionType(_))).catch(() => {
    __LOG__(3)`reportSpam dropped`;
    return new a.ActionType(_, {
      actionText: g,
      actionHandler: () => v({
        chat: r,
        spamFlow: n,
        msg: s,
        toastId: l,
        msgType: u
      })
    });
  });
  h.ToastManager.open(E.default.createElement(a.ActionToast, {
    id: l,
    initialAction: A,
    pendingAction: b
  }));
  return M.finally(() => {
    if (T == null ? undefined : T.sendSpamReport) {
      T.sendSpamReport = null;
    }
  });
}
function T(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, a.genId)();
  const {
    promises: r,
    notSpam: s
  } = e;
  if (s) {
    return Promise.resolve();
  }
  if (r.sendNotSpam) {
    return r.sendNotSpam;
  }
  const l = r.sendNotSpam = (0, f.sendNotSpamJob)(e);
  if (t) {
    const r = new a.ActionType(y.fbt._("Marking as not spam", null, {
      hk: "MD14j"
    }));
    const s = l.then(() => new a.ActionType(y.fbt._("Marked as not spam", null, {
      hk: "4ikNpb"
    }))).catch((0, i.filteredCatch)(o.ServerStatusCodeError, () => new a.ActionType(y.fbt._("Couldn't mark as not spam", null, {
      hk: "GyrCB"
    })))).catch(() => {
      __LOG__(3)`models:chat:sendNotSpam dropped`;
      return new a.ActionType(y.fbt._("Couldn't mark as not spam", null, {
        hk: "GyrCB"
      }), {
        actionText: y.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => T(e, t, n)
      });
    });
    h.ToastManager.open(E.default.createElement(a.ActionToast, {
      id: n,
      initialAction: r,
      pendingAction: s
    }));
  }
  return l.then(() => {
    e.set({
      notSpam: true
    });
  }).finally(() => {
    e.isTrusted();
    r.sendNotSpam = null;
  });
}
function M(e, t) {
  const {
    senderObj: n
  } = e;
  const r = (0, c.getChat)(e);
  const {
    promises: i
  } = r;
  if (i.reportMessageBlock) {
    return i.reportMessageBlock;
  }
  const a = (0, l.getBlockEntryPointFromSpamFlow)(t);
  const o = v({
    chat: r,
    spamFlow: t,
    msg: e
  });
  i.reportMessageBlock = o.then(() => (0, s.blockContact)({
    contact: n,
    blockEntryPoint: a
  })).catch(() => {}).finally(() => {
    i.reportMessageBlock = null;
  });
  return i.reportMessageBlock;
}