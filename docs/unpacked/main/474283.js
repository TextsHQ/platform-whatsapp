Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInteractionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./507640.js");
var o = require("./568296.js");
var l = require("./526362.js");
var i = require("./234745.js");
var u = require("./153424.js");
const {
  INTEGER: s,
  STRING: c
} = a.TYPES;
const d = (0, a.defineEvents)({
  BusinessInteraction: [3450, {
    businessInteractionAction: [1, r.BUSINESS_INTERACTION_ACTION_TYPE],
    businessInteractionTargetScreen: [2, u.BUSINESS_INTERACTION_TARGET_SCREEN_TYPE],
    businessJid: [3, c],
    entryPointApp: [4, o.BUSINESS_INTERACTION_ENTRY_POINT_APP],
    entryPointSource: [5, l.BUSINESS_INTERACTION_ENTRY_POINT_SOURCE],
    internalEntryPoint: [6, i.BUSINESS_INTERACTION_INTERNAL_ENTRY_POINT],
    sequenceNumber: [7, s]
  }, [1, 1, 1], "private", 113760892]
});
exports.BusinessInteractionWamEvent = d;