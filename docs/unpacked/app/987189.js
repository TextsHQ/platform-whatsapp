var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLidPnMappings = function () {
  return u.apply(this, arguments);
};
exports.updateLidMetadata = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./12643.js");
var o = require("./359987.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    let {
      updates: t
    } = e;
    const n = t.map(e => {
      var t;
      var n;
      var r;
      var i;
      let {
        lid: a,
        data: o
      } = e;
      return {
        lid: (0, s.toUserWid)(a),
        shareOwnPn: (t = o.shareOwnPn) !== null && t !== undefined ? t : null,
        displayNameLID: (n = o.displayNameLID) !== null && n !== undefined ? n : null,
        requestedPnTimestamp: (r = o.requestedPnTimestamp) !== null && r !== undefined ? r : null,
        username: (i = o.username) !== null && i !== undefined ? i : null
      };
    });
    yield (0, o.frontendSendAndReceive)("bulkUpdateLidContactState", {
      lidContactDataMappings: n
    });
    yield (0, a.updateLidMetadata)(t);
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    let {
      mappings: t,
      flushImmediately: n
    } = e;
    const r = t.map(e => {
      let {
        lid: t,
        pn: n
      } = e;
      return {
        lid: t.toString(),
        phoneNumber: n.toString()
      };
    });
    yield (0, o.frontendSendAndReceive)("bulkUpdatePhoneNumberJids", {
      lidPhoneNumberMappings: r
    });
    yield (0, a.createLidPnMappings)({
      mappings: t,
      flushImmediately: n
    });
  })).apply(this, arguments);
}