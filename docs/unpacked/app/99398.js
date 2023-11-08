var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./66836.js"));
var o = require("./481173.js");
var s = require("./508247.js");
var l = r(require("./524173.js"));
var u = r(require("./809572.js"));
const c = `${s.DYN_ORIGIN}status.json`;
class d extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.online = (0, o.session)(true);
    this.simulatedOfflineConditions = (0, o.session)(false);
    this.waitIfOffline = (0, a.default)(() => "all", (0, i.default)(function* () {
      if (!this.online) {
        if (l.default.info().name !== "Firefox" && navigator.onLine) {
          __LOG__(2)`waitIfOffline: XHR online is false, but navigator.onLine is true, resolving promise`;
        } else {
          __LOG__(2)`waitIfOffline: Waiting...`;
          yield new Promise(e => {
            this.listenToOnce(this, "change:online", () => {
              __LOG__(2)`waitIfOffline: Continuing...`;
              e();
            });
          });
        }
      }
    }));
    this.checkOnline = (0, a.default)(() => "all", (0, i.default)(function* () {
      __LOG__(2)`NetworkStatus:checkOnline checking`;
      try {
        const e = yield (0, u.default)(c);
        this.online = !!e;
        __LOG__(2)`NetworkStatus:checkOnline response ${String(this.online)}`;
      } catch (e) {
        __LOG__(3)`NetworkStatus:checkOnline errored! ${String(e)}`;
      }
    }));
  }
  initialize() {
    this.listenTo(this, "change:online", this._logOnlineOffline);
    this._logOnlineOffline();
  }
  _logOnlineOffline() {
    const e = this.online;
    __LOG__(2)`NetworkStatus ${e ? "online" : "offline"}`;
  }
  simulateNetworkStatus() {}
}
var p = new ((0, o.defineModel)(d))();
exports.default = p;