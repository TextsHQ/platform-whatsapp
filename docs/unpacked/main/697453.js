var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductInfo = function (e) {
  const {
    trusted: t,
    onClick: n,
    displayType: a
  } = e;
  const [g, E, v, _, y, C] = (0, m.useMsgValues)(e.msg.id, [i.getCurrencyCode, i.getDescription, i.getIsSentByMe, i.getPriceAmount1000, i.getSalePriceAmount1000, i.getTitle]);
  const b = (0, r.isWideDisplay)(a);
  const M = (0, l.Conversation)({
    mentions: e.msg.mentionMap(),
    phoneNumbers: (0, s.getPhoneNumbersFromMsg)(e.msg.unsafe()),
    links: (0, u.getLinksFromMsg)(e.msg.unsafe()),
    selectable: true,
    trusted: t === true,
    fromMe: e.msg.id.fromMe
  });
  let S;
  if (_ != null && g) {
    S = f.default.createElement(c.default, {
      product: {
        currency: g,
        priceAmount1000: _,
        salePriceAmount1000: y
      },
      direction: "inherit",
      selectable: true
    });
  } else if (E) {
    S = f.default.createElement(o.EmojiText, {
      direction: "inherit",
      selectable: true,
      text: E,
      formatters: M,
      textLimit: 70
    });
  }
  return f.default.createElement("div", {
    className: (0, p.default)(h.productInfo, v && !b && h.bubbleOut, (!v || b) && h.bubbleIn),
    onClick: n
  }, f.default.createElement(o.EmojiText, {
    direction: "inherit",
    selectable: true,
    text: C,
    formatters: M,
    ellipsify: true,
    xstyle: h.title
  }), S ? f.default.createElement(d.default, {
    msg: e.msg.unsafe(),
    xstyle: h.subtitle
  }, S) : null);
};
var r = require("../app/356097.js");
var o = require("../app/305521.js");
var l = require("../app/675886.js");
var i = require("../app/787742.js");
var u = require("../app/44118.js");
var s = require("./527530.js");
var c = a(require("./269261.js"));
var d = a(require("./809958.js"));
var f = a(require("../vendor/667294.js"));
var p = a(require("../app/156720.js"));
var m = require("./871210.js");
const h = {
  productInfo: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    paddingTop: "n1yiu2zv",
    paddingEnd: "ft2m32mm",
    paddingBottom: "eb4rp10x",
    paddingStart: "nu34rnf1",
    cursor: "ajgl1lbb",
    borderBottomStartRadius: "cqsf3vkf",
    borderBottomEndRadius: "sfeitywo"
  },
  bubbleIn: {
    backgroundColor: "rrq4r3yd"
  },
  bubbleOut: {
    backgroundColor: "s0eflmyh"
  },
  title: {
    fontSize: "f8jlpxt4"
  },
  subtitle: {
    marginTop: "kiiy14zj",
    fontSize: "dsh4tgtl",
    color: "hp667wtd",
    overflowWrap: "fd365im1"
  }
};