var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncFeaturesProtocol = undefined;
exports.featureParser = function (e) {
  e.assertTag("feature");
  const t = e.maybeChild("error");
  if (t) {
    return {
      errorCode: t.attrInt("code"),
      errorText: t.attrString("text")
    };
  }
  const n = {};
  Object.keys(o).forEach(t => {
    const r = e.maybeChild(t);
    if (r) {
      n[t] = r.attrString("value");
    }
  });
  return n;
};
var i = require("./716358.js");
var a = r(require("./556869.js"));
const o = {
  document: (0, i.wap)("document", null),
  encrypt: (0, i.wap)("encrypt", null),
  encrypt_blist: (0, i.wap)("encrypt_blist", null),
  encrypt_contact: (0, i.wap)("encrypt_contact", null),
  encrypt_group_gen2: (0, i.wap)("encrypt_group_gen2", null),
  encrypt_image: (0, i.wap)("encrypt_image", null),
  encrypt_location: (0, i.wap)("encrypt_location", null),
  encrypt_url: (0, i.wap)("encrypt_url", null),
  encrypt_v2: (0, i.wap)("encrypt_v2", null),
  voip: (0, i.wap)("voip", null),
  multi_agent: (0, i.wap)("multi_agent", null)
};
exports.USyncFeaturesProtocol = class {
  getName() {
    return "picture";
  }
  constructor(e) {
    this.queries = e;
    if (e.length === 0) {
      throw (0, a.default)("must specify at least one query");
    }
  }
  getQueryElement() {
    return (0, i.wap)("feature", null, this.queries && this.queries.map(e => o[e]));
  }
  getUserElement() {
    return null;
  }
};