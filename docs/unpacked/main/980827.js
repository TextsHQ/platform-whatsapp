Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTWABridgeApi = undefined;
var a = require("./750271.js");
var r = require("./899453.js");
var o = require("./469944.js");
const l = {
  newCTWASuggestion: e => {
    let {
      suggestion: t
    } = e;
    return (0, a.newCTWASuggestion)(t);
  },
  revokeCTWASuggestion: e => {
    let {
      suggestion: t
    } = e;
    return (0, a.revokeCTWASuggestion)(t);
  },
  loadedCTWASuggestions: e => {
    let {
      suggestions: t
    } = e;
    return (0, a.loadedCTWASuggestions)(t);
  },
  loadedQuickPromotions: e => {
    let {
      promotions: t
    } = e;
    return (0, r.loadedQuickPromotions)(t);
  },
  smbDataSharingSettingUpdate: e => {
    let {
      smbDataSharingSettingValue: t
    } = e;
    return (0, o.smbDataSharingSettingUpdateAction)(t);
  }
};
exports.CTWABridgeApi = l;