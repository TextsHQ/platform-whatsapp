var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexPayloadParsingError = exports.MexIqError = exports.MexFatalExtensionError = undefined;
exports.fetchFunc = y;
exports.getEnvironment = function () {
  return _.apply(this, arguments);
};
exports.parseFatalExtensionError = S;
exports.requireRelayRuntime = d;
exports.sendMexIq = p;
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./250281.js");
var s = r(require("./670983.js"));
var l = require("./716358.js");
var u = require("./347387.js");
var c = require("./159150.js");
function d() {
  return require.e(4815).then(require.t.bind(require, 244311, 23));
}
function p(e, t) {
  let n;
  if (t != null) {
    n = {
      query_id: (0, l.CUSTOM_STRING)(t)
    };
  }
  return (0, o.deprecatedSendIq)((0, l.wap)("iq", {
    id: (0, l.generateId)(),
    to: l.S_WHATSAPP_NET,
    type: "get",
    xmlns: "w:mex"
  }, new l.WapNode("query", n, a.Binary.build(JSON.stringify(e)).readByteArray())), new u.WapParser("mexParser", e => new TextDecoder("utf-8").decode(e.child("result").contentBytes())));
}
let f;
function _() {
  return (_ = (0, i.default)(function* () {
    if (f == null) {
      const {
        Environment: e,
        Network: t,
        RecordSource: n,
        Store: r
      } = yield d();
      const i = t.create(y);
      const a = new r(new n(), {
        queryCacheExpirationTime: 0
      });
      f = new e({
        network: i,
        store: a,
        getDataID: () => {}
      });
    }
    return f;
  })).apply(this, arguments);
}
class g extends Error {
  constructor(e, t) {
    super();
    this.name = "MexIqError";
    this.code = e;
    this.message = t;
  }
}
exports.MexIqError = g;
class m extends Error {
  constructor(e) {
    super();
    this.name = "MexPayloadParsingError";
    this.error = e;
  }
}
exports.MexPayloadParsingError = m;
class h extends Error {
  constructor(e) {
    super();
    this.name = "MexFatalExtensionError";
    this.error = e;
  }
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t, n) {
    var r;
    const i = (r = n.metadata) === null || r === undefined ? undefined : r.mexPerfTracker;
    if (i != null) {
      i.setQueryId(e.id);
      i.setOperationName(e.name);
    }
    const a = yield v({
      variables: t
    }, (0, s.default)(e.id, "operation.id"), i);
    if (!a.success) {
      if (i != null) {
        i.setHasData(false);
        i.setErrors([(0, c.createLoggingTransportError)(a.errorCode, a.errorText)]);
      }
      throw new g(a.errorCode, a.errorText);
    }
    let o = {};
    try {
      o = JSON.parse(a.result);
    } catch (e) {
      if (i != null) {
        i.setHasData(false);
        i.setErrors([(0, c.createLoggingClientError)(472, e.message)]);
      }
      throw new m(e);
    }
    const l = o;
    if (i != null) {
      i.setHasData(l.data != null);
      i.setExtensionErrors(l.errors);
    }
    const u = S(l.errors);
    if (u != null) {
      throw new h(u);
    }
    return o;
  })).apply(this, arguments);
}
function S(e) {
  var t;
  if (e == null || e.length === 0) {
    return null;
  }
  const n = (t = e.find(e => {
    var t;
    return ((t = e.extensions) === null || t === undefined ? undefined : t.is_summary) === true;
  })) !== null && t !== undefined ? t : e.find(e => {
    var t;
    return ((t = e.extensions) === null || t === undefined ? undefined : t.error_code) != null;
  });
  if (n == null) {
    const t = e[0];
    t.extensions.error_code = 500;
    return t;
  }
  return n;
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t, n) {
    try {
      return yield p(e, t);
    } catch (e) {
      if (n != null) {
        n.setHasData(false);
        n.setErrors([(0, c.createLoggingClientError)(471, e.message)]);
      }
      throw new g(500, e.message);
    }
  })).apply(this, arguments);
}
exports.MexFatalExtensionError = h;