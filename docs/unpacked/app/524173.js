var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./417405.js");
var o = require("./632157.js");
var s = require("./368170.js");
let l = false;
const u = (0, i.default)(() => l = false, 500);
function c() {
  const e = new Uint8Array(16);
  self.crypto.getRandomValues(e);
  return (0, a.encodeB64)(e);
}
var d = {
  id() {
    const e = require("./757453.js");
    let t = e.getBrowserId();
    return t || (t = c(), e.setBrowserId(t), t);
  },
  persistentExpiringId() {
    const e = require("./757453.js");
    const t = e.getPersistentExpiringId();
    if (t != null) {
      if (!((0, o.unixTime)() - t.ts >= 7776000)) {
        return t.value;
      }
    }
    const r = {
      ts: (0, o.unixTime)(),
      value: c()
    };
    e.setPersistentExpiringId(r);
    return r.value;
  },
  info() {
    const e = s.UA.parser.getResult();
    return {
      os: e.os.name,
      version: e.os.version,
      name: e.browser.name,
      ua: e.browser.name + " " + e.browser.version
    };
  },
  hardRefresh(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    this.promptUnloadGuards++;
    if (e) {
      require("./173077.js").setNoTakeover(true);
    }
    location.reload(t);
  },
  startDownloading() {
    l = true;
    u();
  },
  clearDownloading() {
    l = false;
  },
  isDownloading: () => l,
  promptUnloadGuards: 0,
  open(e) {
    window.open(e, "_blank", "noopener,noreferrer");
  }
};
exports.default = d;