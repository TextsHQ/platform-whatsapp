var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./395654.js"));
exports.default = class {
  constructor() {
    this._emitter = new i.default();
  }
  addEventListener(e, t) {
    this._emitter.on(e, t, this);
  }
  removeEventListener(e, t) {
    this._emitter.off(e, t, this);
  }
  dispatchEvent(e) {
    this._emitter.trigger(e.type);
    return true;
  }
};