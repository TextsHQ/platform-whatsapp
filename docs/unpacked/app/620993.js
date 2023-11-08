var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./395654.js"));
exports.default = class {
  constructor() {
    this.eventEmitter = new i.default();
  }
  trigger(e, t) {
    this.eventEmitter.trigger(e, t);
    return this;
  }
  on(e, t) {
    this.eventEmitter.on(e, t);
    return this;
  }
  once(e, t) {
    this.eventEmitter.once(e, t);
    return this;
  }
  off(e, t) {
    this.eventEmitter.off(e, t);
    return this;
  }
};