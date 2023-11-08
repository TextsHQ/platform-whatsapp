var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrivacyModeFromModel = function (e) {
  if (!i.default.isUser(e)) {
    return;
  }
  const t = require("./177938.js").ContactCollection.get(e);
  if (t == null) {
    return undefined;
  } else {
    return t.privacyMode;
  }
};
var i = r(require("./124928.js"));