var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPublishViewRPC = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/250281.js");
var l = require("./170307.js");
var i = require("./788388.js");
var u = require("../app/590062.js");
var s = require("../app/216342.js");
function c() {
  return (c = (0, r.default)(function* (e, t) {
    const n = (0, i.makePublishViewRequest)(e);
    const a = yield (0, o.sendSmaxStanza)(n, t);
    const r = (0, l.parsePublishViewResponseSuccess)(a, n);
    if (r.success) {
      return {
        name: "PublishViewResponseSuccess",
        value: r.value
      };
    }
    throw new u.SmaxParsingFailure((0, s.errorMessageRpcParsing)("PublishView", {
      Success: r
    }));
  })).apply(this, arguments);
}