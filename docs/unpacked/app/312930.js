var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./261707.js");
var o = require("./632157.js");
var s = require("./347387.js");
var l = require("./99562.js");
var u = require("./162574.js");
var c = require("./15790.js");
var d = require("./142469.js");
var p = require("./828104.js");
var f = require("./359484.js");
var _ = require("./918408.js");
var g = require("./87429.js");
const m = new s.WapParser("infoBulletinParser", e => {
  e.assertTag("ib");
  e.assertFromServer();
  if (e.hasChild(u.INFO_TYPE.DIRTY)) {
    const t = [];
    const n = [];
    const r = [];
    e.forEachChildWithTag(u.INFO_TYPE.DIRTY, e => {
      const i = {
        type: e.attrString("type"),
        timestamp: e.attrInt("timestamp")
      };
      if (i.type === "account_sync") {
        e.mapChildren(e => e.tag()).forEach(e => {
          if (l.SUPPORTED_DIRTY_PROTOCOLS.hasOwnProperty(e)) {
            r.push(e);
          }
        });
        n.push(i);
      } else if (l.SUPPORTED_DIRTY_TYPE.hasOwnProperty(i.type)) {
        n.push(i);
      } else {
        t.push(i);
      }
    });
    return {
      type: u.INFO_TYPE.DIRTY,
      supported: n,
      unsupported: t,
      protocols: r
    };
  }
  if (e.hasChild(u.INFO_TYPE.ROUTING)) {
    const t = e.child(u.INFO_TYPE.ROUTING);
    return {
      type: u.INFO_TYPE.ROUTING,
      edgeRouting: t.child("routing_info").contentBytes(),
      domain: t.hasChild("dns_domain") ? t.child("dns_domain").contentEnum(c.DOMAINS) : null
    };
  }
  if (e.hasChild(u.INFO_TYPE.OFFLINE)) {
    return {
      count: e.child(u.INFO_TYPE.OFFLINE).attrInt("count"),
      type: u.INFO_TYPE.OFFLINE
    };
  }
  if (e.hasChild(u.INFO_TYPE.OFFLINE_PRIORITY_COMPLETE)) {
    return {
      type: u.INFO_TYPE.OFFLINE_PRIORITY_COMPLETE
    };
  }
  if (e.hasChild(u.INFO_TYPE.OFFLINE_PREVIEW)) {
    return {
      count: {
        message: e.child(u.INFO_TYPE.OFFLINE_PREVIEW).attrInt("message"),
        receipt: e.child(u.INFO_TYPE.OFFLINE_PREVIEW).attrInt("receipt"),
        notification: e.child(u.INFO_TYPE.OFFLINE_PREVIEW).attrInt("notification")
      },
      type: u.INFO_TYPE.OFFLINE_PREVIEW
    };
  }
  if (e.hasChild(u.INFO_TYPE.TOS)) {
    const t = [];
    e.child("tos").forEachChildWithTag("notice", e => {
      t.push(e.attrString("id"));
    });
    return {
      type: u.INFO_TYPE.TOS,
      noticeIds: t
    };
  }
  if (e.hasChild(u.INFO_TYPE.THREAD_META)) {
    return {
      type: u.INFO_TYPE.THREAD_META,
      threadMeta: (0, _.parseThreadMetadata)(e)
    };
  }
  if (e.hasChild(u.INFO_TYPE.CLIENT_EXPIRATION)) {
    const {
      parsedRequest: {
        clientExpirationT: t
      }
    } = (0, a.receiveClientExpirationRPC)(e.getNode());
    const n = t != null ? (0, o.castToUnixTime)(t) : null;
    return {
      type: u.INFO_TYPE.CLIENT_EXPIRATION,
      newClientExpirationTime: n
    };
  }
  return null;
});
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = m.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const n = t.success;
    if (n) {
      switch (n.type) {
        case u.INFO_TYPE.DIRTY:
          yield (0, l.handleDirtyBits)(n);
          return "NO_ACK";
        case u.INFO_TYPE.ROUTING:
          yield (0, c.handleRoutingInfo)(n);
          return "NO_ACK";
        case u.INFO_TYPE.OFFLINE:
          f.OfflineMessageHandler.setOfflineSessionComplete(n.count);
          (0, p.reportOfflineNotifications)();
          return "NO_ACK";
        case u.INFO_TYPE.OFFLINE_PRIORITY_COMPLETE:
          f.OfflineMessageHandler.setOfflinePrioritySessionComplete();
          return "NO_ACK";
        case u.INFO_TYPE.OFFLINE_PREVIEW:
          yield f.OfflineMessageHandler.setOfflineMessagePreviewCounter(n.count);
          return "NO_ACK";
        case u.INFO_TYPE.TOS:
          g.TosManager.maybeUpdateServer(n.noticeIds);
          return "NO_ACK";
        case u.INFO_TYPE.THREAD_META:
          f.OfflineMessageHandler.setOfflineThreadMeta(n.threadMeta);
          return "NO_ACK";
        case u.INFO_TYPE.CLIENT_EXPIRATION:
          (0, d.handleServerClientExpiration)(n.newClientExpirationTime);
          return "NO_ACK";
      }
    } else {
      __LOG__(3)`handleInfoBulletin unrecognized info bulletin`;
    }
  })).apply(this, arguments);
}