Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
class n {
  constructor(e) {
    const {
      points: t,
      color: n,
      thickness: r,
      smoothing: i
    } = e;
    this._points = [...t];
    this._color = n;
    this._thickness = r;
    this._smoothing = i;
    Object.freeze(this);
  }
  update(e) {
    let t = this.points;
    let r = this.color;
    let i = this.thickness;
    let a = this.smoothing;
    if (e.points != null) {
      t = e.points;
    }
    if (e.color != null) {
      r = e.color;
    }
    if (e.thickness != null) {
      i = e.thickness;
    }
    if (e.smoothing != null) {
      a = e.smoothing;
    }
    return new n({
      points: t,
      color: r,
      thickness: i,
      smoothing: a
    });
  }
  clone() {
    const e = {
      points: [...this.points],
      color: this.color.clone(),
      thickness: this.thickness,
      smoothing: this.smoothing
    };
    return new n(e);
  }
  toString() {
    return `points: [${this.points.map(e => e.toString()).join(", ")}]\ncolor: ${this.color.toString()}\nthickness: ${this.thickness}`;
  }
  equals(e) {
    return this.color.equals(e.color) && Math.abs(this.thickness - e.thickness) < Number.EPSILON && this.points.length === e.points.length && this.points.every((t, n) => t.equals(e.points[n]));
  }
  isDrag() {
    return this.points.length > 1;
  }
  isSmooth() {
    return this.smoothing || this.isDrag();
  }
  get points() {
    return this._points;
  }
  get color() {
    return this._color;
  }
  get thickness() {
    return this._thickness;
  }
  get smoothing() {
    return this._smoothing;
  }
}
exports.default = n;