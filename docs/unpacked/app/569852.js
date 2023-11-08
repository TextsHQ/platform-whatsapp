Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdBootstrapDataAppliedWamEvent = undefined;
var r = require("./901032.js");
var i = require("./896771.js");
var a = require("./729360.js");
var o = require("./599764.js");
var s = require("./658982.js");
var l = require("./355933.js");
const {
  BOOLEAN: u,
  INTEGER: c,
  STRING: d
} = r.TYPES;
const p = (0, r.defineEvents)({
  MdBootstrapDataApplied: [2298, {
    collection: [5, i.COLLECTION],
    historySyncChunkOrder: [14, c],
    historySyncStageProgress: [11, c],
    mdBootstrapContactsCount: [8, c],
    mdBootstrapHistoryPayloadType: [10, a.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE],
    mdBootstrapPayloadType: [3, o.MD_BOOTSTRAP_PAYLOAD_TYPE],
    mdBootstrapSource: [2, s.MD_BOOTSTRAP_SOURCE],
    mdBootstrapStepDuration: [6, c],
    mdBootstrapStepResult: [12, l.MD_BOOTSTRAP_STEP_RESULT],
    mdRegAttemptId: [9, d],
    mdSessionId: [1, d],
    mdTimestamp: [4, c],
    sentViaMms: [13, u],
    usedSnapshot: [7, u]
  }, [1, 1, 1], "regular"]
});
exports.MdBootstrapDataAppliedWamEvent = p;