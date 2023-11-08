var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyBridgeApi = undefined;
var r = require("../app/967910.js");
var o = a(require("../app/892568.js"));
const l = {
  updateUserDisclosures(e) {
    let {
      userDisclosures: t
    } = e;
    const n = [];
    t.map(e => {
      const t = new o.default({
        id: e.id,
        accepted: e.accepted,
        lastUpdated: new Date()
      });
      n.push(t);
    });
    r.UserDisclosureCollection.add(n, {
      merge: true
    });
  }
};
exports.PrivacyBridgeApi = l;