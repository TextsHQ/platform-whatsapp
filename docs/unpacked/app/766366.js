var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetNewsletterMessageUpdatesRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./359613.js");
var s = require("./294881.js");
var l = require("./377665.js");
var u = require("./846349.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetNewsletterMessageUpdatesRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetNewsletterMessageUpdatesResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetNewsletterMessageUpdatesResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetNewsletterMessageUpdatesResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "GetNewsletterMessageUpdatesResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseGetNewsletterMessageUpdatesResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "GetNewsletterMessageUpdatesResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetNewsletterMessageUpdates", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}