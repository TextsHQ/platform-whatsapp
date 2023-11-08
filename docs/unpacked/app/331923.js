var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBusinessCategories = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
const u = new s.WapParser("businessCategoriesResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("response");
  const n = [];
  let r = "";
  try {
    const e = t.maybeChild("not_a_biz");
    if (!(e == null)) {
      e.forEachChildWithTag("category", e => {
        r = e.attrString("id");
      });
    }
    t.child("categories").forEachChildWithTag("category", e => {
      const t = e.attrString("id");
      const i = e.contentString();
      n.push({
        id: t,
        localized_display_name: i,
        not_a_biz: !!r.length && t === r
      });
    });
  } catch (e) {}
  return {
    categories: n,
    notABizId: r
  };
});
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "fb:thrift_iq",
      id: (0, o.generateId)(),
      type: "get"
    }, (0, o.wap)("request", {
      op: (0, o.CUSTOM_STRING)("profile_typeahead"),
      type: "catkit",
      v: "1"
    }, (0, o.wap)("query", null, e)));
    const n = yield (0, a.deprecatedSendIq)(t, u);
    if (n.success) {
      return n.result;
    }
    throw new l.ServerStatusCodeError(n.errorCode);
  })).apply(this, arguments);
}