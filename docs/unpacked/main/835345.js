var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotCommandResult = function (e) {
  const {
    command: t,
    query: n,
    selected: a,
    imageWid: s,
    onMouseDown: c,
    onMouseEnter: d,
    onMouseUp: f
  } = e;
  const {
    name: p,
    description: m
  } = t;
  const h = p.slice(n.length);
  return u.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [r.default.selected]: a,
      [r.default.result]: true
    }),
    onMouseDown: c,
    onMouseUp: f,
    onMouseEnter: d
  }, s != null && u.default.createElement("div", {
    className: r.default.image
  }, u.default.createElement(l.DetailImage, {
    id: s,
    size: 32
  })), u.default.createElement(i.EmojiText, {
    className: r.default.commandPrefix,
    text: n
  }), u.default.createElement(i.EmojiText, {
    className: r.default.commandSuffix,
    text: h
  }), u.default.createElement(i.EmojiText, {
    className: r.default.desc,
    testid: "bot-command-description",
    ellipsify: true,
    text: m
  }));
};
var r = a(require("./459208.js"));
var o = require("../app/396574.js");
var l = require("../app/23641.js");
var i = require("../app/305521.js");
var u = a(require("../vendor/667294.js"));