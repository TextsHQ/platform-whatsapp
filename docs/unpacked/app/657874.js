var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./347387.js");
var s = require("./780549.js");
var l = require("./400116.js");
var u = require("./827747.js");
var c = require("./38878.js");
var d = require("./581263.js");
var p = require("./784898.js");
const f = new o.WapParser("streamErrorParser", e => {
  e.assertTag("stream:error");
  if (!e.hasChild("conflict")) {
    if (e.hasAttr("code")) {
      return {
        type: "code",
        code: e.attrInt("code")
      };
    } else if (e.hasChild("ack")) {
      return {
        type: "ack",
        id: e.child("ack").hasAttr("id") ? e.child("ack").attrString("id") : null
      };
    } else if (e.hasChild("xml-not-well-formed")) {
      return {
        type: "xml-not-well-formed"
      };
    } else {
      __LOG__(3)`Unrecognized stream:error: ${e.toString()}`;
      return {
        type: "other"
      };
    }
  }
  switch (e.child("conflict").attrString("type")) {
    case "replaced":
      return {
        type: "replaced"
      };
    case "device_removed":
    default:
      return {
        type: "device_removed"
      };
  }
});
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = f.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      return Promise.reject(t.error);
    }
    const n = t.success;
    if (n.type === "code" && n.code >= 500 && n.code < 600) {
      if (n.code === 515) {
        (0, a.stopComms)();
        yield (0, l.startLogin)();
        (0, d.startBackend)();
        return Promise.resolve("NO_ACK");
      }
      if (n.code === 516) {
        (0, a.stopComms)();
        yield (0, p.commitDeviceLinkEvent)(516);
        yield (0, l.startLogout)();
        (0, d.startBackend)();
        return Promise.resolve("NO_ACK");
      }
      (0, a.onStreamErrorReceived)();
    } else {
      if (n.type === "device_removed") {
        s.Cmd.onStartingLogout();
        (0, a.stopComms)();
        yield c.Socket.clearCredentialsAndStoredData();
        __LOG__(2)`stream error due to device removed, logging out`;
        (0, u.maybeLogToJestE2eJSConsole)("stream error due to device removed, logging out");
        s.Cmd.logout();
        return Promise.resolve("NO_ACK");
      }
      if (n.type === "replaced") {
        (0, a.stopComms)();
        return Promise.resolve("NO_ACK");
      }
      if (n.type === "xml-not-well-formed") {
        __LOG__(3)`handleStreamError: sent xml not well formed, closing the socket`;
      }
    }
    return Promise.resolve("CLOSE_SOCKET");
  })).apply(this, arguments);
}