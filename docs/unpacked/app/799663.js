var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._processMultipleMessages = function () {
  return A.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = r(require("./407462.js"));
var s = require("./169571.js");
var l = require("./37237.js");
var u = require("./163755.js");
var c = r(require("./713807.js"));
require("./644234.js");
var d = require("./744526.js");
var p = r(require("./343087.js"));
var f = require("./860888.js");
var _ = require("./172259.js");
var g = require("./97858.js");
var m = require("./787742.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
}(require("./430231.js"));
var y = require("./373070.js");
var E = require("./647912.js");
require("./937001.js");
var S = require("./164832.js");
require("./757453.js");
var v = require("./459857.js");
var T = r(require("./124928.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function A() {
  return (A = (0, i.default)(function* (e, t, r, i, M) {
    var A;
    var C;
    const {
      filteredRecs: P,
      reorderRecs: O,
      updates: I
    } = yield (0, c.default)(e, t, r, M);
    yield Promise.all(I);
    const R = require("./351053.js").ChatCollection;
    const N = require("./581354.js").findChat;
    const D = require("./61113.js").MsgCollection;
    if (P.length === 0 && O.length === 0) {
      if (e && r.pendingMsgsDone === true) {
        const t = R.get(e);
        if (t) {
          t.pendingMsgs = false;
        }
      }
      return t.map(e => D.get(e.id)).filter(Boolean);
    }
    if (!e) {
      return b(P).then(() => t.reduce((e, t) => {
        const n = D.get(t.id);
        if (n != null && (0, u.getChat)(n) != null) {
          e.push(n);
        }
        return e;
      }, []));
    }
    let w;
    const L = t[0];
    if (T.default.isStatusV3(e)) {
      const e = L.id.fromMe ? (0, v.getMaybeMeUser)() : L.author;
      w = require("./657694.js").StatusV3Collection.find(e);
    } else {
      w = N(e, i);
    }
    const k = yield w;
    const G = yield b(P);
    const U = r.add === "after" || r.add === "last";
    const x = !r.isHistory;
    let B;
    let F;
    let j = false;
    const Y = k.id.isBot();
    const K = ((A = k.contact.businessProfile) === null || A === undefined ? undefined : A.isBizBot3p) === true;
    if ((Y || K) && r.isHistory === false) {
      const e = k.msgs.last();
      if ((e == null ? undefined : e.subtype) === s.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
        if (!(e == null)) {
          e.delete({
            skipUpdatingSortTime: true
          });
        }
      }
    }
    G.forEach(e => {
      if (e.subtype === "biz_bot_1p_disclosure") {
        k.set({
          bizBotSystemMsgType: l.BizBotType.BIZ_1P
        });
      } else if (e.subtype === "biz_bot_3p_disclosure") {
        k.set({
          bizBotSystemMsgType: l.BizBotType.BIZ_3P
        });
      }
    });
    if (r.add === "unread") {
      B = M;
      k.msgChunks.push(B);
      F = r.firstUnreadKey;
    } else if (r.add === "last" && r.resume === true) {
      B = M;
      j = true;
    } else {
      B = typeof M == "function" ? M() : M;
    }
    (0, o.default)(t, G, O, k, U, B || k.msgs, F, j);
    if (r.pendingMsgsDone === true) {
      k.pendingMsgs = false;
    }
    if (x && T.default.isBroadcast(e) && !T.default.isStatusV3(e)) {
      G.forEach(function (e) {
        if (e && e.recvFresh && !(0, m.getIsNotification)(e)) {
          h.broadcastFanout(e);
        }
      });
    }
    if ((C = r.isHistory) === null || C === undefined || !C) {
      const e = G.map(e => {
        var t;
        var n;
        var r;
        if (!((0, m.getIsSentByMe)(e) && e.type === y.MSG_TYPE.STICKER) || e.isAvatar === true) {
          return;
        }
        const {
          mediaData: i,
          mediaObject: o
        } = e;
        const s = e.id.toString();
        const l = o == null ? undefined : o.entries.entries[0];
        return {
          sticker: new S.StickerModel({
            id: i.filehash,
            directPath: i.directPath,
            filehash: i.filehash,
            encFilehash: (t = l == null ? undefined : l.getEncfilehash()) !== null && t !== undefined ? t : i.encFilehash,
            mediaKey: (n = l == null ? undefined : l.getMediaKey()) !== null && n !== undefined ? n : i.mediaKey,
            mediaKeyTimestamp: i.mediaKeyTimestamp != null ? i.mediaKeyTimestamp : (0, a.unixTime)(),
            width: i.fullWidth,
            height: i.fullHeight,
            size: i.size,
            mimetype: i.mimetype,
            type: _.OUTWARD_TYPES.STICKER,
            index: 0
          }),
          timestamp: (r = e.stickerSentTs) !== null && r !== undefined ? r : 0,
          msgId: s
        };
      }).filter(Boolean);
      const t = require("./951220.js").RecentStickerCollectionMd;
      __LOG__(2)`processed ${e.length} recent sticker messages`;
      e.forEach(e => t.addNewSticker(e.sticker, e.msgId, e.timestamp));
    }
    const W = G.map(e => {
      const t = e.isNewMsg && (0, m.getIsSentByMe)(e) && e.type === y.MSG_TYPE.STICKER;
      const {
        mediaData: n
      } = e;
      if (!t) {
        return;
      }
      const r = e.mediaKey;
      if (r == null) {
        __LOG__(4, undefined, new Error(), true)`[sticker] Unexpected null media key`;
        return void SEND_LOGS("sticker-unexpected-null-media-key");
      } else {
        return {
          id: n.filehash,
          directPath: n.directPath,
          filehash: n.filehash,
          encFilehash: n.encFilehash,
          mediaKey: r,
          mediaKeyTimestamp: n.mediaKeyTimestamp != null ? n.mediaKeyTimestamp : (0, a.unixTime)(),
          width: n.fullWidth,
          height: n.fullHeight,
          size: n.size,
          mimetype: n.mimetype,
          type: _.OUTWARD_TYPES.STICKER,
          index: 0
        };
      }
    }).filter(Boolean);
    E.RecentStickerCollection.enqueue(W);
    if ((0, g.webMediaAutoDownloadEnabled)() && !T.default.isStatusV3(e)) {
      G.map(e => (0, u.getAsAutoDownloadableMedia)(e)).filter(Boolean).forEach(e => {
        d.AutoDownloadQueue.enqueue(e, d.AUTO_DOWNLOAD_TYPES.MEDIA);
      });
    }
    G.map(e => (0, u.getAsDoc)(e)).filter(Boolean).forEach(e => {
      if ((0, g.webMediaAutoDownloadEnabled)()) {
        d.AutoDownloadQueue.enqueue(e, d.AUTO_DOWNLOAD_TYPES.MMS_THUMBNAIL);
      } else {
        (0, p.default)({
          chat: null,
          msg: e,
          isPreload: true
        });
      }
    });
    G.map(e => (0, u.getAsUrl)(e)).filter(Boolean).forEach(e => {
      if (!(0, f.hqLinkPreviewExpired)(e.t)) {
        if ((0, g.webMediaAutoDownloadEnabled)()) {
          d.AutoDownloadQueue.enqueue(e, d.AUTO_DOWNLOAD_TYPES.MMS_THUMBNAIL, null);
        } else {
          (0, p.default)({
            msg: e,
            isPreload: true,
            chat: null
          });
        }
      }
    });
    return t.map(e => D.get(e.id)).filter(Boolean);
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    const t = require("./61113.js").MsgCollection.add(e, {
      merge: true
    }).reduce((t, n, r) => {
      if (n == null) {
        __LOG__(4, undefined, new Error(), true)`Get empty message with id ${e[r].id}.`;
        SEND_LOGS("msgPrepWork-empty-message");
      }
      if (n != null) {
        t.push(n);
      }
      return t;
    }, []);
    yield Promise.all(t.map(e => e.waitForPrep().catch(e => {
      __LOG__(4, undefined, new Error(), true)`Assertion failed! ${String(e)}`;
      SEND_LOGS("bad-msg-prep");
    })));
    return t;
  })).apply(this, arguments);
}