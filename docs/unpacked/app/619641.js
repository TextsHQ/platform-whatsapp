var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMediaExistence = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./102645.js");
var o = require("./708761.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    yield e.waitForPhoneUpload();
    if (!e.mediaObject) {
      __LOG__(4, undefined, new Error(), true)`checkExistence msg without mediaObject, id: ${e.id.toString()} type: ${e.type}`;
      return void SEND_LOGS("media-fault: checkExistence msg without mediaObject");
    }
    yield (0, a.checkExistence)({
      mimetype: e.mimetype,
      mediaObject: e.mediaObject,
      mediaType: (0, o.getMsgMediaType)(e)
    });
  })).apply(this, arguments);
}