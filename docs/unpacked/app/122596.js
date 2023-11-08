var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./33299.js");
function o() {
  return (o = (0, i.default)(function* (e, t) {
    __LOG__(2)`fieldStatsUpload:sendSendBufferRPC start`;
    const n = yield (0, a.sendSendBufferRPC)({
      addT: t,
      bufferMixinArgs: {
        addElementValue: e
      }
    });
    let r;
    __LOG__(2)`fieldStatsUpload:sendSendBufferRPC end`;
    if (n.name === "SendBufferResponseSuccess") {
      __LOG__(2)`fieldStatsUpload:sendSendBufferRPC SendBufferResponseSuccess`;
      return Promise.resolve();
    }
    if (n.name === "SendBufferResponseErrorNoRetry") {
      r = n.value.errorIQErrorBadRequestOrNotAcceptableOrFeatureNotImplementedMixinGroup.value;
    } else {
      n.name;
      r = n.value.errorIQErrorServiceUnavailableMixin;
    }
    const {
      code: i,
      text: o
    } = r;
    return {
      errorCode: parseInt(i, 10),
      errorText: o
    };
  })).apply(this, arguments);
}