var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDescription = g;
exports.OrderPreview = function (e) {
  const {
    msg: t,
    onClick: n,
    theme: a
  } = e;
  const {
    thumbnail: r
  } = t;
  const o = (0, i.getIsSentByMe)(t);
  let u;
  if (r) {
    u = d.default.createElement(l.FlexItem, {
      xstyle: a === "quoted" && m.quotedMedia,
      style: {
        width: "72px",
        height: "72px",
        backgroundSize: "cover",
        borderRadius: "var(--radius-thumb)",
        backgroundImage: `url("data:image/jpeg;base64,${r}")`
      }
    });
  }
  return d.default.createElement("div", {
    className: (0, f.default)(m.preview, s.uiMargin.all6, !o && a !== "quoted" && m.bubbleIn, o || a === "quoted" && m.bubbleOut),
    onClick: n
  }, u, d.default.createElement(l.FlexColumn, {
    justify: "center",
    xstyle: [m.body, s.uiPadding.vert6, s.uiPadding.horiz10, a === "quoted" && m.quotedBody, a === "quoted" && s.uiPadding.all0]
  }, d.default.createElement(h, {
    msg: t
  }), d.default.createElement(g, {
    msg: t
  })));
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
}(require("../app/27578.js"));
var o = require("../app/305521.js");
var l = require("../app/690495.js");
var i = require("../app/787742.js");
var u = require("./142792.js");
var s = require("../app/676345.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));
var f = a(require("../app/156720.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = {
  quotedMedia: {
    order: "e3u7tipa",
    width: "b6qzmhfs",
    height: "qmp0wt83"
  },
  body: {
    boxSizing: "cm280p3y",
    flexGrow: "ggj6brxn",
    maxHeight: "f8xtxj1z",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    lineHeight: "idwf4z32"
  },
  quotedBody: {
    order: "ol2oezaz"
  },
  titleIcon: {
    width: "dh5rsm73",
    height: "hpdpob1j",
    pointerEvents: "m62443ks",
    fill: "i5kmc8rw"
  },
  titleIconSvg: {
    width: "dh5rsm73",
    height: "hpdpob1j"
  },
  title: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    color: "tl2vja3b",
    textOverflow: "lhj4utae"
  },
  description: {
    flexShrink: "ttu8nud2",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "dsh4tgtl",
    color: "hp667wtd",
    textOverflow: "lhj4utae"
  },
  preview: {
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    alignItems: "gndfcl4n",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "ovllcyds",
    lineHeight: "kvdvyush",
    color: "k2bacm8l",
    cursor: "ajgl1lbb",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf"
  },
  bubbleIn: {
    backgroundColor: "rrq4r3yd"
  },
  bubbleOut: {
    backgroundColor: "s0eflmyh"
  }
};
function h(e) {
  const {
    msg: t
  } = e;
  const n = c.fbt._({
    "*": "{count} items",
    _1: "1 item"
  }, [c.fbt._plural(t.itemCount, "count")], {
    hk: "2EbV2t"
  });
  return d.default.createElement(l.FlexRow, {
    xstyle: [m.title, s.uiMargin.bottom2]
  }, d.default.createElement(u.ShoppingCartIcon, {
    xstyle: [m.titleIcon, s.uiMargin.end2],
    iconXstyle: m.titleIconSvg,
    displayInline: true
  }), d.default.createElement(o.EmojiText, {
    text: n
  }));
}
function g(e) {
  const {
    msg: t,
    showMessage: n
  } = e;
  const {
    totalAmount1000: a,
    totalCurrencyCode: i
  } = t;
  let u = null;
  if (a != null && i != null && i !== "") {
    u = d.default.createElement(o.EmojiText, {
      text: c.fbt._("{total-currency-amount} (estimated total)", [c.fbt._param("total-currency-amount", r.formatAmount1000(i, a))], {
        hk: "2uP0rC"
      })
    });
  }
  const s = n === true ? d.default.createElement(o.EmojiText, {
    text: t.message
  }) : null;
  return d.default.createElement("div", null, d.default.createElement(l.FlexRow, {
    xstyle: m.description
  }, u), s);
}