Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearStatusForRemovedContact = function () {
  if (!(0, r.getABPropConfigValue)("disable_status_to_non_sub")) {
    return Promise.resolve();
  }
  const e = o.StatusV3Collection.filter(e => !(0, s.isMeAccount)(e.contact.id) && !(0, i.getIsMyContact)(e.contact)).reduce((e, t) => {
    const n = e.concat(t.msgs.map(e => String(e.id)));
    t.delete();
    return n;
  }, []);
  __LOG__(2)`clearStatusForNonAddressBook: remove ${e.length} status `;
  return (0, a.removeStatusMessage)(e);
};
var r = require("./287461.js");
var i = require("./660666.js");
var a = require("./384766.js");
var o = require("./657694.js");
var s = require("./459857.js");