var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionsPanel = function (e) {
  let {
    msgId: t,
    onSelection: n
  } = e;
  const a = (0, s.default)(t);
  return u.default.createElement(i.default.Provider, {
    value: a
  }, u.default.createElement(r.EmojiPanel, {
    onEmoji: e => {
      let t = e;
      if (e === a) {
        t = l.REVOKED_REACTION_TEXT;
      }
      n(t);
    },
    displayLocation: o.DisplayLocation.Reactions
  }));
};
var r = require("./637624.js");
var o = require("./833654.js");
var l = require("../app/911600.js");
var i = a(require("./283547.js"));
var u = a(require("../vendor/667294.js"));
var s = a(require("./84078.js"));