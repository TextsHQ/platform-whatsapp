var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuContainer = function (e) {
  return o.default.createElement("div", {
    role: e.role,
    className: (0, l.default)(r.panelsMenuContainerStyles.container, e.theme === i.REACTIONS_CONTAINER && r.panelsMenuContainerStyles.reactionsContainer, e.theme === i.TAB_MARKER_SEPARATOR && r.panelsMenuContainerStyles.menuTabMakerReactions, e.theme === i.SHADOW && r.panelsMenuContainerStyles.shadow),
    onMouseDown: e => {
      e.stopPropagation();
    }
  }, e.children);
};
exports.MenuContainerTheme = undefined;
var r = require("./169016.js");
var o = a(require("../vendor/667294.js"));
var l = a(require("../app/156720.js"));
const i = require("../vendor/76672.js").Mirrored(["REACTIONS_CONTAINER", "TAB_MARKER_SEPARATOR", "SHADOW"]);
exports.MenuContainerTheme = i;