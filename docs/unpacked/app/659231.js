var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = r(require("./565754.js"));
class o extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.unsyncedButtonReplies = (0, i.prop)();
  }
}
o.Proxy = "msgButtonReplyMsg";
o.idClass = a.default;
var s = (0, i.defineModel)(o);
exports.default = s;