/**
 * An implementation of the standard DOMException and DOMError interfaces
 *
 * @module w3c-domcore-errors
 * @see http://www.w3.org/TR/dom/#errors
 * @see http://dom.spec.whatwg.org/#errors
 *
 * @author Alexandre Morgaut (http://github.com/AMorgaut)
 * @license MIT
 **/
var n;
var r;
function i(e, t) {
  var r;
  r = n[e] || {};
  this.name = e || this.name || "DOMError";
  this.code = r.code || 0;
  this.message = t || this.message || r.message || this.name;
}
function a(e) {
  var t;
  t = n[e] || {};
  this.code = t.code || 0;
  this.message = t.message || e;
  this.name = e;
}
a.prototype = Object.create(Error.prototype);
n = {
  IndexSizeError: {
    message: "The index is not in the allowed range",
    constantName: "INDEX_SIZE_ERR",
    code: 1
  },
  HierarchyRequestError: {
    message: "The operation would yield an incorrect node tree.",
    constantName: "HIERARCHY_REQUEST_ERR",
    code: 3
  },
  WrongDocumentError: {
    message: "The object is in the wrong document.",
    constantName: "WRONG_DOCUMENT_ERR",
    code: 4
  },
  InvalidCharacterError: {
    message: "The string contains invalid characters.",
    constantName: "INVALID_CHARACTER_ERR",
    code: 5
  },
  NoModificationAllowedError: {
    message: "The object can not be modified.",
    constantName: "NO_MODIFICATION_ALLOWED_ERR",
    code: 7
  },
  NotFoundError: {
    message: "The object can not be found here.",
    constantName: "NOT_FOUND_ERR",
    code: 8
  },
  NotSupportedError: {
    message: "The operation is not supported.",
    constantName: "NOT_SUPPORTED_ERR",
    code: 9
  },
  InvalidStateError: {
    message: "The object is in an invalid state.",
    constantName: "INVALID_STATE_ERR",
    code: 11
  },
  SyntaxError: {
    message: "The string did not match the expected pattern",
    constantName: "SYNTAX_ERR",
    code: 12
  },
  InvalidModificationError: {
    message: "The object can not be modified in this way",
    constantName: "INVALID_MODIFICATION_ERR",
    code: 13
  },
  NamespaceError: {
    message: "The operation is not allowed by Namespaces in XML.",
    constantName: "NAMESPACE_ERR",
    code: 14
  },
  InvalidAccessError: {
    message: "The object does not support the operation or argument.",
    constantName: "INVALID_ACCESS_ERR",
    code: 15
  },
  SecurityError: {
    message: "The operation is insecure.",
    constantName: "SECURITY_ERR",
    code: 18
  },
  NetworkError: {
    message: "A network error occurred.",
    constantName: "NETWORK_ERR",
    code: 19
  },
  AbortError: {
    message: "The operation was aborted.",
    constantName: "ABORT_ERR",
    code: 20
  },
  URLMismatchError: {
    message: "The given URL does not match another URL.",
    constantName: "URL_MISMATCH_ERR",
    code: 21
  },
  QuotaExceededError: {
    message: "The quota has been exceeded.",
    constantName: "QUOTA_EXCEEDED_ERR",
    code: 22
  },
  TimeoutError: {
    message: "The operation timed out.",
    constantName: "TIMEOUT_ERR",
    code: 23
  },
  InvalidNodeTypeError: {
    message: "The supplied node is incorrect or has an incorrect ancestor for this operation.",
    constantName: "INVALID_NODE_TYPE_ERR",
    code: 24
  },
  DataCloneError: {
    message: "The object can not be cloned.",
    constantName: "DATA_CLONE_ERR",
    code: 25
  },
  EncodingError: {
    message: "The encoding operation (either encoded or decoding) failed."
  }
};
r = {};
["", "INDEX_SIZE_ERR", "DOMSTRING_SIZE_ERR", "HIERARCHY_REQUEST_ERR", "WRONG_DOCUMENT_ERR", "INVALID_CHARACTER_ERR", "NO_DATA_ALLOWED_ERR", "NO_MODIFICATION_ALLOWED_ERR", "NOT_FOUND_ERR", "NOT_SUPPORTED_ERR", "INUSE_ATTRIBUTE_ERR", "INVALID_STATE_ERR", "SYNTAX_ERR", "INVALID_MODIFICATION_ERR", "NAMESPACE_ERR", "INVALID_ACCESS_ERR", "VALIDATION_ERR", "TYPE_MISMATCH_ERR", "SECURITY_ERR", "NETWORK_ERR", "ABORT_ERR", "URL_MISMATCH_ERR", "QUOTA_EXCEEDED_ERR", "TIMEOUT_ERR", "INVALID_NODE_TYPE_ERR", "DATA_CLONE_ERR"].forEach(function (e, t) {
  var n;
  n = {
    writable: false,
    enumerable: true,
    configurable: false,
    value: t
  };
  r[e] = n;
});
Object.defineProperties(a, r);
Object.defineProperties(a.prototype, r);
exports.DOMException = a;
exports.DOMError = i;
exports.Polyfill = function () {
  if (!this.hasOwnProperty("DOMException")) {
    this.DOMException = a;
  }
  if (!this.hasOwnProperty("DOMError")) {
    this.DOMError = i;
  }
};