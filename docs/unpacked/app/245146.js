var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatThreadLoggingMetadataLocalStorage = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./673168.js");
exports.ChatThreadLoggingMetadataLocalStorage = class {
  setOffset(e) {
    return (0, i.default)(function* () {
      yield (0, o.setChatThreadLoggingOffset)(e);
      return true;
    })();
  }
  getOffset() {
    return Promise.resolve((0, o.getChatThreadLoggingOffset)());
  }
  setSecret(e) {
    return (0, i.default)(function* () {
      yield (0, o.setChatThreadLoggingSecretB64)((0, a.encodeB64)(e));
      return true;
    })();
  }
  getSecret() {
    return (0, i.default)(function* () {
      const e = yield (0, o.getChatThreadLoggingSecretB64)();
      if (e == null) {
        return null;
      } else {
        return (0, a.decodeB64)(e);
      }
    })();
  }
  setLastUploadedStartTs(e) {
    return (0, i.default)(function* () {
      yield (0, o.setChatThreadLoggingLastUploadedStartTs)(e);
      return true;
    })();
  }
  getLastUploadedStartTs() {
    return (0, i.default)(function* () {
      const e = yield (0, o.getChatThreadLoggingLastUploadedStartTs)();
      if (e != null) {
        return e;
      } else {
        return 0;
      }
    })();
  }
};