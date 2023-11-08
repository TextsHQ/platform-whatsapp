var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncResponseParser = undefined;
var i = r(require("../vendor/73982.js"));
var a = require("./122393.js");
var o = require("./65461.js");
var s = require("./256764.js");
var l = require("./787685.js");
const u = new (require("./347387.js").WapParser)("syncResponseParser", e => {
  __LOG__(2)`syncd: start parsing syncd collections`;
  const t = [];
  e.child("sync").mapChildrenWithTag("collection", e => {
    const n = (0, i.default)({}, null);
    const r = a.CollectionName.cast(e.attrString("name"));
    if (!r) {
      throw new s.SyncdFatalError("invalid collection name");
    }
    n.name = r;
    n.state = function (e, t) {
      if (!e.hasAttr("type") || e.attrString("type") !== "error") {
        if (e.hasAttr("has_more_patches")) {
          __LOG__(2)`syncd: collection ${t} got server code has_more_patches`;
          return a.CollectionState.SuccessHasMore;
        } else {
          __LOG__(2)`syncd: collection ${t} did not get server error`;
          return a.CollectionState.Success;
        }
      }
      {
        const n = e.child("error");
        const r = n.attrString("code");
        const i = n.attrString("text");
        __LOG__(2)`syncd: collection ${t} got server error: ${r}`;
        switch (r) {
          case "409":
            if (e.hasAttr("has_more_patches")) {
              return a.CollectionState.ConflictHasMore;
            } else {
              return a.CollectionState.Conflict;
            }
          case "400":
            (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.XMPP_BAD_REQUEST_FOR_COLLECTION);
            __LOG__(4, undefined, new Error(), true)`syncd: fatal error: collection ${String(t)} throws ${i}`;
            SEND_LOGS(`syncd: fatal error 400: collection ${String(t)}`);
            return a.CollectionState.ErrorFatal;
          case "404":
            (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.XMPP_NOT_FOUND_FOR_COLLECTION);
            __LOG__(4, undefined, new Error(), true)`syncd: fatal error 404: collection ${String(t)} throws ${i}`;
            SEND_LOGS(`syncd: fatal error: collection ${String(t)}`);
            return a.CollectionState.ErrorFatal;
          default:
            __LOG__(3, undefined, undefined, true)`syncd: retryable error: collection ${String(t)} throws ${i}`;
            SEND_LOGS(`syncd: retryable error: collection ${String(t)}`);
            return a.CollectionState.ErrorRetry;
        }
      }
    }(e, n.name);
    if (e.hasAttr("version")) {
      n.version = parseInt(e.attrString("version"), 10);
    }
    if (e.hasChild("patches")) {
      n.patches = e.child("patches").mapChildrenWithTag("patch", e => (0, o.decodeSyncdPatch)(r, e.contentBytes()));
    }
    if (e.hasChild("snapshot")) {
      n.snapshot = (0, o.decodeExternalBlobReference)(r, e.child("snapshot").contentBytes());
    }
    t.push(n);
    if (n.version == null && n.patches == null && n.snapshot == null) {
      __LOG__(2)`syncd: collection ${r} has no version, patches or snapshot`;
    }
    __LOG__(2)`syncd: successfully parsed collection ${r}`;
  });
  return t;
});
exports.syncResponseParser = u;