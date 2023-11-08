Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QPSpec = exports.QP$FilterSpec = exports.QP$FilterResult = exports.QP$FilterParametersSpec = exports.QP$FilterClientNotSupportedConfig = exports.QP$FilterClauseSpec = exports.QP$ClauseType = undefined;
var r = require("./751206.js");
const i = require("../vendor/76672.js")({
  TRUE: 1,
  FALSE: 2,
  UNKNOWN: 3
});
exports.QP$FilterResult = i;
const a = require("../vendor/76672.js")({
  PASS_BY_DEFAULT: 1,
  FAIL_BY_DEFAULT: 2
});
exports.QP$FilterClientNotSupportedConfig = a;
const o = require("../vendor/76672.js")({
  AND: 1,
  OR: 2,
  NOR: 3
});
exports.QP$ClauseType = o;
const s = {};
exports.QPSpec = s;
const l = {};
exports.QP$FilterClauseSpec = l;
const u = {};
exports.QP$FilterSpec = u;
const c = {};
exports.QP$FilterParametersSpec = c;
s.internalSpec = {};
l.internalSpec = {
  clauseType: [1, r.FLAGS.REQUIRED | r.TYPES.ENUM, o],
  clauses: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, l],
  filters: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, u]
};
u.internalSpec = {
  filterName: [1, r.FLAGS.REQUIRED | r.TYPES.STRING],
  parameters: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, c],
  filterResult: [3, r.TYPES.ENUM, i],
  clientNotSupportedConfig: [4, r.FLAGS.REQUIRED | r.TYPES.ENUM, a]
};
c.internalSpec = {
  key: [1, r.TYPES.STRING],
  value: [2, r.TYPES.STRING]
};