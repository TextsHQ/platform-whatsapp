var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearOfflineSnapShot = function () {
  return C.apply(this, arguments);
};
exports.exceedResumeWithOpenTabLimit = function (e, t) {
  return e + t > b || e > M && e + t > A;
};
exports.loadMainScreen = function () {
  return I.apply(this, arguments);
};
exports.readyForMainScreen = R;
exports.refreshWindow = function () {
  var e;
  if ((e = window.location) === null || e === undefined ? undefined : e.reload) {
    window.location.reload();
  }
};
exports.restoreDataFromStorage = P;
exports.runReceiptCleanUpLoop = function () {
  if ((0, l.getABPropConfigValue)("web_enable_open_tab_pre_ack") && !_.default.online) {
    __LOG__(2)`[offline-resume][utils] runReceiptCleanUpLoop: skip due to offline.`;
    return Promise.resolve();
  }
  return (0, s.promiseLoop)(function () {
    var e = (0, i.default)(function* (e, t, n) {
      const r = (0, o.delayMs)((0, a.expBackoff)(n, 120000, 1000, 0.1));
      try {
        yield (0, u.clearDanglingReceipts)();
        __LOG__(2)`[offline-resume][utils] runReceiptCleanUpLoop: done.`;
        return e();
      } catch (t) {
        __LOG__(2)`[offline-resume][utils] runReceiptCleanUpLoop: failed with error ${t}.`;
        if (n > 3) {
          __LOG__(3)`[offline-resume][utils] runReceiptCleanUpLoop: Gave up clean up receipts ${n} tries`;
          return e();
        } else {
          return r;
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./250655.js");
var o = require("./8304.js");
var s = require("./904086.js");
var l = require("./287461.js");
var u = require("./822017.js");
var c = require("./780549.js");
var d = require("./800321.js");
require("./724469.js");
var p = require("./332108.js");
var f = require("./319169.js");
var _ = r(require("./99398.js"));
var g = require("./511899.js");
var m = require("./280464.js");
var h = require("./889263.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
}(require("./218925.js"));
var E = require("./314189.js");
var S = require("./209983.js");
var v = require("./766187.js");
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = 20;
const A = 50;
const b = 200;
function C() {
  return (C = (0, i.default)(function* () {
    (0, d.getMessageCache)().createSnapshot();
    m.OfflinePendingDeviceCache.createSnapshot();
    const e = [(0, d.getMessageCache)().checkpointQueue.wait(), m.OfflinePendingDeviceCache.checkpointQueue.wait()];
    e.push(f.receiptBatcher.runActiveBatches());
    yield Promise.all(e);
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e) {
    try {
      const {
        threadMeta: t,
        shouldUpdateReceipts: n = false,
        shouldRestoreChatsAndMsgs: r = true
      } = e;
      __LOG__(2)`[offline-resume] restoreDataFromStorage.`;
      const i = (n ? (0, g.updatePeerReceipts)() : Promise.resolve()).then(() => r ? (0, v.workerSafeSendAndReceive)("restoreChatsAndMessages", {
        threadMeta: t
      }) : Promise.resolve());
      const a = (0, v.workerSafeSendAndReceive)("restoreGroupsAndContacts");
      const o = (0, v.workerSafeSendAndReceive)("restoreProfilePictures");
      yield Promise.all([i, a, o]);
    } catch (e) {
      __LOG__(4, true, new Error(), true, ["logout"])`[offline-resume] restoreDataFromStorage failed with error ${e}.`;
      SEND_LOGS("offline-resume-fatal-error", 1, "logout");
      (0, E.socketLogout)(p.LogoutReason.ClientFatalError);
    }
  })).apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e) {
    try {
      yield (0, h.pruneExpiredMessagesWithAddOns)();
    } catch (e) {
      __LOG__(4, undefined, new Error())`[offline-resume] loadMainScreen: pruneExpiredMessages message failed with error: ${e}`;
      throw e;
    }
    yield P(e);
    R();
    c.Cmd.readyForProcessOffline();
    __LOG__(2)`[offline-resume] start handling offline stanza`;
  })).apply(this, arguments);
}
function R() {
  c.Cmd.readyForMainStreamMode();
  S.OfflineResumeReporter.logMainScreenLoadT();
  y.setMainStreamModeReadyT();
}