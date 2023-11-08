var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let a;
  let oe;
  let {
    msg: le,
    displayAuthor: ie,
    trusted: ue,
    displayType: se,
    quotedMsg: ce,
    stickerLikeBubbleContainerRef: de,
    position: fe
  } = e;
  const [pe] = (0, ae.useMsgValues)(le.id, [P.getIsAnimatedEmoji]);
  const me = (0, re.useSendViewCount)(le.id, {
    displayType: se
  });
  const [he, ge] = (0, ne.useState)(0);
  const Ee = (0, f.isBotReceiveEnabled)() && (0, q.getIsMetaBotResponse)(le) && le.activeBotMsgStreamingInProgress === true;
  let ve = le.body;
  if (Ee) {
    ve = le.lastBotEditBodyLength != null ? le.body.slice(0, le.lastBotEditBodyLength) : le.body;
  }
  const [_e, ye] = (0, ne.useState)(ve);
  const Ce = function (e) {
    const t = function (e) {
      let t;
      if (!(0, q.getIsGroupMsg)(e)) {
        t = (0, J.isMeAccount)(e.from) ? e.to : e.from;
      }
      const n = (0, Z.useBusinessProfile)(t, ["commands"]);
      if (n == null) {
        return undefined;
      } else {
        return n.commands;
      }
    }(e);
    const n = function (e) {
      const [t] = (0, ae.useMsgValues)(e.id, [q.getIsBotQuery]);
      if (!(0, f.isMetaBotCommandsEnabled)()) {
        return null;
      }
      if (!t) {
        return null;
      }
      let n;
      n = e.id.remote.isBot() ? e.id.remote : e.invokedBotWid;
      if (n != null) {
        const e = p.BotProfileCollection.get(n);
        if (e == null) {
          return undefined;
        } else {
          return e.commands;
        }
      }
      return null;
    }(e);
    return t || n;
  }(le);
  (0, ne.useEffect)(() => {
    var e;
    if (!Ee) {
      return;
    }
    const t = le.body.slice((e = le.lastBotEditBodyLength) !== null && e !== undefined ? e : 0).split(" ");
    if (le.lastBotEditBodyLength != null && he < t.length) {
      const e = self.setTimeout(() => {
        ye(e => e + " " + t[he]);
        ge(e => e + 1);
      }, 50);
      if (he % 5) {
        E.Cmd.scrollChatHeight(100);
      }
      return () => self.clearTimeout(e);
    }
    if (le.botEditType === m.BotMsgEditType.LAST && le.activeBotMsgStreamingInProgress === true) {
      le.activeBotMsgStreamingInProgress = false;
    }
  }, [he, Ee, le]);
  if (ue && ((0, q.getLinkPreview)(le) || le.ctwaContext)) {
    const e = (0, $.default)(le);
    if (le.ctwaContext) {
      t = ne.default.createElement(s.default, {
        msg: le.unsafe(),
        wrapperClass: U.default.linkPreview
      });
    } else if (e) {
      t = ne.default.createElement("div", {
        className: U.default.linkPreview
      }, ne.default.createElement(ee.default, {
        msg: le.unsafe()
      }));
    } else {
      const e = (0, i.parseAPICmd)(le.matchedText);
      if (e.resultType === l.APICmd.GROUP_INVITE) {
        t = ne.default.createElement("div", {
          className: U.default.linkPreview
        }, ne.default.createElement(N.default, {
          msg: le.unsafe(),
          displayType: se,
          isInvite: true
        }));
        if (se !== y.DISPLAY_TYPE.GALLERY) {
          var be;
          const e = (0, k.getGroupInviteActionText)({
            inGroup: (0, q.getIsSentByMe)(le),
            groupType: (be = le.inviteGrpType) !== null && be !== undefined ? be : I.GroupType.DEFAULT
          });
          a = ne.default.createElement(L.BubbleActions, {
            items: [{
              label: e,
              onClick: () => {
                const e = le.matchedText;
                (0, S.openExternalLink)(e);
              },
              testid: "group-invite-link-action"
            }]
          });
        }
      } else if ((0, Q.isNewsletterEnabled)() && e.resultType === l.APICmd.NEWSLETTER) {
        t = ne.default.createElement("div", {
          className: U.default.linkPreview
        }, ne.default.createElement(N.default, {
          msg: le.unsafe(),
          displayType: se,
          isInvite: true
        }));
        if (se !== y.DISPLAY_TYPE.GALLERY) {
          const {
            type: t,
            serverId: n
          } = e.data;
          const r = (0, v.getNewsletterLinkActionLabel)(t, n);
          const o = t === "view" ? "newsletter-invite-link-action" : "newsletter-create-action";
          a = ne.default.createElement(L.BubbleActions, {
            items: [{
              label: r,
              onClick: () => {
                const e = le.matchedText;
                (0, S.openExternalLink)(e);
              },
              testid: o
            }]
          });
        }
      } else if (e.resultType === l.APICmd.CATALOG) {
        t = ne.default.createElement("div", {
          className: U.default.linkPreview
        }, ne.default.createElement(u.default, {
          msg: le.unsafe()
        }));
        if (se !== y.DISPLAY_TYPE.GALLERY) {
          const e = te.fbt._("View catalog", null, {
            hk: "1bDXja"
          });
          a = ne.default.createElement(L.BubbleActions, {
            items: [{
              label: e,
              onClick: () => {
                const e = le.matchedText;
                (0, S.openExternalLink)(e);
              }
            }]
          });
        }
      } else {
        e.resultType;
        const n = (0, P.getAsUrl)(le);
        if (n) {
          let e;
          if ((0, x.displayHighQualityLinkPreview)(le.unsafe(), se) && n.thumbnailHeight != null && n.thumbnailWidth != null) {
            const t = n.thumbnailHeight / n.thumbnailWidth;
            oe = t >= 1 ? "portrait" : "landscape";
            e = "high-quality";
          }
          t = ne.default.createElement("div", {
            className: U.default.linkPreview
          }, ne.default.createElement(N.default, {
            msg: le.unsafe(),
            displayType: se,
            theme: e
          }));
        }
      }
    }
  }
  const Me = Boolean(ce && !le.id.fromMe && (0, X.getQuotedMsgAdminParentGroupJid)(le.unsafe()) && (0, r.getABPropConfigValue)("parent_group_tap_to_add_enabled"));
  const Se = (0, X.getQuotedMsgAdminGroupJid)(le.unsafe());
  if (Me && Se) {
    const e = h.ChatCollection.get(Se);
    const {
      participants: t,
      subject: n
    } = D.default.get(Se) || {};
    const r = te.fbt._("Add to group", null, {
      hk: "4rl2hN"
    });
    a = ne.default.createElement(L.BubbleActions, {
      items: [{
        label: r,
        onClick: () => {
          let a = null;
          if (t == null ? undefined : t.iAmAdmin()) {
            if (t == null ? undefined : t.get((0, q.getSender)(le))) {
              a = te.fbt._("{requester-name} is already added to the group \"{subgroup-name}\".", [te.fbt._param("requester-name", ne.default.createElement(b.EmojiText, {
                text: (0, A.getDisplayName)(le.senderObj)
              })), te.fbt._param("subgroup-name", ne.default.createElement(b.EmojiText, {
                text: n
              }))], {
                hk: "ndTlo"
              });
            }
          } else {
            a = te.fbt._("You're no longer a group admin. Only group admins can add participants to the group.", null, {
              hk: "2Bf154"
            });
          }
          if (a) {
            H.ModalManager.open(ne.default.createElement(_.ConfirmPopup, {
              onOK: () => {
                H.ModalManager.close();
              }
            }, a));
          } else if (e) {
            (0, V.addParticipants)(e, [le.senderObj]).catch(() => {});
          }
        }
      }]
    });
  }
  let Te;
  let we;
  const Ae = C.EmojiUtil.matchLargeEmojiPattern(le.body);
  if (Ae) {
    const e = Ae.length === 1 && C.EmojiUtil.getHeartEmojis().some(e => C.EmojiUtil.normalizeEmoji(e) === C.EmojiUtil.normalizeEmoji(Ae[0]));
    Te = ne.default.createElement(F.default, {
      animation: e,
      emojis: Ae
    });
    we = true;
  } else {
    const e = true;
    const t = (0, q.getIsMetaBotResponse)(le) ? _e : le.body;
    Te = ne.default.createElement(M.ExpandableText, {
      text: t,
      textLimit: (0, q.getInitialPageSize)(le)
    }, n => {
      let {
        textLimit: a
      } = n;
      const r = (0, T.Conversation)({
        mentions: le.mentionMap(),
        groupMentions: le.groupMentionMap(),
        links: (0, Y.getLinksFromMsg)(le.unsafe(), a),
        phoneNumbers: (0, z.getPhoneNumbersFromMsg)(le.unsafe(), a),
        selectable: e,
        trusted: ue === true,
        fromMe: le.id.fromMe,
        fromChatWid: le.id.remote,
        commands: se === y.DISPLAY_TYPE.CONVERSATION ? Ce : null
      });
      return ne.default.createElement(b.EmojiText, {
        text: t,
        lastBotEditBodyLength: le.lastBotEditBodyLength,
        className: se === y.DISPLAY_TYPE.GALLERY ? "message-text-link" : "",
        dirMismatch: (0, P.getRtl)(le) !== R.default.isRTL(),
        direction: (0, P.getDir)(le),
        inferLinesDirection: true,
        formatters: r,
        selectable: e,
        textLimit: a
      });
    });
  }
  let Pe;
  let Oe;
  if ((0, q.getSupportsMessageFooter)(le)) {
    const {
      formatters: e,
      selectable: t
    } = le.isDynamicReplyButtonsMsg ? (0, w.enableHeaderAndFooterFormatting)((0, Y.getHeaderLinks)(le.unsafe()), ue === true) : {};
    Pe = le.title ? ne.default.createElement("div", {
      className: U.default.title
    }, ne.default.createElement(b.EmojiText, {
      text: le.title,
      dirMismatch: (0, P.getRtl)(le) !== R.default.isRTL(),
      direction: (0, P.getDir)(le),
      selectable: t,
      formatters: e
    })) : null;
    Oe = ne.default.createElement(d.default, {
      dir: (0, P.getDir)(le),
      footer: le.footer,
      isShown: (0, q.getSupportsMessageFooter)(le),
      msg: le.unsafe(),
      rtl: (0, P.getRtl)(le),
      trusted: ue,
      type: le.type
    });
  }
  const ke = se !== y.DISPLAY_TYPE.GALLERY && !(0, q.getIsPSA)(le) && !we && !(0, q.getActiveBotMsgStreamingInProgress)(le);
  let De;
  if (ce) {
    De = ne.default.createElement("div", {
      className: U.default.quote
    }, ce);
  }
  const Ie = (0, K.showForwarded)(le);
  const Re = (0, Y.getSuspiciousLinks)(le.unsafe()).length > 0;
  const Ne = !!a || !!(0, P.getHasTemplateButtons)(le) || !!le.isDynamicReplyButtonsMsg || (0, q.getIsBotPluginCarouselMsg)(le) || (0, q.getIsBotSearchResponse)(le);
  let xe;
  if ((0, q.getIsBotSearchResponse)(le)) {
    xe = ne.default.createElement("div", {
      className: U.default.metaBotPlugin
    }, ne.default.createElement(B.Meta, {
      msg: le
    }));
  } else if (Ne) {
    xe = ne.default.createElement("div", {
      className: U.default.meta
    }, ne.default.createElement(B.Meta, {
      msg: le
    }));
  }
  if ((0, o.isAnimatedEmojiEnabled)() && we && pe) {
    const e = (0, O.default)(require("./9905.js"));
    return ne.default.createElement(e, {
      msg: le,
      quotedMsg: ce,
      displayAuthor: ie,
      displayType: se,
      stickerLikeBubbleContainerRef: de,
      position: fe
    });
  }
  return ne.default.createElement("div", {
    ref: me
  }, ne.default.createElement(W.default, {
    msg: le,
    displayType: se,
    displayAuthor: ie,
    hideMeta: Ne,
    theme: oe,
    useFixedWidth: le.isDynamicReplyButtonsMsg
  }, ne.default.createElement(j.default, {
    className: (0, g.classnamesConvertMeToStylexPlease)({
      [U.default.hasAuthor]: ie,
      [U.default.forwarded]: Ie,
      [U.default.hasSuspiciousLinks]: Re
    }),
    contact: le.senderObj,
    msg: le.unsafe()
  }, De, !le.ctwaContext && ne.default.createElement(c.SuspiciousLabel, {
    msg: le.unsafe(),
    displayType: se
  }), t, ne.default.createElement(G.default, {
    msg: le.unsafe(),
    spacer: le.isFromTemplate || le.isDynamicReplyButtonsMsg ? ke && !le.footer : ke,
    "data-id": le.id
  }, Pe, Te, Oe, xe), a)));
};
var r = require("../app/287461.js");
var o = require("../app/317355.js");
var l = require("../app/251780.js");
var i = require("../app/127714.js");
var u = a(require("./815711.js"));
var s = a(require("./362842.js"));
var c = require("./751349.js");
var d = a(require("./339435.js"));
var f = require("../app/354458.js");
var p = require("../app/169437.js");
var m = require("../app/37237.js");
var h = require("../app/351053.js");
var g = require("../app/396574.js");
var E = require("../app/780549.js");
var v = require("./949359.js");
var _ = require("../app/103440.js");
var y = require("../app/356097.js");
var C = require("../app/70354.js");
var b = require("../app/305521.js");
var M = require("./999649.js");
var S = require("../app/753233.js");
var T = require("../app/675886.js");
var w = require("./502360.js");
var A = require("../app/714574.js");
var P = require("../app/163755.js");
var O = a(require("../app/97359.js"));
var k = require("./148999.js");
var D = a(require("../app/667845.js"));
var I = require("../app/862159.js");
var R = a(require("../app/932325.js"));
var N = a(require("./965854.js"));
var x = require("../app/860888.js");
var L = require("./20493.js");
var j = a(require("./902538.js"));
var B = require("./789955.js");
var F = a(require("./454805.js"));
var G = a(require("./19805.js"));
var U = a(require("./741990.js"));
var W = a(require("./398685.js"));
var H = require("../app/114850.js");
var V = require("./33014.js");
var q = require("../app/787742.js");
var Y = require("../app/44118.js");
var z = require("./527530.js");
var K = require("./192071.js");
var Q = require("../app/73225.js");
var X = require("../app/592978.js");
var Z = require("./508228.js");
var J = require("../app/459857.js");
var $ = a(require("./599395.js"));
var ee = a(require("./698387.js"));
var te = require("../vendor/548360.js");
var ne = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = oe(t);
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
}(require("../vendor/667294.js"));
var ae = require("./871210.js");
var re = require("./884561.js");
function oe(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (oe = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}