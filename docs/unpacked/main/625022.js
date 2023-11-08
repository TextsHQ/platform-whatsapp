var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupSwitcherIcon = function (e) {
  var t;
  let {
    chat: n
  } = e;
  const a = (t = n.groupMetadata) === null || t === undefined ? undefined : t.parentGroup;
  if (a == null) {
    return null;
  }
  const y = E.default.createElement(E.default.Fragment, null, E.default.createElement(u.DetailImage, {
    id: a,
    size: 28,
    shape: u.DetailImageShape.Squircle,
    xstyle: _.parentGroupImage
  }), E.default.createElement("div", {
    className: (0, v.default)(_.chevronContainer)
  }, E.default.createElement(r.ChevronCircledIcon, {
    xstyle: _.chevron,
    height: 16,
    width: 16
  })));
  return E.default.createElement(s.MenuBarItem, {
    xstyle: [_.container, d.uiPadding.all0],
    buttonStyle: [_.container, d.uiPadding.all0],
    onClick: e => {
      e.stopPropagation();
      new o.CommunityFeatureUsageWamEvent({
        communityId: a.toString(),
        communityUiAction: p.COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.ENTRY,
        communityUiFeature: m.COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
      }).commit();
      new l.CommunityGroupJourneyEvent({
        action: f.CHAT_FILTER_ACTION_TYPES.SUBGROUP_SWITCHER_CLICK,
        surface: h.SURFACE_TYPE.CHAT,
        chat: n
      }).commit();
      c.ModalManager.open(E.default.createElement(i.default, {
        chat: n
      }));
    },
    title: g.fbt._("Subgroup switcher", null, {
      hk: "3QHbeq"
    }),
    testid: "subgroup-switcher-button",
    icon: y
  });
};
var r = require("./13982.js");
var o = require("./531359.js");
var l = require("../app/359198.js");
var i = a(require("./15283.js"));
var u = require("../app/23641.js");
var s = require("./526795.js");
var c = require("../app/114850.js");
var d = require("../app/676345.js");
var f = require("../app/571444.js");
var p = require("./276081.js");
var m = require("./572968.js");
var h = require("../app/965927.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));
var v = a(require("../app/156720.js"));
const _ = {
  container: {
    height: "stnyektq",
    width: "a2hqsskl",
    position: "g0rxnol2"
  },
  parentGroupImage: {
    height: "stnyektq",
    width: "a2hqsskl"
  },
  chevronContainer: {
    position: "lhggkp7q",
    start: "e1b23y9x",
    top: "pafdoqy9",
    height: "ilf8vifs",
    width: "i0x3nve6",
    borderTop: "mkjmy6nk",
    borderEnd: "af84pui9",
    borderBottom: "izjj9xk3",
    borderStart: "o6q0nafl",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  chevron: {
    height: "ppled2lx",
    width: "ln8gz9je",
    color: "b0ssv71y"
  }
};