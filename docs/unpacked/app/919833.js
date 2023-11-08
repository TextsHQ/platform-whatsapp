Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgentCollection = undefined;
var r = require("./998667.js");
var i = require("./959006.js");
var a = require("./86417.js");
var o = require("./392125.js");
var s = require("./445729.js");
class l extends o.BaseCollection {
  constructor() {
    super();
    this._agentsByDeviceId = new Map();
    this.triggerDeviceIdMapUpdate = () => {
      this._agentsByDeviceId = new Map();
      this.getModelsArray().forEach(e => {
        this._agentsByDeviceId.set(e.deviceId, e);
      });
    };
    this.on("remove reset", this.triggerDeviceIdMapUpdate);
    s.Conn.on("change:pushname", () => {
      const e = this.getModelsArray().filter(e => e.deviceId === a.PRIMARY_DEVICE_ID)[0];
      if (e != null) {
        e.set("name", (0, a.getFormattedAgentNameForAgent)(e));
      }
    });
  }
  add(e, t) {
    const n = super.add(e, t);
    this.triggerDeviceIdMapUpdate();
    (0, r.checkOrphanAgents)(n.map(e => {
      var t;
      if ((t = e == null ? undefined : e.id) !== null && t !== undefined) {
        return t;
      } else {
        return "";
      }
    }));
    return n;
  }
  getByDeviceId(e) {
    return this._agentsByDeviceId.get(e);
  }
  initializeFromCache(e) {
    this.add(e, {
      merge: true
    });
  }
}
l.model = i.Agent;
const u = new l();
exports.AgentCollection = u;