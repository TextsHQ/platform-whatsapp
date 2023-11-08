Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsatisfiableJobRequirement = exports.JobRequirement = undefined;
exports.joinRequirements = function (e, t) {
  const n = e.filter(e => !e.isSatisfiable());
  if (n.length > 0) {
    const e = n.map(e => e.name);
    return r => {
      if (!(t == null)) {
        t("unsatisfiable", e, r);
      }
      return n[0].waitUntilSatisfied();
    };
  }
  let r = e.map(() => Promise.resolve());
  let i = Promise.resolve();
  let a = null;
  const o = () => {
    if (r.every((t, n) => t === e[n].waitUntilSatisfied())) {
      return void (a = null);
    }
    const t = [];
    const n = e.map(e => {
      const n = e.waitUntilSatisfied();
      if (!e.isSatisfied()) {
        t.push(e.name);
        n.then(() => {
          const n = t.indexOf(e.name);
          t.splice(n, 1);
        });
      }
      return n;
    });
    r = n;
    a = t;
    return Promise.all(n).then(o);
  };
  return e => {
    if (a == null) {
      const e = o();
      if (e != null) {
        i = i.then(() => e);
      }
    }
    if (!(t == null)) {
      t(a == null ? "satisfied" : "unsatisfied", a, e);
    }
    return i;
  };
};
class n {
  constructor(e) {
    this._waitingOn = Promise.resolve();
    this._satisfied = true;
    this._newBlockers = null;
    this._blockersFinished = () => {
      const e = this._newBlockers;
      if (e != null) {
        this._newBlockers = null;
        return Promise.all(e).then(this._blockersFinished);
      }
      this._satisfied = true;
    };
    this.name = e;
  }
  addBlocker(e) {
    const t = e.catch(e => {
      __LOG__(4, undefined, new Error(), true)`JobRequirement[${this.name}] blocker errored ${e}`;
      SEND_LOGS("job-blocker-rejected");
    });
    if (this._satisfied) {
      this._satisfied = false;
      this._waitingOn = Promise.all([this._waitingOn, t]).then(this._blockersFinished);
    } else {
      const e = this._newBlockers;
      if (e != null) {
        e.push(t);
      } else {
        this._newBlockers = [t];
      }
    }
  }
  waitUntilSatisfied() {
    return this._waitingOn;
  }
  isSatisfied() {
    return this._satisfied;
  }
  isSatisfiable() {
    return true;
  }
}
exports.JobRequirement = n;
exports.UnsatisfiableJobRequirement = class extends n {
  constructor(e) {
    super(e);
    super.addBlocker(new Promise(() => {}));
  }
  addBlocker() {}
  isSatisfiable() {
    return false;
  }
};