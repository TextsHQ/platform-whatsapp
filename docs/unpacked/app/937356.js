var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DCCertificateDomainMismatchError = undefined;
exports.businessSupportsPostcode = function (e) {
  var t;
  var n;
  return ((t = e.directConnection) === null || t === undefined ? undefined : t.enabled) === true && typeof ((n = e.directConnection.defaultPostcode) === null || n === undefined ? undefined : n.code) == "string";
};
exports.errorIsDirectConnectionCypherError421 = function (e) {
  return e instanceof l.ServerStatusCodeError && e.statusCode === 421;
};
exports.fetchCertificateFullChain = function () {
  return v.apply(this, arguments);
};
exports.fetchDefaultPostcode = function () {
  return M.apply(this, arguments);
};
exports.getCypher = function (e, t, n, r) {
  const i = function (e, t, n) {
    switch (e) {
      case p.CypherType.PhoneNumberAndPostcode:
        return {
          postcode: t,
          phone_number: n.phoneNumber,
          ttl_timestamp: n.phoneNumberSignatureExpiration,
          phone_number_signature: n.phoneNumberSignature
        };
      case p.CypherType.Postcode:
        return {
          postcode: t
        };
    }
  }(r, t, n);
  return (0, p.genCypher)(e[0], i);
};
exports.getValidCertificate = function () {
  return S.apply(this, arguments);
};
exports.isCypherExpired = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, h.default)();
  if (e !== p.CypherType.PhoneNumberAndPostcode) {
    return false;
  }
  if (t == null) {
    return true;
  }
  const r = (0, h.default)(t, y);
  const i = !(r.isValid() && r.isAfter(n));
  return i;
};
exports.isCypherFromLaunch1 = function (e) {
  return !e;
};
exports.isCypherNeeded = function () {
  return T.apply(this, arguments);
};
exports.timestampFormat = exports.isDirectConnectionNumbersAbPropChanged = exports.isDirectConnectionFlagChanged = undefined;
exports.userHasSentMessageToBusiness = function (e) {
  const t = d.ChatCollection.get(e);
  return !!t && t.hasMaybeSentMsgToChat();
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./98017.js"));
var o = require("./477689.js");
var s = r(require("./670983.js"));
var l = require("./984330.js");
var u = require("./724472.js");
var c = require("./260459.js");
var d = require("./351053.js");
var p = require("./944878.js");
var f = require("./263079.js");
var _ = require("./78088.js");
var g = require("./937001.js");
var m = r(require("./556869.js"));
var h = r(require("../vendor/730381.js"));
const y = "YYYYMMDDTHHmmssZ";
exports.timestampFormat = y;
class E extends (0, o.customError)("DCCertificateDomainMismatchError") {}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = yield (0, _.extractCertificates)(e);
    const {
      result: n
    } = yield (0, _.validateCertificates)(t.slice(1, -1), t.slice(-1));
    if (n) {
      return {
        string: e,
        chain: t
      };
    } else {
      return null;
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    var t;
    const [{
      certificate: n
    }, r] = yield Promise.all([(0, u.queryBusinessPublicKey)(e), (0, _.fetchFromCABundle)()]);
    if (n == null) {
      throw (0, m.default)("[direct-connection] no certificate returned from the get_public_key IQ");
    }
    const i = yield (0, _.extractCertificates)(n);
    const a = i.length > 0 ? (t = i[0].subject.typesAndValues.find(e => e.type === "2.5.4.3")) === null || t === undefined ? undefined : t.value.valueBlock.value : null;
    const o = (0, s.default)(yield (0, _.genRootIssuers)(i, r), "yield genRootIssuers(extractedCertificate, caBundle)");
    return {
      certificateString: (0, _.encodeToString)([...i, ...o]),
      leaftCertificateCommonName: a
    };
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    var t;
    const r = require("./778945.js").BusinessProfileCollection;
    return Boolean((0, f.supportsDirectConnection)() && d.ChatCollection.get(e) != null && ((t = yield r.find(e)) === null || t === undefined ? undefined : t.isBusinessDirectConnection()));
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    var t;
    const r = require("./778945.js").BusinessProfileCollection;
    const i = yield r.find(e);
    if (((t = i.directConnection) === null || t === undefined ? undefined : t.enabled) && i.directConnection.defaultPostcode) {
      return {
        postcode: i.directConnection.defaultPostcode.code,
        postcodeLocationName: i.directConnection.defaultPostcode.locationName
      };
    }
  })).apply(this, arguments);
}
exports.DCCertificateDomainMismatchError = E;
exports.isDirectConnectionFlagChanged = (e, t) => {
  if (e === g.UNINITIALIZED_VALUE_WEB_BIZ_PROFILE_OPTIONS) {
    return false;
  }
  return ((0, c.getBusinessProfileQueryVersionWithCustomBizProfileOptions)(e) & c.DIRECT_CONNECTION_FLAG) > 0 !== ((0, c.getBusinessProfileQueryVersionWithCustomBizProfileOptions)(t) & c.DIRECT_CONNECTION_FLAG) > 0;
};
exports.isDirectConnectionNumbersAbPropChanged = (e, t) => e != null && !(0, a.default)(e, t);