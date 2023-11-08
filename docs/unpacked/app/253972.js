var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LruCache = undefined;
var i = r(require("./415227.js"));
var a = require("./685639.js");
class o {
  constructor(e, t) {
    this.key = e;
    this.value = t;
    this.prev = null;
    this.next = null;
  }
}
exports.LruCache = class {
  constructor(e) {
    var t;
    this._keyToNode = new Map();
    this.purgeNow = () => {
      for (let e = this._placeholderTail.prev; this._currentSize > this._sizeLimit && e !== this._placeholderHead; e = e ? e.prev : null) {
        if (e == null) {
          throw (0, i.default)("The linked list is not constructed properly.");
        }
        const {
          key: t,
          value: n
        } = e;
        if (this._shouldEvict(t, n)) {
          this.delete(t);
          if (this._onEvict) {
            this._onEvict(t, n);
          }
        }
      }
      if (this._onPurge) {
        this._onPurge(this._keyToNode);
      }
    };
    this._sizeLimit = e.sizeLimit;
    this._getSize = e.getSize;
    this._onPurge = e.onPurge;
    this._shouldEvict = (t = e.shouldEvict) !== null && t !== undefined ? t : () => true;
    this._onEvict = e.onEvict;
    this._onAdd = e.onAdd;
    this._onDelete = e.onDelete;
    this._currentSize = 0;
    this._placeholderHead = new o("placeholder-head", null);
    this._placeholderTail = new o("placeholder-tail", null);
    this._placeholderHead.next = this._placeholderTail;
    this._placeholderTail.prev = this._placeholderHead;
    this._purgeTimer = new a.ShiftTimer(() => this.purgeNow());
  }
  get(e) {
    if (!this._keyToNode.has(e)) {
      return null;
    }
    const t = this._keyToNode.get(e);
    if (t == null) {
      return null;
    }
    const n = t.prev;
    const r = t.next;
    if (n) {
      n.next = r;
    }
    if (r) {
      r.prev = n;
    }
    const a = this._placeholderHead.next;
    if (a == null) {
      throw (0, i.default)("The linked list is not constructed properly.");
    }
    this._placeholderHead.next = t;
    a.prev = t;
    t.prev = this._placeholderHead;
    t.next = a;
    return t.value;
  }
  has(e) {
    return this._keyToNode.has(e);
  }
  touch(e) {
    this.get(e);
  }
  put(e, t) {
    if (this._sizeLimit !== 0) {
      if (this._getSize(t) > this._sizeLimit) {
        __LOG__(3)`Blob size is larger than the limit of the whole store.`;
      } else {
        this.delete(e);
        this._add(e, t);
        this.schedulePurge();
      }
    }
  }
  _add(e, t) {
    const n = new o(e, t);
    this._keyToNode.set(e, n);
    const r = this._placeholderHead.next;
    if (r == null) {
      throw (0, i.default)("The linked list is not constructed properly.");
    }
    this._placeholderHead.next = n;
    r.prev = n;
    n.prev = this._placeholderHead;
    n.next = r;
    this._currentSize += this._getSize(t);
    if (this._onAdd) {
      this._onAdd(e, t);
    }
  }
  delete(e) {
    if (!this._keyToNode.has(e)) {
      return;
    }
    const t = this._keyToNode.get(e);
    if (t == null) {
      return;
    }
    this._currentSize -= this._getSize(t.value);
    const n = t.prev;
    const r = t.next;
    if (n) {
      n.next = r;
    }
    if (r) {
      r.prev = n;
    }
    this._keyToNode.delete(e);
    if (this._onDelete) {
      this._onDelete(e, t.value);
    }
  }
  clear() {
    this._keyToNode.clear();
    this._currentSize = 0;
    this._placeholderHead.next = this._placeholderTail;
    this._placeholderTail.prev = this._placeholderHead;
    if (this._onClear) {
      this._onClear();
    }
  }
  schedulePurge() {
    this._purgeTimer.onOrBefore(1000);
  }
  getCurrentSize() {
    return this._currentSize;
  }
  getPlaceholderHead() {
    return this._placeholderHead;
  }
};