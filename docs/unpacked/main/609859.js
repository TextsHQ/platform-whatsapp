Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaListener = function (e) {
  const {
    forceUpdate: t
  } = e;
  const n = (0, l.useModelValues)(e.mediaData, ["isGif"]);
  (0, r.useEffect)(() => {
    t();
  }, [n, t]);
  return null;
};
exports.SelectionListener = function (e) {
  const {
    msgId: t,
    selectedMessages: n,
    parent: a
  } = e;
  (0, o.useListener)(n, t, e => {
    a.onSelectChange(e);
  });
  return null;
};
exports.WhileFocusedListener = function (e) {
  const {
    parent: t
  } = e;
  (0, o.useListener)(a.Cmd, "scroll_to_focused_msg", (e, n) => {
    t.scrollMsg(e, n);
  });
  (0, o.useListener)(a.Cmd, "flash_focused_msg", () => {
    var e;
    if (!((e = t.highlight) === null || e === undefined)) {
      e.call(t);
    }
  });
  (0, o.useListener)(a.Cmd, "flash_mention_msg", () => {
    var e;
    if (!((e = t.highlightMention) === null || e === undefined)) {
      e.call(t);
    }
  });
  return null;
};
var a = require("../app/780549.js");
var r = require("../vendor/667294.js");
var o = require("../app/808446.js");
var l = require("../app/655241.js");