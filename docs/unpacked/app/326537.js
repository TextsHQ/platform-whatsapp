Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msmsgMsgSecretCache = undefined;
var r = require("./780549.js");
const i = new class {
  constructor() {
    this.cache = new Map();
    r.Cmd.on("logout", () => this.clearCache());
  }
  addMsmsgMsgSecretToCache(e, t) {
    this.cache.set(e, t);
  }
  getMsmsgMsgSecretFromCache(e) {
    return this.cache.get(e);
  }
  clearCache() {
    this.cache = new Map();
  }
}();
exports.msmsgMsgSecretCache = i;