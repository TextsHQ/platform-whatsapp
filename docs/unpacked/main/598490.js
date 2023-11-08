var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsedChatlistPanel = function () {
  const e = (0, b.default)();
  const t = (0, y.useMemo)(() => new c.default(), []);
  (0, M.useListener)(o.ChatCollection, "change:unreadCount change:active change:pin change:muteExpiration", e);
  const n = o.ChatCollection.filter(e => !e.archive && e.shouldAppearInList).map(e => ({
    itemKey: e.id.toString(),
    chat: e
  }));
  return y.default.createElement(s.default, {
    className: (0, C.default)([T.container, v.uiPadding.top8]),
    flatListControllers: [t]
  }, y.default.createElement(w, {
    data: n,
    renderItem: e => y.default.createElement(A, {
      chat: e.chat,
      isActive: e.chat.active
    }),
    direction: "vertical",
    flatListController: t,
    defaultItemHeight: 56,
    defaultItemWidth: 74,
    disablePointerEventsOnScroll: false
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/351053.js");
var l = require("./628445.js");
var i = require("../app/23641.js");
var u = require("./512938.js");
var s = a(require("./964223.js"));
var c = a(require("./570834.js"));
var d = require("../app/690495.js");
var f = require("../app/154852.js");
var p = require("./229281.js");
var m = require("./273757.js");
var h = require("../app/21645.js");
var g = require("./925436.js");
var E = require("../app/258290.js");
var v = require("../app/676345.js");
var _ = a(require("../app/625903.js"));
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
var C = a(require("../app/156720.js"));
var b = a(require("../app/969651.js"));
var M = require("../app/808446.js");
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const T = {
  container: {
    overflowY: "rpvcun8f",
    overflowX: "ora14ekb"
  },
  item: {
    display: "p357zi0d",
    position: "g0rxnol2",
    width: "mh8l8k0y",
    height: "q1n4p668",
    cursor: "ajgl1lbb",
    textAlign: "qfejxiq4",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j",
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  itemActive: {
    backgroundColor: "bn27j4ou",
    ":hover": {
      backgroundColor: "jic6px1p"
    }
  },
  unreadCount: {
    backgroundColor: "ovhn1urg",
    color: "lyutrhe2",
    position: "lhggkp7q",
    top: "agi2at81",
    end: "b4u6kxhc",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    width: "m0s4cjtr",
    height: "jdwybkuq",
    fontSize: "dsh4tgtl"
  },
  pin: {
    backgroundColor: "f6ipylw5",
    position: "lhggkp7q",
    top: "agi2at81",
    start: "okbql4zm",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    width: "m0s4cjtr",
    height: "jdwybkuq"
  },
  mute: {
    backgroundColor: "f6ipylw5",
    position: "lhggkp7q",
    top: "agi2at81",
    end: "b4u6kxhc",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    width: "m0s4cjtr",
    height: "jdwybkuq"
  }
};
const w = (0, u.FlatListFactory)();
function A(e) {
  let {
    chat: t,
    isActive: n
  } = e;
  const a = (0, y.useRef)(null);
  const o = function () {
    var e = (0, r.default)(function* () {
      yield (0, l.openChat)(t.id);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return y.default.createElement(_.default, {
    ref: a,
    xstyle: [T.item, n && T.itemActive, v.uiPadding.all8, v.uiMargin.horizAuto],
    onClick: o
  }, y.default.createElement(i.DetailImage, {
    xstyle: v.uiMargin.allAuto,
    id: t.id,
    size: i.DetailImageSize.ExtraSmall,
    waitIdle: true
  }), Boolean(t.pin) && y.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: T.pin
  }, y.default.createElement(g.PinnedIcon, null)), t.unreadCount > 0 && y.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: T.unreadCount
  }, function (e) {
    if (e.hasUnreadMention) {
      return y.default.createElement(p.MentionsIcon, {
        width: 12
      });
    } else {
      return Math.min(e.unreadCount, 99);
    }
  }(t)), t.mute.isMuted && t.unreadCount <= 0 && y.default.createElement(d.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: T.mute
  }, y.default.createElement(m.MutedIcon, {
    width: 14,
    height: 14
  })), y.default.createElement(E.HoverTooltip, {
    name: `avatar-${t.id.toString()}`,
    targetRef: a,
    position: E.PopoverPosition.End,
    alignment: E.PopoverAlignment.Center,
    buffer: 16
  }, y.default.createElement(h.Name, {
    chat: t,
    xstyle: (0, f.getFlexStyles)({
      flex: true,
      align: "center",
      gap: 4
    }).xstyle
  })));
}