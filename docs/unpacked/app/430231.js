var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRecordsToChat = C;
exports.broadcastFanout = function (e) {
  let t;
  if (!e.invis) {
    const r = b(e);
    if (r) {
      t = r.map(e => e.remote);
      r.forEach(t => {
        const r = require("./61113.js").MsgCollection;
        if (!r.some((0, a.default)({
          id: t
        }))) {
          const i = I(e);
          i.to = t.remote;
          i.id = t;
          i.broadcast = true;
          const a = r.add(i, {
            merge: true
          });
          (0, require("./581354.js").findChat)(t.remote, "msgModelBroadcastFanout").then(function (e) {
            a.forEach(t => {
              if (t.type !== v.MSG_TYPE.PROTOCOL) {
                if ((0, c.isEphemeralSettingOn)(e)) {
                  t.ephemeralDuration = (0, c.getEphemeralSetting)(e);
                }
                const n = (0, c.getEphemeralSettingTimestamp)(e);
                if (n != null) {
                  t.ephemeralSettingTimestamp = n;
                }
                const r = (0, c.getDisappearingModeInitiator)(e);
                if (r != null) {
                  t.disappearingModeInitiator = r;
                }
              }
            });
            C(a, e, true);
          });
        }
      });
    }
  }
  return t;
};
exports.createQuotedMsg = function (e) {
  if (!e) {
    return null;
  }
  const t = new S.default({
    from: e.from,
    to: e.to,
    id: e.id,
    participant: e.participant,
    selfDir: e.self
  });
  e.id = t;
  const r = new (0, require("./772358.js").Msg)(e);
  r.fromQuotedMsg = true;
  return r.safe();
};
exports.getBroadcastFanoutKeys = b;
exports.getCelebrationAnimationType = function (e) {
  if (!(0, p.isCongratulationsAnimationsEnabled)()) {
    return null;
  }
  if (e != null) {
    if (N.test(e.toLocaleLowerCase())) {
      return f.CelebrationAnimationType.DEFAULT;
    }
  }
  return null;
};
exports.getMediaMsgWithCaptionForForwarding = function (e) {
  if (!(0, g.isForwardMediaWithCaptionsEnabled)() || e.length > 1) {
    return null;
  }
  const t = e.filter(e => !(0, E.getHasOriginatedFromNewsletter)(e) && (0, E.getIsMedia)(e) && Boolean(e.caption));
  if (t.length === 1) {
    return t[0];
  } else {
    return null;
  }
};
exports.getReadMsgKeys = function (e) {
  return e.filter(e => e.ack === s.ACK.READ).map(e => e.id.toString());
};
exports.getReferentialKey = function (e) {
  const t = require("./669050.js");
  if (e.broadcastId && t.isWidlike(e.broadcastId)) {
    const n = e.id;
    return new S.default({
      fromMe: n.fromMe,
      remote: t.createWidFromWidLike(e.broadcastId),
      id: n.id,
      participant: n.remote
    });
  }
  return e.id;
};
exports.isAnimatedEmoji = function (e, t) {
  if (!(0, l.isAnimatedEmojiEnabled)()) {
    return false;
  }
  if (t !== v.MSG_TYPE.CHAT) {
    return false;
  }
  if (e == null || e === "") {
    return false;
  }
  const n = _.EmojiUtil.matchLargeEmojiPattern(e);
  if (n == null || n.length !== 1) {
    return false;
  }
  const r = _.EmojiUtil.normalizeEmoji(n[0]);
  return r != null && _.EmojiUtil.getAnimatedEmojisToAssetMap().has(r);
};
exports.msgMatchesType = function (e, t) {
  switch (t) {
    case "text":
      return e.type === v.MSG_TYPE.CHAT && e.subtype !== "url";
    case "image":
      return e.type === v.MSG_TYPE.IMAGE;
    case "video":
      return e.type === v.MSG_TYPE.VIDEO && !e.isGif;
    case "gif":
      return e.type === v.MSG_TYPE.VIDEO && e.isGif;
    case "audio":
      return e.type === v.MSG_TYPE.AUDIO;
    case "ptt":
      return e.type === v.MSG_TYPE.PTT;
    case "document":
      return e.type === v.MSG_TYPE.DOCUMENT;
    case "location":
      return e.type === v.MSG_TYPE.LOCATION;
    case "vcard":
      return e.type === v.MSG_TYPE.VCARD || e.type === v.MSG_TYPE.MULTI_VCARD;
    case "url":
      return e.type === v.MSG_TYPE.CHAT && e.subtype === "url";
    case "sticker":
      return e.type === v.MSG_TYPE.STICKER;
    case undefined:
    default:
      return false;
  }
};
exports.typeIsMms = function (e) {
  var t;
  switch (e.type) {
    case "image":
    case "video":
    case "ptv":
    case "audio":
    case "ptt":
    case "sticker":
    case "document":
    case "product":
      return true;
    case "protocol":
      return e.subtype === "history_sync_notification";
    case v.MSG_TYPE.NATIVE_FLOW:
      return e.headerType === T.Message$ButtonsMessage$HeaderType.IMAGE;
    case v.MSG_TYPE.INTERACTIVE:
      return Boolean(((t = e.interactiveHeader) === null || t === undefined ? undefined : t.mediaType) && y.IM_MEDIA_HEADER_TYPES.has(e.interactiveHeader.mediaType));
    default:
      return false;
  }
};
exports.typeIsUrl = function (e) {
  return e.type === v.MSG_TYPE.CHAT && e.subtype === "url";
};
var i = r(require("../vendor/530988.js"));
var a = r(require("../vendor/706410.js"));
var o = r(require("../vendor/435161.js"));
var s = require("./402994.js");
var l = require("./317355.js");
var u = require("./984330.js");
var c = require("./738501.js");
var d = require("./147980.js");
var p = require("./152342.js");
var f = require("./578129.js");
var _ = require("./70354.js");
var g = require("./402066.js");
var m = require("./163755.js");
var h = r(require("./97359.js"));
var y = require("./943914.js");
var E = require("./787742.js");
var S = r(require("./565754.js"));
var v = require("./373070.js");
var T = require("./533494.js");
var M = r(require("./124928.js"));
var A = require("./933173.js");
function b(e) {
  var t;
  let r;
  let i;
  let a;
  if (e instanceof require("./772358.js").Msg) {
    i = e;
    a = e.id;
  } else {
    if (!(e instanceof S.default)) {
      return void __LOG__(3)`model:msgs:broadcastFanout: unknown msgOrKey: ${String(e)}`;
    }
    a = e;
  }
  if (!M.default.isStatusV3(a.remote)) {
    if (((t = i) === null || t === undefined ? undefined : t.recipients) && i.recipients.length !== 0) {
      r = i.recipients;
    } else {
      const e = (0, h.default)(require("./667845.js")).get(a.remote);
      if (e) {
        r = (0, o.default)(I(e.participants), "id");
      } else {
        __LOG__(2)`model:msgs:broadcastFanout no group_metadata rec for bclist, cant fanout: ${a.remote.toString()}`;
      }
    }
    if (r) {
      return r.map(e => new S.default({
        fromMe: a.fromMe,
        remote: e,
        id: a.id
      }));
    } else {
      return undefined;
    }
  }
}
function C(e, t, r, i, a, o) {
  const s = i || t.msgs;
  if (e.length === 0) {
    return;
  }
  let l = s === t.msgs;
  if (o) {
    if (l) {
      __LOG__(2)`models:msg:store:resetMostRecentMsgs .msgs === cmc !`;
      P(t, s, e);
    } else {
      l = true;
      P(t, s, e);
      const r = new (0, require("./557491.js").ChatMsgsCollection)();
      r.replace(t.msgs);
      t.msgChunks.push(r);
      t.replaceMsgsCollection(s);
      t.msgs.trigger("change:last", t.msgs.last());
    }
  } else if (r) {
    if (l) {
      P(t, s, e);
    } else {
      O(s, e);
    }
  } else {
    O(s, e, {
      at: 0,
      silent: e.every(R)
    });
  }
  const u = a;
  if (u && !t.unreadMsgAnchor) {
    if (t.disableUnreadAnchor) {
      t.disableUnreadAnchor = false;
    } else {
      t.unreadMsgAnchor = e.find(function (e) {
        return e.id.toString() === u.toString();
      });
    }
  }
}
function P(e, t, n) {
  const r = (0, i.default)(n, e => !!e);
  if (r) {
    O(t, n);
    e.lastReceivedKey = r.id;
  }
}
function O(e, t, n) {
  try {
    e.add(t, n);
  } catch (e) {
    if (!(e instanceof u.LogoutDrop)) {
      throw e;
    }
    __LOG__(3)`setRecords LogoutDrop: ${e.toString()}`;
  }
}
function I(e) {
  if (e != null && typeof e == "object") {
    return JSON.parse(JSON.stringify(e), A.jsonWidReviver);
  } else {
    return e;
  }
}
function R(e) {
  return (0, m.getEventType)(e) === d.EventType.IGNORE;
}
const N = new RegExp(["congratulations", "congrats"].join("|"));