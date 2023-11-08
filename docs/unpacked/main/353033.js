var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var a;
  var I;
  var R;
  var N;
  var x;
  var L;
  let {
    stripFormatting: j = true,
    formatAsLastMsg: B = false,
    formatAsSearchResult: F = false,
    searchQuery: G = []
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const U = e.safe();
  if ((0, b.messagePluginFrontendRegistrationEnabled)()) {
    let t;
    var W;
    if (U.type === M.MSG_TYPE.UNKNOWN && U.futureproofType) {
      t = (0, C.futureproofMsgText)({
        msg: e
      });
    } else {
      t = (W = (0, y.formatMsgText)({
        msg: e,
        options: {
          unformat: j,
          formatAsLastMsg: B,
          formatAsSearchResult: F,
          searchQuery: G
        }
      })) !== null && W !== undefined ? W : (0, T.formatMsgText)({
        msg: e,
        options: {
          unformat: j,
          formatAsLastMsg: B,
          formatAsSearchResult: F,
          searchQuery: G
        }
      });
    }
    if (t != null) {
      return t;
    }
  }
  switch (U.type) {
    case D.BUTTONS_RESPONSE:
    case D.TEMPLATE_BUTTON_REPLY:
      if (j) {
        return (0, w.default)(e, e.body);
      } else if ((t = e.body) !== null && t !== undefined) {
        return t;
      } else {
        return "";
      }
    case D.HSM:
      if (j) {
        return (0, w.default)(e, e.body);
      } else if ((n = e.body) !== null && n !== undefined) {
        return n;
      } else {
        return "";
      }
    case D.REVOKED:
      return (0, E.formatRevokedMsg)(U).toString();
    case D.CHAT:
      if (e.isFromTemplate) {
        var H;
        const t = (H = e.body) !== null && H !== undefined ? H : "";
        if (e.title) {
          if (j) {
            return (0, w.default)(e, e.title + " " + t);
          } else {
            return "*" + e.title + "* " + t;
          }
        } else if (j) {
          return (0, w.default)(e, t);
        } else {
          return t;
        }
      }
      if (e.isDynamicReplyButtonsMsg && e.title) {
        const t = (0, f.maybeAddFooter)(e.body, e);
        if (t != null) {
          if (j) {
            return (0, w.default)(e, e.title + "\n" + t);
          } else {
            return `*${e.title}*\n${t}`;
          }
        }
      }
      if (j) {
        return (0, w.default)(e, e.body);
      } else if ((a = e.body) !== null && a !== undefined) {
        return a;
      } else {
        return "";
      }
    case D.IMAGE:
      {
        if (U.isViewOnce) {
          if ((0, P.isViewed)(U)) {
            return k.fbt._("Opened", null, {
              hk: "4eZcUM"
            });
          } else {
            return k.fbt._("Photo", null, {
              hk: "SBkDD"
            });
          }
        }
        const t = (0, f.maybeAddFooter)(e.caption, e);
        if (t != null && t !== "") {
          if (j) {
            return (0, w.default)(e, t);
          } else {
            return t;
          }
        } else {
          return k.fbt._("Photo", null, {
            hk: "4z2MZB"
          });
        }
      }
    case D.VIDEO:
      {
        if (U.isViewOnce) {
          if ((0, P.isViewed)(U)) {
            return k.fbt._("Opened", null, {
              hk: "4eZcUM"
            });
          } else {
            return k.fbt._("Video", null, {
              hk: "2SOGaJ"
            });
          }
        }
        const t = (0, f.maybeAddFooter)(e.caption, e);
        if (t != null && t !== "") {
          if (j) {
            return (0, w.default)(e, t);
          } else {
            return t;
          }
        } else if (e.isGif) {
          return "GIF";
        } else {
          return k.fbt._("Video", null, {
            hk: "2Yr2Dx"
          });
        }
      }
    case D.PTV:
      {
        if (!(0, S.isPtvReceivingEnabled)()) {
          return (0, v.formatUnknownMsgText)(e);
        }
        if (U.isViewOnce) {
          if ((0, P.isViewed)(U)) {
            return k.fbt._("Opened", null, {
              hk: "4eZcUM"
            });
          } else {
            return k.fbt._("Video Message", null, {
              hk: "bGl5O"
            });
          }
        }
        const t = (0, f.maybeAddFooter)(e.caption, e);
        if (t != null && t !== "") {
          if (j) {
            return (0, w.default)(e, t);
          } else {
            return t;
          }
        } else {
          return k.fbt._("Video Message", null, {
            hk: "3I6eHA"
          });
        }
      }
    case D.STICKER:
      return k.fbt._("Sticker", null, {
        hk: "3gWjqH"
      });
    case D.PTT:
      {
        const t = l.Clock.durationStr(e.duration);
        return t || k.fbt._("Voice message", null, {
          hk: "2LTvOS"
        });
      }
    case D.AUDIO:
      return k.fbt._("Audio", null, {
        hk: "4rI2uS"
      });
    case D.LOCATION:
      if (e.isFromTemplate || e.isDynamicReplyButtonsMsg) {
        const t = (0, f.maybeAddFooter)(e.caption, e);
        if (t != null) {
          if (j) {
            return (0, w.default)(e, t);
          } else {
            return t;
          }
        } else {
          return e.loc || k.fbt._("Location", null, {
            hk: "3j6lTi"
          });
        }
      }
      if (e.isLive) {
        return e.comment || k.fbt._("Live location", null, {
          hk: "4hn7as"
        });
      } else {
        return e.loc || k.fbt._("Location", null, {
          hk: "3j6lTi"
        });
      }
    case D.GP2:
      return (0, d.default)(e, B);
    case D.BROADCAST_NOTIFICATION:
      return (0, i.default)(e);
    case D.NOTIFICATION:
      if ((I = e.body) !== null && I !== undefined) {
        return I;
      } else {
        return "";
      }
    case D.VCARD:
      return e.vcardFormattedName || k.fbt._("Contact", null, {
        hk: "23Gpbk"
      });
    case D.GROUPS_V4_INVITE:
      return k.fbt._("WhatsApp group invite", null, {
        hk: "Yox1t"
      });
    case D.MULTI_VCARD:
      return (0, A.getNameString)(e.vcardList);
    case D.DOCUMENT:
      {
        if (e.isFromTemplate || e.isDynamicReplyButtonsMsg) {
          const t = e.pageCount > 0 ? k.fbt._({
            "*": "{count} pages",
            _1: "1 page"
          }, [k.fbt._plural(e.pageCount, "count")], {
            hk: "23rvsI"
          }).toString() : null;
          const n = (0, f.maybeAddFooter)(e.caption, e);
          if (n != null) {
            if (j) {
              return (0, w.default)(e, n);
            } else {
              return n;
            }
          } else {
            return (0, r.default)([n || O.default._("Document", null, {
              hk: "p3EXI"
            }).toString(), t]).join(" • ");
          }
        }
        if (e.isVcardOverMmsDocument && e.mediaData.parsedVcards) {
          return (0, f.formatParsedVcardsDisplayText)(e.mediaData.parsedVcards);
        }
        const t = (0, f.maybeAddFooter)(e.caption, e);
        if (t != null && t !== "" && e.isCaptionByUser) {
          return t;
        }
        const n = e.pageCount > 0 ? k.fbt._({
          "*": "{count} pages",
          _1: "1 page"
        }, [k.fbt._plural(e.pageCount, "count")], {
          hk: "23rvsI"
        }).toString() : null;
        return (0, r.default)([e.mediaData.filename || O.default._("Document", null, {
          hk: "p3EXI"
        }).toString(), n]).join(" • ");
      }
    case D.E2E_NOTIFICATION:
      return (0, s.default)(U);
    case D.CALL_LOG:
      return (0, u.default)(e, false);
    case D.PRODUCT:
      {
        const t = [(0, _.getText)(e), e.caption, e.footer].filter(Boolean).join(" ");
        if (t.length) {
          if (j) {
            return (0, w.default)(e, t);
          } else {
            return t;
          }
        } else {
          return k.fbt._("Product", null, {
            hk: "1H4J4r"
          });
        }
      }
    case D.OVERSIZED:
      return (0, h.formatOversizedMsgText)(e);
    case D.INTERACTIVE:
      return (0, o.formatInteractive)(e, {
        formatAsSearchResult: F
      });
    case D.INTERACTIVE_RESPONSE:
      return e.body || "";
    case D.UNKNOWN:
      return (0, v.formatUnknownMsgText)(e);
    case D.PAYMENT:
      return (0, f.formatPayment)(e);
    case D.NOTIFICATION_TEMPLATE:
      return (0, m.default)(e, B).toString();
    case D.PROTOCOL:
      if (e.subtype === "ephemeral_setting") {
        return (0, c.formatEphemeralSetting)(e);
      } else if (e.subtype === "share_phone_number") {
        return k.fbt._("Share Phone Number", null, {
          hk: "sKD9u"
        });
      } else {
        return "";
      }
    case D.ORDER:
      return e.message || "";
    case D.LIST:
      return [(R = e.list) === null || R === undefined ? undefined : R.title, (N = e.list) === null || N === undefined ? undefined : N.description, e.footer].filter(Boolean).join("\n");
    case D.LIST_RESPONSE:
      return `${((x = e.listResponse) === null || x === undefined ? undefined : x.title) || ""} ${((L = e.listResponse) === null || L === undefined ? undefined : L.description) || ""}`;
    case D.NATIVE_FLOW:
      return (0, p.formatNFMTextPreview)(e);
    case D.KEEP_IN_CHAT:
      return (0, v.formatUnknownMsgText)(e);
    case D.REQUEST_PHONE_NUMBER:
      return k.fbt._("Request Phone Number", null, {
        hk: "245QaP"
      });
    case D.PINNED_MESSAGE:
      return (0, g.formatPinInChatNotification)(e);
    case D.COMMENT:
      return k.fbt._("Someone replied to an announcement. Check your phone to see it.", null, {
        hk: "45Z1CF"
      });
    default:
      return "";
  }
};
var r = a(require("../vendor/639693.js"));
var o = require("../app/468776.js");
var l = require("../app/63014.js");
var i = a(require("../app/937876.js"));
var u = a(require("../app/466770.js"));
var s = a(require("../app/170856.js"));
var c = require("../app/730514.js");
var d = a(require("../app/553529.js"));
var f = require("./758669.js");
var p = require("../app/720934.js");
var m = a(require("./904183.js"));
var h = require("../app/984720.js");
var g = require("./58183.js");
var E = require("../app/386826.js");
var v = require("../app/824498.js");
var _ = require("../app/163755.js");
var y = require("./599769.js");
var C = require("./243361.js");
var b = require("../app/97858.js");
var M = require("../app/373070.js");
var S = require("../app/989199.js");
var T = require("./26602.js");
var w = a(require("../app/640391.js"));
var A = require("../app/105284.js");
var P = require("../app/239870.js");
var O = a(require("../app/286816.js"));
var k = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
const D = M.MSG_TYPE;