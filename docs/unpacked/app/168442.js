var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPassiveTaskForStartUp = function () {
  return f.apply(this, arguments);
};
exports.registerPassiveTasksForConnect = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./822017.js");
var s = require("./588237.js");
var l = require("./850794.js");
var u = require("./326314.js");
var c = require("./41517.js");
var d = require("./784898.js");
var p = require("./72687.js");
function f() {
  return (f = (0, i.default)(function* () {
    if (!(yield u.waSignalStore.getServerHasPreKeys())) {
      yield (0, d.setDeviceLinkPairStage)(p.MD_LINK_DEVICE_COMPANION_STAGE.UPLOAD_PREKEYS);
      s.PassiveTaskManager.registerPassiveTask(() => {
        __LOG__(2)`[passive] start key upload`;
        return (0, c.uploadPreKeys)().then((0, i.default)(function* () {
          __LOG__(2)`[passive] key upload complete`;
          yield (0, d.setDeviceLinkPairStage)(p.MD_LINK_DEVICE_COMPANION_STAGE.COMPLETE);
          yield (0, d.commitDeviceLinkEvent)();
        })).catch(function () {
          var e = (0, i.default)(function* (e) {
            __LOG__(4, true, new Error(), true)`error while uploading prekeys, ${e}`;
            SEND_LOGS("error while uploading prekeys");
            yield (0, d.commitDeviceLinkEvent)(-1);
          });
          return function () {
            return e.apply(this, arguments);
          };
        }());
      });
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    if ((0, a.getABPropConfigValue)("web_enable_open_tab_pre_ack")) {
      if ((yield (0, l.getTable)().count()) > 0) {
        s.PassiveTaskManager.registerPassiveTask((0, i.default)(function* () {
          try {
            __LOG__(2)`[passive] start sending dangling receipts`;
            yield (0, o.sendAndClearDanglingReceipts)();
            __LOG__(2)`[passive] sending dangling receipts complete`;
          } catch (e) {
            __LOG__(4, true, new Error(), true)`error while sending dangling receipts, ${e}`;
            SEND_LOGS("send-and-clear-dangling-receipts-failed");
          }
        }));
      }
    }
  })).apply(this, arguments);
}