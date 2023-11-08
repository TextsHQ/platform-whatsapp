var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const {
    canCompose: n,
    onDragEnter: a
  } = t;
  const i = (0, l.useRef)(false);
  const u = (0, l.useRef)(null);
  return [u, {
    onDragStart: () => {
      if (n) {
        i.current = true;
      }
    },
    onDragEnd: () => {
      if (n) {
        i.current = false;
      }
    },
    onDragEnter: t => {
      if (!n) {
        return;
      }
      const l = u.current;
      if (l != null) {
        const n = l.getCurrentComposeContent();
        a();
        const u = new o.default(t.dataTransfer);
        if (!i.current && (u.hasType("Files") || u.hasType("text/uri-list") || u.hasType("text/html"))) {
          l.flushSaveComposeContentDebounced();
          r.Cmd.attachMediaDrawer({
            chat: e,
            initCaption: n,
            onComplete: l.updateTextAfterMediaDrawerClose
          });
          t.stopPropagation();
          t.preventDefault();
        }
      }
    }
  }];
};
var r = require("../app/780549.js");
var o = a(require("../main-chunk/194886.js"));
var l = require("../vendor/667294.js");