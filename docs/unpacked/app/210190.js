var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletedList = function (e) {
  const {
    items: t
  } = e;
  return T.default.createElement("ul", {
    className: (0, M.default)(A.list, m.uiMargin.start24)
  }, t.map((e, t) => T.default.createElement("li", {
    key: t,
    className: (0, M.default)(A.listItem)
  }, e)));
};
exports.MessageCommunityCard = function (e) {
  const {
    title: t,
    subtitle: n,
    body: r,
    footer: b,
    subgroupId: C,
    openNavigation: P = false,
    onFooterClick: O
  } = e;
  let I = null;
  if (e.communityId) {
    I = e.communityId instanceof S.default ? e.communityId : (0, v.createWid)(e.communityId);
  }
  const R = C ? a.ChatCollection.get(C) : null;
  const N = !!R && (0, o.isCommunityAnnouncementGroup)(R);
  const D = !!R && (0, o.isCommunityGeneralGroup)(R);
  let w;
  let L;
  if (!D) {
    w = I ? T.default.createElement(p.DetailImage, {
      id: I,
      shape: p.DetailImageShape.Squircle
    }) : T.default.createElement(d.CommunitySquircleIcon, {
      width: 49,
      height: 49,
      iconXstyle: A.communitySquircle
    });
  }
  if (D) {
    L = T.default.createElement("div", {
      className: (0, M.default)(A.generalChatIconContainer)
    }, T.default.createElement(u.CommunityGeneralChatImage, null));
  } else if (C && !N) {
    L = T.default.createElement(T.default.Fragment, null, T.default.createElement(p.DetailImage, {
      id: C,
      xstyle: m.uiMargin.end8
    }), T.default.createElement(i.ArrowForwardIcon, {
      directional: true,
      xstyle: m.uiMargin.end8
    }));
  }
  const k = T.default.createElement(f.FlexRow, {
    justify: "center",
    align: "center"
  }, L, w);
  const G = T.default.createElement("div", {
    className: (0, M.default)(m.uiMargin.top8, m.uiMargin.bottom12)
  }, T.default.createElement(g.TextHeader, {
    color: "primary",
    weight: "medium",
    level: "3"
  }, t), n != null ? T.default.createElement(g.Text, {
    as: "p",
    size: "13"
  }, n) : null);
  const U = b != null ? T.default.createElement(h.default, {
    xstyle: [A.footerButton, m.uiPadding.all12],
    onClick: e => {
      var t;
      if (I && ((t = _.default.get(I)) === null || t === undefined ? undefined : t.hasJoined())) {
        if (R) {
          new c.CommunityGroupJourneyEvent({
            action: y.CHAT_FILTER_ACTION_TYPES.COMMUNITY_RICH_SYSTEM_MESSAGE_CLICK,
            surface: E.SURFACE_TYPE.CHAT,
            chat: R
          }).commit();
        }
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (O) {
          return O();
        }
        if (P) {
          s.Cmd.openCommunityHome(I);
        } else if ((0, l.communityTabbedInfoEnabled)()) {
          s.Cmd.openCommunityTabbedInfo(I);
        } else {
          s.Cmd.openCommunityHome(I, undefined, true);
        }
      }
    }
  }, T.default.createElement(g.Text, {
    as: "span",
    size: "14",
    weight: "medium"
  }, b)) : null;
  return T.default.createElement(T.default.Fragment, null, T.default.createElement("div", {
    className: (0, M.default)(m.uiPadding.horiz24, m.uiPadding.top12, r && m.uiPadding.bottom16)
  }, k, G, r), U);
};
var i = require("./345260.js");
var a = require("./351053.js");
var o = require("./374660.js");
var s = require("./780549.js");
var l = require("./174834.js");
var u = require("./639839.js");
var c = require("./359198.js");
var d = require("./146281.js");
var p = require("./23641.js");
var f = require("./690495.js");
var _ = r(require("./667845.js"));
var g = require("./180519.js");
var m = require("./676345.js");
var h = r(require("./625903.js"));
var y = require("./571444.js");
var E = require("./965927.js");
var S = r(require("./124928.js"));
var v = require("./669050.js");
var T = r(require("../vendor/667294.js"));
var M = r(require("./156720.js"));
const A = {
  communitySquircle: {
    color: "bk9ojlrj"
  },
  generalChatIconContainer: {
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    height: "fe3aadhc",
    width: "gbtdc75f",
    position: "g0rxnol2"
  },
  footerButton: {
    color: "o2v2jkg7",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    borderTop: "ei53l81b",
    width: "ln8gz9je"
  },
  list: {
    textAlign: "ljrqcn24",
    position: "g0rxnol2"
  },
  listItem: {
    "::before": {
      content: "s8gevp1y",
      start: "rf6ldw2n",
      position: "jiaumjzp"
    }
  }
};