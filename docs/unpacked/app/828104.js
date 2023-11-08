var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleServerSyncNotification = function (e) {
  const t = p.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  return function (e) {
    if (e.changedCollections) {
      const t = new Map();
      for (const [n, r] of e.changedCollections) {
        const e = o.CollectionName.cast(n);
        if (e != null) {
          t.set(e, r);
        } else {
          __LOG__(3)`syncd: unknown collection name in notification: ${n}`;
        }
      }
      let n = Array.from(t.keys());
      if (e.offline) {
        n.forEach(e => {
          const t = d.get(e);
          if (t != null) {
            d.set(e, t + 1);
          } else {
            d.set(e, 1);
          }
        });
      }
      __LOG__(2)`syncd: incoming sync notification for collections
${Array.from(t.entries()).map(e => {
        let [t, n] = e;
        return `${t} v${n}`;
      }).join("\n")}`;
      if (c.default.isSyncDCriticalDataSyncInProcess()) {
        n = n.filter(e => (0, a.isCriticalCollection)(e));
        __LOG__(2)`syncd: filtered non critical collections during bootstrap. new collections: ${n}`;
      }
      (0, i.markCollectionsForSync)(n, t);
    }
    return Promise.resolve((0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(e.stanzaId),
      class: "notification",
      type: "server_sync",
      to: s.S_WHATSAPP_NET
    }));
  }(t.success);
};
exports.reportOfflineNotifications = function () {
  if (d.size < 1) {
    return;
  }
  let e = 0;
  Array.from(d.entries()).forEach(t => {
    let [, n] = t;
    e += n - 1;
  });
  new u.MdAppStateOfflineNotificationsWamEvent({
    redundantCount: e
  }).commit();
  d.clear();
};
var i = require("./280015.js");
var a = require("./411907.js");
var o = require("./122393.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./600969.js");
var c = r(require("./775410.js"));
const d = new Map();
const p = new l.WapParser("serverSyncNotification", e => {
  e.assertTag("notification");
  if (!e.hasChild("collection")) {
    throw e.createParseError("Server sync notification does not contain any collections");
  }
  const t = e.attrString("id");
  const n = new Map(e.mapChildrenWithTag("collection", e => [e.attrString("name"), e.attrInt("version")]));
  const r = e.hasAttr("offline");
  if (e.attrString("from") !== s.S_WHATSAPP_NET.toString()) {
    __LOG__(4, undefined, new Error())`handleServerSyncNotification: "from" is not domain jid "s.whatsapp.net"`;
  }
  return {
    changedCollections: n,
    stanzaId: t,
    offline: r
  };
});