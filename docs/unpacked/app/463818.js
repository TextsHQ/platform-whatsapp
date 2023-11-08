var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendRawFields = function (e, t) {
  if (t == null || t.length === 0) {
    return e;
  }
  const n = new Map();
  for (let t = 0; t < e.length; t += 3) {
    const r = e[t];
    n.set(r, t);
  }
  for (let r = 0; r < t.length; ++r) {
    const [i, a, o] = t[r];
    if (o == null) {
      continue;
    }
    const l = n.get(i);
    if (l != null) {
      if (e[l + 2] !== undefined) {
        continue;
      }
    }
    if (s[a] === typeof o) {
      if (l == null) {
        n.set(i, e.length);
        e.push(i, a, o);
      } else {
        e[l + 2] = o;
      }
    }
  }
  return e;
};
exports.asBufferEntry = function (e, t, n, r, a) {
  const o = function (e) {
    return JSON.stringify([e.streamId, e.sequenceNumber, e.channel]);
  }(e);
  return {
    bufferKey: o,
    meta: {
      streamId: e.streamId,
      sequenceNumber: e.sequenceNumber
    },
    bufferRow: {
      key: o,
      channel: t,
      streamId: n,
      buffer: (0, i.encodeB64)(r),
      finished: a
    }
  };
};
exports.getDeltaFromAttributes = function (e) {
  const t = new Map();
  const n = new Map();
  for (let r = 0; r < e.length; r += 4) {
    const i = e[r];
    const s = e[r + 1];
    const l = e[r + 2];
    const u = e[r + 3];
    if (l === o.TYPES.FLOAT) {
      throw (0, a.default)("Float attributes are currently not supported in runtime");
    }
    if (!Array.isArray(i)) {
      __LOG__(4, undefined, new Error(), true)`logAttributes WAM channel is not an array`;
      return void SEND_LOGS("wam-log-attributes");
    }
    if (i.includes("regular")) {
      t.set(s, u);
    }
    if (i.includes("private")) {
      n.set(s, u);
    }
  }
  return {
    deltaRegular: t,
    deltaPrivate: n
  };
};
exports.getFinishedBuffers = function (e, t) {
  const n = [];
  t.forEach(t => {
    const {
      channel: r
    } = t;
    if (r == null) {
      if (e !== "regular") {
        return;
      }
    } else if (r !== e) {
      return;
    }
    if (t.finished) {
      const e = new Uint8Array((0, i.decodeB64)(t.buffer));
      const r = t.key;
      n.push({
        key: r,
        content: e
      });
    }
  });
  return n;
};
exports.getSequenceNumber = function (e) {
  let t = null;
  if (e) {
    t = e.sequenceNumber;
  }
  return t;
};
var i = require("./417405.js");
var a = r(require("./415227.js"));
var o = require("./3549.js");
const s = {
  [o.TYPES.INT]: "number",
  [o.TYPES.FLOAT]: "number",
  [o.TYPES.STRING]: "string",
  [o.TYPES.BOOL]: "boolean"
};