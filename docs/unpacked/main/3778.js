var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerCreateButton = function (e) {
  return u.default.createElement(l.default, {
    xstyle: c.button,
    onClick: t => {
      var n;
      if (!((n = e.onClick) === null || n === undefined)) {
        n.call(e, t);
      }
    }
  }, u.default.createElement("div", {
    className: (0, s.default)(c.container, e.theme === "stickerExpressionsPanel" && c.containerExpressionPanels, e.theme !== "stickerExpressionsPanel" && o.uiMargin.top25, e.theme !== "stickerExpressionsPanel" && o.uiMargin.bottom20)
  }, u.default.createElement(r.PlusLargeIcon, {
    xstyle: c.icon
  }), u.default.createElement("span", null, i.fbt._("Create", null, {
    hk: "1lqA1O"
  }))));
};
var r = require("./259414.js");
var o = require("../app/676345.js");
var l = a(require("../app/625903.js"));
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  button: {
    width: "ywgftmbl",
    height: "b1lctrli",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n"
  },
  container: {
    width: "fi5r6efy",
    height: "tl6iuc6d",
    backgroundColor: "f7wxzknn",
    color: "t7i5gvrw",
    fontSize: "ovllcyds",
    borderTop: "oosapc3q",
    borderEnd: "fefz13mk",
    borderBottom: "ob9ouq0z",
    borderStart: "tntx47yo",
    borderTopStartRadius: "g1jn521u",
    borderTopEndRadius: "mrnekr2l",
    borderBottomEndRadius: "wu0i2wpa",
    borderBottomStartRadius: "bbs9k8l5",
    ":hover": {
      transform: "sl8qjjwd"
    },
    transitionProperty: "bo8jc6qi",
    transitionDuration: "slppp3mo",
    transitionTimingFunction: "pu4k07i0",
    willChange: "exvbdj68",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno"
  },
  containerExpressionPanels: {
    width: "mh8l8k0y",
    height: "k45dudtp",
    fontSize: "lak21jic"
  },
  icon: {
    marginBottom: "inww9tbj"
  }
};