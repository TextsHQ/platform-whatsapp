var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTWADataSharingModel = undefined;
var i = r(require("./395654.js"));
let a = null;
const o = new i.default();
const s = {
  subscribeForUpdates: e => {
    o.on("update", e);
  },
  unsubscribeFromUpdates: e => {
    o.off("update", e);
  },
  setValue: e => {
    a = e;
    o.trigger("update", a);
  },
  getValue: () => a
};
exports.CTWADataSharingModel = s;