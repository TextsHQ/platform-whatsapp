var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUsernameSync = Y;
exports.syncContactList = w;
exports.syncContactListInChunks = function () {
  return D.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./8304.js");
var s = require("./632157.js");
var l = require("./798440.js");
var u = require("./12643.js");
var c = require("./275909.js");
var d = require("./601512.js");
var p = require("./233358.js");
var f = require("./369489.js");
var _ = require("./714443.js");
var g = r(require("./174285.js"));
var m = require("./848624.js");
var h = require("./476314.js");
var y = require("./150501.js");
var E = require("./691195.js");
var S = require("./139374.js");
var v = require("./476473.js");
var T = require("./491805.js");
var M = require("./622868.js");
var A = require("./487837.js");
var b = require("./557883.js");
var C = require("./129417.js");
var P = require("./94872.js");
var O = require("./692269.js");
var I = require("./328606.js");
var R = require("./669050.js");
var N = r(require("./556869.js"));
function D() {
  return (D = (0, i.default)(function* (e) {
    let {
      contactIds: t,
      shouldDelayBetweenChunks: n
    } = e;
    const r = p.CONTACT_SYNC_CHUNK_SIZE;
    __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`start contact sync for ${t.length} contacts in ${Math.ceil(t.length / r)} chunks, each chunk size: ${r}`;
    for (let e = 0; e < t.length; e += r) {
      const i = t.slice(e, e + r);
      if (n) {
        yield (0, o.delayMs)(p.SYNC_CONTACT_CHUNK_INTERVAL_SECONDS * 1000);
      }
      yield w({
        contactIds: i,
        shouldSyncDevice: true
      });
    }
  })).apply(this, arguments);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e) {
    let {
      contactIds: t,
      shouldSyncDevice: n
    } = e;
    if (t.length === 0) {
      return;
    }
    const r = yield J(t);
    const i = new O.USyncQuery().withContext("background").withMode("full").withBusinessProtocol().withPictureProtocol();
    if ((0, T.receiveTextStatusEnabled)()) {
      i.withTextStatusProtocol();
    } else {
      i.withStatusProtocol();
    }
    if (n) {
      i.withDeviceProtocol();
    }
    i.withDisappearingModeProtocol();
    i.withLidProtocol();
    if ((0, C.usernameUsyncEnabled)()) {
      i.withUsernameProtocol();
    }
    const a = r.filter(e => !e.id.isLid()).map(e => e.id);
    const s = new Map(a.map(e => {
      const t = (0, u.getCurrentLid)(e);
      if (t == null) {
        return null;
      } else {
        return [e.toString(), t];
      }
    }).filter(Boolean));
    yield Promise.all(r.map(e => {
      const t = new I.USyncUser().withId(e.id).withDeviceHash(String(e.hash));
      if (!e.id.isLid()) {
        const n = s.get(e.id.toString());
        if (n != null) {
          t.withLid(n);
        }
      }
      i.withUser(t);
    }));
    let l = null;
    let c = 3;
    let d = Math.random() * 10;
    for (; c-- > 0;) {
      try {
        l = yield i.execute();
        const e = l.error.all;
        var p;
        if (e) {
          d = (p = e.errorBackoff) !== null && p !== undefined ? p : Math.random() * 10;
          throw (0, N.default)(`syncContactList: error ${e.errorCode}: ${e.errorText}`);
        }
        c = 0;
      } catch (e) {
        if (c === 0) {
          __LOG__(4, true, new Error(), true)`failed to execute usync query`;
          SEND_LOGS("failed to execute usync query: " + e);
        }
        yield (0, o.delayMs)(d * 1000);
      }
    }
    if (l == null || l.error.all) {
      return;
    }
    const f = l.refresh;
    const _ = [];
    for (const e of Object.keys(f)) {
      _.push(f[e]);
    }
    if (_.length > 0) {
      X(Math.min(..._));
    }
    yield Promise.all([n ? z(l) : Promise.resolve(), x(l), F(l), (0, C.usernameUsyncEnabled)() ? Y(l) : Promise.resolve(), k(l), G(l), W(l), H(l)]);
    yield $(t);
  })).apply(this, arguments);
}
function k(e) {
  const t = e.error.status;
  if (t) {
    __LOG__(3)`handleSyncStatus: failed ${t.errorCode} : ${t.errorText}`;
  } else {
    e.list.map(e => {
      const t = v.StatusCollection.get(e.id);
      if (t && e.status) {
        t.set({
          status: e.status
        });
      }
    });
  }
}
function G() {
  return U.apply(this, arguments);
}
function U() {
  return (U = (0, i.default)(function* (e) {
    if (!(0, T.receiveTextStatusEnabled)()) {
      return Promise.resolve();
    }
    const t = e.error.text_status;
    if (t) {
      __LOG__(3)`handleSyncTextStatus: failed ${t.errorCode} : ${t.errorText}`;
    } else {
      yield Promise.all(e.list.map(function () {
        var e = (0, i.default)(function* (e) {
          if (e.text_status) {
            const {
              text: t,
              emoji: n,
              ephemeralDurationSeconds: r,
              lastUpdateTime: i
            } = e.text_status;
            yield (0, b.updateTextStatusForContact)(e.id, t, n, r, i);
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
    }
  })).apply(this, arguments);
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, i.default)(function* (e) {
    const t = e.error.status;
    if (t) {
      __LOG__(3)`handleDisappearingMode: failed ${t.errorCode} : ${t.errorText}`;
    } else {
      yield Promise.all(e.list.map(function () {
        var e = (0, i.default)(function* (e) {
          if (e.disappearing_mode) {
            yield (0, M.updateDisappearingModeForContact)(e.id, e.disappearing_mode.duration, e.disappearing_mode.t);
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
    }
  })).apply(this, arguments);
}
function F() {
  return j.apply(this, arguments);
}
function j() {
  return (j = (0, i.default)(function* (e) {
    var t;
    const n = e.error.lid;
    if (n) {
      __LOG__(3)`handleLidSync: error ${n.errorCode}: ${n.errorText}`;
    }
    const r = [...e.list, ...((t = e.sideList) !== null && t !== undefined ? t : [])].filter(e => {
      let {
        lid: t
      } = e;
      return typeof t == "string";
    });
    yield (0, A.createLidPnMappingsJob)(r.map(e => {
      let {
        id: t,
        lid: n
      } = e;
      return {
        lid: (0, R.createUserWid)(n),
        pn: t
      };
    }), true);
  })).apply(this, arguments);
}
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, i.default)(function* (e) {
    var t;
    const n = e.error.username;
    if (n) {
      return void __LOG__(3)`handleUsernameUsync: error ${n.errorCode}: ${n.errorText}`;
    }
    const r = [...e.list, ...((t = e.sideList) !== null && t !== undefined ? t : [])].map(e => e.hasOwnProperty("username") ? {
      userId: e.id,
      username: e.username
    } : {
      userId: e.id,
      username: undefined
    });
    yield (0, S.setUsernamesJob)(r);
  })).apply(this, arguments);
}
function W() {
  return V.apply(this, arguments);
}
function V() {
  return (V = (0, i.default)(function* (e) {
    const t = e.list.filter(e => {
      let {
        business: t
      } = e;
      return Boolean(t);
    });
    yield (0, d.handleVerifiedNameSync)(t.map(e => {
      let {
        id: t,
        business: {
          verifiedName: n
        }
      } = e;
      return {
        id: t,
        verifiedName: n
      };
    }));
  })).apply(this, arguments);
}
function H(e) {
  var t;
  const n = e.error.picture;
  if (n) {
    __LOG__(3)`handleSyncProfilePictures: failed ${n.errorCode} : ${n.errorText}`;
  } else {
    e.list.concat((t = e.sideList) !== null && t !== undefined ? t : []).forEach(e => {
      let {
        id: t,
        picture: n
      } = e;
      if (n == null) {
        (0, y.changeProfilePicThumb)(t, h.PROFILE_PIC_COMMAND.REMOVE);
      }
    });
  }
}
function $(e) {
  const t = e.map(e => ({
    id: e.isLid() ? (0, _.toLidUserJid)(e.user) : (0, _.toPhoneUserJid)(e.user),
    isContactSyncCompleted: 1
  }));
  __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`mark ${t.length} contacts completed for contact sync`;
  return (0, E.getContactTable)().bulkCreateOrMerge(t);
}
function z() {
  return q.apply(this, arguments);
}
function q() {
  return (q = (0, i.default)(function* (e) {
    const t = e.error.devices;
    if (t) {
      __LOG__(3)`handleSyncDevice: error ${t.errorCode}: ${t.errorText}`;
    }
    const n = e.list.filter(e => e.devices && e.devices.deviceList != null && e.devices.keyIndex != null && !("errorCode" in e.devices)).map(e => ({
      wid: e.id,
      devices: e.devices
    }));
    __LOG__(2)`handleSyncDevice: skipping ${e.list.length - n.length} out of ${e.list.length} records`;
    yield (0, f.getAndStoreIdentityKeys)(n.map(e => e.wid));
    return (0, l.handleADVDeviceSyncResult)(n);
  })).apply(this, arguments);
}
function J() {
  return Q.apply(this, arguments);
}
function Q() {
  return (Q = (0, i.default)(function* (e) {
    const t = (yield (0, c.getDeviceIds)(e)).map(e => e == null ? [] : e.devices.map(t => (0, R.createDeviceWidFromDeviceListPk)(e.id, t.id, t.isHosted)));
    const n = yield Promise.all(t.map(e => e.length === 0 ? "" : (0, m.phashV2)(e)));
    return e.map((e, t) => ({
      id: e,
      hash: n[t]
    }));
  })).apply(this, arguments);
}
function X(e) {
  if (Number.isNaN(e) || e <= s.HOUR_SECONDS) {
    __LOG__(3, undefined, undefined, undefined, ["contact-sync"])`invalid contact sync refresh period: ${e}`;
  } else {
    __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`set contact sync refresh period: ${e}`;
    (0, a.default)(g.default, "localStorage").setItem(P.KEYS.CONTACT_SYNC_REFRESH, String(e));
  }
}