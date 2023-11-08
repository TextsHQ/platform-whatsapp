var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackedCirclesImage = function (e) {
  var t;
  const {
    chat: n,
    selection: a,
    theme: p,
    isHovered: m,
    onClick: h,
    onMouseDown: g
  } = e;
  const [, E] = (0, c.default)(a, n.id.toString());
  const v = p === d.CHAT_HEADER || E;
  const _ = (t = n.groupMetadata) === null || t === undefined ? undefined : t.groupType;
  const y = e => {
    if (e === true) {
      switch (p) {
        case d.CHAT_HEADER:
          return f.borderGrayHeader;
        case d.CHAT_LIST:
          if (v) {
            return f.borderWhiteActive;
          } else if (m) {
            return f.borderWhiteHover;
          } else {
            return f.borderWhite;
          }
      }
    } else {
      switch (p) {
        case d.CHAT_HEADER:
          return [f.borderGrayHeader, f.backgroundGrayHeader];
        case d.CHAT_LIST:
          if (v) {
            return [f.borderWhiteActive, f.backgroundWhiteActive];
          } else if (m) {
            return [f.borderWhiteHover, f.backgroundWhiteHover];
          } else {
            return [f.borderWhite, f.backgroundWhite];
          }
      }
    }
  };
  return u.default.createElement(l.default, {
    testid: "subgroup-identity",
    title: i.fbt._("Other Subgroups", null, {
      hk: "2V8Ecl"
    }),
    xstyle: f.container,
    onMouseDown: g,
    onClick: h
  }, u.default.createElement("div", {
    className: (0, s.default)(f.circle, y(), (() => {
      if (!_) {
        return null;
      }
      switch (_) {
        case o.GroupType.LINKED_SUBGROUP:
          if (v || m) {
            return f.backgroundGrayActive;
          } else {
            return f.backgroundGrayLight;
          }
        case o.GroupType.LINKED_ANNOUNCEMENT_GROUP:
          if (v || m) {
            return f.backgroundGreen;
          } else {
            return f.backgroundGreenLighter;
          }
        default:
          return null;
      }
    })())
  }), u.default.createElement("div", {
    className: (0, s.default)(f.circle, f.moveLeft, y(), (() => {
      if (!_) {
        return null;
      }
      switch (_) {
        case o.GroupType.LINKED_SUBGROUP:
          if (v || m) {
            return f.backgroundGrayDark;
          } else {
            return f.backgroundGray;
          }
        case o.GroupType.LINKED_ANNOUNCEMENT_GROUP:
          if (v || m) {
            return f.backgroundGreenDark;
          } else {
            return f.backgroundGreenLight;
          }
        default:
          return null;
      }
    })())
  }), u.default.createElement("div", {
    className: (0, s.default)(f.moveLeft)
  }, u.default.createElement(r.DetailImage, {
    id: n.id,
    size: 36,
    ephemeralIcon: "conversation-header",
    xstyle: y(true)
  })));
};
exports.SubgroupImageTheme = undefined;
var r = require("../app/23641.js");
var o = require("../app/862159.js");
var l = a(require("../app/625903.js"));
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
var c = a(require("../main-chunk/928361.js"));
const d = require("../vendor/76672.js")({
  CHAT_HEADER: "chat-header",
  CHAT_LIST: "chat-list"
});
exports.SubgroupImageTheme = d;
const f = {
  container: {
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    marginStart: "bx0vhl82",
    marginEnd: "hjr9v96k"
  },
  circle: {
    height: "epwkujcx",
    width: "baeo9xnf",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  backgroundGray: {
    backgroundColor: "gh97vfwp"
  },
  backgroundGrayActive: {
    backgroundColor: "fbq6tem4"
  },
  backgroundGrayLight: {
    backgroundColor: "k6px2m13"
  },
  backgroundGrayDark: {
    backgroundColor: "j8gd1g7w"
  },
  backgroundGreen: {
    backgroundColor: "k4bq6kvk"
  },
  backgroundGreenLight: {
    backgroundColor: "r6jkzfdg"
  },
  backgroundGreenLighter: {
    backgroundColor: "lcw3x5qt"
  },
  backgroundGreenDark: {
    backgroundColor: "sst5o6l9"
  },
  borderGrayHeader: {
    borderTop: "mkjmy6nk",
    borderEnd: "af84pui9",
    borderBottom: "izjj9xk3",
    borderStart: "o6q0nafl"
  },
  backgroundGrayHeader: {
    backgroundColor: "f6ipylw5"
  },
  borderWhite: {
    borderTop: "te2w76pw",
    borderEnd: "lf2f5g3m",
    borderBottom: "im448w36",
    borderStart: "ou0nhrxb"
  },
  backgroundWhite: {
    backgroundColor: "ihvf49ua"
  },
  borderWhiteActive: {
    borderTop: "n7quhhxz",
    borderEnd: "fe0724t5",
    borderBottom: "sh1gyqlg",
    borderStart: "qdxezjgn"
  },
  backgroundWhiteActive: {
    backgroundColor: "i16jpgpt"
  },
  borderWhiteHover: {
    borderTop: "iys7crcf",
    borderEnd: "kwb2ulcm",
    borderBottom: "jjt3y76m",
    borderStart: "dcbm44dr"
  },
  backgroundWhiteHover: {
    backgroundColor: "amaavye1"
  },
  moveLeft: {
    marginStart: "rw274qym"
  }
};