var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = function (e) {
  let {
    children: t,
    theme: n = s.Primary,
    icon: a,
    round: r = false,
    testid: o,
    xstyle: d
  } = e;
  return l.default.createElement("div", {
    className: (0, i.default)(u.marker, [s.Primary, s.Pill].includes(n) && u.primary, n === s.Secondary && u.secondary, r && u.round, !r && u.square, n === s.Pill && u.pill, d)
  }, t, l.default.createElement(c, {
    name: a
  }));
};
exports.TagTheme = undefined;
var r = a(require("../app/932325.js"));
var o = require("./407024.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  marker: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    height: "icj6mcig",
    paddingTop: "om7fnf5u",
    paddingEnd: "lnjlmjd6",
    paddingBottom: "i3it5ig8",
    paddingStart: "mc6o24uu",
    fontSize: "lak21jic",
    lineHeight: "gz7w46tb",
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54"
  },
  primary: {
    backgroundColor: "gh2eiktu",
    color: "ed316hig",
    borderTopColor: "oyhj0yr2",
    borderEndColor: "bbryylkj",
    borderBottomColor: "tus15p9f",
    borderStartColor: "cayimkie"
  },
  secondary: {
    backgroundColor: "r7wby6hd",
    color: "jncsylhy",
    borderTopColor: "gd2nkthe",
    borderEndColor: "ffk547it",
    borderBottomColor: "s9qlqkcs",
    borderStartColor: "g4qqiwrf"
  },
  square: {
    borderTopStartRadius: "fe61fa5g",
    borderTopEndRadius: "qj4wrk6p",
    borderBottomEndRadius: "cphhpnv8",
    borderBottomStartRadius: "tfm3omh7"
  },
  round: {
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    minWidth: "j00wzxgm"
  },
  pill: {
    borderTopStartRadius: "lqxn65m8",
    borderTopEndRadius: "aqkazoap",
    borderBottomEndRadius: "o0zo6k6a",
    borderBottomStartRadius: "pcwnqdp4",
    fontWeight: "hnx8ox4h"
  },
  iconStar: {
    transform: "cxnvdhix"
  },
  iconStartRTL: {
    transform: "bqte3on1"
  }
};
const s = require("../vendor/76672.js").Mirrored(["Primary", "Secondary", "Pill"]);
function c(e) {
  let {
    name: t
  } = e;
  switch (t) {
    case "star":
      return l.default.createElement(o.StarIcon, {
        width: 12,
        height: 12,
        xstyle: r.default.isRTL() ? u.iconStartRTL : u.iconStar
      });
    case null:
    case undefined:
      return null;
  }
}
exports.TagTheme = s;