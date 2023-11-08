var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSubscribeToLiveUpdatesRPC = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./367307.js");
var i = require("./517707.js");
var u = require("./937677.js");
var s = require("./497006.js");
var c = require("../app/590062.js");
var d = require("../app/216342.js");
function f() {
  return (f = (0, r.default)(function* (e, t) {
    const n = (0, s.makeSubscribeToLiveUpdatesRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, u.parseSubscribeToLiveUpdatesResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "SubscribeToLiveUpdatesResponseSuccess",
        value: r.value
      };
    }
    const f = (0, l.parseSubscribeToLiveUpdatesResponseClientError)(a, n);
    if (f.success) {
      return {
        name: "SubscribeToLiveUpdatesResponseClientError",
        value: f.value
      };
    }
    const p = (0, i.parseSubscribeToLiveUpdatesResponseServerError)(a, n);
    if (p.success) {
      return {
        name: "SubscribeToLiveUpdatesResponseServerError",
        value: p.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("SubscribeToLiveUpdates", {
      Success: r,
      ClientError: f,
      ServerError: p
    }));
  })).apply(this, arguments);
}