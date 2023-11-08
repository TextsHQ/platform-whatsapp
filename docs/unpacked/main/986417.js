var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafetyTools = k;
exports.displaySafetyToolsModal = function (e, t) {
  E.ModalManager.open(O.default.createElement(k, {
    contact: e,
    chat: t
  }));
};
var r = require("./923092.js");
var o = require("../app/400436.js");
var l = require("./958548.js");
var i = require("./397454.js");
var u = require("../app/103440.js");
var s = require("../main-chunk/341445.js");
var c = require("./841605.js");
var d = require("../app/753233.js");
var f = require("../app/258105.js");
var p = a(require("../app/395767.js"));
var m = require("../app/690495.js");
var h = require("../app/392802.js");
var g = a(require("../app/932325.js"));
var E = require("../app/114850.js");
var v = a(require("./338695.js"));
var _ = require("../app/383296.js");
var y = require("./290562.js");
var C = require("../app/453603.js");
var b = require("../app/220584.js");
var M = require("./647890.js");
var S = require("../app/604106.js");
var T = require("../app/283136.js");
var w = require("./219753.js");
var A = require("../app/851488.js");
var P = require("../vendor/548360.js");
var O = a(require("../vendor/667294.js"));
function k(e) {
  let {
    contact: t,
    chat: n
  } = e;
  const a = e => {
    new h.FmxActionWamEvent({
      fmxEvent: e,
      fmxEntryPoint: S.FMX_ENTRY_POINT.SAFETY_TOOLS
    }).commit();
  };
  const k = g.default.isRTL() ? l.ChevronLeftIcon : i.ChevronRightIcon;
  return O.default.createElement(u.ConfirmPopup, {
    okText: P.fbt._("Back to chat", null, {
      hk: "3rmY7W"
    }),
    onOK: () => {
      E.ModalManager.close();
    },
    cancelText: (0, p.default)("Learn more"),
    onCancel: () => {
      a(T.FMX_EVENT.LEARN_MORE);
      (0, d.openExternalLink)((0, f.getSafetyToolsFaqUrl)());
    }
  }, O.default.createElement(m.FlexColumn, null, O.default.createElement(A.WDSTextLarge, null, P.fbt._("Safety tools", null, {
    hk: "2CEXQO"
  })), O.default.createElement(A.WDSTextTitle, {
    paddingTop: 16
  }, P.fbt._("Here's what you can do", null, {
    hk: "2HfxVi"
  })), O.default.createElement(A.WDSTextMuted, {
    paddingTop: 8
  }, P.fbt._("When receiving messages from an unknown sender you can take any of these actions. They won't be notified if you do.", null, {
    hk: "28oGOQ"
  })), O.default.createElement(m.FlexColumn, {
    alignSelf: "stretch",
    padding: [16, 0],
    gap: 4
  }, !t.isContactBlocked && O.default.createElement(w.WDSCell, {
    onClick: () => {
      a(T.FMX_EVENT.BLOCK);
      (0, r.handleBlock)(n, n.trusted ? o.BlockEntryPoint.ChatFmxCardSafetyToolsBlock : o.BlockEntryPoint.ChatFmxCardSafetyToolsBlockSuspicious);
    },
    colorScheme: "lightest",
    size: "medium",
    detailLeft: O.default.createElement(y.SettingsBlockedIcon, {
      color: b.SvgColorProp.CRITICAL
    }),
    primary: O.default.createElement(A.WDSTextTitle, {
      color: "critical"
    }, P.fbt._("Block contact", null, {
      hk: "2ntvmp"
    })),
    detailRight: O.default.createElement(k, null)
  }), O.default.createElement(w.WDSCell, {
    onClick: () => {
      a(T.FMX_EVENT.REPORT);
      (function (e, t) {
        const n = t.trusted ? C.SpamFlow.ChatFmxCardSafetyToolsReport : C.SpamFlow.ChatFmxCardSafetyToolsReportSuspicious;
        E.ModalManager.open(O.default.createElement(v.default, {
          isMessage: false,
          isBusiness: e.isBusiness,
          isGroupChat: false,
          onReport: () => {
            (0, _.sendReport)({
              chat: t,
              spamFlow: n
            });
            E.ModalManager.close();
          },
          onReportBlockClear: () => {
            (0, _.sendSpamBlockClear)(t, n);
            E.ModalManager.close();
          },
          onCancel: () => E.ModalManager.close()
        }));
      })(t, n);
    },
    colorScheme: "lightest",
    size: "medium",
    detailLeft: O.default.createElement(M.ThumbsDownIcon, {
      color: b.SvgColorProp.CRITICAL
    }),
    primary: O.default.createElement(A.WDSTextTitle, {
      color: "critical"
    }, P.fbt._("Report contact", null, {
      hk: "4qko6b"
    })),
    detailRight: O.default.createElement(k, null)
  })), O.default.createElement(A.WDSTextTitle, null, P.fbt._("Staying safe in chats", null, {
    hk: "3hbaWH"
  })), O.default.createElement(m.FlexColumn, {
    alignSelf: "stretch",
    paddingTop: 8
  }, O.default.createElement(w.WDSCell, {
    interactive: false,
    colorScheme: "lightest",
    size: "medium",
    detailLeft: O.default.createElement(s.ContactsIcon, {
      color: b.SvgColorProp.SECONDARY
    }),
    primary: O.default.createElement(A.WDSTextTitle, null, P.fbt._("Profile name and photo", null, {
      hk: "UVFUc"
    })),
    secondary: O.default.createElement(A.WDSTextMuted, {
      textWrap: "wrap"
    }, P.fbt._("Names and photos set by the sender. WhatsApp does not verify this information.", null, {
      hk: "2Mn9T1"
    }))
  }), O.default.createElement(w.WDSCell, {
    interactive: false,
    colorScheme: "lightest",
    size: "medium",
    detailLeft: O.default.createElement(c.DialpadIcon, {
      color: b.SvgColorProp.SECONDARY
    }),
    primary: O.default.createElement(A.WDSTextTitle, null, P.fbt._("Phone number", null, {
      hk: "2BGgy4"
    })),
    secondary: O.default.createElement(A.WDSTextMuted, {
      textWrap: "wrap"
    }, P.fbt._("Make sure that the country code of the number looks familiar.", null, {
      hk: "4Ga7oK"
    }))
  }))));
}