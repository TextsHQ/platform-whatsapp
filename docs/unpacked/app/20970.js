var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMerchantCompliance = function () {
  return f.apply(this, arguments);
};
exports.setMerchantCompliance = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./250281.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./984330.js");
var c = require("./355813.js");
const d = e => {
  var t;
  var n;
  var r;
  return {
    email: (e == null || (t = e.maybeChild("email")) === null || t === undefined ? undefined : t.contentString()) || "",
    landline_number: (e == null || (n = e.maybeChild("landline_number")) === null || n === undefined ? undefined : n.contentString()) || "",
    mobile_number: (e == null || (r = e.maybeChild("mobile_number")) === null || r === undefined ? undefined : r.contentString()) || ""
  };
};
const p = new l.WapParser("merchantComplianceResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = [];
  e.forEachChildWithTag("merchant_info", e => {
    var n;
    var r;
    var i;
    var o;
    const s = ((n = e.maybeChild("entity_name")) === null || n === undefined ? undefined : n.contentString()) || "";
    const l = ((r = e.maybeChild("entity_type")) === null || r === undefined ? undefined : r.contentString()) || "";
    const u = (i = e.maybeChild("entity_type_custom")) === null || i === undefined ? undefined : i.contentString();
    const c = e.attrString("is_registered") === "true";
    const p = e.maybeChild("customer_care_details");
    const f = e.maybeChild("grievance_officer_details");
    const _ = (0, a.default)({}, d(p));
    const g = (0, a.default)({
      name: (f == null || (o = f.maybeChild("name")) === null || o === undefined ? undefined : o.contentString()) || ""
    }, d(f));
    t.push({
      entity_name: s,
      entity_type: l,
      is_registered: c,
      entity_type_custom: u,
      customer_care_details: _,
      grievance_officer_details: g
    });
  });
  return t;
});
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      xmlns: "w:biz:merchant_info",
      id: (0, s.generateId)(),
      type: "get",
      smax_id: "53"
    }, e.map(e => (0, s.wap)("merchant_info", {
      jid: (0, c.USER_JID)(e.wid)
    })));
    const n = yield (0, o.deprecatedSendIq)(t, p);
    if (n.success) {
      return n.result;
    }
    throw new u.ServerStatusCodeError(n.errorCode);
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    let {
      entityName: e,
      entityType: t,
      isRegistered: n = false,
      entityTypeCustom: r,
      customerCareDetails: i,
      grievanceOfficerDetails: a
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const l = (0, s.wap)("iq", {
      to: s.S_WHATSAPP_NET,
      xmlns: "w:biz:merchant_info",
      id: (0, s.generateId)(),
      type: "set",
      smax_id: "54"
    }, (0, s.wap)("merchant_info", {
      is_registered: n ? "true" : "false"
    }, e !== undefined ? (0, s.wap)("entity_name", null, e) : null, t !== undefined ? (0, s.wap)("entity_type", null, t) : null, r !== undefined ? (0, s.wap)("entity_type_custom", null, r) : null, i ? (0, s.wap)("customer_care_details", null, i.email !== undefined ? (0, s.wap)("email", null, i.email) : null, i.landlineNumber !== undefined ? (0, s.wap)("landline_number", null, i.landlineNumber) : null, i.mobileNumber !== undefined ? (0, s.wap)("mobile_number", null, i.mobileNumber) : null) : null, a ? (0, s.wap)("grievance_officer_details", null, a.name !== undefined ? (0, s.wap)("name", null, a.name) : null, a.email !== undefined ? (0, s.wap)("email", null, a.email) : null, a.landlineNumber !== undefined ? (0, s.wap)("landline_number", null, a.landlineNumber) : null, a.mobileNumber !== undefined ? (0, s.wap)("mobile_number", null, a.mobileNumber) : null) : null));
    const c = yield (0, o.deprecatedSendIq)(l, p);
    if (c.success) {
      return c.result;
    }
    throw new u.ServerStatusCodeError(c.errorCode);
  })).apply(this, arguments);
}