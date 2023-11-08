var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStaticMediaHostName = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/288306.js"));
var o = require("./643235.js");
const s = (0, a.default)((0, i.default)(function* () {
  const {
    selectedHost: e
  } = yield o.mediaHosts.getHostsInfoByBucket({
    preferredBuckets: [1]
  });
  if (e != null) {
    return `https://${e.hostname}`;
  } else {
    return "https://static.whatsapp.net";
  }
}));
exports.getStaticMediaHostName = s;