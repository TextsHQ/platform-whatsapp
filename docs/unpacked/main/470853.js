var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t
  } = e;
  const n = (0, x.default)();
  const a = (0, j.useModelValues)(e.chat, ["id", "isPSA", "isIAS", "shouldAppearInList", "trusted", "isGroup", "contact", "groupMetadata"]);
  const [U, W, H, V, q, Y, z, K] = (0, N.useContactValues)(e.contact.id, [p.getId, p.getIsBusiness, p.getIsSupportAccount, p.getVerifiedLevel, _.getFormattedName, p.getIsMe, _.getBusinessProfile, p.getIsMyContact]);
  (0, L.useListener)(l.BlocklistCollection, ["add", "remove", "reset"], n);
  const Q = () => {
    (0, w.sendReport)({
      chat: a,
      spamFlow: a.isGroup === true ? P.SpamFlow.GroupSpamBannerReport : P.SpamFlow.OneToOneChatSpamBannerReport
    });
    b.ModalManager.close();
  };
  const X = () => {
    (0, w.sendSpamExitClear)(a, P.SpamFlow.GroupSpamBannerReport);
    b.ModalManager.close();
  };
  const Z = () => {
    (0, w.sendSpamBlockClear)(a, P.SpamFlow.OneToOneChatSpamBannerReport);
    b.ModalManager.close();
  };
  const J = () => {
    m.DrawerManager.openDrawerLeft(R.default.createElement(M.default, {
      onClose: () => m.DrawerManager.closeDrawerLeft(),
      category: "groupAdd"
    }));
  };
  if (a.isPSA || a.isIAS || !a.shouldAppearInList || a.trusted || H || Y) {
    return null;
  }
  const $ = l.BlocklistCollection.get(a.id);
  let ee;
  let te;
  if ((0, v.supportsFMX)()) {
    ee = D.WDSButtonSecondary;
    te = D.WDSButtonSecondaryDestructive;
  } else {
    ee = D.WDSButtonPlainWhite;
    te = D.WDSButtonPlainWhite;
  }
  const ne = R.default.createElement(ee, {
    testid: "not-spam-btn",
    key: "not_spam",
    onClick: e.onClickNotSpam,
    icon: T.RoundSendInvIcon
  }, (0, g.default)("OK"));
  const ae = R.default.createElement(te, {
    testid: "report-btn",
    onClick: () => {
      b.ModalManager.open(a.isGroup ? R.default.createElement(S.default, {
        isMessage: false,
        isGroupChat: true,
        onReport: Q,
        onReportExitClear: X,
        onCancel: () => b.ModalManager.close()
      }) : R.default.createElement(S.default, {
        isMessage: false,
        isBusiness: W,
        isGroupChat: false,
        onReport: Q,
        onReportBlockClear: Z,
        onCancel: () => b.ModalManager.close()
      }));
    },
    key: "report_spam",
    icon: k.ThumbsDownIcon
  }, I.fbt._("Report", null, {
    hk: "18ssTb"
  }));
  const re = (0, s.isCommunityAnnouncementGroup)(a) && (0, f.communityAnnouncementImprovementM3Enabled)() ? I.fbt._("Exit community", null, {
    hk: "3KaKZa"
  }) : I.fbt._("Exit group", null, {
    hk: "1GqETb"
  });
  const oe = R.default.createElement(te, {
    testid: "exit-btn",
    onClick: () => {
      var e;
      const t = (e = a.groupMetadata) === null || e === undefined ? undefined : e.getParentGroupChat();
      if (t != null && (0, s.isCommunityAnnouncementGroup)(a) && (0, f.communityAnnouncementImprovementM3Enabled)()) {
        b.ModalManager.open(R.default.createElement(y.LeaveCommunityModal, {
          chat: t
        }));
      } else {
        d.Cmd.deleteOrExitChat(a);
      }
    },
    key: "exit_group",
    icon: h.ExitIcon
  }, re);
  let le;
  let ie;
  let ue;
  const se = [];
  if (a.isGroup) {
    le = I.fbt._("You were added by someone not in your contacts", null, {
      hk: "5SPZj"
    });
    ie = I.fbt._("You can control who can add you to groups in your {=m2}", [I.fbt._implicitParam("=m2", R.default.createElement(c.default, {
      onClick: J,
      xstyle: B.link
    }, I.fbt._("privacy settings", null, {
      hk: "sfNLn"
    })))], {
      hk: "1piCbA"
    });
    se.push(ae);
    se.push(oe);
    se.push(ne);
  } else {
    le = (0, v.supportsFMXV2)() ? R.default.createElement(i.Box, {
      xstyle: F.basePrimary
    }, I.fbt._("The sender won't see if you read their messages until you reply or add them as a contact.", null, {
      hk: "1c031U"
    })) : I.fbt._("The sender is not in your contact list", null, {
      hk: "4CoaPf"
    });
    if (W) {
      le = V !== u.VERIFIED_LEVEL.HIGH && (0, v.supportsFMXV2)() ? I.fbt._("This business won't see if you read their messages until you reply or add them as a contact.", null, {
        hk: "3vtN1F"
      }) : V === u.VERIFIED_LEVEL.HIGH ? (0, C.isBlueStringsEnabled)() ? I.fbt._("This verified account is not in your contact list.", null, {
        hk: "2d0Q0o"
      }) : I.fbt._("This official business account is not in your contact list.", null, {
        hk: "4B5PLS"
      }) : I.fbt._("This business account is not in your contact list.", null, {
        hk: "3VQ61G"
      });
    }
    ue = $ ? R.default.createElement(ee, {
      testid: "unblock-btn",
      key: "unblock",
      onClick: () => (0, r.handleUnblock)(t, W ? o.BlockEntryPoint.BizSpamBannerBlock : o.BlockEntryPoint.OneToOneOldSpamBannerBlock),
      grow: 1
    }, (0, g.default)("Unblock")) : R.default.createElement(te, {
      testid: "block-btn",
      key: "block",
      onClick: () => (0, r.handleBlock)(a, W ? o.BlockEntryPoint.BizSpamBannerBlock : o.BlockEntryPoint.OneToOneOldSpamBannerBlock),
      icon: A.SettingsBlockedIcon,
      grow: 1
    }, (0, g.default)("Block"));
    se.push(ae, ue, ne);
  }
  if ((0, v.supportsFMX)()) {
    let e;
    e = a.isGroup ? [oe, ne] : W ? [ue, ne] : [ue];
    return R.default.createElement(G, {
      primary: le,
      secondary: ie,
      buttons: e
    });
  }
  return R.default.createElement(E.FlexColumn, null, R.default.createElement(E.FlexContainer, {
    alignSelf: "stretch",
    align: "center",
    xstyle: B.spam,
    padding: [16, 16, 16, 16],
    gap: 16,
    testid: "spam-banner",
    direction: "vertical"
  }, R.default.createElement(O.WDSTextTitle, null, le), R.default.createElement(D.ButtonGroup, {
    direction: "horizontal",
    style: {
      minWidth: 200
    }
  }, se), ie && R.default.createElement(E.FlexColumn, {
    align: "center"
  }, R.default.createElement(O.WDSTextMuted, null, ie))));
};
var r = require("./923092.js");
var o = require("../app/400436.js");
var l = require("../app/474596.js");
var i = require("../app/58972.js");
var u = require("../app/817649.js");
var s = require("../app/374660.js");
var c = a(require("../app/196554.js"));
var d = require("../app/780549.js");
var f = require("../app/174834.js");
var p = require("../app/660666.js");
var m = require("../app/900316.js");
var h = require("./69943.js");
var g = a(require("../app/395767.js"));
var E = require("../app/690495.js");
var v = require("../app/798202.js");
var _ = require("../app/714574.js");
var y = require("./736371.js");
var C = require("../app/97858.js");
var b = require("../app/114850.js");
var M = a(require("./203824.js"));
var S = a(require("./338695.js"));
var T = require("./945671.js");
var w = require("../app/383296.js");
var A = require("./290562.js");
var P = require("../app/453603.js");
var O = require("../app/180519.js");
var k = require("./647890.js");
var D = require("../app/617425.js");
var I = require("../vendor/548360.js");
var R = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var N = require("../app/379811.js");
var x = a(require("../app/969651.js"));
var L = require("../app/808446.js");
var j = require("../app/655241.js");
const B = {
  spam: {
    textAlign: "qfejxiq4",
    backgroundColor: "rv6u8h8g",
    borderTop: "rj102gmn",
    boxShadow: "o6ajzexr"
  },
  link: {
    display: "f804f6gw"
  }
};
const F = {
  basePrimary: {
    textAlign: "qfejxiq4",
    maxWidth: "culzvsue"
  },
  spamFXMWrapper: {
    borderStart: "q0avyl4y"
  },
  spamFMX: {
    borderTopStartRadius: "nl2xi1ke",
    borderTopEndRadius: "r2bxqa8h",
    borderBottomEndRadius: "jyp9psb5",
    borderBottomStartRadius: "n1nfpgil",
    backgroundColor: "sjffjsx5"
  }
};
function G(e) {
  let {
    primary: t,
    secondary: n,
    buttons: a
  } = e;
  return R.default.createElement(E.FlexColumn, {
    padding: 8,
    xstyle: F.spamFXMWrapper
  }, R.default.createElement(E.FlexRow, {
    alignSelf: "stretch",
    align: "center",
    justify: "all",
    xstyle: F.spamFMX,
    padding: [16, 16, 16, 16],
    gap: 16,
    testid: "spam-banner"
  }, R.default.createElement(E.FlexColumn, null, R.default.createElement(O.WDSTextTitle, null, t), n != null && R.default.createElement(O.WDSTextMuted, null, n)), R.default.createElement(D.ButtonGroup, {
    direction: "horizontal",
    shrink: 0
  }, a)));
}