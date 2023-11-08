var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusCollectionImpl = exports.StatusCollection = undefined;
var i = require("./392125.js");
var a = require("./870791.js");
var o = r(require("./590684.js"));
var s = r(require("./124928.js"));
var l = require("./669050.js");
class u extends i.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = e => {
      const t = e instanceof s.default ? e : (0, l.createWid)(e);
      return (0, a.getStatus)(t);
    };
  }
}
exports.StatusCollectionImpl = u;
u.model = o.default;
u.idClass = s.default;
u.staleCollection = true;
const c = new u();
exports.StatusCollection = c;