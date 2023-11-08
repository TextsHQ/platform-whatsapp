Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bytesToDebugString = a;
exports.debugStr = i;
exports.rebuildTemplate = function (e, t) {
  const n = [e[0]];
  t.forEach((t, r) => {
    n.push(i(t), e[r + 1]);
  });
  return n.join("");
};
var r = require("./390934.js");
function i(e) {
  if (typeof e == "string") {
    return `'${e}'`;
  }
  if (e == null || typeof e != "object") {
    return String(e);
  }
  if (Array.isArray(e)) {
    return `[${e.join(",")}]`;
  }
  if (e instanceof Uint8Array) {
    if (e.length < 64) {
      return `<<${a(e)}>>`;
    }
    {
      const t = e.subarray(0, 32);
      return `<<${a(t)}, ${e.length - t.length} more bytes>>`;
    }
  }
  if (e instanceof Error) {
    if (e.name) {
      return `(${e.name})`;
    } else {
      return "";
    }
  } else if (e.toString === Object.prototype.toString) {
    return JSON.stringify(e, (e, t) => e ? String(t) : t);
  } else {
    return String(e);
  }
}
function a(e) {
  let t = true;
  let n = e.length;
  for (; t && n;) {
    const r = e[--n];
    t = r >= 32 && r < 127;
  }
  if (t) {
    return JSON.stringify(String.fromCharCode.apply(String, e));
  } else {
    return (0, r.toHex)(e);
  }
}