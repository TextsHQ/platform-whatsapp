var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotCommand = undefined;
var i = r(require("../vendor/103522.js"));
var a = require("./692768.js");
var o = r(require("./84652.js"));
var s = r(require("./496964.js"));
var l = r(require("../vendor/667294.js"));
class u extends s.default {
  static match(e, t) {
    const {
      commands: n
    } = t != null ? t : {};
    if (!n || n.length === 0) {
      return [];
    }
    const r = n.map(e => (0, i.default)(`/${e.name}`));
    const a = new RegExp(`(${r.join("|")})(?=$|\\s)`, "gmi");
    let s = false;
    return (0, o.default)(e, a, 0, e => s ? null : (s = true, e));
  }
}
exports.BotCommand = u;
u.format = false;
u.jsx = e => l.default.createElement(a.BotCommandMutatorComponent, null, e);