var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerSafeBridgeApi = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/351053.js");
var l = require("../app/177938.js");
var i = require("../app/656134.js");
var u = require("../app/110567.js");
var s = require("../app/834301.js");
var c = require("./166647.js");
var d = require("./953413.js");
var f = require("./81221.js");
var p = require("./351891.js");
var m = require("../app/927517.js");
var h = require("../app/61113.js");
var g = require("./947152.js");
var E = a(require("../app/409697.js"));
var v = require("./817890.js");
var _ = require("../app/872811.js");
var y = require("./367345.js");
var C = require("./93049.js");
var b = require("./818106.js");
var M = require("../app/168661.js");
var S = require("../app/227834.js");
var T = a(require("./203505.js"));
const w = {
  getPrivacyMode(e) {
    let {
      id: t
    } = e;
    return (0, _.getPrivacyModeFromModel)(t);
  },
  updateBizPrivacyStatus(e) {
    let {
      msgIds: t,
      privacyMode: n
    } = e;
    return (0, r.default)(function* () {
      yield Promise.all(t.map(e => h.MsgCollection.get(e)).filter(Boolean).map(e => (0, T.default)(e, n)));
    })();
  },
  getChatPrivacyInfoOnNewMsg(e) {
    let {
      chatId: t
    } = e;
    const n = o.ChatCollection.get(t);
    return {
      verifiedLevel: n == null ? undefined : n.contact.verifiedLevel,
      privacyMode: (0, _.getPrivacyModeFromModel)(t)
    };
  },
  getContactData(e) {
    let {
      ids: t
    } = e;
    return new Map(t.map(e => {
      const t = l.ContactCollection.get(e);
      const n = (0, i.getEphemeralDurationForUser)(t);
      return [e.toJid(), {
        ephemeralDuration: n,
        shouldBlockByCountry: () => t != null && (0, M.shouldBlockByCountry)(t),
        shouldBlockByTos: () => t != null && (0, S.shouldBlockByTos)(t)
      }];
    }));
  },
  getBizBotData(e) {
    let {
      chatIds: t
    } = e;
    return new Map(t.map(e => {
      const t = o.ChatCollection.get(e);
      return [e.toJid(), {
        bizBotSystemMsgType: t == null ? undefined : t.bizBotSystemMsgType
      }];
    }));
  },
  handleHistorySyncNotification(e) {
    let {
      historySyncMetaData: t,
      from: n,
      externalId: a
    } = e;
    return (0, d.handleHistorySyncNotification)(t, n, a);
  },
  handleAppStateSyncKeyShare(e) {
    let {
      keyShare: t,
      from: n
    } = e;
    return (0, p.handleAppStateSyncKeyShare)(t, n);
  },
  sendAppStateSyncKeyShare(e) {
    let {
      keyShare: t
    } = e;
    return (0, m.sendAppStateSyncKeyShare)(t);
  },
  restoreChatsAndMessages(e) {
    let {
      threadMeta: t
    } = e;
    return (0, y.restoreChatsAndMessages)(t);
  },
  restoreGroupsAndContacts: () => (0, C.restoreGroupsAndContacts)(),
  restoreProfilePictures: () => (0, b.restoreProfilePictures)(),
  processAllOrphanPaymentNotifications: () => E.default.processAllOrphanPaymentNotifications(),
  handleAppStateSyncKeyRequest(e) {
    let {
      keyRequest: t,
      from: n
    } = e;
    return (0, f.handleAppStateSyncKeyRequest)(t, n);
  },
  handlePeerDataOperationRequestResponse(e) {
    let {
      stanzaId: t,
      response: n
    } = e;
    return (0, g.handlePeerDataOperationRequestResponse)(t, n);
  },
  handlePeerDataOperationRequest(e) {
    let {
      stanzaId: t,
      request: n
    } = e;
    return (0, g.handlePeerDataOperationRequest)(t, n);
  },
  getFtsClientInstance: () => u.ftsClient,
  getOrQueryUsyncInfo(e) {
    let {
      wid: t
    } = e;
    return (0, s.getOrQueryUsyncInfo)(t);
  },
  maybeSendKeyDistributionMsgToNewGroup(e) {
    let {
      groupId: t
    } = e;
    return (0, c.maybeSendKeyDistributionMsgToNewGroup)(t);
  },
  incrementPnhCtwaDailyCount(e) {
    let {
      chatId: t
    } = e;
    return (0, v.incrementPnhCtwaDailyCount)(t);
  },
  processOrphanPaymentNotifications(e) {
    let {
      msgs: t
    } = e;
    return E.default.processOrphanPaymentNotifications(t);
  }
};
exports.WorkerSafeBridgeApi = w;