var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    onClick: n
  } = e;
  const [a, h, g, E] = (0, p.useMsgValues)(t.id, [c.getList, c.getIsSentByMe, u.getDir, c.getProductListHeaderImage]);
  const [v, _] = (0, m.default)(n);
  if (a == null) {
    return null;
  }
  const y = E != null ? f.default.createElement("div", {
    alt: "",
    className: o.default.media,
    style: {
      backgroundImage: `url(${(0, s.convertToDataURI)(E)})`
    }
  }) : null;
  const C = f.default.createElement("div", {
    className: o.default.title
  }, f.default.createElement(i.EmojiText, {
    text: a.title,
    ellipsify: true
  }));
  const b = d.fbt._({
    "*": "{count} items",
    _1: "1 item"
  }, [d.fbt._plural(t.productListItemCount || 0, "count")], {
    hk: "2j0nBZ"
  });
  const M = f.default.createElement(i.EmojiText, {
    text: b,
    direction: g,
    ellipsify: true
  });
  const S = (0, l.classnamesConvertMeToStylexPlease)({
    [o.default.bubbleOut]: h,
    [o.default.preview]: true
  });
  return f.default.createElement("div", (0, r.default)({}, _, {
    className: S,
    ref: v
  }), y, f.default.createElement("div", {
    className: o.default.body
  }, C, f.default.createElement("div", {
    className: o.default.description
  }, M)));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("./303229.js"));
var l = require("../app/396574.js");
var i = require("../app/305521.js");
var u = require("../app/163755.js");
var s = require("../app/787187.js");
var c = require("../app/787742.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
var p = require("./871210.js");
var m = a(require("../app/83233.js"));