Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdExpansionAgentBrowserMdIdWamEvent = undefined;
var r = require("./901032.js");
var i = require("./926723.js");
const {
  BOOLEAN: a,
  INTEGER: o,
  STRING: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MdExpansionAgentBrowserMdId: [3390, {
    agentId: [1, s],
    browserId: [2, s],
    companionMdId: [5, o],
    isCustomAgentName: [6, a],
    isNewAgent: [9, a],
    loginTimestamp: [3, o],
    logoutTimestamp: [4, o],
    mdLinkedCount: [8, o],
    multideviceAction: [7, i.MULTIDEVICE_ACTION_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.MdExpansionAgentBrowserMdIdWamEvent = l;