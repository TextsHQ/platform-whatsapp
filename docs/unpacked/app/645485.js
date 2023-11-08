Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnattributedMessageCollection = undefined;
var r = require("./997853.js");
var i = require("./392125.js");
var a = require("./388605.js");
var o = require("./94872.js");
class s extends i.BaseCollection {}
s.model = a.UnattributedMessage;
s.cachePolicy = {
  id: o.COLLECTIONS_KEYS.UNATTRIBUTED_MESSAGE_COLLECTION,
  policy: r.CACHE_POLICY.LOAD,
  delay: 1000
};
const l = new s();
exports.UnattributedMessageCollection = l;