var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotProfileCollection = undefined;
var i = require("./392125.js");
var a = r(require("./350840.js"));
class o extends i.BaseCollection {
  getDefaultBot() {
    return this.findFirst(e => e.isDefault === true);
  }
}
o.model = a.default;
const s = new o();
exports.BotProfileCollection = s;