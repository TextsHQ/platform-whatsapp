Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupJourneyWamEvent = undefined;
var r = require("./901032.js");
var i = require("./571444.js");
var a = require("./965927.js");
var o = require("./460416.js");
var s = require("./402579.js");
var l = require("./790213.js");
const {
  INTEGER: u,
  STRING: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  GroupJourney: [4512, {
    actionType: [1, i.CHAT_FILTER_ACTION_TYPES],
    appSessionId: [2, c],
    groupSize: [3, u],
    surface: [4, a.SURFACE_TYPE],
    threadType: [5, o.THREAD_TYPE],
    uiSurface: [7, s.TS_SURFACE],
    userRole: [6, l.USER_ROLE_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.GroupJourneyWamEvent = d;