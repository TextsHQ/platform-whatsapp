var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flushBitarrays = function (e, t) {
  const n = i.default.getItem(e);
  if (n != null) {
    const r = l(n);
    if (r == null) {
      return void __LOG__(3)`[time-spent] error parsing stashed bitarray data (${e})`;
    }
    Promise.all(r.map(t)).then(() => i.default.removeItem(e)).catch(() => {
      __LOG__(4, undefined, new Error())`[time-spent] error flushing events for ${e}.`;
    });
  }
};
exports.parseStashedBitarrayData = l;
exports.postTsBitArrayEvent = s;
exports.stashAndFlushBitarray = function (e, t) {
  const n = o(e, t);
  Promise.all(n.map(s)).then(() => i.default.removeItem(t)).catch(() => {
    __LOG__(4, undefined, new Error())`[time-spent] error flushing events for ${t}.`;
  });
};
exports.stashBitarrayData = o;
var i = r(require("./236642.js"));
var a = require("./615698.js");
function o(e, t) {
  let n = `${e.bitmap[0]}`;
  for (let t = 1; t < e.bitmap.length; ++t) {
    n += `:${e.bitmap[t]}`;
  }
  const r = `${e.sessionId}:${e.sessionSeq}:${e.sessionCum}:${e.startTime}:${e.bitmapLen}${e.relativeStartTimeMs == null ? "" : `:${e.relativeStartTimeMs}`}$${n}`;
  const a = i.default.getItem(t);
  if (a == null) {
    i.default.setItem(t, r);
    return [e];
  }
  const o = l(a);
  o.push(e);
  i.default.setItem(t, `${a}_${r}`);
  return o;
}
function s(e) {
  var t;
  var n;
  const r = Number(e.sessionId);
  return new a.TsBitArrayWamEvent({
    tsSessionId: Number.isSafeInteger(r) ? r : -1,
    bitarrayLength: e.bitmapLen,
    bitarrayLow: e.bitmap[0],
    bitarrayHigh: (t = e.bitmap[1]) !== null && t !== undefined ? t : undefined,
    cumulativeBits: e.sessionCum,
    relativeTimestampMs: (n = e.relativeStartTimeMs) !== null && n !== undefined ? n : undefined,
    sessionSeq: e.sessionSeq
  }).commitAndWaitForFlush();
}
function l(e) {
  if (e.length === 0) {
    return [];
  } else {
    return e.split("_").map(u).filter(Boolean);
  }
}
function u(e) {
  const [t, n, ...r] = e.split("$");
  if (r.length || !n) {
    return void __LOG__(3)`Invalid stashed time spent event`;
  }
  const i = t.split(":");
  if (i.length !== 5 && i.length !== 6) {
    return void __LOG__(3)`Invalid stashed time spent event`;
  }
  const a = new Int32Array(n.split(":").map(e => Number(e)));
  const o = {
    sessionId: i[0],
    sessionSeq: Number(i[1]),
    sessionCum: Number(i[2]),
    startTime: Number(i[3]),
    bitmapLen: Number(i[4]),
    bitmap: a
  };
  if (i[5] != null) {
    o.relativeStartTimeMs = Number(i[5]);
  }
  return o;
}