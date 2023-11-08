var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISIBILITY_WITH_ERROR = exports.VISIBILITY = exports.ONLINE_VISIBILITY_WITH_ERROR = exports.ONLINE_VISIBILITY = exports.CALL_ADD_WITH_ERROR = exports.CALL_ADD = exports.ALL_NONE_WITH_ERROR = exports.ALL_NONE = undefined;
var i = r(require("../vendor/81109.js"));
const a = {
  all: "all",
  contacts: "contacts",
  contact_blacklist: "contact_blacklist",
  none: "none"
};
exports.VISIBILITY = a;
const o = (0, i.default)((0, i.default)({}, a), {}, {
  error: "error"
});
exports.VISIBILITY_WITH_ERROR = o;
const s = {
  all: "all",
  none: "none"
};
exports.ALL_NONE = s;
const l = {
  all: "all",
  match_last_seen: "match_last_seen"
};
exports.ONLINE_VISIBILITY = l;
const u = (0, i.default)((0, i.default)({}, l), {}, {
  error: "error"
});
exports.ONLINE_VISIBILITY_WITH_ERROR = u;
const c = (0, i.default)((0, i.default)({}, s), {}, {
  error: "error"
});
exports.ALL_NONE_WITH_ERROR = c;
const d = {
  all: "all",
  known: "known"
};
exports.CALL_ADD = d;
const p = (0, i.default)((0, i.default)({}, d), {}, {
  error: "error"
});
exports.CALL_ADD_WITH_ERROR = p;