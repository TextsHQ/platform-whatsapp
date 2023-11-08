Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocketBridgeApi = undefined;
var a = require("../app/38878.js");
const r = {
  socketLogout(e) {
    let {
      reason: t
    } = e;
    a.Socket.logout(t);
  }
};
exports.SocketBridgeApi = r;