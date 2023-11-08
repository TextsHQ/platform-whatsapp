Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdAppStateSyncMutationStatsWamEvent = undefined;
var r = require("./901032.js");
var i = require("./181680.js");
const {
  STRING: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  MdAppStateSyncMutationStats: [3180, {
    applied: [1, i.MUTATION_COUNT_BUCKET],
    failed: [2, i.MUTATION_COUNT_BUCKET],
    invalid: [3, i.MUTATION_COUNT_BUCKET],
    orphan: [4, i.MUTATION_COUNT_BUCKET],
    syncdAction: [5, a],
    unsupported: [6, i.MUTATION_COUNT_BUCKET]
  }, [1, 1, 20], "private", 0]
});
exports.MdAppStateSyncMutationStatsWamEvent = o;