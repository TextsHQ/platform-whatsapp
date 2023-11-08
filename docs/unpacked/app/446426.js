Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBusinessChange = undefined;
var r = require("./445729.js");
var i = require("./660666.js");
var a = require("./163139.js");
exports.handleBusinessChange = e => {
  const t = (0, a.unproxy)(e);
  const {
    businessProfile: o,
    id: s
  } = t;
  const l = t.isBusiness || (0, i.getIsMe)(t) && r.Conn.isSMB;
  if (l && !o) {
    t.addChild("businessProfile", require("./778945.js").BusinessProfileCollection.gadd(s));
  } else if (!l && o) {
    t.stopListening(o);
    t.businessProfile = undefined;
    o.delete();
  }
};