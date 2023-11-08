var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attemptWithDirectConnectionRetry = u;
exports.attemptWithOrderDirectConnectionRetry = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = r(require("./418950.js"));
var s = require("./937356.js");
var l = require("./944878.js");
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t) {
    if (!(yield (0, s.isCypherNeeded)(e))) {
      return t();
    }
    const n = function () {
      var n = (0, i.default)(function* () {
        let n = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        const r = (yield o.default.getCypher(e, {
          forceRenew: n
        })).cypher;
        return t(r);
      });
      return function () {
        return n.apply(this, arguments);
      };
    }();
    try {
      return yield n();
    } catch (e) {
      if ((0, s.errorIsDirectConnectionCypherError421)(e)) {
        __LOG__(2)`[direct-connection] Received 421 from Direct Connection request. Renewing certificate and retrying.`;
        return n(true);
      } else {
        return Promise.reject(e);
      }
    }
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (!(0, a.getABPropConfigValue)("share_phone_number_on_cart_send_to_direct_connection_biz_enabled")) {
      return u(e, t);
    }
    if (!(yield (0, s.isCypherNeeded)(e))) {
      return t();
    }
    const n = function () {
      var n = (0, i.default)(function* () {
        var n;
        const r = (n = yield o.default.genNewCypher(e, l.CypherType.PhoneNumberAndPostcode, {
          forceRenew: true
        })) === null || n === undefined ? undefined : n.cypher;
        return t(r);
      });
      return function () {
        return n.apply(this, arguments);
      };
    }();
    const r = function () {
      var r = (0, i.default)(function* () {
        const r = yield o.default.getCypher(e);
        if (r.cypherType === l.CypherType.PhoneNumberAndPostcode) {
          return t(r.cypher);
        } else {
          return n();
        }
      });
      return function () {
        return r.apply(this, arguments);
      };
    }();
    try {
      return yield r();
    } catch (e) {
      if ((0, s.errorIsDirectConnectionCypherError421)(e)) {
        __LOG__(2)`[direct-connection] Received 421 from Direct Connection request. Renewing certificate and retrying.`;
        return n();
      } else {
        return Promise.reject(e);
      }
    }
  })).apply(this, arguments);
}