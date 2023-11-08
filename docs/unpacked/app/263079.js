var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directConnectionBusinessNumbersFromAbprop = function () {
  const e = (0, a.getABPropConfigValue)("direct_connection_business_numbers");
  if (typeof e == "string" && e.length > 0) {
    return e.split(",");
  }
  return [];
};
exports.editPostcodeByDefaultEnabled = function () {
  return (0, a.getABPropConfigValue)("dc_edit_postcode_by_default_enabled");
};
exports.enablePostcodeInCatalog = function () {
  return (0, a.getABPropConfigValue)("web_abprop_direct_connection_md");
};
exports.genDirectConnectionMessageModifiers = function () {
  return m.apply(this, arguments);
};
exports.supportsDirectConnection = f;
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./260459.js");
var s = require("./373070.js");
var l = require("./533494.js");
var u = require("./669050.js");
function c() {
  return ((0, o.getBusinessProfileQueryVersion)() & o.DIRECT_CONNECTION_FLAG) > 0;
}
function d() {
  return !(0, a.getABPropConfigValue)("web_abprop_direct_connection_md");
}
function p(e, t) {
  return e === s.MSG_TYPE.LIST && t === l.Message$ListMessage$ListType.PRODUCT_LIST;
}
function f() {
  return (0, a.getABPropConfigValue)("web_abprop_direct_connection_md");
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, r) {
    if (d() || !p(e, t) || !r) {
      return false;
    }
    if (!c()) {
      __LOG__(3)`[direct-connection] This web client cannot detect if the product list message recevied is coming from a direct connection business`;
      return "unknown";
    }
    const i = (0, u.createWid)(r);
    const {
      BusinessProfileCollection: a
    } = require("./778945.js");
    let o = a.get(i);
    if (!(o && o.profileOptions)) {
      o = yield a.find(i);
    }
    return o.isBusinessDirectConnection() || false;
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    const r = yield _(e, t, n);
    if (r !== true || f()) {
      return {
        requiresDirectConnection: r
      };
    } else {
      return {
        requiresDirectConnection: r,
        type: s.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      };
    }
  })).apply(this, arguments);
}