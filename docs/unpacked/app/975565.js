Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDeepConversation = function (e) {
  var t;
  var n;
  var r;
  var i;
  var s;
  if (!(0, a.getABPropConfigValue)("wa_ctwa_web_dc_logging_enabled")) {
    return;
  }
  if (!e || e.isNewMsg !== true) {
    return;
  }
  if (!o.Conn.isSMB) {
    return;
  }
  const l = (t = (0, d.getMaybeMeUser)()) === null || t === undefined ? undefined : t.toString();
  if (l == null) {
    __LOG__(3, undefined, undefined, true)`ctwa:dc-logging: Cannot get current user`;
    return void SEND_LOGS("ctwa:dc-logging: Cannot get current user");
  }
  const p = (n = (r = (0, u.getChat)(e)) === null || r === undefined ? undefined : r.msgs.toArray()) !== null && n !== undefined ? n : [];
  if (p.length === 0) {
    return;
  }
  if (e.ctwaContext == null && function (e, t) {
    var n;
    var r;
    const i = _(e, t);
    return ((n = e.from) === null || n === undefined ? undefined : n.toString()) === (i == null || (r = i.from) === null || r === undefined ? undefined : r.toString());
  }(e, p)) {
    return;
  }
  const [m, h] = function (e) {
    let t = 0;
    let n = e[e.length - 1];
    for (; n && t <= 6;) {
      var r;
      var i;
      if (f(n)) {
        return [null, t];
      }
      if (n.ctwaContext) {
        return [n, t];
      }
      const a = _(n, e);
      if (!a) {
        break;
      }
      const o = !c.SYSTEM_MESSAGE_TYPES.includes(n.type);
      const s = ((r = n.from) === null || r === undefined ? undefined : r.toString()) !== ((i = a.from) === null || i === undefined ? undefined : i.toString());
      if (o && s) {
        t++;
      }
      n = a;
    }
    return [n, t];
  }(p);
  if (!m) {
    return;
  }
  if (h > 5) {
    return;
  }
  if (l === ((i = e.from) === null || i === undefined ? undefined : i.toString())) {
    (function (e, t) {
      if (t === 1) {
        g(e, "FIRST_BIZ_REPLY");
      } else if (t === 3) {
        g(e, "SECOND_BIZ_REPLY");
      } else if (t === 5) {
        g(e, "DEEP_CONVERSATION");
      }
    })(m, h);
  } else if (l === ((s = e.to) === null || s === undefined ? undefined : s.toString())) {
    (function (e, t) {
      if (t === 0) {
        g(e, "FIRST_MESSAGE");
      } else if (t === 2) {
        g(e, "SECOND_MESSAGE");
      } else if (t === 4) {
        g(e, "THIRD_MESSAGE");
      }
    })(m, h);
  }
};
var r = require("./459617.js");
var i = require("./632157.js");
var a = require("./287461.js");
var o = require("./445729.js");
var s = require("./843257.js");
var l = require("./394054.js");
var u = require("./163755.js");
var c = require("./373070.js");
var d = require("./459857.js");
var p = require("./67749.js");
function f(e) {
  const t = (0, i.unixTime)() - s.ConversionTupleExpiry;
  return e.t < t;
}
function _(e, t) {
  const n = t.indexOf(e);
  if (n >= 0) {
    return t[n - 1];
  } else {
    return null;
  }
}
function g(e, t) {
  var n;
  const {
    conversionData: i,
    conversionSource: a
  } = (n = e.ctwaContext) !== null && n !== undefined ? n : {};
  if (i == null || a == null) {
    return void __LOG__(3)`ctwa:dc-logging: Attempted to log a DC with no CTWA conversion data or source`;
  }
  const o = {
    ctwaConversionType: p.CTWA_CONVERSION_TYPE[t],
    deepLinkConversionData: (0, r.arrayBufferToString)(i),
    deepLinkConversionSource: a
  };
  new l.DeepLinkConversionWamEvent(o).commitAndWaitForFlush(true);
}