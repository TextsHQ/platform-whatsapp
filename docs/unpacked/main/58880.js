var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/692629.js"));
var o = require("./724047.js");
var l = require("./184385.js");
var i = require("../app/23641.js");
var u = a(require("./908081.js"));
var s = a(require("./324093.js"));
var c = require("./626194.js");
var d = a(require("./969358.js"));
var f = require("../app/305521.js");
var p = require("../app/690495.js");
var m = require("../app/114850.js");
var h = a(require("./327833.js"));
var g = require("../app/180519.js");
var E = require("../app/676345.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var y = a(require("../app/156720.js"));
var C = require("../app/655241.js");
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = {
  container: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "fhf7t426",
    paddingTop: "g4aelcuc",
    paddingEnd: "gv1bfy1o",
    paddingBottom: "kkl0ln3e",
    paddingStart: "qt3358re",
    flexGrow: "ggj6brxn"
  },
  buttonContainer: {
    textAlign: "qfejxiq4"
  },
  header: {
    textAlign: "qfejxiq4",
    lineHeight: "a4ywakfo"
  },
  badge: {
    zIndex: "nbczt5ty",
    bottom: "o7b0nqza",
    end: "d4vkij7k",
    position: "g0rxnol2",
    marginEnd: "febin9tk",
    borderTop: "ryoss9fg",
    borderEnd: "qlyfm0a8",
    borderBottom: "mw2c6hax",
    borderStart: "lz3lu4h7",
    color: "qiqvuef5",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    backgroundColor: "dwekmf2r"
  },
  row: {
    display: "p357zi0d",
    width: "ln8gz9je"
  },
  icon: {
    color: "hp667wtd"
  },
  iconColumn: {
    width: "i94gqilv",
    height: "bmot90v7"
  },
  paragraph: {
    flexGrow: "ggj6brxn"
  }
};
const S = e => {
  let {
    icon: t,
    title: n,
    description: a
  } = e;
  return _.default.createElement("div", {
    className: (0, y.default)([M.row, E.uiMargin.vert15])
  }, _.default.createElement("div", {
    className: (0, y.default)(M.iconColumn)
  }, t), _.default.createElement("div", {
    className: (0, y.default)([M.paragraph, E.uiMargin.horiz16])
  }, _.default.createElement(g.TextParagraph, {
    size: "16",
    weight: "normal",
    color: "primary"
  }, n), _.default.createElement(g.TextParagraph, {
    theme: "muted",
    xstyle: E.uiMargin.top8,
    color: "secondary"
  }, a)));
};
function T(e, t) {
  const n = (0, C.useModelValues)(e.chat, ["newsletterMetadata", "contact"]);
  const a = (0, C.useModelValues)(n.contact, ["id", "name"]);
  const y = (0, C.useOptionalModelValues)(n.newsletterMetadata, ["suspended"]);
  const b = v.fbt._("Delete \"{channel-name}\"?", [v.fbt._param("channel-name", _.default.createElement(f.EmojiText, {
    text: a.name
  }))], {
    hk: "4p3OkV"
  });
  const T = [];
  T.push({
    title: v.fbt._("Channel will be permanently deleted", null, {
      hk: "3IAZZT"
    }),
    description: v.fbt._("You won't be able to recover the channel.", null, {
      hk: "23UiBh"
    }),
    Icon: l.DeleteIcon
  });
  if ((y == null ? undefined : y.suspended) !== true) {
    T.push({
      title: v.fbt._("Followers can see past activity", null, {
        hk: "2bTT5I"
      }),
      description: v.fbt._("Past channel activity will stay on your followers' devices", null, {
        hk: "1d6V8A"
      }),
      Icon: o.ChatHistoryIcon
    });
  }
  const w = (0, _.useCallback)(() => {
    m.ModalManager.open(_.default.createElement(h.default, {
      chat: e.chat
    }));
  }, [e.chat]);
  return _.default.createElement(u.default, {
    ref: t,
    testid: "newsletter-delete-drawer"
  }, _.default.createElement(c.DrawerHeader, {
    title: v.fbt._("Delete channel", null, {
      hk: "4GycDk"
    }),
    type: c.DRAWER_HEADER_TYPE.SMALL,
    onBack: e.onBack,
    onCancel: e.onCancel
  }), _.default.createElement(s.default, null, _.default.createElement(d.default, {
    animation: false,
    xstyle: M.container
  }, _.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center"
  }, _.default.createElement(i.DetailImage, {
    id: e.chat.id,
    size: 104,
    quality: i.DetailImageQuality.High,
    shape: i.DetailImageShape.Circle
  }), _.default.createElement(l.DeleteIcon, {
    width: 24,
    height: 24,
    xstyle: [M.badge, E.uiPadding.all5]
  })), _.default.createElement(p.FlexRow, {
    align: "center",
    justify: "center"
  }, _.default.createElement(g.TextHeader, {
    xstyle: [M.header, E.uiMargin.top16, E.uiMargin.bottom16],
    size: "24",
    color: "dark",
    weight: "medium"
  }, b)), T.map(e => {
    const {
      Icon: t,
      title: n,
      description: a
    } = e;
    return _.default.createElement(S, {
      key: n,
      icon: _.default.createElement(t, {
        width: 24,
        height: 24,
        xstyle: M.icon
      }),
      title: n,
      description: a
    });
  }), _.default.createElement(p.FlexRow, {
    xstyle: [M.buttonContainer, E.uiMargin.top16]
  }, _.default.createElement(r.default, {
    testid: "delete-channel-button",
    type: "solidWarning",
    onClick: w
  }, v.fbt._("Delete", null, {
    hk: "NwsJe"
  }))))));
}
var w = (0, _.forwardRef)(T);
exports.default = w;