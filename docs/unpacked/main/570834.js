Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  registerContainer(e) {
    this._containerAPI = e;
    if (this._listHandlers) {
      e.onRegisterList();
    }
  }
  unregisterContainer() {
    delete this._containerAPI;
  }
  triggerScroll() {
    if (this._listHandlers) {
      this._listHandlers.handleScroll();
    }
  }
  triggerLayout(e) {
    if (this._listHandlers) {
      this._listHandlers.handleLayout(e);
    }
  }
  registerList(e) {
    this._listHandlers = e;
    if (this._containerAPI) {
      this._containerAPI.onRegisterList();
    }
  }
  unregisterList() {
    delete this._listHandlers;
  }
  getScrollFromStart() {
    if (this._containerAPI) {
      return this._containerAPI.getScrollFromStart();
    }
  }
  setScrollFromStart(e) {
    if (this._containerAPI) {
      this._containerAPI.setScrollFromStart(e);
    }
  }
};