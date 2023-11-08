Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCookie = function (e) {
  document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
exports.getCookie = function (e) {
  const t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
  if (t) {
    return t[2];
  }
  return;
};
exports.setCookie = function (e) {
  if (e.session) {
    delete e.expirationDate;
  }
  const t = [];
  ["name", "value", "domain", "path", "secure", "session", "expirationDate"].forEach(n => {
    const r = e[n];
    if (r !== undefined && n !== "value") {
      switch (n) {
        case "expirationDate":
          {
            const n = new Date(e.expirationDate);
            t.push(`expires=${n.toUTCString()}`);
            break;
          }
        case "secure":
          t.push("secure");
          break;
        case "name":
          {
            const n = e.value || "";
            t.push(`${String(r)}=${n}`);
            break;
          }
        default:
          t.push(`${n}=${String(r)}`);
      }
    }
  });
  document.cookie = t.join(";");
};