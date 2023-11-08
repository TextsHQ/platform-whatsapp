var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editAttribute = function (e, t) {
  if (S(e)) {
    const e = t === "admin_revoke" ? u.EDIT_ATTR.ADMIN_REVOKE : u.EDIT_ATTR.SENDER_REVOKE;
    return (0, o.CUSTOM_STRING)(String(e));
  }
  if (function (e) {
    return e.reactionMessage != null && e.reactionMessage.text === f.REVOKED_REACTION_TEXT;
  }(e)) {
    return (0, o.CUSTOM_STRING)(String(u.EDIT_ATTR.SENDER_REVOKE));
  }
  if (function (e) {
    return e.keepInChatMessage != null && e.keepInChatMessage.key != null && e.keepInChatMessage.key.fromMe === true && e.keepInChatMessage.keepType === p.KeepType.UNDO_KEEP_FOR_ALL;
  }(e)) {
    return (0, o.CUSTOM_STRING)(String(u.EDIT_ATTR.SENDER_REVOKE));
  }
  if (v(e)) {
    return (0, o.CUSTOM_STRING)(String(u.EDIT_ATTR.MESSAGE_EDIT));
  }
  if (function (e) {
    return e.pinInChatMessage != null;
  }(e)) {
    return (0, o.CUSTOM_STRING)(String(u.EDIT_ATTR.PIN_IN_CHAT));
  }
  return o.DROP_ATTR;
};
exports.encodeAndPad = function (e) {
  const t = (0, E.encodeProtobuf)(p.MessageSpec, e);
  (0, m.writeRandomPadMax16)(t);
  return t.readByteArray();
};
exports.filterDeviceWithChangedIdentity = function () {
  return C.apply(this, arguments);
};
exports.getResendTimeoutInSeconds = function () {
  return ((0, l.getABPropConfigValue)("web_e2e_backfill_expire_time") || 5) * 60;
};
exports.isEditMsg = v;
exports.isPrimaryDevice = function (e) {
  return e.device == null || e.device === a.DEFAULT_DEVICE_ID;
};
exports.isRevokeMsg = S;
exports.sendMsgAckSyncParser = undefined;
exports.updateIdentityRange = function () {
  return M.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./287461.js");
var u = require("./402994.js");
var c = require("./298002.js");
var d = require("./459387.js");
var p = require("./533494.js");
var f = require("./911600.js");
var _ = require("./851698.js");
var g = require("./604538.js");
var m = require("./999821.js");
var h = require("./76256.js");
var y = require("./669050.js");
var E = require("./385914.js");
function S(e) {
  return e.protocolMessage != null && e.protocolMessage.type === p.Message$ProtocolMessage$Type.REVOKE;
}
function v(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  return ((t = (n = e.protocolMessage) === null || n === undefined ? undefined : n.type) !== null && t !== undefined ? t : (r = e.editedMessage) === null || r === undefined || (i = r.message) === null || i === undefined || (a = i.protocolMessage) === null || a === undefined ? undefined : a.type) === p.Message$ProtocolMessage$Type.MESSAGE_EDIT;
}
const T = new s.WapParser("sendMsgAckSyncParser", e => {
  e.assertTag("ack");
  return {
    t: e.attrTime("t"),
    sync: e.hasAttr("sync") ? e.attrString("sync") : null,
    phash: e.hasAttr("phash") ? e.attrString("phash") : null,
    addressingMode: e.hasAttr("addressing_mode") ? e.attrString("addressing_mode") : null,
    count: e.hasAttr("count") ? e.attrInt("count") : null,
    error: e.hasAttr("error") ? e.attrInt("error") : null
  };
});
function M() {
  return (M = (0, i.default)(function* (e, t) {
    const n = e.data.id;
    if (e.type === g.SendMessageRecordType.Addon) {
      const e = yield (0, c.hasSentAddonMsg)(n);
      if (e != null) {
        return (0, h.getPersistSignalProtocolStore)().updateIdentityRangeAfterEncryption("sentAddonRowId", e.rowId, t.map(e => (0, m.createSignalAddress)(e).toString()));
      }
    } else if (e.type === g.SendMessageRecordType.Message) {
      const e = yield (0, _.getMessageTable)().get(String(n), false);
      const r = e == null ? undefined : e.rowId;
      if (r != null) {
        return (0, h.getPersistSignalProtocolStore)().updateIdentityRangeAfterEncryption("rowId", r, t.map(e => (0, m.createSignalAddress)(e).toString()));
      }
    }
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    const t = e.data.id;
    if (e.type === g.SendMessageRecordType.Addon) {
      const e = yield (0, c.hasSentAddonMsg)(t);
      if (e == null) {
        return undefined;
      } else {
        return e.rowId;
      }
    }
    if (e.type === g.SendMessageRecordType.Message) {
      const e = yield (0, _.getMessageTable)().get(String(t), false);
      if (e == null) {
        return undefined;
      } else {
        return e.rowId;
      }
    }
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t) {
    const n = yield A(e);
    if (n == null) {
      __LOG__(2)`filterDeviceWithChangedIdentity: get message with empty rowId`;
      return [];
    }
    const r = new Map();
    t.forEach(e => {
      r.set((0, d.createDeviceListPK)(e), e);
    });
    const i = Array.from(r.values()).map(e => (0, y.createDeviceWidFromUserAndDevice)(e.user, e.server, a.DEFAULT_DEVICE_ID));
    const o = yield (0, h.getPersistSignalProtocolStore)().bulkGetIdentityWithRowId(i.map(e => (0, m.createSignalAddress)(e).toString()));
    const s = new Set();
    o.forEach((t, r) => {
      const a = e.type === g.SendMessageRecordType.Addon ? t == null ? undefined : t.sentAddonRowId : t == null ? undefined : t.rowId;
      const o = i[r];
      if (a == null || a > n) {
        s.add((0, d.createDeviceListPK)(o));
      }
    });
    return t.filter(e => !s.has((0, d.createDeviceListPK)(e)));
  })).apply(this, arguments);
}
exports.sendMsgAckSyncParser = T;