var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  (0, o.default)(e.type === r.MSG_TYPE.POLL_CREATION, "toPollCreationMsgData: Message is not a valid poll creation message object");
  return e;
};
var r = require("../app/373070.js");
var o = a(require("../vendor/441143.js"));