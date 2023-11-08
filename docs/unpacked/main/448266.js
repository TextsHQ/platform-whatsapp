var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSCellFrame = undefined;
var r = require("../app/690495.js");
var o = a(require("../app/469733.js"));
var l = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const i = {
  container: {
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    position: "g0rxnol2",
    boxSizing: "cm280p3y"
  },
  middleContainer: {
    flex: "mx771qyo",
    alignItems: "elxb2u3l",
    justifyContent: "ac2vgrno",
    boxSizing: "cm280p3y"
  },
  primaryContainer: {
    alignItems: "gndfcl4n"
  },
  grow: {
    flexGrow: "ggj6brxn"
  },
  stretch: {
    alignItems: "elxb2u3l"
  },
  borderBox: {
    boxSizing: "cm280p3y"
  },
  ellipsis: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae"
  },
  primaryRight: {
    paddingStart: "nu34rnf1"
  },
  secondaryRight: {
    paddingStart: "nu34rnf1"
  }
};
const u = {
  container: {
    minHeight: "gc15jzxb"
  },
  detailLeft: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd",
    paddingStart: "nu34rnf1",
    paddingEnd: "ft2m32mm",
    minWidth: "mhp1pqu9"
  },
  middleContainer: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd"
  },
  middleContainerNoDetailLeft: {
    paddingStart: "nu34rnf1"
  },
  middleContainerNoDetailRight: {
    paddingEnd: "ft2m32mm"
  },
  detailRight: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd",
    paddingStart: "nu34rnf1",
    paddingEnd: "ft2m32mm",
    minWidth: "mhp1pqu9"
  }
};
const s = {
  container: {
    minHeight: "im5280se"
  },
  detailLeft: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    minWidth: "byvcucqk"
  },
  middleContainer: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd"
  },
  middleContainerNoDetailLeft: {
    paddingStart: "lyvj5e2u"
  },
  middleContainerNoDetailRight: {
    paddingEnd: "l9g3jx6n"
  },
  detailRight: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    minWidth: "byvcucqk"
  }
};
const c = {
  container: {
    minHeight: "lignnmtc"
  },
  detailLeft: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    minWidth: "nucpke6t"
  },
  middleContainer: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd"
  },
  middleContainerNoDetailLeft: {
    paddingStart: "lyvj5e2u"
  },
  middleContainerNoDetailRight: {
    paddingEnd: "l9g3jx6n"
  },
  detailRight: {
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    minWidth: "nucpke6t"
  }
};
exports.WDSCellFrame = e => {
  var t;
  var n;
  var a;
  var d;
  var f;
  var p;
  let m;
  let {
    size: h,
    detailLeft: g,
    detailRight: E,
    primary: v,
    primaryRight: _,
    secondary: y,
    secondaryRight: C,
    alignDetailRight: b = "center",
    justifyDetailRight: M = "center",
    containerXStyle: S,
    detailLeftXStyle: T,
    middleContainerXStyle: w,
    primaryXStyle: A,
    primaryRightXStyle: P,
    secondaryXStyle: O,
    secondaryRightXStyle: k,
    detailRightXStyle: D
  } = e;
  switch (h) {
    case "large":
      m = c;
      break;
    case "medium":
      m = s;
      break;
    case "small":
      m = u;
  }
  return l.default.createElement(r.FlexRow, {
    align: "center",
    xstyle: [i.borderBox, i.grow, i.stretch, (t = m) === null || t === undefined ? undefined : t.container, S].flat()
  }, Boolean(g) && l.default.createElement(r.FlexRow, {
    shrink: 0,
    xstyle: [(n = m) === null || n === undefined ? undefined : n.detailLeft, T],
    justify: "center",
    align: "center"
  }, g), l.default.createElement(r.FlexColumn, {
    grow: 1,
    shrink: 1,
    basis: "auto",
    xstyle: [i.middleContainer, g == null && ((a = m) === null || a === undefined ? undefined : a.middleContainerNoDetailLeft), E == null && ((d = m) === null || d === undefined ? undefined : d.middleContainerNoDetailRight), (f = m) === null || f === undefined ? undefined : f.middleContainer, w]
  }, l.default.createElement(r.FlexRow, {
    xstyle: i.primaryContainer
  }, l.default.createElement(o.default, {
    grow: 1,
    xstyle: [i.ellipsis, i.borderBox, A]
  }, v), Boolean(_) && l.default.createElement(o.default, {
    shrink: 0,
    xstyle: [i.primaryRight, i.ellipsis, i.borderBox, P]
  }, _)), Boolean(y) && l.default.createElement(r.FlexRow, null, l.default.createElement(o.default, {
    grow: 1,
    xstyle: [i.ellipsis, i.borderBox, O]
  }, y), Boolean(C) && l.default.createElement(o.default, {
    shrink: 0,
    xstyle: [i.secondaryRight, i.ellipsis, i.borderBox, k]
  }, C))), Boolean(E) && l.default.createElement(r.FlexRow, {
    shrink: 0,
    justify: M,
    align: b,
    xstyle: [(p = m) === null || p === undefined ? undefined : p.detailRight, D]
  }, E));
};