Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateImmediately = exports.Unmount = exports.UnableToPlayVideoError = exports.UnableToGetContentLengthError = exports.TranscodeBlobTooLargeError = exports.SourceUnavailableError = exports.SocketNotOpen = exports.SocketError = exports.SocketClosed = exports.ServerStatusError = exports.RMRNotSupportedOnNewsletterMessagesError = exports.OverconstrainedError = exports.Offline = exports.NotSupportedError = exports.NotFoundError = exports.NotAllowedError = exports.ModelError = exports.ModelCreateError = exports.MediaUnsupportedError = exports.MediaNeedsReupload = exports.MediaMissing = exports.MediaLoadError = exports.MediaHashMismatch = exports.MediaFileFailedLoad = exports.MediaFileError = exports.MediaFileEmpty = exports.MediaEncryptionError = exports.MediaDragDropError = exports.MediaDecryptionError = exports.InvalidServerResponseError = exports.InvalidMediaFileType = exports.InvalidImageFileType = exports.ImageError = exports.GetUserMediaError = exports.GetUserMedia = exports.GaveUpRetry = exports.FileNotReadableError = exports.EncodeWebpError = exports.DecodeWebpResultsError = exports.DbOnLogoutAbort = exports.DbNotFoundOnTakeover = exports.DbMsgEncKeyNotLoaded = exports.DbEncKeyNotLoaded = exports.DbClosedOnTakeover = exports.DBInvalidFtsHMACKey = exports.ConstraintNotSatisfiedError = exports.CatalogImageDownloadError = exports.CapabilityUnknown = exports.CapabilityInvalid = exports.CapabilityError = exports.CanNotSendUnencrypted = exports.BlockedByProxy = exports.BingServerError = exports.ActiveChatChanged = exports.ActionError = undefined;
var r = require("./477689.js");
class i extends (0, r.customError)("Offline") {}
exports.Offline = i;
class a extends (0, r.customError)("GaveUpRetry") {}
exports.GaveUpRetry = a;
class o extends (0, r.customError)("CatalogImageDownloadError") {}
exports.CatalogImageDownloadError = o;
class s extends (0, r.customError)("MediaFileError") {}
exports.MediaFileError = s;
class l extends (0, r.customError)("InvalidImageFileType", true, s) {}
exports.InvalidImageFileType = l;
class u extends (0, r.customError)("InvalidMediaFileType", true, s) {}
exports.InvalidMediaFileType = u;
class c extends (0, r.customError)("MediaEncryptionError", true, s) {}
exports.MediaEncryptionError = c;
class d extends (0, r.customError)("MediaDecryptionError", true, s) {}
exports.MediaDecryptionError = d;
class p extends (0, r.customError)("MediaDecryptionError", true, s) {}
exports.MediaHashMismatch = p;
class f extends (0, r.customError)("MediaFileFailedLoad", true, s) {}
exports.MediaFileFailedLoad = f;
class _ extends (0, r.customError)("MediaFileEmpty", true, s) {}
function g(e) {
  try {
    return JSON.stringify(e);
  } catch (t) {
    return e.toString();
  }
}
exports.MediaFileEmpty = _;
class m extends (0, r.customError)("SocketError") {
  constructor(e) {
    super(typeof e == "string" ? e : g(e));
    this.event = e;
  }
}
exports.SocketError = m;
class h extends (0, r.customError)("SocketClosed") {
  constructor(e) {
    super(typeof e == "string" ? e : g(e));
    this.event = e;
  }
}
exports.SocketClosed = h;
class y extends (0, r.customError)("SocketNotOpen") {
  constructor(e) {
    super(`socket not open, is ${e}`);
  }
}
exports.SocketNotOpen = y;
class E extends (0, r.customError)("BlockedByProxy") {}
exports.BlockedByProxy = E;
class S extends (0, r.customError)("ImageError") {
  constructor(e, t) {
    super("Image failed to load.");
    this.src = e;
    this.status = t;
    this.target = {
      src: e,
      status: t
    };
  }
}
exports.ImageError = S;
class v extends (0, r.customError)("DecodeWebpResultsError") {
  constructor(e, t) {
    super(e);
    this.event = t;
  }
}
exports.DecodeWebpResultsError = v;
class T extends (0, r.customError)("DecodeWebpError") {
  constructor(e, t) {
    super(e);
    this.event = t;
  }
}
exports.EncodeWebpError = T;
class M extends (0, r.customError)("ServerStatusError") {
  constructor(e, t, n) {
    super(`${e || "Server replied with a failed status code"}: ${n}`);
    this.url = t;
    this.status = n;
  }
}
exports.ServerStatusError = M;
class A extends (0, r.customError)("InvalidServerResponseError") {
  constructor(e, t, n) {
    let r = `Invalid response for ${e}, with status ${t}`;
    if (n) {
      r = `${r}: ${n}`;
    }
    super(r);
  }
}
exports.InvalidServerResponseError = A;
class b extends (0, r.customError)("BingServerError", true, M) {
  constructor(e, t, n) {
    super(`Error ${t} for ${e}: ${JSON.stringify(n)}`, e, t);
  }
}
exports.BingServerError = b;
class C extends (0, r.customError)("MediaNeedsReupload") {}
exports.MediaNeedsReupload = C;
class P extends (0, r.customError)("MediaMissing") {}
exports.MediaMissing = P;
P.message = "Media is no longer available on your phone";
class O extends (0, r.customError)("FileNotReadableError", true, Error) {}
exports.FileNotReadableError = O;
class I extends (0, r.customError)("MediaLoadError") {
  constructor(e) {
    super(e);
    this.src = e;
  }
}
exports.MediaLoadError = I;
class R extends (0, r.customError)("TranscodeBlobTooLargeError") {
  constructor() {
    super("Transcode blob too large");
  }
}
exports.TranscodeBlobTooLargeError = R;
class N extends (0, r.customError)("UnableToPlayVideoError") {
  constructor(e) {
    super(`Unable to play video. Reason: ${String(e)}`);
  }
}
exports.UnableToPlayVideoError = N;
class D extends (0, r.customError)("MediaDragDropError", true, I) {}
exports.MediaDragDropError = D;
class w extends (0, r.customError)("MediaUnsupportedError") {}
exports.MediaUnsupportedError = w;
w.message = "Media format is unsupported";
class L extends (0, r.customError)("ModelError") {}
exports.ModelError = L;
class k extends (0, r.customError)("ModelCreateError") {
  constructor(e, t) {
    super(e);
    this.model = t;
  }
}
exports.ModelCreateError = k;
class G extends (0, r.customError)("DbEncKeyNotLoadedError") {
  constructor(e) {
    super(`MasterDatabaseEncryptionKey.${e} was accessed before init`);
  }
}
exports.DbEncKeyNotLoaded = G;
class U extends (0, r.customError)("DbMsgEncKeyNotLoadedError") {
  constructor(e) {
    super(`MasterDatabaseMessageEncryptionKey.${e} was accessed before init`);
  }
}
exports.DbMsgEncKeyNotLoaded = U;
class x extends (0, r.customError)("DbOnLogoutAbortError") {}
exports.DbOnLogoutAbort = x;
x.message = "DB operation was dropped due to logout activity";
class B extends (0, r.customError)("DbClosedOnTakeover") {}
exports.DbClosedOnTakeover = B;
B.message = "DB operation was dropped due to session takeover (DB closed)";
class F extends (0, r.customError)("DbNotFoundOnTakeover") {}
exports.DbNotFoundOnTakeover = F;
F.message = "DB operation was dropped due to session takeover (DB not found)";
class j extends (0, r.customError)("DBExpiredFtsHMACKey") {}
exports.DBInvalidFtsHMACKey = j;
j.message = "MasterDatabaseEncryptionKey.fts_hmac_keys is in an invalid state";
class Y extends (0, r.customError)("UpdateImmediately") {}
exports.UpdateImmediately = Y;
class K extends (0, r.customError)("CapabilityError") {}
exports.CapabilityError = K;
class W extends (0, r.customError)("CapabilityInvalid", true, K) {}
exports.CapabilityInvalid = W;
class V extends (0, r.customError)("CapabilityUnknown", true, K) {}
exports.CapabilityUnknown = V;
class H extends (0, r.customError)("CanNotSendUnencrypted") {}
exports.CanNotSendUnencrypted = H;
class $ extends (0, r.customError)("ActionError") {}
exports.ActionError = $;
$.message = "Could not perform action.";
class z extends (0, r.customError)("Unmount") {}
exports.Unmount = z;
class q extends (0, r.customError)("ActiveChatChanged") {}
exports.ActiveChatChanged = q;
class J extends (0, r.customError)("GetUserMediaError") {}
exports.GetUserMediaError = J;
class Q extends (0, r.customError)("NotSupportedError", true, J) {}
exports.NotSupportedError = Q;
Q.message = "The operation is not supported.";
class X extends (0, r.customError)("NotAllowedError", true, J) {}
exports.NotAllowedError = X;
X.message = "The user did not grant permission for the operation";
class Z extends (0, r.customError)("RMRNotSupportedOnNewsletterMessagesError") {
  constructor(e) {
    super(`RMR attempted on a newsletter message of media type ${e}, newsletter messages do not support media reupload requests`);
    this.mediaType = e;
  }
}
exports.RMRNotSupportedOnNewsletterMessagesError = Z;
class ee extends (0, r.customError)("ConstraintNotSatisfiedError", true, J) {}
exports.ConstraintNotSatisfiedError = ee;
ee.message = "One of the mandatory Constraints could not be satisfied.";
class te extends (0, r.customError)("OverconstrainedError", true, J) {}
exports.OverconstrainedError = te;
te.message = "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.";
class ne extends (0, r.customError)("NotFoundError", true, J) {}
exports.NotFoundError = ne;
ne.message = "The object can not be found here.";
class re extends (0, r.customError)("SourceUnavailableError", true, J) {}
exports.SourceUnavailableError = re;
re.message = "The source of the MediaStream could not be accessed due to a hardware error (e.g. lock from another process).";
class ie extends (0, r.customError)("UnableToGetContentLengthError") {}
exports.UnableToGetContentLengthError = ie;
ie.message = "Failed to get media contentLength from mms";
const ae = {
  GetUserMediaError: J,
  NotSupportedError: Q,
  NotAllowedError: X,
  ConstraintNotSatisfiedError: ee,
  OverconstrainedError: te,
  NotFoundError: ne,
  SourceUnavailableError: re
};
exports.GetUserMedia = ae;