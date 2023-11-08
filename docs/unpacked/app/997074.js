Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexSwitch = undefined;
exports.createValueForBitPosition = function (e) {
  return 2 ** (e - 1);
};
var r = require("./287461.js");
exports.MexSwitch = class {
  constructor(e, t) {
    this._killSwitch = e;
    this._flag = t;
  }
  isMexEnabled(e) {
    return this.isExperimentEnabled() && this._isFlagSet(e);
  }
  isExperimentEnabled() {
    return (0, r.getABPropConfigValue)(this._killSwitch) === true;
  }
  _isFlagSet(e) {
    const t = (0, r.getABPropConfigValue)(this._flag);
    return !!Number.isInteger(t) && (t & e) === e;
  }
};