Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebdDrop = exports.UnexpectedJoinSubgroupResponse = exports.UnexpectedJoinGroupViaInviteResponse = exports.ServerStatusCodeError = exports.Server5xxDrop = exports.LogoutDrop = exports.EphemeralDrop = exports.E507 = exports.E499 = exports.E451 = exports.E404 = exports.E401 = exports.ConventionViolationDrop = exports.CatalogEditServerError = exports.BrowserReplacedDrop = undefined;
exports.attachErrorLogger = function (e, t) {
  return e.catch(e => {
    __LOG__(4, true, new Error(), true)`${t}, error`;
    SEND_LOGS(t);
    throw e;
  });
};
var r = require("./477689.js");
class i extends (0, r.customError)("ServerStatusCodeError") {
  constructor(e, t) {
    super(t);
    this.status = e;
    this.statusCode = e;
  }
}
exports.ServerStatusCodeError = i;
class a extends (0, r.customError)("ServerStatusCodeError") {
  constructor(e, t, n) {
    super(n);
    this.errors = t;
    this.status = e;
    this.statusCode = e;
  }
}
exports.CatalogEditServerError = a;
class o extends (0, r.customError)("E451", true, i) {
  constructor() {
    super(451, "commerce features disabled");
  }
}
exports.E451 = o;
class s extends (0, r.customError)("E401", true, i) {
  constructor(e) {
    super(401, e);
  }
}
exports.E401 = s;
class l extends (0, r.customError)("E404", true, i) {
  constructor(e) {
    super(404, e);
  }
}
exports.E404 = l;
class u extends (0, r.customError)("E499", true, i) {
  constructor(e) {
    super(499, e);
  }
}
exports.E499 = u;
class c extends (0, r.customError)("E507", true, i) {
  constructor(e, t) {
    super(507, e);
    this.backoff = Number.isNaN(t) ? null : t;
  }
}
exports.E507 = c;
class d extends (0, r.customError)("WebdDrop") {}
exports.WebdDrop = d;
class p extends (0, r.customError)("BrowserReplacedDrop", true, d) {}
exports.BrowserReplacedDrop = p;
class f extends (0, r.customError)("ConventionViolationDrop", true, d) {}
exports.ConventionViolationDrop = f;
class _ extends (0, r.customError)("Server5xxDrop", true, d) {}
exports.Server5xxDrop = _;
class g extends (0, r.customError)("LogoutDrop", true, d) {}
exports.LogoutDrop = g;
class m extends (0, r.customError)("EphemeralDrop", true, d) {}
exports.EphemeralDrop = m;
class h extends (0, r.customError)("UnexpectedJoinGroupViaInviteResponse") {
  constructor(e, t, n) {
    super(n);
    this.gid = e;
    this.membershipApprovalMode = t;
  }
}
exports.UnexpectedJoinGroupViaInviteResponse = h;
class y extends (0, r.customError)("UnexpectedJoinSubgroupResponse") {
  constructor(e, t) {
    super(t);
    this.membershipApprovalMode = e;
  }
}
exports.UnexpectedJoinSubgroupResponse = y;