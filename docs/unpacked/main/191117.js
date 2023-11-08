Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reconnect = undefined;
var a = require("../app/38878.js");
var r = require("../app/973981.js");
const o = new class {
  constructor() {
    this.isReconnecting = false;
    this.reconnectIfDisconnected = () => {
      if (!(this.isReconnecting || r.Stream.displayInfo !== r.StreamInfo.OFFLINE)) {
        this.isReconnecting = true;
        a.Socket.summary();
        self.setTimeout(() => this.isReconnecting = false, 3000);
      }
    };
  }
}().reconnectIfDisconnected;
exports.reconnect = o;