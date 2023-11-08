var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/392125.js");
var o = require("../app/351053.js");
var l = a(require("../app/345371.js"));
var i = require("../app/79672.js");
var u = a(require("../app/667845.js"));
var s = require("../app/226562.js");
var c = require("../app/38878.js");
var d = require("../app/459857.js");
class f extends r.BaseCollection {
  constructor(e, t) {
    super();
    this.stale = false;
    this.add(e, {
      silent: true
    });
    this.contact = t;
    this.listenTo(u.default, `group_participant_change_${(0, d.getMaybeMeUser)().toString()}`, this.updateCommonGroups);
    this.listenTo(u.default, `group_participant_change_${this.contact.toString()}`, this.updateCommonGroups);
    this.listenTo(c.Socket, "change:stream", () => {
      if (c.Socket.stream === s.SOCKET_STREAM.DISCONNECTED) {
        this.stale = true;
      }
    });
  }
  updateCommonGroups(e) {
    const t = u.default.assertGet(e).participants;
    const n = (0, d.getMaybeMeUser)();
    if (this.get(e)) {
      if (!(t.get(this.contact) && t.get(n))) {
        this.remove(e);
      }
    } else if (t.get(this.contact) && t.get(n)) {
      this.add(o.ChatCollection.assertGet(e));
    }
  }
}
exports.default = f;
f.model = i.Chat;
f.comparator = l.default;