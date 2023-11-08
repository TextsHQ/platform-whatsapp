var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETA_SUPPORTED_STATES = undefined;
exports.getAlbumRowAriaLabel = function () {
  return L.apply(this, arguments);
};
exports.getAriaLabelForMaybeName = D;
exports.getAuthorName = N;
exports.getMediaAriaLabel = function (e) {
  var t;
  const n = (0, d.getMediaData)(e);
  const a = R({
    type: (0, E.getType)(e),
    subtype: (0, E.getSubtype)(e),
    isGif: n == null ? undefined : n.isGif,
    quotedMsg: (0, _.getQuotedMsgObj)(e),
    senderWid: (0, E.getSender)(e)
  });
  const r = (t = n.filename) !== null && t !== undefined ? t : null;
  return P.fbt._("{type}{filename}", [P.fbt._param("type", a), P.fbt._param("filename", r)], {
    hk: "2z7HKY"
  });
};
exports.getMessageAriaLabel = function (e) {
  let {
    t,
    ack: n,
    isSentByMe: a,
    asRevoked: r,
    isEdited: o,
    numberReactions: i,
    ariaLabelMessageType: u,
    senderWid: s,
    senderContact: c,
    isElevatedPushNamesEnabled: d,
    messageDescription: f
  } = e;
  const p = function (e, t) {
    if (e != null) {
      const n = e.author ? N(e.author, e.senderObj, t) : "";
      const a = (0, y.formatQuotedMsg)(e);
      return P.fbt._("to quoted message, author: {quoted-message-author} content: {quoted-message-body}", [P.fbt._param("quoted-message-author", n), P.fbt._param("quoted-message-body", a)], {
        hk: "3lG9jN"
      });
    }
    return "";
  }(u.quotedMsg, d);
  const h = R(u);
  const g = l.Clock.timestampStr(t);
  let E = null;
  let v = null;
  let _ = null;
  if (a && !r) {
    const e = (0, M.getMessageStatusLabel)(n);
    v = e;
  }
  if (!(o !== true || r)) {
    _ = (0, m.getEditedLabel)();
  }
  const C = N(s, c, d);
  if (i) {
    E = B(i);
  }
  return j({
    authorName: C,
    messageTypeString: h,
    messageTextLocal: f,
    replyMsgSummary: p,
    time: g,
    messageStatusText: v,
    messageEditedText: _,
    hasReactionText: E
  });
};
exports.getMessageTextLabel = function (e) {
  let {
    messageText: t,
    mentionMap: n,
    ariaLabelMessageType: a,
    ariaMessageSpecific: r,
    initialPageSize: i
  } = e;
  const u = function (e, t) {
    switch (e) {
      case v.MSG_TYPE.POLL_CREATION:
        if (t) {
          return function (e) {
            let {
              pollName: t,
              optionsWithCounts: n
            } = e;
            const a = (0, g.messageListA11yRedesignEnabled)() ? "" : P.fbt._("Keyboard interaction with polls is not available.", null, {
              hk: "43A7tc"
            });
            return P.fbt._("{poll-name} Top vote counts: {poll-results}. {no-kb-navigation}", [P.fbt._param("poll-name", t), P.fbt._param("poll-results", n), P.fbt._param("no-kb-navigation", a)], {
              hk: "21ygbG"
            });
          }(t);
        } else {
          return null;
        }
      case v.MSG_TYPE.STICKER:
        {
          var n;
          const e = t == null || (n = t.mediaData.emojis) === null || n === undefined ? undefined : n.join(" ");
          if (e != null) {
            return I(e);
          } else {
            return null;
          }
        }
      case v.MSG_TYPE.PTT:
      case v.MSG_TYPE.PTV:
      case v.MSG_TYPE.AUDIO:
        {
          var a;
          const e = (t == null || (a = t.mediaData) === null || a === undefined ? undefined : a.duration) != null ? l.Clock.durationStr(t.mediaData.duration) : null;
          if (e != null) {
            return P.fbt._("Duration: {media-duration}", [P.fbt._param("media-duration", e)], {
              hk: "35A24C"
            });
          } else {
            return null;
          }
        }
      case v.MSG_TYPE.DOCUMENT:
        if (t == null || (t == null ? undefined : t.mediaData) == null) {
          return null;
        }
        return function (e) {
          var t;
          const {
            mimetype: n,
            filename: a,
            pageCount: r
          } = e;
          let o = A.default._("Untitled", null, {
            hk: "4dgIss"
          }).toString();
          if (a != null && a !== "") {
            o = a;
          }
          let l = null;
          let i = null;
          let u = null;
          if (r > 0) {
            l = P.fbt._({
              "*": "{count} pages",
              _1: "1 page"
            }, [P.fbt._plural(r, "count")], {
              hk: "23rvsI"
            });
          }
          const c = a ? (0, s.getFileExtension)(a) : null;
          let d = null;
          var p;
          if (h.DOCUMENT_MIMETYPES.hasOwnProperty(n)) {
            d = (p = h.DOCUMENT_MIMETYPES[n]) === null || p === undefined ? undefined : p.ext;
          }
          if (d == null || c != null && d !== c) {
            d = c;
          }
          if (d != null) {
            i = d.toUpperCase();
          }
          u = f.default.filesize((t = e.size) !== null && t !== undefined ? t : 0);
          const m = "•";
          const g = l != null ? m : null;
          const E = i != null ? m : null;
          return P.fbt._("Document name: {file-name}. {page-count}{page-separator}{file-type}{type-separator}{file-size}", [P.fbt._param("file-name", o), P.fbt._param("page-count", l), P.fbt._param("page-separator", g), P.fbt._param("file-type", i), P.fbt._param("type-separator", E), P.fbt._param("file-size", u)], {
            hk: "2ofiB7"
          });
        }(t.mediaData);
      case v.MSG_TYPE.REVOKED:
        if (t == null) {
          return undefined;
        } else {
          return t.revokedLabel;
        }
      default:
        return null;
    }
  }(a.type, r);
  if (u != null) {
    return u;
  }
  if (t != null && t !== "") {
    let e = t;
    if (n != null) {
      e = function (e, t) {
        let n = e;
        Object.keys(t).forEach(e => {
          const a = t[e];
          n = n.replaceAll(e, (0, c.getDisplayName)(a));
        });
        return n;
      }(t, n);
    }
    return function (e, t) {
      if ((0, o.numCodepoints)(e) > t) {
        const n = (0, o.substring)(e, 0, t);
        return P.fbt._("{text-content}… Read more", [P.fbt._param("text-content", n)], {
          hk: "3yQBSQ"
        });
      }
      return e;
    }(e, i);
  }
  return "";
};
exports.getMessageTypeAriaLabel = R;
exports.getStickerCustomLabel = I;
var r = a(require("../vendor/348926.js"));
var o = require("../app/370257.js");
var l = require("../app/63014.js");
var i = require("../app/660666.js");
var u = require("../app/235630.js");
var s = require("../app/698210.js");
var c = require("../app/714574.js");
var d = require("../app/163755.js");
var f = a(require("../app/932325.js"));
var p = require("../app/172259.js");
var m = require("./789955.js");
var h = require("../app/937484.js");
var g = require("../app/97858.js");
var E = require("../app/787742.js");
var v = require("../app/373070.js");
var _ = require("../app/592978.js");
var y = require("./865582.js");
var C = require("../app/762897.js");
var b = require("./474474.js");
var M = require("./270254.js");
var S = require("../app/459857.js");
var T = a(require("../app/124928.js"));
var w = require("../app/931019.js");
var A = a(require("../app/286816.js"));
var P = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
const O = new Set([p.MEDIA_DATA_STAGE.FETCHING, p.MEDIA_DATA_STAGE.UPLOADING]);
exports.ETA_SUPPORTED_STATES = O;
const k = require("../vendor/76672.js").Mirrored(["IMAGE_ALBUM", "STIKER"]);
function D(e) {
  return P.fbt._("Maybe {name}", [P.fbt._param("name", e)], {
    hk: "2obeBs"
  });
}
function I(e) {
  if (e != null && e.length > 0) {
    return P.fbt._("Sticker with: {emojis}", [P.fbt._param("emojis", e)], {
      hk: "1sig9t"
    });
  } else {
    return P.fbt._("Sticker with no label", null, {
      hk: "1aw5TF"
    });
  }
}
function R(e) {
  let {
    type: t,
    subtype: n,
    isGif: a = false,
    quotedMsg: r,
    senderWid: o
  } = e;
  let l = null;
  let i = null;
  if (r != null) {
    l = (0, S.isMeAccount)(o) ? P.fbt._("replied", null, {
      hk: "2XLNz7"
    }) : P.fbt._("replied", null, {
      hk: "kmQZ6"
    });
  }
  switch (t) {
    case v.MSG_TYPE.IMAGE:
      i = P.fbt._("image", null, {
        hk: "KLyBv"
      });
      break;
    case v.MSG_TYPE.VIDEO:
      i = a ? P.fbt._("Gif", null, {
        hk: "22LuTu"
      }) : P.fbt._("Video", null, {
        hk: "29mv0c"
      });
      break;
    case v.MSG_TYPE.PTT:
      i = P.fbt._("Voice message", null, {
        hk: "4yOSYH"
      });
      break;
    case v.MSG_TYPE.PTV:
      i = P.fbt._("Video message", null, {
        hk: "z9HFz"
      });
      break;
    case v.MSG_TYPE.AUDIO:
      i = P.fbt._("Audio", null, {
        hk: "2SUhA"
      });
      break;
    default:
      i = null;
  }
  if (l != null || i != null) {
    return P.fbt._("{reply-message} {msg-type}", [P.fbt._param("reply-message", l), P.fbt._param("msg-type", i)], {
      hk: "43zKOL"
    });
  } else {
    return null;
  }
}
function N(e, t, n) {
  const a = (0, S.isMeAccount)(e);
  let r = "";
  if (t != null) {
    if (a) {
      r = P.fbt._("You", null, {
        hk: "LtuSj"
      });
    } else if ((0, i.getName)(t) || (0, i.getVerifiedName)(t) && (0, i.getVerifiedLevel)(t) !== 0 || (0, i.getIsSupportAccount)(t)) {
      var o;
      r = (0, i.getIsSupportAccount)(t) ? (0, c.getFormattedName)(t) : (o = t.name) !== null && o !== undefined ? o : t.verifiedName;
    } else if (T.default.isPSA(t.id)) {
      r = "WhatsApp";
    } else if (n) {
      var l;
      var u;
      const e = D((l = (0, i.getNotifyName)(t)) !== null && l !== undefined ? l : t.pushname);
      const n = ((u = t.id) === null || u === undefined ? undefined : u.isLid()) ? (0, c.getUserDisplayNameForLid)(t) : (0, w.widToFormattedUser)(t.id);
      r = P.fbt._("{pushname-label} {number-label}", [P.fbt._param("pushname-label", e), P.fbt._param("number-label", n)], {
        hk: "W5qXS"
      });
    } else {
      var s;
      r = ((s = t.id) === null || s === undefined ? undefined : s.isLid()) ? (0, c.getUserDisplayNameForLid)(t) : (0, w.widToFormattedUser)(t.id);
      const e = (0, i.getNotifyName)(t);
      r = r + " " + (e != null && e !== "" ? e : t.pushname);
    }
  }
  return r;
}
function x(e) {
  let t = null;
  switch (e) {
    case v.MSG_TYPE.IMAGE:
      t = k.IMAGE_ALBUM;
  }
  return t;
}
function L() {
  return (L = (0, r.default)(function* (e) {
    const [t] = e;
    const n = e.length;
    const a = x((0, E.getType)(t));
    const r = (0, E.getSender)(t);
    const o = (0, d.getSenderObj)(t.unsafe());
    if (r == null) {
      return;
    }
    const l = (0, d.getMaybeChat)(t.unsafe());
    const i = N(r, o, (0, u.elevatedPushNamesEnabled)(l));
    const s = e.map(e => C.ReactionsCollection.find(e.id));
    const c = yield Promise.all(s);
    const f = (0, b.getReactionEmojisAndSum)(c);
    if (a === k.IMAGE_ALBUM) {
      const e = P.fbt._("Image Album", null, {
        hk: "44GIv"
      });
      const t = P.fbt._({
        "*": "{number_of_images} images",
        _1: "1 images"
      }, [P.fbt._plural(n, "number_of_images")], {
        hk: "1lEljt"
      });
      let a = null;
      if (f.numberOfSenderReactions > 0) {
        a = B(f.numberOfSenderReactions);
      }
      return j({
        authorName: i,
        messageTypeString: e,
        messageTextLocal: t,
        replyMsgSummary: null,
        time: null,
        messageStatusText: null,
        messageEditedText: null,
        hasReactionText: a
      });
    }
  })).apply(this, arguments);
}
function j(e) {
  let {
    authorName: t,
    messageTypeString: n,
    messageTextLocal: a,
    replyMsgSummary: r,
    time: o,
    messageStatusText: l,
    messageEditedText: i,
    hasReactionText: u
  } = e;
  return P.fbt._("{author-name} {message-type} {message-text} {reply-msg-summary} {time-sent} {message-status} {message-edited} {has-reaction}", [P.fbt._param("author-name", t), P.fbt._param("message-type", n), P.fbt._param("message-text", a), P.fbt._param("reply-msg-summary", r), P.fbt._param("time-sent", o), P.fbt._param("message-status", l), P.fbt._param("message-edited", i), P.fbt._param("has-reaction", u)], {
    hk: "3HHqrJ"
  });
}
function B(e) {
  if (e === 1) {
    return P.fbt._("has reaction", null, {
      hk: "wx6Ny"
    });
  } else {
    return P.fbt._("has reactions", null, {
      hk: "4crV8a"
    });
  }
}