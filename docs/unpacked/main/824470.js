var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandCollectionImpl = exports.CommandCollection = undefined;
var r = require("./861620.js");
var o = require("../app/392125.js");
var l = a(require("./246943.js"));
var i = a(require("../app/932325.js"));
var u = require("./831105.js");
class s extends o.BaseCollection {
  constructor() {
    super();
    this.initializeCommands();
  }
  initializeCommands() {
    this.addCommandsFromActions();
    this.addCommandsFromSettings();
  }
  query(e) {
    const t = i.default.accentFold(e.query.toLowerCase());
    return this.filter(n => {
      const a = i.default.accentFold(n.label.toLowerCase()).includes(t);
      const r = e.type === n.type;
      return a && r;
    });
  }
  addCommandsFromActions() {
    for (const e of r.Action.members()) {
      this.add({
        name: e,
        id: e,
        label: (0, r.getLabel)(e).toString(),
        type: "action"
      });
    }
  }
  addCommandsFromSettings() {
    for (const e of Array.from(u.SettingsSteps.members()).filter(e => (0, u.isSettingAvailable)(e))) {
      this.add({
        name: e,
        id: e,
        label: (0, u.getLabel)(e).toString(),
        type: "setting"
      });
    }
  }
}
exports.CommandCollectionImpl = s;
s.model = l.default;
const c = new s();
exports.CommandCollection = c;