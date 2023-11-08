Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeChannelManager = function () {
  if (r != null) {
    r.close();
  }
};
exports.getChannelManager = function () {
  if (r == null) {
    r = new n();
  }
  return r;
};
class n {
  constructor() {
    this._sinkIsBusy = new Map();
    this._initializedChannel = new Map();
  }
  getChannelInitialized(e) {
    return this._initializedChannel.get(e) || false;
  }
  setChannelInitialized(e) {
    this._initializedChannel.set(e, true);
  }
  isSinkBusy(e) {
    return this._sinkIsBusy.get(e) || false;
  }
  setSinkBusy(e, t) {
    this._sinkIsBusy.set(e, t);
  }
  close() {
    this._sinkIsBusy.forEach((e, t) => {
      this._sinkIsBusy.set(t, false);
    });
    this._initializedChannel.forEach((e, t) => {
      this._initializedChannel.set(t, false);
    });
  }
}
let r;