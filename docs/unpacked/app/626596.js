Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddOnBaseModel = undefined;
var r = require("./481173.js");
var i = require("./382849.js");
class a extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.ack = (0, i.prop)();
    this.isSendFailure = (0, i.session)();
  }
}
exports.AddOnBaseModel = a;