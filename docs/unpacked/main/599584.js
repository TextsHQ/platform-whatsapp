var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLexicalOnContentChange = function (e) {
  const [t] = (0, r.useLexicalComposerContext)();
  const n = (0, l.default)(e);
  (0, o.useEffect)(() => t.registerTextContentListener(e => {
    n(e);
  }), [t, n]);
};
var r = require("../main-chunk/71671.js");
var o = require("../vendor/667294.js");
var l = a(require("../app/17533.js"));