var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleVerifiedBusinessNameNotificationContact = function () {
  return A.apply(this, arguments);
};
exports.handleVerifiedBusinessNameNotificationHash = function () {
  return M.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./782049.js");
var u = r(require("./200071.js"));
var c = require("./391541.js");
var d = r(require("./65230.js"));
var p = require("./355813.js");
var f = require("./177938.js");
var _ = require("./338835.js");
var g = require("./732011.js");
var m = r(require("./556869.js"));
function h(e, t, n, r, i, a) {
  const o = f.ContactCollection.get(e);
  if (o != null) {
    (0, c.updateContactsWithVerifiedNames)([{
      id: e,
      name: n,
      level: t,
      isApi: r,
      isSmb: i,
      privacyMode: a
    }], [o]);
  }
  return Promise.resolve();
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    yield (0, g.getStorage)().lock(["verified-business-name"], () => (0, l.createOrUpdateVerifiedBusinessName)(e.wid, {
      level: e.level,
      serial: parseInt(e.serial || "0", 10),
      name: e.verifiedName,
      isApi: e.isApi,
      isSmb: e.isSmb,
      privacyMode: e.privacyMode ? {
        actualActors: e.privacyMode.actualActors,
        hostStorage: e.privacyMode.hostStorage,
        privacyModeTs: e.privacyMode.privacyModeTs
      } : null
    }));
    const t = [];
    const n = f.ContactCollection.get(e.wid);
    if (n != null) {
      t.push((0, u.default)(e.wid, {
        isBusiness: n.isBusiness,
        privacyMode: n.privacyMode
      }, {
        isBusiness: true,
        privacyMode: e.privacyMode
      }));
    }
    t.push(h(e.wid, e.level, e.verifiedName, e.isApi, e.isSmb, e.privacyMode));
    yield Promise.all(t);
  })).apply(this, arguments);
}
const S = new s.WapParser("verifiedNameParser", e => (0, d.default)(e.child("verified_name")));
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      type: "get",
      xmlns: "w:biz",
      id: (0, o.generateId)()
    }, (0, o.wap)("verified_name", {
      jid: (0, p.DEVICE_JID)(e)
    }));
    const n = yield (0, a.deprecatedSendIq)(t, S);
    if (!n.success) {
      if (n.errorCode === 404) {
        return void __LOG__(3)`verified name notification not found`;
      }
      throw (0, m.default)("Could not send IQ in retrieveBusinessDetails");
    }
    return n.result;
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    if (e.type !== "verified_name_hash") {
      throw (0, m.default)("Invalid notification type");
    }
    const t = f.ContactCollection.resolveWidsFromHash(e.hash);
    if (!t) {
      return false;
    }
    const n = yield Promise.all(t.map(function () {
      var e = (0, i.default)(function* (e) {
        return {
          wid: e,
          verifiedName: yield v(e)
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    if (n.length) {
      yield Promise.all(n.map(t => {
        let {
          wid: n,
          verifiedName: r
        } = t;
        if (r) {
          const {
            name: t,
            level: i,
            serial: a,
            isApi: o,
            isSmb: s,
            privacyMode: l
          } = r;
          return y({
            wid: n,
            verifiedName: t,
            level: i,
            stanzaId: e.stanzaId,
            ts: e.ts,
            serial: a,
            isApi: o,
            isSmb: s,
            privacyMode: l
          });
        }
        if (r === undefined) {
          return (0, _.handleBusinessRemoval)(n, e.stanzaId, e.ts);
        }
      }));
    }
    return true;
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    let {
      jid: t,
      stanzaId: n,
      ts: r,
      verifiedName: i
    } = e;
    const {
      serial: a = "",
      level: o,
      isApi: s,
      isSmb: l,
      privacyMode: u
    } = i;
    let c = i.name;
    var d;
    if (!c) {
      if (((d = f.ContactCollection.get(t)) === null || d === undefined ? undefined : d.verifiedName) != null) {
        var p;
        c = ((p = f.ContactCollection.get(t)) === null || p === undefined ? undefined : p.verifiedName) || "";
      } else {
        const e = yield v(t);
        if (!e) {
          return;
        }
        c = e.name;
      }
    }
    return y({
      verifiedName: c,
      level: o,
      stanzaId: n,
      ts: r,
      wid: t,
      serial: a,
      isApi: s,
      isSmb: l,
      privacyMode: u
    });
  })).apply(this, arguments);
}