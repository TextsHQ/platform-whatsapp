var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextStatus = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./795139.js");
var o = require("./949878.js");
function s() {
  return (s = (0, i.default)(function* (e, t) {
    const n = new a.GraphQlPerfTracker("text-status");
    n.start();
    n.toUseGraphQL();
    let r = 200;
    let i = 200;
    const s = yield (0, o.mexGetTextStatusList)(e, t);
    const l = s.error;
    if (l != null) {
      if (s.isIQError === true) {
        r = l.errorCode;
        i = -1;
      } else {
        r = 200;
        i = l.errorCode;
      }
    }
    n.stop();
    n.logEvent({
      envelopeResponseStatus: r,
      payloadResponseStatus: i
    });
    __LOG__(2)`getTextStatus:${e.toString()}`;
    return s;
  })).apply(this, arguments);
}