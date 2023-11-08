var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbPropsProtocol = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./135781.js");
var o = require("./138512.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = yield (0, o.sendGetExperimentConfigRPC)({
      propsHash: e
    });
    if (t.name === "GetExperimentConfigResponseSuccess") {
      const {
        propsAbKey: e,
        propsHash: n,
        propsRefresh: r,
        propsRefreshId: i,
        propsProp: o
      } = t.value;
      return (0, a.makeResult)({
        abKey: e,
        hash: n,
        refresh: r,
        refreshId: i,
        props: l(o)
      });
    }
    __LOG__(3)`getAbPropsProtocol failed ${t.value}`;
    return (0, a.makeError)();
  })).apply(this, arguments);
}
function l(e) {
  const t = [];
  e.forEach(e => {
    let {
      experimentOrSamplingConfigMixinGroup: n
    } = e;
    var r;
    if (n.name === "ExperimentConfig") {
      t.push({
        configCode: n.value.configCode,
        configValue: n.value.configValue,
        configExpoKey: (r = n.value.configExpoKey) === null || r === undefined ? undefined : r.toString()
      });
    }
  });
  return t;
}