var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterSubListLastRow = undefined;
exports.NewsletterSubscriberList = function (e) {
  const {
    adminFunnelLogger: t,
    onShareLink: n
  } = e;
  const a = (0, R.default)(() => new g.default());
  const l = (0, R.default)(() => new T.default([], e => e.id.toString()));
  const i = (t, n) => {
    (0, r.default)(function* () {
      const t = yield (0, h.findChat)(n.id, "newsletterFollowerList");
      if ((0, o.getABPropConfigValue)("unified_user_profile_navigation_enabled")) {
        yield c.Cmd.chatInfoDrawer(t, {
          showFullGroupDescription: false,
          scrollToParticipantList: false,
          sourceGroupChatOrNewsletter: (0, w.unproxy)(e.newsletter)
        });
      } else if (yield c.Cmd.openChatFromUnread(t)) {
        f.ComposeBoxActions.focus(t);
      }
    })().catch(() => {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][handleContactClick] Failed to open contact/chat for contact ${n.id}`;
      SEND_LOGS("newsletter-failed-to-open-contact", 1, "newsletter");
    });
  };
  const p = I.default.createElement(S.SearchIcon, {
    color: A.SvgColorProp.SECONDARY
  });
  const {
    newsletterMetadata: m
  } = e.newsletter;
  const E = (m == null ? undefined : m.size) != null ? (0, d.getNewsletterFollowersText)(m.size, true) : null;
  const [v, _] = (0, N.default)(e.newsletter, b.NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT, O.ValidCachedNewsletterSubscriberKeys.LIMITED, true);
  const x = v.map(e => {
    let {
      contact: t,
      role: n
    } = e;
    return {
      itemKey: t.id.toString(),
      contact: t,
      height: 68,
      role: n
    };
  });
  l.current.init(v.map(e => {
    let {
      contact: t
    } = e;
    return t;
  }));
  const L = () => {
    t.logEvent(k.CHANNEL_ADMIN_ACTION.SEARCH_FOLLOWER);
    y.ModalManager.open(I.default.createElement(M.default, {
      newsletter: e.newsletter
    }), {
      transition: "modal-flow"
    });
  };
  const B = _ ? I.default.createElement(s.default, {
    numMore: v.length,
    onClick: L,
    fromNewsletter: true,
    viewAll: true
  }) : null;
  return I.default.createElement(u.ChatInfoDrawerListSection, {
    testid: "newsletter-info-follower-list",
    title: E,
    subtitle: p,
    xstyle: P.uiMargin.top10,
    titleOnClick: L
  }, I.default.createElement(F, {
    onShareLink: n
  }), I.default.createElement(C.NavigableFlatList, {
    ariaLabel: D.fbt._("Follower List: {follower-size}", [D.fbt._param("follower-size", E)], {
      hk: "2OOiPP"
    }),
    flatListController: a.current,
    listData: x,
    onRenderItem: e => I.default.createElement(G, {
      active: l.current,
      subscriberData: e,
      handleContactClick: i
    }),
    selection: l.current,
    rotateList: true
  }), B, I.default.createElement(j, {
    textAlign: "start",
    text: (0, d.getFollowersOnlyInYourContactsText)()
  }));
};
exports.YouArentVisibleToYourFollowersLabel = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = a(require("./991370.js"));
var i = require("./822652.js");
var u = require("./464659.js");
var s = a(require("./831584.js"));
var c = require("../app/780549.js");
var d = require("./949359.js");
var f = require("../app/877171.js");
var p = require("../app/660666.js");
var m = require("../app/305521.js");
var h = require("../app/581354.js");
var g = a(require("./570834.js"));
var E = require("../app/690495.js");
var v = require("../app/81644.js");
var _ = require("./406506.js");
var y = require("../app/114850.js");
var C = require("./164406.js");
var b = require("./396802.js");
var M = a(require("./661991.js"));
var S = require("../main-chunk/447514.js");
var T = a(require("../app/237889.js"));
var w = require("../app/163139.js");
var A = require("../app/220584.js");
var P = require("../app/676345.js");
var O = require("./803214.js");
var k = require("./269430.js");
var D = require("../vendor/548360.js");
var I = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var R = a(require("../app/637660.js"));
var N = a(require("./637782.js"));
const x = {
  italic: {
    fontStyle: "h432zind"
  },
  copyLink: {
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    height: "lniyxyh2",
    width: "qssinsw9",
    backgroundColor: "kaocmfqa"
  },
  lastRow: {
    width: "ln8gz9je",
    borderTopWidth: "gofg5ll1",
    borderTopStyle: "d1poss59",
    borderTopColor: "jsv98j9i"
  },
  center: {
    textAlign: "qfejxiq4"
  },
  start: {
    textAlign: "ljrqcn24"
  },
  lastRowLabel: {
    color: "pm5hny62",
    width: "ln8gz9je",
    fontSize: "f8jlpxt4"
  },
  copyIcon: {
    color: "octy2vkd"
  }
};
const L = (0, i.ContactFactory)();
const j = e => {
  let {
    textAlign: t,
    text: n
  } = e;
  return I.default.createElement(E.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: [P.uiPadding.vert16, x.lastRow, x[t]]
  }, I.default.createElement(m.EmojiText, {
    direction: "auto",
    text: n,
    titlify: true,
    xstyle: [x.lastRowLabel, P.uiPadding.horiz16]
  }));
};
exports.NewsletterSubListLastRow = j;
const B = () => I.default.createElement(m.EmojiText, {
  direction: "auto",
  titlify: true,
  breakWord: true,
  xstyle: x.italic,
  text: (0, d.getMeContactLabelChannelText)()
});
function F(e) {
  let {
    onShareLink: t
  } = e;
  return I.default.createElement(v.HotKeys, {
    onClick: t
  }, I.default.createElement(l.default, {
    contextEnabled: () => false,
    focusable: true,
    image: I.default.createElement(E.FlexColumn, {
      xstyle: x.copyLink,
      align: "center",
      justify: "center"
    }, I.default.createElement(_.LinkIcon, {
      xstyle: x.copyIcon
    })),
    primary: I.default.createElement(m.EmojiText, {
      direction: "auto",
      titlify: true,
      ellipsify: true,
      inlineblock: true,
      text: (0, d.getInviteViaLinkText)()
    }),
    theme: "chat-info"
  }));
}
function G(e) {
  let {
    subscriberData: t,
    handleContactClick: n,
    active: a
  } = e;
  if (t.contact == null) {
    return null;
  } else {
    return I.default.createElement(L, {
      contact: t.contact,
      active: a,
      theme: "chat-info",
      newsletterMembershipType: t.role,
      onClick: n,
      secondary: (0, p.getIsMe)(t.contact) ? I.default.createElement(B, null) : null
    });
  }
}
exports.YouArentVisibleToYourFollowersLabel = B;