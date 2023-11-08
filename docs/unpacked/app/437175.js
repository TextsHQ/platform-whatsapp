Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logBlockEvent = function (e) {
  const {
    contact: t,
    blockEntryPoint: s,
    isBlock: l
  } = e;
  if ((0, r.getABPropConfigValue)("block_entry_point_logging_enabled")) {
    var u;
    const e = require("./351053.js").ChatCollection;
    const r = (0, a.getIsMyContact)(t) || ((u = e.get(t.id)) === null || u === undefined ? undefined : u.isTrusted());
    new i.BlockEventsFsWamEvent({
      blockEntryPoint: s,
      blockEventIsSuspicious: !r,
      blockEventIsUnsub: !(0, a.getIsMyContact)(t),
      blockEventActionType: l ? o.BLOCK_EVENT_ACTION_TYPE.BLOCK : o.BLOCK_EVENT_ACTION_TYPE.UNBLOCK
    }).commit();
  }
};
var r = require("./287461.js");
var i = require("./943680.js");
var a = require("./660666.js");
var o = require("./273821.js");