Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setProtocolBackoffMs = function (e, t) {
  __LOG__(2)`usync: ${e} protocol: ${t}ms backoff started`;
  n.set(e, new Promise(e => self.setTimeout(e, t)).then(() => {
    __LOG__(2)`usync: ${e} protocol: ${t}ms backoff ended`;
  }));
};
exports.waitForBackoff = function (e) {
  if (!function (e) {
    if (e.context === "interactive") {
      return false;
    }
    if (e.protocols.map(e => e.getName()).includes("devices") && (e.context === "message" || e.context === "voip")) {
      return false;
    }
    return true;
  }(e)) {
    return Promise.resolve();
  }
  return Promise.all(e.protocols.map(e => n.get(e.getName())));
};
const n = new Map();