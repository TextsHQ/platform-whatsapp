Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveSyncPrivacySettingRPC = function (e) {
  const t = (0, r.parseSyncPrivacySettingRequest)(e);
  if (!t.success) {
    throw new i.SmaxParsingFailure((0, a.errorMessageRpcParsing)("SyncPrivacySetting", {
      Request: t
    }));
  }
  return {
    parsedRequest: t.value
  };
};
var r = require("./505212.js");
var i = require("./590062.js");
var a = require("./216342.js");