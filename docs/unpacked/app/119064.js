Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChangeNotificationResponseAck = function (e) {
  return (0, i.mergeNotificationClientAckMixin)((0, r.smax)("ack", null), e);
};
var r = require("./758616.js");
var i = require("./462783.js");