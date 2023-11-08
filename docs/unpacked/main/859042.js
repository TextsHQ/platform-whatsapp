Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMenuWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./332165.js");
var o = require("./134650.js");
const l = (0, a.defineEvents)({
  WebcMenu: [2504, {
    webcMenuAction: [2, o.WEBC_MENU_TYPE],
    webcMenuItemLabel: [3, r.WEBC_MENU_ITEM_LABEL]
  }, [1, 1, 1], "regular"]
});
exports.WebcMenuWamEvent = l;