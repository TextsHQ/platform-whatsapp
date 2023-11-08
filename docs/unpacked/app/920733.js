function n(e) {
  if (!e) {
    return e;
  }
  const t = e.replace(/[\u202a-\u202e\u2066-\u2069\u200E\u200F\u061C]/g, "�");
  const n = t.split(".");
  if (n.length === 1) {
    return t;
  }
  for (let e = n.length - 1; e > 0; e--) {
    const t = n[e].trim();
    if (t.length) {
      return n.slice(0, e).join(".") + "." + t;
    }
  }
  return t;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanFilename = n;
exports.cleanIncomingFilename = function (e) {
  if (!e) {
    return e;
  }
  const t = n(e);
  if (e !== t && t) {
    const e = t.split(".");
    const n = e.length >= 2 && e.pop();
    if (["bat", "exe", "cmd", "com", "lnk", "pif", "scr", "vb", "vbe", "vbs", "wsh", "js", "ps1", "hta", "sh", "csh", "msi", "app", "scpt", "applescript", "reg", "vbe", "wsf", "sct"].includes(n)) {
      __LOG__(2, true)`cleanIncomingFilename:extension: ${n || ""}`;
    }
  }
  return t;
};