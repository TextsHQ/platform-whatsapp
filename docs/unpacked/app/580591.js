Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyConnectionChangeFactory = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15000;
  const r = {
    timeoutID: null,
    connectionStatus: "disconnected",
    optimismLevel: "optimist"
  };
  const i = () => {
    const {
      optimismLevel: e,
      connectionStatus: i
    } = r;
    if (e === "optimist") {
      r.timeoutID = setTimeout(() => {
        r.optimismLevel = "realist";
        t(i);
      }, n);
    } else {
      t(i);
    }
  };
  return n => {
    r.connectionStatus = n;
    if (n === "disconnected" || n === "in_handshake") {
      i();
    } else {
      if (r.timeoutID != null) {
        clearTimeout(r.timeoutID);
        r.timeoutID = null;
      }
      t(n);
    }
    e(n);
  };
};