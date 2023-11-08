Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = (0, l.useAggregatedView)(a.PinInChatCollection.byChatId, (0, o.toChatWid)(e));
  const i = (0, r.getMaybeMeUser)();
  const u = [];
  t.forEach(e => {
    const t = n.get((0, a.getPinInChatId)(e));
    if (t != null && t.sender.equals(i)) {
      u.push(t);
    }
  });
  return u;
};
var a = require("../app/722091.js");
var r = require("../app/459857.js");
var o = require("../app/669050.js");
var l = require("./165428.js");