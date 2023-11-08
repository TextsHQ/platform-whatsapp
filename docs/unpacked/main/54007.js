var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacePile = function (e) {
  let {
    idsOrUrls: t,
    borderColor: n,
    xstyle: a
  } = e;
  return u.default.createElement(o.FlexRow, {
    justify: "end",
    xstyle: a
  }, t.map((e, a) => u.default.createElement(c, {
    key: e,
    idOrUrl: e,
    isFirst: a === 0,
    zIndex: t.length - a,
    borderColor: n
  })));
};
var r = require("../app/23641.js");
var o = require("../app/690495.js");
var l = a(require("../app/145632.js"));
var i = a(require("../app/124928.js"));
var u = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const s = {
  hiddenBehind: {
    marginStart: "pmmx02fg"
  },
  border: {
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54"
  },
  defaultBorderColor: {
    borderTopColor: "ey3feh32",
    borderEndColor: "py694w80",
    borderBottomColor: "p4tffj59",
    borderStartColor: "rmefq1yv"
  },
  urlImage: {
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  }
};
function c(e) {
  let {
    idOrUrl: t,
    isFirst: n,
    zIndex: a,
    borderColor: c
  } = e;
  return u.default.createElement("div", {
    style: {
      zIndex: a
    }
  }, t instanceof i.default ? u.default.createElement(r.DetailImage, {
    id: t,
    size: 24,
    xstyle: [!n && s.hiddenBehind, s.border, c != null ? c : s.defaultBorderColor]
  }) : u.default.createElement(o.FlexRow, {
    xstyle: [!n && s.hiddenBehind, s.border, c != null ? c : s.defaultBorderColor, s.urlImage]
  }, u.default.createElement(l.default, {
    thumb: t,
    size: 24
  })));
}