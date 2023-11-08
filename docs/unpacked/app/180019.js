var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllContactsFromChatCollectionIntoChunks = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  const t = [];
  const n = [];
  const r = new Set();
  let i = new Set();
  for (const a of o.ChatCollection.toArray()) {
    if (i.size === e) {
      t.push(i);
      i = new Set();
    }
    if (a.isEligibleForContactSync) {
      if (a.isGroup) {
        n.push(a.id);
      } else if (!r.has(a.id)) {
        i.add(a.id);
        r.add(a.id);
      }
    }
  }
  for (const l of n) {
    var a;
    var s;
    const n = o.ChatCollection.get(l) || {};
    const u = (a = (s = n.groupMetadata) === null || s === undefined ? undefined : s.participants.toArray()) !== null && a !== undefined ? a : [];
    for (const n of u) {
      if (i.size === e) {
        t.push(i);
        i = new Set();
      }
      if (!r.has(n.id)) {
        i.add(n.id);
        r.add(n.id);
      }
    }
  }
  if (i.size !== 0) {
    t.push(i);
  }
  __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`get ${t.length} chunks of contacts from chat collection, chunk size: ${e}`;
  return t;
};
exports.getAndUpdateNonAddressBookContacts = function () {
  return y.apply(this, arguments);
};
exports.getNonAddressBookContactsAndMarkAllContactsDirty = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./12643.js");
var o = require("./351053.js");
var s = require("./714443.js");
var l = require("./732011.js");
var u = require("./61229.js");
var c = require("./918475.js");
var d = r(require("./124928.js"));
var p = require("./669050.js");
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    const e = new Set();
    yield (0, c.getParticipantTable)().forEach(t => {
      t.participants.forEach(t => {
        if (d.default.isLid(t)) {
          e.add((0, s.toLidUserJid)((0, p.createWid)(t).user));
        } else {
          e.add((0, s.toPhoneUserJid)((0, p.createWid)(t).user));
        }
      });
    });
    yield (0, u.getChatTable)().forEach(t => {
      if (d.default.isEligibleForUSync(t.id)) {
        if (d.default.isLid(t.id)) {
          e.add((0, s.toLidUserJid)((0, p.createWid)(t.id).user));
        } else {
          e.add((0, s.toPhoneUserJid)((0, p.createWid)(t.id).user));
        }
      }
    });
    __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`found ${e.size} contacts from chat and group participant tables`;
    return Array.from(e);
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const t = yield e.anyOf(["isAddressBookContact"], [1, 0]);
    const n = new Set(t.map(e => e.id));
    __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`found ${n.size} contacts with set isAddressBookContact value from contact table`;
    return n;
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    const e = yield f();
    return (0, l.getStorage)().lock(["contact"], function () {
      var t = (0, i.default)(function* (t) {
        let [n] = t;
        const r = yield g(n);
        const i = Array.from(e).map(e => r.has(e) ? {
          id: e,
          isContactSyncCompleted: 0
        } : {
          id: e,
          isAddressBookContact: 0,
          isContactSyncCompleted: 0,
          contactHash: (0, a.getContactHash)(e)
        });
        __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`mark ${i.length} contacts dirty during the regular sync`;
        return n.bulkCreateOrMerge(i);
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* () {
    const e = yield f();
    return (0, l.getStorage)().lock(["contact"], function () {
      var t = (0, i.default)(function* (t) {
        let [n] = t;
        const r = yield g(n);
        const i = e.filter(e => !r.has(e)).map(e => ({
          id: e,
          isAddressBookContact: 0,
          isContactSyncCompleted: 0,
          contactHash: (0, a.getContactHash)(e)
        }));
        __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`get ${i.length} non-address book contacts, mark dirty, and update the contact table during the initial sync`;
        return n.bulkCreateOrMerge(i);
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}