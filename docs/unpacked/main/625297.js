var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtersRuleValidator = undefined;
var r = require("./834322.js");
var o = require("../app/853721.js");
var l = require("./20750.js");
var i = require("./795832.js");
var u = a(require("../app/556869.js"));
function s(e, t, n, a) {
  if (a >= 5) {
    __LOG__(4, undefined, new Error(), true)`filterClauseValidator: maximum level reached`;
    SEND_LOGS("quick-promotion-filters-too-deep");
    throw (0, u.default)("filterClauseValidator: maximum level reached");
  }
  const {
    clauseType: d,
    clauses: f,
    filters: p
  } = e;
  if (p.length > 0) {
    for (let e = 0; e < p.length; e++) {
      const a = p[e];
      const {
        filterName: o
      } = a;
      const u = (0, l.getFilterValidator)(o);
      let s;
      s = u != null ? u.filter(t, a.parameters, n) : (0, i.unknownFilter)(a.clientNotSupportedConfig) ? r.RESULT_TRUE : r.RESULT_FALSE_FILTERS_UNKNOWN;
      const f = c(d, s);
      if (f != null) {
        return f;
      }
    }
  }
  if (f.length > 0) {
    for (let e = 0; e < f.length; e++) {
      const r = c(d, s(f[e], t, n, a + 1));
      if (r != null) {
        return r;
      }
    }
  }
  switch (d) {
    case o.QP$ClauseType.OR:
      return r.RESULT_FALSE_FILTERS_CHECK_FAILED;
    case o.QP$ClauseType.AND:
    case o.QP$ClauseType.NOR:
      return r.RESULT_TRUE;
  }
}
function c(e, t) {
  switch (e) {
    case o.QP$ClauseType.AND:
      if (t !== r.RESULT_TRUE) {
        return t;
      }
      break;
    case o.QP$ClauseType.OR:
      if (t === r.RESULT_TRUE) {
        return r.RESULT_TRUE;
      }
      break;
    case o.QP$ClauseType.NOR:
      if (t === r.RESULT_TRUE) {
        return r.RESULT_FALSE_FILTERS_CHECK_FAILED;
      }
  }
  return null;
}
exports.filtersRuleValidator = (e, t) => {
  const {
    qpConfigFilterRules: n
  } = e.data;
  if (n == null) {
    return r.RESULT_TRUE;
  }
  try {
    return s(n, e, t, 0);
  } catch (e) {
    return r.RESULT_FALSE_FILTERS_CHECK_EXCEPTION;
  }
};