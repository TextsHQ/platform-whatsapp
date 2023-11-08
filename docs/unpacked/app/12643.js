var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkUpdateUsernamesInDb = function (e) {
  return (0, p.getStorage)().lock(["contact"], t => {
    let [n] = t;
    return n.bulkCreateOrMerge(e);
  });
};
exports.clearLidPnMappingCache = function () {
  m.clear();
  h.clear();
};
exports.createLidPnMappings = S;
exports.createOrMergeAddressBookContacts = function (e) {
  return (0, f.getContactTable)().bulkCreateOrMerge(e);
};
exports.flushLidPnMappingsToDb = function () {
  return S({
    mappings: [],
    flushImmediately: true
  }).catch(() => {
    __LOG__(4, undefined, new Error(), true)`flushLidPnMappingsToDb failed!`;
    SEND_LOGS("Failed to flushLidPnMappingsToDb");
  });
};
exports.getAllLidContacts = function () {
  return m.getAllLids();
};
exports.getAlternateDeviceWid = function (e) {
  const t = e.isLid() ? M((0, g.toUserWid)(e)) : T((0, g.toUserWid)(e));
  var n;
  if (t != null) {
    return (0, g.createDeviceWidFromUserAndDevice)(t.user, t.server, (n = e.device) !== null && n !== undefined ? n : l.DEFAULT_DEVICE_ID);
  }
};
exports.getAlternateWid = v;
exports.getAlternateWidBulk = function (e) {
  const t = new Map();
  e.forEach(e => {
    const n = v(e);
    if (n != null) {
      t.set(n.toString(), e);
    }
  });
  return t;
};
exports.getAlternateWidBulkForLids = function (e) {
  const t = new Map();
  e.forEach(e => {
    const n = (0, g.createWid)(e);
    if (_.default.isLid(n)) {
      const e = M(n);
      if (e != null) {
        const r = [];
        r.push(e.toString());
        if (!e.isLid()) {
          const t = T(e);
          if (!(t == null || _.default.equals(n, t))) {
            r.push(t.toString());
          }
        }
        t.set(n.toString(), r);
      }
    }
  });
  return t;
};
exports.getContactHash = E;
exports.getContactRecord = A;
exports.getContactUsername = function () {
  return b.apply(this, arguments);
};
exports.getCurrentLid = T;
exports.getPhoneNumber = M;
exports.isAddressBookContact = function () {
  return y.apply(this, arguments);
};
exports.lidPnCacheDirtySet = exports.lidPnCache = undefined;
exports.setNotAddressBookContacts = function (e) {
  return (0, p.getStorage)().lock(["contact"], t => {
    let [n] = t;
    const r = e.map(e => ({
      id: e,
      isAddressBookContact: 0,
      name: undefined,
      shortName: undefined,
      contactHash: E(e)
    }));
    return n.bulkCreateOrMerge(r);
  });
};
exports.updateContactAdvHostedType = function () {
  return C.apply(this, arguments);
};
exports.updateLidMetadata = function (e) {
  return (0, p.getStorage)().lock(["contact"], t => {
    let [n] = t;
    const r = e.map(e => {
      const {
        lid: t,
        data: n
      } = e;
      return (0, i.default)({
        id: t.toString()
      }, n);
    });
    return n.bulkCreateOrMerge(r);
  });
};
exports.warmUpLidPnMapping = function (e, t, n) {
  m.add(e, {
    lid: e,
    phoneNumber: t,
    phoneNumberCreatedAt: n
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./417405.js");
var s = r(require("./415227.js"));
var l = require("./418987.js");
var u = r(require("./983254.js"));
var c = require("./632157.js");
require("./359987.js");
var d = require("./982934.js");
var p = require("./732011.js");
require("./962559.js");
var f = require("./691195.js");
var _ = r(require("./124928.js"));
var g = require("./669050.js");
const m = new d.LidPnCache();
exports.lidPnCache = m;
const h = new Set();
function y() {
  return (y = (0, a.default)(function* (e) {
    const t = yield (0, f.getContactTable)().get(e);
    return t != null && t.isAddressBookContact === 1;
  })).apply(this, arguments);
}
function E(e) {
  const t = (0, g.createWid)(e).user;
  const n = (0, o.decodeB64)((0, u.default)(t + "WA_ADD_NOTIF"));
  return (0, o.encodeB64)(n.slice(0, 3));
}
function S(e) {
  let {
    mappings: t,
    flushImmediately: n
  } = e;
  const r = [];
  const i = (0, c.unixTime)();
  t.forEach(e => {
    const t = e.lid;
    const a = m.getPhoneNumber(t);
    const o = a != null ? m.getCurrentLid(a) : null;
    if (a == null || o != null && !o.equals(e.lid)) {
      m.add(t, {
        lid: t,
        phoneNumber: e.pn,
        phoneNumberCreatedAt: i
      });
      if (n) {
        r.push(e);
      } else {
        h.add(t.toString());
      }
    }
  });
  if (n && h.size > 0) {
    __LOG__(2)`flush lidPnCacheDirtySet: get dirty updates for ${Array.from(h).join(",")}`;
    h.forEach(e => {
      const t = (0, g.createUserWid)(e);
      const n = m.getPhoneNumber(t);
      if (n != null) {
        r.push({
          lid: t,
          pn: (0, g.toUserWid)(n)
        });
      }
    });
    __LOG__(2)`lidPnCacheDirtySet: ${h.size} flushed`;
    h.clear();
  }
  if (r.length === 0) {
    return Promise.resolve();
  }
  const a = r.map(e => {
    let {
      lid: t,
      pn: n
    } = e;
    return {
      id: t.toString(),
      phoneNumber: n.toString(),
      phoneNumberCreatedAt: i
    };
  });
  return (0, f.getContactTable)().bulkCreateOrMerge(a);
}
function v(e) {
  if (e.device != null) {
    throw (0, s.default)("getAlternateWid - Invalid get call using deviceWid");
  }
  if (e.isLid()) {
    return M(e);
  } else {
    return T(e);
  }
}
function T(e) {
  return m.getCurrentLid(e);
}
function M(e) {
  return m.getPhoneNumber(e);
}
function A(e) {
  return (0, f.getContactTable)().get(e.toJid());
}
function b() {
  return (b = (0, a.default)(function* (e) {
    const t = yield A(e);
    if (t == null) {
      return undefined;
    } else {
      return t.username;
    }
  })).apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* () {
    return Promise.resolve();
  })).apply(this, arguments);
}
exports.lidPnCacheDirtySet = h;