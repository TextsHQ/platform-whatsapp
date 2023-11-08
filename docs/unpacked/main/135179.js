Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const n = r.MsgCollection.assertGet(e);
  const s = (0, a.getChat)(n);
  const c = (0, u.useAggregatedView)(o.PinInChatCollection.byChatId, (0, i.toChatWid)(s.id));
  return ((t = c.get((0, o.getPinInChatId)(e))) === null || t === undefined ? undefined : t.pinType) === l.PIN_STATE.PIN;
};
var a = require("../app/163755.js");
var r = require("../app/61113.js");
var o = require("../app/722091.js");
var l = require("../app/96374.js");
var i = require("../app/669050.js");
var u = require("./165428.js");