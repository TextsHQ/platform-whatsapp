var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectedPillButtons = function (e) {
  let {
    pills: t,
    currentlySelected: n,
    onChange: a
  } = e;
  if (t.length < 2) {
    return u.default.createElement(u.default.Fragment, null);
  }
  return u.default.createElement(o.FlexRow, null, t.map((e, r) => u.default.createElement(d, {
    key: `connected-pill-button-${e.id.toString()}`,
    onClick: () => a(e.id),
    isSelected: e.id === n,
    title: e.title,
    xstyle: [r === 0 && c.first, r !== t.length - 1 && c.middle, r === t.length - 1 && c.last]
  })));
};
var r = require("../app/731971.js");
var o = require("../app/690495.js");
var l = require("../app/676345.js");
var i = a(require("../app/625903.js"));
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  isSelected: {
    color: "al27ra41"
  },
  singlePill: {
    minWidth: "acx74rnj",
    height: "lniyxyh2",
    borderTopColor: "mwjjlz2f",
    borderEndColor: "h4gw5z6f",
    borderBottomColor: "obwyex30",
    borderStartColor: "k8kh9t68",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54",
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu",
    fontSize: "f8jlpxt4",
    whiteSpace: "le5p0ye3"
  },
  isSelectedBackground: {
    backgroundColor: "iz3n58pu"
  },
  middle: {
    marginEnd: "hjr9v96k"
  },
  first: {
    borderTopStartRadius: "g130k69c",
    borderTopEndRadius: "hsk1pqkj",
    borderBottomEndRadius: "e3yfz9gx",
    borderBottomStartRadius: "kfr1vweg"
  },
  last: {
    borderTopStartRadius: "bi2mdrpt",
    borderTopEndRadius: "k1a7joe8",
    borderBottomEndRadius: "dc5qina8",
    borderBottomStartRadius: "a0vc5f8u"
  }
};
function d(e) {
  let {
    title: t,
    isSelected: n,
    onClick: a,
    xstyle: d
  } = e;
  return u.default.createElement(i.default, {
    xstyle: [c.singlePill, d, n && c.isSelectedBackground],
    onClick: a
  }, u.default.createElement(o.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: l.uiMargin.horiz6
  }, n && u.default.createElement(r.CheckmarkIcon, {
    width: 18,
    height: 18,
    xstyle: [l.uiMargin.end7, c.isSelected]
  }), u.default.createElement("span", {
    className: (0, s.default)(n && c.isSelected)
  }, t)));
}