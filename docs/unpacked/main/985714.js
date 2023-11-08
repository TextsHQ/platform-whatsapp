Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyTextToClipboard = function (e) {
  var t;
  const n = document.createElement("textarea");
  n.id = "COPY_TO_CLIPBOARD_ELEMENT_ID";
  n.textContent = e;
  if (!((t = document.body) === null || t === undefined)) {
    t.appendChild(n);
  }
  n.select();
  let a = false;
  try {
    document.execCommand("copy");
    a = true;
  } catch (e) {
    a = false;
  } finally {
    var r;
    if (!((r = document.body) === null || r === undefined)) {
      r.removeChild(n);
    }
  }
  return a;
};
exports.copyToClipboard = function (e) {
  window.getSelection().removeAllRanges();
  const t = document.getElementById(e);
  const n = document.createRange();
  if (t) {
    n.selectNode(t);
  }
  window.getSelection().addRange(n);
  try {
    const e = document.execCommand("copy");
    window.getSelection().removeAllRanges();
    return e;
  } catch (e) {
    return false;
  }
};