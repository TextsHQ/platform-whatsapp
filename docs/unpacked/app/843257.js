var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversionTupleExpiry = exports.ConversionTuple = undefined;
var i = r(require("../vendor/506479.js"));
var a = require("./904704.js");
var o = require("./632157.js");
var s = r(require("./164325.js"));
var l = require("./481173.js");
var u = r(require("./97359.js"));
var c = r(require("./124928.js"));
const d = ["conversionData"];
const p = 604800;
exports.ConversionTupleExpiry = p;
class f extends l.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, l.prop)();
    this.conversionData = (0, l.prop)();
    this.conversionSource = (0, l.prop)();
    this.timestamp = (0, l.prop)(() => (0, o.unixTime)());
    this.alarmId = (0, l.session)();
  }
  initialize() {
    super.initialize();
    this.listenTo(this, "change:timestamp", () => this._setExpiryTimer());
    this._setExpiryTimer();
  }
  _setExpiryTimer() {
    const e = this.timestamp + p;
    if (e < 0) {
      __LOG__(3)`Invalid conversionTuple timer`;
      return void this.delete();
    }
    this.alarmId = s.default.setLocalTimeout(() => {
      this.delete();
    }, e * 1000, this.alarmId);
  }
  _clearAlarm() {
    if (this.alarmId != null) {
      s.default.clearTimeout(this.alarmId);
      this.alarmId = undefined;
    }
  }
  toJSON() {
    const e = this.serialize();
    const {
      conversionData: t
    } = e;
    const n = (0, i.default)(e, d);
    if (t instanceof ArrayBuffer) {
      const e = new a.Binary(t);
      n.conversionData = e.readString(t.byteLength);
    }
    return n;
  }
  delete() {
    super.delete();
    this.getCollection().remove(this.id);
    this._clearAlarm();
  }
  getCollection() {
    return (0, u.default)(require("./528420.js"));
  }
}
f.Proxy = "conversionTuple";
f.idClass = c.default;
const _ = (0, l.defineModel)(f);
exports.ConversionTuple = _;