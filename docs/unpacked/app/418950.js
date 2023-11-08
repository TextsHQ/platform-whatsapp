var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./530516.js");
var l = require("./392125.js");
var u = require("./724472.js");
var c = r(require("./696447.js"));
var d = require("./937356.js");
var p = require("./944878.js");
var f = require("./78088.js");
var _ = require("./323829.js");
var g = require("./628905.js");
class m extends l.BaseCollection {
  _getValidCertAndSignedUserInfo(e, t, n) {
    return (0, a.default)(function* () {
      if (!n && (t == null ? undefined : t.certificateChain)) {
        const [n, r] = yield Promise.all([(0, d.getValidCertificate)((0, f.stringToCertificateString)(t.certificateChain)), (0, u.querySignedUserInfo)(e)]);
        if (n) {
          return {
            signedUserInfo: r,
            validCertificate: n
          };
        }
      }
      const [r, {
        certificateString: i,
        leaftCertificateCommonName: a
      }] = yield Promise.all([(0, u.querySignedUserInfo)(e), (0, d.fetchCertificateFullChain)(e)]);
      if (r.businessDomain !== a) {
        throw new d.DCCertificateDomainMismatchError("[direct-connection] certificate common name does not match business domain");
      }
      return {
        signedUserInfo: r,
        validCertificate: yield (0, d.getValidCertificate)(i)
      };
    })();
  }
  _getCypherTypeForConversation(e, t) {
    if ((0, d.userHasSentMessageToBusiness)(e) || t) {
      return p.CypherType.PhoneNumberAndPostcode;
    } else {
      return p.CypherType.Postcode;
    }
  }
  _fetchPostcode(e, t) {
    return (0, a.default)(function* () {
      var n;
      if (typeof (t == null ? undefined : t.postcode) == "string" && t.postcodeSetByUser === true) {
        return {
          postcode: t.postcode,
          postcodeSetByUser: t.postcodeSetByUser,
          postcodeLocationName: (n = t.postcodeLocationName) !== null && n !== undefined ? n : ""
        };
      }
      const r = yield (0, d.fetchDefaultPostcode)(e);
      if (r) {
        return (0, i.default)((0, i.default)({}, r), {}, {
          postcodeSetByUser: false
        });
      } else {
        return undefined;
      }
    })();
  }
  _getCypherFromDborApi(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, a.default)(function* () {
      const r = yield (0, s.fetchDirectConnectionKeys)(e.toJid());
      if (!n && r && t._isRowDataInGoodCondition(e, r)) {
        return {
          id: e,
          cypher: (0, p.stringToCypherString)(r.cypher),
          cypherExpirationTimestamp: r.cypherExpirationTimestamp,
          cypherType: r.cypherType,
          certificateChain: r.certificateChain,
          postcode: r.postcode,
          postcodeSetByUser: r.postcodeSetByUser,
          postcodeLocationName: r.postcodeLocationName
        };
      }
      const a = t._getCypherTypeForConversation(e, typeof (r == null ? undefined : r.postcode) == "string" && r.postcodeSetByUser === true);
      const o = yield t.genNewCypher(e, a, {
        rowData: r,
        forceRenew: n
      });
      if (o == null) {
        __LOG__(4, undefined, new Error())`[direct-connection] Cannot generate cypher`;
        return null;
      } else {
        yield (0, s.createOrUpdateDirectConnectionKeys)((0, i.default)((0, i.default)({}, o), {}, {
          id: e.toJid(),
          cypher: (0, p.cypherStringToString)(o.cypher)
        }));
        return o;
      }
    })();
  }
  _verifyPostcode(e, t) {
    return (0, g.getJobManager)().waitUntilCompleted(_.jobSerializers.verifyPostcode(e, t));
  }
  _updateModel(e) {
    return this.set([e]);
  }
  genNewCypher(e, t, n) {
    var r = this;
    let {
      rowData: i,
      forceRenew: s
    } = n;
    return (0, a.default)(function* () {
      const [{
        validCertificate: n,
        signedUserInfo: a
      }, l] = yield Promise.all([r._getValidCertAndSignedUserInfo(e, i, Boolean(s)), r._fetchPostcode(e, i)]);
      if (n == null) {
        __LOG__(3)`[direct-connection] no certificate returned from the get_public_key IQ`;
        return null;
      }
      if (l == null) {
        __LOG__(3)`[direct-connection] Post code data could not be found`;
        return null;
      }
      const {
        cypher: u
      } = (0, o.default)(yield (0, d.getCypher)(n.chain, l.postcode, a, t), "yield getCypher(validCertificate.chain, postcodeData.postcode, signedUserInfo, cypherType)");
      const c = t === p.CypherType.PhoneNumberAndPostcode ? a.phoneNumberSignatureExpiration : null;
      const _ = (0, f.certificateStringToString)(n.string);
      return {
        id: e,
        cypher: u,
        cypherExpirationTimestamp: c,
        cypherType: t,
        certificateChain: _,
        postcode: l.postcode,
        postcodeSetByUser: l.postcodeSetByUser,
        postcodeLocationName: l.postcodeLocationName
      };
    })();
  }
  verifyAndSavePostcode(e, t) {
    var n = this;
    let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    return (0, a.default)(function* () {
      const a = yield (0, s.fetchDirectConnectionKeys)(e.toJid());
      const l = p.CypherType.PhoneNumberAndPostcode;
      const {
        validCertificate: u,
        signedUserInfo: c
      } = yield n._getValidCertAndSignedUserInfo(e, a, r);
      if (u == null) {
        __LOG__(3)`[direct-connection] certificate is null during verify postcode`;
        return null;
      }
      const {
        cypher: _,
        exportedAesKey: g,
        iv: m
      } = (0, o.default)(yield (0, d.getCypher)(u.chain, t, c, l), "yield getCypher(validCertificate.chain, newPostcode, signedUserInfo, newCypherType)");
      const h = l === p.CypherType.PhoneNumberAndPostcode ? c.phoneNumberSignatureExpiration : null;
      let y;
      let E;
      try {
        const t = yield n._verifyPostcode(e, _);
        y = t.resultCode;
        E = t.encryptedLocationName;
      } catch (r) {
        if ((0, d.errorIsDirectConnectionCypherError421)(r)) {
          return n.verifyAndSavePostcode(e, t, true);
        }
        throw r;
      }
      if (y === "success" && typeof E == "string") {
        const r = yield (0, p.decryptDataWithSymmetricKeyToString)(g, E, m);
        const a = {
          cypherExpirationTimestamp: h,
          certificateChain: (0, f.certificateStringToString)(u.string),
          cypherType: l,
          postcode: t,
          postcodeSetByUser: true,
          postcodeLocationName: r
        };
        yield (0, s.createOrUpdateDirectConnectionKeys)((0, i.default)({
          id: e.toJid(),
          cypher: (0, p.cypherStringToString)(_)
        }, a));
        n._updateModel((0, i.default)({
          id: e,
          cypher: _
        }, a));
        return {
          resultCode: y,
          decryptedLocationName: r
        };
      }
      return {
        resultCode: y
      };
    })();
  }
  removeCypher(e) {
    const t = this.get(e);
    if (t) {
      this.remove(t);
      return (0, s.removeDirectConnectionKeys)(e.toJid());
    } else {
      return Promise.resolve();
    }
  }
  _isCypherInGoodCondition(e, t, n, r) {
    return !(0, d.isCypherFromLaunch1)(t) && !(0, d.isCypherExpired)(t, n) && t === this._getCypherTypeForConversation(e, r);
  }
  _isRowDataInGoodCondition(e, t) {
    return this._isCypherInGoodCondition(e, t.cypherType, t.cypherExpirationTimestamp, t.postcodeSetByUser === true);
  }
  _isModelDataInGoodCondition(e, t) {
    return this._isCypherInGoodCondition(e, t.cypherType, t.cypherExpirationTimestamp, t.postcodeSetByUser === true);
  }
  getCypher(e) {
    var t = this;
    let {
      forceRenew: n = false
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, a.default)(function* () {
      const r = n ? null : t.get(e);
      if (r && t._isModelDataInGoodCondition(e, r)) {
        return r;
      } else {
        return [].concat(yield t.update(e, {
          forceRenewDirectConnection: n
        }))[0];
      }
    })();
  }
  findImpl(e) {
    return this._getCypherFromDborApi(e);
  }
  _update(e, t) {
    let {
      forceRenewDirectConnection: n
    } = t;
    return this._getCypherFromDborApi(e, n);
  }
}
m.model = c.default;
var h = new m();
exports.default = h;