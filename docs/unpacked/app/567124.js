var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = new MessageChannel();
  const n = t.port1;
  const r = t.port2;
  s.default.respondTo(n);
  i.default.init();
  o.default.setConnectionManager(i.default);
  i.default.connectVia(n);
  e.postMessage((0, a.buildHandshakePayload)(r), [r]);
};
var i = r(require("./838146.js"));
var a = require("./747694.js");
var o = r(require("./367867.js"));
var s = r(require("./503488.js"));