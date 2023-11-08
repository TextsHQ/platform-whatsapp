var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendDeleteMsgs = function (e, t, a) {
  const d = [];
  const f = [];
  e.forEach(e => {
    d.push(e.id);
    f.push(String(e.rowId));
  });
  const p = o.default.getDeleteForMeMutations(e, t);
  const m = d.map(e => e.toString());
  return (0, u.lockForSync)(["message", "label-association"], p, () => (0, l.removeMessagesFromHistory)(m)).then(function () {
    var e = (0, r.default)(function* (e) {
      if (m.length > 0) {
        (0, s.deleteModelsForLastAddOnPreview)(m);
        const e = require("../app/628905.js").getJobManager;
        yield e().waitUntilPersisted(i.jobSerializers.deleteAddOns(a.toString(), m));
      }
      return e;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }()).catch(() => {
    __LOG__(4, true, new Error(), true)`remove messages from history failed`;
    SEND_LOGS("remove messages from history failed when send delete messages");
    throw (0, c.default)("remove messages from history failed");
  });
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/373967.js"));
var l = require("../app/420213.js");
var i = require("../app/323829.js");
var u = require("../app/480313.js");
var s = require("../app/251444.js");
var c = a(require("../app/556869.js"));