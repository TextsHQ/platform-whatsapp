var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n, a, D, G, H, V, q, Y, z, K, Q, X, Z, J, $, ee, te] = (0, F.useMsgValues)(e.msg.id, [C.getAck, g.getAsBroadcastNotification, g.getAsGroupNotification, g.getAsProduct, g.getAsRevoked, g.getDir, C.getIsGroupMsg, C.getIsNotification, C.getIsSentByMe, C.getItemCount, g.getRtl, g.getSenderObj, C.getType, g.getMediaData, C.getMessage, C.getIsVcardOverMmsDocument, C.getIsNewsletterMsg, C.getSmbClientCampaignId]);
  const [ne, ae, re] = (0, F.useMsgValues)(e.msg.id, [C.getSize, C.getLatestEditMsgKey, C.getIsMetaBotInvokeResponse]);
  const {
    msg: oe,
    searchQuery: le = [],
    msgType: ie,
    author: ue,
    lastAddOnPreview: se,
    elevatedPushNamesEnabled: ce = false,
    fromCommunity: de = false
  } = e;
  const fe = ie === "AddOnParentMsg";
  const pe = (0, j.default)();
  if (X === S.MSG_TYPE.DOCUMENT && $ && (!Z || !Z.mediaBlob) && (0, b.isTrusted)(oe.unsafe()) && ne <= P.MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024) {
    oe.downloadMedia({
      downloadEvenIfExpensive: true,
      rmrReason: I.WEBC_RMR_REASON_CODE.MSG_RENDER,
      isUserInitiated: false
    });
  }
  (0, B.useListener)(te != null ? oe : null, "change:body change:caption", pe);
  (0, B.useListener)(X === S.MSG_TYPE.DOCUMENT && Z && $ ? Z : null, "change:parsedVcards", pe);
  (0, B.useListener)(X === S.MSG_TYPE.REVOKED ? d.ContactCollection : null, ["add", "remove", "change:name"], pe);
  const me = [];
  if (!(!Y || G || de || ie === "AddOnParentMsg")) {
    me.push(x.default.createElement(u.default, {
      msg: oe.unsafe(),
      key: "symbol"
    }));
  }
  const he = ie !== "Search" && (V || re) && !q && !de;
  const ge = ue && ie === "Search";
  if (V && de) {
    var Ee;
    const e = (0, g.getChat)(oe.unsafe());
    const t = ((Ee = e.groupMetadata) === null || Ee === undefined ? undefined : Ee.groupType) === E.GroupType.LINKED_ANNOUNCEMENT_GROUP ? N.fbt._("Announcements", null, {
      hk: "1nVFgF"
    }) : e.title();
    me.push(x.default.createElement("span", {
      className: i.default.groupName
    }, x.default.createElement(p.EmojiText, {
      text: t,
      direction: "auto",
      key: "group-name",
      ellipsify: true
    })));
    me.push(x.default.createElement("span", {
      className: (0, c.classnamesConvertMeToStylexPlease)({
        [i.default.groupDividerRTL]: v.default.isRTL()
      }),
      key: "group-divider"
    }, " ▶ "));
  }
  if (X === S.MSG_TYPE.NEWSLETTER_NOTIFICATION && (0, w.isNewsletterEnabled)()) {
    me.push(x.default.createElement(y.default, {
      msg: oe
    }));
  }
  if (ie === "AddOnParentMsg" && se != null) {
    const e = d.ContactCollection.gadd((0, R.createUserWid)(se.sender));
    if ((0, f.getIsMe)(e)) {
      switch (se.type) {
        case "poll_vote":
          me.push(x.default.createElement("span", {
            key: "poll_vote_preview_string"
          }, N.fbt._("You voted in:", null, {
            hk: "4APShH"
          }), " "));
          break;
        case "reaction":
          me.push(x.default.createElement("span", {
            key: "reaction_preview_string"
          }, N.fbt._("You reacted {emoji} to:", [N.fbt._param("emoji", x.default.createElement(A.ReactionEmoji, {
            reaction: se.reactionText
          }))], {
            hk: "gJpmm"
          })));
      }
    } else if (V) {
      switch (se.type) {
        case "poll_vote":
          me.push(x.default.createElement("span", {
            key: "poll_vote_preview_string"
          }, N.fbt._("{user-name} voted in:", [N.fbt._param("user-name", x.default.createElement(T.Name, {
            contact: e,
            useShortName: true,
            showNotifyName: ce,
            elevatedPushNamesEnabled: ce,
            key: "author"
          }))], {
            hk: "hyQZE"
          }), " "));
          break;
        case "reaction":
          me.push(x.default.createElement("span", {
            key: "reaction_preview_string"
          }, N.fbt._("{user-name} reacted {emoji} to:", [N.fbt._param("user-name", x.default.createElement(T.Name, {
            contact: e,
            useShortName: true,
            showNotifyName: ce,
            elevatedPushNamesEnabled: ce,
            key: "author"
          })), N.fbt._param("emoji", x.default.createElement(A.ReactionEmoji, {
            reaction: se.reactionText
          }))], {
            hk: "1n8nAQ"
          })));
      }
    } else {
      switch (se.type) {
        case "poll_vote":
          me.push(x.default.createElement("span", {
            key: "poll_vote_preview_string"
          }, N.fbt._("Voted in:", null, {
            hk: "4cEZdg"
          }), " "));
          break;
        case "reaction":
          me.push(x.default.createElement("span", {
            key: "reaction_preview_string"
          }, N.fbt._("Reacted {emoji} to:", [N.fbt._param("emoji", x.default.createElement(A.ReactionEmoji, {
            reaction: se.reactionText
          }))], {
            hk: "27ZYlH"
          })));
      }
    }
    me.push(x.default.createElement("span", {
      key: "add_on_space_after_preview"
    }, " "));
  }
  if ((he || ge) && ie !== "AddOnParentMsg") {
    if (he) {
      me.push(x.default.createElement(T.Name, {
        contact: Q,
        useShortName: true,
        showNotifyName: ce,
        elevatedPushNamesEnabled: ce,
        key: "author"
      }));
    } else if (ge) {
      me.push(x.default.createElement(p.EmojiText, {
        text: ue,
        direction: "auto",
        key: "author"
      }));
    }
    me.push(x.default.createElement("span", {
      key: "divider"
    }, ": "));
  }
  if (fe) {
    me.push("\"");
  }
  if ((0, k.areStatusQuickRepliesEnabled)() && (0, M.isStatusReplyMsg)(oe.unsafe())) {
    me.push(x.default.createElement(W, null));
  }
  if ((0, b.hasSymbol)(oe.unsafe())) {
    me.push(x.default.createElement(s.default, {
      msg: oe.unsafe(),
      key: "msg-symbol"
    }));
  }
  if (X === "order" && z != null) {
    me.push(x.default.createElement("div", {
      key: "item-count"
    }, N.fbt._({
      "*": "{count} items",
      _1: "1 item"
    }, [N.fbt._plural(z || 0, "count")], {
      hk: "2j0nBZ"
    }), J ? x.default.createElement("span", {
      key: "item-divider"
    }, ": ") : null));
  }
  if (a != null) {
    me.push(x.default.createElement(_.default, {
      msg: a,
      clickable: false,
      key: "status",
      isLastMsg: true
    }));
  } else if (n != null) {
    me.push(x.default.createElement(l.default, {
      msg: n,
      clickable: false,
      key: "broadcast_notification"
    }));
  } else {
    const e = (0, c.classnamesConvertMeToStylexPlease)({
      [i.default.product]: D != null,
      [i.default.italic]: G
    });
    const t = ie === "AddOnParentMsg" ? "LastMessage" : ie;
    const n = (0, o.getABPropConfigValue)("enable_clear_formatted_preview");
    let a = (0, h.default)((0, O.unproxy)(oe.unsafe()), {
      stripFormatting: n,
      formatAsLastMsg: true,
      formatAsSearchResult: ie === "Search",
      searchQuery: le
    }).toString();
    if (fe) {
      a = K === v.default.isRTL() || (0, b.hasSymbol)(oe.unsafe()) ? `${a}"` : `"${a}`;
    }
    me.push(x.default.createElement(p.EmojiText, {
      className: e,
      direction: H,
      text: (0, r.default)(a, true),
      dirMismatch: K !== v.default.isRTL(),
      formatters: m[t]({
        mentions: oe.mentionMap(),
        groupMentions: oe.groupMentionMap(),
        terms: le
      }),
      ellipsify: !ee,
      inlineblock: !ee,
      key: "status"
    }));
  }
  const ve = v.default.embedDir((0, h.default)((0, O.unproxy)(oe.unsafe()), {
    stripFormatting: true,
    formatAsSearchResult: ie === "Search"
  }).toString() || "", K);
  return x.default.createElement("span", {
    className: (0, L.default)(ee ? U.ellipsifyLines : U.last),
    title: ve
  }, me);
};
var r = a(require("../app/110404.js"));
var o = require("../app/287461.js");
var l = a(require("./352896.js"));
var i = a(require("./638025.js"));
var u = a(require("./951068.js"));
var s = a(require("./859297.js"));
var c = require("../app/396574.js");
var d = require("../app/177938.js");
var f = require("../app/660666.js");
var p = require("../app/305521.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = G(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/675886.js"));
var h = a(require("./353033.js"));
var g = require("../app/163755.js");
var E = require("../app/862159.js");
var v = a(require("../app/932325.js"));
var _ = a(require("./427896.js"));
var y = a(require("./799546.js"));
var C = require("../app/787742.js");
var b = require("../app/435711.js");
var M = require("./722119.js");
var S = require("../app/373070.js");
var T = require("../app/21645.js");
var w = require("../app/73225.js");
var A = require("./900894.js");
var P = require("../app/962260.js");
var O = require("../app/163139.js");
var k = require("../app/918715.js");
var D = require("./198588.js");
var I = require("../app/885313.js");
var R = require("../app/669050.js");
var N = require("../vendor/548360.js");
var x = a(require("../vendor/667294.js"));
var L = a(require("../app/156720.js"));
var j = a(require("../app/969651.js"));
var B = require("../app/808446.js");
var F = require("./871210.js");
function G(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (G = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const U = {
  last: {
    display: "p357zi0d",
    alignItems: "r15c9g6i"
  },
  ellipsifyLines: {
    WebkitBoxOrient: "aoi073rw",
    WebkitLineClamp: "s7u03v8d",
    display: "c32ccnay",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "hmy10g0s"
  }
};
function W() {
  return x.default.createElement(D.StatusV3ReplyIcon, {
    className: i.default.statusReply
  });
}