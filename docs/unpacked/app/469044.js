var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnvironment = function () {
  return m.apply(this, arguments);
};
Object.defineProperty(exports, "requireRelayRuntime", {
  enumerable: true,
  get: function () {
    return p.requireRelayRuntime;
  }
});
exports.sendQueryIq = f;
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./250281.js");
var s = r(require("./670983.js"));
var l = require("./716358.js");
var u = require("./347387.js");
var c = require("./550866.js");
var d = require("./464139.js");
var p = require("./725799.js");
function f(e) {
  return (0, o.deprecatedSendIq)((0, l.wap)("iq", {
    id: (0, l.generateId)(),
    to: l.S_WHATSAPP_NET,
    type: "get",
    xmlns: "w:mex"
  }, new l.WapNode("query", undefined, a.Binary.build(JSON.stringify(e)).readByteArray())), new u.WapParser("parse", e => new TextDecoder("utf-8").decode(e.child("result").contentBytes())));
}
let _;
let g;
function m() {
  return (m = (0, i.default)(function* (e) {
    let t;
    t = e ? g : _;
    if (t != null) {
      return t;
    }
    const {
      Environment: n,
      Network: r,
      RecordSource: a,
      Store: o
    } = yield (0, p.requireRelayRuntime)();
    t = new n({
      network: r.create(function () {
        var t = (0, i.default)(function* (t, n) {
          let r;
          r = e ? {
            queryId: (0, s.default)(t.id, "operation.id"),
            variables: n
          } : {
            operationName: t.name,
            query: (0, s.default)(t.text, "operation.text").replace(/(\r\n|\n|\r)/gm, ""),
            variables: n
          };
          const i = yield f(r);
          if (!i.success) {
            throw new c.GraphQLServerError({
              errors: [{
                code: i.errorCode,
                message: i.errorText,
                isIQError: true
              }]
            });
          }
          const a = JSON.parse(i.result);
          const {
            data: o,
            errors: l
          } = a;
          if (l != null) {
            if (l.find(e => e.extensions != null)) {
              throw new d.MexExtensionError(o, l);
            }
            throw new c.GraphQLServerError({
              errors: l.map(e => ({
                code: e.extensions.error_code,
                message: e.message,
                isIQError: false
              }))
            });
          }
          return a;
        });
        return function () {
          return t.apply(this, arguments);
        };
      }()),
      store: new o(new a())
    });
    if (e) {
      g = t;
    } else {
      _ = t;
    }
    return t;
  })).apply(this, arguments);
}