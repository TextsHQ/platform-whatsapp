var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeOptInStatusForExternalWebBeta = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./266485.js");
var s = require("./359987.js");
var l = require("./581263.js");
var u = require("./757453.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    if ((yield (0, u.getWhatsAppWebExternalBetaJoinedIdb)()) !== e) {
      yield Promise.all([(0, u.setWhatsAppWebExternalBetaDirtyBitIdb)(true), (0, u.setWhatsAppWebExternalBetaJoinedIdb)(e)]);
      yield d();
      (0, s.frontendFireAndForget)("changeOptInStatusForExternalWebBeta", {});
    }
  })).apply(this, arguments);
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* () {
    __LOG__(2)`WAWebExternalBetaApi: Restarting backend`;
    (0, a.stopComms)();
    yield (0, l.startWebComms)();
    yield (0, a.startHandlingRequests)();
    if (yield (0, u.getWhatsAppWebExternalBetaDirtyBitIdb)()) {
      __LOG__(2)`WAWebExternalBetaApi: Syncing AB Props after changing Web Beta opt-in status`;
      yield (0, o.syncABPropsTask)();
      yield (0, u.setWhatsAppWebExternalBetaDirtyBitIdb)(false);
    }
  })).apply(this, arguments);
}