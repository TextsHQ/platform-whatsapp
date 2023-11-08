Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchCollection = undefined;
exports.SearchCollection = class {
  constructor(e) {
    this.models = [];
    this.models = e;
  }
  query(e, t) {
    let n;
    if (t != null && t.pageLengthPerModel != null) {
      n = {
        pagination: {
          pageLength: t.pageLengthPerModel,
          page: 0
        }
      };
    }
    return this.models.map(t => t.query(e, n)).filter(Boolean);
  }
};