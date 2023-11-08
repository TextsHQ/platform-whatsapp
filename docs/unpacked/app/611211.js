Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeTrailingSlash = exports.ORIGIN = exports.OPTIONAL_PATH_PART = exports.OPTIONAL_NON_CAPTURING_PATH_PART = undefined;
var r = require("./508247.js");
const i = e => e.replace(/\/+$/, "");
exports.removeTrailingSlash = i;
const a = i(r.BUILD_URL).replace(/[\/\.]/g, "\\$&");
exports.ORIGIN = a;
exports.OPTIONAL_PATH_PART = "((?:/\\w+)*)";
exports.OPTIONAL_NON_CAPTURING_PATH_PART = "(?:(?:/\\w+)*)";