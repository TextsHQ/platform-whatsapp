var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDevicesNotification = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./716358.js");
var o = require("./347387.js");
var s = require("./798440.js");
var l = require("./853670.js");
var u = require("./355813.js");
var c = require("./854379.js");
var d = require("./714443.js");
var p = require("./280464.js");
var f = require("./359484.js");
var _ = require("./691195.js");
var g = require("./510607.js");
var m = r(require("./961745.js"));
var h = require("./669050.js");
const y = "add";
const E = "remove";
const S = "update";
const v = new o.WapParser("incomingDevicesNotification", e => {
  let t;
  let n;
  let r;
  e.assertTag("notification");
  e.assertTag("notification");
  e.assertAttr("type", "devices");
  let i = [];
  let a = null;
  if (e.hasChild("remove")) {
    n = E;
    t = e.child("remove");
  } else if (e.hasChild("add")) {
    n = y;
    t = e.child("add");
  } else {
    if (!e.hasChild("update")) {
      __LOG__(3)`Unknown Devices Notification: Devices notification without "remove" and "add" nodes`;
      throw e.createParseError("Failed to parse devices notification");
    }
    n = S;
    t = e.child("update");
  }
  if (n === y || n === E) {
    const o = t.maybeChild("key-index-list");
    if (!o) {
      throw e.createParseError("key index node is required to handle device add or remove notification");
    }
    const s = o.attrTime("ts");
    if (n === E && !s) {
      throw e.createParseError("timestamp is required to handle device remove notification");
    }
    r = {
      ts: s,
      signedKeyIndexBytes: n === y ? o.contentBytes() : null
    };
    const l = t.child("device");
    const u = (0, d.extractDeviceId)(l.attrDeviceJid("jid"));
    const c = l.hasAttr("lid") ? (0, d.extractDeviceId)(e.attrDeviceJid("lid")) : null;
    const p = l.hasAttr("key-index") ? l.attrInt("key-index") : null;
    i = [{
      id: u,
      keyIndex: p
    }];
    if (c != null) {
      a = [{
        id: c,
        keyIndex: p
      }];
    }
  }
  return {
    type: n,
    stanzaId: e.attrString("id"),
    hash: t.attrString(n === S ? "hash" : "device_hash"),
    lidHash: t.hasAttr("device_lid_hash") ? t.attrString(n === S ? "hash" : "device_lid_hash") : null,
    user: (0, c.deviceJidToUserWid)(e.attrDeviceJid("from")),
    lidUser: e.hasAttr("lid") ? (0, c.deviceJidToUserWid)(e.attrDeviceJid("lid")) : null,
    deviceList: i,
    lidDeviceList: a,
    keyIndex: r
  };
});
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = v.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const n = t.success;
    const r = (0, a.wap)("ack", {
      to: (0, u.USER_JID)(n.user),
      id: (0, a.CUSTOM_STRING)(n.stanzaId),
      class: "notification"
    });
    const o = [{
      wid: n.user,
      devices: {
        deviceList: n.deviceList,
        keyIndex: n.keyIndex
      },
      type: n.type,
      hash: n.hash
    }, n.lidUser != null && n.lidHash != null && n.lidDeviceList != null ? {
      wid: n.lidUser,
      devices: {
        deviceList: n.lidDeviceList,
        keyIndex: n.keyIndex
      },
      type: n.type,
      hash: n.lidHash
    } : null].filter(Boolean);
    if (f.OfflineMessageHandler.isResumeFromRestartComplete()) {
      yield Promise.all(o.map(function () {
        var e = (0, i.default)(function* (e) {
          let {
            wid: t,
            devices: r,
            type: i,
            hash: a
          } = e;
          if (f.OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()) {
            yield (0, l.addUserToPendingDeviceSync)([t.toString()]);
          } else if (n.type === y) {
            try {
              yield (0, s.handleADVDeviceNotification)({
                wid: t,
                devices: r,
                type: i
              });
            } catch (e) {
              __LOG__(3)`handleDevicesNotification - add error: ${e}`;
            }
          } else if (n.type === E) {
            try {
              var o;
              yield (0, s.handleADVDeviceNotification)({
                wid: t,
                devices: r,
                type: i
              });
              const e = ((o = n.deviceList) === null || o === undefined ? undefined : o.map(e => e.id)) || [];
              const {
                user: a,
                server: l
              } = t;
              yield Promise.all(e.map(e => {
                const t = (0, h.createDeviceWidFromUserAndDevice)(a, l, e);
                m.default.Voip.notifyDeviceIdentityChangedOrDeleted(t, true);
              }));
            } catch (e) {
              __LOG__(3)`handleDevicesNotification - remove error: ${e}`;
            }
          } else if (n.type === S) {
            const e = yield (0, _.getContactTable)().equals(["contactHash"], a);
            if (e.length === 0) {
              __LOG__(3)`could not find side contact hash for device update operation`;
            } else {
              try {
                yield (0, g.syncDeviceListJob)([(0, h.createWid)(e[0].id)], "notification", null);
              } catch (e) {
                __LOG__(3)`handleDevicesNotification - update error: ${e}`;
              }
            }
          } else {
            __LOG__(3)`handleDevicesNotification - unknown notification type ${n.type}`;
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
      return r;
    } else {
      o.forEach(e => {
        let {
          wid: t
        } = e;
        return p.OfflinePendingDeviceCache.addOfflinePendingDevice(t.toString(), r);
      });
      return "NO_ACK";
    }
  })).apply(this, arguments);
}