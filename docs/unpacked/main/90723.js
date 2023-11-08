Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = undefined;
var a = require("../app/626596.js");
var r = require("../app/481173.js");
class o extends a.AddOnBaseModel {
  constructor() {
    super(...arguments);
    this.msgKey = (0, r.prop)();
    this.parentMsgKey = (0, r.prop)();
    this.t = (0, r.prop)();
    this.sender = (0, r.prop)();
    this.ack = (0, r.prop)();
    this.body = (0, r.prop)();
    this.id = (0, r.prop)();
    this.isSendFailure = (0, r.prop)();
  }
}
const l = (0, r.defineModel)(o);
exports.Comment = l;