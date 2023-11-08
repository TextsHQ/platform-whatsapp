var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/904704.js");
var o = a(require("./23358.js"));
function l(e) {
  return (e.getHours() << 6 | e.getMinutes()) << 5 | e.getSeconds() / 2;
}
function i(e) {
  return (e.getFullYear() - 1980 << 4 | e.getMonth() + 1) << 5 | e.getDate();
}
const u = /[^\x00-\x7F]/g;
exports.default = class {
  constructor() {
    this.files = [];
    this.filenameCount = {};
  }
  add(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
    let a = function (e) {
      return e.replace(/\\/, "/").replace(u, "");
    }(t);
    if (this.filenameCount[a] >= 0) {
      this.filenameCount[a] += 1;
      a = a.replace(/\.(\w+)$/, " (" + this.filenameCount[a] + ").$1");
    } else {
      this.filenameCount[a] = 0;
    }
    this.files.push([e, {
      crc: (0, o.default)(e),
      path: a,
      date: n
    }]);
  }
  create() {
    let e = 0;
    let t = 0;
    let n = 0;
    const a = [];
    const o = [];
    this.files.forEach(u => {
      const [s] = u;
      const c = s.size();
      const d = function (e) {
        let [t, {
          path: n,
          crc: a,
          date: o
        }] = e;
        const u = new r.Binary(undefined, true);
        u.ensureCapacity(30 + n.length);
        u.writeUint32(67324752);
        u.writeUint8(10);
        u.writeUint8(0);
        u.writeUint16(0);
        u.writeUint16(0);
        u.writeUint16(l(o));
        u.writeUint16(i(o));
        u.writeUint32(a);
        u.writeUint32(t.size());
        u.writeUint32(t.size());
        u.writeUint16(n.length);
        u.writeUint16(0);
        u.writeString(n);
        return u;
      }(u);
      const f = function (e, t) {
        let [n, {
          path: a,
          crc: o,
          date: u
        }] = e;
        const s = new r.Binary(undefined, true);
        s.ensureCapacity(46 + a.length);
        s.writeUint32(33639248);
        s.writeUint8(10);
        s.writeUint8(0);
        s.writeUint8(10);
        s.writeUint8(0);
        s.writeUint16(0);
        s.writeUint16(0);
        s.writeUint16(l(u));
        s.writeUint16(i(u));
        s.writeUint32(o);
        s.writeUint32(n.size());
        s.writeUint32(n.size());
        s.writeUint16(a.length);
        s.writeUint16(0);
        s.writeUint16(0);
        s.writeUint16(0);
        s.writeUint16(0);
        s.writeUint32(0);
        s.writeUint32(t);
        s.writeString(a);
        return s;
      }(u, n);
      const p = d.size() + c;
      n += p;
      e += p + f.size();
      t += f.size();
      o.push(d, s);
      a.push(f);
    });
    const u = function (e, t, n) {
      const a = new r.Binary(undefined, true);
      a.ensureCapacity(22);
      a.writeUint32(101010256);
      a.writeUint16(0);
      a.writeUint16(0);
      a.writeUint16(e);
      a.writeUint16(e);
      a.writeUint32(t);
      a.writeUint32(n);
      a.writeUint16(0);
      return a;
    }(this.files.length, t, n);
    const s = new r.Binary(undefined, true);
    s.ensureCapacity(e + u.size());
    s.write(...o, ...a, u);
    return s;
  }
};