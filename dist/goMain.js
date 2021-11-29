var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/vscode-extension-telemetry/lib/telemetryReporter.node.min.js
var require_telemetryReporter_node_min = __commonJS({
  "node_modules/vscode-extension-telemetry/lib/telemetryReporter.node.min.js"(exports) {
    var oS = Object.create;
    var Ti = Object.defineProperty;
    var uS = Object.getOwnPropertyDescriptor;
    var cS = Object.getOwnPropertyNames;
    var pf = Object.getOwnPropertySymbols;
    var lS = Object.getPrototypeOf;
    var ff = Object.prototype.hasOwnProperty;
    var pS = Object.prototype.propertyIsEnumerable;
    var df = (e, t, r) => t in e ? Ti(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
    var It = (e, t) => {
      for (var r in t || (t = {}))
        ff.call(t, r) && df(e, r, t[r]);
      if (pf)
        for (var r of pf(t))
          pS.call(t, r) && df(e, r, t[r]);
      return e;
    };
    var hf = (e) => Ti(e, "__esModule", { value: true });
    var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var fS = (e, t) => {
      hf(e);
      for (var r in t)
        Ti(e, r, { get: t[r], enumerable: true });
    };
    var dS = (e, t, r) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let n of cS(t))
          !ff.call(e, n) && n !== "default" && Ti(e, n, { get: () => t[n], enumerable: !(r = uS(t, n)) || r.enumerable });
      return e;
    };
    var Si = (e) => dS(hf(Ti(e != null ? oS(lS(e)) : {}, "default", e && e.__esModule && "default" in e ? { get: () => e.default, enumerable: true } : { value: e, enumerable: true })), e);
    var ve = l((Kx, _f) => {
      "use strict";
      var hS = function() {
        function e() {
        }
        return e.info = function(t) {
          for (var r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          e.enableDebug && console.info(e.TAG + t, r);
        }, e.warn = function(t) {
          for (var r = [], n = 1; n < arguments.length; n++)
            r[n - 1] = arguments[n];
          e.disableWarnings || console.warn(e.TAG + t, r);
        }, e.enableDebug = false, e.disableWarnings = false, e.disableErrors = false, e.TAG = "ApplicationInsights:", e;
      }();
      _f.exports = hS;
    });
    var mu = l((Ft) => {
      "use strict";
      var an = Ft && Ft.__assign || function() {
        return an = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, an.apply(this, arguments);
      };
      Object.defineProperty(Ft, "__esModule", { value: true });
      Ft.AsyncScopeManager = Ft.OpenTelemetryScopeManagerWrapper = void 0;
      var vr = gr(), _S = require("events"), vf = function() {
        function e() {
        }
        return e.prototype.active = function() {
          var t = this, r = vr.CorrelationContextManager.getCurrentContext();
          return an(an({}, r), { getValue: function(n) {
            return t._activeSymbol ? n === t._activeSymbol ? r : false : (t._activeSymbol = n, r);
          }, setValue: function() {
          } });
        }, e.prototype.with = function(t, r) {
          var n = t.parentSpanId, i = t.name, a = e._spanToContext(t, n, i);
          return vr.CorrelationContextManager.runWithContext(a, r)();
        }, e.prototype.bind = function(t) {
          return typeof t == "function" ? vr.CorrelationContextManager.wrapCallback(t) : (t instanceof _S.EventEmitter && vr.CorrelationContextManager.wrapEmitter(t), t);
        }, e.prototype.enable = function() {
          return vr.CorrelationContextManager.enable(), this;
        }, e.prototype.disable = function() {
          return vr.CorrelationContextManager.disable(), this;
        }, e._spanToContext = function(t, r, n) {
          var i = r ? "|" + t.spanContext().traceId + "." + r + "." : t.spanContext().traceId, a = an(an({}, t.spanContext()), { traceFlags: t.spanContext().traceFlags }), s = vr.CorrelationContextManager.spanToContextObject(a, i, n);
          return s;
        }, e;
      }();
      Ft.OpenTelemetryScopeManagerWrapper = vf;
      Ft.AsyncScopeManager = new vf();
    });
    var xf = l((I, wf) => {
      I = wf.exports = N;
      var k;
      typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? k = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift("SEMVER"), console.log.apply(console, e);
      } : k = function() {
      };
      I.SEMVER_SPEC_VERSION = "2.0.0";
      var Eu = 256, xa = Number.MAX_SAFE_INTEGER || 9007199254740991, yu = 16, B = I.re = [], _2 = I.src = [], O = 0, sn = O++;
      _2[sn] = "0|[1-9]\\d*";
      var on = O++;
      _2[on] = "[0-9]+";
      var Tu = O++;
      _2[Tu] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
      var gf = O++;
      _2[gf] = "(" + _2[sn] + ")\\.(" + _2[sn] + ")\\.(" + _2[sn] + ")";
      var mf = O++;
      _2[mf] = "(" + _2[on] + ")\\.(" + _2[on] + ")\\.(" + _2[on] + ")";
      var Su = O++;
      _2[Su] = "(?:" + _2[sn] + "|" + _2[Tu] + ")";
      var Au = O++;
      _2[Au] = "(?:" + _2[on] + "|" + _2[Tu] + ")";
      var Iu = O++;
      _2[Iu] = "(?:-(" + _2[Su] + "(?:\\." + _2[Su] + ")*))";
      var bu = O++;
      _2[bu] = "(?:-?(" + _2[Au] + "(?:\\." + _2[Au] + ")*))";
      var Cu = O++;
      _2[Cu] = "[0-9A-Za-z-]+";
      var Ii = O++;
      _2[Ii] = "(?:\\+(" + _2[Cu] + "(?:\\." + _2[Cu] + ")*))";
      var Ou = O++, Ef = "v?" + _2[gf] + _2[Iu] + "?" + _2[Ii] + "?";
      _2[Ou] = "^" + Ef + "$";
      var Pu = "[v=\\s]*" + _2[mf] + _2[bu] + "?" + _2[Ii] + "?", Ru = O++;
      _2[Ru] = "^" + Pu + "$";
      var un = O++;
      _2[un] = "((?:<|>)?=?)";
      var Ma = O++;
      _2[Ma] = _2[on] + "|x|X|\\*";
      var La = O++;
      _2[La] = _2[sn] + "|x|X|\\*";
      var mr = O++;
      _2[mr] = "[v=\\s]*(" + _2[La] + ")(?:\\.(" + _2[La] + ")(?:\\.(" + _2[La] + ")(?:" + _2[Iu] + ")?" + _2[Ii] + "?)?)?";
      var cn = O++;
      _2[cn] = "[v=\\s]*(" + _2[Ma] + ")(?:\\.(" + _2[Ma] + ")(?:\\.(" + _2[Ma] + ")(?:" + _2[bu] + ")?" + _2[Ii] + "?)?)?";
      var yf = O++;
      _2[yf] = "^" + _2[un] + "\\s*" + _2[mr] + "$";
      var Tf = O++;
      _2[Tf] = "^" + _2[un] + "\\s*" + _2[cn] + "$";
      var Sf = O++;
      _2[Sf] = "(?:^|[^\\d])(\\d{1," + yu + "})(?:\\.(\\d{1," + yu + "}))?(?:\\.(\\d{1," + yu + "}))?(?:$|[^\\d])";
      var qa = O++;
      _2[qa] = "(?:~>?)";
      var ja = O++;
      _2[ja] = "(\\s*)" + _2[qa] + "\\s+";
      B[ja] = new RegExp(_2[ja], "g");
      var vS = "$1~", Af = O++;
      _2[Af] = "^" + _2[qa] + _2[mr] + "$";
      var If = O++;
      _2[If] = "^" + _2[qa] + _2[cn] + "$";
      var ka = O++;
      _2[ka] = "(?:\\^)";
      var Ha = O++;
      _2[Ha] = "(\\s*)" + _2[ka] + "\\s+";
      B[Ha] = new RegExp(_2[Ha], "g");
      var gS = "$1^", bf = O++;
      _2[bf] = "^" + _2[ka] + _2[mr] + "$";
      var Cf = O++;
      _2[Cf] = "^" + _2[ka] + _2[cn] + "$";
      var Nu = O++;
      _2[Nu] = "^" + _2[un] + "\\s*(" + Pu + ")$|^$";
      var Du = O++;
      _2[Du] = "^" + _2[un] + "\\s*(" + Ef + ")$|^$";
      var bi = O++;
      _2[bi] = "(\\s*)" + _2[un] + "\\s*(" + Pu + "|" + _2[mr] + ")";
      B[bi] = new RegExp(_2[bi], "g");
      var mS = "$1$2$3", Of = O++;
      _2[Of] = "^\\s*(" + _2[mr] + ")\\s+-\\s+(" + _2[mr] + ")\\s*$";
      var Pf = O++;
      _2[Pf] = "^\\s*(" + _2[cn] + ")\\s+-\\s+(" + _2[cn] + ")\\s*$";
      var Rf = O++;
      _2[Rf] = "(<|>)?=?\\s*\\*";
      for (Vt = 0; Vt < O; Vt++)
        k(Vt, _2[Vt]), B[Vt] || (B[Vt] = new RegExp(_2[Vt]));
      var Vt;
      I.parse = Er;
      function Er(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof N)
          return e;
        if (typeof e != "string" || e.length > Eu)
          return null;
        var r = t.loose ? B[Ru] : B[Ou];
        if (!r.test(e))
          return null;
        try {
          return new N(e, t);
        } catch (n) {
          return null;
        }
      }
      I.valid = ES;
      function ES(e, t) {
        var r = Er(e, t);
        return r ? r.version : null;
      }
      I.clean = yS;
      function yS(e, t) {
        var r = Er(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null;
      }
      I.SemVer = N;
      function N(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof N) {
          if (e.loose === t.loose)
            return e;
          e = e.version;
        } else if (typeof e != "string")
          throw new TypeError("Invalid Version: " + e);
        if (e.length > Eu)
          throw new TypeError("version is longer than " + Eu + " characters");
        if (!(this instanceof N))
          return new N(e, t);
        k("SemVer", e, t), this.options = t, this.loose = !!t.loose;
        var r = e.trim().match(t.loose ? B[Ru] : B[Ou]);
        if (!r)
          throw new TypeError("Invalid Version: " + e);
        if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > xa || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > xa || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > xa || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r[4] ? this.prerelease = r[4].split(".").map(function(n) {
          if (/^[0-9]+$/.test(n)) {
            var i = +n;
            if (i >= 0 && i < xa)
              return i;
          }
          return n;
        }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
      }
      N.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
      };
      N.prototype.toString = function() {
        return this.version;
      };
      N.prototype.compare = function(e) {
        return k("SemVer.compare", this.version, this.options, e), e instanceof N || (e = new N(e, this.options)), this.compareMain(e) || this.comparePre(e);
      };
      N.prototype.compareMain = function(e) {
        return e instanceof N || (e = new N(e, this.options)), ln(this.major, e.major) || ln(this.minor, e.minor) || ln(this.patch, e.patch);
      };
      N.prototype.comparePre = function(e) {
        if (e instanceof N || (e = new N(e, this.options)), this.prerelease.length && !e.prerelease.length)
          return -1;
        if (!this.prerelease.length && e.prerelease.length)
          return 1;
        if (!this.prerelease.length && !e.prerelease.length)
          return 0;
        var t = 0;
        do {
          var r = this.prerelease[t], n = e.prerelease[t];
          if (k("prerelease compare", t, r, n), r === void 0 && n === void 0)
            return 0;
          if (n === void 0)
            return 1;
          if (r === void 0)
            return -1;
          if (r === n)
            continue;
          return ln(r, n);
        } while (++t);
      };
      N.prototype.inc = function(e, t) {
        switch (e) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", t), this.inc("pre", t);
            break;
          case "major":
            (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              for (var r = this.prerelease.length; --r >= 0; )
                typeof this.prerelease[r] == "number" && (this.prerelease[r]++, r = -2);
              r === -1 && this.prerelease.push(0);
            }
            t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
            break;
          default:
            throw new Error("invalid increment argument: " + e);
        }
        return this.format(), this.raw = this.version, this;
      };
      I.inc = TS;
      function TS(e, t, r, n) {
        typeof r == "string" && (n = r, r = void 0);
        try {
          return new N(e, r).inc(t, n).version;
        } catch (i) {
          return null;
        }
      }
      I.diff = SS;
      function SS(e, t) {
        if (wu(e, t))
          return null;
        var r = Er(e), n = Er(t), i = "";
        if (r.prerelease.length || n.prerelease.length) {
          i = "pre";
          var a = "prerelease";
        }
        for (var s in r)
          if ((s === "major" || s === "minor" || s === "patch") && r[s] !== n[s])
            return i + s;
        return a;
      }
      I.compareIdentifiers = ln;
      var Nf = /^[0-9]+$/;
      function ln(e, t) {
        var r = Nf.test(e), n = Nf.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
      }
      I.rcompareIdentifiers = AS;
      function AS(e, t) {
        return ln(t, e);
      }
      I.major = IS;
      function IS(e, t) {
        return new N(e, t).major;
      }
      I.minor = bS;
      function bS(e, t) {
        return new N(e, t).minor;
      }
      I.patch = CS;
      function CS(e, t) {
        return new N(e, t).patch;
      }
      I.compare = bt;
      function bt(e, t, r) {
        return new N(e, r).compare(new N(t, r));
      }
      I.compareLoose = OS;
      function OS(e, t) {
        return bt(e, t, true);
      }
      I.rcompare = PS;
      function PS(e, t, r) {
        return bt(t, e, r);
      }
      I.sort = RS;
      function RS(e, t) {
        return e.sort(function(r, n) {
          return I.compare(r, n, t);
        });
      }
      I.rsort = NS;
      function NS(e, t) {
        return e.sort(function(r, n) {
          return I.rcompare(r, n, t);
        });
      }
      I.gt = Ci;
      function Ci(e, t, r) {
        return bt(e, t, r) > 0;
      }
      I.lt = Ua;
      function Ua(e, t, r) {
        return bt(e, t, r) < 0;
      }
      I.eq = wu;
      function wu(e, t, r) {
        return bt(e, t, r) === 0;
      }
      I.neq = Df;
      function Df(e, t, r) {
        return bt(e, t, r) !== 0;
      }
      I.gte = xu;
      function xu(e, t, r) {
        return bt(e, t, r) >= 0;
      }
      I.lte = Mu;
      function Mu(e, t, r) {
        return bt(e, t, r) <= 0;
      }
      I.cmp = Ba;
      function Ba(e, t, r, n) {
        switch (t) {
          case "===":
            return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
          case "!==":
            return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
          case "":
          case "=":
          case "==":
            return wu(e, r, n);
          case "!=":
            return Df(e, r, n);
          case ">":
            return Ci(e, r, n);
          case ">=":
            return xu(e, r, n);
          case "<":
            return Ua(e, r, n);
          case "<=":
            return Mu(e, r, n);
          default:
            throw new TypeError("Invalid operator: " + t);
        }
      }
      I.Comparator = $e;
      function $e(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof $e) {
          if (e.loose === !!t.loose)
            return e;
          e = e.value;
        }
        if (!(this instanceof $e))
          return new $e(e, t);
        k("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Oi ? this.value = "" : this.value = this.operator + this.semver.version, k("comp", this);
      }
      var Oi = {};
      $e.prototype.parse = function(e) {
        var t = this.options.loose ? B[Nu] : B[Du], r = e.match(t);
        if (!r)
          throw new TypeError("Invalid comparator: " + e);
        this.operator = r[1], this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new N(r[2], this.options.loose) : this.semver = Oi;
      };
      $e.prototype.toString = function() {
        return this.value;
      };
      $e.prototype.test = function(e) {
        return k("Comparator.test", e, this.options.loose), this.semver === Oi ? true : (typeof e == "string" && (e = new N(e, this.options)), Ba(e, this.operator, this.semver, this.options));
      };
      $e.prototype.intersects = function(e, t) {
        if (!(e instanceof $e))
          throw new TypeError("a Comparator is required");
        (!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false });
        var r;
        if (this.operator === "")
          return r = new Z(e.value, t), Ga(this.value, r, t);
        if (e.operator === "")
          return r = new Z(this.value, t), Ga(e.semver, r, t);
        var n = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">"), i = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<"), a = this.semver.version === e.semver.version, s = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<="), o = Ba(this.semver, "<", e.semver, t) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<"), u = Ba(this.semver, ">", e.semver, t) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
        return n || i || a && s || o || u;
      };
      I.Range = Z;
      function Z(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof Z)
          return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new Z(e.raw, t);
        if (e instanceof $e)
          return new Z(e.value, t);
        if (!(this instanceof Z))
          return new Z(e, t);
        if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(r) {
          return this.parseRange(r.trim());
        }, this).filter(function(r) {
          return r.length;
        }), !this.set.length)
          throw new TypeError("Invalid SemVer Range: " + e);
        this.format();
      }
      Z.prototype.format = function() {
        return this.range = this.set.map(function(e) {
          return e.join(" ").trim();
        }).join("||").trim(), this.range;
      };
      Z.prototype.toString = function() {
        return this.range;
      };
      Z.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var r = t ? B[Pf] : B[Of];
        e = e.replace(r, US), k("hyphen replace", e), e = e.replace(B[bi], mS), k("comparator trim", e, B[bi]), e = e.replace(B[ja], vS), e = e.replace(B[Ha], gS), e = e.split(/\s+/).join(" ");
        var n = t ? B[Nu] : B[Du], i = e.split(" ").map(function(a) {
          return wS(a, this.options);
        }, this).join(" ").split(/\s+/);
        return this.options.loose && (i = i.filter(function(a) {
          return !!a.match(n);
        })), i = i.map(function(a) {
          return new $e(a, this.options);
        }, this), i;
      };
      Z.prototype.intersects = function(e, t) {
        if (!(e instanceof Z))
          throw new TypeError("a Range is required");
        return this.set.some(function(r) {
          return r.every(function(n) {
            return e.set.some(function(i) {
              return i.every(function(a) {
                return n.intersects(a, t);
              });
            });
          });
        });
      };
      I.toComparators = DS;
      function DS(e, t) {
        return new Z(e, t).set.map(function(r) {
          return r.map(function(n) {
            return n.value;
          }).join(" ").trim().split(" ");
        });
      }
      function wS(e, t) {
        return k("comp", e, t), e = LS(e, t), k("caret", e), e = xS(e, t), k("tildes", e), e = jS(e, t), k("xrange", e), e = HS(e, t), k("stars", e), e;
      }
      function Re(e) {
        return !e || e.toLowerCase() === "x" || e === "*";
      }
      function xS(e, t) {
        return e.trim().split(/\s+/).map(function(r) {
          return MS(r, t);
        }).join(" ");
      }
      function MS(e, t) {
        var r = t.loose ? B[If] : B[Af];
        return e.replace(r, function(n, i, a, s, o) {
          k("tilde", e, n, i, a, s, o);
          var u;
          return Re(i) ? u = "" : Re(a) ? u = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : Re(s) ? u = ">=" + i + "." + a + ".0 <" + i + "." + (+a + 1) + ".0" : o ? (k("replaceTilde pr", o), u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + (+a + 1) + ".0") : u = ">=" + i + "." + a + "." + s + " <" + i + "." + (+a + 1) + ".0", k("tilde return", u), u;
        });
      }
      function LS(e, t) {
        return e.trim().split(/\s+/).map(function(r) {
          return qS(r, t);
        }).join(" ");
      }
      function qS(e, t) {
        k("caret", e, t);
        var r = t.loose ? B[Cf] : B[bf];
        return e.replace(r, function(n, i, a, s, o) {
          k("caret", e, n, i, a, s, o);
          var u;
          return Re(i) ? u = "" : Re(a) ? u = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : Re(s) ? i === "0" ? u = ">=" + i + "." + a + ".0 <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + ".0 <" + (+i + 1) + ".0.0" : o ? (k("replaceCaret pr", o), i === "0" ? a === "0" ? u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + a + "." + (+s + 1) : u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + "." + s + "-" + o + " <" + (+i + 1) + ".0.0") : (k("no pr"), i === "0" ? a === "0" ? u = ">=" + i + "." + a + "." + s + " <" + i + "." + a + "." + (+s + 1) : u = ">=" + i + "." + a + "." + s + " <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + "." + s + " <" + (+i + 1) + ".0.0"), k("caret return", u), u;
        });
      }
      function jS(e, t) {
        return k("replaceXRanges", e, t), e.split(/\s+/).map(function(r) {
          return kS(r, t);
        }).join(" ");
      }
      function kS(e, t) {
        e = e.trim();
        var r = t.loose ? B[Tf] : B[yf];
        return e.replace(r, function(n, i, a, s, o, u) {
          k("xRange", e, n, i, a, s, o, u);
          var c = Re(a), p = c || Re(s), f = p || Re(o), d = f;
          return i === "=" && d && (i = ""), c ? i === ">" || i === "<" ? n = "<0.0.0" : n = "*" : i && d ? (p && (s = 0), o = 0, i === ">" ? (i = ">=", p ? (a = +a + 1, s = 0, o = 0) : (s = +s + 1, o = 0)) : i === "<=" && (i = "<", p ? a = +a + 1 : s = +s + 1), n = i + a + "." + s + "." + o) : p ? n = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : f && (n = ">=" + a + "." + s + ".0 <" + a + "." + (+s + 1) + ".0"), k("xRange return", n), n;
        });
      }
      function HS(e, t) {
        return k("replaceStars", e, t), e.trim().replace(B[Rf], "");
      }
      function US(e, t, r, n, i, a, s, o, u, c, p, f, d) {
        return Re(r) ? t = "" : Re(n) ? t = ">=" + r + ".0.0" : Re(i) ? t = ">=" + r + "." + n + ".0" : t = ">=" + t, Re(u) ? o = "" : Re(c) ? o = "<" + (+u + 1) + ".0.0" : Re(p) ? o = "<" + u + "." + (+c + 1) + ".0" : f ? o = "<=" + u + "." + c + "." + p + "-" + f : o = "<=" + o, (t + " " + o).trim();
      }
      Z.prototype.test = function(e) {
        if (!e)
          return false;
        typeof e == "string" && (e = new N(e, this.options));
        for (var t = 0; t < this.set.length; t++)
          if (BS(this.set[t], e, this.options))
            return true;
        return false;
      };
      function BS(e, t, r) {
        for (var n = 0; n < e.length; n++)
          if (!e[n].test(t))
            return false;
        if (t.prerelease.length && !r.includePrerelease) {
          for (n = 0; n < e.length; n++)
            if (k(e[n].semver), e[n].semver !== Oi && e[n].semver.prerelease.length > 0) {
              var i = e[n].semver;
              if (i.major === t.major && i.minor === t.minor && i.patch === t.patch)
                return true;
            }
          return false;
        }
        return true;
      }
      I.satisfies = Ga;
      function Ga(e, t, r) {
        try {
          t = new Z(t, r);
        } catch (n) {
          return false;
        }
        return t.test(e);
      }
      I.maxSatisfying = GS;
      function GS(e, t, r) {
        var n = null, i = null;
        try {
          var a = new Z(t, r);
        } catch (s) {
          return null;
        }
        return e.forEach(function(s) {
          a.test(s) && (!n || i.compare(s) === -1) && (n = s, i = new N(n, r));
        }), n;
      }
      I.minSatisfying = FS;
      function FS(e, t, r) {
        var n = null, i = null;
        try {
          var a = new Z(t, r);
        } catch (s) {
          return null;
        }
        return e.forEach(function(s) {
          a.test(s) && (!n || i.compare(s) === 1) && (n = s, i = new N(n, r));
        }), n;
      }
      I.minVersion = VS;
      function VS(e, t) {
        e = new Z(e, t);
        var r = new N("0.0.0");
        if (e.test(r) || (r = new N("0.0.0-0"), e.test(r)))
          return r;
        r = null;
        for (var n = 0; n < e.set.length; ++n) {
          var i = e.set[n];
          i.forEach(function(a) {
            var s = new N(a.semver.version);
            switch (a.operator) {
              case ">":
                s.prerelease.length === 0 ? s.patch++ : s.prerelease.push(0), s.raw = s.format();
              case "":
              case ">=":
                (!r || Ci(r, s)) && (r = s);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error("Unexpected operation: " + a.operator);
            }
          });
        }
        return r && e.test(r) ? r : null;
      }
      I.validRange = $S;
      function $S(e, t) {
        try {
          return new Z(e, t).range || "*";
        } catch (r) {
          return null;
        }
      }
      I.ltr = zS;
      function zS(e, t, r) {
        return Lu(e, t, "<", r);
      }
      I.gtr = KS;
      function KS(e, t, r) {
        return Lu(e, t, ">", r);
      }
      I.outside = Lu;
      function Lu(e, t, r, n) {
        e = new N(e, n), t = new Z(t, n);
        var i, a, s, o, u;
        switch (r) {
          case ">":
            i = Ci, a = Mu, s = Ua, o = ">", u = ">=";
            break;
          case "<":
            i = Ua, a = xu, s = Ci, o = "<", u = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (Ga(e, t, n))
          return false;
        for (var c = 0; c < t.set.length; ++c) {
          var p = t.set[c], f = null, d = null;
          if (p.forEach(function(h) {
            h.semver === Oi && (h = new $e(">=0.0.0")), f = f || h, d = d || h, i(h.semver, f.semver, n) ? f = h : s(h.semver, d.semver, n) && (d = h);
          }), f.operator === o || f.operator === u || (!d.operator || d.operator === o) && a(e, d.semver))
            return false;
          if (d.operator === u && s(e, d.semver))
            return false;
        }
        return true;
      }
      I.prerelease = XS;
      function XS(e, t) {
        var r = Er(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      }
      I.intersects = YS;
      function YS(e, t, r) {
        return e = new Z(e, r), t = new Z(t, r), e.intersects(t);
      }
      I.coerce = QS;
      function QS(e) {
        if (e instanceof N)
          return e;
        if (typeof e != "string")
          return null;
        var t = e.match(B[Sf]);
        return t == null ? null : Er(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
      }
    });
    var qu = l((Fa) => {
      "use strict";
      Object.defineProperty(Fa, "__esModule", { value: true });
      Fa.makePatchingRequire = void 0;
      var WS = require("path"), ZS = xf(), Mf = require("module"), JS = Object.keys(process.binding("natives")), Lf = Mf.prototype.require;
      function eA(e) {
        var t = {};
        return function(n) {
          var i = Lf.apply(this, arguments);
          if (e[n]) {
            var a = Mf._resolveFilename(n, this);
            if (t.hasOwnProperty(a))
              return t[a];
            var s = void 0;
            if (JS.indexOf(n) < 0)
              try {
                s = Lf.call(this, WS.join(n, "package.json")).version;
              } catch (d) {
                return i;
              }
            else
              s = process.version.substring(1);
            var o = s.indexOf("-");
            o >= 0 && (s = s.substring(0, o));
            for (var u = i, c = 0, p = e[n]; c < p.length; c++) {
              var f = p[c];
              ZS.satisfies(s, f.versionSpecifier) && (u = f.patch(u, a));
            }
            return t[a] = u;
          }
          return i;
        };
      }
      Fa.makePatchingRequire = eA;
    });
    var qf = l((Qx, tA) => {
      tA.exports = { _args: [["diagnostic-channel@1.0.0", "/home/runner/work/vscode-extension-telemetry/vscode-extension-telemetry"]], _development: true, _from: "diagnostic-channel@1.0.0", _id: "diagnostic-channel@1.0.0", _inBundle: false, _integrity: "sha512-v7Clmg5HG9XwIhqgbBRfwFzwZhxjvESZ33uu1cgcCLkdb9ZxgtY78eAgQMEQ39UecQ//4K5W75iq6LFBtAQD8w==", _location: "/diagnostic-channel", _phantomChildren: {}, _requested: { type: "version", registry: true, raw: "diagnostic-channel@1.0.0", name: "diagnostic-channel", escapedName: "diagnostic-channel", rawSpec: "1.0.0", saveSpec: null, fetchSpec: "1.0.0" }, _requiredBy: ["/applicationinsights"], _resolved: "https://registry.npmjs.org/diagnostic-channel/-/diagnostic-channel-1.0.0.tgz", _spec: "1.0.0", _where: "/home/runner/work/vscode-extension-telemetry/vscode-extension-telemetry", bugs: { url: "https://github.com/Microsoft/node-diagnostic-channel/issues" }, dependencies: { semver: "^5.3.0" }, description: "Provides a context-saving pub/sub channel to connect diagnostic event publishers and subscribers", devDependencies: { "@types/mocha": "^2.2.40", "@types/node": "~8.0.0", mocha: "^3.2.0", rimraf: "^2.6.1", tslint: "^5.0.0", typescript: "4.1.2" }, files: ["dist/src/**/*.d.ts", "dist/src/**/*.js", "LICENSE", "README.md", "package.json"], homepage: "https://github.com/Microsoft/node-diagnostic-channel", license: "MIT", main: "./dist/src/channel.js", name: "diagnostic-channel", repository: { type: "git", url: "git+https://github.com/Microsoft/node-diagnostic-channel.git" }, scripts: { build: "tsc", clean: "rimraf ./dist", lint: "tslint -c tslint.json -p tsconfig.json", test: "mocha ./dist/tests/**/*.js" }, types: "./dist/src/channel.d.ts", version: "1.0.0" };
    });
    var ue = l((pn) => {
      "use strict";
      Object.defineProperty(pn, "__esModule", { value: true });
      pn.channel = pn.makePatchingRequire = void 0;
      var rA = qu(), nA = qu();
      Object.defineProperty(pn, "makePatchingRequire", { enumerable: true, get: function() {
        return nA.makePatchingRequire;
      } });
      var jf = function(e) {
        return true;
      }, iA = function() {
        function e() {
          this.version = qf().version, this.subscribers = {}, this.contextPreservationFunction = function(t) {
            return t;
          }, this.knownPatches = {}, this.currentlyPublishing = false;
        }
        return e.prototype.shouldPublish = function(t) {
          var r = this.subscribers[t];
          return r ? r.some(function(n) {
            var i = n.filter;
            return !i || i(false);
          }) : false;
        }, e.prototype.publish = function(t, r) {
          if (!this.currentlyPublishing) {
            var n = this.subscribers[t];
            if (n) {
              var i = { timestamp: Date.now(), data: r };
              this.currentlyPublishing = true, n.forEach(function(a) {
                var s = a.listener, o = a.filter;
                try {
                  o && o(true) && s(i);
                } catch (u) {
                }
              }), this.currentlyPublishing = false;
            }
          }
        }, e.prototype.subscribe = function(t, r, n) {
          n === void 0 && (n = jf), this.subscribers[t] || (this.subscribers[t] = []), this.subscribers[t].push({ listener: r, filter: n });
        }, e.prototype.unsubscribe = function(t, r, n) {
          n === void 0 && (n = jf);
          var i = this.subscribers[t];
          if (i) {
            for (var a = 0; a < i.length; ++a)
              if (i[a].listener === r && i[a].filter === n)
                return i.splice(a, 1), true;
          }
          return false;
        }, e.prototype.reset = function() {
          var t = this;
          this.subscribers = {}, this.contextPreservationFunction = function(r) {
            return r;
          }, Object.getOwnPropertyNames(this.knownPatches).forEach(function(r) {
            return delete t.knownPatches[r];
          });
        }, e.prototype.bindToContext = function(t) {
          return this.contextPreservationFunction(t);
        }, e.prototype.addContextPreservation = function(t) {
          var r = this.contextPreservationFunction;
          this.contextPreservationFunction = function(n) {
            return t(r(n));
          };
        }, e.prototype.registerMonkeyPatch = function(t, r) {
          this.knownPatches[t] || (this.knownPatches[t] = []), this.knownPatches[t].push(r);
        }, e.prototype.getPatchesObject = function() {
          return this.knownPatches;
        }, e;
      }();
      global.diagnosticsSource || (global.diagnosticsSource = new iA(), kf = require("module"), kf.prototype.require = rA.makePatchingRequire(global.diagnosticsSource.getPatchesObject()));
      var kf;
      pn.channel = global.diagnosticsSource;
    });
    var Uf = l((Hf) => {
      "use strict";
      Object.defineProperty(Hf, "__esModule", { value: true });
    });
    var Bf = l((Va) => {
      "use strict";
      Object.defineProperty(Va, "__esModule", { value: true });
      Va._globalThis = void 0;
      Va._globalThis = typeof globalThis == "object" ? globalThis : global;
    });
    var Gf = l((yr) => {
      "use strict";
      var aA = yr && yr.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), sA = yr && yr.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && aA(t, e, r);
      };
      Object.defineProperty(yr, "__esModule", { value: true });
      sA(Bf(), yr);
    });
    var Ff = l((Tr) => {
      "use strict";
      var oA = Tr && Tr.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), uA = Tr && Tr.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && oA(t, e, r);
      };
      Object.defineProperty(Tr, "__esModule", { value: true });
      uA(Gf(), Tr);
    });
    var ju = l(($a) => {
      "use strict";
      Object.defineProperty($a, "__esModule", { value: true });
      $a.VERSION = void 0;
      $a.VERSION = "1.0.3";
    });
    var zf = l((fn) => {
      "use strict";
      Object.defineProperty(fn, "__esModule", { value: true });
      fn.isCompatible = fn._makeCompatibilityCheck = void 0;
      var cA = ju(), Vf = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
      function $f(e) {
        var t = new Set([e]), r = new Set(), n = e.match(Vf);
        if (!n)
          return function() {
            return false;
          };
        var i = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
        if (i.prerelease != null)
          return function(u) {
            return u === e;
          };
        function a(o) {
          return r.add(o), false;
        }
        function s(o) {
          return t.add(o), true;
        }
        return function(u) {
          if (t.has(u))
            return true;
          if (r.has(u))
            return false;
          var c = u.match(Vf);
          if (!c)
            return a(u);
          var p = { major: +c[1], minor: +c[2], patch: +c[3], prerelease: c[4] };
          return p.prerelease != null || i.major !== p.major ? a(u) : i.major === 0 ? i.minor === p.minor && i.patch <= p.patch ? s(u) : a(u) : i.minor <= p.minor ? s(u) : a(u);
        };
      }
      fn._makeCompatibilityCheck = $f;
      fn.isCompatible = $f(cA.VERSION);
    });
    var dn = l(($t) => {
      "use strict";
      Object.defineProperty($t, "__esModule", { value: true });
      $t.unregisterGlobal = $t.getGlobal = $t.registerGlobal = void 0;
      var lA = Ff(), Pi = ju(), pA = zf(), fA = Pi.VERSION.split(".")[0], Ri = Symbol.for("opentelemetry.js.api." + fA), Ni = lA._globalThis;
      function dA(e, t, r, n) {
        var i;
        n === void 0 && (n = false);
        var a = Ni[Ri] = (i = Ni[Ri]) !== null && i !== void 0 ? i : { version: Pi.VERSION };
        if (!n && a[e]) {
          var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
          return r.error(s.stack || s.message), false;
        }
        if (a.version !== Pi.VERSION) {
          var s = new Error("@opentelemetry/api: All API registration versions must match");
          return r.error(s.stack || s.message), false;
        }
        return a[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Pi.VERSION + "."), true;
      }
      $t.registerGlobal = dA;
      function hA(e) {
        var t, r, n = (t = Ni[Ri]) === null || t === void 0 ? void 0 : t.version;
        if (!(!n || !pA.isCompatible(n)))
          return (r = Ni[Ri]) === null || r === void 0 ? void 0 : r[e];
      }
      $t.getGlobal = hA;
      function _A(e, t) {
        t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Pi.VERSION + ".");
        var r = Ni[Ri];
        r && delete r[e];
      }
      $t.unregisterGlobal = _A;
    });
    var Kf = l((za) => {
      "use strict";
      Object.defineProperty(za, "__esModule", { value: true });
      za.DiagComponentLogger = void 0;
      var vA = dn(), gA = function() {
        function e(t) {
          this._namespace = t.namespace || "DiagComponentLogger";
        }
        return e.prototype.debug = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return Di("debug", this._namespace, t);
        }, e.prototype.error = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return Di("error", this._namespace, t);
        }, e.prototype.info = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return Di("info", this._namespace, t);
        }, e.prototype.warn = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return Di("warn", this._namespace, t);
        }, e.prototype.verbose = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return Di("verbose", this._namespace, t);
        }, e;
      }();
      za.DiagComponentLogger = gA;
      function Di(e, t, r) {
        var n = vA.getGlobal("diag");
        if (!!n)
          return r.unshift(t), n[e].apply(n, r);
      }
    });
    var Ka = l((wi) => {
      "use strict";
      Object.defineProperty(wi, "__esModule", { value: true });
      wi.DiagLogLevel = void 0;
      var mA;
      (function(e) {
        e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
      })(mA = wi.DiagLogLevel || (wi.DiagLogLevel = {}));
    });
    var Xf = l((Xa) => {
      "use strict";
      Object.defineProperty(Xa, "__esModule", { value: true });
      Xa.createLogLevelDiagLogger = void 0;
      var Ct = Ka();
      function EA(e, t) {
        e < Ct.DiagLogLevel.NONE ? e = Ct.DiagLogLevel.NONE : e > Ct.DiagLogLevel.ALL && (e = Ct.DiagLogLevel.ALL), t = t || {};
        function r(n, i) {
          var a = t[n];
          return typeof a == "function" && e >= i ? a.bind(t) : function() {
          };
        }
        return { error: r("error", Ct.DiagLogLevel.ERROR), warn: r("warn", Ct.DiagLogLevel.WARN), info: r("info", Ct.DiagLogLevel.INFO), debug: r("debug", Ct.DiagLogLevel.DEBUG), verbose: r("verbose", Ct.DiagLogLevel.VERBOSE) };
      }
      Xa.createLogLevelDiagLogger = EA;
    });
    var hn = l((Qa) => {
      "use strict";
      Object.defineProperty(Qa, "__esModule", { value: true });
      Qa.DiagAPI = void 0;
      var yA = Kf(), TA = Xf(), SA = Ka(), Ya = dn(), AA = "diag", IA = function() {
        function e() {
          function t(n) {
            return function() {
              var i = Ya.getGlobal("diag");
              if (!!i)
                return i[n].apply(i, arguments);
            };
          }
          var r = this;
          r.setLogger = function(n, i) {
            var a, s;
            if (i === void 0 && (i = SA.DiagLogLevel.INFO), n === r) {
              var o = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
              return r.error((a = o.stack) !== null && a !== void 0 ? a : o.message), false;
            }
            var u = Ya.getGlobal("diag"), c = TA.createLogLevelDiagLogger(i, n);
            if (u) {
              var p = (s = new Error().stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
              u.warn("Current logger will be overwritten from " + p), c.warn("Current logger will overwrite one already registered from " + p);
            }
            return Ya.registerGlobal("diag", c, r, true);
          }, r.disable = function() {
            Ya.unregisterGlobal(AA, r);
          }, r.createComponentLogger = function(n) {
            return new yA.DiagComponentLogger(n);
          }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
        }
        return e.instance = function() {
          return this._instance || (this._instance = new e()), this._instance;
        }, e;
      }();
      Qa.DiagAPI = IA;
    });
    var Yf = l((Wa) => {
      "use strict";
      Object.defineProperty(Wa, "__esModule", { value: true });
      Wa.BaggageImpl = void 0;
      var bA = function() {
        function e(t) {
          this._entries = t ? new Map(t) : new Map();
        }
        return e.prototype.getEntry = function(t) {
          var r = this._entries.get(t);
          if (!!r)
            return Object.assign({}, r);
        }, e.prototype.getAllEntries = function() {
          return Array.from(this._entries.entries()).map(function(t) {
            var r = t[0], n = t[1];
            return [r, n];
          });
        }, e.prototype.setEntry = function(t, r) {
          var n = new e(this._entries);
          return n._entries.set(t, r), n;
        }, e.prototype.removeEntry = function(t) {
          var r = new e(this._entries);
          return r._entries.delete(t), r;
        }, e.prototype.removeEntries = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          for (var n = new e(this._entries), i = 0, a = t; i < a.length; i++) {
            var s = a[i];
            n._entries.delete(s);
          }
          return n;
        }, e.prototype.clear = function() {
          return new e();
        }, e;
      }();
      Wa.BaggageImpl = bA;
    });
    var Qf = l((Za) => {
      "use strict";
      Object.defineProperty(Za, "__esModule", { value: true });
      Za.baggageEntryMetadataSymbol = void 0;
      Za.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
    });
    var ku = l((_n) => {
      "use strict";
      Object.defineProperty(_n, "__esModule", { value: true });
      _n.baggageEntryMetadataFromString = _n.createBaggage = void 0;
      var CA = hn(), OA = Yf(), PA = Qf(), RA = CA.DiagAPI.instance();
      function NA(e) {
        return e === void 0 && (e = {}), new OA.BaggageImpl(new Map(Object.entries(e)));
      }
      _n.createBaggage = NA;
      function DA(e) {
        return typeof e != "string" && (RA.error("Cannot create baggage metadata from unknown type: " + typeof e), e = ""), { __TYPE__: PA.baggageEntryMetadataSymbol, toString: function() {
          return e;
        } };
      }
      _n.baggageEntryMetadataFromString = DA;
    });
    var Zf = l((Wf) => {
      "use strict";
      Object.defineProperty(Wf, "__esModule", { value: true });
    });
    var ed = l((Jf) => {
      "use strict";
      Object.defineProperty(Jf, "__esModule", { value: true });
    });
    var td = l((Ja) => {
      "use strict";
      Object.defineProperty(Ja, "__esModule", { value: true });
      Ja.DiagConsoleLogger = void 0;
      var Hu = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }], wA = function() {
        function e() {
          function t(n) {
            return function() {
              var i = arguments;
              if (console) {
                var a = console[n];
                if (typeof a != "function" && (a = console.log), typeof a == "function")
                  return a.apply(console, i);
              }
            };
          }
          for (var r = 0; r < Hu.length; r++)
            this[Hu[r].n] = t(Hu[r].c);
        }
        return e;
      }();
      Ja.DiagConsoleLogger = wA;
    });
    var nd = l((zt) => {
      "use strict";
      var xA = zt && zt.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), rd = zt && zt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && xA(t, e, r);
      };
      Object.defineProperty(zt, "__esModule", { value: true });
      rd(td(), zt);
      rd(Ka(), zt);
    });
    var Uu = l((vn) => {
      "use strict";
      Object.defineProperty(vn, "__esModule", { value: true });
      vn.defaultTextMapSetter = vn.defaultTextMapGetter = void 0;
      vn.defaultTextMapGetter = { get: function(e, t) {
        if (e != null)
          return e[t];
      }, keys: function(e) {
        return e == null ? [] : Object.keys(e);
      } };
      vn.defaultTextMapSetter = { set: function(e, t, r) {
        e != null && (e[t] = r);
      } };
    });
    var ad = l((id) => {
      "use strict";
      Object.defineProperty(id, "__esModule", { value: true });
    });
    var od = l((sd) => {
      "use strict";
      Object.defineProperty(sd, "__esModule", { value: true });
    });
    var xi = l((gn) => {
      "use strict";
      Object.defineProperty(gn, "__esModule", { value: true });
      gn.ROOT_CONTEXT = gn.createContextKey = void 0;
      function MA(e) {
        return Symbol.for(e);
      }
      gn.createContextKey = MA;
      var LA = function() {
        function e(t) {
          var r = this;
          r._currentContext = t ? new Map(t) : new Map(), r.getValue = function(n) {
            return r._currentContext.get(n);
          }, r.setValue = function(n, i) {
            var a = new e(r._currentContext);
            return a._currentContext.set(n, i), a;
          }, r.deleteValue = function(n) {
            var i = new e(r._currentContext);
            return i._currentContext.delete(n), i;
          };
        }
        return e;
      }();
      gn.ROOT_CONTEXT = new LA();
    });
    var ud = l((mn) => {
      "use strict";
      var qA = mn && mn.__spreadArray || function(e, t) {
        for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
          e[i] = t[r];
        return e;
      };
      Object.defineProperty(mn, "__esModule", { value: true });
      mn.NoopContextManager = void 0;
      var jA = xi(), kA = function() {
        function e() {
        }
        return e.prototype.active = function() {
          return jA.ROOT_CONTEXT;
        }, e.prototype.with = function(t, r, n) {
          for (var i = [], a = 3; a < arguments.length; a++)
            i[a - 3] = arguments[a];
          return r.call.apply(r, qA([n], i));
        }, e.prototype.bind = function(t, r) {
          return r;
        }, e.prototype.enable = function() {
          return this;
        }, e.prototype.disable = function() {
          return this;
        }, e;
      }();
      mn.NoopContextManager = kA;
    });
    var Fu = l((En) => {
      "use strict";
      var HA = En && En.__spreadArray || function(e, t) {
        for (var r = 0, n = t.length, i = e.length; r < n; r++, i++)
          e[i] = t[r];
        return e;
      };
      Object.defineProperty(En, "__esModule", { value: true });
      En.ContextAPI = void 0;
      var UA = ud(), Bu = dn(), cd = hn(), Gu = "context", BA = new UA.NoopContextManager(), GA = function() {
        function e() {
        }
        return e.getInstance = function() {
          return this._instance || (this._instance = new e()), this._instance;
        }, e.prototype.setGlobalContextManager = function(t) {
          return Bu.registerGlobal(Gu, t, cd.DiagAPI.instance());
        }, e.prototype.active = function() {
          return this._getContextManager().active();
        }, e.prototype.with = function(t, r, n) {
          for (var i, a = [], s = 3; s < arguments.length; s++)
            a[s - 3] = arguments[s];
          return (i = this._getContextManager()).with.apply(i, HA([t, r, n], a));
        }, e.prototype.bind = function(t, r) {
          return this._getContextManager().bind(t, r);
        }, e.prototype._getContextManager = function() {
          return Bu.getGlobal(Gu) || BA;
        }, e.prototype.disable = function() {
          this._getContextManager().disable(), Bu.unregisterGlobal(Gu, cd.DiagAPI.instance());
        }, e;
      }();
      En.ContextAPI = GA;
    });
    var Vu = l((Mi) => {
      "use strict";
      Object.defineProperty(Mi, "__esModule", { value: true });
      Mi.TraceFlags = void 0;
      var FA;
      (function(e) {
        e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
      })(FA = Mi.TraceFlags || (Mi.TraceFlags = {}));
    });
    var es = l((lt) => {
      "use strict";
      Object.defineProperty(lt, "__esModule", { value: true });
      lt.INVALID_SPAN_CONTEXT = lt.INVALID_TRACEID = lt.INVALID_SPANID = void 0;
      var VA = Vu();
      lt.INVALID_SPANID = "0000000000000000";
      lt.INVALID_TRACEID = "00000000000000000000000000000000";
      lt.INVALID_SPAN_CONTEXT = { traceId: lt.INVALID_TRACEID, spanId: lt.INVALID_SPANID, traceFlags: VA.TraceFlags.NONE };
    });
    var rs = l((ts) => {
      "use strict";
      Object.defineProperty(ts, "__esModule", { value: true });
      ts.NonRecordingSpan = void 0;
      var $A = es(), zA = function() {
        function e(t) {
          t === void 0 && (t = $A.INVALID_SPAN_CONTEXT), this._spanContext = t;
        }
        return e.prototype.spanContext = function() {
          return this._spanContext;
        }, e.prototype.setAttribute = function(t, r) {
          return this;
        }, e.prototype.setAttributes = function(t) {
          return this;
        }, e.prototype.addEvent = function(t, r) {
          return this;
        }, e.prototype.setStatus = function(t) {
          return this;
        }, e.prototype.updateName = function(t) {
          return this;
        }, e.prototype.end = function(t) {
        }, e.prototype.isRecording = function() {
          return false;
        }, e.prototype.recordException = function(t, r) {
        }, e;
      }();
      ts.NonRecordingSpan = zA;
    });
    var zu = l((ze) => {
      "use strict";
      Object.defineProperty(ze, "__esModule", { value: true });
      ze.getSpanContext = ze.setSpanContext = ze.deleteSpan = ze.setSpan = ze.getSpan = void 0;
      var KA = xi(), XA = rs(), $u = KA.createContextKey("OpenTelemetry Context Key SPAN");
      function ld(e) {
        return e.getValue($u) || void 0;
      }
      ze.getSpan = ld;
      function pd(e, t) {
        return e.setValue($u, t);
      }
      ze.setSpan = pd;
      function YA(e) {
        return e.deleteValue($u);
      }
      ze.deleteSpan = YA;
      function QA(e, t) {
        return pd(e, new XA.NonRecordingSpan(t));
      }
      ze.setSpanContext = QA;
      function WA(e) {
        var t;
        return (t = ld(e)) === null || t === void 0 ? void 0 : t.spanContext();
      }
      ze.getSpanContext = WA;
    });
    var ns = l((pt) => {
      "use strict";
      Object.defineProperty(pt, "__esModule", { value: true });
      pt.wrapSpanContext = pt.isSpanContextValid = pt.isValidSpanId = pt.isValidTraceId = void 0;
      var fd = es(), ZA = rs(), JA = /^([0-9a-f]{32})$/i, eI = /^[0-9a-f]{16}$/i;
      function dd(e) {
        return JA.test(e) && e !== fd.INVALID_TRACEID;
      }
      pt.isValidTraceId = dd;
      function hd(e) {
        return eI.test(e) && e !== fd.INVALID_SPANID;
      }
      pt.isValidSpanId = hd;
      function tI(e) {
        return dd(e.traceId) && hd(e.spanId);
      }
      pt.isSpanContextValid = tI;
      function rI(e) {
        return new ZA.NonRecordingSpan(e);
      }
      pt.wrapSpanContext = rI;
    });
    var Xu = l((is) => {
      "use strict";
      Object.defineProperty(is, "__esModule", { value: true });
      is.NoopTracer = void 0;
      var nI = Fu(), _d = zu(), Ku = rs(), iI = ns(), vd = nI.ContextAPI.getInstance(), aI = function() {
        function e() {
        }
        return e.prototype.startSpan = function(t, r, n) {
          var i = Boolean(r == null ? void 0 : r.root);
          if (i)
            return new Ku.NonRecordingSpan();
          var a = n && _d.getSpanContext(n);
          return sI(a) && iI.isSpanContextValid(a) ? new Ku.NonRecordingSpan(a) : new Ku.NonRecordingSpan();
        }, e.prototype.startActiveSpan = function(t, r, n, i) {
          var a, s, o;
          if (!(arguments.length < 2)) {
            arguments.length === 2 ? o = r : arguments.length === 3 ? (a = r, o = n) : (a = r, s = n, o = i);
            var u = s != null ? s : vd.active(), c = this.startSpan(t, a, u), p = _d.setSpan(u, c);
            return vd.with(p, o, void 0, c);
          }
        }, e;
      }();
      is.NoopTracer = aI;
      function sI(e) {
        return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
      }
    });
    var Yu = l((as) => {
      "use strict";
      Object.defineProperty(as, "__esModule", { value: true });
      as.ProxyTracer = void 0;
      var oI = Xu(), uI = new oI.NoopTracer(), cI = function() {
        function e(t, r, n) {
          this._provider = t, this.name = r, this.version = n;
        }
        return e.prototype.startSpan = function(t, r, n) {
          return this._getTracer().startSpan(t, r, n);
        }, e.prototype.startActiveSpan = function(t, r, n, i) {
          var a = this._getTracer();
          return Reflect.apply(a.startActiveSpan, a, arguments);
        }, e.prototype._getTracer = function() {
          if (this._delegate)
            return this._delegate;
          var t = this._provider.getDelegateTracer(this.name, this.version);
          return t ? (this._delegate = t, this._delegate) : uI;
        }, e;
      }();
      as.ProxyTracer = cI;
    });
    var gd = l((ss) => {
      "use strict";
      Object.defineProperty(ss, "__esModule", { value: true });
      ss.NoopTracerProvider = void 0;
      var lI = Xu(), pI = function() {
        function e() {
        }
        return e.prototype.getTracer = function(t, r) {
          return new lI.NoopTracer();
        }, e;
      }();
      ss.NoopTracerProvider = pI;
    });
    var Qu = l((os5) => {
      "use strict";
      Object.defineProperty(os5, "__esModule", { value: true });
      os5.ProxyTracerProvider = void 0;
      var fI = Yu(), dI = gd(), hI = new dI.NoopTracerProvider(), _I = function() {
        function e() {
        }
        return e.prototype.getTracer = function(t, r) {
          var n;
          return (n = this.getDelegateTracer(t, r)) !== null && n !== void 0 ? n : new fI.ProxyTracer(this, t, r);
        }, e.prototype.getDelegate = function() {
          var t;
          return (t = this._delegate) !== null && t !== void 0 ? t : hI;
        }, e.prototype.setDelegate = function(t) {
          this._delegate = t;
        }, e.prototype.getDelegateTracer = function(t, r) {
          var n;
          return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(t, r);
        }, e;
      }();
      os5.ProxyTracerProvider = _I;
    });
    var Ed = l((md) => {
      "use strict";
      Object.defineProperty(md, "__esModule", { value: true });
    });
    var yd = l((Li) => {
      "use strict";
      Object.defineProperty(Li, "__esModule", { value: true });
      Li.SamplingDecision = void 0;
      var vI;
      (function(e) {
        e[e.NOT_RECORD = 0] = "NOT_RECORD", e[e.RECORD = 1] = "RECORD", e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
      })(vI = Li.SamplingDecision || (Li.SamplingDecision = {}));
    });
    var Sd = l((Td) => {
      "use strict";
      Object.defineProperty(Td, "__esModule", { value: true });
    });
    var Ad = l((qi) => {
      "use strict";
      Object.defineProperty(qi, "__esModule", { value: true });
      qi.SpanKind = void 0;
      var gI;
      (function(e) {
        e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER";
      })(gI = qi.SpanKind || (qi.SpanKind = {}));
    });
    var bd = l((Id) => {
      "use strict";
      Object.defineProperty(Id, "__esModule", { value: true });
    });
    var Od = l((Cd) => {
      "use strict";
      Object.defineProperty(Cd, "__esModule", { value: true });
    });
    var Pd = l((ji) => {
      "use strict";
      Object.defineProperty(ji, "__esModule", { value: true });
      ji.SpanStatusCode = void 0;
      var mI;
      (function(e) {
        e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
      })(mI = ji.SpanStatusCode || (ji.SpanStatusCode = {}));
    });
    var Nd = l((Rd) => {
      "use strict";
      Object.defineProperty(Rd, "__esModule", { value: true });
    });
    var wd = l((Dd) => {
      "use strict";
      Object.defineProperty(Dd, "__esModule", { value: true });
    });
    var Md = l((xd) => {
      "use strict";
      Object.defineProperty(xd, "__esModule", { value: true });
    });
    var qd = l((Ld) => {
      "use strict";
      Object.defineProperty(Ld, "__esModule", { value: true });
    });
    var Ud = l((us) => {
      "use strict";
      Object.defineProperty(us, "__esModule", { value: true });
      us.TraceAPI = void 0;
      var Wu = dn(), jd = Qu(), kd = ns(), ki = zu(), Hd = hn(), Zu = "trace", EI = function() {
        function e() {
          this._proxyTracerProvider = new jd.ProxyTracerProvider(), this.wrapSpanContext = kd.wrapSpanContext, this.isSpanContextValid = kd.isSpanContextValid, this.deleteSpan = ki.deleteSpan, this.getSpan = ki.getSpan, this.getSpanContext = ki.getSpanContext, this.setSpan = ki.setSpan, this.setSpanContext = ki.setSpanContext;
        }
        return e.getInstance = function() {
          return this._instance || (this._instance = new e()), this._instance;
        }, e.prototype.setGlobalTracerProvider = function(t) {
          var r = Wu.registerGlobal(Zu, this._proxyTracerProvider, Hd.DiagAPI.instance());
          return r && this._proxyTracerProvider.setDelegate(t), r;
        }, e.prototype.getTracerProvider = function() {
          return Wu.getGlobal(Zu) || this._proxyTracerProvider;
        }, e.prototype.getTracer = function(t, r) {
          return this.getTracerProvider().getTracer(t, r);
        }, e.prototype.disable = function() {
          Wu.unregisterGlobal(Zu, Hd.DiagAPI.instance()), this._proxyTracerProvider = new jd.ProxyTracerProvider();
        }, e;
      }();
      us.TraceAPI = EI;
    });
    var Bd = l((cs) => {
      "use strict";
      Object.defineProperty(cs, "__esModule", { value: true });
      cs.NoopTextMapPropagator = void 0;
      var yI = function() {
        function e() {
        }
        return e.prototype.inject = function(t, r) {
        }, e.prototype.extract = function(t, r) {
          return t;
        }, e.prototype.fields = function() {
          return [];
        }, e;
      }();
      cs.NoopTextMapPropagator = yI;
    });
    var Gd = l((Kt) => {
      "use strict";
      Object.defineProperty(Kt, "__esModule", { value: true });
      Kt.deleteBaggage = Kt.setBaggage = Kt.getBaggage = void 0;
      var TI = xi(), Ju = TI.createContextKey("OpenTelemetry Baggage Key");
      function SI(e) {
        return e.getValue(Ju) || void 0;
      }
      Kt.getBaggage = SI;
      function AI(e, t) {
        return e.setValue(Ju, t);
      }
      Kt.setBaggage = AI;
      function II(e) {
        return e.deleteValue(Ju);
      }
      Kt.deleteBaggage = II;
    });
    var $d = l((ls) => {
      "use strict";
      Object.defineProperty(ls, "__esModule", { value: true });
      ls.PropagationAPI = void 0;
      var ec = dn(), bI = Bd(), Fd = Uu(), tc = Gd(), CI = ku(), Vd = hn(), rc = "propagation", OI = new bI.NoopTextMapPropagator(), PI = function() {
        function e() {
          this.createBaggage = CI.createBaggage, this.getBaggage = tc.getBaggage, this.setBaggage = tc.setBaggage, this.deleteBaggage = tc.deleteBaggage;
        }
        return e.getInstance = function() {
          return this._instance || (this._instance = new e()), this._instance;
        }, e.prototype.setGlobalPropagator = function(t) {
          return ec.registerGlobal(rc, t, Vd.DiagAPI.instance());
        }, e.prototype.inject = function(t, r, n) {
          return n === void 0 && (n = Fd.defaultTextMapSetter), this._getGlobalPropagator().inject(t, r, n);
        }, e.prototype.extract = function(t, r, n) {
          return n === void 0 && (n = Fd.defaultTextMapGetter), this._getGlobalPropagator().extract(t, r, n);
        }, e.prototype.fields = function() {
          return this._getGlobalPropagator().fields();
        }, e.prototype.disable = function() {
          ec.unregisterGlobal(rc, Vd.DiagAPI.instance());
        }, e.prototype._getGlobalPropagator = function() {
          return ec.getGlobal(rc) || OI;
        }, e;
      }();
      ls.PropagationAPI = PI;
    });
    var z = l((y) => {
      "use strict";
      var RI = y && y.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), ne = y && y.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && RI(t, e, r);
      };
      Object.defineProperty(y, "__esModule", { value: true });
      y.diag = y.propagation = y.trace = y.context = y.INVALID_SPAN_CONTEXT = y.INVALID_TRACEID = y.INVALID_SPANID = y.isValidSpanId = y.isValidTraceId = y.isSpanContextValid = y.baggageEntryMetadataFromString = void 0;
      ne(Uf(), y);
      var NI = ku();
      Object.defineProperty(y, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
        return NI.baggageEntryMetadataFromString;
      } });
      ne(Zf(), y);
      ne(ed(), y);
      ne(nd(), y);
      ne(Uu(), y);
      ne(ad(), y);
      ne(od(), y);
      ne(Yu(), y);
      ne(Qu(), y);
      ne(Ed(), y);
      ne(yd(), y);
      ne(Sd(), y);
      ne(Ad(), y);
      ne(bd(), y);
      ne(Od(), y);
      ne(Pd(), y);
      ne(Vu(), y);
      ne(Nd(), y);
      ne(wd(), y);
      ne(Md(), y);
      var nc = ns();
      Object.defineProperty(y, "isSpanContextValid", { enumerable: true, get: function() {
        return nc.isSpanContextValid;
      } });
      Object.defineProperty(y, "isValidTraceId", { enumerable: true, get: function() {
        return nc.isValidTraceId;
      } });
      Object.defineProperty(y, "isValidSpanId", { enumerable: true, get: function() {
        return nc.isValidSpanId;
      } });
      var ic = es();
      Object.defineProperty(y, "INVALID_SPANID", { enumerable: true, get: function() {
        return ic.INVALID_SPANID;
      } });
      Object.defineProperty(y, "INVALID_TRACEID", { enumerable: true, get: function() {
        return ic.INVALID_TRACEID;
      } });
      Object.defineProperty(y, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
        return ic.INVALID_SPAN_CONTEXT;
      } });
      ne(xi(), y);
      ne(qd(), y);
      var DI = Fu();
      y.context = DI.ContextAPI.getInstance();
      var wI = Ud();
      y.trace = wI.TraceAPI.getInstance();
      var xI = $d();
      y.propagation = xI.PropagationAPI.getInstance();
      var MI = hn();
      y.diag = MI.DiagAPI.instance();
      y.default = { trace: y.trace, context: y.context, propagation: y.propagation, diag: y.diag };
    });
    var ps = l((Xt) => {
      "use strict";
      Object.defineProperty(Xt, "__esModule", { value: true });
      Xt.isTracingSuppressed = Xt.unsuppressTracing = Xt.suppressTracing = void 0;
      var LI = z(), ac = LI.createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
      function qI(e) {
        return e.setValue(ac, true);
      }
      Xt.suppressTracing = qI;
      function jI(e) {
        return e.deleteValue(ac);
      }
      Xt.unsuppressTracing = jI;
      function kI(e) {
        return e.getValue(ac) === true;
      }
      Xt.isTracingSuppressed = kI;
    });
    var sc = l((Ie) => {
      "use strict";
      Object.defineProperty(Ie, "__esModule", { value: true });
      Ie.BAGGAGE_MAX_TOTAL_LENGTH = Ie.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = Ie.BAGGAGE_MAX_NAME_VALUE_PAIRS = Ie.BAGGAGE_HEADER = Ie.BAGGAGE_ITEMS_SEPARATOR = Ie.BAGGAGE_PROPERTIES_SEPARATOR = Ie.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
      Ie.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
      Ie.BAGGAGE_PROPERTIES_SEPARATOR = ";";
      Ie.BAGGAGE_ITEMS_SEPARATOR = ",";
      Ie.BAGGAGE_HEADER = "baggage";
      Ie.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
      Ie.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
      Ie.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
    });
    var oc = l((nt) => {
      "use strict";
      Object.defineProperty(nt, "__esModule", { value: true });
      nt.parseKeyPairsIntoRecord = nt.parsePairKeyValue = nt.getKeyPairs = nt.serializeKeyPairs = void 0;
      var HI = z(), yn = sc(), UI = (e) => e.reduce((t, r) => {
        let n = `${t}${t !== "" ? yn.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
        return n.length > yn.BAGGAGE_MAX_TOTAL_LENGTH ? t : n;
      }, "");
      nt.serializeKeyPairs = UI;
      var BI = (e) => e.getAllEntries().map(([t, r]) => `${encodeURIComponent(t)}=${encodeURIComponent(r.value)}`);
      nt.getKeyPairs = BI;
      var GI = (e) => {
        let t = e.split(yn.BAGGAGE_PROPERTIES_SEPARATOR);
        if (t.length <= 0)
          return;
        let r = t.shift();
        if (!r)
          return;
        let n = r.split(yn.BAGGAGE_KEY_PAIR_SEPARATOR);
        if (n.length !== 2)
          return;
        let i = decodeURIComponent(n[0].trim()), a = decodeURIComponent(n[1].trim()), s;
        return t.length > 0 && (s = HI.baggageEntryMetadataFromString(t.join(yn.BAGGAGE_PROPERTIES_SEPARATOR))), { key: i, value: a, metadata: s };
      };
      nt.parsePairKeyValue = GI;
      var FI = (e) => typeof e != "string" || e.length === 0 ? {} : e.split(yn.BAGGAGE_ITEMS_SEPARATOR).map((t) => nt.parsePairKeyValue(t)).filter((t) => t !== void 0 && t.value.length > 0).reduce((t, r) => (t[r.key] = r.value, t), {});
      nt.parseKeyPairsIntoRecord = FI;
    });
    var Kd = l((fs5) => {
      "use strict";
      Object.defineProperty(fs5, "__esModule", { value: true });
      fs5.HttpBaggagePropagator = void 0;
      var uc = z(), VI = ps(), Tn = sc(), cc = oc(), zd = class {
        inject(t, r, n) {
          let i = uc.propagation.getBaggage(t);
          if (!i || VI.isTracingSuppressed(t))
            return;
          let a = cc.getKeyPairs(i).filter((o) => o.length <= Tn.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, Tn.BAGGAGE_MAX_NAME_VALUE_PAIRS), s = cc.serializeKeyPairs(a);
          s.length > 0 && n.set(r, Tn.BAGGAGE_HEADER, s);
        }
        extract(t, r, n) {
          let i = n.get(r, Tn.BAGGAGE_HEADER);
          if (!i)
            return t;
          let a = {};
          return i.length === 0 || (i.split(Tn.BAGGAGE_ITEMS_SEPARATOR).forEach((o) => {
            let u = cc.parsePairKeyValue(o);
            if (u) {
              let c = { value: u.value };
              u.metadata && (c.metadata = u.metadata), a[u.key] = c;
            }
          }), Object.entries(a).length === 0) ? t : uc.propagation.setBaggage(t, uc.propagation.createBaggage(a));
        }
        fields() {
          return [Tn.BAGGAGE_HEADER];
        }
      };
      fs5.HttpBaggagePropagator = zd;
    });
    var Qd = l((Sn) => {
      "use strict";
      Object.defineProperty(Sn, "__esModule", { value: true });
      Sn.isAttributeValue = Sn.sanitizeAttributes = void 0;
      function $I(e) {
        let t = {};
        if (e == null || typeof e != "object")
          return t;
        for (let [r, n] of Object.entries(e))
          Xd(n) && (Array.isArray(n) ? t[r] = n.slice() : t[r] = n);
        return t;
      }
      Sn.sanitizeAttributes = $I;
      function Xd(e) {
        return e == null ? true : Array.isArray(e) ? zI(e) : Yd(e);
      }
      Sn.isAttributeValue = Xd;
      function zI(e) {
        let t;
        for (let r of e)
          if (r != null) {
            if (!t) {
              if (Yd(r)) {
                t = typeof r;
                continue;
              }
              return false;
            }
            if (typeof r !== t)
              return false;
          }
        return true;
      }
      function Yd(e) {
        switch (typeof e) {
          case "number":
            return true;
          case "boolean":
            return true;
          case "string":
            return true;
        }
        return false;
      }
    });
    var lc = l((ds) => {
      "use strict";
      Object.defineProperty(ds, "__esModule", { value: true });
      ds.loggingErrorHandler = void 0;
      var KI = z();
      function XI() {
        return (e) => {
          KI.diag.error(YI(e));
        };
      }
      ds.loggingErrorHandler = XI;
      function YI(e) {
        return typeof e == "string" ? e : JSON.stringify(QI(e));
      }
      function QI(e) {
        let t = {}, r = e;
        for (; r !== null; )
          Object.getOwnPropertyNames(r).forEach((n) => {
            if (t[n])
              return;
            let i = r[n];
            i && (t[n] = String(i));
          }), r = Object.getPrototypeOf(r);
        return t;
      }
    });
    var pc = l((An) => {
      "use strict";
      Object.defineProperty(An, "__esModule", { value: true });
      An.globalErrorHandler = An.setGlobalErrorHandler = void 0;
      var WI = lc(), Wd = WI.loggingErrorHandler();
      function ZI(e) {
        Wd = e;
      }
      An.setGlobalErrorHandler = ZI;
      var JI = (e) => {
        try {
          Wd(e);
        } catch (t) {
        }
      };
      An.globalErrorHandler = JI;
    });
    var fc = l((Hi) => {
      "use strict";
      Object.defineProperty(Hi, "__esModule", { value: true });
      Hi.TracesSamplerValues = void 0;
      var eb;
      (function(e) {
        e.AlwaysOff = "always_off", e.AlwaysOn = "always_on", e.ParentBasedAlwaysOff = "parentbased_always_off", e.ParentBasedAlwaysOn = "parentbased_always_on", e.ParentBasedTraceIdRatio = "parentbased_traceidratio", e.TraceIdRatio = "traceidratio";
      })(eb = Hi.TracesSamplerValues || (Hi.TracesSamplerValues = {}));
    });
    var dc = l((Sr) => {
      "use strict";
      Object.defineProperty(Sr, "__esModule", { value: true });
      Sr.parseEnvironment = Sr.DEFAULT_ENVIRONMENT = void 0;
      var Yt = z(), tb = fc(), rb = ",", nb = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT"];
      function ib(e) {
        return nb.indexOf(e) > -1;
      }
      var ab = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];
      function sb(e) {
        return ab.indexOf(e) > -1;
      }
      Sr.DEFAULT_ENVIRONMENT = { CONTAINER_NAME: "", ECS_CONTAINER_METADATA_URI_V4: "", ECS_CONTAINER_METADATA_URI: "", HOSTNAME: "", KUBERNETES_SERVICE_HOST: "", NAMESPACE: "", OTEL_BSP_EXPORT_TIMEOUT: 3e4, OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512, OTEL_BSP_MAX_QUEUE_SIZE: 2048, OTEL_BSP_SCHEDULE_DELAY: 5e3, OTEL_EXPORTER_JAEGER_AGENT_HOST: "", OTEL_EXPORTER_JAEGER_ENDPOINT: "", OTEL_EXPORTER_JAEGER_PASSWORD: "", OTEL_EXPORTER_JAEGER_USER: "", OTEL_EXPORTER_OTLP_ENDPOINT: "", OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "", OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "", OTEL_EXPORTER_OTLP_HEADERS: "", OTEL_EXPORTER_OTLP_TRACES_HEADERS: "", OTEL_EXPORTER_OTLP_METRICS_HEADERS: "", OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans", OTEL_LOG_LEVEL: Yt.DiagLogLevel.INFO, OTEL_NO_PATCH_MODULES: [], OTEL_PROPAGATORS: ["tracecontext", "baggage"], OTEL_RESOURCE_ATTRIBUTES: "", OTEL_SERVICE_NAME: "", OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: 128, OTEL_SPAN_EVENT_COUNT_LIMIT: 128, OTEL_SPAN_LINK_COUNT_LIMIT: 128, OTEL_TRACES_EXPORTER: "none", OTEL_TRACES_SAMPLER: tb.TracesSamplerValues.ParentBasedAlwaysOn, OTEL_TRACES_SAMPLER_ARG: "" };
      function ob(e, t, r, n = -1 / 0, i = 1 / 0) {
        if (typeof r[e] != "undefined") {
          let a = Number(r[e]);
          isNaN(a) || (a < n ? t[e] = n : a > i ? t[e] = i : t[e] = a);
        }
      }
      function ub(e, t, r, n = rb) {
        let i = r[e];
        typeof i == "string" && (t[e] = i.split(n).map((a) => a.trim()));
      }
      var cb = { ALL: Yt.DiagLogLevel.ALL, VERBOSE: Yt.DiagLogLevel.VERBOSE, DEBUG: Yt.DiagLogLevel.DEBUG, INFO: Yt.DiagLogLevel.INFO, WARN: Yt.DiagLogLevel.WARN, ERROR: Yt.DiagLogLevel.ERROR, NONE: Yt.DiagLogLevel.NONE };
      function lb(e, t, r) {
        let n = r[e];
        if (typeof n == "string") {
          let i = cb[n.toUpperCase()];
          i != null && (t[e] = i);
        }
      }
      function pb(e) {
        let t = {};
        for (let r in Sr.DEFAULT_ENVIRONMENT) {
          let n = r;
          switch (n) {
            case "OTEL_LOG_LEVEL":
              lb(n, t, e);
              break;
            default:
              if (ib(n))
                ob(n, t, e);
              else if (sb(n))
                ub(n, t, e);
              else {
                let i = e[n];
                typeof i != "undefined" && i !== null && (t[n] = String(i));
              }
          }
        }
        return t;
      }
      Sr.parseEnvironment = pb;
    });
    var Jd = l((hs) => {
      "use strict";
      Object.defineProperty(hs, "__esModule", { value: true });
      hs.getEnv = void 0;
      var fb = require("os"), Zd = dc();
      function db() {
        let e = Zd.parseEnvironment(process.env);
        return Object.assign({ HOSTNAME: fb.hostname() }, Zd.DEFAULT_ENVIRONMENT, e);
      }
      hs.getEnv = db;
    });
    var eh = l((_s) => {
      "use strict";
      Object.defineProperty(_s, "__esModule", { value: true });
      _s.hexToBase64 = void 0;
      function hb(e) {
        let t = e.length, r = "";
        for (let n = 0; n < t; n += 2) {
          let i = e.substring(n, n + 2), a = parseInt(i, 16);
          r += String.fromCharCode(a);
        }
        return Buffer.from(r, "ascii").toString("base64");
      }
      _s.hexToBase64 = hb;
    });
    var ih = l((gs) => {
      "use strict";
      Object.defineProperty(gs, "__esModule", { value: true });
      gs.RandomIdGenerator = void 0;
      var _b = 8, th = 16, rh = class {
        constructor() {
          this.generateTraceId = nh(th), this.generateSpanId = nh(_b);
        }
      };
      gs.RandomIdGenerator = rh;
      var vs = Buffer.allocUnsafe(th);
      function nh(e) {
        return function() {
          for (let r = 0; r < e / 4; r++)
            vs.writeUInt32BE(Math.random() * 2 ** 32 >>> 0, r * 4);
          for (let r = 0; r < e && !(vs[r] > 0); r++)
            r === e - 1 && (vs[e - 1] = 1);
          return vs.toString("hex", 0, e);
        };
      }
    });
    var ah = l((ms) => {
      "use strict";
      Object.defineProperty(ms, "__esModule", { value: true });
      ms.otperformance = void 0;
      var vb = require("perf_hooks");
      ms.otperformance = vb.performance;
    });
    var ys = l((Es) => {
      "use strict";
      Object.defineProperty(Es, "__esModule", { value: true });
      Es.VERSION = void 0;
      Es.VERSION = "0.23.0";
    });
    var sh = l((x) => {
      "use strict";
      Object.defineProperty(x, "__esModule", { value: true });
      x.RpcGrpcStatusCodeValues = x.MessagingOperationValues = x.MessagingDestinationKindValues = x.HttpFlavorValues = x.NetTransportValues = x.FaasInvokedProviderValues = x.FaasDocumentOperationValues = x.FaasTriggerValues = x.DbCassandraConsistencyLevelValues = x.DbSystemValues = x.SemanticAttributes = void 0;
      x.SemanticAttributes = { DB_SYSTEM: "db.system", DB_CONNECTION_STRING: "db.connection_string", DB_USER: "db.user", DB_JDBC_DRIVER_CLASSNAME: "db.jdbc.driver_classname", DB_NAME: "db.name", DB_STATEMENT: "db.statement", DB_OPERATION: "db.operation", DB_MSSQL_INSTANCE_NAME: "db.mssql.instance_name", DB_CASSANDRA_KEYSPACE: "db.cassandra.keyspace", DB_CASSANDRA_PAGE_SIZE: "db.cassandra.page_size", DB_CASSANDRA_CONSISTENCY_LEVEL: "db.cassandra.consistency_level", DB_CASSANDRA_TABLE: "db.cassandra.table", DB_CASSANDRA_IDEMPOTENCE: "db.cassandra.idempotence", DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: "db.cassandra.speculative_execution_count", DB_CASSANDRA_COORDINATOR_ID: "db.cassandra.coordinator.id", DB_CASSANDRA_COORDINATOR_DC: "db.cassandra.coordinator.dc", DB_HBASE_NAMESPACE: "db.hbase.namespace", DB_REDIS_DATABASE_INDEX: "db.redis.database_index", DB_MONGODB_COLLECTION: "db.mongodb.collection", DB_SQL_TABLE: "db.sql.table", EXCEPTION_TYPE: "exception.type", EXCEPTION_MESSAGE: "exception.message", EXCEPTION_STACKTRACE: "exception.stacktrace", EXCEPTION_ESCAPED: "exception.escaped", FAAS_TRIGGER: "faas.trigger", FAAS_EXECUTION: "faas.execution", FAAS_DOCUMENT_COLLECTION: "faas.document.collection", FAAS_DOCUMENT_OPERATION: "faas.document.operation", FAAS_DOCUMENT_TIME: "faas.document.time", FAAS_DOCUMENT_NAME: "faas.document.name", FAAS_TIME: "faas.time", FAAS_CRON: "faas.cron", FAAS_COLDSTART: "faas.coldstart", FAAS_INVOKED_NAME: "faas.invoked_name", FAAS_INVOKED_PROVIDER: "faas.invoked_provider", FAAS_INVOKED_REGION: "faas.invoked_region", NET_TRANSPORT: "net.transport", NET_PEER_IP: "net.peer.ip", NET_PEER_PORT: "net.peer.port", NET_PEER_NAME: "net.peer.name", NET_HOST_IP: "net.host.ip", NET_HOST_PORT: "net.host.port", NET_HOST_NAME: "net.host.name", PEER_SERVICE: "peer.service", ENDUSER_ID: "enduser.id", ENDUSER_ROLE: "enduser.role", ENDUSER_SCOPE: "enduser.scope", THREAD_ID: "thread.id", THREAD_NAME: "thread.name", CODE_FUNCTION: "code.function", CODE_NAMESPACE: "code.namespace", CODE_FILEPATH: "code.filepath", CODE_LINENO: "code.lineno", HTTP_METHOD: "http.method", HTTP_URL: "http.url", HTTP_TARGET: "http.target", HTTP_HOST: "http.host", HTTP_SCHEME: "http.scheme", HTTP_STATUS_CODE: "http.status_code", HTTP_FLAVOR: "http.flavor", HTTP_USER_AGENT: "http.user_agent", HTTP_REQUEST_CONTENT_LENGTH: "http.request_content_length", HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: "http.request_content_length_uncompressed", HTTP_RESPONSE_CONTENT_LENGTH: "http.response_content_length", HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: "http.response_content_length_uncompressed", HTTP_SERVER_NAME: "http.server_name", HTTP_ROUTE: "http.route", HTTP_CLIENT_IP: "http.client_ip", AWS_DYNAMODB_TABLE_NAMES: "aws.dynamodb.table_names", AWS_DYNAMODB_CONSUMED_CAPACITY: "aws.dynamodb.consumed_capacity", AWS_DYNAMODB_ITEM_COLLECTION_METRICS: "aws.dynamodb.item_collection_metrics", AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: "aws.dynamodb.provisioned_read_capacity", AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: "aws.dynamodb.provisioned_write_capacity", AWS_DYNAMODB_CONSISTENT_READ: "aws.dynamodb.consistent_read", AWS_DYNAMODB_PROJECTION: "aws.dynamodb.projection", AWS_DYNAMODB_LIMIT: "aws.dynamodb.limit", AWS_DYNAMODB_ATTRIBUTES_TO_GET: "aws.dynamodb.attributes_to_get", AWS_DYNAMODB_INDEX_NAME: "aws.dynamodb.index_name", AWS_DYNAMODB_SELECT: "aws.dynamodb.select", AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: "aws.dynamodb.global_secondary_indexes", AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: "aws.dynamodb.local_secondary_indexes", AWS_DYNAMODB_EXCLUSIVE_START_TABLE: "aws.dynamodb.exclusive_start_table", AWS_DYNAMODB_TABLE_COUNT: "aws.dynamodb.table_count", AWS_DYNAMODB_SCAN_FORWARD: "aws.dynamodb.scan_forward", AWS_DYNAMODB_SEGMENT: "aws.dynamodb.segment", AWS_DYNAMODB_TOTAL_SEGMENTS: "aws.dynamodb.total_segments", AWS_DYNAMODB_COUNT: "aws.dynamodb.count", AWS_DYNAMODB_SCANNED_COUNT: "aws.dynamodb.scanned_count", AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: "aws.dynamodb.attribute_definitions", AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: "aws.dynamodb.global_secondary_index_updates", MESSAGING_SYSTEM: "messaging.system", MESSAGING_DESTINATION: "messaging.destination", MESSAGING_DESTINATION_KIND: "messaging.destination_kind", MESSAGING_TEMP_DESTINATION: "messaging.temp_destination", MESSAGING_PROTOCOL: "messaging.protocol", MESSAGING_PROTOCOL_VERSION: "messaging.protocol_version", MESSAGING_URL: "messaging.url", MESSAGING_MESSAGE_ID: "messaging.message_id", MESSAGING_CONVERSATION_ID: "messaging.conversation_id", MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: "messaging.message_payload_size_bytes", MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: "messaging.message_payload_compressed_size_bytes", MESSAGING_OPERATION: "messaging.operation", MESSAGING_RABBITMQ_ROUTING_KEY: "messaging.rabbitmq.routing_key", MESSAGING_KAFKA_MESSAGE_KEY: "messaging.kafka.message_key", MESSAGING_KAFKA_CONSUMER_GROUP: "messaging.kafka.consumer_group", MESSAGING_KAFKA_CLIENT_ID: "messaging.kafka.client_id", MESSAGING_KAFKA_PARTITION: "messaging.kafka.partition", MESSAGING_KAFKA_TOMBSTONE: "messaging.kafka.tombstone", RPC_SYSTEM: "rpc.system", RPC_SERVICE: "rpc.service", RPC_METHOD: "rpc.method", RPC_GRPC_STATUS_CODE: "rpc.grpc.status_code", RPC_JSONRPC_VERSION: "rpc.jsonrpc.version", RPC_JSONRPC_METHOD: "rpc.jsonrpc.method", RPC_JSONRPC_REQUEST_ID: "rpc.jsonrpc.request_id", RPC_JSONRPC_ERROR_CODE: "rpc.jsonrpc.error_code", RPC_JSONRPC_ERROR_MESSAGE: "rpc.jsonrpc.error_message" };
      var gb;
      (function(e) {
        e.OTHER_SQL = "other_sql", e.MSSQL = "mssql", e.MYSQL = "mysql", e.ORACLE = "oracle", e.DB2 = "db2", e.POSTGRESQL = "postgresql", e.REDSHIFT = "redshift", e.HIVE = "hive", e.CLOUDSCAPE = "cloudscape", e.HSQLDB = "hsqldb", e.PROGRESS = "progress", e.MAXDB = "maxdb", e.HANADB = "hanadb", e.INGRES = "ingres", e.FIRSTSQL = "firstsql", e.EDB = "edb", e.CACHE = "cache", e.ADABAS = "adabas", e.FIREBIRD = "firebird", e.DERBY = "derby", e.FILEMAKER = "filemaker", e.INFORMIX = "informix", e.INSTANTDB = "instantdb", e.INTERBASE = "interbase", e.MARIADB = "mariadb", e.NETEZZA = "netezza", e.PERVASIVE = "pervasive", e.POINTBASE = "pointbase", e.SQLITE = "sqlite", e.SYBASE = "sybase", e.TERADATA = "teradata", e.VERTICA = "vertica", e.H2 = "h2", e.COLDFUSION = "coldfusion", e.CASSANDRA = "cassandra", e.HBASE = "hbase", e.MONGODB = "mongodb", e.REDIS = "redis", e.COUCHBASE = "couchbase", e.COUCHDB = "couchdb", e.COSMOSDB = "cosmosdb", e.DYNAMODB = "dynamodb", e.NEO4J = "neo4j", e.GEODE = "geode", e.ELASTICSEARCH = "elasticsearch", e.MEMCACHED = "memcached", e.COCKROACHDB = "cockroachdb";
      })(gb = x.DbSystemValues || (x.DbSystemValues = {}));
      var mb;
      (function(e) {
        e.ALL = "all", e.EACH_QUORUM = "each_quorum", e.QUORUM = "quorum", e.LOCAL_QUORUM = "local_quorum", e.ONE = "one", e.TWO = "two", e.THREE = "three", e.LOCAL_ONE = "local_one", e.ANY = "any", e.SERIAL = "serial", e.LOCAL_SERIAL = "local_serial";
      })(mb = x.DbCassandraConsistencyLevelValues || (x.DbCassandraConsistencyLevelValues = {}));
      var Eb;
      (function(e) {
        e.DATASOURCE = "datasource", e.HTTP = "http", e.PUBSUB = "pubsub", e.TIMER = "timer", e.OTHER = "other";
      })(Eb = x.FaasTriggerValues || (x.FaasTriggerValues = {}));
      var yb;
      (function(e) {
        e.INSERT = "insert", e.EDIT = "edit", e.DELETE = "delete";
      })(yb = x.FaasDocumentOperationValues || (x.FaasDocumentOperationValues = {}));
      var Tb;
      (function(e) {
        e.AWS = "aws", e.AZURE = "azure", e.GCP = "gcp";
      })(Tb = x.FaasInvokedProviderValues || (x.FaasInvokedProviderValues = {}));
      var Sb;
      (function(e) {
        e.IP_TCP = "ip_tcp", e.IP_UDP = "ip_udp", e.IP = "ip", e.UNIX = "unix", e.PIPE = "pipe", e.INPROC = "inproc", e.OTHER = "other";
      })(Sb = x.NetTransportValues || (x.NetTransportValues = {}));
      var Ab;
      (function(e) {
        e.HTTP_1_0 = "1.0", e.HTTP_1_1 = "1.1", e.HTTP_2_0 = "2.0", e.SPDY = "SPDY", e.QUIC = "QUIC";
      })(Ab = x.HttpFlavorValues || (x.HttpFlavorValues = {}));
      var Ib;
      (function(e) {
        e.QUEUE = "queue", e.TOPIC = "topic";
      })(Ib = x.MessagingDestinationKindValues || (x.MessagingDestinationKindValues = {}));
      var bb;
      (function(e) {
        e.RECEIVE = "receive", e.PROCESS = "process";
      })(bb = x.MessagingOperationValues || (x.MessagingOperationValues = {}));
      var Cb;
      (function(e) {
        e[e.OK = 0] = "OK", e[e.CANCELLED = 1] = "CANCELLED", e[e.UNKNOWN = 2] = "UNKNOWN", e[e.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", e[e.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", e[e.NOT_FOUND = 5] = "NOT_FOUND", e[e.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e[e.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", e[e.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", e[e.ABORTED = 10] = "ABORTED", e[e.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", e[e.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", e[e.INTERNAL = 13] = "INTERNAL", e[e.UNAVAILABLE = 14] = "UNAVAILABLE", e[e.DATA_LOSS = 15] = "DATA_LOSS", e[e.UNAUTHENTICATED = 16] = "UNAUTHENTICATED";
      })(Cb = x.RpcGrpcStatusCodeValues || (x.RpcGrpcStatusCodeValues = {}));
    });
    var oh = l((Ar) => {
      "use strict";
      var Ob = Ar && Ar.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), Pb = Ar && Ar.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ob(t, e, r);
      };
      Object.defineProperty(Ar, "__esModule", { value: true });
      Pb(sh(), Ar);
    });
    var uh = l((ie) => {
      "use strict";
      Object.defineProperty(ie, "__esModule", { value: true });
      ie.TelemetrySdkLanguageValues = ie.OsTypeValues = ie.HostArchValues = ie.AwsEcsLaunchtypeValues = ie.CloudPlatformValues = ie.CloudProviderValues = ie.ResourceAttributes = void 0;
      ie.ResourceAttributes = { CLOUD_PROVIDER: "cloud.provider", CLOUD_ACCOUNT_ID: "cloud.account.id", CLOUD_REGION: "cloud.region", CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone", CLOUD_PLATFORM: "cloud.platform", AWS_ECS_CONTAINER_ARN: "aws.ecs.container.arn", AWS_ECS_CLUSTER_ARN: "aws.ecs.cluster.arn", AWS_ECS_LAUNCHTYPE: "aws.ecs.launchtype", AWS_ECS_TASK_ARN: "aws.ecs.task.arn", AWS_ECS_TASK_FAMILY: "aws.ecs.task.family", AWS_ECS_TASK_REVISION: "aws.ecs.task.revision", AWS_EKS_CLUSTER_ARN: "aws.eks.cluster.arn", AWS_LOG_GROUP_NAMES: "aws.log.group.names", AWS_LOG_GROUP_ARNS: "aws.log.group.arns", AWS_LOG_STREAM_NAMES: "aws.log.stream.names", AWS_LOG_STREAM_ARNS: "aws.log.stream.arns", CONTAINER_NAME: "container.name", CONTAINER_ID: "container.id", CONTAINER_RUNTIME: "container.runtime", CONTAINER_IMAGE_NAME: "container.image.name", CONTAINER_IMAGE_TAG: "container.image.tag", DEPLOYMENT_ENVIRONMENT: "deployment.environment", DEVICE_ID: "device.id", DEVICE_MODEL_IDENTIFIER: "device.model.identifier", DEVICE_MODEL_NAME: "device.model.name", FAAS_NAME: "faas.name", FAAS_ID: "faas.id", FAAS_VERSION: "faas.version", FAAS_INSTANCE: "faas.instance", FAAS_MAX_MEMORY: "faas.max_memory", HOST_ID: "host.id", HOST_NAME: "host.name", HOST_TYPE: "host.type", HOST_ARCH: "host.arch", HOST_IMAGE_NAME: "host.image.name", HOST_IMAGE_ID: "host.image.id", HOST_IMAGE_VERSION: "host.image.version", K8S_CLUSTER_NAME: "k8s.cluster.name", K8S_NODE_NAME: "k8s.node.name", K8S_NODE_UID: "k8s.node.uid", K8S_NAMESPACE_NAME: "k8s.namespace.name", K8S_POD_UID: "k8s.pod.uid", K8S_POD_NAME: "k8s.pod.name", K8S_CONTAINER_NAME: "k8s.container.name", K8S_REPLICASET_UID: "k8s.replicaset.uid", K8S_REPLICASET_NAME: "k8s.replicaset.name", K8S_DEPLOYMENT_UID: "k8s.deployment.uid", K8S_DEPLOYMENT_NAME: "k8s.deployment.name", K8S_STATEFULSET_UID: "k8s.statefulset.uid", K8S_STATEFULSET_NAME: "k8s.statefulset.name", K8S_DAEMONSET_UID: "k8s.daemonset.uid", K8S_DAEMONSET_NAME: "k8s.daemonset.name", K8S_JOB_UID: "k8s.job.uid", K8S_JOB_NAME: "k8s.job.name", K8S_CRONJOB_UID: "k8s.cronjob.uid", K8S_CRONJOB_NAME: "k8s.cronjob.name", OS_TYPE: "os.type", OS_DESCRIPTION: "os.description", OS_NAME: "os.name", OS_VERSION: "os.version", PROCESS_PID: "process.pid", PROCESS_EXECUTABLE_NAME: "process.executable.name", PROCESS_EXECUTABLE_PATH: "process.executable.path", PROCESS_COMMAND: "process.command", PROCESS_COMMAND_LINE: "process.command_line", PROCESS_COMMAND_ARGS: "process.command_args", PROCESS_OWNER: "process.owner", PROCESS_RUNTIME_NAME: "process.runtime.name", PROCESS_RUNTIME_VERSION: "process.runtime.version", PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description", SERVICE_NAME: "service.name", SERVICE_NAMESPACE: "service.namespace", SERVICE_INSTANCE_ID: "service.instance.id", SERVICE_VERSION: "service.version", TELEMETRY_SDK_NAME: "telemetry.sdk.name", TELEMETRY_SDK_LANGUAGE: "telemetry.sdk.language", TELEMETRY_SDK_VERSION: "telemetry.sdk.version", TELEMETRY_AUTO_VERSION: "telemetry.auto.version", WEBENGINE_NAME: "webengine.name", WEBENGINE_VERSION: "webengine.version", WEBENGINE_DESCRIPTION: "webengine.description" };
      var Rb;
      (function(e) {
        e.AWS = "aws", e.AZURE = "azure", e.GCP = "gcp";
      })(Rb = ie.CloudProviderValues || (ie.CloudProviderValues = {}));
      var Nb;
      (function(e) {
        e.AWS_EC2 = "aws_ec2", e.AWS_ECS = "aws_ecs", e.AWS_EKS = "aws_eks", e.AWS_LAMBDA = "aws_lambda", e.AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk", e.AZURE_VM = "azure_vm", e.AZURE_CONTAINER_INSTANCES = "azure_container_instances", e.AZURE_AKS = "azure_aks", e.AZURE_FUNCTIONS = "azure_functions", e.AZURE_APP_SERVICE = "azure_app_service", e.GCP_COMPUTE_ENGINE = "gcp_compute_engine", e.GCP_CLOUD_RUN = "gcp_cloud_run", e.GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine", e.GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions", e.GCP_APP_ENGINE = "gcp_app_engine";
      })(Nb = ie.CloudPlatformValues || (ie.CloudPlatformValues = {}));
      var Db;
      (function(e) {
        e.EC2 = "ec2", e.FARGATE = "fargate";
      })(Db = ie.AwsEcsLaunchtypeValues || (ie.AwsEcsLaunchtypeValues = {}));
      var wb;
      (function(e) {
        e.AMD64 = "amd64", e.ARM32 = "arm32", e.ARM64 = "arm64", e.IA64 = "ia64", e.PPC32 = "ppc32", e.PPC64 = "ppc64", e.X86 = "x86";
      })(wb = ie.HostArchValues || (ie.HostArchValues = {}));
      var xb;
      (function(e) {
        e.WINDOWS = "windows", e.LINUX = "linux", e.DARWIN = "darwin", e.FREEBSD = "freebsd", e.NETBSD = "netbsd", e.OPENBSD = "openbsd", e.DRAGONFLYBSD = "dragonflybsd", e.HPUX = "hpux", e.AIX = "aix", e.SOLARIS = "solaris", e.Z_OS = "z_os";
      })(xb = ie.OsTypeValues || (ie.OsTypeValues = {}));
      var Mb;
      (function(e) {
        e.CPP = "cpp", e.DOTNET = "dotnet", e.ERLANG = "erlang", e.GO = "go", e.JAVA = "java", e.NODEJS = "nodejs", e.PHP = "php", e.PYTHON = "python", e.RUBY = "ruby", e.WEBJS = "webjs";
      })(Mb = ie.TelemetrySdkLanguageValues || (ie.TelemetrySdkLanguageValues = {}));
    });
    var ch = l((Ir) => {
      "use strict";
      var Lb = Ir && Ir.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), qb = Ir && Ir.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Lb(t, e, r);
      };
      Object.defineProperty(Ir, "__esModule", { value: true });
      qb(uh(), Ir);
    });
    var In = l((Qt) => {
      "use strict";
      var jb = Qt && Qt.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), lh = Qt && Qt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && jb(t, e, r);
      };
      Object.defineProperty(Qt, "__esModule", { value: true });
      lh(oh(), Qt);
      lh(ch(), Qt);
    });
    var ph = l((Ts) => {
      "use strict";
      Object.defineProperty(Ts, "__esModule", { value: true });
      Ts.SDK_INFO = void 0;
      var kb = ys(), Ui = In();
      Ts.SDK_INFO = { [Ui.ResourceAttributes.TELEMETRY_SDK_NAME]: "opentelemetry", [Ui.ResourceAttributes.PROCESS_RUNTIME_NAME]: "node", [Ui.ResourceAttributes.TELEMETRY_SDK_LANGUAGE]: Ui.TelemetrySdkLanguageValues.NODEJS, [Ui.ResourceAttributes.TELEMETRY_SDK_VERSION]: kb.VERSION };
    });
    var fh = l((Ss) => {
      "use strict";
      Object.defineProperty(Ss, "__esModule", { value: true });
      Ss.unrefTimer = void 0;
      function Hb(e) {
        e.unref();
      }
      Ss.unrefTimer = Hb;
    });
    var dh = l((Ke) => {
      "use strict";
      var Ub = Ke && Ke.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), bn = Ke && Ke.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ub(t, e, r);
      };
      Object.defineProperty(Ke, "__esModule", { value: true });
      bn(Jd(), Ke);
      bn(eh(), Ke);
      bn(ih(), Ke);
      bn(ah(), Ke);
      bn(ph(), Ke);
      bn(fh(), Ke);
    });
    var hc = l((br) => {
      "use strict";
      var Bb = br && br.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), Gb = br && br.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Bb(t, e, r);
      };
      Object.defineProperty(br, "__esModule", { value: true });
      Gb(dh(), br);
    });
    var vh = l((pe) => {
      "use strict";
      Object.defineProperty(pe, "__esModule", { value: true });
      pe.isTimeInput = pe.isTimeInputHrTime = pe.hrTimeToMicroseconds = pe.hrTimeToMilliseconds = pe.hrTimeToNanoseconds = pe.hrTimeToTimeStamp = pe.hrTimeDuration = pe.timeInputToHrTime = pe.hrTime = void 0;
      var _c = hc(), vc = 9, Bi = Math.pow(10, vc);
      function As(e) {
        let t = e / 1e3, r = Math.trunc(t), n = Number((t - r).toFixed(vc)) * Bi;
        return [r, n];
      }
      function hh() {
        let e = _c.otperformance.timeOrigin;
        if (typeof e != "number") {
          let t = _c.otperformance;
          e = t.timing && t.timing.fetchStart;
        }
        return e;
      }
      function _h(e) {
        let t = As(hh()), r = As(typeof e == "number" ? e : _c.otperformance.now()), n = t[0] + r[0], i = t[1] + r[1];
        return i > Bi && (i -= Bi, n += 1), [n, i];
      }
      pe.hrTime = _h;
      function Fb(e) {
        if (gc(e))
          return e;
        if (typeof e == "number")
          return e < hh() ? _h(e) : As(e);
        if (e instanceof Date)
          return As(e.getTime());
        throw TypeError("Invalid input type");
      }
      pe.timeInputToHrTime = Fb;
      function Vb(e, t) {
        let r = t[0] - e[0], n = t[1] - e[1];
        return n < 0 && (r -= 1, n += Bi), [r, n];
      }
      pe.hrTimeDuration = Vb;
      function $b(e) {
        let t = vc, r = `${"0".repeat(t)}${e[1]}Z`, n = r.substr(r.length - t - 1);
        return new Date(e[0] * 1e3).toISOString().replace("000Z", n);
      }
      pe.hrTimeToTimeStamp = $b;
      function zb(e) {
        return e[0] * Bi + e[1];
      }
      pe.hrTimeToNanoseconds = zb;
      function Kb(e) {
        return Math.round(e[0] * 1e3 + e[1] / 1e6);
      }
      pe.hrTimeToMilliseconds = Kb;
      function Xb(e) {
        return Math.round(e[0] * 1e6 + e[1] / 1e3);
      }
      pe.hrTimeToMicroseconds = Xb;
      function gc(e) {
        return Array.isArray(e) && e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number";
      }
      pe.isTimeInputHrTime = gc;
      function Yb(e) {
        return gc(e) || typeof e == "number" || e instanceof Date;
      }
      pe.isTimeInput = Yb;
    });
    var mh = l((gh) => {
      "use strict";
      Object.defineProperty(gh, "__esModule", { value: true });
    });
    var Eh = l((Gi) => {
      "use strict";
      Object.defineProperty(Gi, "__esModule", { value: true });
      Gi.ExportResultCode = void 0;
      var Qb;
      (function(e) {
        e[e.SUCCESS = 0] = "SUCCESS", e[e.FAILED = 1] = "FAILED";
      })(Qb = Gi.ExportResultCode || (Gi.ExportResultCode = {}));
    });
    var Sh = l((Is) => {
      "use strict";
      Object.defineProperty(Is, "__esModule", { value: true });
      Is.CompositePropagator = void 0;
      var yh = z(), Th = class {
        constructor(t = {}) {
          var r;
          this._propagators = (r = t.propagators) !== null && r !== void 0 ? r : [], this._fields = Array.from(new Set(this._propagators.map((n) => typeof n.fields == "function" ? n.fields() : []).reduce((n, i) => n.concat(i), [])));
        }
        inject(t, r, n) {
          for (let i of this._propagators)
            try {
              i.inject(t, r, n);
            } catch (a) {
              yh.diag.warn(`Failed to inject with ${i.constructor.name}. Err: ${a.message}`);
            }
        }
        extract(t, r, n) {
          return this._propagators.reduce((i, a) => {
            try {
              return a.extract(i, r, n);
            } catch (s) {
              yh.diag.warn(`Failed to inject with ${a.constructor.name}. Err: ${s.message}`);
            }
            return i;
          }, t);
        }
        fields() {
          return this._fields.slice();
        }
      };
      Is.CompositePropagator = Th;
    });
    var Ah = l((Cn) => {
      "use strict";
      Object.defineProperty(Cn, "__esModule", { value: true });
      Cn.validateValue = Cn.validateKey = void 0;
      var mc = "[_0-9a-z-*/]", Wb = `[a-z]${mc}{0,255}`, Zb = `[a-z0-9]${mc}{0,240}@[a-z]${mc}{0,13}`, Jb = new RegExp(`^(?:${Wb}|${Zb})$`), eC = /^[ -~]{0,255}[!-~]$/, tC = /,|=/;
      function rC(e) {
        return Jb.test(e);
      }
      Cn.validateKey = rC;
      function nC(e) {
        return eC.test(e) && !tC.test(e);
      }
      Cn.validateValue = nC;
    });
    var Ec = l((Cs) => {
      "use strict";
      Object.defineProperty(Cs, "__esModule", { value: true });
      Cs.TraceState = void 0;
      var Ih = Ah(), bh = 32, iC = 512, Ch = ",", Oh = "=", bs = class {
        constructor(t) {
          this._internalState = new Map(), t && this._parse(t);
        }
        set(t, r) {
          let n = this._clone();
          return n._internalState.has(t) && n._internalState.delete(t), n._internalState.set(t, r), n;
        }
        unset(t) {
          let r = this._clone();
          return r._internalState.delete(t), r;
        }
        get(t) {
          return this._internalState.get(t);
        }
        serialize() {
          return this._keys().reduce((t, r) => (t.push(r + Oh + this.get(r)), t), []).join(Ch);
        }
        _parse(t) {
          t.length > iC || (this._internalState = t.split(Ch).reverse().reduce((r, n) => {
            let i = n.trim(), a = i.indexOf(Oh);
            if (a !== -1) {
              let s = i.slice(0, a), o = i.slice(a + 1, n.length);
              Ih.validateKey(s) && Ih.validateValue(o) && r.set(s, o);
            }
            return r;
          }, new Map()), this._internalState.size > bh && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, bh))));
        }
        _keys() {
          return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
          let t = new bs();
          return t._internalState = new Map(this._internalState), t;
        }
      };
      Cs.TraceState = bs;
    });
    var Nh = l((be) => {
      "use strict";
      Object.defineProperty(be, "__esModule", { value: true });
      be.HttpTraceContextPropagator = be.parseTraceParent = be.TRACE_STATE_HEADER = be.TRACE_PARENT_HEADER = void 0;
      var Os = z(), aC = ps(), sC = Ec();
      be.TRACE_PARENT_HEADER = "traceparent";
      be.TRACE_STATE_HEADER = "tracestate";
      var oC = "00", uC = "(?!ff)[\\da-f]{2}", cC = "(?![0]{32})[\\da-f]{32}", lC = "(?![0]{16})[\\da-f]{16}", pC = "[\\da-f]{2}", fC = new RegExp(`^\\s?(${uC})-(${cC})-(${lC})-(${pC})(-.*)?\\s?$`);
      function Ph(e) {
        let t = fC.exec(e);
        return !t || t[1] === "00" && t[5] ? null : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
      }
      be.parseTraceParent = Ph;
      var Rh = class {
        inject(t, r, n) {
          let i = Os.trace.getSpanContext(t);
          if (!i || aC.isTracingSuppressed(t) || !Os.isSpanContextValid(i))
            return;
          let a = `${oC}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags || Os.TraceFlags.NONE).toString(16)}`;
          n.set(r, be.TRACE_PARENT_HEADER, a), i.traceState && n.set(r, be.TRACE_STATE_HEADER, i.traceState.serialize());
        }
        extract(t, r, n) {
          let i = n.get(r, be.TRACE_PARENT_HEADER);
          if (!i)
            return t;
          let a = Array.isArray(i) ? i[0] : i;
          if (typeof a != "string")
            return t;
          let s = Ph(a);
          if (!s)
            return t;
          s.isRemote = true;
          let o = n.get(r, be.TRACE_STATE_HEADER);
          if (o) {
            let u = Array.isArray(o) ? o.join(",") : o;
            s.traceState = new sC.TraceState(typeof u == "string" ? u : void 0);
          }
          return Os.trace.setSpanContext(t, s);
        }
        fields() {
          return [be.TRACE_PARENT_HEADER, be.TRACE_STATE_HEADER];
        }
      };
      be.HttpTraceContextPropagator = Rh;
    });
    var wh = l((Dh) => {
      "use strict";
      Object.defineProperty(Dh, "__esModule", { value: true });
    });
    var xh = l((it) => {
      "use strict";
      Object.defineProperty(it, "__esModule", { value: true });
      it.getRPCMetadata = it.deleteRPCMetadata = it.setRPCMetadata = it.RPCType = void 0;
      var dC = z(), yc = dC.createContextKey("OpenTelemetry SDK Context Key RPC_METADATA"), hC;
      (function(e) {
        e.HTTP = "http";
      })(hC = it.RPCType || (it.RPCType = {}));
      function _C(e, t) {
        return e.setValue(yc, t);
      }
      it.setRPCMetadata = _C;
      function vC(e) {
        return e.deleteValue(yc);
      }
      it.deleteRPCMetadata = vC;
      function gC(e) {
        return e.getValue(yc);
      }
      it.getRPCMetadata = gC;
    });
    var Tc = l((Ps) => {
      "use strict";
      Object.defineProperty(Ps, "__esModule", { value: true });
      Ps.AlwaysOffSampler = void 0;
      var mC = z(), Mh = class {
        shouldSample() {
          return { decision: mC.SamplingDecision.NOT_RECORD };
        }
        toString() {
          return "AlwaysOffSampler";
        }
      };
      Ps.AlwaysOffSampler = Mh;
    });
    var Sc = l((Rs) => {
      "use strict";
      Object.defineProperty(Rs, "__esModule", { value: true });
      Rs.AlwaysOnSampler = void 0;
      var EC = z(), Lh = class {
        shouldSample() {
          return { decision: EC.SamplingDecision.RECORD_AND_SAMPLED };
        }
        toString() {
          return "AlwaysOnSampler";
        }
      };
      Rs.AlwaysOnSampler = Lh;
    });
    var kh = l((Ds) => {
      "use strict";
      Object.defineProperty(Ds, "__esModule", { value: true });
      Ds.ParentBasedSampler = void 0;
      var Ns = z(), yC = pc(), qh = Tc(), Ac = Sc(), jh = class {
        constructor(t) {
          var r, n, i, a;
          this._root = t.root, this._root || (yC.globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new Ac.AlwaysOnSampler()), this._remoteParentSampled = (r = t.remoteParentSampled) !== null && r !== void 0 ? r : new Ac.AlwaysOnSampler(), this._remoteParentNotSampled = (n = t.remoteParentNotSampled) !== null && n !== void 0 ? n : new qh.AlwaysOffSampler(), this._localParentSampled = (i = t.localParentSampled) !== null && i !== void 0 ? i : new Ac.AlwaysOnSampler(), this._localParentNotSampled = (a = t.localParentNotSampled) !== null && a !== void 0 ? a : new qh.AlwaysOffSampler();
        }
        shouldSample(t, r, n, i, a, s) {
          let o = Ns.trace.getSpanContext(t);
          return !o || !Ns.isSpanContextValid(o) ? this._root.shouldSample(t, r, n, i, a, s) : o.isRemote ? o.traceFlags & Ns.TraceFlags.SAMPLED ? this._remoteParentSampled.shouldSample(t, r, n, i, a, s) : this._remoteParentNotSampled.shouldSample(t, r, n, i, a, s) : o.traceFlags & Ns.TraceFlags.SAMPLED ? this._localParentSampled.shouldSample(t, r, n, i, a, s) : this._localParentNotSampled.shouldSample(t, r, n, i, a, s);
        }
        toString() {
          return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
        }
      };
      Ds.ParentBasedSampler = jh;
    });
    var Uh = l((ws) => {
      "use strict";
      Object.defineProperty(ws, "__esModule", { value: true });
      ws.TraceIdRatioBasedSampler = void 0;
      var Ic = z(), Hh = class {
        constructor(t = 0) {
          this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(this._ratio * 4294967295);
        }
        shouldSample(t, r) {
          return { decision: Ic.isValidTraceId(r) && this._accumulate(r) < this._upperBound ? Ic.SamplingDecision.RECORD_AND_SAMPLED : Ic.SamplingDecision.NOT_RECORD };
        }
        toString() {
          return `TraceIdRatioBased{${this._ratio}}`;
        }
        _normalize(t) {
          return typeof t != "number" || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t;
        }
        _accumulate(t) {
          let r = 0;
          for (let n = 0; n < t.length / 8; n++) {
            let i = n * 8, a = parseInt(t.slice(i, i + 8), 16);
            r = (r ^ a) >>> 0;
          }
          return r;
        }
      };
      ws.TraceIdRatioBasedSampler = Hh;
    });
    var Gh = l((On) => {
      "use strict";
      Object.defineProperty(On, "__esModule", { value: true });
      On.isUrlIgnored = On.urlMatches = void 0;
      function Bh(e, t) {
        return typeof t == "string" ? e === t : t.test(e);
      }
      On.urlMatches = Bh;
      function TC(e, t) {
        if (!t)
          return false;
        for (let r of t)
          if (Bh(e, r))
            return true;
        return false;
      }
      On.isUrlIgnored = TC;
    });
    var Fh = l((xs) => {
      "use strict";
      Object.defineProperty(xs, "__esModule", { value: true });
      xs.isWrapped = void 0;
      function SC(e) {
        return typeof e == "function" && typeof e.__original == "function" && typeof e.__unwrap == "function" && e.__wrapped === true;
      }
      xs.isWrapped = SC;
    });
    var Xe = l((M) => {
      "use strict";
      var AC = M && M.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), Y = M && M.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && AC(t, e, r);
      };
      Object.defineProperty(M, "__esModule", { value: true });
      M.baggageUtils = void 0;
      Y(Kd(), M);
      Y(Qd(), M);
      Y(pc(), M);
      Y(lc(), M);
      Y(vh(), M);
      Y(mh(), M);
      Y(Eh(), M);
      Y(ys(), M);
      M.baggageUtils = oc();
      Y(hc(), M);
      Y(Sh(), M);
      Y(Nh(), M);
      Y(wh(), M);
      Y(xh(), M);
      Y(Tc(), M);
      Y(Sc(), M);
      Y(kh(), M);
      Y(Uh(), M);
      Y(ps(), M);
      Y(Ec(), M);
      Y(dc(), M);
      Y(fc(), M);
      Y(Gh(), M);
      Y(Fh(), M);
      Y(ys(), M);
    });
    var Vh = l((Ms) => {
      "use strict";
      Object.defineProperty(Ms, "__esModule", { value: true });
      Ms.ExceptionEventName = void 0;
      Ms.ExceptionEventName = "exception";
    });
    var bc = l((Ls) => {
      "use strict";
      Object.defineProperty(Ls, "__esModule", { value: true });
      Ls.Span = void 0;
      var Wt = z(), ft = Xe(), Cr = In(), IC = Vh(), $h = class {
        constructor(t, r, n, i, a, s, o = [], u = ft.hrTime()) {
          this.attributes = {}, this.links = [], this.events = [], this.status = { code: Wt.SpanStatusCode.UNSET }, this.endTime = [0, 0], this._ended = false, this._duration = [-1, -1], this.name = n, this._spanContext = i, this.parentSpanId = s, this.kind = a, this.links = o, this.startTime = ft.timeInputToHrTime(u), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, r);
        }
        spanContext() {
          return this._spanContext;
        }
        setAttribute(t, r) {
          return r == null || this._isSpanEnded() ? this : t.length === 0 ? (Wt.diag.warn(`Invalid attribute key: ${t}`), this) : ft.isAttributeValue(r) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? this : (this.attributes[t] = r, this) : (Wt.diag.warn(`Invalid attribute value set for key: ${t}`), this);
        }
        setAttributes(t) {
          for (let [r, n] of Object.entries(t))
            this.setAttribute(r, n);
          return this;
        }
        addEvent(t, r, n) {
          return this._isSpanEnded() ? this : (this.events.length >= this._spanLimits.eventCountLimit && (Wt.diag.warn("Dropping extra events."), this.events.shift()), ft.isTimeInput(r) && (typeof n == "undefined" && (n = r), r = void 0), typeof n == "undefined" && (n = ft.hrTime()), this.events.push({ name: t, attributes: r, time: ft.timeInputToHrTime(n) }), this);
        }
        setStatus(t) {
          return this._isSpanEnded() ? this : (this.status = t, this);
        }
        updateName(t) {
          return this._isSpanEnded() ? this : (this.name = t, this);
        }
        end(t = ft.hrTime()) {
          if (this._isSpanEnded()) {
            Wt.diag.error("You can only call end() on a span once.");
            return;
          }
          this._ended = true, this.endTime = ft.timeInputToHrTime(t), this._duration = ft.hrTimeDuration(this.startTime, this.endTime), this._duration[0] < 0 && Wt.diag.warn("Inconsistent start and end time, startTime > endTime", this.startTime, this.endTime), this._spanProcessor.onEnd(this);
        }
        isRecording() {
          return this._ended === false;
        }
        recordException(t, r = ft.hrTime()) {
          let n = {};
          typeof t == "string" ? n[Cr.SemanticAttributes.EXCEPTION_MESSAGE] = t : t && (t.code ? n[Cr.SemanticAttributes.EXCEPTION_TYPE] = t.code.toString() : t.name && (n[Cr.SemanticAttributes.EXCEPTION_TYPE] = t.name), t.message && (n[Cr.SemanticAttributes.EXCEPTION_MESSAGE] = t.message), t.stack && (n[Cr.SemanticAttributes.EXCEPTION_STACKTRACE] = t.stack)), n[Cr.SemanticAttributes.EXCEPTION_TYPE] || n[Cr.SemanticAttributes.EXCEPTION_MESSAGE] ? this.addEvent(IC.ExceptionEventName, n, r) : Wt.diag.warn(`Failed to record an exception ${t}`);
        }
        get duration() {
          return this._duration;
        }
        get ended() {
          return this._ended;
        }
        _isSpanEnded() {
          return this._ended && Wt.diag.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}", this._spanContext.traceId, this._spanContext.spanId), this._ended;
        }
      };
      Ls.Span = $h;
    });
    var Cc = l((Rn) => {
      "use strict";
      Object.defineProperty(Rn, "__esModule", { value: true });
      Rn.buildSamplerFromEnv = Rn.DEFAULT_CONFIG = void 0;
      var qs = z(), ae = Xe(), bC = ae.getEnv(), CC = ae.TracesSamplerValues.AlwaysOn;
      Rn.DEFAULT_CONFIG = { sampler: zh(bC), forceFlushTimeoutMillis: 3e4, spanLimits: { attributeCountLimit: ae.getEnv().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT, linkCountLimit: ae.getEnv().OTEL_SPAN_LINK_COUNT_LIMIT, eventCountLimit: ae.getEnv().OTEL_SPAN_EVENT_COUNT_LIMIT } };
      function zh(e = ae.getEnv()) {
        switch (e.OTEL_TRACES_SAMPLER) {
          case ae.TracesSamplerValues.AlwaysOn:
            return new ae.AlwaysOnSampler();
          case ae.TracesSamplerValues.AlwaysOff:
            return new ae.AlwaysOffSampler();
          case ae.TracesSamplerValues.ParentBasedAlwaysOn:
            return new ae.ParentBasedSampler({ root: new ae.AlwaysOnSampler() });
          case ae.TracesSamplerValues.ParentBasedAlwaysOff:
            return new ae.ParentBasedSampler({ root: new ae.AlwaysOffSampler() });
          case ae.TracesSamplerValues.TraceIdRatio:
            return new ae.TraceIdRatioBasedSampler(Kh(e));
          case ae.TracesSamplerValues.ParentBasedTraceIdRatio:
            return new ae.ParentBasedSampler({ root: new ae.TraceIdRatioBasedSampler(Kh(e)) });
          default:
            return qs.diag.error(`OTEL_TRACES_SAMPLER value "${e.OTEL_TRACES_SAMPLER} invalid, defaulting to ${CC}".`), new ae.AlwaysOnSampler();
        }
      }
      Rn.buildSamplerFromEnv = zh;
      var Pn = 1;
      function Kh(e) {
        if (e.OTEL_TRACES_SAMPLER_ARG === void 0 || e.OTEL_TRACES_SAMPLER_ARG === "")
          return qs.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${Pn}.`), Pn;
        let t = Number(e.OTEL_TRACES_SAMPLER_ARG);
        return isNaN(t) ? (qs.diag.error(`OTEL_TRACES_SAMPLER_ARG=${e.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${Pn}.`), Pn) : t < 0 || t > 1 ? (qs.diag.error(`OTEL_TRACES_SAMPLER_ARG=${e.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${Pn}.`), Pn) : t;
      }
    });
    var Xh = l((js) => {
      "use strict";
      Object.defineProperty(js, "__esModule", { value: true });
      js.mergeConfig = void 0;
      var Oc = Cc();
      function OC(e) {
        let t = { sampler: Oc.buildSamplerFromEnv() }, r = Object.assign({}, Oc.DEFAULT_CONFIG, t, e);
        return r.spanLimits = Object.assign({}, Oc.DEFAULT_CONFIG.spanLimits, e.spanLimits || {}), r;
      }
      js.mergeConfig = OC;
    });
    var Qh = l((ks) => {
      "use strict";
      Object.defineProperty(ks, "__esModule", { value: true });
      ks.Tracer = void 0;
      var ge = z(), Pc = Xe(), PC = bc(), RC = Xh(), Yh = class {
        constructor(t, r, n) {
          this._tracerProvider = n;
          let i = RC.mergeConfig(r);
          this._sampler = i.sampler, this._spanLimits = i.spanLimits, this._idGenerator = r.idGenerator || new Pc.RandomIdGenerator(), this.resource = n.resource, this.instrumentationLibrary = t;
        }
        startSpan(t, r = {}, n = ge.context.active()) {
          var i, a;
          if (Pc.isTracingSuppressed(n))
            return ge.diag.debug("Instrumentation suppressed, returning Noop Span"), ge.trace.wrapSpanContext(ge.INVALID_SPAN_CONTEXT);
          let s = NC(r, n), o = this._idGenerator.generateSpanId(), u, c, p;
          !s || !ge.trace.isSpanContextValid(s) ? u = this._idGenerator.generateTraceId() : (u = s.traceId, c = s.traceState, p = s.spanId);
          let f = (i = r.kind) !== null && i !== void 0 ? i : ge.SpanKind.INTERNAL, d = (a = r.links) !== null && a !== void 0 ? a : [], h = Pc.sanitizeAttributes(r.attributes), m = this._sampler.shouldSample(r.root ? ge.trace.setSpanContext(n, ge.INVALID_SPAN_CONTEXT) : n, u, t, f, h, d), S = m.decision === ge.SamplingDecision.RECORD_AND_SAMPLED ? ge.TraceFlags.SAMPLED : ge.TraceFlags.NONE, j = { traceId: u, spanId: o, traceFlags: S, traceState: c };
          if (m.decision === ge.SamplingDecision.NOT_RECORD)
            return ge.diag.debug("Recording is off, propagating context in a non-recording span"), ge.trace.wrapSpanContext(j);
          let oe = new PC.Span(this, n, t, j, f, p, d, r.startTime);
          return oe.setAttributes(Object.assign(h, m.attributes)), oe;
        }
        startActiveSpan(t, r, n, i) {
          let a, s, o;
          if (arguments.length < 2)
            return;
          arguments.length === 2 ? o = r : arguments.length === 3 ? (a = r, o = n) : (a = r, s = n, o = i);
          let u = s != null ? s : ge.context.active(), c = this.startSpan(t, a, u), p = ge.trace.setSpan(u, c);
          return ge.context.with(p, o, void 0, c);
        }
        getSpanLimits() {
          return this._spanLimits;
        }
        getActiveSpanProcessor() {
          return this._tracerProvider.getActiveSpanProcessor();
        }
      };
      ks.Tracer = Yh;
      function NC(e, t) {
        if (!e.root)
          return ge.trace.getSpanContext(t);
      }
    });
    var Wh = l((Hs) => {
      "use strict";
      Object.defineProperty(Hs, "__esModule", { value: true });
      Hs.defaultServiceName = void 0;
      function DC() {
        return `unknown_service:${process.argv0}`;
      }
      Hs.defaultServiceName = DC;
    });
    var Jh = l((Us) => {
      "use strict";
      Object.defineProperty(Us, "__esModule", { value: true });
      Us.detectResources = void 0;
      var Zh = Nc(), Rc = z(), wC = require("util"), xC = async (e = {}) => {
        let t = Object.assign(e), r = await Promise.all((t.detectors || []).map(async (n) => {
          try {
            let i = await n.detect(t);
            return Rc.diag.debug(`${n.constructor.name} found resource.`, i), i;
          } catch (i) {
            return Rc.diag.debug(`${n.constructor.name} failed: ${i.message}`), Zh.Resource.empty();
          }
        }));
        return MC(r), r.reduce((n, i) => n.merge(i), Zh.Resource.empty());
      };
      Us.detectResources = xC;
      var MC = (e) => {
        e.forEach((t) => {
          if (Object.keys(t.attributes).length > 0) {
            let r = wC.inspect(t.attributes, { depth: 2, breakLength: 1 / 0, sorted: true, compact: false });
            Rc.diag.verbose(r);
          }
        });
      };
    });
    var t_ = l((Bs) => {
      "use strict";
      Object.defineProperty(Bs, "__esModule", { value: true });
      Bs.envDetector = void 0;
      var LC = z(), qC = Xe(), jC = In(), kC = Gs(), e_ = class {
        constructor() {
          this._MAX_LENGTH = 255, this._COMMA_SEPARATOR = ",", this._LABEL_KEY_VALUE_SPLITTER = "=", this._ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.", this._ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
        }
        async detect(t) {
          let r = {}, n = qC.getEnv(), i = n.OTEL_RESOURCE_ATTRIBUTES, a = n.OTEL_SERVICE_NAME;
          if (i)
            try {
              let s = this._parseResourceAttributes(i);
              Object.assign(r, s);
            } catch (s) {
              LC.diag.debug(`EnvDetector failed: ${s.message}`);
            }
          return a && (r[jC.ResourceAttributes.SERVICE_NAME] = a), new kC.Resource(r);
        }
        _parseResourceAttributes(t) {
          if (!t)
            return {};
          let r = {}, n = t.split(this._COMMA_SEPARATOR, -1);
          for (let i of n) {
            let a = i.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
            if (a.length !== 2)
              continue;
            let [s, o] = a;
            if (s = s.trim(), o = o.trim().split('^"|"$').join(""), !this._isValidAndNotEmpty(s))
              throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
            if (!this._isValid(o))
              throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
            r[s] = o;
          }
          return r;
        }
        _isValid(t) {
          return t.length <= this._MAX_LENGTH && this._isPrintableString(t);
        }
        _isPrintableString(t) {
          for (let r = 0; r < t.length; r++) {
            let n = t.charAt(r);
            if (n <= " " || n >= "~")
              return false;
          }
          return true;
        }
        _isValidAndNotEmpty(t) {
          return t.length > 0 && this._isValid(t);
        }
      };
      Bs.envDetector = new e_();
    });
    var i_ = l((Fs) => {
      "use strict";
      Object.defineProperty(Fs, "__esModule", { value: true });
      Fs.processDetector = void 0;
      var HC = z(), Zt = In(), r_ = Gs(), n_ = class {
        async detect(t) {
          let r = { [Zt.ResourceAttributes.PROCESS_PID]: process.pid, [Zt.ResourceAttributes.PROCESS_EXECUTABLE_NAME]: process.title || "", [Zt.ResourceAttributes.PROCESS_COMMAND]: process.argv[1] || "", [Zt.ResourceAttributes.PROCESS_COMMAND_LINE]: process.argv.join(" ") || "" };
          return this._getResourceAttributes(r, t);
        }
        _getResourceAttributes(t, r) {
          return t[Zt.ResourceAttributes.PROCESS_EXECUTABLE_NAME] === "" || t[Zt.ResourceAttributes.PROCESS_EXECUTABLE_PATH] === "" || t[Zt.ResourceAttributes.PROCESS_COMMAND] === "" || t[Zt.ResourceAttributes.PROCESS_COMMAND_LINE] === "" ? (HC.diag.debug("ProcessDetector failed: Unable to find required process resources. "), r_.Resource.empty()) : new r_.Resource(Object.assign({}, t));
        }
      };
      Fs.processDetector = new n_();
    });
    var s_ = l((Jt) => {
      "use strict";
      var UC = Jt && Jt.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), a_ = Jt && Jt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && UC(t, e, r);
      };
      Object.defineProperty(Jt, "__esModule", { value: true });
      a_(t_(), Jt);
      a_(i_(), Jt);
    });
    var o_ = l((Ot) => {
      "use strict";
      var BC = Ot && Ot.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), Dc = Ot && Ot.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && BC(t, e, r);
      };
      Object.defineProperty(Ot, "__esModule", { value: true });
      Dc(Wh(), Ot);
      Dc(Jh(), Ot);
      Dc(s_(), Ot);
    });
    var wc = l((Or) => {
      "use strict";
      var GC = Or && Or.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), FC = Or && Or.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && GC(t, e, r);
      };
      Object.defineProperty(Or, "__esModule", { value: true });
      FC(o_(), Or);
    });
    var Nc = l((Vs) => {
      "use strict";
      Object.defineProperty(Vs, "__esModule", { value: true });
      Vs.Resource = void 0;
      var Pr = In(), xc = Xe(), VC = wc(), er = class {
        constructor(t) {
          this.attributes = t;
        }
        static empty() {
          return er.EMPTY;
        }
        static default() {
          return new er({ [Pr.ResourceAttributes.SERVICE_NAME]: VC.defaultServiceName(), [Pr.ResourceAttributes.TELEMETRY_SDK_LANGUAGE]: xc.SDK_INFO[Pr.ResourceAttributes.TELEMETRY_SDK_LANGUAGE], [Pr.ResourceAttributes.TELEMETRY_SDK_NAME]: xc.SDK_INFO[Pr.ResourceAttributes.TELEMETRY_SDK_NAME], [Pr.ResourceAttributes.TELEMETRY_SDK_VERSION]: xc.SDK_INFO[Pr.ResourceAttributes.TELEMETRY_SDK_VERSION] });
        }
        merge(t) {
          if (!t || !Object.keys(t.attributes).length)
            return this;
          let r = Object.assign({}, this.attributes, t.attributes);
          return new er(r);
        }
      };
      Vs.Resource = er;
      er.EMPTY = new er({});
    });
    var c_ = l((u_) => {
      "use strict";
      Object.defineProperty(u_, "__esModule", { value: true });
    });
    var p_ = l((l_) => {
      "use strict";
      Object.defineProperty(l_, "__esModule", { value: true });
    });
    var Gs = l((dt) => {
      "use strict";
      var $C = dt && dt.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), $s = dt && dt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && $C(t, e, r);
      };
      Object.defineProperty(dt, "__esModule", { value: true });
      $s(Nc(), dt);
      $s(wc(), dt);
      $s(c_(), dt);
      $s(p_(), dt);
    });
    var d_ = l((zs) => {
      "use strict";
      Object.defineProperty(zs, "__esModule", { value: true });
      zs.MultiSpanProcessor = void 0;
      var zC = Xe(), f_ = class {
        constructor(t) {
          this._spanProcessors = t;
        }
        forceFlush() {
          let t = [];
          for (let r of this._spanProcessors)
            t.push(r.forceFlush());
          return new Promise((r) => {
            Promise.all(t).then(() => {
              r();
            }).catch((n) => {
              zC.globalErrorHandler(n || new Error("MultiSpanProcessor: forceFlush failed")), r();
            });
          });
        }
        onStart(t, r) {
          for (let n of this._spanProcessors)
            n.onStart(t, r);
        }
        onEnd(t) {
          for (let r of this._spanProcessors)
            r.onEnd(t);
        }
        shutdown() {
          let t = [];
          for (let r of this._spanProcessors)
            t.push(r.shutdown());
          return new Promise((r, n) => {
            Promise.all(t).then(() => {
              r();
            }, n);
          });
        }
      };
      zs.MultiSpanProcessor = f_;
    });
    var Mc = l((Ks) => {
      "use strict";
      Object.defineProperty(Ks, "__esModule", { value: true });
      Ks.NoopSpanProcessor = void 0;
      var h_ = class {
        onStart(t, r) {
        }
        onEnd(t) {
        }
        shutdown() {
          return Promise.resolve();
        }
        forceFlush() {
          return Promise.resolve();
        }
      };
      Ks.NoopSpanProcessor = h_;
    });
    var F_ = l((Ki, wn) => {
      var KC = 200, __ = "__lodash_hash_undefined__", XC = 800, YC = 16, v_ = 9007199254740991, g_ = "[object Arguments]", QC = "[object Array]", WC = "[object AsyncFunction]", ZC = "[object Boolean]", JC = "[object Date]", eO = "[object Error]", m_ = "[object Function]", tO = "[object GeneratorFunction]", rO = "[object Map]", nO = "[object Number]", iO = "[object Null]", E_ = "[object Object]", aO = "[object Proxy]", sO = "[object RegExp]", oO = "[object Set]", uO = "[object String]", cO = "[object Undefined]", lO = "[object WeakMap]", pO = "[object ArrayBuffer]", fO = "[object DataView]", dO = "[object Float32Array]", hO = "[object Float64Array]", _O = "[object Int8Array]", vO = "[object Int16Array]", gO = "[object Int32Array]", mO = "[object Uint8Array]", EO = "[object Uint8ClampedArray]", yO = "[object Uint16Array]", TO = "[object Uint32Array]", SO = /[\\^$.*+?()[\]{}|]/g, AO = /^\[object .+?Constructor\]$/, IO = /^(?:0|[1-9]\d*)$/, K = {};
      K[dO] = K[hO] = K[_O] = K[vO] = K[gO] = K[mO] = K[EO] = K[yO] = K[TO] = true;
      K[g_] = K[QC] = K[pO] = K[ZC] = K[fO] = K[JC] = K[eO] = K[m_] = K[rO] = K[nO] = K[E_] = K[sO] = K[oO] = K[uO] = K[lO] = false;
      var y_ = typeof global == "object" && global && global.Object === Object && global, bO = typeof self == "object" && self && self.Object === Object && self, Fi = y_ || bO || Function("return this")(), T_ = typeof Ki == "object" && Ki && !Ki.nodeType && Ki, Vi = T_ && typeof wn == "object" && wn && !wn.nodeType && wn, S_ = Vi && Vi.exports === T_, Lc = S_ && y_.process, A_ = function() {
        try {
          var e = Vi && Vi.require && Vi.require("util").types;
          return e || Lc && Lc.binding && Lc.binding("util");
        } catch (t) {
        }
      }(), I_ = A_ && A_.isTypedArray;
      function CO(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
      }
      function OO(e, t) {
        for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
        return n;
      }
      function PO(e) {
        return function(t) {
          return e(t);
        };
      }
      function RO(e, t) {
        return e == null ? void 0 : e[t];
      }
      function NO(e, t) {
        return function(r) {
          return e(t(r));
        };
      }
      var DO = Array.prototype, wO = Function.prototype, Xs = Object.prototype, qc = Fi["__core-js_shared__"], Ys = wO.toString, Pt = Xs.hasOwnProperty, b_ = function() {
        var e = /[^.]+$/.exec(qc && qc.keys && qc.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), C_ = Xs.toString, xO = Ys.call(Object), MO = RegExp("^" + Ys.call(Pt).replace(SO, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Qs = S_ ? Fi.Buffer : void 0, O_ = Fi.Symbol, P_ = Fi.Uint8Array, R_ = Qs ? Qs.allocUnsafe : void 0, N_ = NO(Object.getPrototypeOf, Object), D_ = Object.create, LO = Xs.propertyIsEnumerable, qO = DO.splice, Rr = O_ ? O_.toStringTag : void 0, Ws = function() {
        try {
          var e = Hc(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (t) {
        }
      }(), jO = Qs ? Qs.isBuffer : void 0, w_ = Math.max, kO = Date.now, x_ = Hc(Fi, "Map"), $i = Hc(Object, "create"), HO = function() {
        function e() {
        }
        return function(t) {
          if (!Dr(t))
            return {};
          if (D_)
            return D_(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = void 0, r;
        };
      }();
      function Nr(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function UO() {
        this.__data__ = $i ? $i(null) : {}, this.size = 0;
      }
      function BO(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function GO(e) {
        var t = this.__data__;
        if ($i) {
          var r = t[e];
          return r === __ ? void 0 : r;
        }
        return Pt.call(t, e) ? t[e] : void 0;
      }
      function FO(e) {
        var t = this.__data__;
        return $i ? t[e] !== void 0 : Pt.call(t, e);
      }
      function VO(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = $i && t === void 0 ? __ : t, this;
      }
      Nr.prototype.clear = UO;
      Nr.prototype.delete = BO;
      Nr.prototype.get = GO;
      Nr.prototype.has = FO;
      Nr.prototype.set = VO;
      function Rt(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function $O() {
        this.__data__ = [], this.size = 0;
      }
      function zO(e) {
        var t = this.__data__, r = Zs(t, e);
        if (r < 0)
          return false;
        var n = t.length - 1;
        return r == n ? t.pop() : qO.call(t, r, 1), --this.size, true;
      }
      function KO(e) {
        var t = this.__data__, r = Zs(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      function XO(e) {
        return Zs(this.__data__, e) > -1;
      }
      function YO(e, t) {
        var r = this.__data__, n = Zs(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
      }
      Rt.prototype.clear = $O;
      Rt.prototype.delete = zO;
      Rt.prototype.get = KO;
      Rt.prototype.has = XO;
      Rt.prototype.set = YO;
      function Nn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function QO() {
        this.size = 0, this.__data__ = { hash: new Nr(), map: new (x_ || Rt)(), string: new Nr() };
      }
      function WO(e) {
        var t = eo(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function ZO(e) {
        return eo(this, e).get(e);
      }
      function JO(e) {
        return eo(this, e).has(e);
      }
      function eP(e, t) {
        var r = eo(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
      }
      Nn.prototype.clear = QO;
      Nn.prototype.delete = WO;
      Nn.prototype.get = ZO;
      Nn.prototype.has = JO;
      Nn.prototype.set = eP;
      function Dn(e) {
        var t = this.__data__ = new Rt(e);
        this.size = t.size;
      }
      function tP() {
        this.__data__ = new Rt(), this.size = 0;
      }
      function rP(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      function nP(e) {
        return this.__data__.get(e);
      }
      function iP(e) {
        return this.__data__.has(e);
      }
      function aP(e, t) {
        var r = this.__data__;
        if (r instanceof Rt) {
          var n = r.__data__;
          if (!x_ || n.length < KC - 1)
            return n.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new Nn(n);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      Dn.prototype.clear = tP;
      Dn.prototype.delete = rP;
      Dn.prototype.get = nP;
      Dn.prototype.has = iP;
      Dn.prototype.set = aP;
      function sP(e, t) {
        var r = Gc(e), n = !r && Bc(e), i = !r && !n && k_(e), a = !r && !n && !i && U_(e), s = r || n || i || a, o = s ? OO(e.length, String) : [], u = o.length;
        for (var c in e)
          (t || Pt.call(e, c)) && !(s && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || q_(c, u))) && o.push(c);
        return o;
      }
      function jc(e, t, r) {
        (r !== void 0 && !to(e[t], r) || r === void 0 && !(t in e)) && kc(e, t, r);
      }
      function oP(e, t, r) {
        var n = e[t];
        (!(Pt.call(e, t) && to(n, r)) || r === void 0 && !(t in e)) && kc(e, t, r);
      }
      function Zs(e, t) {
        for (var r = e.length; r--; )
          if (to(e[r][0], t))
            return r;
        return -1;
      }
      function kc(e, t, r) {
        t == "__proto__" && Ws ? Ws(e, t, { configurable: true, enumerable: true, value: r, writable: true }) : e[t] = r;
      }
      var uP = TP();
      function Js(e) {
        return e == null ? e === void 0 ? cO : iO : Rr && Rr in Object(e) ? SP(e) : PP(e);
      }
      function M_(e) {
        return zi(e) && Js(e) == g_;
      }
      function cP(e) {
        if (!Dr(e) || CP(e))
          return false;
        var t = Vc(e) ? MO : AO;
        return t.test(wP(e));
      }
      function lP(e) {
        return zi(e) && H_(e.length) && !!K[Js(e)];
      }
      function pP(e) {
        if (!Dr(e))
          return OP(e);
        var t = j_(e), r = [];
        for (var n in e)
          n == "constructor" && (t || !Pt.call(e, n)) || r.push(n);
        return r;
      }
      function L_(e, t, r, n, i) {
        e !== t && uP(t, function(a, s) {
          if (i || (i = new Dn()), Dr(a))
            fP(e, t, s, r, L_, n, i);
          else {
            var o = n ? n(Uc(e, s), a, s + "", e, t, i) : void 0;
            o === void 0 && (o = a), jc(e, s, o);
          }
        }, B_);
      }
      function fP(e, t, r, n, i, a, s) {
        var o = Uc(e, r), u = Uc(t, r), c = s.get(u);
        if (c) {
          jc(e, r, c);
          return;
        }
        var p = a ? a(o, u, r + "", e, t, s) : void 0, f = p === void 0;
        if (f) {
          var d = Gc(u), h = !d && k_(u), m = !d && !h && U_(u);
          p = u, d || h || m ? Gc(o) ? p = o : xP(o) ? p = mP(o) : h ? (f = false, p = _P(u, true)) : m ? (f = false, p = gP(u, true)) : p = [] : MP(u) || Bc(u) ? (p = o, Bc(o) ? p = LP(o) : (!Dr(o) || Vc(o)) && (p = AP(u))) : f = false;
        }
        f && (s.set(u, p), i(p, u, n, a, s), s.delete(u)), jc(e, r, p);
      }
      function dP(e, t) {
        return NP(RP(e, t, G_), e + "");
      }
      var hP = Ws ? function(e, t) {
        return Ws(e, "toString", { configurable: true, enumerable: false, value: jP(t), writable: true });
      } : G_;
      function _P(e, t) {
        if (t)
          return e.slice();
        var r = e.length, n = R_ ? R_(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      function vP(e) {
        var t = new e.constructor(e.byteLength);
        return new P_(t).set(new P_(e)), t;
      }
      function gP(e, t) {
        var r = t ? vP(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      function mP(e, t) {
        var r = -1, n = e.length;
        for (t || (t = Array(n)); ++r < n; )
          t[r] = e[r];
        return t;
      }
      function EP(e, t, r, n) {
        var i = !r;
        r || (r = {});
        for (var a = -1, s = t.length; ++a < s; ) {
          var o = t[a], u = n ? n(r[o], e[o], o, r, e) : void 0;
          u === void 0 && (u = e[o]), i ? kc(r, o, u) : oP(r, o, u);
        }
        return r;
      }
      function yP(e) {
        return dP(function(t, r) {
          var n = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, s = i > 2 ? r[2] : void 0;
          for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && IP(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i; ) {
            var o = r[n];
            o && e(t, o, n, a);
          }
          return t;
        });
      }
      function TP(e) {
        return function(t, r, n) {
          for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
            var u = s[e ? o : ++i];
            if (r(a[u], u, a) === false)
              break;
          }
          return t;
        };
      }
      function eo(e, t) {
        var r = e.__data__;
        return bP(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      function Hc(e, t) {
        var r = RO(e, t);
        return cP(r) ? r : void 0;
      }
      function SP(e) {
        var t = Pt.call(e, Rr), r = e[Rr];
        try {
          e[Rr] = void 0;
          var n = true;
        } catch (a) {
        }
        var i = C_.call(e);
        return n && (t ? e[Rr] = r : delete e[Rr]), i;
      }
      function AP(e) {
        return typeof e.constructor == "function" && !j_(e) ? HO(N_(e)) : {};
      }
      function q_(e, t) {
        var r = typeof e;
        return t = t == null ? v_ : t, !!t && (r == "number" || r != "symbol" && IO.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function IP(e, t, r) {
        if (!Dr(r))
          return false;
        var n = typeof t;
        return (n == "number" ? Fc(r) && q_(t, r.length) : n == "string" && t in r) ? to(r[t], e) : false;
      }
      function bP(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function CP(e) {
        return !!b_ && b_ in e;
      }
      function j_(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || Xs;
        return e === r;
      }
      function OP(e) {
        var t = [];
        if (e != null)
          for (var r in Object(e))
            t.push(r);
        return t;
      }
      function PP(e) {
        return C_.call(e);
      }
      function RP(e, t, r) {
        return t = w_(t === void 0 ? e.length - 1 : t, 0), function() {
          for (var n = arguments, i = -1, a = w_(n.length - t, 0), s = Array(a); ++i < a; )
            s[i] = n[t + i];
          i = -1;
          for (var o = Array(t + 1); ++i < t; )
            o[i] = n[i];
          return o[t] = r(s), CO(e, this, o);
        };
      }
      function Uc(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var NP = DP(hP);
      function DP(e) {
        var t = 0, r = 0;
        return function() {
          var n = kO(), i = YC - (n - r);
          if (r = n, i > 0) {
            if (++t >= XC)
              return arguments[0];
          } else
            t = 0;
          return e.apply(void 0, arguments);
        };
      }
      function wP(e) {
        if (e != null) {
          try {
            return Ys.call(e);
          } catch (t) {
          }
          try {
            return e + "";
          } catch (t) {
          }
        }
        return "";
      }
      function to(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Bc = M_(function() {
        return arguments;
      }()) ? M_ : function(e) {
        return zi(e) && Pt.call(e, "callee") && !LO.call(e, "callee");
      }, Gc = Array.isArray;
      function Fc(e) {
        return e != null && H_(e.length) && !Vc(e);
      }
      function xP(e) {
        return zi(e) && Fc(e);
      }
      var k_ = jO || kP;
      function Vc(e) {
        if (!Dr(e))
          return false;
        var t = Js(e);
        return t == m_ || t == tO || t == WC || t == aO;
      }
      function H_(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= v_;
      }
      function Dr(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function zi(e) {
        return e != null && typeof e == "object";
      }
      function MP(e) {
        if (!zi(e) || Js(e) != E_)
          return false;
        var t = N_(e);
        if (t === null)
          return true;
        var r = Pt.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && Ys.call(r) == xO;
      }
      var U_ = I_ ? PO(I_) : lP;
      function LP(e) {
        return EP(e, B_(e));
      }
      function B_(e) {
        return Fc(e) ? sP(e, true) : pP(e);
      }
      var qP = yP(function(e, t, r) {
        L_(e, t, r);
      });
      function jP(e) {
        return function() {
          return e;
        };
      }
      function G_(e) {
        return e;
      }
      function kP() {
        return false;
      }
      wn.exports = qP;
    });
    var z_ = l((ro) => {
      "use strict";
      Object.defineProperty(ro, "__esModule", { value: true });
      ro.BatchSpanProcessorBase = void 0;
      var V_ = z(), Xi = Xe(), $_ = class {
        constructor(t, r) {
          this._exporter = t, this._finishedSpans = [], this._isShutdown = false, this._shuttingDownPromise = Promise.resolve();
          let n = Xi.getEnv();
          this._maxExportBatchSize = typeof (r == null ? void 0 : r.maxExportBatchSize) == "number" ? r.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = typeof (r == null ? void 0 : r.maxQueueSize) == "number" ? r.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = typeof (r == null ? void 0 : r.scheduledDelayMillis) == "number" ? r.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = typeof (r == null ? void 0 : r.exportTimeoutMillis) == "number" ? r.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT;
        }
        forceFlush() {
          return this._isShutdown ? this._shuttingDownPromise : this._flushAll();
        }
        onStart(t) {
        }
        onEnd(t) {
          this._isShutdown || this._addToBuffer(t);
        }
        shutdown() {
          return this._isShutdown ? this._shuttingDownPromise : (this._isShutdown = true, this._shuttingDownPromise = new Promise((t, r) => {
            Promise.resolve().then(() => this.onShutdown()).then(() => this._flushAll()).then(() => this._exporter.shutdown()).then(t).catch((n) => {
              r(n);
            });
          }), this._shuttingDownPromise);
        }
        _addToBuffer(t) {
          this._finishedSpans.length >= this._maxQueueSize || (this._finishedSpans.push(t), this._maybeStartTimer());
        }
        _flushAll() {
          return new Promise((t, r) => {
            let n = [], i = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
            for (let a = 0, s = i; a < s; a++)
              n.push(this._flushOneBatch());
            Promise.all(n).then(() => {
              t();
            }).catch(r);
          });
        }
        _flushOneBatch() {
          return this._clearTimer(), this._finishedSpans.length === 0 ? Promise.resolve() : new Promise((t, r) => {
            let n = setTimeout(() => {
              r(new Error("Timeout"));
            }, this._exportTimeoutMillis);
            V_.context.with(Xi.suppressTracing(V_.context.active()), () => {
              this._exporter.export(this._finishedSpans.splice(0, this._maxExportBatchSize), (i) => {
                var a;
                clearTimeout(n), i.code === Xi.ExportResultCode.SUCCESS ? t() : r((a = i.error) !== null && a !== void 0 ? a : new Error("BatchSpanProcessor: span export failed"));
              });
            });
          });
        }
        _maybeStartTimer() {
          this._timer === void 0 && (this._timer = setTimeout(() => {
            this._flushOneBatch().then(() => {
              this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer());
            }).catch((t) => {
              Xi.globalErrorHandler(t);
            });
          }, this._scheduledDelayMillis), Xi.unrefTimer(this._timer));
        }
        _clearTimer() {
          this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0);
        }
      };
      ro.BatchSpanProcessorBase = $_;
    });
    var X_ = l((no) => {
      "use strict";
      Object.defineProperty(no, "__esModule", { value: true });
      no.BatchSpanProcessor = void 0;
      var HP = z_(), K_ = class extends HP.BatchSpanProcessorBase {
        onShutdown() {
        }
      };
      no.BatchSpanProcessor = K_;
    });
    var Y_ = l((wr) => {
      "use strict";
      var UP = wr && wr.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), BP = wr && wr.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && UP(t, e, r);
      };
      Object.defineProperty(wr, "__esModule", { value: true });
      BP(X_(), wr);
    });
    var $c = l((xr) => {
      "use strict";
      var GP = xr && xr.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), FP = xr && xr.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && GP(t, e, r);
      };
      Object.defineProperty(xr, "__esModule", { value: true });
      FP(Y_(), xr);
    });
    var W_ = l((Lr) => {
      "use strict";
      Object.defineProperty(Lr, "__esModule", { value: true });
      Lr.BasicTracerProvider = Lr.ForceFlushState = void 0;
      var xn = z(), Yi = Xe(), Q_ = Gs(), VP = zc(), $P = Cc(), zP = d_(), KP = Mc(), XP = F_(), YP = $c(), Mn;
      (function(e) {
        e[e.resolved = 0] = "resolved", e[e.timeout = 1] = "timeout", e[e.error = 2] = "error", e[e.unresolved = 3] = "unresolved";
      })(Mn = Lr.ForceFlushState || (Lr.ForceFlushState = {}));
      var Mr = class {
        constructor(t = {}) {
          var r;
          this._registeredSpanProcessors = [], this._tracers = new Map();
          let n = XP({}, $P.DEFAULT_CONFIG, t);
          this.resource = (r = n.resource) !== null && r !== void 0 ? r : Q_.Resource.empty(), this.resource = Q_.Resource.default().merge(this.resource), this._config = Object.assign({}, n, { resource: this.resource });
          let i = this._buildExporterFromEnv();
          if (i !== void 0) {
            let a = new YP.BatchSpanProcessor(i);
            this.activeSpanProcessor = a;
          } else
            this.activeSpanProcessor = new KP.NoopSpanProcessor();
        }
        getTracer(t, r) {
          let n = `${t}@${r || ""}`;
          return this._tracers.has(n) || this._tracers.set(n, new VP.Tracer({ name: t, version: r }, this._config, this)), this._tracers.get(n);
        }
        addSpanProcessor(t) {
          this._registeredSpanProcessors.length === 0 && this.activeSpanProcessor.shutdown().catch((r) => xn.diag.error("Error while trying to shutdown current span processor", r)), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new zP.MultiSpanProcessor(this._registeredSpanProcessors);
        }
        getActiveSpanProcessor() {
          return this.activeSpanProcessor;
        }
        register(t = {}) {
          xn.trace.setGlobalTracerProvider(this), t.propagator === void 0 && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && xn.context.setGlobalContextManager(t.contextManager), t.propagator && xn.propagation.setGlobalPropagator(t.propagator);
        }
        forceFlush() {
          let t = this._config.forceFlushTimeoutMillis, r = this._registeredSpanProcessors.map((n) => new Promise((i) => {
            let a, s = setTimeout(() => {
              i(new Error(`Span processor did not completed within timeout period of ${t} ms`)), a = Mn.timeout;
            }, t);
            n.forceFlush().then(() => {
              clearTimeout(s), a !== Mn.timeout && (a = Mn.resolved, i(a));
            }).catch((o) => {
              clearTimeout(s), a = Mn.error, i(o);
            });
          }));
          return new Promise((n, i) => {
            Promise.all(r).then((a) => {
              let s = a.filter((o) => o !== Mn.resolved);
              s.length > 0 ? i(s) : n();
            }).catch((a) => i([a]));
          });
        }
        shutdown() {
          return this.activeSpanProcessor.shutdown();
        }
        _getPropagator(t) {
          var r;
          return (r = Mr._registeredPropagators.get(t)) === null || r === void 0 ? void 0 : r();
        }
        _getSpanExporter(t) {
          var r;
          return (r = Mr._registeredExporters.get(t)) === null || r === void 0 ? void 0 : r();
        }
        _buildPropagatorFromEnv() {
          let t = Array.from(new Set(Yi.getEnv().OTEL_PROPAGATORS)), n = t.map((i) => {
            let a = this._getPropagator(i);
            return a || xn.diag.warn(`Propagator "${i}" requested through environment variable is unavailable.`), a;
          }).reduce((i, a) => (a && i.push(a), i), []);
          if (n.length !== 0)
            return t.length === 1 ? n[0] : new Yi.CompositePropagator({ propagators: n });
        }
        _buildExporterFromEnv() {
          let t = Yi.getEnv().OTEL_TRACES_EXPORTER;
          if (t === "none")
            return;
          let r = this._getSpanExporter(t);
          return r || xn.diag.error(`Exporter "${t}" requested through environment variable is unavailable.`), r;
        }
      };
      Lr.BasicTracerProvider = Mr;
      Mr._registeredPropagators = new Map([["tracecontext", () => new Yi.HttpTraceContextPropagator()], ["baggage", () => new Yi.HttpBaggagePropagator()]]);
      Mr._registeredExporters = new Map();
    });
    var J_ = l((io) => {
      "use strict";
      Object.defineProperty(io, "__esModule", { value: true });
      io.ConsoleSpanExporter = void 0;
      var Kc = Xe(), Z_ = class {
        export(t, r) {
          return this._sendSpans(t, r);
        }
        shutdown() {
          return this._sendSpans([]), Promise.resolve();
        }
        _exportInfo(t) {
          return { traceId: t.spanContext().traceId, parentId: t.parentSpanId, name: t.name, id: t.spanContext().spanId, kind: t.kind, timestamp: Kc.hrTimeToMicroseconds(t.startTime), duration: Kc.hrTimeToMicroseconds(t.duration), attributes: t.attributes, status: t.status, events: t.events };
        }
        _sendSpans(t, r) {
          for (let n of t)
            console.log(this._exportInfo(n));
          if (r)
            return r({ code: Kc.ExportResultCode.SUCCESS });
        }
      };
      io.ConsoleSpanExporter = Z_;
    });
    var rv = l((ao) => {
      "use strict";
      Object.defineProperty(ao, "__esModule", { value: true });
      ao.InMemorySpanExporter = void 0;
      var ev = Xe(), tv = class {
        constructor() {
          this._finishedSpans = [], this._stopped = false;
        }
        export(t, r) {
          if (this._stopped)
            return r({ code: ev.ExportResultCode.FAILED, error: new Error("Exporter has been stopped") });
          this._finishedSpans.push(...t), setTimeout(() => r({ code: ev.ExportResultCode.SUCCESS }), 0);
        }
        shutdown() {
          return this._stopped = true, this._finishedSpans = [], Promise.resolve();
        }
        reset() {
          this._finishedSpans = [];
        }
        getFinishedSpans() {
          return this._finishedSpans;
        }
      };
      ao.InMemorySpanExporter = tv;
    });
    var iv = l((nv) => {
      "use strict";
      Object.defineProperty(nv, "__esModule", { value: true });
    });
    var ov = l((so) => {
      "use strict";
      Object.defineProperty(so, "__esModule", { value: true });
      so.SimpleSpanProcessor = void 0;
      var av = z(), Xc = Xe(), sv = class {
        constructor(t) {
          this._exporter = t, this._isShutdown = false, this._shuttingDownPromise = Promise.resolve();
        }
        forceFlush() {
          return Promise.resolve();
        }
        onStart(t) {
        }
        onEnd(t) {
          this._isShutdown || av.context.with(Xc.suppressTracing(av.context.active()), () => {
            this._exporter.export([t], (r) => {
              var n;
              r.code !== Xc.ExportResultCode.SUCCESS && Xc.globalErrorHandler((n = r.error) !== null && n !== void 0 ? n : new Error(`SimpleSpanProcessor: span export failed (status ${r})`));
            });
          });
        }
        shutdown() {
          return this._isShutdown ? this._shuttingDownPromise : (this._isShutdown = true, this._shuttingDownPromise = new Promise((t, r) => {
            Promise.resolve().then(() => this._exporter.shutdown()).then(t).catch((n) => {
              r(n);
            });
          }), this._shuttingDownPromise);
        }
      };
      so.SimpleSpanProcessor = sv;
    });
    var cv = l((uv) => {
      "use strict";
      Object.defineProperty(uv, "__esModule", { value: true });
    });
    var pv = l((lv) => {
      "use strict";
      Object.defineProperty(lv, "__esModule", { value: true });
    });
    var dv = l((fv) => {
      "use strict";
      Object.defineProperty(fv, "__esModule", { value: true });
    });
    var _v = l((hv) => {
      "use strict";
      Object.defineProperty(hv, "__esModule", { value: true });
    });
    var zc = l((he) => {
      "use strict";
      var QP = he && he.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), Ue = he && he.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && QP(t, e, r);
      };
      Object.defineProperty(he, "__esModule", { value: true });
      Ue(Qh(), he);
      Ue(W_(), he);
      Ue($c(), he);
      Ue(J_(), he);
      Ue(rv(), he);
      Ue(iv(), he);
      Ue(ov(), he);
      Ue(cv(), he);
      Ue(Mc(), he);
      Ue(bc(), he);
      Ue(pv(), he);
      Ue(dv(), he);
      Ue(_v(), he);
    });
    var mv = l((ht) => {
      "use strict";
      Object.defineProperty(ht, "__esModule", { value: true });
      ht.enable = ht.azureCoreTracing = ht.AzureMonitorSymbol = void 0;
      var vv = ue();
      ht.AzureMonitorSymbol = "Azure_Monitor_Tracer";
      var gv = false, WP = function(e) {
        if (gv)
          return e;
        try {
          var t = zc(), r = z(), n = new t.BasicTracerProvider(), i = n.getTracer("applicationinsights tracer"), a = e.setTracer;
          e.setTracer = function(s) {
            var o = s.startSpan;
            s.startSpan = function(u, c, p) {
              var f = o.call(this, u, c, p), d = f.end;
              return f.end = function() {
                var h = d.apply(this, arguments);
                return vv.channel.publish("azure-coretracing", f), h;
              }, f;
            }, s[ht.AzureMonitorSymbol] = true, a.call(this, s);
          }, r.trace.getSpan(r.context.active()), e.setTracer(i), gv = true;
        } catch (s) {
        }
        return e;
      };
      ht.azureCoreTracing = { versionSpecifier: ">= 1.0.0 < 2.0.0", patch: WP };
      function ZP() {
        vv.channel.registerMonkeyPatch("@azure/core-tracing", ht.azureCoreTracing);
      }
      ht.enable = ZP;
    });
    var yv = l((qr) => {
      "use strict";
      Object.defineProperty(qr, "__esModule", { value: true });
      qr.enable = qr.bunyan = void 0;
      var Ev = ue(), JP = function(e) {
        var t = e.prototype._emit;
        return e.prototype._emit = function(r, n) {
          var i = t.apply(this, arguments);
          if (!n) {
            var a = i;
            a || (a = t.call(this, r, true)), Ev.channel.publish("bunyan", { level: r.level, result: a });
          }
          return i;
        }, e;
      };
      qr.bunyan = { versionSpecifier: ">= 1.0.0 < 2.0.0", patch: JP };
      function e0() {
        Ev.channel.registerMonkeyPatch("bunyan", qr.bunyan);
      }
      qr.enable = e0;
    });
    var Sv = l((jr) => {
      "use strict";
      Object.defineProperty(jr, "__esModule", { value: true });
      jr.enable = jr.console = void 0;
      var Yc = ue(), Tv = require("stream"), t0 = function(e) {
        var t = new Tv.Writable(), r = new Tv.Writable();
        t.write = function(c) {
          if (!c)
            return true;
          var p = c.toString();
          return Yc.channel.publish("console", { message: p }), true;
        }, r.write = function(c) {
          if (!c)
            return true;
          var p = c.toString();
          return Yc.channel.publish("console", { message: p, stderr: true }), true;
        };
        for (var n = new e.Console(t, r), i = ["log", "info", "warn", "error", "dir", "time", "timeEnd", "trace", "assert"], a = function(c) {
          var p = e[c];
          p && (e[c] = function() {
            if (n[c])
              try {
                n[c].apply(n, arguments);
              } catch (f) {
              }
            return p.apply(e, arguments);
          });
        }, s = 0, o = i; s < o.length; s++) {
          var u = o[s];
          a(u);
        }
        return e;
      };
      jr.console = { versionSpecifier: ">= 4.0.0", patch: t0 };
      function r0() {
        Yc.channel.registerMonkeyPatch("console", jr.console), require("console");
      }
      jr.enable = r0;
    });
    var Av = l((kr) => {
      "use strict";
      Object.defineProperty(kr, "__esModule", { value: true });
      kr.enable = kr.mongoCore = void 0;
      var Qc = ue(), n0 = function(e) {
        var t = e.Server.prototype.connect;
        return e.Server.prototype.connect = function() {
          var n = t.apply(this, arguments), i = this.s.pool.write;
          this.s.pool.write = function() {
            var o = typeof arguments[1] == "function" ? 1 : 2;
            return typeof arguments[o] == "function" && (arguments[o] = Qc.channel.bindToContext(arguments[o])), i.apply(this, arguments);
          };
          var a = this.s.pool.logout;
          return this.s.pool.logout = function() {
            return typeof arguments[1] == "function" && (arguments[1] = Qc.channel.bindToContext(arguments[1])), a.apply(this, arguments);
          }, n;
        }, e;
      };
      kr.mongoCore = { versionSpecifier: ">= 2.0.0 < 4.0.0", patch: n0 };
      function i0() {
        Qc.channel.registerMonkeyPatch("mongodb-core", kr.mongoCore);
      }
      kr.enable = i0;
    });
    var Iv = l((Ne) => {
      "use strict";
      var Ln = Ne && Ne.__assign || function() {
        return Ln = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, Ln.apply(this, arguments);
      };
      Object.defineProperty(Ne, "__esModule", { value: true });
      Ne.enable = Ne.mongo330 = Ne.mongo3 = Ne.mongo2 = void 0;
      var Ce = ue(), a0 = function(e) {
        var t = e.instrument({ operationIdGenerator: { next: function() {
          return Ce.channel.bindToContext(function(n) {
            return n();
          });
        } } }), r = {};
        return t.on("started", function(n) {
          r[n.requestId] || (r[n.requestId] = Ln(Ln({}, n), { time: new Date() }));
        }), t.on("succeeded", function(n) {
          var i = r[n.requestId];
          i && delete r[n.requestId], typeof n.operationId == "function" ? n.operationId(function() {
            return Ce.channel.publish("mongodb", { startedData: i, event: n, succeeded: true });
          }) : Ce.channel.publish("mongodb", { startedData: i, event: n, succeeded: true });
        }), t.on("failed", function(n) {
          var i = r[n.requestId];
          i && delete r[n.requestId], typeof n.operationId == "function" ? n.operationId(function() {
            return Ce.channel.publish("mongodb", { startedData: i, event: n, succeeded: false });
          }) : Ce.channel.publish("mongodb", { startedData: i, event: n, succeeded: false });
        }), e;
      }, s0 = function(e) {
        var t = e.instrument(), r = {}, n = {};
        return t.on("started", function(i) {
          r[i.requestId] || (n[i.requestId] = Ce.channel.bindToContext(function(a) {
            return a();
          }), r[i.requestId] = Ln(Ln({}, i), { time: new Date() }));
        }), t.on("succeeded", function(i) {
          var a = r[i.requestId];
          a && delete r[i.requestId], typeof i == "object" && typeof n[i.requestId] == "function" && (n[i.requestId](function() {
            return Ce.channel.publish("mongodb", { startedData: a, event: i, succeeded: true });
          }), delete n[i.requestId]);
        }), t.on("failed", function(i) {
          var a = r[i.requestId];
          a && delete r[i.requestId], typeof i == "object" && typeof n[i.requestId] == "function" && (n[i.requestId](function() {
            return Ce.channel.publish("mongodb", { startedData: a, event: i, succeeded: false });
          }), delete n[i.requestId]);
        }), e;
      }, o0 = function(e) {
        var t = e.Server.prototype.connect;
        return e.Server.prototype.connect = function() {
          var n = t.apply(this, arguments), i = this.s.coreTopology.s.pool.write;
          this.s.coreTopology.s.pool.write = function() {
            var o = typeof arguments[1] == "function" ? 1 : 2;
            return typeof arguments[o] == "function" && (arguments[o] = Ce.channel.bindToContext(arguments[o])), i.apply(this, arguments);
          };
          var a = this.s.coreTopology.s.pool.logout;
          return this.s.coreTopology.s.pool.logout = function() {
            return typeof arguments[1] == "function" && (arguments[1] = Ce.channel.bindToContext(arguments[1])), a.apply(this, arguments);
          }, n;
        }, e;
      }, u0 = function(e) {
        o0(e);
        var t = e.instrument(), r = {}, n = {};
        return t.on("started", function(i) {
          r[i.requestId] || (n[i.requestId] = Ce.channel.bindToContext(function(a) {
            return a();
          }), r[i.requestId] = i);
        }), t.on("succeeded", function(i) {
          var a = r[i.requestId];
          a && delete r[i.requestId], typeof i == "object" && typeof n[i.requestId] == "function" && (n[i.requestId](function() {
            return Ce.channel.publish("mongodb", { startedData: a, event: i, succeeded: true });
          }), delete n[i.requestId]);
        }), t.on("failed", function(i) {
          var a = r[i.requestId];
          a && delete r[i.requestId], typeof i == "object" && typeof n[i.requestId] == "function" && (n[i.requestId](function() {
            return Ce.channel.publish("mongodb", { startedData: a, event: i, succeeded: false });
          }), delete n[i.requestId]);
        }), e;
      };
      Ne.mongo2 = { versionSpecifier: ">= 2.0.0 <= 3.0.5", patch: a0 };
      Ne.mongo3 = { versionSpecifier: "> 3.0.5 < 3.3.0", patch: s0 };
      Ne.mongo330 = { versionSpecifier: ">= 3.3.0 < 4.0.0", patch: u0 };
      function c0() {
        Ce.channel.registerMonkeyPatch("mongodb", Ne.mongo2), Ce.channel.registerMonkeyPatch("mongodb", Ne.mongo3), Ce.channel.registerMonkeyPatch("mongodb", Ne.mongo330);
      }
      Ne.enable = c0;
    });
    var Cv = l((Hr) => {
      "use strict";
      Object.defineProperty(Hr, "__esModule", { value: true });
      Hr.enable = Hr.mysql = void 0;
      var oo = ue(), bv = require("path"), l0 = function(e, t) {
        var r = function(u, c) {
          return function(p, f) {
            var d = u[p];
            d && (u[p] = function() {
              for (var m = arguments.length - 1, S = arguments.length - 1; S >= 0; --S)
                if (typeof arguments[S] == "function") {
                  m = S;
                  break;
                } else if (typeof arguments[S] != "undefined")
                  break;
              var j = arguments[m], oe = { result: null, startTime: null, startDate: null };
              typeof j == "function" && (f ? (oe.startTime = process.hrtime(), oe.startDate = new Date(), arguments[m] = oo.channel.bindToContext(f(oe, j))) : arguments[m] = oo.channel.bindToContext(j));
              var Ae = d.apply(this, arguments);
              return oe.result = Ae, Ae;
            });
          };
        }, n = function(u, c) {
          return r(u.prototype, c + ".prototype");
        }, i = ["connect", "changeUser", "ping", "statistics", "end"], a = require(bv.dirname(t) + "/lib/Connection");
        i.forEach(function(u) {
          return n(a, "Connection")(u);
        }), r(a, "Connection")("createQuery", function(u, c) {
          return function(p) {
            var f = process.hrtime(u.startTime), d = f[0] * 1e3 + f[1] / 1e6 | 0;
            oo.channel.publish("mysql", { query: u.result, callbackArgs: arguments, err: p, duration: d, time: u.startDate }), c.apply(this, arguments);
          };
        });
        var s = ["_enqueueCallback"], o = require(bv.dirname(t) + "/lib/Pool");
        return s.forEach(function(u) {
          return n(o, "Pool")(u);
        }), e;
      };
      Hr.mysql = { versionSpecifier: ">= 2.0.0 < 3.0.0", patch: l0 };
      function p0() {
        oo.channel.registerMonkeyPatch("mysql", Hr.mysql);
      }
      Hr.enable = p0;
    });
    var Pv = l((Ur) => {
      "use strict";
      Object.defineProperty(Ur, "__esModule", { value: true });
      Ur.enable = Ur.postgresPool1 = void 0;
      var Ov = ue();
      function f0(e) {
        var t = e.prototype.connect;
        return e.prototype.connect = function(n) {
          return n && (arguments[0] = Ov.channel.bindToContext(n)), t.apply(this, arguments);
        }, e;
      }
      Ur.postgresPool1 = { versionSpecifier: ">= 1.0.0 < 3.0.0", patch: f0 };
      function d0() {
        Ov.channel.registerMonkeyPatch("pg-pool", Ur.postgresPool1);
      }
      Ur.enable = d0;
    });
    var Nv = l((_t) => {
      "use strict";
      Object.defineProperty(_t, "__esModule", { value: true });
      _t.enable = _t.postgres7 = _t.postgres6 = void 0;
      var qn = ue(), Rv = require("events");
      function h0(e, t) {
        var r = e.Client.prototype.query, n = "__diagnosticOriginalFunc";
        return e.Client.prototype.query = function(a, s, o) {
          var u = { query: {}, database: { host: this.connectionParameters.host, port: this.connectionParameters.port }, result: null, error: null, duration: 0, time: new Date() }, c = process.hrtime(), p;
          function f(d) {
            d && d[n] && (d = d[n]);
            var h = qn.channel.bindToContext(function(m, S) {
              var j = process.hrtime(c);
              if (u.result = S && { rowCount: S.rowCount, command: S.command }, u.error = m, u.duration = Math.ceil(j[0] * 1e3 + j[1] / 1e6), qn.channel.publish("postgres", u), m) {
                if (d)
                  return d.apply(this, arguments);
                p && p instanceof Rv.EventEmitter && p.emit("error", m);
              } else
                d && d.apply(this, arguments);
            });
            try {
              return Object.defineProperty(h, n, { value: d }), h;
            } catch (m) {
              return d;
            }
          }
          try {
            typeof a == "string" ? s instanceof Array ? (u.query.preparable = { text: a, args: s }, o = f(o)) : (u.query.text = a, o ? o = f(o) : s = f(s)) : (typeof a.name == "string" ? u.query.plan = a.name : a.values instanceof Array ? u.query.preparable = { text: a.text, args: a.values } : u.query.text = a.text, o ? o = f(o) : s ? s = f(s) : a.callback = f(a.callback));
          } catch (d) {
            return r.apply(this, arguments);
          }
          return arguments[0] = a, arguments[1] = s, arguments[2] = o, arguments.length = arguments.length > 3 ? arguments.length : 3, p = r.apply(this, arguments), p;
        }, e;
      }
      function _0(e, t) {
        var r = e.Client.prototype.query, n = "__diagnosticOriginalFunc";
        return e.Client.prototype.query = function(a, s, o) {
          var u = this, c = !!o, p = { query: {}, database: { host: this.connectionParameters.host, port: this.connectionParameters.port }, result: null, error: null, duration: 0, time: new Date() }, f = process.hrtime(), d;
          function h(m) {
            m && m[n] && (m = m[n]);
            var S = qn.channel.bindToContext(function(j, oe) {
              var Ae = process.hrtime(f);
              if (p.result = oe && { rowCount: oe.rowCount, command: oe.command }, p.error = j, p.duration = Math.ceil(Ae[0] * 1e3 + Ae[1] / 1e6), qn.channel.publish("postgres", p), j) {
                if (m)
                  return m.apply(this, arguments);
                d && d instanceof Rv.EventEmitter && d.emit("error", j);
              } else
                m && m.apply(this, arguments);
            });
            try {
              return Object.defineProperty(S, n, { value: m }), S;
            } catch (j) {
              return m;
            }
          }
          try {
            typeof a == "string" ? s instanceof Array ? (p.query.preparable = { text: a, args: s }, c = typeof o == "function", o = c ? h(o) : o) : (p.query.text = a, o ? (c = typeof o == "function", o = c ? h(o) : o) : (c = typeof s == "function", s = c ? h(s) : s)) : (typeof a.name == "string" ? p.query.plan = a.name : a.values instanceof Array ? p.query.preparable = { text: a.text, args: a.values } : p.query.text = a.text, o ? (c = typeof o == "function", o = h(o)) : s ? (c = typeof s == "function", s = c ? h(s) : s) : (c = typeof a.callback == "function", a.callback = c ? h(a.callback) : a.callback));
          } catch (m) {
            return r.apply(this, arguments);
          }
          return arguments[0] = a, arguments[1] = s, arguments[2] = o, arguments.length = arguments.length > 3 ? arguments.length : 3, d = r.apply(this, arguments), c ? d : d.then(function(m) {
            return h()(void 0, m), new u._Promise(function(S, j) {
              S(m);
            });
          }).catch(function(m) {
            return h()(m, void 0), new u._Promise(function(S, j) {
              j(m);
            });
          });
        }, e;
      }
      _t.postgres6 = { versionSpecifier: "6.*", patch: h0 };
      _t.postgres7 = { versionSpecifier: ">=7.* <=8.*", patch: _0 };
      function v0() {
        qn.channel.registerMonkeyPatch("pg", _t.postgres6), qn.channel.registerMonkeyPatch("pg", _t.postgres7);
      }
      _t.enable = v0;
    });
    var Dv = l((Br) => {
      "use strict";
      Object.defineProperty(Br, "__esModule", { value: true });
      Br.enable = Br.redis = void 0;
      var Wc = ue(), g0 = function(e) {
        var t = e.RedisClient.prototype.internal_send_command;
        return e.RedisClient.prototype.internal_send_command = function(r) {
          if (r) {
            var n = r.callback;
            if (!n || !n.pubsubBound) {
              var i = this.address, a = process.hrtime(), s = new Date();
              r.callback = Wc.channel.bindToContext(function(o, u) {
                var c = process.hrtime(a), p = c[0] * 1e3 + c[1] / 1e6 | 0;
                Wc.channel.publish("redis", { duration: p, address: i, commandObj: r, err: o, result: u, time: s }), typeof n == "function" && n.apply(this, arguments);
              }), r.callback.pubsubBound = true;
            }
          }
          return t.call(this, r);
        }, e;
      };
      Br.redis = { versionSpecifier: ">= 2.0.0 < 4.0.0", patch: g0 };
      function m0() {
        Wc.channel.registerMonkeyPatch("redis", Br.redis);
      }
      Br.enable = m0;
    });
    var wv = l((Nt) => {
      "use strict";
      var uo = Nt && Nt.__assign || function() {
        return uo = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, uo.apply(this, arguments);
      };
      Object.defineProperty(Nt, "__esModule", { value: true });
      Nt.enable = Nt.tedious = void 0;
      var Zc = ue(), E0 = function(e) {
        var t = e.Connection.prototype.makeRequest;
        return e.Connection.prototype.makeRequest = function() {
          function n(a) {
            var s = process.hrtime(), o = { query: {}, database: { host: null, port: null }, result: null, error: null, duration: 0 };
            return Zc.channel.bindToContext(function(u, c, p) {
              var f = process.hrtime(s);
              o = uo(uo({}, o), { database: { host: this.connection.config.server, port: this.connection.config.options.port }, result: !u && { rowCount: c, rows: p }, query: { text: this.parametersByName.statement.value }, error: u, duration: Math.ceil(f[0] * 1e3 + f[1] / 1e6) }), Zc.channel.publish("tedious", o), a.call(this, u, c, p);
            });
          }
          var i = arguments[0];
          arguments[0].callback = n(i.callback), t.apply(this, arguments);
        }, e;
      };
      Nt.tedious = { versionSpecifier: ">= 6.0.0 < 9.0.0", patch: E0 };
      function y0() {
        Zc.channel.registerMonkeyPatch("tedious", Nt.tedious);
      }
      Nt.enable = y0;
    });
    var xv = l((Le) => {
      "use strict";
      var T0 = Le && Le.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), S0 = Le && Le.__rest || function(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
        return r;
      };
      Object.defineProperty(Le, "__esModule", { value: true });
      Le.enable = Le.winston2 = Le.winston3 = void 0;
      var co = ue(), A0 = function(e) {
        var t = e.Logger.prototype.log, r, n = function(i, a, s) {
          var o;
          return r === e.config.npm.levels ? o = "npm" : r === e.config.syslog.levels ? o = "syslog" : o = "unknown", co.channel.publish("winston", { level: i, message: a, meta: s, levelKind: o }), a;
        };
        return e.Logger.prototype.log = function() {
          return r = this.levels, !this.filters || this.filters.length === 0 ? this.filters = [n] : this.filters[this.filters.length - 1] !== n && (this.filters = this.filters.filter(function(a) {
            return a !== n;
          }), this.filters.push(n)), t.apply(this, arguments);
        }, e;
      }, I0 = function(e) {
        var t = function(s, o) {
          var u;
          return s.config.npm.levels[o] != null ? u = "npm" : s.config.syslog.levels[o] != null ? u = "syslog" : u = "unknown", u;
        }, r = function(s) {
          T0(o, s);
          function o(u, c) {
            var p = s.call(this, c) || this;
            return p.winston = u, p;
          }
          return o.prototype.log = function(u, c) {
            var p = u.message, f = u.level, d = u.meta, h = S0(u, ["message", "level", "meta"]);
            f = typeof Symbol.for == "function" ? u[Symbol.for("level")] : f, p = u instanceof Error ? u : p;
            var m = t(this.winston, f);
            d = d || {};
            for (var S in h)
              h.hasOwnProperty(S) && (d[S] = h[S]);
            co.channel.publish("winston", { message: p, level: f, levelKind: m, meta: d }), c();
          }, o;
        }(e.Transport);
        function n() {
          var s = arguments[0].levels || e.config.npm.levels, o;
          for (var u in s)
            s.hasOwnProperty(u) && (o = o === void 0 || s[u] > s[o] ? u : o);
          this.add(new r(e, { level: o }));
        }
        var i = e.createLogger;
        e.createLogger = function() {
          var o = arguments[0].levels || e.config.npm.levels, u;
          for (var c in o)
            o.hasOwnProperty(c) && (u = u === void 0 || o[c] > o[u] ? c : u);
          var p = i.apply(this, arguments);
          p.add(new r(e, { level: u }));
          var f = p.configure;
          return p.configure = function() {
            f.apply(this, arguments), n.apply(this, arguments);
          }, p;
        };
        var a = e.configure;
        return e.configure = function() {
          a.apply(this, arguments), n.apply(this, arguments);
        }, e.add(new r(e)), e;
      };
      Le.winston3 = { versionSpecifier: "3.x", patch: I0 };
      Le.winston2 = { versionSpecifier: "2.x", patch: A0 };
      function b0() {
        co.channel.registerMonkeyPatch("winston", Le.winston2), co.channel.registerMonkeyPatch("winston", Le.winston3);
      }
      Le.enable = b0;
    });
    var $v = l(($) => {
      "use strict";
      Object.defineProperty($, "__esModule", { value: true });
      $.enable = $.tedious = $.pgPool = $.pg = $.winston = $.redis = $.mysql = $.mongodb = $.mongodbCore = $.console = $.bunyan = $.azuresdk = void 0;
      var Mv = mv();
      $.azuresdk = Mv;
      var Lv = yv();
      $.bunyan = Lv;
      var qv = Sv();
      $.console = qv;
      var jv = Av();
      $.mongodbCore = jv;
      var kv = Iv();
      $.mongodb = kv;
      var Hv = Cv();
      $.mysql = Hv;
      var Uv = Pv();
      $.pgPool = Uv;
      var Bv = Nv();
      $.pg = Bv;
      var Gv = Dv();
      $.redis = Gv;
      var Fv = wv();
      $.tedious = Fv;
      var Vv = xv();
      $.winston = Vv;
      function C0() {
        Lv.enable(), qv.enable(), jv.enable(), kv.enable(), Hv.enable(), Bv.enable(), Uv.enable(), Gv.enable(), Vv.enable(), Mv.enable(), Fv.enable();
      }
      $.enable = C0;
    });
    var fo = l((tr) => {
      "use strict";
      Object.defineProperty(tr, "__esModule", { value: true });
      tr.registerContextPreservation = tr.IsInitialized = void 0;
      var O0 = mu(), Jc = ve();
      tr.IsInitialized = !process.env.APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL;
      var el = "DiagnosticChannel";
      if (tr.IsInitialized) {
        at = $v(), zv = process.env.APPLICATION_INSIGHTS_NO_PATCH_MODULES || "", lo = zv.split(","), tl = { bunyan: at.bunyan, console: at.console, mongodb: at.mongodb, mongodbCore: at.mongodbCore, mysql: at.mysql, redis: at.redis, pg: at.pg, pgPool: at.pgPool, winston: at.winston, azuresdk: at.azuresdk };
        for (po in tl)
          lo.indexOf(po) === -1 && (tl[po].enable(), Jc.info(el, "Subscribed to " + po + " events"));
        lo.length > 0 && Jc.info(el, "Some modules will not be patched", lo);
      } else
        Jc.info(el, "Not subscribing to dependency autocollection because APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL was set");
      var at, zv, lo, tl, po;
      function P0(e) {
        if (!!tr.IsInitialized) {
          var t = ue();
          t.channel.addContextPreservation(e), t.channel.spanContextPropagator = O0.AsyncScopeManager;
        }
      }
      tr.registerContextPreservation = P0;
    });
    var jn = l((Aq, Kv) => {
      "use strict";
      Kv.exports = { requestContextHeader: "request-context", requestContextSourceKey: "appId", requestContextTargetKey: "appId", requestIdHeader: "request-id", parentIdHeader: "x-ms-request-id", rootIdHeader: "x-ms-request-root-id", correlationContextHeader: "correlation-context", traceparentHeader: "traceparent", traceStateHeader: "tracestate" };
    });
    var Be = l((nl, Yv) => {
      "use strict";
      var rr = nl && nl.__assign || function() {
        return rr = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, rr.apply(this, arguments);
      }, R0 = require("http"), Xv = require("https"), rl2 = require("url"), ho = require("constants"), Qi = ve(), kn = jn(), N0 = function() {
        function e() {
        }
        return e.getCookie = function(t, r) {
          var n = "";
          if (t && t.length && typeof r == "string")
            for (var i = t + "=", a = r.split(";"), s = 0; s < a.length; s++) {
              var r = a[s];
              if (r = e.trim(r), r && r.indexOf(i) === 0) {
                n = r.substring(i.length, a[s].length);
                break;
              }
            }
          return n;
        }, e.trim = function(t) {
          return typeof t == "string" ? t.replace(/^\s+|\s+$/g, "") : "";
        }, e.int32ArrayToBase64 = function(t) {
          var r = function(o, u) {
            return String.fromCharCode(o >> u & 255);
          }, n = function(o) {
            return r(o, 24) + r(o, 16) + r(o, 8) + r(o, 0);
          }, i = t.map(n).join(""), a = Buffer.from ? Buffer.from(i, "binary") : new Buffer(i, "binary"), s = a.toString("base64");
          return s.substr(0, s.indexOf("="));
        }, e.random32 = function() {
          return 4294967296 * Math.random() | 0;
        }, e.randomu32 = function() {
          return e.random32() + 2147483648;
        }, e.w3cTraceId = function() {
          for (var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], r = "", n, i = 0; i < 4; i++)
            n = e.random32(), r += t[n & 15] + t[n >> 4 & 15] + t[n >> 8 & 15] + t[n >> 12 & 15] + t[n >> 16 & 15] + t[n >> 20 & 15] + t[n >> 24 & 15] + t[n >> 28 & 15];
          var a = t[8 + Math.random() * 4 | 0];
          return r.substr(0, 8) + r.substr(9, 4) + "4" + r.substr(13, 3) + a + r.substr(16, 3) + r.substr(19, 12);
        }, e.w3cSpanId = function() {
          return e.w3cTraceId().substring(16);
        }, e.isValidW3CId = function(t) {
          return t.length === 32 && t !== "00000000000000000000000000000000";
        }, e.isArray = function(t) {
          return Object.prototype.toString.call(t) === "[object Array]";
        }, e.isError = function(t) {
          return t instanceof Error;
        }, e.isPrimitive = function(t) {
          var r = typeof t;
          return r === "string" || r === "number" || r === "boolean";
        }, e.isDate = function(t) {
          return Object.prototype.toString.call(t) === "[object Date]";
        }, e.msToTimeSpan = function(t) {
          (isNaN(t) || t < 0) && (t = 0);
          var r = (t / 1e3 % 60).toFixed(7).replace(/0{0,4}$/, ""), n = "" + Math.floor(t / (1e3 * 60)) % 60, i = "" + Math.floor(t / (1e3 * 60 * 60)) % 24, a = Math.floor(t / (1e3 * 60 * 60 * 24));
          r = r.indexOf(".") < 2 ? "0" + r : r, n = n.length < 2 ? "0" + n : n, i = i.length < 2 ? "0" + i : i;
          var s = a > 0 ? a + "." : "";
          return s + i + ":" + n + ":" + r;
        }, e.extractError = function(t) {
          var r = t;
          return { message: t.message, code: r.code || r.id || "" };
        }, e.extractObject = function(t) {
          return t instanceof Error ? e.extractError(t) : typeof t.toJSON == "function" ? t.toJSON() : t;
        }, e.validateStringMap = function(t) {
          if (typeof t != "object") {
            Qi.info("Invalid properties dropped from payload");
            return;
          }
          var r = {};
          for (var n in t) {
            var i = "", a = t[n], s = typeof a;
            if (e.isPrimitive(a))
              i = a.toString();
            else if (a === null || s === "undefined")
              i = "";
            else if (s === "function") {
              Qi.info("key: " + n + " was function; will not serialize");
              continue;
            } else {
              var o = e.isArray(a) ? a : e.extractObject(a);
              try {
                e.isPrimitive(o) ? i = o : i = JSON.stringify(o);
              } catch (u) {
                i = a.constructor.name.toString() + " (Error: " + u.message + ")", Qi.info("key: " + n + ", could not be serialized");
              }
            }
            r[n] = i.substring(0, e.MAX_PROPERTY_LENGTH);
          }
          return r;
        }, e.canIncludeCorrelationHeader = function(t, r) {
          var n = t && t.config && t.config.correlationHeaderExcludedDomains;
          if (!n || n.length == 0 || !r)
            return true;
          for (var i = 0; i < n.length; i++) {
            var a = new RegExp(n[i].replace(/\./g, ".").replace(/\*/g, ".*"));
            if (a.test(rl2.parse(r).hostname))
              return false;
          }
          return true;
        }, e.getCorrelationContextTarget = function(t, r) {
          var n = t.headers && t.headers[kn.requestContextHeader];
          if (n)
            for (var i = n.split(","), a = 0; a < i.length; ++a) {
              var s = i[a].split("=");
              if (s.length == 2 && s[0] == r)
                return s[1];
            }
        }, e.makeRequest = function(t, r, n, i) {
          r && r.indexOf("//") === 0 && (r = "https:" + r);
          var a = rl2.parse(r), s = rr(rr({}, n), { host: a.hostname, port: a.port, path: a.pathname }), o = void 0;
          if (a.protocol === "https:" && (o = t.proxyHttpsUrl || void 0), a.protocol === "http:" && (o = t.proxyHttpUrl || void 0), o) {
            o.indexOf("//") === 0 && (o = "http:" + o);
            var u = rl2.parse(o);
            u.protocol === "https:" ? (Qi.info("Proxies that use HTTPS are not supported"), o = void 0) : s = rr(rr({}, s), { host: u.hostname, port: u.port || "80", path: r, headers: rr(rr({}, s.headers), { Host: a.hostname }) });
          }
          var c = a.protocol === "https:" && !o;
          return c && t.httpsAgent !== void 0 ? s.agent = t.httpsAgent : !c && t.httpAgent !== void 0 ? s.agent = t.httpAgent : c && (s.agent = e.tlsRestrictedAgent), c ? Xv.request(s, i) : R0.request(s, i);
        }, e.safeIncludeCorrelationHeader = function(t, r, n) {
          var i;
          if (typeof n == "string")
            i = n;
          else if (n instanceof Array)
            i = n.join(",");
          else if (n && typeof n.toString == "function")
            try {
              i = n.toString();
            } catch (a) {
              Qi.warn("Outgoing request-context header could not be read. Correlation of requests may be lost.", a, n);
            }
          i ? e.addCorrelationIdHeaderFromString(t, r, i) : r.setHeader(kn.requestContextHeader, kn.requestContextSourceKey + "=" + t.config.correlationId);
        }, e.dumpObj = function(t) {
          var r = Object.prototype.toString.call(t), n = "";
          return r === "[object Error]" ? n = "{ stack: '" + t.stack + "', message: '" + t.message + "', name: '" + t.name + "'" : n = JSON.stringify(t), r + n;
        }, e.addCorrelationIdHeaderFromString = function(t, r, n) {
          var i = n.split(","), a = kn.requestContextSourceKey + "=", s = i.some(function(o) {
            return o.substring(0, a.length) === a;
          });
          s || r.setHeader(kn.requestContextHeader, n + "," + kn.requestContextSourceKey + "=" + t.config.correlationId);
        }, e.MAX_PROPERTY_LENGTH = 8192, e.tlsRestrictedAgent = new Xv.Agent({ keepAlive: true, maxSockets: 25, secureOptions: ho.SSL_OP_NO_SSLv2 | ho.SSL_OP_NO_SSLv3 | ho.SSL_OP_NO_TLSv1 | ho.SSL_OP_NO_TLSv1_1 }), e;
      }();
      Yv.exports = N0;
    });
    var Gr = l((Iq, Qv) => {
      "use strict";
      var _o = Be(), il = ve(), D0 = function() {
        function e() {
        }
        return e.queryCorrelationId = function(t, r) {
          var n = t.profileQueryEndpoint + "/api/profiles/" + t.instrumentationKey + "/appId";
          if (e.completedLookups.hasOwnProperty(n)) {
            r(e.completedLookups[n]);
            return;
          } else if (e.pendingLookups[n]) {
            e.pendingLookups[n].push(r);
            return;
          }
          e.pendingLookups[n] = [r];
          var i = function() {
            if (!!e.pendingLookups[n]) {
              var a = { method: "GET", disableAppInsightsAutoCollection: true };
              il.info(e.TAG, a);
              var s = _o.makeRequest(t, n, a, function(o) {
                if (o.statusCode === 200) {
                  var u = "";
                  o.setEncoding("utf-8"), o.on("data", function(c) {
                    u += c;
                  }), o.on("end", function() {
                    il.info(e.TAG, u);
                    var c = e.correlationIdPrefix + u;
                    e.completedLookups[n] = c, e.pendingLookups[n] && e.pendingLookups[n].forEach(function(p) {
                      return p(c);
                    }), delete e.pendingLookups[n];
                  });
                } else
                  o.statusCode >= 400 && o.statusCode < 500 ? (e.completedLookups[n] = void 0, delete e.pendingLookups[n]) : setTimeout(i, t.correlationIdRetryIntervalMs);
              });
              s && (s.on("error", function(o) {
                il.warn(e.TAG, o);
              }), s.end());
            }
          };
          setTimeout(i, 0);
        }, e.cancelCorrelationIdQuery = function(t, r) {
          var n = t.profileQueryEndpoint + "/api/profiles/" + t.instrumentationKey + "/appId", i = e.pendingLookups[n];
          i && (e.pendingLookups[n] = i.filter(function(a) {
            return a != r;
          }), e.pendingLookups[n].length == 0 && delete e.pendingLookups[n]);
        }, e.generateRequestId = function(t) {
          if (t) {
            t = t[0] == "|" ? t : "|" + t, t[t.length - 1] !== "." && (t += ".");
            var r = (e.currentRootId++).toString(16);
            return e.appendSuffix(t, r, "_");
          } else
            return e.generateRootId();
        }, e.getRootId = function(t) {
          var r = t.indexOf(".");
          r < 0 && (r = t.length);
          var n = t[0] === "|" ? 1 : 0;
          return t.substring(n, r);
        }, e.generateRootId = function() {
          return "|" + _o.w3cTraceId() + ".";
        }, e.appendSuffix = function(t, r, n) {
          if (t.length + r.length < e.requestIdMaxLength)
            return t + r + n;
          var i = e.requestIdMaxLength - 9;
          if (t.length > i)
            for (; i > 1; --i) {
              var a = t[i - 1];
              if (a === "." || a === "_")
                break;
            }
          if (i <= 1)
            return e.generateRootId();
          for (r = _o.randomu32().toString(16); r.length < 8; )
            r = "0" + r;
          return t.substring(0, i) + r + "#";
        }, e.TAG = "CorrelationIdManager", e.correlationIdPrefix = "cid-v1:", e.w3cEnabled = true, e.pendingLookups = {}, e.completedLookups = {}, e.requestIdMaxLength = 1024, e.currentRootId = _o.randomu32(), e;
      }();
      Qv.exports = D0;
    });
    var Wi = l((bq, Wv) => {
      "use strict";
      var ye = Be(), w0 = Gr(), x0 = function() {
        function e(t, r) {
          if (this.traceFlag = e.DEFAULT_TRACE_FLAG, this.version = e.DEFAULT_VERSION, t && typeof t == "string")
            if (t.split(",").length > 1)
              this.traceId = ye.w3cTraceId(), this.spanId = ye.w3cTraceId().substr(0, 16);
            else {
              var n = t.trim().split("-"), i = n.length;
              i >= 4 ? (this.version = n[0], this.traceId = n[1], this.spanId = n[2], this.traceFlag = n[3]) : (this.traceId = ye.w3cTraceId(), this.spanId = ye.w3cTraceId().substr(0, 16)), this.version.match(/^[0-9a-f]{2}$/g) || (this.version = e.DEFAULT_VERSION, this.traceId = ye.w3cTraceId()), this.version === "00" && i !== 4 && (this.traceId = ye.w3cTraceId(), this.spanId = ye.w3cTraceId().substr(0, 16)), this.version === "ff" && (this.version = e.DEFAULT_VERSION, this.traceId = ye.w3cTraceId(), this.spanId = ye.w3cTraceId().substr(0, 16)), this.version.match(/^0[0-9a-f]$/g) || (this.version = e.DEFAULT_VERSION), this.traceFlag.match(/^[0-9a-f]{2}$/g) || (this.traceFlag = e.DEFAULT_TRACE_FLAG, this.traceId = ye.w3cTraceId()), e.isValidTraceId(this.traceId) || (this.traceId = ye.w3cTraceId()), e.isValidSpanId(this.spanId) || (this.spanId = ye.w3cTraceId().substr(0, 16), this.traceId = ye.w3cTraceId()), this.parentId = this.getBackCompatRequestId();
            }
          else if (r) {
            this.parentId = r.slice();
            var a = w0.getRootId(r);
            e.isValidTraceId(a) || (this.legacyRootId = a, a = ye.w3cTraceId()), r.indexOf("|") !== -1 && (r = r.substring(1 + r.substring(0, r.length - 1).lastIndexOf("."), r.length - 1)), this.traceId = a, this.spanId = r;
          } else
            this.traceId = ye.w3cTraceId(), this.spanId = ye.w3cTraceId().substr(0, 16);
        }
        return e.isValidTraceId = function(t) {
          return t.match(/^[0-9a-f]{32}$/) && t !== "00000000000000000000000000000000";
        }, e.isValidSpanId = function(t) {
          return t.match(/^[0-9a-f]{16}$/) && t !== "0000000000000000";
        }, e.formatOpenTelemetryTraceFlags = function(t) {
          var r = "0" + t.toString(16);
          return r.substring(r.length - 2);
        }, e.prototype.getBackCompatRequestId = function() {
          return "|" + this.traceId + "." + this.spanId + ".";
        }, e.prototype.toString = function() {
          return this.version + "-" + this.traceId + "-" + this.spanId + "-" + this.traceFlag;
        }, e.prototype.updateSpanId = function() {
          this.spanId = ye.w3cTraceId().substr(0, 16);
        }, e.DEFAULT_TRACE_FLAG = "01", e.DEFAULT_VERSION = "00", e;
      }();
      Wv.exports = x0;
    });
    var al = l((Cq, Zv) => {
      "use strict";
      var M0 = function() {
        function e(t) {
          this.fieldmap = [], !!t && (this.fieldmap = this.parseHeader(t));
        }
        return e.prototype.toString = function() {
          var t = this.fieldmap;
          return !t || t.length == 0 ? null : t.join(", ");
        }, e.validateKeyChars = function(t) {
          var r = t.split("@");
          if (r.length == 2) {
            var n = r[0].trim(), i = r[1].trim(), a = Boolean(n.match(/^[\ ]?[a-z0-9\*\-\_/]{1,241}$/)), s = Boolean(i.match(/^[\ ]?[a-z0-9\*\-\_/]{1,14}$/));
            return a && s;
          } else if (r.length == 1)
            return Boolean(t.match(/^[\ ]?[a-z0-9\*\-\_/]{1,256}$/));
          return false;
        }, e.prototype.parseHeader = function(t) {
          var r = [], n = {}, i = t.split(",");
          if (i.length > 32)
            return null;
          for (var a = 0, s = i; a < s.length; a++) {
            var o = s[a], u = o.trim();
            if (u.length !== 0) {
              var c = u.split("=");
              if (c.length !== 2 || !e.validateKeyChars(c[0]) || n[c[0]])
                return null;
              n[c[0]] = true, r.push(u);
            }
          }
          return r;
        }, e.strict = true, e;
      }();
      Zv.exports = M0;
    });
    var Dt = l((Oq, Jv) => {
      "use strict";
      var L0 = function() {
        function e() {
        }
        return e;
      }();
      Jv.exports = L0;
    });
    var tg = l((sl, eg) => {
      "use strict";
      var q0 = sl && sl.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), j0 = Dt(), k0 = function(e) {
        q0(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.properties = {}, r.measurements = {}, r;
        }
        return t;
      }(j0);
      eg.exports = k0;
    });
    var ol = l((Pq, rg) => {
      "use strict";
      var H0 = function() {
        function e() {
        }
        return e;
      }();
      rg.exports = H0;
    });
    var ig = l((Rq, ng) => {
      "use strict";
      var U0 = function() {
        function e() {
          this.applicationVersion = "ai.application.ver", this.deviceId = "ai.device.id", this.deviceLocale = "ai.device.locale", this.deviceModel = "ai.device.model", this.deviceOEMName = "ai.device.oemName", this.deviceOSVersion = "ai.device.osVersion", this.deviceType = "ai.device.type", this.locationIp = "ai.location.ip", this.operationId = "ai.operation.id", this.operationName = "ai.operation.name", this.operationParentId = "ai.operation.parentId", this.operationSyntheticSource = "ai.operation.syntheticSource", this.operationCorrelationVector = "ai.operation.correlationVector", this.sessionId = "ai.session.id", this.sessionIsFirst = "ai.session.isFirst", this.userAccountId = "ai.user.accountId", this.userId = "ai.user.id", this.userAuthUserId = "ai.user.authUserId", this.cloudRole = "ai.cloud.role", this.cloudRoleInstance = "ai.cloud.roleInstance", this.internalSdkVersion = "ai.internal.sdkVersion", this.internalAgentVersion = "ai.internal.agentVersion", this.internalNodeName = "ai.internal.nodeName";
        }
        return e;
      }();
      ng.exports = U0;
    });
    var sg = l((ul, ag) => {
      "use strict";
      var B0 = ul && ul.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), G0 = ol(), F0 = function(e) {
        B0(t, e);
        function t() {
          return e.call(this) || this;
        }
        return t;
      }(G0);
      ag.exports = F0;
    });
    var ll = l((Nq, og) => {
      "use strict";
      var cl;
      (function(e) {
        e[e.Measurement = 0] = "Measurement", e[e.Aggregation = 1] = "Aggregation";
      })(cl || (cl = {}));
      og.exports = cl;
    });
    var cg = l((Dq, ug) => {
      "use strict";
      var V0 = ll(), $0 = function() {
        function e() {
          this.kind = V0.Measurement;
        }
        return e;
      }();
      ug.exports = $0;
    });
    var pg = l((wq, lg) => {
      "use strict";
      var z0 = function() {
        function e() {
          this.ver = 1, this.sampleRate = 100, this.tags = {};
        }
        return e;
      }();
      lg.exports = z0;
    });
    var fl = l((pl, fg) => {
      "use strict";
      var K0 = pl && pl.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), X0 = Dt(), Y0 = function(e) {
        K0(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.properties = {}, r.measurements = {}, r;
        }
        return t;
      }(X0);
      fg.exports = Y0;
    });
    var hg = l((dl, dg) => {
      "use strict";
      var Q0 = dl && dl.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), W0 = Dt(), Z0 = function(e) {
        Q0(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.exceptions = [], r.properties = {}, r.measurements = {}, r;
        }
        return t;
      }(W0);
      dg.exports = Z0;
    });
    var vg = l((xq, _g) => {
      "use strict";
      var J0 = function() {
        function e() {
          this.hasFullStack = true, this.parsedStack = [];
        }
        return e;
      }();
      _g.exports = J0;
    });
    var mg = l((hl, gg) => {
      "use strict";
      var eR = hl && hl.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), tR = Dt(), rR = function(e) {
        eR(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.properties = {}, r;
        }
        return t;
      }(tR);
      gg.exports = rR;
    });
    var yg = l((_l, Eg) => {
      "use strict";
      var nR = _l && _l.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), iR = Dt(), aR = function(e) {
        nR(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.metrics = [], r.properties = {}, r;
        }
        return t;
      }(iR);
      Eg.exports = aR;
    });
    var Sg = l((vl, Tg) => {
      "use strict";
      var sR = vl && vl.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), oR = fl(), uR = function(e) {
        sR(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.properties = {}, r.measurements = {}, r;
        }
        return t;
      }(oR);
      Tg.exports = uR;
    });
    var Ig = l((gl, Ag) => {
      "use strict";
      var cR = gl && gl.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), lR = Dt(), pR = function(e) {
        cR(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.success = true, r.properties = {}, r.measurements = {}, r;
        }
        return t;
      }(lR);
      Ag.exports = pR;
    });
    var Cg = l((ml, bg) => {
      "use strict";
      var fR = ml && ml.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), dR = Dt(), hR = function(e) {
        fR(t, e);
        function t() {
          var r = e.call(this) || this;
          return r.ver = 2, r.properties = {}, r.measurements = {}, r;
        }
        return t;
      }(dR);
      bg.exports = hR;
    });
    var Pg = l((Mq, Og) => {
      "use strict";
      var El;
      (function(e) {
        e[e.Verbose = 0] = "Verbose", e[e.Information = 1] = "Information", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error", e[e.Critical = 4] = "Critical";
      })(El || (El = {}));
      Og.exports = El;
    });
    var Ng = l((Lq, Rg) => {
      "use strict";
      var _R = function() {
        function e() {
        }
        return e;
      }();
      Rg.exports = _R;
    });
    var yl = l((fe) => {
      "use strict";
      Object.defineProperty(fe, "__esModule", { value: true });
      fe.AvailabilityData = tg();
      fe.Base = ol();
      fe.ContextTagKeys = ig();
      fe.Data = sg();
      fe.DataPoint = cg();
      fe.DataPointType = ll();
      fe.Domain = Dt();
      fe.Envelope = pg();
      fe.EventData = fl();
      fe.ExceptionData = hg();
      fe.ExceptionDetails = vg();
      fe.MessageData = mg();
      fe.MetricData = yg();
      fe.PageViewData = Sg();
      fe.RemoteDependencyData = Ig();
      fe.RequestData = Cg();
      fe.SeverityLevel = Pg();
      fe.StackFrame = Ng();
    });
    var Dg = l((Hn) => {
      "use strict";
      Object.defineProperty(Hn, "__esModule", { value: true });
      Hn.domainSupportsProperties = Hn.RemoteDependencyDataConstants = void 0;
      var Fr = yl(), vR = function() {
        function e() {
        }
        return e.TYPE_HTTP = "Http", e.TYPE_AI = "Http (tracked component)", e;
      }();
      Hn.RemoteDependencyDataConstants = vR;
      function gR(e) {
        return "properties" in e || e instanceof Fr.EventData || e instanceof Fr.ExceptionData || e instanceof Fr.MessageData || e instanceof Fr.MetricData || e instanceof Fr.PageViewData || e instanceof Fr.RemoteDependencyData || e instanceof Fr.RequestData;
      }
      Hn.domainSupportsProperties = gR;
    });
    var xg = l((wg) => {
      "use strict";
      Object.defineProperty(wg, "__esModule", { value: true });
    });
    var Lg = l((Mg) => {
      "use strict";
      Object.defineProperty(Mg, "__esModule", { value: true });
    });
    var jg = l((qg) => {
      "use strict";
      Object.defineProperty(qg, "__esModule", { value: true });
    });
    var Hg = l((kg) => {
      "use strict";
      Object.defineProperty(kg, "__esModule", { value: true });
    });
    var Bg = l((Ug) => {
      "use strict";
      Object.defineProperty(Ug, "__esModule", { value: true });
    });
    var Fg = l((Gg) => {
      "use strict";
      Object.defineProperty(Gg, "__esModule", { value: true });
    });
    var $g = l((Vg) => {
      "use strict";
      Object.defineProperty(Vg, "__esModule", { value: true });
    });
    var Kg = l((zg) => {
      "use strict";
      Object.defineProperty(zg, "__esModule", { value: true });
    });
    var Yg = l((Xg) => {
      "use strict";
      Object.defineProperty(Xg, "__esModule", { value: true });
    });
    var Wg = l((Qg) => {
      "use strict";
      Object.defineProperty(Qg, "__esModule", { value: true });
    });
    var Jg = l((Zg) => {
      "use strict";
      Object.defineProperty(Zg, "__esModule", { value: true });
    });
    var tm = l((em) => {
      "use strict";
      Object.defineProperty(em, "__esModule", { value: true });
    });
    var rm = l((st) => {
      "use strict";
      Object.defineProperty(st, "__esModule", { value: true });
      st.TelemetryType = st.TelemetryTypeString = st.baseTypeToTelemetryType = st.telemetryTypeToBaseType = void 0;
      function mR(e) {
        switch (e) {
          case Te.Event:
            return "EventData";
          case Te.Exception:
            return "ExceptionData";
          case Te.Trace:
            return "MessageData";
          case Te.Metric:
            return "MetricData";
          case Te.Request:
            return "RequestData";
          case Te.Dependency:
            return "RemoteDependencyData";
          case Te.Availability:
            return "AvailabilityData";
          case Te.PageView:
            return "PageViewData";
        }
      }
      st.telemetryTypeToBaseType = mR;
      function ER(e) {
        switch (e) {
          case "EventData":
            return Te.Event;
          case "ExceptionData":
            return Te.Exception;
          case "MessageData":
            return Te.Trace;
          case "MetricData":
            return Te.Metric;
          case "RequestData":
            return Te.Request;
          case "RemoteDependencyData":
            return Te.Dependency;
          case "AvailabilityData":
            return Te.Availability;
          case "PageViewData":
            return Te.PageView;
        }
      }
      st.baseTypeToTelemetryType = ER;
      st.TelemetryTypeString = { Event: "EventData", Exception: "ExceptionData", Trace: "MessageData", Metric: "MetricData", Request: "RequestData", Dependency: "RemoteDependencyData", Availability: "AvailabilityData", PageView: "PageViewData" };
      var Te;
      (function(e) {
        e[e.Event = 0] = "Event", e[e.Exception = 1] = "Exception", e[e.Trace = 2] = "Trace", e[e.Metric = 3] = "Metric", e[e.Request = 4] = "Request", e[e.Dependency = 5] = "Dependency", e[e.Availability = 6] = "Availability", e[e.PageView = 7] = "PageView";
      })(Te = st.TelemetryType || (st.TelemetryType = {}));
    });
    var nm = l((_e) => {
      "use strict";
      var yR = _e && _e.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), Ge = _e && _e.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && yR(t, e, r);
      };
      Object.defineProperty(_e, "__esModule", { value: true });
      Ge(xg(), _e);
      Ge(Lg(), _e);
      Ge(jg(), _e);
      Ge(Hg(), _e);
      Ge(Bg(), _e);
      Ge(Fg(), _e);
      Ge($g(), _e);
      Ge(Kg(), _e);
      Ge(Yg(), _e);
      Ge(Wg(), _e);
      Ge(Jg(), _e);
      Ge(tm(), _e);
      Ge(rm(), _e);
    });
    var am = l((im) => {
      "use strict";
      Object.defineProperty(im, "__esModule", { value: true });
    });
    var om = l((sm) => {
      "use strict";
      Object.defineProperty(sm, "__esModule", { value: true });
    });
    var cm = l((um) => {
      "use strict";
      Object.defineProperty(um, "__esModule", { value: true });
    });
    var pm = l((lm) => {
      "use strict";
      Object.defineProperty(lm, "__esModule", { value: true });
    });
    var dm = l((fm) => {
      "use strict";
      Object.defineProperty(fm, "__esModule", { value: true });
    });
    var _m = l((hm) => {
      "use strict";
      Object.defineProperty(hm, "__esModule", { value: true });
    });
    var gm = l((vm) => {
      "use strict";
      Object.defineProperty(vm, "__esModule", { value: true });
    });
    var Em = l((mm) => {
      "use strict";
      Object.defineProperty(mm, "__esModule", { value: true });
    });
    var ym = l((qe) => {
      "use strict";
      var TR = qe && qe.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), nr = qe && qe.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && TR(t, e, r);
      };
      Object.defineProperty(qe, "__esModule", { value: true });
      nr(am(), qe);
      nr(om(), qe);
      nr(cm(), qe);
      nr(pm(), qe);
      nr(dm(), qe);
      nr(_m(), qe);
      nr(gm(), qe);
      nr(Em(), qe);
    });
    var De = l((vt) => {
      "use strict";
      var SR = vt && vt.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), vo = vt && vt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && SR(t, e, r);
      };
      Object.defineProperty(vt, "__esModule", { value: true });
      vo(Dg(), vt);
      vo(yl(), vt);
      vo(nm(), vt);
      vo(ym(), vt);
    });
    var Tl = l((u1, Tm) => {
      "use strict";
      var AR = function() {
        function e() {
        }
        return e.prototype.getUrl = function() {
          return this.url;
        }, e.prototype.RequestParser = function() {
          this.startTime = +new Date();
        }, e.prototype._setStatus = function(t, r) {
          var n = +new Date();
          this.duration = n - this.startTime, this.statusCode = t;
          var i = this.properties || {};
          if (r) {
            if (typeof r == "string")
              i.error = r;
            else if (r instanceof Error)
              i.error = r.message;
            else if (typeof r == "object")
              for (var a in r)
                i[a] = r[a] && r[a].toString && r[a].toString();
          }
          this.properties = i;
        }, e.prototype._isSuccess = function() {
          return 0 < this.statusCode && this.statusCode < 400;
        }, e;
      }();
      Tm.exports = AR;
    });
    var Il = l((Al, Am) => {
      "use strict";
      var IR = Al && Al.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), go = require("url"), bR = De(), Sm = Be(), Fe = jn(), CR = Tl(), ir = Gr(), OR = al(), Sl = Wi(), PR = function(e) {
        IR(t, e);
        function t(r, n) {
          var i = e.call(this) || this;
          return r && (i.method = r.method, i.url = i._getAbsoluteUrl(r), i.startTime = +new Date(), i.socketRemoteAddress = r.socket && r.socket.remoteAddress, i.parseHeaders(r, n), r.connection && (i.connectionRemoteAddress = r.connection.remoteAddress, i.legacySocketRemoteAddress = r.connection.socket && r.connection.socket.remoteAddress)), i;
        }
        return t.prototype.onError = function(r, n) {
          this._setStatus(void 0, r), n && (this.duration = n);
        }, t.prototype.onResponse = function(r, n) {
          this._setStatus(r.statusCode, void 0), n && (this.duration = n);
        }, t.prototype.getRequestTelemetry = function(r) {
          var n = { id: this.requestId, name: this.method + " " + go.parse(this.url).pathname, url: this.url, source: this.sourceCorrelationId, duration: this.duration, resultCode: this.statusCode ? this.statusCode.toString() : null, success: this._isSuccess(), properties: this.properties };
          if (r && r.time ? n.time = r.time : this.startTime && (n.time = new Date(this.startTime)), r) {
            for (var i in r)
              n[i] || (n[i] = r[i]);
            if (r.properties)
              for (var i in r.properties)
                n.properties[i] = r.properties[i];
          }
          return n;
        }, t.prototype.getRequestTags = function(r) {
          var n = {};
          for (var i in r)
            n[i] = r[i];
          return n[t.keys.locationIp] = r[t.keys.locationIp] || this._getIp(), n[t.keys.sessionId] = r[t.keys.sessionId] || this._getId("ai_session"), n[t.keys.userId] = r[t.keys.userId] || this._getId("ai_user"), n[t.keys.userAuthUserId] = r[t.keys.userAuthUserId] || this._getId("ai_authUser"), n[t.keys.operationName] = this.getOperationName(r), n[t.keys.operationParentId] = this.getOperationParentId(r), n[t.keys.operationId] = this.getOperationId(r), n;
        }, t.prototype.getOperationId = function(r) {
          return r[t.keys.operationId] || this.operationId;
        }, t.prototype.getOperationParentId = function(r) {
          return r[t.keys.operationParentId] || this.parentId || this.getOperationId(r);
        }, t.prototype.getOperationName = function(r) {
          return r[t.keys.operationName] || this.method + " " + go.parse(this.url).pathname;
        }, t.prototype.getRequestId = function() {
          return this.requestId;
        }, t.prototype.getCorrelationContextHeader = function() {
          return this.correlationContextHeader;
        }, t.prototype.getTraceparent = function() {
          return this.traceparent;
        }, t.prototype.getTracestate = function() {
          return this.tracestate;
        }, t.prototype.getLegacyRootId = function() {
          return this.legacyRootId;
        }, t.prototype._getAbsoluteUrl = function(r) {
          if (!r.headers)
            return r.url;
          var n = r.connection ? r.connection.encrypted : null, i = go.parse(r.url), a = i.pathname, s = i.search, o = n || r.headers["x-forwarded-proto"] == "https" ? "https" : "http", u = go.format({ protocol: o, host: r.headers.host, pathname: a, search: s });
          return u;
        }, t.prototype._getIp = function() {
          var r = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/, n = function(a) {
            var s = r.exec(a);
            if (s)
              return s[0];
          }, i = n(this.rawHeaders["x-forwarded-for"]) || n(this.rawHeaders["x-client-ip"]) || n(this.rawHeaders["x-real-ip"]) || n(this.connectionRemoteAddress) || n(this.socketRemoteAddress) || n(this.legacySocketRemoteAddress);
          return !i && this.connectionRemoteAddress && this.connectionRemoteAddress.substr && this.connectionRemoteAddress.substr(0, 2) === "::" && (i = "127.0.0.1"), i;
        }, t.prototype._getId = function(r) {
          var n = this.rawHeaders && this.rawHeaders.cookie && typeof this.rawHeaders.cookie == "string" && this.rawHeaders.cookie || "", i = t.parseId(Sm.getCookie(r, n));
          return i;
        }, t.prototype.setBackCompatFromThisTraceContext = function() {
          this.operationId = this.traceparent.traceId, this.traceparent.legacyRootId && (this.legacyRootId = this.traceparent.legacyRootId), this.parentId = this.traceparent.parentId, this.traceparent.updateSpanId(), this.requestId = this.traceparent.getBackCompatRequestId();
        }, t.prototype.parseHeaders = function(r, n) {
          if (this.rawHeaders = r.headers || r.rawHeaders, this.userAgent = r.headers && r.headers["user-agent"], this.sourceCorrelationId = Sm.getCorrelationContextTarget(r, Fe.requestContextSourceKey), r.headers) {
            var i = r.headers[Fe.traceStateHeader] ? r.headers[Fe.traceStateHeader].toString() : null, a = r.headers[Fe.traceparentHeader] ? r.headers[Fe.traceparentHeader].toString() : null, s = r.headers[Fe.requestIdHeader] ? r.headers[Fe.requestIdHeader].toString() : null, o = r.headers[Fe.parentIdHeader] ? r.headers[Fe.parentIdHeader].toString() : null, u = r.headers[Fe.rootIdHeader] ? r.headers[Fe.rootIdHeader].toString() : null;
            this.correlationContextHeader = r.headers[Fe.correlationContextHeader] ? r.headers[Fe.correlationContextHeader].toString() : null, ir.w3cEnabled && (a || i) ? (this.traceparent = new Sl(a ? a.toString() : null), this.tracestate = a && i && new OR(i ? i.toString() : null), this.setBackCompatFromThisTraceContext()) : s ? ir.w3cEnabled ? (this.traceparent = new Sl(null, s), this.setBackCompatFromThisTraceContext()) : (this.parentId = s, this.requestId = ir.generateRequestId(this.parentId), this.operationId = ir.getRootId(this.requestId)) : ir.w3cEnabled ? (this.traceparent = new Sl(), this.traceparent.parentId = o, this.traceparent.legacyRootId = u || o, this.setBackCompatFromThisTraceContext()) : (this.parentId = o, this.requestId = ir.generateRequestId(u || this.parentId), this.correlationContextHeader = null, this.operationId = ir.getRootId(this.requestId)), n && (this.requestId = n, this.operationId = ir.getRootId(this.requestId));
          }
        }, t.parseId = function(r) {
          var n = r.split("|");
          return n.length > 0 ? n[0] : "";
        }, t.keys = new bR.ContextTagKeys(), t;
      }(CR);
      Am.exports = PR;
    });
    var Um = l((b, Hm) => {
      b = Hm.exports = D;
      var H;
      typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? H = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift("SEMVER"), console.log.apply(console, e);
      } : H = function() {
      };
      b.SEMVER_SPEC_VERSION = "2.0.0";
      var bl = 256, mo = Number.MAX_SAFE_INTEGER || 9007199254740991, Cl = 16, G = b.re = [], v = b.src = [], P = 0, Un = P++;
      v[Un] = "0|[1-9]\\d*";
      var Bn = P++;
      v[Bn] = "[0-9]+";
      var Ol = P++;
      v[Ol] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
      var Im = P++;
      v[Im] = "(" + v[Un] + ")\\.(" + v[Un] + ")\\.(" + v[Un] + ")";
      var bm = P++;
      v[bm] = "(" + v[Bn] + ")\\.(" + v[Bn] + ")\\.(" + v[Bn] + ")";
      var Pl = P++;
      v[Pl] = "(?:" + v[Un] + "|" + v[Ol] + ")";
      var Rl = P++;
      v[Rl] = "(?:" + v[Bn] + "|" + v[Ol] + ")";
      var Nl = P++;
      v[Nl] = "(?:-(" + v[Pl] + "(?:\\." + v[Pl] + ")*))";
      var Dl = P++;
      v[Dl] = "(?:-?(" + v[Rl] + "(?:\\." + v[Rl] + ")*))";
      var wl = P++;
      v[wl] = "[0-9A-Za-z-]+";
      var Zi = P++;
      v[Zi] = "(?:\\+(" + v[wl] + "(?:\\." + v[wl] + ")*))";
      var xl = P++, Cm = "v?" + v[Im] + v[Nl] + "?" + v[Zi] + "?";
      v[xl] = "^" + Cm + "$";
      var Ml = "[v=\\s]*" + v[bm] + v[Dl] + "?" + v[Zi] + "?", Ll = P++;
      v[Ll] = "^" + Ml + "$";
      var Gn = P++;
      v[Gn] = "((?:<|>)?=?)";
      var Eo = P++;
      v[Eo] = v[Bn] + "|x|X|\\*";
      var yo = P++;
      v[yo] = v[Un] + "|x|X|\\*";
      var Vr = P++;
      v[Vr] = "[v=\\s]*(" + v[yo] + ")(?:\\.(" + v[yo] + ")(?:\\.(" + v[yo] + ")(?:" + v[Nl] + ")?" + v[Zi] + "?)?)?";
      var Fn = P++;
      v[Fn] = "[v=\\s]*(" + v[Eo] + ")(?:\\.(" + v[Eo] + ")(?:\\.(" + v[Eo] + ")(?:" + v[Dl] + ")?" + v[Zi] + "?)?)?";
      var Om = P++;
      v[Om] = "^" + v[Gn] + "\\s*" + v[Vr] + "$";
      var Pm = P++;
      v[Pm] = "^" + v[Gn] + "\\s*" + v[Fn] + "$";
      var Rm = P++;
      v[Rm] = "(?:^|[^\\d])(\\d{1," + Cl + "})(?:\\.(\\d{1," + Cl + "}))?(?:\\.(\\d{1," + Cl + "}))?(?:$|[^\\d])";
      var To = P++;
      v[To] = "(?:~>?)";
      var So = P++;
      v[So] = "(\\s*)" + v[To] + "\\s+";
      G[So] = new RegExp(v[So], "g");
      var RR = "$1~", Nm = P++;
      v[Nm] = "^" + v[To] + v[Vr] + "$";
      var Dm = P++;
      v[Dm] = "^" + v[To] + v[Fn] + "$";
      var Ao = P++;
      v[Ao] = "(?:\\^)";
      var Io = P++;
      v[Io] = "(\\s*)" + v[Ao] + "\\s+";
      G[Io] = new RegExp(v[Io], "g");
      var NR = "$1^", wm = P++;
      v[wm] = "^" + v[Ao] + v[Vr] + "$";
      var xm = P++;
      v[xm] = "^" + v[Ao] + v[Fn] + "$";
      var ql = P++;
      v[ql] = "^" + v[Gn] + "\\s*(" + Ml + ")$|^$";
      var jl = P++;
      v[jl] = "^" + v[Gn] + "\\s*(" + Cm + ")$|^$";
      var Ji = P++;
      v[Ji] = "(\\s*)" + v[Gn] + "\\s*(" + Ml + "|" + v[Vr] + ")";
      G[Ji] = new RegExp(v[Ji], "g");
      var DR = "$1$2$3", Mm = P++;
      v[Mm] = "^\\s*(" + v[Vr] + ")\\s+-\\s+(" + v[Vr] + ")\\s*$";
      var Lm = P++;
      v[Lm] = "^\\s*(" + v[Fn] + ")\\s+-\\s+(" + v[Fn] + ")\\s*$";
      var qm = P++;
      v[qm] = "(<|>)?=?\\s*\\*";
      for (ar = 0; ar < P; ar++)
        H(ar, v[ar]), G[ar] || (G[ar] = new RegExp(v[ar]));
      var ar;
      b.parse = $r;
      function $r(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof D)
          return e;
        if (typeof e != "string" || e.length > bl)
          return null;
        var r = t.loose ? G[Ll] : G[xl];
        if (!r.test(e))
          return null;
        try {
          return new D(e, t);
        } catch (n) {
          return null;
        }
      }
      b.valid = wR;
      function wR(e, t) {
        var r = $r(e, t);
        return r ? r.version : null;
      }
      b.clean = xR;
      function xR(e, t) {
        var r = $r(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null;
      }
      b.SemVer = D;
      function D(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof D) {
          if (e.loose === t.loose)
            return e;
          e = e.version;
        } else if (typeof e != "string")
          throw new TypeError("Invalid Version: " + e);
        if (e.length > bl)
          throw new TypeError("version is longer than " + bl + " characters");
        if (!(this instanceof D))
          return new D(e, t);
        H("SemVer", e, t), this.options = t, this.loose = !!t.loose;
        var r = e.trim().match(t.loose ? G[Ll] : G[xl]);
        if (!r)
          throw new TypeError("Invalid Version: " + e);
        if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > mo || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > mo || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > mo || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r[4] ? this.prerelease = r[4].split(".").map(function(n) {
          if (/^[0-9]+$/.test(n)) {
            var i = +n;
            if (i >= 0 && i < mo)
              return i;
          }
          return n;
        }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
      }
      D.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
      };
      D.prototype.toString = function() {
        return this.version;
      };
      D.prototype.compare = function(e) {
        return H("SemVer.compare", this.version, this.options, e), e instanceof D || (e = new D(e, this.options)), this.compareMain(e) || this.comparePre(e);
      };
      D.prototype.compareMain = function(e) {
        return e instanceof D || (e = new D(e, this.options)), Vn(this.major, e.major) || Vn(this.minor, e.minor) || Vn(this.patch, e.patch);
      };
      D.prototype.comparePre = function(e) {
        if (e instanceof D || (e = new D(e, this.options)), this.prerelease.length && !e.prerelease.length)
          return -1;
        if (!this.prerelease.length && e.prerelease.length)
          return 1;
        if (!this.prerelease.length && !e.prerelease.length)
          return 0;
        var t = 0;
        do {
          var r = this.prerelease[t], n = e.prerelease[t];
          if (H("prerelease compare", t, r, n), r === void 0 && n === void 0)
            return 0;
          if (n === void 0)
            return 1;
          if (r === void 0)
            return -1;
          if (r === n)
            continue;
          return Vn(r, n);
        } while (++t);
      };
      D.prototype.inc = function(e, t) {
        switch (e) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", t), this.inc("pre", t);
            break;
          case "major":
            (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              for (var r = this.prerelease.length; --r >= 0; )
                typeof this.prerelease[r] == "number" && (this.prerelease[r]++, r = -2);
              r === -1 && this.prerelease.push(0);
            }
            t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
            break;
          default:
            throw new Error("invalid increment argument: " + e);
        }
        return this.format(), this.raw = this.version, this;
      };
      b.inc = MR;
      function MR(e, t, r, n) {
        typeof r == "string" && (n = r, r = void 0);
        try {
          return new D(e, r).inc(t, n).version;
        } catch (i) {
          return null;
        }
      }
      b.diff = LR;
      function LR(e, t) {
        if (kl(e, t))
          return null;
        var r = $r(e), n = $r(t), i = "";
        if (r.prerelease.length || n.prerelease.length) {
          i = "pre";
          var a = "prerelease";
        }
        for (var s in r)
          if ((s === "major" || s === "minor" || s === "patch") && r[s] !== n[s])
            return i + s;
        return a;
      }
      b.compareIdentifiers = Vn;
      var jm = /^[0-9]+$/;
      function Vn(e, t) {
        var r = jm.test(e), n = jm.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
      }
      b.rcompareIdentifiers = qR;
      function qR(e, t) {
        return Vn(t, e);
      }
      b.major = jR;
      function jR(e, t) {
        return new D(e, t).major;
      }
      b.minor = kR;
      function kR(e, t) {
        return new D(e, t).minor;
      }
      b.patch = HR;
      function HR(e, t) {
        return new D(e, t).patch;
      }
      b.compare = wt;
      function wt(e, t, r) {
        return new D(e, r).compare(new D(t, r));
      }
      b.compareLoose = UR;
      function UR(e, t) {
        return wt(e, t, true);
      }
      b.rcompare = BR;
      function BR(e, t, r) {
        return wt(t, e, r);
      }
      b.sort = GR;
      function GR(e, t) {
        return e.sort(function(r, n) {
          return b.compare(r, n, t);
        });
      }
      b.rsort = FR;
      function FR(e, t) {
        return e.sort(function(r, n) {
          return b.rcompare(r, n, t);
        });
      }
      b.gt = ea;
      function ea(e, t, r) {
        return wt(e, t, r) > 0;
      }
      b.lt = bo;
      function bo(e, t, r) {
        return wt(e, t, r) < 0;
      }
      b.eq = kl;
      function kl(e, t, r) {
        return wt(e, t, r) === 0;
      }
      b.neq = km;
      function km(e, t, r) {
        return wt(e, t, r) !== 0;
      }
      b.gte = Hl;
      function Hl(e, t, r) {
        return wt(e, t, r) >= 0;
      }
      b.lte = Ul;
      function Ul(e, t, r) {
        return wt(e, t, r) <= 0;
      }
      b.cmp = Co;
      function Co(e, t, r, n) {
        switch (t) {
          case "===":
            return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
          case "!==":
            return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
          case "":
          case "=":
          case "==":
            return kl(e, r, n);
          case "!=":
            return km(e, r, n);
          case ">":
            return ea(e, r, n);
          case ">=":
            return Hl(e, r, n);
          case "<":
            return bo(e, r, n);
          case "<=":
            return Ul(e, r, n);
          default:
            throw new TypeError("Invalid operator: " + t);
        }
      }
      b.Comparator = Ye;
      function Ye(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof Ye) {
          if (e.loose === !!t.loose)
            return e;
          e = e.value;
        }
        if (!(this instanceof Ye))
          return new Ye(e, t);
        H("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ta ? this.value = "" : this.value = this.operator + this.semver.version, H("comp", this);
      }
      var ta = {};
      Ye.prototype.parse = function(e) {
        var t = this.options.loose ? G[ql] : G[jl], r = e.match(t);
        if (!r)
          throw new TypeError("Invalid comparator: " + e);
        this.operator = r[1], this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new D(r[2], this.options.loose) : this.semver = ta;
      };
      Ye.prototype.toString = function() {
        return this.value;
      };
      Ye.prototype.test = function(e) {
        return H("Comparator.test", e, this.options.loose), this.semver === ta ? true : (typeof e == "string" && (e = new D(e, this.options)), Co(e, this.operator, this.semver, this.options));
      };
      Ye.prototype.intersects = function(e, t) {
        if (!(e instanceof Ye))
          throw new TypeError("a Comparator is required");
        (!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false });
        var r;
        if (this.operator === "")
          return r = new J(e.value, t), Oo(this.value, r, t);
        if (e.operator === "")
          return r = new J(this.value, t), Oo(e.semver, r, t);
        var n = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">"), i = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<"), a = this.semver.version === e.semver.version, s = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<="), o = Co(this.semver, "<", e.semver, t) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<"), u = Co(this.semver, ">", e.semver, t) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
        return n || i || a && s || o || u;
      };
      b.Range = J;
      function J(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof J)
          return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new J(e.raw, t);
        if (e instanceof Ye)
          return new J(e.value, t);
        if (!(this instanceof J))
          return new J(e, t);
        if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(r) {
          return this.parseRange(r.trim());
        }, this).filter(function(r) {
          return r.length;
        }), !this.set.length)
          throw new TypeError("Invalid SemVer Range: " + e);
        this.format();
      }
      J.prototype.format = function() {
        return this.range = this.set.map(function(e) {
          return e.join(" ").trim();
        }).join("||").trim(), this.range;
      };
      J.prototype.toString = function() {
        return this.range;
      };
      J.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var r = t ? G[Lm] : G[Mm];
        e = e.replace(r, JR), H("hyphen replace", e), e = e.replace(G[Ji], DR), H("comparator trim", e, G[Ji]), e = e.replace(G[So], RR), e = e.replace(G[Io], NR), e = e.split(/\s+/).join(" ");
        var n = t ? G[ql] : G[jl], i = e.split(" ").map(function(a) {
          return $R(a, this.options);
        }, this).join(" ").split(/\s+/);
        return this.options.loose && (i = i.filter(function(a) {
          return !!a.match(n);
        })), i = i.map(function(a) {
          return new Ye(a, this.options);
        }, this), i;
      };
      J.prototype.intersects = function(e, t) {
        if (!(e instanceof J))
          throw new TypeError("a Range is required");
        return this.set.some(function(r) {
          return r.every(function(n) {
            return e.set.some(function(i) {
              return i.every(function(a) {
                return n.intersects(a, t);
              });
            });
          });
        });
      };
      b.toComparators = VR;
      function VR(e, t) {
        return new J(e, t).set.map(function(r) {
          return r.map(function(n) {
            return n.value;
          }).join(" ").trim().split(" ");
        });
      }
      function $R(e, t) {
        return H("comp", e, t), e = XR(e, t), H("caret", e), e = zR(e, t), H("tildes", e), e = QR(e, t), H("xrange", e), e = ZR(e, t), H("stars", e), e;
      }
      function we(e) {
        return !e || e.toLowerCase() === "x" || e === "*";
      }
      function zR(e, t) {
        return e.trim().split(/\s+/).map(function(r) {
          return KR(r, t);
        }).join(" ");
      }
      function KR(e, t) {
        var r = t.loose ? G[Dm] : G[Nm];
        return e.replace(r, function(n, i, a, s, o) {
          H("tilde", e, n, i, a, s, o);
          var u;
          return we(i) ? u = "" : we(a) ? u = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : we(s) ? u = ">=" + i + "." + a + ".0 <" + i + "." + (+a + 1) + ".0" : o ? (H("replaceTilde pr", o), u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + (+a + 1) + ".0") : u = ">=" + i + "." + a + "." + s + " <" + i + "." + (+a + 1) + ".0", H("tilde return", u), u;
        });
      }
      function XR(e, t) {
        return e.trim().split(/\s+/).map(function(r) {
          return YR(r, t);
        }).join(" ");
      }
      function YR(e, t) {
        H("caret", e, t);
        var r = t.loose ? G[xm] : G[wm];
        return e.replace(r, function(n, i, a, s, o) {
          H("caret", e, n, i, a, s, o);
          var u;
          return we(i) ? u = "" : we(a) ? u = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : we(s) ? i === "0" ? u = ">=" + i + "." + a + ".0 <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + ".0 <" + (+i + 1) + ".0.0" : o ? (H("replaceCaret pr", o), i === "0" ? a === "0" ? u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + a + "." + (+s + 1) : u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + "." + s + "-" + o + " <" + (+i + 1) + ".0.0") : (H("no pr"), i === "0" ? a === "0" ? u = ">=" + i + "." + a + "." + s + " <" + i + "." + a + "." + (+s + 1) : u = ">=" + i + "." + a + "." + s + " <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + "." + s + " <" + (+i + 1) + ".0.0"), H("caret return", u), u;
        });
      }
      function QR(e, t) {
        return H("replaceXRanges", e, t), e.split(/\s+/).map(function(r) {
          return WR(r, t);
        }).join(" ");
      }
      function WR(e, t) {
        e = e.trim();
        var r = t.loose ? G[Pm] : G[Om];
        return e.replace(r, function(n, i, a, s, o, u) {
          H("xRange", e, n, i, a, s, o, u);
          var c = we(a), p = c || we(s), f = p || we(o), d = f;
          return i === "=" && d && (i = ""), c ? i === ">" || i === "<" ? n = "<0.0.0" : n = "*" : i && d ? (p && (s = 0), o = 0, i === ">" ? (i = ">=", p ? (a = +a + 1, s = 0, o = 0) : (s = +s + 1, o = 0)) : i === "<=" && (i = "<", p ? a = +a + 1 : s = +s + 1), n = i + a + "." + s + "." + o) : p ? n = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : f && (n = ">=" + a + "." + s + ".0 <" + a + "." + (+s + 1) + ".0"), H("xRange return", n), n;
        });
      }
      function ZR(e, t) {
        return H("replaceStars", e, t), e.trim().replace(G[qm], "");
      }
      function JR(e, t, r, n, i, a, s, o, u, c, p, f, d) {
        return we(r) ? t = "" : we(n) ? t = ">=" + r + ".0.0" : we(i) ? t = ">=" + r + "." + n + ".0" : t = ">=" + t, we(u) ? o = "" : we(c) ? o = "<" + (+u + 1) + ".0.0" : we(p) ? o = "<" + u + "." + (+c + 1) + ".0" : f ? o = "<=" + u + "." + c + "." + p + "-" + f : o = "<=" + o, (t + " " + o).trim();
      }
      J.prototype.test = function(e) {
        if (!e)
          return false;
        typeof e == "string" && (e = new D(e, this.options));
        for (var t = 0; t < this.set.length; t++)
          if (eN(this.set[t], e, this.options))
            return true;
        return false;
      };
      function eN(e, t, r) {
        for (var n = 0; n < e.length; n++)
          if (!e[n].test(t))
            return false;
        if (t.prerelease.length && !r.includePrerelease) {
          for (n = 0; n < e.length; n++)
            if (H(e[n].semver), e[n].semver !== ta && e[n].semver.prerelease.length > 0) {
              var i = e[n].semver;
              if (i.major === t.major && i.minor === t.minor && i.patch === t.patch)
                return true;
            }
          return false;
        }
        return true;
      }
      b.satisfies = Oo;
      function Oo(e, t, r) {
        try {
          t = new J(t, r);
        } catch (n) {
          return false;
        }
        return t.test(e);
      }
      b.maxSatisfying = tN;
      function tN(e, t, r) {
        var n = null, i = null;
        try {
          var a = new J(t, r);
        } catch (s) {
          return null;
        }
        return e.forEach(function(s) {
          a.test(s) && (!n || i.compare(s) === -1) && (n = s, i = new D(n, r));
        }), n;
      }
      b.minSatisfying = rN;
      function rN(e, t, r) {
        var n = null, i = null;
        try {
          var a = new J(t, r);
        } catch (s) {
          return null;
        }
        return e.forEach(function(s) {
          a.test(s) && (!n || i.compare(s) === 1) && (n = s, i = new D(n, r));
        }), n;
      }
      b.minVersion = nN;
      function nN(e, t) {
        e = new J(e, t);
        var r = new D("0.0.0");
        if (e.test(r) || (r = new D("0.0.0-0"), e.test(r)))
          return r;
        r = null;
        for (var n = 0; n < e.set.length; ++n) {
          var i = e.set[n];
          i.forEach(function(a) {
            var s = new D(a.semver.version);
            switch (a.operator) {
              case ">":
                s.prerelease.length === 0 ? s.patch++ : s.prerelease.push(0), s.raw = s.format();
              case "":
              case ">=":
                (!r || ea(r, s)) && (r = s);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error("Unexpected operation: " + a.operator);
            }
          });
        }
        return r && e.test(r) ? r : null;
      }
      b.validRange = iN;
      function iN(e, t) {
        try {
          return new J(e, t).range || "*";
        } catch (r) {
          return null;
        }
      }
      b.ltr = aN;
      function aN(e, t, r) {
        return Bl(e, t, "<", r);
      }
      b.gtr = sN;
      function sN(e, t, r) {
        return Bl(e, t, ">", r);
      }
      b.outside = Bl;
      function Bl(e, t, r, n) {
        e = new D(e, n), t = new J(t, n);
        var i, a, s, o, u;
        switch (r) {
          case ">":
            i = ea, a = Ul, s = bo, o = ">", u = ">=";
            break;
          case "<":
            i = bo, a = Hl, s = ea, o = "<", u = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (Oo(e, t, n))
          return false;
        for (var c = 0; c < t.set.length; ++c) {
          var p = t.set[c], f = null, d = null;
          if (p.forEach(function(h) {
            h.semver === ta && (h = new Ye(">=0.0.0")), f = f || h, d = d || h, i(h.semver, f.semver, n) ? f = h : s(h.semver, d.semver, n) && (d = h);
          }), f.operator === o || f.operator === u || (!d.operator || d.operator === o) && a(e, d.semver))
            return false;
          if (d.operator === u && s(e, d.semver))
            return false;
        }
        return true;
      }
      b.prerelease = oN;
      function oN(e, t) {
        var r = $r(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      }
      b.intersects = uN;
      function uN(e, t, r) {
        return e = new J(e, r), t = new J(t, r), e.intersects(t);
      }
      b.coerce = cN;
      function cN(e) {
        if (e instanceof D)
          return e;
        if (typeof e != "string")
          return null;
        var t = e.match(G[Rm]);
        return t == null ? null : $r(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
      }
    });
    var Po = l((c1, Fm) => {
      "use strict";
      function Gl(e) {
        return typeof e == "function";
      }
      var xe = console.error.bind(console);
      function ra(e, t, r) {
        var n = !!e[t] && e.propertyIsEnumerable(t);
        Object.defineProperty(e, t, { configurable: true, enumerable: n, writable: true, value: r });
      }
      function na(e) {
        e && e.logger && (Gl(e.logger) ? xe = e.logger : xe("new logger isn't a function, not replacing"));
      }
      function Bm(e, t, r) {
        if (!e || !e[t]) {
          xe("no original function " + t + " to wrap");
          return;
        }
        if (!r) {
          xe("no wrapper function"), xe(new Error().stack);
          return;
        }
        if (!Gl(e[t]) || !Gl(r)) {
          xe("original object and wrapper must be functions");
          return;
        }
        var n = e[t], i = r(n, t);
        return ra(i, "__original", n), ra(i, "__unwrap", function() {
          e[t] === i && ra(e, t, n);
        }), ra(i, "__wrapped", true), ra(e, t, i), i;
      }
      function lN(e, t, r) {
        if (e)
          Array.isArray(e) || (e = [e]);
        else {
          xe("must provide one or more modules to patch"), xe(new Error().stack);
          return;
        }
        if (!(t && Array.isArray(t))) {
          xe("must provide one or more functions to wrap on modules");
          return;
        }
        e.forEach(function(n) {
          t.forEach(function(i) {
            Bm(n, i, r);
          });
        });
      }
      function Gm(e, t) {
        if (!e || !e[t]) {
          xe("no function to unwrap."), xe(new Error().stack);
          return;
        }
        if (!e[t].__unwrap)
          xe("no original to unwrap to -- has " + t + " already been unwrapped?");
        else
          return e[t].__unwrap();
      }
      function pN(e, t) {
        if (e)
          Array.isArray(e) || (e = [e]);
        else {
          xe("must provide one or more modules to patch"), xe(new Error().stack);
          return;
        }
        if (!(t && Array.isArray(t))) {
          xe("must provide one or more functions to unwrap on modules");
          return;
        }
        e.forEach(function(r) {
          t.forEach(function(n) {
            Gm(r, n);
          });
        });
      }
      na.wrap = Bm;
      na.massWrap = lN;
      na.unwrap = Gm;
      na.massUnwrap = pN;
      Fm.exports = na;
    });
    var Do = l((l1, Km) => {
      "use strict";
      var Vm = Po(), $n = Vm.wrap, Ro = Vm.unwrap, xt = "wrap@before";
      function No(e, t, r) {
        var n = !!e[t] && e.propertyIsEnumerable(t);
        Object.defineProperty(e, t, { configurable: true, enumerable: n, writable: true, value: r });
      }
      function fN(e, t) {
        for (var r = t.length, n = 0; n < r; n++) {
          var i = t[n], a = e[xt];
          if (typeof a == "function")
            a(i);
          else if (Array.isArray(a))
            for (var s = a.length, o = 0; o < s; o++)
              a[o](i);
        }
      }
      function $m(e, t) {
        var r;
        return r = e._events && e._events[t], Array.isArray(r) || (r ? r = [r] : r = []), r;
      }
      function dN(e, t, r) {
        var n = $m(e, t), i = n.filter(function(a) {
          return r.indexOf(a) === -1;
        });
        i.length > 0 && fN(e, i);
      }
      function zm(e, t) {
        if (!!e) {
          var r = e;
          if (typeof e == "function")
            r = t(e);
          else if (Array.isArray(e)) {
            r = [];
            for (var n = 0; n < e.length; n++)
              r[n] = t(e[n]);
          }
          return r;
        }
      }
      Km.exports = function(t, r, n) {
        if (!t || !t.on || !t.addListener || !t.removeListener || !t.emit)
          throw new Error("can only wrap real EEs");
        if (!r)
          throw new Error("must have function to run on listener addition");
        if (!n)
          throw new Error("must have function to wrap listeners when emitting");
        function i(s) {
          return function(u, c) {
            var p = $m(this, u).slice();
            try {
              var f = s.call(this, u, c);
              return dN(this, u, p), f;
            } finally {
              this.on.__wrapped || $n(this, "on", i), this.addListener.__wrapped || $n(this, "addListener", i);
            }
          };
        }
        function a(s) {
          return function(u) {
            if (!this._events || !this._events[u])
              return s.apply(this, arguments);
            var c = this._events[u];
            function p(f) {
              return function() {
                this._events[u] = c;
                try {
                  return f.apply(this, arguments);
                } finally {
                  c = this._events[u], this._events[u] = zm(c, n);
                }
              };
            }
            $n(this, "removeListener", p);
            try {
              return this._events[u] = zm(c, n), s.apply(this, arguments);
            } finally {
              Ro(this, "removeListener"), this._events[u] = c;
            }
          };
        }
        t[xt] ? typeof t[xt] == "function" ? No(t, xt, [t[xt], r]) : Array.isArray(t[xt]) && t[xt].push(r) : No(t, xt, r), t.__wrapped || ($n(t, "addListener", i), $n(t, "on", i), $n(t, "emit", a), No(t, "__unwrap", function() {
          Ro(t, "addListener"), Ro(t, "on"), Ro(t, "emit"), delete t[xt], delete t.__wrapped;
        }), No(t, "__wrapped", true));
      };
    });
    var Wm = l((p1, Qm) => {
      "use strict";
      var L = require("util"), Mt = require("assert"), hN = Do(), X = require("async_hooks"), ia = "cls@contexts", aa = "error@context", ee = process.env.DEBUG_CLS_HOOKED, q = -1;
      Qm.exports = { getNamespace: Xm, createNamespace: _N, destroyNamespace: Ym, reset: vN, ERROR_SYMBOL: aa };
      function Qe(e) {
        this.name = e, this.active = null, this._set = [], this.id = null, this._contexts = new Map(), this._indent = 0;
      }
      Qe.prototype.set = function(t, r) {
        if (!this.active)
          throw new Error("No context available. ns.run() or ns.bind() must be called first.");
        if (this.active[t] = r, ee) {
          let n = " ".repeat(this._indent < 0 ? 0 : this._indent);
          Q(n + "CONTEXT-SET KEY:" + t + "=" + r + " in ns:" + this.name + " currentUid:" + q + " active:" + L.inspect(this.active, { showHidden: true, depth: 2, colors: true }));
        }
        return r;
      };
      Qe.prototype.get = function(t) {
        if (!this.active) {
          if (ee) {
            let r = X.currentId(), n = X.triggerAsyncId(), i = " ".repeat(this._indent < 0 ? 0 : this._indent);
            Q(`${i}CONTEXT-GETTING KEY NO ACTIVE NS: (${this.name}) ${t}=undefined currentUid:${q} asyncHooksCurrentId:${r} triggerId:${n} len:${this._set.length}`);
          }
          return;
        }
        if (ee) {
          let r = X.executionAsyncId(), n = X.triggerAsyncId(), i = " ".repeat(this._indent < 0 ? 0 : this._indent);
          Q(i + "CONTEXT-GETTING KEY:" + t + "=" + this.active[t] + " (" + this.name + ") currentUid:" + q + " active:" + L.inspect(this.active, { showHidden: true, depth: 2, colors: true })), Q(`${i}CONTEXT-GETTING KEY: (${this.name}) ${t}=${this.active[t]} currentUid:${q} asyncHooksCurrentId:${r} triggerId:${n} len:${this._set.length} active:${L.inspect(this.active)}`);
        }
        return this.active[t];
      };
      Qe.prototype.createContext = function() {
        let t = Object.create(this.active ? this.active : Object.prototype);
        if (t._ns_name = this.name, t.id = q, ee) {
          let r = X.executionAsyncId(), n = X.triggerAsyncId(), i = " ".repeat(this._indent < 0 ? 0 : this._indent);
          Q(`${i}CONTEXT-CREATED Context: (${this.name}) currentUid:${q} asyncHooksCurrentId:${r} triggerId:${n} len:${this._set.length} context:${L.inspect(t, { showHidden: true, depth: 2, colors: true })}`);
        }
        return t;
      };
      Qe.prototype.run = function(t) {
        let r = this.createContext();
        this.enter(r);
        try {
          if (ee) {
            let n = X.triggerAsyncId(), i = X.executionAsyncId(), a = " ".repeat(this._indent < 0 ? 0 : this._indent);
            Q(`${a}CONTEXT-RUN BEGIN: (${this.name}) currentUid:${q} triggerId:${n} asyncHooksCurrentId:${i} len:${this._set.length} context:${L.inspect(r)}`);
          }
          return t(r), r;
        } catch (n) {
          throw n && (n[aa] = r), n;
        } finally {
          if (ee) {
            let n = X.triggerAsyncId(), i = X.executionAsyncId(), a = " ".repeat(this._indent < 0 ? 0 : this._indent);
            Q(`${a}CONTEXT-RUN END: (${this.name}) currentUid:${q} triggerId:${n} asyncHooksCurrentId:${i} len:${this._set.length} ${L.inspect(r)}`);
          }
          this.exit(r);
        }
      };
      Qe.prototype.runAndReturn = function(t) {
        let r;
        return this.run(function(n) {
          r = t(n);
        }), r;
      };
      Qe.prototype.runPromise = function(t) {
        let r = this.createContext();
        this.enter(r);
        let n = t(r);
        if (!n || !n.then || !n.catch)
          throw new Error("fn must return a promise.");
        return ee && Q("CONTEXT-runPromise BEFORE: (" + this.name + ") currentUid:" + q + " len:" + this._set.length + " " + L.inspect(r)), n.then((i) => (ee && Q("CONTEXT-runPromise AFTER then: (" + this.name + ") currentUid:" + q + " len:" + this._set.length + " " + L.inspect(r)), this.exit(r), i)).catch((i) => {
          throw i[aa] = r, ee && Q("CONTEXT-runPromise AFTER catch: (" + this.name + ") currentUid:" + q + " len:" + this._set.length + " " + L.inspect(r)), this.exit(r), i;
        });
      };
      Qe.prototype.bind = function(t, r) {
        r || (this.active ? r = this.active : r = this.createContext());
        let n = this;
        return function() {
          n.enter(r);
          try {
            return t.apply(this, arguments);
          } catch (a) {
            throw a && (a[aa] = r), a;
          } finally {
            n.exit(r);
          }
        };
      };
      Qe.prototype.enter = function(t) {
        if (Mt.ok(t, "context must be provided for entering"), ee) {
          let r = X.executionAsyncId(), n = X.triggerAsyncId(), i = " ".repeat(this._indent < 0 ? 0 : this._indent);
          Q(`${i}CONTEXT-ENTER: (${this.name}) currentUid:${q} triggerId:${n} asyncHooksCurrentId:${r} len:${this._set.length} ${L.inspect(t)}`);
        }
        this._set.push(this.active), this.active = t;
      };
      Qe.prototype.exit = function(t) {
        if (Mt.ok(t, "context must be provided for exiting"), ee) {
          let n = X.executionAsyncId(), i = X.triggerAsyncId(), a = " ".repeat(this._indent < 0 ? 0 : this._indent);
          Q(`${a}CONTEXT-EXIT: (${this.name}) currentUid:${q} triggerId:${i} asyncHooksCurrentId:${n} len:${this._set.length} ${L.inspect(t)}`);
        }
        if (this.active === t) {
          Mt.ok(this._set.length, "can't remove top context"), this.active = this._set.pop();
          return;
        }
        let r = this._set.lastIndexOf(t);
        r < 0 ? (ee && Q("??ERROR?? context exiting but not entered - ignoring: " + L.inspect(t)), Mt.ok(r >= 0, `context not currently entered; can't exit. 
` + L.inspect(this) + `
` + L.inspect(t))) : (Mt.ok(r, "can't remove top context"), this._set.splice(r, 1));
      };
      Qe.prototype.bindEmitter = function(t) {
        Mt.ok(t.on && t.addListener && t.emit, "can only bind real EEs");
        let r = this, n = "context@" + this.name;
        function i(s) {
          !s || (s[ia] || (s[ia] = Object.create(null)), s[ia][n] = { namespace: r, context: r.active });
        }
        function a(s) {
          if (!(s && s[ia]))
            return s;
          let o = s, u = s[ia];
          return Object.keys(u).forEach(function(c) {
            let p = u[c];
            o = p.namespace.bind(o, p.context);
          }), o;
        }
        hN(t, i, a);
      };
      Qe.prototype.fromException = function(t) {
        return t[aa];
      };
      function Xm(e) {
        return process.namespaces[e];
      }
      function _N(e) {
        Mt.ok(e, "namespace must be given a name."), ee && Q(`NS-CREATING NAMESPACE (${e})`);
        let t = new Qe(e);
        return t.id = q, X.createHook({ init(n, i, a, s) {
          if (q = X.executionAsyncId(), t.active) {
            if (t._contexts.set(n, t.active), ee) {
              let o = " ".repeat(t._indent < 0 ? 0 : t._indent);
              Q(`${o}INIT [${i}] (${e}) asyncId:${n} currentUid:${q} triggerId:${a} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} resource:${s}`);
            }
          } else if (q === 0) {
            let o = X.triggerAsyncId(), u = t._contexts.get(o);
            if (u) {
              if (t._contexts.set(n, u), ee) {
                let c = " ".repeat(t._indent < 0 ? 0 : t._indent);
                Q(`${c}INIT USING CONTEXT FROM TRIGGERID [${i}] (${e}) asyncId:${n} currentUid:${q} triggerId:${o} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} resource:${s}`);
              }
            } else if (ee) {
              let c = " ".repeat(t._indent < 0 ? 0 : t._indent);
              Q(`${c}INIT MISSING CONTEXT [${i}] (${e}) asyncId:${n} currentUid:${q} triggerId:${o} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} resource:${s}`);
            }
          }
          if (ee && i === "PROMISE") {
            Q(L.inspect(s, { showHidden: true }));
            let o = s.parentId, u = " ".repeat(t._indent < 0 ? 0 : t._indent);
            Q(`${u}INIT RESOURCE-PROMISE [${i}] (${e}) parentId:${o} asyncId:${n} currentUid:${q} triggerId:${a} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} resource:${s}`);
          }
        }, before(n) {
          q = X.executionAsyncId();
          let i;
          if (i = t._contexts.get(n) || t._contexts.get(q), i) {
            if (ee) {
              let a = X.triggerAsyncId(), s = " ".repeat(t._indent < 0 ? 0 : t._indent);
              Q(`${s}BEFORE (${e}) asyncId:${n} currentUid:${q} triggerId:${a} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} context:${L.inspect(i)}`), t._indent += 2;
            }
            t.enter(i);
          } else if (ee) {
            let a = X.triggerAsyncId(), s = " ".repeat(t._indent < 0 ? 0 : t._indent);
            Q(`${s}BEFORE MISSING CONTEXT (${e}) asyncId:${n} currentUid:${q} triggerId:${a} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} namespace._contexts:${L.inspect(t._contexts, { showHidden: true, depth: 2, colors: true })}`), t._indent += 2;
          }
        }, after(n) {
          q = X.executionAsyncId();
          let i;
          if (i = t._contexts.get(n) || t._contexts.get(q), i) {
            if (ee) {
              let a = X.triggerAsyncId();
              t._indent -= 2;
              let s = " ".repeat(t._indent < 0 ? 0 : t._indent);
              Q(`${s}AFTER (${e}) asyncId:${n} currentUid:${q} triggerId:${a} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} context:${L.inspect(i)}`);
            }
            t.exit(i);
          } else if (ee) {
            let a = X.triggerAsyncId();
            t._indent -= 2;
            let s = " ".repeat(t._indent < 0 ? 0 : t._indent);
            Q(`${s}AFTER MISSING CONTEXT (${e}) asyncId:${n} currentUid:${q} triggerId:${a} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} context:${L.inspect(i)}`);
          }
        }, destroy(n) {
          if (q = X.executionAsyncId(), ee) {
            let i = X.triggerAsyncId(), a = " ".repeat(t._indent < 0 ? 0 : t._indent);
            Q(`${a}DESTROY (${e}) currentUid:${q} asyncId:${n} triggerId:${i} active:${L.inspect(t.active, { showHidden: true, depth: 2, colors: true })} context:${L.inspect(t._contexts.get(q))}`);
          }
          t._contexts.delete(n);
        } }).enable(), process.namespaces[e] = t, t;
      }
      function Ym(e) {
        let t = Xm(e);
        Mt.ok(t, `can't delete nonexistent namespace! "` + e + '"'), Mt.ok(t.id, "don't assign to process.namespaces directly! " + L.inspect(t)), process.namespaces[e] = null;
      }
      function vN() {
        process.namespaces && Object.keys(process.namespaces).forEach(function(e) {
          Ym(e);
        }), process.namespaces = Object.create(null);
      }
      process.namespaces = {};
      function Q(...e) {
        ee && process._rawDebug(`${L.format(...e)}`);
      }
    });
    var Jm = l((f1, Zm) => {
      "use strict";
      function gN() {
      }
      Zm.exports = function() {
        let t = this._hooks, r = this._state, n = process.nextTick;
        process.nextTick = function() {
          if (!r.enabled)
            return n.apply(process, arguments);
          let i = new Array(arguments.length);
          for (let u = 0; u < arguments.length; u++)
            i[u] = arguments[u];
          let a = i[0];
          if (typeof a != "function")
            throw new TypeError("callback is not a function");
          let s = new gN(), o = --r.counter;
          return t.init.call(s, o, 0, null, null), i[0] = function() {
            t.pre.call(s, o);
            let u = true;
            try {
              a.apply(this, arguments), u = false;
            } finally {
              u && process.listenerCount("uncaughtException") > 0 && process.once("uncaughtException", function() {
                t.post.call(s, o, true), t.destroy.call(null, o);
              });
            }
            t.post.call(s, o, false), t.destroy.call(null, o);
          }, n.apply(process, i);
        };
      };
    });
    var tE = l((d1, eE) => {
      "use strict";
      function mN() {
      }
      eE.exports = function() {
        let t = this._hooks, r = this._state, n = global.Promise, i = n.prototype.then;
        n.prototype.then = u;
        function a(c, p, f, d) {
          return typeof c != "function" ? d ? s(f) : o(f) : function() {
            t.pre.call(p, f);
            try {
              return c.apply(this, arguments);
            } finally {
              t.post.call(p, f, false), t.destroy.call(null, f);
            }
          };
        }
        function s(c) {
          return function(f) {
            return t.destroy.call(null, c), f;
          };
        }
        function o(c) {
          return function(f) {
            throw t.destroy.call(null, c), f;
          };
        }
        function u(c, p) {
          if (!r.enabled)
            return i.call(this, c, p);
          let f = new mN(), d = --r.counter;
          return t.init.call(f, d, 0, null, null), i.call(this, a(c, f, d, true), a(p, f, d, false));
        }
      };
    });
    var nE = l((h1, rE) => {
      "use strict";
      var Ve = require("timers");
      function EN() {
      }
      function yN() {
      }
      function TN() {
      }
      var SN = new Map(), AN = new Map(), IN = new Map(), Fl = null, Vl = false;
      rE.exports = function() {
        $l(this._hooks, this._state, "setTimeout", "clearTimeout", EN, SN, true), $l(this._hooks, this._state, "setInterval", "clearInterval", yN, AN, false), $l(this._hooks, this._state, "setImmediate", "clearImmediate", TN, IN, true), global.setTimeout = Ve.setTimeout, global.setInterval = Ve.setInterval, global.setImmediate = Ve.setImmediate, global.clearTimeout = Ve.clearTimeout, global.clearInterval = Ve.clearInterval, global.clearImmediate = Ve.clearImmediate;
      };
      function $l(e, t, r, n, i, a, s) {
        let o = Ve[r], u = Ve[n];
        Ve[r] = function() {
          if (!t.enabled)
            return o.apply(Ve, arguments);
          let c = new Array(arguments.length);
          for (let m = 0; m < arguments.length; m++)
            c[m] = arguments[m];
          let p = c[0];
          if (typeof p != "function")
            throw new TypeError('"callback" argument must be a function');
          let f = new i(), d = --t.counter, h;
          return e.init.call(f, d, 0, null, null), c[0] = function() {
            Fl = h, e.pre.call(f, d);
            let m = true;
            try {
              p.apply(this, arguments), m = false;
            } finally {
              m && process.listenerCount("uncaughtException") > 0 && process.once("uncaughtException", function() {
                e.post.call(f, d, true), a.delete(h), e.destroy.call(null, d);
              });
            }
            e.post.call(f, d, false), Fl = null, (s || Vl) && (Vl = false, a.delete(h), e.destroy.call(null, d));
          }, h = o.apply(Ve, c), a.set(h, d), h;
        }, Ve[n] = function(c) {
          if (Fl === c && c !== null)
            Vl = true;
          else if (a.has(c)) {
            let p = a.get(c);
            a.delete(c), e.destroy.call(null, p);
          }
          u.apply(Ve, arguments);
        };
      }
    });
    var zl = l((_1, bN) => {
      bN.exports = { _args: [["async-hook-jl@1.7.6", "/home/runner/work/vscode-extension-telemetry/vscode-extension-telemetry"]], _development: true, _from: "async-hook-jl@1.7.6", _id: "async-hook-jl@1.7.6", _inBundle: false, _integrity: "sha512-gFaHkFfSxTjvoxDMYqDuGHlcRyUuamF8s+ZTtJdDzqjws4mCt7v0vuV79/E2Wr2/riMQgtG4/yUtXWs1gZ7JMg==", _location: "/async-hook-jl", _phantomChildren: {}, _requested: { type: "version", registry: true, raw: "async-hook-jl@1.7.6", name: "async-hook-jl", escapedName: "async-hook-jl", rawSpec: "1.7.6", saveSpec: null, fetchSpec: "1.7.6" }, _requiredBy: ["/cls-hooked"], _resolved: "https://registry.npmjs.org/async-hook-jl/-/async-hook-jl-1.7.6.tgz", _spec: "1.7.6", _where: "/home/runner/work/vscode-extension-telemetry/vscode-extension-telemetry", author: { name: "Andreas Madsen", email: "amwebdk@gmail.com" }, bugs: { url: "https://github.com/jeff-lewis/async-hook-jl/issues" }, dependencies: { "stack-chain": "^1.3.7" }, description: "Inspect the life of handle objects in node", devDependencies: { async: "1.5.x", "cli-color": "1.1.x", endpoint: "0.4.x", eslint: "^3.4.0" }, engines: { node: "^4.7 || >=6.9 || >=7.3" }, homepage: "https://github.com/jeff-lewis/async-hook-jl#readme", keywords: ["async", "async hooks", "inspect", "async wrap"], license: "MIT", main: "./index.js", name: "async-hook-jl", repository: { type: "git", url: "git://github.com/jeff-lewis/async-hook-jl.git" }, scripts: { test: "node ./test/runner.js && eslint ." }, version: "1.7.6" };
    });
    var sE = l((v1, aE) => {
      "use strict";
      var sa = process.binding("async_wrap"), CN = sa.Providers.TIMERWRAP, iE = { nextTick: Jm(), promise: tE(), timers: nE() }, oa = new Set();
      function ON() {
        this.enabled = false, this.counter = 0;
      }
      function Kl() {
        let e = this.initFns = [], t = this.preFns = [], r = this.postFns = [], n = this.destroyFns = [];
        this.init = function(i, a, s, o) {
          if (a === CN) {
            oa.add(i);
            return;
          }
          for (let u of e)
            u(i, this, a, s, o);
        }, this.pre = function(i) {
          if (!oa.has(i))
            for (let a of t)
              a(i, this);
        }, this.post = function(i, a) {
          if (!oa.has(i))
            for (let s of r)
              s(i, this, a);
        }, this.destroy = function(i) {
          if (oa.has(i)) {
            oa.delete(i);
            return;
          }
          for (let a of n)
            a(i);
        };
      }
      Kl.prototype.add = function(e) {
        e.init && this.initFns.push(e.init), e.pre && this.preFns.push(e.pre), e.post && this.postFns.push(e.post), e.destroy && this.destroyFns.push(e.destroy);
      };
      function wo(e, t) {
        let r = e.indexOf(t);
        r !== -1 && e.splice(r, 1);
      }
      Kl.prototype.remove = function(e) {
        e.init && wo(this.initFns, e.init), e.pre && wo(this.preFns, e.pre), e.post && wo(this.postFns, e.post), e.destroy && wo(this.destroyFns, e.destroy);
      };
      function ua() {
        this._state = new ON(), this._hooks = new Kl(), this.version = zl().version, this.providers = sa.Providers;
        for (let e of Object.keys(iE))
          iE[e].call(this);
        process.env.hasOwnProperty("NODE_ASYNC_HOOK_WARNING") && console.warn("warning: you are using async-hook-jl which is unstable."), sa.setupHooks({ init: this._hooks.init, pre: this._hooks.pre, post: this._hooks.post, destroy: this._hooks.destroy });
      }
      aE.exports = ua;
      ua.prototype.addHooks = function(e) {
        this._hooks.add(e);
      };
      ua.prototype.removeHooks = function(e) {
        this._hooks.remove(e);
      };
      ua.prototype.enable = function() {
        this._state.enabled = true, sa.enable();
      };
      ua.prototype.disable = function() {
        this._state.enabled = false, sa.disable();
      };
    });
    var Xl = l((g1, PN) => {
      PN.exports = { _args: [["stack-chain@1.3.7", "/home/runner/work/vscode-extension-telemetry/vscode-extension-telemetry"]], _development: true, _from: "stack-chain@1.3.7", _id: "stack-chain@1.3.7", _inBundle: false, _integrity: "sha1-0ZLJ/06moiyUxN1FkXHj8AzqEoU=", _location: "/stack-chain", _phantomChildren: {}, _requested: { type: "version", registry: true, raw: "stack-chain@1.3.7", name: "stack-chain", escapedName: "stack-chain", rawSpec: "1.3.7", saveSpec: null, fetchSpec: "1.3.7" }, _requiredBy: ["/async-hook-jl"], _resolved: "https://registry.npmjs.org/stack-chain/-/stack-chain-1.3.7.tgz", _spec: "1.3.7", _where: "/home/runner/work/vscode-extension-telemetry/vscode-extension-telemetry", author: { name: "Andreas Madsen", email: "amwebdk@gmail.com" }, bugs: { url: "https://github.com/AndreasMadsen/stack-chain/issues" }, description: "API for combining call site modifiers", devDependencies: { tap: "2.x.x", "uglify-js": "2.5.x" }, homepage: "https://github.com/AndreasMadsen/stack-chain#readme", keywords: ["stack", "chain", "trace", "call site", "concat", "format"], license: "MIT", name: "stack-chain", repository: { type: "git", url: "git://github.com/AndreasMadsen/stack-chain.git" }, scripts: { test: "tap ./test/simple" }, version: "1.3.7" };
    });
    var uE = l((m1, oE) => {
      function RN(e) {
        try {
          return Error.prototype.toString.call(e);
        } catch (t) {
          try {
            return "<error: " + t + ">";
          } catch (r) {
            return "<error>";
          }
        }
      }
      oE.exports = function(t, r) {
        var n = [];
        n.push(RN(t));
        for (var i = 0; i < r.length; i++) {
          var a = r[i], s;
          try {
            s = a.toString();
          } catch (o) {
            try {
              s = "<error: " + o + ">";
            } catch (u) {
              s = "<error>";
            }
          }
          n.push("    at " + s);
        }
        return n.join(`
`);
      };
    });
    var fE = l((E1, pE) => {
      var xo = uE();
      function cE() {
        this.extend = new ca(), this.filter = new ca(), this.format = new la(), this.version = Xl().version;
      }
      var Yl = false;
      cE.prototype.callSite = function e(t) {
        t || (t = {}), Yl = true;
        var r = {};
        Error.captureStackTrace(r, e);
        var n = r.stack;
        return Yl = false, n = n.slice(t.slice || 0), t.extend && (n = this.extend._modify(r, n)), t.filter && (n = this.filter._modify(r, n)), n;
      };
      var sr = new cE();
      function ca() {
        this._modifiers = [];
      }
      ca.prototype._modify = function(e, t) {
        for (var r = 0, n = this._modifiers.length; r < n; r++)
          t = this._modifiers[r](e, t);
        return t;
      };
      ca.prototype.attach = function(e) {
        this._modifiers.push(e);
      };
      ca.prototype.deattach = function(e) {
        var t = this._modifiers.indexOf(e);
        return t === -1 ? false : (this._modifiers.splice(t, 1), true);
      };
      function la() {
        this._formater = xo, this._previous = void 0;
      }
      la.prototype.replace = function(e) {
        e ? this._formater = e : this.restore();
      };
      la.prototype.restore = function() {
        this._formater = xo, this._previous = void 0;
      };
      la.prototype._backup = function() {
        this._previous = this._formater;
      };
      la.prototype._roolback = function() {
        this._previous === xo ? this.replace(void 0) : this.replace(this._previous), this._previous = void 0;
      };
      Error.prepareStackTrace && sr.format.replace(Error.prepareStackTrace);
      var Ql = false;
      function lE(e, t) {
        if (Yl)
          return t;
        if (Ql)
          return xo(e, t);
        var r = t.concat();
        r = sr.extend._modify(e, r), r = sr.filter._modify(e, r), r = r.slice(0, Error.stackTraceLimit), Object.isExtensible(e) && Object.getOwnPropertyDescriptor(e, "callSite") === void 0 && (e.callSite = { original: t, mutated: r }), Ql = true;
        var n = sr.format._formater(e, r);
        return Ql = false, n;
      }
      Object.defineProperty(Error, "prepareStackTrace", { get: function() {
        return lE;
      }, set: function(e) {
        e === lE ? sr.format._roolback() : (sr.format._backup(), sr.format.replace(e));
      } });
      function NN() {
        return this.stack, this.callSite;
      }
      Object.defineProperty(Error.prototype, "callSite", { get: NN, set: function(e) {
        Object.defineProperty(this, "callSite", { value: e, writable: true, configurable: true });
      }, configurable: true });
      pE.exports = sr;
    });
    var Zl = l((y1, Wl) => {
      if (global._stackChain)
        if (global._stackChain.version === Xl().version)
          Wl.exports = global._stackChain;
        else
          throw new Error("Conflicting version of stack-chain found");
      else
        Wl.exports = global._stackChain = fE();
    });
    var dE = l((T1, Jl) => {
      "use strict";
      var DN = sE();
      if (global._asyncHook)
        if (global._asyncHook.version === zl().version)
          Jl.exports = global._asyncHook;
        else
          throw new Error("Conflicting version of async-hook-jl found");
      else
        Zl().filter.attach(function(t, r) {
          return r.filter(function(n) {
            let i = n.getFileName();
            return !(i && i.slice(0, __dirname.length) === __dirname);
          });
        }), Jl.exports = global._asyncHook = new DN();
    });
    var EE = l((S1, mE) => {
      "use strict";
      var ce = require("util"), Lt = require("assert"), wN = Do(), zn = dE(), pa = "cls@contexts", fa = "error@context", hE = [];
      for (let e in zn.providers)
        hE[zn.providers[e]] = e;
      var se = process.env.DEBUG_CLS_HOOKED, de = -1;
      mE.exports = { getNamespace: _E, createNamespace: xN, destroyNamespace: vE, reset: MN, ERROR_SYMBOL: fa };
      function We(e) {
        this.name = e, this.active = null, this._set = [], this.id = null, this._contexts = new Map();
      }
      We.prototype.set = function(t, r) {
        if (!this.active)
          throw new Error("No context available. ns.run() or ns.bind() must be called first.");
        return se && le("    SETTING KEY:" + t + "=" + r + " in ns:" + this.name + " uid:" + de + " active:" + ce.inspect(this.active, true)), this.active[t] = r, r;
      };
      We.prototype.get = function(t) {
        if (!this.active) {
          se && le("    GETTING KEY:" + t + "=undefined " + this.name + " uid:" + de + " active:" + ce.inspect(this.active, true));
          return;
        }
        return se && le("    GETTING KEY:" + t + "=" + this.active[t] + " " + this.name + " uid:" + de + " active:" + ce.inspect(this.active, true)), this.active[t];
      };
      We.prototype.createContext = function() {
        se && le("   CREATING Context: " + this.name + " uid:" + de + " len:" + this._set.length + "  active:" + ce.inspect(this.active, true, 2, true));
        let t = Object.create(this.active ? this.active : Object.prototype);
        return t._ns_name = this.name, t.id = de, se && le("   CREATED Context: " + this.name + " uid:" + de + " len:" + this._set.length + "  context:" + ce.inspect(t, true, 2, true)), t;
      };
      We.prototype.run = function(t) {
        let r = this.createContext();
        this.enter(r);
        try {
          return se && le(" BEFORE RUN: " + this.name + " uid:" + de + " len:" + this._set.length + " " + ce.inspect(r)), t(r), r;
        } catch (n) {
          throw n && (n[fa] = r), n;
        } finally {
          se && le(" AFTER RUN: " + this.name + " uid:" + de + " len:" + this._set.length + " " + ce.inspect(r)), this.exit(r);
        }
      };
      We.prototype.runAndReturn = function(t) {
        var r;
        return this.run(function(n) {
          r = t(n);
        }), r;
      };
      We.prototype.runPromise = function(t) {
        let r = this.createContext();
        this.enter(r);
        let n = t(r);
        if (!n || !n.then || !n.catch)
          throw new Error("fn must return a promise.");
        return se && le(" BEFORE runPromise: " + this.name + " uid:" + de + " len:" + this._set.length + " " + ce.inspect(r)), n.then((i) => (se && le(" AFTER runPromise: " + this.name + " uid:" + de + " len:" + this._set.length + " " + ce.inspect(r)), this.exit(r), i)).catch((i) => {
          throw i[fa] = r, se && le(" AFTER runPromise: " + this.name + " uid:" + de + " len:" + this._set.length + " " + ce.inspect(r)), this.exit(r), i;
        });
      };
      We.prototype.bind = function(t, r) {
        r || (this.active ? r = this.active : r = this.createContext());
        let n = this;
        return function() {
          n.enter(r);
          try {
            return t.apply(this, arguments);
          } catch (a) {
            throw a && (a[fa] = r), a;
          } finally {
            n.exit(r);
          }
        };
      };
      We.prototype.enter = function(t) {
        Lt.ok(t, "context must be provided for entering"), se && le("  ENTER " + this.name + " uid:" + de + " len:" + this._set.length + " context: " + ce.inspect(t)), this._set.push(this.active), this.active = t;
      };
      We.prototype.exit = function(t) {
        if (Lt.ok(t, "context must be provided for exiting"), se && le("  EXIT " + this.name + " uid:" + de + " len:" + this._set.length + " context: " + ce.inspect(t)), this.active === t) {
          Lt.ok(this._set.length, "can't remove top context"), this.active = this._set.pop();
          return;
        }
        let r = this._set.lastIndexOf(t);
        r < 0 ? (se && le("??ERROR?? context exiting but not entered - ignoring: " + ce.inspect(t)), Lt.ok(r >= 0, `context not currently entered; can't exit. 
` + ce.inspect(this) + `
` + ce.inspect(t))) : (Lt.ok(r, "can't remove top context"), this._set.splice(r, 1));
      };
      We.prototype.bindEmitter = function(t) {
        Lt.ok(t.on && t.addListener && t.emit, "can only bind real EEs");
        let r = this, n = "context@" + this.name;
        function i(s) {
          !s || (s[pa] || (s[pa] = Object.create(null)), s[pa][n] = { namespace: r, context: r.active });
        }
        function a(s) {
          if (!(s && s[pa]))
            return s;
          let o = s, u = s[pa];
          return Object.keys(u).forEach(function(c) {
            let p = u[c];
            o = p.namespace.bind(o, p.context);
          }), o;
        }
        wN(t, i, a);
      };
      We.prototype.fromException = function(t) {
        return t[fa];
      };
      function _E(e) {
        return process.namespaces[e];
      }
      function xN(e) {
        Lt.ok(e, "namespace must be given a name."), se && le("CREATING NAMESPACE " + e);
        let t = new We(e);
        return t.id = de, zn.addHooks({ init(r, n, i, a, s) {
          de = r, a ? (t._contexts.set(r, t._contexts.get(a)), se && le("PARENTID: " + e + " uid:" + r + " parent:" + a + " provider:" + i)) : t._contexts.set(de, t.active), se && le("INIT " + e + " uid:" + r + " parent:" + a + " provider:" + hE[i] + " active:" + ce.inspect(t.active, true));
        }, pre(r, n) {
          de = r;
          let i = t._contexts.get(r);
          i ? (se && le(" PRE " + e + " uid:" + r + " handle:" + Mo(n) + " context:" + ce.inspect(i)), t.enter(i)) : se && le(" PRE MISSING CONTEXT " + e + " uid:" + r + " handle:" + Mo(n));
        }, post(r, n) {
          de = r;
          let i = t._contexts.get(r);
          i ? (se && le(" POST " + e + " uid:" + r + " handle:" + Mo(n) + " context:" + ce.inspect(i)), t.exit(i)) : se && le(" POST MISSING CONTEXT " + e + " uid:" + r + " handle:" + Mo(n));
        }, destroy(r) {
          de = r, se && le("DESTROY " + e + " uid:" + r + " context:" + ce.inspect(t._contexts.get(de)) + " active:" + ce.inspect(t.active, true)), t._contexts.delete(r);
        } }), process.namespaces[e] = t, t;
      }
      function vE(e) {
        let t = _E(e);
        Lt.ok(t, `can't delete nonexistent namespace! "` + e + '"'), Lt.ok(t.id, "don't assign to process.namespaces directly! " + ce.inspect(t)), process.namespaces[e] = null;
      }
      function MN() {
        process.namespaces && Object.keys(process.namespaces).forEach(function(e) {
          vE(e);
        }), process.namespaces = Object.create(null);
      }
      process.namespaces = {};
      zn._state && !zn._state.enabled && zn.enable();
      function le(e) {
        process.env.DEBUG && process._rawDebug(e);
      }
      function Mo(e) {
        if (!e)
          return e;
        if (typeof e == "function")
          return e.name ? e.name : (e.toString().trim().match(/^function\s*([^\s(]+)/) || [])[1];
        if (e.constructor && e.constructor.name)
          return e.constructor.name;
      }
      if (se) {
        ep = Zl();
        for (gE in ep.filter._modifiers)
          ep.filter.deattach(gE);
      }
      var ep, gE;
    });
    var yE = l((A1, tp) => {
      "use strict";
      var LN = Um();
      process && LN.gte(process.versions.node, "8.0.0") ? tp.exports = Wm() : tp.exports = EE();
    });
    var jE = l((C, qE) => {
      C = qE.exports = w;
      var U;
      typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? U = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift("SEMVER"), console.log.apply(console, e);
      } : U = function() {
      };
      C.SEMVER_SPEC_VERSION = "2.0.0";
      var rp = 256, Lo = Number.MAX_SAFE_INTEGER || 9007199254740991, np = 16, F = C.re = [], g = C.src = [], R = 0, Kn = R++;
      g[Kn] = "0|[1-9]\\d*";
      var Xn = R++;
      g[Xn] = "[0-9]+";
      var ip = R++;
      g[ip] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
      var TE = R++;
      g[TE] = "(" + g[Kn] + ")\\.(" + g[Kn] + ")\\.(" + g[Kn] + ")";
      var SE = R++;
      g[SE] = "(" + g[Xn] + ")\\.(" + g[Xn] + ")\\.(" + g[Xn] + ")";
      var ap = R++;
      g[ap] = "(?:" + g[Kn] + "|" + g[ip] + ")";
      var sp = R++;
      g[sp] = "(?:" + g[Xn] + "|" + g[ip] + ")";
      var op = R++;
      g[op] = "(?:-(" + g[ap] + "(?:\\." + g[ap] + ")*))";
      var up = R++;
      g[up] = "(?:-?(" + g[sp] + "(?:\\." + g[sp] + ")*))";
      var cp6 = R++;
      g[cp6] = "[0-9A-Za-z-]+";
      var da = R++;
      g[da] = "(?:\\+(" + g[cp6] + "(?:\\." + g[cp6] + ")*))";
      var lp = R++, AE = "v?" + g[TE] + g[op] + "?" + g[da] + "?";
      g[lp] = "^" + AE + "$";
      var pp = "[v=\\s]*" + g[SE] + g[up] + "?" + g[da] + "?", fp = R++;
      g[fp] = "^" + pp + "$";
      var Yn = R++;
      g[Yn] = "((?:<|>)?=?)";
      var qo = R++;
      g[qo] = g[Xn] + "|x|X|\\*";
      var jo = R++;
      g[jo] = g[Kn] + "|x|X|\\*";
      var zr = R++;
      g[zr] = "[v=\\s]*(" + g[jo] + ")(?:\\.(" + g[jo] + ")(?:\\.(" + g[jo] + ")(?:" + g[op] + ")?" + g[da] + "?)?)?";
      var Qn = R++;
      g[Qn] = "[v=\\s]*(" + g[qo] + ")(?:\\.(" + g[qo] + ")(?:\\.(" + g[qo] + ")(?:" + g[up] + ")?" + g[da] + "?)?)?";
      var IE = R++;
      g[IE] = "^" + g[Yn] + "\\s*" + g[zr] + "$";
      var bE = R++;
      g[bE] = "^" + g[Yn] + "\\s*" + g[Qn] + "$";
      var CE = R++;
      g[CE] = "(?:^|[^\\d])(\\d{1," + np + "})(?:\\.(\\d{1," + np + "}))?(?:\\.(\\d{1," + np + "}))?(?:$|[^\\d])";
      var ko = R++;
      g[ko] = "(?:~>?)";
      var Ho = R++;
      g[Ho] = "(\\s*)" + g[ko] + "\\s+";
      F[Ho] = new RegExp(g[Ho], "g");
      var qN = "$1~", OE = R++;
      g[OE] = "^" + g[ko] + g[zr] + "$";
      var PE = R++;
      g[PE] = "^" + g[ko] + g[Qn] + "$";
      var Uo = R++;
      g[Uo] = "(?:\\^)";
      var Bo = R++;
      g[Bo] = "(\\s*)" + g[Uo] + "\\s+";
      F[Bo] = new RegExp(g[Bo], "g");
      var jN = "$1^", RE = R++;
      g[RE] = "^" + g[Uo] + g[zr] + "$";
      var NE = R++;
      g[NE] = "^" + g[Uo] + g[Qn] + "$";
      var dp = R++;
      g[dp] = "^" + g[Yn] + "\\s*(" + pp + ")$|^$";
      var hp = R++;
      g[hp] = "^" + g[Yn] + "\\s*(" + AE + ")$|^$";
      var ha = R++;
      g[ha] = "(\\s*)" + g[Yn] + "\\s*(" + pp + "|" + g[zr] + ")";
      F[ha] = new RegExp(g[ha], "g");
      var kN = "$1$2$3", DE = R++;
      g[DE] = "^\\s*(" + g[zr] + ")\\s+-\\s+(" + g[zr] + ")\\s*$";
      var wE = R++;
      g[wE] = "^\\s*(" + g[Qn] + ")\\s+-\\s+(" + g[Qn] + ")\\s*$";
      var xE = R++;
      g[xE] = "(<|>)?=?\\s*\\*";
      for (or = 0; or < R; or++)
        U(or, g[or]), F[or] || (F[or] = new RegExp(g[or]));
      var or;
      C.parse = Kr;
      function Kr(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof w)
          return e;
        if (typeof e != "string" || e.length > rp)
          return null;
        var r = t.loose ? F[fp] : F[lp];
        if (!r.test(e))
          return null;
        try {
          return new w(e, t);
        } catch (n) {
          return null;
        }
      }
      C.valid = HN;
      function HN(e, t) {
        var r = Kr(e, t);
        return r ? r.version : null;
      }
      C.clean = UN;
      function UN(e, t) {
        var r = Kr(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null;
      }
      C.SemVer = w;
      function w(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof w) {
          if (e.loose === t.loose)
            return e;
          e = e.version;
        } else if (typeof e != "string")
          throw new TypeError("Invalid Version: " + e);
        if (e.length > rp)
          throw new TypeError("version is longer than " + rp + " characters");
        if (!(this instanceof w))
          return new w(e, t);
        U("SemVer", e, t), this.options = t, this.loose = !!t.loose;
        var r = e.trim().match(t.loose ? F[fp] : F[lp]);
        if (!r)
          throw new TypeError("Invalid Version: " + e);
        if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Lo || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > Lo || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > Lo || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r[4] ? this.prerelease = r[4].split(".").map(function(n) {
          if (/^[0-9]+$/.test(n)) {
            var i = +n;
            if (i >= 0 && i < Lo)
              return i;
          }
          return n;
        }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
      }
      w.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version;
      };
      w.prototype.toString = function() {
        return this.version;
      };
      w.prototype.compare = function(e) {
        return U("SemVer.compare", this.version, this.options, e), e instanceof w || (e = new w(e, this.options)), this.compareMain(e) || this.comparePre(e);
      };
      w.prototype.compareMain = function(e) {
        return e instanceof w || (e = new w(e, this.options)), Wn(this.major, e.major) || Wn(this.minor, e.minor) || Wn(this.patch, e.patch);
      };
      w.prototype.comparePre = function(e) {
        if (e instanceof w || (e = new w(e, this.options)), this.prerelease.length && !e.prerelease.length)
          return -1;
        if (!this.prerelease.length && e.prerelease.length)
          return 1;
        if (!this.prerelease.length && !e.prerelease.length)
          return 0;
        var t = 0;
        do {
          var r = this.prerelease[t], n = e.prerelease[t];
          if (U("prerelease compare", t, r, n), r === void 0 && n === void 0)
            return 0;
          if (n === void 0)
            return 1;
          if (r === void 0)
            return -1;
          if (r === n)
            continue;
          return Wn(r, n);
        } while (++t);
      };
      w.prototype.inc = function(e, t) {
        switch (e) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", t), this.inc("pre", t);
            break;
          case "major":
            (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              for (var r = this.prerelease.length; --r >= 0; )
                typeof this.prerelease[r] == "number" && (this.prerelease[r]++, r = -2);
              r === -1 && this.prerelease.push(0);
            }
            t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
            break;
          default:
            throw new Error("invalid increment argument: " + e);
        }
        return this.format(), this.raw = this.version, this;
      };
      C.inc = BN;
      function BN(e, t, r, n) {
        typeof r == "string" && (n = r, r = void 0);
        try {
          return new w(e, r).inc(t, n).version;
        } catch (i) {
          return null;
        }
      }
      C.diff = GN;
      function GN(e, t) {
        if (_p(e, t))
          return null;
        var r = Kr(e), n = Kr(t), i = "";
        if (r.prerelease.length || n.prerelease.length) {
          i = "pre";
          var a = "prerelease";
        }
        for (var s in r)
          if ((s === "major" || s === "minor" || s === "patch") && r[s] !== n[s])
            return i + s;
        return a;
      }
      C.compareIdentifiers = Wn;
      var ME = /^[0-9]+$/;
      function Wn(e, t) {
        var r = ME.test(e), n = ME.test(t);
        return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
      }
      C.rcompareIdentifiers = FN;
      function FN(e, t) {
        return Wn(t, e);
      }
      C.major = VN;
      function VN(e, t) {
        return new w(e, t).major;
      }
      C.minor = $N;
      function $N(e, t) {
        return new w(e, t).minor;
      }
      C.patch = zN;
      function zN(e, t) {
        return new w(e, t).patch;
      }
      C.compare = qt;
      function qt(e, t, r) {
        return new w(e, r).compare(new w(t, r));
      }
      C.compareLoose = KN;
      function KN(e, t) {
        return qt(e, t, true);
      }
      C.rcompare = XN;
      function XN(e, t, r) {
        return qt(t, e, r);
      }
      C.sort = YN;
      function YN(e, t) {
        return e.sort(function(r, n) {
          return C.compare(r, n, t);
        });
      }
      C.rsort = QN;
      function QN(e, t) {
        return e.sort(function(r, n) {
          return C.rcompare(r, n, t);
        });
      }
      C.gt = _a;
      function _a(e, t, r) {
        return qt(e, t, r) > 0;
      }
      C.lt = Go;
      function Go(e, t, r) {
        return qt(e, t, r) < 0;
      }
      C.eq = _p;
      function _p(e, t, r) {
        return qt(e, t, r) === 0;
      }
      C.neq = LE;
      function LE(e, t, r) {
        return qt(e, t, r) !== 0;
      }
      C.gte = vp;
      function vp(e, t, r) {
        return qt(e, t, r) >= 0;
      }
      C.lte = gp;
      function gp(e, t, r) {
        return qt(e, t, r) <= 0;
      }
      C.cmp = Fo;
      function Fo(e, t, r, n) {
        switch (t) {
          case "===":
            return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
          case "!==":
            return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
          case "":
          case "=":
          case "==":
            return _p(e, r, n);
          case "!=":
            return LE(e, r, n);
          case ">":
            return _a(e, r, n);
          case ">=":
            return vp(e, r, n);
          case "<":
            return Go(e, r, n);
          case "<=":
            return gp(e, r, n);
          default:
            throw new TypeError("Invalid operator: " + t);
        }
      }
      C.Comparator = Ze;
      function Ze(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof Ze) {
          if (e.loose === !!t.loose)
            return e;
          e = e.value;
        }
        if (!(this instanceof Ze))
          return new Ze(e, t);
        U("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === va ? this.value = "" : this.value = this.operator + this.semver.version, U("comp", this);
      }
      var va = {};
      Ze.prototype.parse = function(e) {
        var t = this.options.loose ? F[dp] : F[hp], r = e.match(t);
        if (!r)
          throw new TypeError("Invalid comparator: " + e);
        this.operator = r[1], this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new w(r[2], this.options.loose) : this.semver = va;
      };
      Ze.prototype.toString = function() {
        return this.value;
      };
      Ze.prototype.test = function(e) {
        return U("Comparator.test", e, this.options.loose), this.semver === va ? true : (typeof e == "string" && (e = new w(e, this.options)), Fo(e, this.operator, this.semver, this.options));
      };
      Ze.prototype.intersects = function(e, t) {
        if (!(e instanceof Ze))
          throw new TypeError("a Comparator is required");
        (!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false });
        var r;
        if (this.operator === "")
          return r = new te(e.value, t), Vo(this.value, r, t);
        if (e.operator === "")
          return r = new te(this.value, t), Vo(e.semver, r, t);
        var n = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">"), i = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<"), a = this.semver.version === e.semver.version, s = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<="), o = Fo(this.semver, "<", e.semver, t) && (this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<"), u = Fo(this.semver, ">", e.semver, t) && (this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">");
        return n || i || a && s || o || u;
      };
      C.Range = te;
      function te(e, t) {
        if ((!t || typeof t != "object") && (t = { loose: !!t, includePrerelease: false }), e instanceof te)
          return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new te(e.raw, t);
        if (e instanceof Ze)
          return new te(e.value, t);
        if (!(this instanceof te))
          return new te(e, t);
        if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(r) {
          return this.parseRange(r.trim());
        }, this).filter(function(r) {
          return r.length;
        }), !this.set.length)
          throw new TypeError("Invalid SemVer Range: " + e);
        this.format();
      }
      te.prototype.format = function() {
        return this.range = this.set.map(function(e) {
          return e.join(" ").trim();
        }).join("||").trim(), this.range;
      };
      te.prototype.toString = function() {
        return this.range;
      };
      te.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var r = t ? F[wE] : F[DE];
        e = e.replace(r, sD), U("hyphen replace", e), e = e.replace(F[ha], kN), U("comparator trim", e, F[ha]), e = e.replace(F[Ho], qN), e = e.replace(F[Bo], jN), e = e.split(/\s+/).join(" ");
        var n = t ? F[dp] : F[hp], i = e.split(" ").map(function(a) {
          return ZN(a, this.options);
        }, this).join(" ").split(/\s+/);
        return this.options.loose && (i = i.filter(function(a) {
          return !!a.match(n);
        })), i = i.map(function(a) {
          return new Ze(a, this.options);
        }, this), i;
      };
      te.prototype.intersects = function(e, t) {
        if (!(e instanceof te))
          throw new TypeError("a Range is required");
        return this.set.some(function(r) {
          return r.every(function(n) {
            return e.set.some(function(i) {
              return i.every(function(a) {
                return n.intersects(a, t);
              });
            });
          });
        });
      };
      C.toComparators = WN;
      function WN(e, t) {
        return new te(e, t).set.map(function(r) {
          return r.map(function(n) {
            return n.value;
          }).join(" ").trim().split(" ");
        });
      }
      function ZN(e, t) {
        return U("comp", e, t), e = tD(e, t), U("caret", e), e = JN(e, t), U("tildes", e), e = nD(e, t), U("xrange", e), e = aD(e, t), U("stars", e), e;
      }
      function Me(e) {
        return !e || e.toLowerCase() === "x" || e === "*";
      }
      function JN(e, t) {
        return e.trim().split(/\s+/).map(function(r) {
          return eD(r, t);
        }).join(" ");
      }
      function eD(e, t) {
        var r = t.loose ? F[PE] : F[OE];
        return e.replace(r, function(n, i, a, s, o) {
          U("tilde", e, n, i, a, s, o);
          var u;
          return Me(i) ? u = "" : Me(a) ? u = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : Me(s) ? u = ">=" + i + "." + a + ".0 <" + i + "." + (+a + 1) + ".0" : o ? (U("replaceTilde pr", o), u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + (+a + 1) + ".0") : u = ">=" + i + "." + a + "." + s + " <" + i + "." + (+a + 1) + ".0", U("tilde return", u), u;
        });
      }
      function tD(e, t) {
        return e.trim().split(/\s+/).map(function(r) {
          return rD(r, t);
        }).join(" ");
      }
      function rD(e, t) {
        U("caret", e, t);
        var r = t.loose ? F[NE] : F[RE];
        return e.replace(r, function(n, i, a, s, o) {
          U("caret", e, n, i, a, s, o);
          var u;
          return Me(i) ? u = "" : Me(a) ? u = ">=" + i + ".0.0 <" + (+i + 1) + ".0.0" : Me(s) ? i === "0" ? u = ">=" + i + "." + a + ".0 <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + ".0 <" + (+i + 1) + ".0.0" : o ? (U("replaceCaret pr", o), i === "0" ? a === "0" ? u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + a + "." + (+s + 1) : u = ">=" + i + "." + a + "." + s + "-" + o + " <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + "." + s + "-" + o + " <" + (+i + 1) + ".0.0") : (U("no pr"), i === "0" ? a === "0" ? u = ">=" + i + "." + a + "." + s + " <" + i + "." + a + "." + (+s + 1) : u = ">=" + i + "." + a + "." + s + " <" + i + "." + (+a + 1) + ".0" : u = ">=" + i + "." + a + "." + s + " <" + (+i + 1) + ".0.0"), U("caret return", u), u;
        });
      }
      function nD(e, t) {
        return U("replaceXRanges", e, t), e.split(/\s+/).map(function(r) {
          return iD(r, t);
        }).join(" ");
      }
      function iD(e, t) {
        e = e.trim();
        var r = t.loose ? F[bE] : F[IE];
        return e.replace(r, function(n, i, a, s, o, u) {
          U("xRange", e, n, i, a, s, o, u);
          var c = Me(a), p = c || Me(s), f = p || Me(o), d = f;
          return i === "=" && d && (i = ""), c ? i === ">" || i === "<" ? n = "<0.0.0" : n = "*" : i && d ? (p && (s = 0), o = 0, i === ">" ? (i = ">=", p ? (a = +a + 1, s = 0, o = 0) : (s = +s + 1, o = 0)) : i === "<=" && (i = "<", p ? a = +a + 1 : s = +s + 1), n = i + a + "." + s + "." + o) : p ? n = ">=" + a + ".0.0 <" + (+a + 1) + ".0.0" : f && (n = ">=" + a + "." + s + ".0 <" + a + "." + (+s + 1) + ".0"), U("xRange return", n), n;
        });
      }
      function aD(e, t) {
        return U("replaceStars", e, t), e.trim().replace(F[xE], "");
      }
      function sD(e, t, r, n, i, a, s, o, u, c, p, f, d) {
        return Me(r) ? t = "" : Me(n) ? t = ">=" + r + ".0.0" : Me(i) ? t = ">=" + r + "." + n + ".0" : t = ">=" + t, Me(u) ? o = "" : Me(c) ? o = "<" + (+u + 1) + ".0.0" : Me(p) ? o = "<" + u + "." + (+c + 1) + ".0" : f ? o = "<=" + u + "." + c + "." + p + "-" + f : o = "<=" + o, (t + " " + o).trim();
      }
      te.prototype.test = function(e) {
        if (!e)
          return false;
        typeof e == "string" && (e = new w(e, this.options));
        for (var t = 0; t < this.set.length; t++)
          if (oD(this.set[t], e, this.options))
            return true;
        return false;
      };
      function oD(e, t, r) {
        for (var n = 0; n < e.length; n++)
          if (!e[n].test(t))
            return false;
        if (t.prerelease.length && !r.includePrerelease) {
          for (n = 0; n < e.length; n++)
            if (U(e[n].semver), e[n].semver !== va && e[n].semver.prerelease.length > 0) {
              var i = e[n].semver;
              if (i.major === t.major && i.minor === t.minor && i.patch === t.patch)
                return true;
            }
          return false;
        }
        return true;
      }
      C.satisfies = Vo;
      function Vo(e, t, r) {
        try {
          t = new te(t, r);
        } catch (n) {
          return false;
        }
        return t.test(e);
      }
      C.maxSatisfying = uD;
      function uD(e, t, r) {
        var n = null, i = null;
        try {
          var a = new te(t, r);
        } catch (s) {
          return null;
        }
        return e.forEach(function(s) {
          a.test(s) && (!n || i.compare(s) === -1) && (n = s, i = new w(n, r));
        }), n;
      }
      C.minSatisfying = cD;
      function cD(e, t, r) {
        var n = null, i = null;
        try {
          var a = new te(t, r);
        } catch (s) {
          return null;
        }
        return e.forEach(function(s) {
          a.test(s) && (!n || i.compare(s) === 1) && (n = s, i = new w(n, r));
        }), n;
      }
      C.minVersion = lD;
      function lD(e, t) {
        e = new te(e, t);
        var r = new w("0.0.0");
        if (e.test(r) || (r = new w("0.0.0-0"), e.test(r)))
          return r;
        r = null;
        for (var n = 0; n < e.set.length; ++n) {
          var i = e.set[n];
          i.forEach(function(a) {
            var s = new w(a.semver.version);
            switch (a.operator) {
              case ">":
                s.prerelease.length === 0 ? s.patch++ : s.prerelease.push(0), s.raw = s.format();
              case "":
              case ">=":
                (!r || _a(r, s)) && (r = s);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error("Unexpected operation: " + a.operator);
            }
          });
        }
        return r && e.test(r) ? r : null;
      }
      C.validRange = pD;
      function pD(e, t) {
        try {
          return new te(e, t).range || "*";
        } catch (r) {
          return null;
        }
      }
      C.ltr = fD;
      function fD(e, t, r) {
        return mp(e, t, "<", r);
      }
      C.gtr = dD;
      function dD(e, t, r) {
        return mp(e, t, ">", r);
      }
      C.outside = mp;
      function mp(e, t, r, n) {
        e = new w(e, n), t = new te(t, n);
        var i, a, s, o, u;
        switch (r) {
          case ">":
            i = _a, a = gp, s = Go, o = ">", u = ">=";
            break;
          case "<":
            i = Go, a = vp, s = _a, o = "<", u = "<=";
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (Vo(e, t, n))
          return false;
        for (var c = 0; c < t.set.length; ++c) {
          var p = t.set[c], f = null, d = null;
          if (p.forEach(function(h) {
            h.semver === va && (h = new Ze(">=0.0.0")), f = f || h, d = d || h, i(h.semver, f.semver, n) ? f = h : s(h.semver, d.semver, n) && (d = h);
          }), f.operator === o || f.operator === u || (!d.operator || d.operator === o) && a(e, d.semver))
            return false;
          if (d.operator === u && s(e, d.semver))
            return false;
        }
        return true;
      }
      C.prerelease = hD;
      function hD(e, t) {
        var r = Kr(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      }
      C.intersects = _D;
      function _D(e, t, r) {
        return e = new te(e, r), t = new te(t, r), e.intersects(t);
      }
      C.coerce = vD;
      function vD(e) {
        if (e instanceof w)
          return e;
        if (typeof e != "string")
          return null;
        var t = e.match(F[CE]);
        return t == null ? null : Kr(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"));
      }
    });
    var UE = l((I1, HE) => {
      var gD = Po().wrap, Ep = 1 << 0, yp = 1 << 1, Tp = 1 << 2, $o = 1 << 3, V = [], mD = 0, Oe = false, ur = [], Zn, Sp;
      function Ap(e, t) {
        var r = e.length, n = t.length, i = [];
        if (r === 0 && n === 0)
          return i;
        for (var a = 0; a < r; a++)
          i[a] = e[a];
        if (n === 0)
          return i;
        for (var s = 0; s < n; s++) {
          var o = true;
          for (a = 0; a < r; a++)
            if (e[a].uid === t[s].uid) {
              o = false;
              break;
            }
          o && i.push(t[s]);
        }
        return i;
      }
      process._fatalException ? (zo = false, Zn = function(t) {
        var r = V.length;
        if (zo || r === 0)
          return false;
        var n = false;
        zo = true;
        for (var i = 0; i < r; ++i) {
          var a = V[i];
          if ((a.flags & $o) != 0) {
            var s = Jn && Jn[a.uid];
            n = a.error(s, t) || n;
          }
        }
        return zo = false, ur.length > 0 && (V = ur.pop()), Jn = void 0, n && !Oe;
      }, Sp = function(t, r, n) {
        var i = [];
        Oe = true;
        for (var a = 0; a < n; ++a) {
          var s = r[a];
          if (i[s.uid] = s.data, (s.flags & Ep) != 0) {
            var o = s.create(s.data);
            o !== void 0 && (i[s.uid] = o);
          }
        }
        return Oe = false, function() {
          Jn = i, ur.push(V), V = Ap(r, V), Oe = true;
          for (var u = 0; u < n; ++u)
            (r[u].flags & yp) > 0 && r[u].before(this, i[r[u].uid]);
          Oe = false;
          var c = t.apply(this, arguments);
          for (Oe = true, u = 0; u < n; ++u)
            (r[u].flags & Tp) > 0 && r[u].after(this, i[r[u].uid]);
          return Oe = false, V = ur.pop(), Jn = void 0, c;
        };
      }, gD(process, "_fatalException", function(e) {
        return function(r) {
          return Zn(r) || e(r);
        };
      })) : (Ip = false, Zn = function(t) {
        if (Ip)
          throw t;
        for (var r = false, n = V.length, i = 0; i < n; ++i) {
          var a = V[i];
          (a.flags & $o) != 0 && (r = a.error(null, t) || r);
        }
        if (!r && Oe)
          throw t;
      }, Sp = function(t, r, n) {
        var i = [];
        Oe = true;
        for (var a = 0; a < n; ++a) {
          var s = r[a];
          if (i[s.uid] = s.data, (s.flags & Ep) != 0) {
            var o = s.create(s.data);
            o !== void 0 && (i[s.uid] = o);
          }
        }
        return Oe = false, function() {
          var u = false, c = false;
          ur.push(V), V = Ap(r, V), Oe = true;
          for (var p = 0; p < n; ++p)
            (r[p].flags & yp) > 0 && r[p].before(this, i[r[p].uid]);
          Oe = false;
          var f;
          try {
            f = t.apply(this, arguments);
          } catch (d) {
            u = true;
            for (var p = 0; p < n; ++p)
              if ((V[p].flags & $o) != 0)
                try {
                  c = V[p].error(i[r[p].uid], d) || c;
                } catch (m) {
                  throw Ip = true, m;
                }
            if (!c)
              throw process.removeListener("uncaughtException", Zn), process._originalNextTick(function() {
                process.addListener("uncaughtException", Zn);
              }), d;
          } finally {
            if (!u || c) {
              for (Oe = true, p = 0; p < n; ++p)
                (r[p].flags & Tp) > 0 && r[p].after(this, i[r[p].uid]);
              Oe = false;
            }
            V = ur.pop();
          }
          return f;
        };
      }, process.addListener("uncaughtException", Zn));
      var zo, Jn, Ip;
      function ED(e, t, r) {
        Oe = true;
        for (var n = 0; n < r; ++n) {
          var i = t[n];
          i.create && i.create(i.data);
        }
        return Oe = false, function() {
          ur.push(V), V = Ap(t, V);
          var a = e.apply(this, arguments);
          return V = ur.pop(), a;
        };
      }
      function yD(e) {
        var t = V.length;
        if (t === 0)
          return e;
        for (var r = V.slice(), n = 0; n < t; ++n)
          if (r[n].flags > 0)
            return Sp(e, r, t);
        return ED(e, r, t);
      }
      function gt(e, t) {
        typeof e.create == "function" && (this.create = e.create, this.flags |= Ep), typeof e.before == "function" && (this.before = e.before, this.flags |= yp), typeof e.after == "function" && (this.after = e.after, this.flags |= Tp), typeof e.error == "function" && (this.error = e.error, this.flags |= $o), this.uid = ++mD, this.data = t === void 0 ? null : t;
      }
      gt.prototype.create = void 0;
      gt.prototype.before = void 0;
      gt.prototype.after = void 0;
      gt.prototype.error = void 0;
      gt.prototype.data = void 0;
      gt.prototype.uid = 0;
      gt.prototype.flags = 0;
      function kE(e, t) {
        if (typeof e != "object" || !e)
          throw new TypeError("callbacks argument must be an object");
        return e instanceof gt ? e : new gt(e, t);
      }
      function TD(e, t) {
        var r;
        e instanceof gt ? r = e : r = kE(e, t);
        for (var n = false, i = 0; i < V.length; i++)
          if (r === V[i]) {
            n = true;
            break;
          }
        return n || V.push(r), r;
      }
      function SD(e) {
        for (var t = 0; t < V.length; t++)
          if (e === V[t]) {
            V.splice(t, 1);
            break;
          }
      }
      process.createAsyncListener = kE;
      process.addAsyncListener = TD;
      process.removeAsyncListener = SD;
      HE.exports = yD;
    });
    var GE = l((C1, BE) => {
      "use strict";
      BE.exports = (e, t) => class extends e {
        constructor(n) {
          var i, a;
          super(o);
          var s = this;
          try {
            n.apply(i, a);
          } catch (u) {
            a[1](u);
          }
          return s;
          function o(u, c) {
            i = this, a = [p, f];
            function p(d) {
              return t(s, false), u(d);
            }
            function f(d) {
              return t(s, false), c(d);
            }
          }
        }
      };
    });
    var YE = l(() => {
      "use strict";
      if (process.addAsyncListener)
        throw new Error("Don't require polyfill unless needed");
      var FE = Po(), Ko = jE(), je = FE.wrap, cr = FE.massWrap, re = UE(), AD = require("util"), ID = Ko.gte(process.version, "6.0.0"), bp = Ko.gte(process.version, "7.0.0"), bD = Ko.gte(process.version, "8.0.0"), CD = Ko.gte(process.version, "11.0.0"), mt = require("net");
      bp && !mt._normalizeArgs ? mt._normalizeArgs = function(e) {
        if (e.length === 0)
          return [{}, null];
        var t = e[0], r = {};
        typeof t == "object" && t !== null ? r = t : DD(t) ? r.path = t : (r.port = t, e.length > 1 && typeof e[1] == "string" && (r.host = e[1]));
        var n = e[e.length - 1];
        return typeof n != "function" ? [r, null] : [r, n];
      } : !bp && !mt._normalizeConnectArgs && (mt._normalizeConnectArgs = function(e) {
        var t = {};
        function r(i) {
          return (i = Number(i)) >= 0 ? i : false;
        }
        typeof e[0] == "object" && e[0] !== null ? t = e[0] : typeof e[0] == "string" && r(e[0]) === false ? t.path = e[0] : (t.port = e[0], typeof e[1] == "string" && (t.host = e[1]));
        var n = e[e.length - 1];
        return typeof n == "function" ? [t, n] : [t];
      });
      "_setUpListenHandle" in mt.Server.prototype ? je(mt.Server.prototype, "_setUpListenHandle", VE) : je(mt.Server.prototype, "_listen2", VE);
      function VE(e) {
        return function() {
          this.on("connection", function(t) {
            t._handle && (t._handle.onread = re(t._handle.onread));
          });
          try {
            return e.apply(this, arguments);
          } finally {
            this._handle && this._handle.onconnection && (this._handle.onconnection = re(this._handle.onconnection));
          }
        };
      }
      function $E(e) {
        if (e && e._handle) {
          var t = e._handle;
          t._originalOnread || (t._originalOnread = t.onread), t.onread = re(t._originalOnread);
        }
      }
      je(mt.Socket.prototype, "connect", function(e) {
        return function() {
          var t;
          bD && Array.isArray(arguments[0]) && Object.getOwnPropertySymbols(arguments[0]).length > 0 ? t = arguments[0] : t = bp ? mt._normalizeArgs(arguments) : mt._normalizeConnectArgs(arguments), t[1] && (t[1] = re(t[1]));
          var r = e.apply(this, t);
          return $E(this), r;
        };
      });
      var OD = require("http");
      je(OD.Agent.prototype, "addRequest", function(e) {
        return function(t) {
          var r = t.onSocket;
          return t.onSocket = re(function(n) {
            return $E(n), r.apply(this, arguments);
          }), e.apply(this, arguments);
        };
      });
      var Cp = require("child_process");
      function zE(e) {
        Array.isArray(e.stdio) && e.stdio.forEach(function(t) {
          t && t._handle && (t._handle.onread = re(t._handle.onread), je(t._handle, "close", Yo));
        }), e._handle && (e._handle.onexit = re(e._handle.onexit));
      }
      Cp.ChildProcess ? je(Cp.ChildProcess.prototype, "spawn", function(e) {
        return function() {
          var t = e.apply(this, arguments);
          return zE(this), t;
        };
      }) : cr(Cp, ["execFile", "fork", "spawn"], function(e) {
        return function() {
          var t = e.apply(this, arguments);
          return zE(t), t;
        };
      });
      process._fatalException || (process._originalNextTick = process.nextTick);
      var Op = [];
      process._nextDomainTick && Op.push("_nextDomainTick");
      process._tickDomainCallback && Op.push("_tickDomainCallback");
      cr(process, Op, Et);
      je(process, "nextTick", Yo);
      var Pp = ["setTimeout", "setInterval"];
      global.setImmediate && Pp.push("setImmediate");
      var KE = require("timers"), PD = global.setTimeout === KE.setTimeout;
      cr(KE, Pp, Yo);
      PD && cr(global, Pp, Yo);
      var Rp = require("dns");
      cr(Rp, ["lookup", "resolve", "resolve4", "resolve6", "resolveCname", "resolveMx", "resolveNs", "resolveTxt", "resolveSrv", "reverse"], Et);
      Rp.resolveNaptr && je(Rp, "resolveNaptr", Et);
      var Xr = require("fs");
      cr(Xr, ["watch", "rename", "truncate", "chown", "fchown", "chmod", "fchmod", "stat", "lstat", "fstat", "link", "symlink", "readlink", "realpath", "unlink", "rmdir", "mkdir", "readdir", "close", "open", "utimes", "futimes", "fsync", "write", "read", "readFile", "writeFile", "appendFile", "watchFile", "unwatchFile", "exists"], Et);
      Xr.lchown && je(Xr, "lchown", Et);
      Xr.lchmod && je(Xr, "lchmod", Et);
      Xr.ftruncate && je(Xr, "ftruncate", Et);
      var ga;
      try {
        ga = require("zlib");
      } catch (e) {
      }
      ga && ga.Deflate && ga.Deflate.prototype && (Yr = Object.getPrototypeOf(ga.Deflate.prototype), Yr._transform ? je(Yr, "_transform", Et) : Yr.write && Yr.flush && Yr.end && cr(Yr, ["write", "flush", "end"], Et));
      var Yr, Np;
      try {
        Np = require("crypto");
      } catch (e) {
      }
      Np && (Dp = ["pbkdf2", "randomBytes"], CD || Dp.push("pseudoRandomBytes"), cr(Np, Dp, Et));
      var Dp, Xo = !!global.Promise && Promise.toString() === "function Promise() { [native code] }" && Promise.toString.toString() === "function toString() { [native code] }";
      Xo && (XE = process.addAsyncListener({ create: function() {
        Xo = false;
      } }), global.Promise.resolve(true).then(function() {
        Xo = false;
      }), process.removeAsyncListener(XE));
      var XE;
      Xo && RD();
      function RD() {
        var e = global.Promise;
        function t(s) {
          if (!(this instanceof t))
            return e(s);
          if (typeof s != "function")
            return new e(s);
          var o, u, c = new e(p);
          c.__proto__ = t.prototype;
          try {
            s.apply(o, u);
          } catch (f) {
            u[1](f);
          }
          return c;
          function p(f, d) {
            o = this, u = [h, m];
            function h(S) {
              return n(c, false), f(S);
            }
            function m(S) {
              return n(c, false), d(S);
            }
          }
        }
        if (AD.inherits(t, e), je(e.prototype, "then", a), e.prototype.chain && je(e.prototype, "chain", a), ID)
          global.Promise = GE()(e, n);
        else {
          var r = ["all", "race", "reject", "resolve", "accept", "defer"];
          r.forEach(function(s) {
            typeof e[s] == "function" && (t[s] = e[s]);
          }), global.Promise = t;
        }
        function n(s, o) {
          (!s.__asl_wrapper || o) && (s.__asl_wrapper = re(i));
        }
        function i(s, o, u, c) {
          var p;
          try {
            return p = o.call(s, u), { returnVal: p, error: false };
          } catch (f) {
            return { errorVal: f, error: true };
          } finally {
            p instanceof e ? c.__asl_wrapper = function() {
              var d = p.__asl_wrapper || i;
              return d.apply(this, arguments);
            } : n(c, true);
          }
        }
        function a(s) {
          return function() {
            var u = this, c = s.apply(u, Array.prototype.map.call(arguments, p));
            return c.__asl_wrapper = function(d, h, m, S) {
              return u.__asl_wrapper ? (u.__asl_wrapper(d, function() {
              }, null, c), c.__asl_wrapper(d, h, m, S)) : i(d, h, m, S);
            }, c;
            function p(f) {
              return typeof f != "function" ? f : re(function(d) {
                var h = (u.__asl_wrapper || i)(this, f, d, c);
                if (h.error)
                  throw h.errorVal;
                return h.returnVal;
              });
            }
          };
        }
      }
      function Et(e) {
        var t = function() {
          var r, n = arguments.length - 1;
          if (typeof arguments[n] == "function") {
            r = Array(arguments.length);
            for (var i = 0; i < arguments.length - 1; i++)
              r[i] = arguments[i];
            r[n] = re(arguments[n]);
          }
          return e.apply(this, r || arguments);
        };
        switch (e.length) {
          case 1:
            return function(r) {
              return arguments.length !== 1 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r));
            };
          case 2:
            return function(r, n) {
              return arguments.length !== 2 ? t.apply(this, arguments) : (typeof n == "function" && (n = re(n)), e.call(this, r, n));
            };
          case 3:
            return function(r, n, i) {
              return arguments.length !== 3 ? t.apply(this, arguments) : (typeof i == "function" && (i = re(i)), e.call(this, r, n, i));
            };
          case 4:
            return function(r, n, i, a) {
              return arguments.length !== 4 ? t.apply(this, arguments) : (typeof a == "function" && (a = re(a)), e.call(this, r, n, i, a));
            };
          case 5:
            return function(r, n, i, a, s) {
              return arguments.length !== 5 ? t.apply(this, arguments) : (typeof s == "function" && (s = re(s)), e.call(this, r, n, i, a, s));
            };
          case 6:
            return function(r, n, i, a, s, o) {
              return arguments.length !== 6 ? t.apply(this, arguments) : (typeof o == "function" && (o = re(o)), e.call(this, r, n, i, a, s, o));
            };
          default:
            return t;
        }
      }
      function Yo(e) {
        var t = function() {
          var r;
          if (typeof arguments[0] == "function") {
            r = Array(arguments.length), r[0] = re(arguments[0]);
            for (var n = 1; n < arguments.length; n++)
              r[n] = arguments[n];
          }
          return e.apply(this, r || arguments);
        };
        switch (e.length) {
          case 1:
            return function(r) {
              return arguments.length !== 1 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r));
            };
          case 2:
            return function(r, n) {
              return arguments.length !== 2 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r, n));
            };
          case 3:
            return function(r, n, i) {
              return arguments.length !== 3 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r, n, i));
            };
          case 4:
            return function(r, n, i, a) {
              return arguments.length !== 4 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r, n, i, a));
            };
          case 5:
            return function(r, n, i, a, s) {
              return arguments.length !== 5 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r, n, i, a, s));
            };
          case 6:
            return function(r, n, i, a, s, o) {
              return arguments.length !== 6 ? t.apply(this, arguments) : (typeof r == "function" && (r = re(r)), e.call(this, r, n, i, a, s, o));
            };
          default:
            return t;
        }
      }
      function ND(e) {
        return (e = Number(e)) >= 0 ? e : false;
      }
      function DD(e) {
        return typeof e == "string" && ND(e) === false;
      }
    });
    var ey = l((R1, JE) => {
      "use strict";
      var jt = require("assert"), wD = Do(), ma = "cls@contexts", wp = "error@context";
      process.addAsyncListener || YE();
      function ot(e) {
        this.name = e, this.active = null, this._set = [], this.id = null;
      }
      ot.prototype.set = function(e, t) {
        if (!this.active)
          throw new Error("No context available. ns.run() or ns.bind() must be called first.");
        return this.active[e] = t, t;
      };
      ot.prototype.get = function(e) {
        if (!!this.active)
          return this.active[e];
      };
      ot.prototype.createContext = function() {
        return Object.create(this.active);
      };
      ot.prototype.run = function(e) {
        var t = this.createContext();
        this.enter(t);
        try {
          return e(t), t;
        } catch (r) {
          throw r && (r[wp] = t), r;
        } finally {
          this.exit(t);
        }
      };
      ot.prototype.runAndReturn = function(e) {
        var t;
        return this.run(function(r) {
          t = e(r);
        }), t;
      };
      ot.prototype.bind = function(e, t) {
        t || (this.active ? t = this.active : t = this.createContext());
        var r = this;
        return function() {
          r.enter(t);
          try {
            return e.apply(this, arguments);
          } catch (n) {
            throw n && (n[wp] = t), n;
          } finally {
            r.exit(t);
          }
        };
      };
      ot.prototype.enter = function(e) {
        jt.ok(e, "context must be provided for entering"), this._set.push(this.active), this.active = e;
      };
      ot.prototype.exit = function(e) {
        if (jt.ok(e, "context must be provided for exiting"), this.active === e) {
          jt.ok(this._set.length, "can't remove top context"), this.active = this._set.pop();
          return;
        }
        var t = this._set.lastIndexOf(e);
        jt.ok(t >= 0, "context not currently entered; can't exit"), jt.ok(t, "can't remove top context"), this._set.splice(t, 1);
      };
      ot.prototype.bindEmitter = function(e) {
        jt.ok(e.on && e.addListener && e.emit, "can only bind real EEs");
        var t = this, r = "context@" + this.name;
        function n(a) {
          !a || (a[ma] || (a[ma] = Object.create(null)), a[ma][r] = { namespace: t, context: t.active });
        }
        function i(a) {
          if (!(a && a[ma]))
            return a;
          var s = a, o = a[ma];
          return Object.keys(o).forEach(function(u) {
            var c = o[u];
            s = c.namespace.bind(s, c.context);
          }), s;
        }
        wD(e, n, i);
      };
      ot.prototype.fromException = function(e) {
        return e[wp];
      };
      function QE(e) {
        return process.namespaces[e];
      }
      function xD(e) {
        jt.ok(e, "namespace must be given a name!");
        var t = new ot(e);
        return t.id = process.addAsyncListener({ create: function() {
          return t.active;
        }, before: function(r, n) {
          n && t.enter(n);
        }, after: function(r, n) {
          n && t.exit(n);
        }, error: function(r) {
          r && t.exit(r);
        } }), process.namespaces[e] = t, t;
      }
      function WE(e) {
        var t = QE(e);
        jt.ok(t, "can't delete nonexistent namespace!"), jt.ok(t.id, "don't assign to process.namespaces directly!"), process.removeAsyncListener(t.id), process.namespaces[e] = null;
      }
      function ZE() {
        process.namespaces && Object.keys(process.namespaces).forEach(function(e) {
          WE(e);
        }), process.namespaces = Object.create(null);
      }
      process.namespaces || ZE();
      JE.exports = { getNamespace: QE, createNamespace: xD, destroyNamespace: WE, reset: ZE };
    });
    var gr = l((Qo) => {
      "use strict";
      Object.defineProperty(Qo, "__esModule", { value: true });
      Qo.CorrelationContextManager = void 0;
      var ty = ve(), MD = fo(), ei = Wi(), xp = al(), ry = Il(), LD = function() {
        function e() {
        }
        return e.getCurrentContext = function() {
          if (!e.enabled)
            return null;
          var t = e.session.get(e.CONTEXT_NAME);
          return t === void 0 ? null : t;
        }, e.generateContextObject = function(t, r, n, i, a, s) {
          return r = r || t, this.enabled ? { operation: { name: n, id: t, parentId: r, traceparent: a, tracestate: s }, customProperties: new qD(i) } : null;
        }, e.spanToContextObject = function(t, r, n) {
          var i = new ei();
          return i.traceId = t.traceId, i.spanId = t.spanId, i.traceFlag = ei.formatOpenTelemetryTraceFlags(t.traceFlags) || ei.DEFAULT_TRACE_FLAG, i.parentId = r, e.generateContextObject(i.traceId, i.parentId, n, null, i);
        }, e.runWithContext = function(t, r) {
          var n;
          return e.enabled ? e.session.bind(r, (n = {}, n[e.CONTEXT_NAME] = t, n))() : r();
        }, e.wrapEmitter = function(t) {
          e.enabled && e.session.bindEmitter(t);
        }, e.wrapCallback = function(t, r) {
          var n;
          return e.enabled ? e.session.bind(t, r ? (n = {}, n[e.CONTEXT_NAME] = r, n) : void 0) : t;
        }, e.enable = function(t) {
          if (!this.enabled) {
            if (!this.isNodeVersionCompatible()) {
              this.enabled = false;
              return;
            }
            e.hasEverEnabled || (this.forceClsHooked = t, this.hasEverEnabled = true, typeof this.cls == "undefined" && (e.forceClsHooked === true || e.forceClsHooked === void 0 && e.shouldUseClsHooked() ? this.cls = yE() : this.cls = ey()), e.session = this.cls.createNamespace("AI-CLS-Session"), MD.registerContextPreservation(function(r) {
              return e.session.bind(r);
            })), this.enabled = true;
          }
        }, e.startOperation = function(t, r) {
          var n = t && t.traceContext || null, i = t && t.traceId ? t : null, a = t && t.headers;
          if (i) {
            var s = new ei("00-" + i.traceId + "-" + i.spanId + "-01"), o = new xp(i.traceState ? i.traceState.serialize() : null), u = e.generateContextObject(i.traceId, "|" + i.traceId + "." + i.spanId + ".", typeof r == "string" ? r : "", void 0, s, o);
            return u;
          }
          if (n) {
            var s = new ei(n.traceparent), o = new xp(n.tracestate), c = typeof r == "object" ? new ry(r) : null, u = e.generateContextObject(s.traceId, s.parentId, typeof r == "string" ? r : c.getOperationName({}), c && c.getCorrelationContextHeader() || void 0, s, o);
            return u;
          }
          if (a) {
            var s = new ei(a.traceparent ? a.traceparent.toString() : null), o = new xp(a.tracestate ? a.tracestate.toString() : null), c = new ry(t), u = e.generateContextObject(s.traceId, s.parentId, c.getOperationName({}), c.getCorrelationContextHeader(), s, o);
            return u;
          }
          return ty.warn("startOperation was called with invalid arguments", arguments), null;
        }, e.disable = function() {
          this.enabled = false;
        }, e.reset = function() {
          e.hasEverEnabled && (e.session = null, e.session = this.cls.createNamespace("AI-CLS-Session"));
        }, e.isNodeVersionCompatible = function() {
          var t = process.versions.node.split(".");
          return parseInt(t[0]) > 3 || parseInt(t[0]) > 2 && parseInt(t[1]) > 2;
        }, e.shouldUseClsHooked = function() {
          var t = process.versions.node.split(".");
          return parseInt(t[0]) > 8 || parseInt(t[0]) >= 8 && parseInt(t[1]) >= 2;
        }, e.canUseClsHooked = function() {
          var t = process.versions.node.split("."), r = parseInt(t[0]) > 8 || parseInt(t[0]) >= 8 && parseInt(t[1]) >= 0, n = parseInt(t[0]) < 8 || parseInt(t[0]) <= 8 && parseInt(t[1]) < 2, i = parseInt(t[0]) > 4 || parseInt(t[0]) >= 4 && parseInt(t[1]) >= 7;
          return !(r && n) && i;
        }, e.enabled = false, e.hasEverEnabled = false, e.forceClsHooked = void 0, e.CONTEXT_NAME = "ApplicationInsights-Context", e;
      }();
      Qo.CorrelationContextManager = LD;
      var qD = function() {
        function e(t) {
          this.props = [], this.addHeaderData(t);
        }
        return e.prototype.addHeaderData = function(t) {
          var r = t ? t.split(", ") : [];
          this.props = r.map(function(n) {
            var i = n.split("=");
            return { key: i[0], value: i[1] };
          }).concat(this.props);
        }, e.prototype.serializeToHeader = function() {
          return this.props.map(function(t) {
            return t.key + "=" + t.value;
          }).join(", ");
        }, e.prototype.getProperty = function(t) {
          for (var r = 0; r < this.props.length; ++r) {
            var n = this.props[r];
            if (n.key === t)
              return n.value;
          }
        }, e.prototype.setProperty = function(t, r) {
          if (e.bannedCharacters.test(t) || e.bannedCharacters.test(r)) {
            ty.warn("Correlation context property keys and values must not contain ',' or '='. setProperty was called with key: " + t + " and value: " + r);
            return;
          }
          for (var n = 0; n < this.props.length; ++n) {
            var i = this.props[n];
            if (i.key === t) {
              i.value = r;
              return;
            }
          }
          this.props.push({ key: t, value: r });
        }, e.bannedCharacters = /[,=]/, e;
      }();
    });
    var iy = l((ti) => {
      "use strict";
      Object.defineProperty(ti, "__esModule", { value: true });
      ti.dispose = ti.enable = void 0;
      var ny = De(), Mp = ue(), Qr = [], Lp = function(e) {
        var t = e.data.message;
        Qr.forEach(function(r) {
          t instanceof Error ? r.trackException({ exception: t }) : (t.lastIndexOf(`
`) == t.length - 1 && (t = t.substring(0, t.length - 1)), r.trackTrace({ message: t, severity: e.data.stderr ? ny.SeverityLevel.Warning : ny.SeverityLevel.Information }));
        });
      };
      function jD(e, t) {
        e ? (Qr.length === 0 && Mp.channel.subscribe("console", Lp), Qr.push(t)) : (Qr = Qr.filter(function(r) {
          return r != t;
        }), Qr.length === 0 && Mp.channel.unsubscribe("console", Lp));
      }
      ti.enable = jD;
      function kD() {
        Mp.channel.unsubscribe("console", Lp), Qr = [];
      }
      ti.dispose = kD;
    });
    var ay = l((ni) => {
      "use strict";
      Object.defineProperty(ni, "__esModule", { value: true });
      ni.dispose = ni.enable = void 0;
      var ri = De(), qp = ue(), Wr = [], HD = { 10: ri.SeverityLevel.Verbose, 20: ri.SeverityLevel.Verbose, 30: ri.SeverityLevel.Information, 40: ri.SeverityLevel.Warning, 50: ri.SeverityLevel.Error, 60: ri.SeverityLevel.Critical }, jp = function(e) {
        var t = e.data.result;
        Wr.forEach(function(r) {
          var n = HD[e.data.level];
          t instanceof Error ? r.trackException({ exception: t }) : r.trackTrace({ message: t, severity: n });
        });
      };
      function UD(e, t) {
        e ? (Wr.length === 0 && qp.channel.subscribe("bunyan", jp), Wr.push(t)) : (Wr = Wr.filter(function(r) {
          return r != t;
        }), Wr.length === 0 && qp.channel.unsubscribe("bunyan", jp));
      }
      ni.enable = UD;
      function BD() {
        qp.channel.unsubscribe("bunyan", jp), Wr = [];
      }
      ni.dispose = BD;
    });
    var sy = l((ii) => {
      "use strict";
      Object.defineProperty(ii, "__esModule", { value: true });
      ii.dispose = ii.enable = void 0;
      var Se = De(), kp = ue(), Zr = [], GD = { syslog: function(e) {
        var t = { emerg: Se.SeverityLevel.Critical, alert: Se.SeverityLevel.Critical, crit: Se.SeverityLevel.Critical, error: Se.SeverityLevel.Error, warning: Se.SeverityLevel.Warning, notice: Se.SeverityLevel.Information, info: Se.SeverityLevel.Information, debug: Se.SeverityLevel.Verbose };
        return t[e] === void 0 ? Se.SeverityLevel.Information : t[e];
      }, npm: function(e) {
        var t = { error: Se.SeverityLevel.Error, warn: Se.SeverityLevel.Warning, info: Se.SeverityLevel.Information, verbose: Se.SeverityLevel.Verbose, debug: Se.SeverityLevel.Verbose, silly: Se.SeverityLevel.Verbose };
        return t[e] === void 0 ? Se.SeverityLevel.Information : t[e];
      }, unknown: function(e) {
        return Se.SeverityLevel.Information;
      } }, Hp = function(e) {
        var t = e.data.message;
        Zr.forEach(function(r) {
          if (t instanceof Error)
            r.trackException({ exception: t, properties: e.data.meta });
          else {
            var n = GD[e.data.levelKind](e.data.level);
            r.trackTrace({ message: t, severity: n, properties: e.data.meta });
          }
        });
      };
      function FD(e, t) {
        e ? (Zr.length === 0 && kp.channel.subscribe("winston", Hp), Zr.push(t)) : (Zr = Zr.filter(function(r) {
          return r != t;
        }), Zr.length === 0 && kp.channel.unsubscribe("winston", Hp));
      }
      ii.enable = FD;
      function VD() {
        kp.channel.unsubscribe("winston", Hp), Zr = [];
      }
      ii.dispose = VD;
    });
    var uy = l((M1, oy) => {
      "use strict";
      var $D = fo(), zD = function() {
        function e(t) {
          if (e.INSTANCE)
            throw new Error("Console logging adapter tracking should be configured from the applicationInsights object");
          this._client = t, e.INSTANCE = this;
        }
        return e.prototype.enable = function(t, r) {
          $D.IsInitialized && (iy().enable(t && r, this._client), ay().enable(t, this._client), sy().enable(t, this._client));
        }, e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false, false);
        }, e._methodNames = ["debug", "info", "log", "warn", "error"], e;
      }();
      oy.exports = zD;
    });
    var ly = l((L1, cy) => {
      "use strict";
      var KD = function() {
        function e(t) {
          if (e.INSTANCE)
            throw new Error("Exception tracking should be configured from the applicationInsights object");
          e.INSTANCE = this, this._client = t;
          var r = process.versions.node.split(".");
          e._canUseUncaughtExceptionMonitor = parseInt(r[0]) > 13 || parseInt(r[0]) === 13 && parseInt(r[1]) >= 7;
        }
        return e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.prototype.enable = function(t) {
          var r = this;
          if (t) {
            this._isInitialized = true;
            var n = this;
            if (!this._exceptionListenerHandle) {
              var i = function(a, s, o) {
                o === void 0 && (o = new Error(e._FALLBACK_ERROR_MESSAGE)), r._client.trackException({ exception: o }), r._client.flush({ isAppCrashing: true }), a && s && process.listeners(s).length === 1 && (console.error(o), process.exit(1));
              };
              e._canUseUncaughtExceptionMonitor ? (this._exceptionListenerHandle = i.bind(this, false, void 0), process.on(e.UNCAUGHT_EXCEPTION_MONITOR_HANDLER_NAME, this._exceptionListenerHandle)) : (this._exceptionListenerHandle = i.bind(this, true, e.UNCAUGHT_EXCEPTION_HANDLER_NAME), this._rejectionListenerHandle = i.bind(this, false, void 0), process.on(e.UNCAUGHT_EXCEPTION_HANDLER_NAME, this._exceptionListenerHandle), process.on(e.UNHANDLED_REJECTION_HANDLER_NAME, this._rejectionListenerHandle));
            }
          } else
            this._exceptionListenerHandle && (e._canUseUncaughtExceptionMonitor ? process.removeListener(e.UNCAUGHT_EXCEPTION_MONITOR_HANDLER_NAME, this._exceptionListenerHandle) : (process.removeListener(e.UNCAUGHT_EXCEPTION_HANDLER_NAME, this._exceptionListenerHandle), process.removeListener(e.UNHANDLED_REJECTION_HANDLER_NAME, this._rejectionListenerHandle)), this._exceptionListenerHandle = void 0, this._rejectionListenerHandle = void 0, delete this._exceptionListenerHandle, delete this._rejectionListenerHandle);
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false), this._isInitialized = false;
        }, e.INSTANCE = null, e.UNCAUGHT_EXCEPTION_MONITOR_HANDLER_NAME = "uncaughtExceptionMonitor", e.UNCAUGHT_EXCEPTION_HANDLER_NAME = "uncaughtException", e.UNHANDLED_REJECTION_HANDLER_NAME = "unhandledRejection", e._RETHROW_EXIT_MESSAGE = "Application Insights Rethrow Exception Handler", e._FALLBACK_ERROR_MESSAGE = "A promise was rejected without providing an error. Application Insights generated this error stack for you.", e._canUseUncaughtExceptionMonitor = false, e;
      }();
      cy.exports = KD;
    });
    var kt = l((T) => {
      "use strict";
      var ut;
      Object.defineProperty(T, "__esModule", { value: true });
      T.HeartBeatMetricName = T.DependencyTypeName = T.SpanAttribute = T.TelemetryTypeStringToQuickPulseDocumentType = T.TelemetryTypeStringToQuickPulseType = T.QuickPulseType = T.QuickPulseDocumentType = T.PerformanceToQuickPulseCounter = T.MetricId = T.PerformanceCounter = T.QuickPulseCounter = T.DEFAULT_LIVEMETRICS_HOST = T.DEFAULT_LIVEMETRICS_ENDPOINT = T.DEFAULT_BREEZE_ENDPOINT = void 0;
      T.DEFAULT_BREEZE_ENDPOINT = "https://dc.services.visualstudio.com";
      T.DEFAULT_LIVEMETRICS_ENDPOINT = "https://rt.services.visualstudio.com";
      T.DEFAULT_LIVEMETRICS_HOST = "rt.services.visualstudio.com";
      var Pe;
      (function(e) {
        e.COMMITTED_BYTES = "\\Memory\\Committed Bytes", e.PROCESSOR_TIME = "\\Processor(_Total)\\% Processor Time", e.REQUEST_RATE = "\\ApplicationInsights\\Requests/Sec", e.REQUEST_FAILURE_RATE = "\\ApplicationInsights\\Requests Failed/Sec", e.REQUEST_DURATION = "\\ApplicationInsights\\Request Duration", e.DEPENDENCY_RATE = "\\ApplicationInsights\\Dependency Calls/Sec", e.DEPENDENCY_FAILURE_RATE = "\\ApplicationInsights\\Dependency Calls Failed/Sec", e.DEPENDENCY_DURATION = "\\ApplicationInsights\\Dependency Call Duration", e.EXCEPTION_RATE = "\\ApplicationInsights\\Exceptions/Sec";
      })(Pe = T.QuickPulseCounter || (T.QuickPulseCounter = {}));
      var Wo;
      (function(e) {
        e.PRIVATE_BYTES = "\\Process(??APP_WIN32_PROC??)\\Private Bytes", e.AVAILABLE_BYTES = "\\Memory\\Available Bytes", e.PROCESSOR_TIME = "\\Processor(_Total)\\% Processor Time", e.PROCESS_TIME = "\\Process(??APP_WIN32_PROC??)\\% Processor Time", e.REQUEST_RATE = "\\ASP.NET Applications(??APP_W3SVC_PROC??)\\Requests/Sec", e.REQUEST_DURATION = "\\ASP.NET Applications(??APP_W3SVC_PROC??)\\Request Execution Time";
      })(Wo = T.PerformanceCounter || (T.PerformanceCounter = {}));
      var XD;
      (function(e) {
        e.REQUESTS_DURATION = "requests/duration", e.DEPENDENCIES_DURATION = "dependencies/duration", e.EXCEPTIONS_COUNT = "exceptions/count", e.TRACES_COUNT = "traces/count";
      })(XD = T.MetricId || (T.MetricId = {}));
      T.PerformanceToQuickPulseCounter = (ut = {}, ut[Wo.PROCESSOR_TIME] = Pe.PROCESSOR_TIME, ut[Wo.REQUEST_RATE] = Pe.REQUEST_RATE, ut[Wo.REQUEST_DURATION] = Pe.REQUEST_DURATION, ut[Pe.COMMITTED_BYTES] = Pe.COMMITTED_BYTES, ut[Pe.REQUEST_FAILURE_RATE] = Pe.REQUEST_FAILURE_RATE, ut[Pe.DEPENDENCY_RATE] = Pe.DEPENDENCY_RATE, ut[Pe.DEPENDENCY_FAILURE_RATE] = Pe.DEPENDENCY_FAILURE_RATE, ut[Pe.DEPENDENCY_DURATION] = Pe.DEPENDENCY_DURATION, ut[Pe.EXCEPTION_RATE] = Pe.EXCEPTION_RATE, ut);
      T.QuickPulseDocumentType = { Event: "Event", Exception: "Exception", Trace: "Trace", Metric: "Metric", Request: "Request", Dependency: "RemoteDependency", Availability: "Availability", PageView: "PageView" };
      T.QuickPulseType = { Event: "EventTelemetryDocument", Exception: "ExceptionTelemetryDocument", Trace: "TraceTelemetryDocument", Metric: "MetricTelemetryDocument", Request: "RequestTelemetryDocument", Dependency: "DependencyTelemetryDocument", Availability: "AvailabilityTelemetryDocument", PageView: "PageViewTelemetryDocument" };
      T.TelemetryTypeStringToQuickPulseType = { EventData: T.QuickPulseType.Event, ExceptionData: T.QuickPulseType.Exception, MessageData: T.QuickPulseType.Trace, MetricData: T.QuickPulseType.Metric, RequestData: T.QuickPulseType.Request, RemoteDependencyData: T.QuickPulseType.Dependency, AvailabilityData: T.QuickPulseType.Availability, PageViewData: T.QuickPulseType.PageView };
      T.TelemetryTypeStringToQuickPulseDocumentType = { EventData: T.QuickPulseDocumentType.Event, ExceptionData: T.QuickPulseDocumentType.Exception, MessageData: T.QuickPulseDocumentType.Trace, MetricData: T.QuickPulseDocumentType.Metric, RequestData: T.QuickPulseDocumentType.Request, RemoteDependencyData: T.QuickPulseDocumentType.Dependency, AvailabilityData: T.QuickPulseDocumentType.Availability, PageViewData: T.QuickPulseDocumentType.PageView };
      T.SpanAttribute = { HttpHost: "http.host", HttpMethod: "http.method", HttpPort: "http.port", HttpStatusCode: "http.status_code", HttpUrl: "http.url", HttpUserAgent: "http.user_agent", GrpcMethod: "grpc.method", GrpcService: "rpc.service" };
      T.DependencyTypeName = { Grpc: "GRPC", Http: "HTTP", InProc: "InProc" };
      T.HeartBeatMetricName = "HeartBeat";
    });
    var Jo = l((j1, py) => {
      "use strict";
      var Zo = require("os"), Je = kt(), YD = function() {
        function e(t, r, n) {
          r === void 0 && (r = 6e4), n === void 0 && (n = false), this._lastIntervalRequestExecutionTime = 0, this._lastIntervalDependencyExecutionTime = 0, e.INSTANCE || (e.INSTANCE = this), this._isInitialized = false, this._client = t, this._collectionInterval = r, this._enableLiveMetricsCounters = n;
        }
        return e.prototype.enable = function(t, r) {
          var n = this;
          this._isEnabled = t, this._isEnabled && !this._isInitialized && (this._isInitialized = true), t ? this._handle || (this._lastCpus = Zo.cpus(), this._lastRequests = { totalRequestCount: e._totalRequestCount, totalFailedRequestCount: e._totalFailedRequestCount, time: +new Date() }, this._lastDependencies = { totalDependencyCount: e._totalDependencyCount, totalFailedDependencyCount: e._totalFailedDependencyCount, time: +new Date() }, this._lastExceptions = { totalExceptionCount: e._totalExceptionCount, time: +new Date() }, typeof process.cpuUsage == "function" && (this._lastAppCpuUsage = process.cpuUsage()), this._lastHrtime = process.hrtime(), this._collectionInterval = r || this._collectionInterval, this._handle = setInterval(function() {
            return n.trackPerformance();
          }, this._collectionInterval), this._handle.unref()) : this._handle && (clearInterval(this._handle), this._handle = void 0);
        }, e.countRequest = function(t, r) {
          var n;
          if (!!e.isEnabled()) {
            if (typeof t == "string")
              n = +new Date("1970-01-01T" + t + "Z");
            else if (typeof t == "number")
              n = t;
            else
              return;
            e._intervalRequestExecutionTime += n, r === false && e._totalFailedRequestCount++, e._totalRequestCount++;
          }
        }, e.countException = function() {
          e._totalExceptionCount++;
        }, e.countDependency = function(t, r) {
          var n;
          if (!!e.isEnabled()) {
            if (typeof t == "string")
              n = +new Date("1970-01-01T" + t + "Z");
            else if (typeof t == "number")
              n = t;
            else
              return;
            e._intervalDependencyExecutionTime += n, r === false && e._totalFailedDependencyCount++, e._totalDependencyCount++;
          }
        }, e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.isEnabled = function() {
          return e.INSTANCE && e.INSTANCE._isEnabled;
        }, e.prototype.trackPerformance = function() {
          this._trackCpu(), this._trackMemory(), this._trackNetwork(), this._trackDependencyRate(), this._trackExceptionRate();
        }, e.prototype._trackCpu = function() {
          var t = Zo.cpus();
          if (t && t.length && this._lastCpus && t.length === this._lastCpus.length) {
            for (var r = 0, n = 0, i = 0, a = 0, s = 0, o = 0; !!t && o < t.length; o++) {
              var u = t[o], c = this._lastCpus[o], p = "% cpu(" + o + ") ", f = u.model, d = u.speed, h = u.times, m = c.times, S = h.user - m.user || 0;
              r += S;
              var j = h.sys - m.sys || 0;
              n += j;
              var oe = h.nice - m.nice || 0;
              i += oe;
              var Ae = h.idle - m.idle || 0;
              a += Ae;
              var At = h.irq - m.irq || 0;
              s += At;
            }
            var tn = void 0;
            if (typeof process.cpuUsage == "function") {
              var yi = process.cpuUsage(), rn = process.hrtime(), aS = yi.user - this._lastAppCpuUsage.user + (yi.system - this._lastAppCpuUsage.system) || 0;
              if (typeof this._lastHrtime != "undefined" && this._lastHrtime.length === 2) {
                var sS = (rn[0] - this._lastHrtime[0]) * 1e6 + (rn[1] - this._lastHrtime[1]) / 1e3 || 0;
                tn = 100 * aS / (sS * t.length);
              }
              this._lastAppCpuUsage = yi, this._lastHrtime = rn;
            }
            var _u = r + n + i + a + s || 1;
            this._client.trackMetric({ name: Je.PerformanceCounter.PROCESSOR_TIME, value: (_u - a) / _u * 100 }), this._client.trackMetric({ name: Je.PerformanceCounter.PROCESS_TIME, value: tn || r / _u * 100 });
          }
          this._lastCpus = t;
        }, e.prototype._trackMemory = function() {
          var t = Zo.freemem(), r = process.memoryUsage().rss, n = Zo.totalmem() - t;
          this._client.trackMetric({ name: Je.PerformanceCounter.PRIVATE_BYTES, value: r }), this._client.trackMetric({ name: Je.PerformanceCounter.AVAILABLE_BYTES, value: t }), this._enableLiveMetricsCounters && this._client.trackMetric({ name: Je.QuickPulseCounter.COMMITTED_BYTES, value: n });
        }, e.prototype._trackNetwork = function() {
          var t = this._lastRequests, r = { totalRequestCount: e._totalRequestCount, totalFailedRequestCount: e._totalFailedRequestCount, time: +new Date() }, n = r.totalRequestCount - t.totalRequestCount || 0, i = r.totalFailedRequestCount - t.totalFailedRequestCount || 0, a = r.time - t.time, s = a / 1e3, o = (e._intervalRequestExecutionTime - this._lastIntervalRequestExecutionTime) / n || 0;
          if (this._lastIntervalRequestExecutionTime = e._intervalRequestExecutionTime, a > 0) {
            var u = n / s, c = i / s;
            this._client.trackMetric({ name: Je.PerformanceCounter.REQUEST_RATE, value: u }), (!this._enableLiveMetricsCounters || n > 0) && this._client.trackMetric({ name: Je.PerformanceCounter.REQUEST_DURATION, value: o }), this._enableLiveMetricsCounters && this._client.trackMetric({ name: Je.QuickPulseCounter.REQUEST_FAILURE_RATE, value: c });
          }
          this._lastRequests = r;
        }, e.prototype._trackDependencyRate = function() {
          if (this._enableLiveMetricsCounters) {
            var t = this._lastDependencies, r = { totalDependencyCount: e._totalDependencyCount, totalFailedDependencyCount: e._totalFailedDependencyCount, time: +new Date() }, n = r.totalDependencyCount - t.totalDependencyCount || 0, i = r.totalFailedDependencyCount - t.totalFailedDependencyCount || 0, a = r.time - t.time, s = a / 1e3, o = (e._intervalDependencyExecutionTime - this._lastIntervalDependencyExecutionTime) / n || 0;
            if (this._lastIntervalDependencyExecutionTime = e._intervalDependencyExecutionTime, a > 0) {
              var u = n / s, c = i / s;
              this._client.trackMetric({ name: Je.QuickPulseCounter.DEPENDENCY_RATE, value: u }), this._client.trackMetric({ name: Je.QuickPulseCounter.DEPENDENCY_FAILURE_RATE, value: c }), (!this._enableLiveMetricsCounters || n > 0) && this._client.trackMetric({ name: Je.QuickPulseCounter.DEPENDENCY_DURATION, value: o });
            }
            this._lastDependencies = r;
          }
        }, e.prototype._trackExceptionRate = function() {
          if (this._enableLiveMetricsCounters) {
            var t = this._lastExceptions, r = { totalExceptionCount: e._totalExceptionCount, time: +new Date() }, n = r.totalExceptionCount - t.totalExceptionCount || 0, i = r.time - t.time, a = i / 1e3;
            if (i > 0) {
              var s = n / a;
              this._client.trackMetric({ name: Je.QuickPulseCounter.EXCEPTION_RATE, value: s });
            }
            this._lastExceptions = r;
          }
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false), this._isInitialized = false;
        }, e._totalRequestCount = 0, e._totalFailedRequestCount = 0, e._totalDependencyCount = 0, e._totalFailedDependencyCount = 0, e._totalExceptionCount = 0, e._intervalDependencyExecutionTime = 0, e._intervalRequestExecutionTime = 0, e;
      }();
      py.exports = YD;
    });
    var fy = l((eu) => {
      "use strict";
      Object.defineProperty(eu, "__esModule", { value: true });
      eu.AggregatedMetricCounter = void 0;
      var QD = function() {
        function e(t) {
          this.dimensions = t, this.totalCount = 0, this.lastTotalCount = 0, this.intervalExecutionTime = 0, this.lastTime = +new Date(), this.lastIntervalExecutionTime = 0;
        }
        return e;
      }();
      eu.AggregatedMetricCounter = QD;
    });
    var dy = l((tu) => {
      "use strict";
      Object.defineProperty(tu, "__esModule", { value: true });
      tu.PreaggregatedMetricPropertyNames = void 0;
      tu.PreaggregatedMetricPropertyNames = { cloudRoleInstance: "cloud/roleInstance", cloudRoleName: "cloud/roleName", operationSynthetic: "operation/synthetic", requestSuccess: "Request.Success", requestResultCode: "request/resultCode", dependencyType: "Dependency.Type", dependencyTarget: "dependency/target", dependencySuccess: "Dependency.Success", dependencyResultCode: "dependency/resultCode", traceSeverityLevel: "trace/severityLevel" };
    });
    var Bp = l((Up, hy) => {
      "use strict";
      var ru = Up && Up.__assign || function() {
        return ru = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, ru.apply(this, arguments);
      }, nu = kt(), WD = fy(), ZD = dy(), JD = function() {
        function e(t, r) {
          r === void 0 && (r = 6e4), e.INSTANCE || (e.INSTANCE = this), this._isInitialized = false, e._dependencyCountersCollection = [], e._requestCountersCollection = [], e._exceptionCountersCollection = [], e._traceCountersCollection = [], this._client = t, this._collectionInterval = r;
        }
        return e.prototype.enable = function(t, r) {
          var n = this;
          this._isEnabled = t, this._isEnabled && !this._isInitialized && (this._isInitialized = true), t ? this._handle || (this._collectionInterval = r || this._collectionInterval, this._handle = setInterval(function() {
            return n.trackPreAggregatedMetrics();
          }, this._collectionInterval), this._handle.unref()) : this._handle && (clearInterval(this._handle), this._handle = void 0);
        }, e.countException = function(t) {
          if (!!e.isEnabled()) {
            var r = e._getAggregatedCounter(t, this._exceptionCountersCollection);
            r.totalCount++;
          }
        }, e.countTrace = function(t) {
          if (!!e.isEnabled()) {
            var r = e._getAggregatedCounter(t, this._traceCountersCollection);
            r.totalCount++;
          }
        }, e.countRequest = function(t, r) {
          if (!!e.isEnabled()) {
            var n, i = e._getAggregatedCounter(r, this._requestCountersCollection);
            if (typeof t == "string")
              n = +new Date("1970-01-01T" + t + "Z");
            else if (typeof t == "number")
              n = t;
            else
              return;
            i.intervalExecutionTime += n, i.totalCount++;
          }
        }, e.countDependency = function(t, r) {
          if (!!e.isEnabled()) {
            var n = e._getAggregatedCounter(r, this._dependencyCountersCollection), i;
            if (typeof t == "string")
              i = +new Date("1970-01-01T" + t + "Z");
            else if (typeof t == "number")
              i = t;
            else
              return;
            n.intervalExecutionTime += i, n.totalCount++;
          }
        }, e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.isEnabled = function() {
          return e.INSTANCE && e.INSTANCE._isEnabled;
        }, e.prototype.trackPreAggregatedMetrics = function() {
          this._trackRequestMetrics(), this._trackDependencyMetrics(), this._trackExceptionMetrics(), this._trackTraceMetrics();
        }, e._getAggregatedCounter = function(t, r) {
          for (var n = false, i = 0; i < r.length; i++) {
            if (t === r[i].dimensions)
              return r[i];
            if (Object.keys(t).length === Object.keys(r[i].dimensions).length) {
              for (var a in t)
                if (t[a] != r[i].dimensions[a]) {
                  n = true;
                  break;
                }
              if (!n)
                return r[i];
              n = false;
            }
          }
          var s = new WD.AggregatedMetricCounter(t);
          return r.push(s), s;
        }, e.prototype._trackRequestMetrics = function() {
          for (var t = 0; t < e._requestCountersCollection.length; t++) {
            var r = e._requestCountersCollection[t];
            r.time = +new Date();
            var n = r.totalCount - r.lastTotalCount || 0, i = r.time - r.lastTime, a = (r.intervalExecutionTime - r.lastIntervalExecutionTime) / n || 0;
            r.lastIntervalExecutionTime = r.intervalExecutionTime, i > 0 && n > 0 && this._trackPreAggregatedMetric({ name: "Server response time", dimensions: r.dimensions, value: a, count: n, aggregationInterval: i, metricType: nu.MetricId.REQUESTS_DURATION }), r.lastTotalCount = r.totalCount, r.lastTime = r.time;
          }
        }, e.prototype._trackDependencyMetrics = function() {
          for (var t = 0; t < e._dependencyCountersCollection.length; t++) {
            var r = e._dependencyCountersCollection[t];
            r.time = +new Date();
            var n = r.totalCount - r.lastTotalCount || 0, i = r.time - r.lastTime, a = (r.intervalExecutionTime - r.lastIntervalExecutionTime) / n || 0;
            r.lastIntervalExecutionTime = r.intervalExecutionTime, i > 0 && n > 0 && this._trackPreAggregatedMetric({ name: "Dependency duration", dimensions: r.dimensions, value: a, count: n, aggregationInterval: i, metricType: nu.MetricId.DEPENDENCIES_DURATION }), r.lastTotalCount = r.totalCount, r.lastTime = r.time;
          }
        }, e.prototype._trackExceptionMetrics = function() {
          for (var t = 0; t < e._exceptionCountersCollection.length; t++) {
            var r = e._exceptionCountersCollection[t], n = r.totalCount - r.lastTotalCount || 0, i = r.time - r.lastTime;
            this._trackPreAggregatedMetric({ name: "Exceptions", dimensions: r.dimensions, value: n, count: n, aggregationInterval: i, metricType: nu.MetricId.EXCEPTIONS_COUNT }), r.lastTotalCount = r.totalCount, r.lastTime = r.time;
          }
        }, e.prototype._trackTraceMetrics = function() {
          for (var t = 0; t < e._traceCountersCollection.length; t++) {
            var r = e._traceCountersCollection[t], n = r.totalCount - r.lastTotalCount || 0, i = r.time - r.lastTime;
            this._trackPreAggregatedMetric({ name: "Traces", dimensions: r.dimensions, value: n, count: n, aggregationInterval: i, metricType: nu.MetricId.TRACES_COUNT }), r.lastTotalCount = r.totalCount, r.lastTime = r.time;
          }
        }, e.prototype._trackPreAggregatedMetric = function(t) {
          var r = {};
          for (var n in t.dimensions)
            r[ZD.PreaggregatedMetricPropertyNames[n]] = t.dimensions[n];
          r = ru(ru({}, r), { "_MS.MetricId": t.metricType, "_MS.AggregationIntervalMs": String(t.aggregationInterval), "_MS.IsAutocollected": "True" });
          var i = { name: t.name, value: t.value, count: t.count, properties: r, kind: "Aggregation" };
          this._client.trackMetric(i);
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false), this._isInitialized = false;
        }, e;
      }();
      hy.exports = JD;
    });
    var Ea = l((U1, my) => {
      "use strict";
      var Ht = require("os"), _y = require("fs"), vy = require("path"), ew = De(), gy = ve(), tw = function() {
        function e(t) {
          this.keys = new ew.ContextTagKeys(), this.tags = {}, this._loadApplicationContext(t), this._loadDeviceContext(), this._loadInternalContext();
        }
        return e.prototype._loadApplicationContext = function(t) {
          if (t = t || vy.resolve(__dirname, "../../../../package.json"), !e.appVersion[t]) {
            e.appVersion[t] = "unknown";
            try {
              var r = JSON.parse(_y.readFileSync(t, "utf8"));
              r && typeof r.version == "string" && (e.appVersion[t] = r.version);
            } catch (n) {
              gy.info("unable to read app version: ", n);
            }
          }
          this.tags[this.keys.applicationVersion] = e.appVersion[t];
        }, e.prototype._loadDeviceContext = function() {
          this.tags[this.keys.deviceId] = "", this.tags[this.keys.cloudRoleInstance] = Ht && Ht.hostname(), this.tags[this.keys.deviceOSVersion] = Ht && Ht.type() + " " + Ht.release(), this.tags[this.keys.cloudRole] = e.DefaultRoleName, this.tags["ai.device.osArchitecture"] = Ht && Ht.arch(), this.tags["ai.device.osPlatform"] = Ht && Ht.platform();
        }, e.prototype._loadInternalContext = function() {
          var t = vy.resolve(__dirname, "../../package.json");
          if (!e.sdkVersion) {
            e.sdkVersion = "unknown";
            try {
              var r = JSON.parse(_y.readFileSync(t, "utf8"));
              r && typeof r.version == "string" && (e.sdkVersion = r.version);
            } catch (n) {
              gy.info("unable to read app version: ", n);
            }
          }
          this.tags[this.keys.internalSdkVersion] = "node:" + e.sdkVersion;
        }, e.DefaultRoleName = "Web", e.appVersion = {}, e.sdkVersion = null, e;
      }();
      my.exports = tw;
    });
    var yy = l((Fp, Ey) => {
      "use strict";
      var rw = Fp && Fp.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), ct = require("url"), Gp = De(), nw = Be(), iw = jn(), aw = Tl(), sw = Gr(), ow = function(e) {
        rw(t, e);
        function t(r, n) {
          var i = e.call(this) || this;
          return n && n.method && r && (i.method = n.method, i.url = t._getUrlFromRequestOptions(r, n), i.startTime = +new Date()), i;
        }
        return t.prototype.onError = function(r) {
          this._setStatus(void 0, r);
        }, t.prototype.onResponse = function(r) {
          this._setStatus(r.statusCode, void 0), this.correlationId = nw.getCorrelationContextTarget(r, iw.requestContextTargetKey);
        }, t.prototype.getDependencyTelemetry = function(r, n) {
          var i = ct.parse(this.url);
          i.search = void 0, i.hash = void 0;
          var a = this.method.toUpperCase() + " " + i.pathname, s = Gp.RemoteDependencyDataConstants.TYPE_HTTP, o = i.hostname;
          i.port && (o += ":" + i.port), this.correlationId ? (s = Gp.RemoteDependencyDataConstants.TYPE_AI, this.correlationId !== sw.correlationIdPrefix && (o += " | " + this.correlationId)) : s = Gp.RemoteDependencyDataConstants.TYPE_HTTP;
          var u = { id: n, name: a, data: this.url, duration: this.duration, success: this._isSuccess(), resultCode: this.statusCode ? this.statusCode.toString() : null, properties: this.properties || {}, dependencyTypeName: s, target: o };
          if (r && r.time ? u.time = r.time : this.startTime && (u.time = new Date(this.startTime)), r) {
            for (var c in r)
              u[c] || (u[c] = r[c]);
            if (r.properties)
              for (var c in r.properties)
                u.properties[c] = r.properties[c];
          }
          return u;
        }, t._getUrlFromRequestOptions = function(r, n) {
          if (typeof r == "string")
            if (r.indexOf("http://") === 0 || r.indexOf("https://") === 0)
              r = ct.parse(r);
            else {
              var i = ct.parse(r);
              i.host === "443" ? r = ct.parse("https://" + r) : r = ct.parse("http://" + r);
            }
          else {
            if (r && typeof ct.URL == "function" && r instanceof ct.URL)
              return ct.format(r);
            var a = r;
            r = {}, a && Object.keys(a).forEach(function(u) {
              r[u] = a[u];
            });
          }
          if (r.path) {
            var s = ct.parse(r.path);
            r.pathname = s.pathname, r.search = s.search;
          }
          if (r.host && r.port) {
            var o = ct.parse("http://" + r.host);
            !o.port && r.port && (r.hostname = r.host, delete r.host);
          }
          return r.protocol = r.protocol || n.agent && n.agent.protocol || n.protocol || void 0, r.hostname = r.hostname || "localhost", ct.format(r);
        }, t;
      }(aw);
      Ey.exports = ow;
    });
    var Ty = l((ai) => {
      "use strict";
      var ya = ai && ai.__assign || function() {
        return ya = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, ya.apply(this, arguments);
      };
      Object.defineProperty(ai, "__esModule", { value: true });
      ai.spanToTelemetryContract = void 0;
      var uw = z(), ke = kt();
      function Vp(e) {
        var t = ya({}, e);
        return Object.keys(ke.SpanAttribute).forEach(function(r) {
          delete t[r];
        }), t;
      }
      function cw(e) {
        var t = "|" + e.spanContext().traceId + "." + e.spanContext().spanId + ".", r = Math.round(e._duration[0] * 1e3 + e._duration[1] / 1e6), n = e.attributes["peer.address"] ? e.attributes["peer.address"].toString() : "", i = e.attributes.component ? e.attributes.component.toString() : "", a = i.toUpperCase() === ke.DependencyTypeName.Http || !!e.attributes[ke.SpanAttribute.HttpUrl], s = i.toLowerCase() === ke.DependencyTypeName.Grpc;
        if (a) {
          var o = e.attributes[ke.SpanAttribute.HttpMethod] || "GET", u = new URL(e.attributes[ke.SpanAttribute.HttpUrl].toString()), c = e.attributes[ke.SpanAttribute.HttpHost] || u.host, p = e.attributes[ke.SpanAttribute.HttpPort] || u.port || null, f = u.pathname || "/", d = o + " " + f, h = ke.DependencyTypeName.Http, m = p ? (c + ":" + p).toString() : c.toString(), S = u.toString(), j = e.attributes[ke.SpanAttribute.HttpStatusCode] || e.status.code || 0, oe = j < 400;
          return { id: t, name: d, dependencyTypeName: h, target: m, data: S, success: oe, duration: r, url: S, resultCode: String(j), properties: Vp(e.attributes) };
        } else if (s) {
          var o = e.attributes[ke.SpanAttribute.GrpcMethod] || "rpc", Ae = e.attributes[ke.SpanAttribute.GrpcService], At = Ae ? o + " " + Ae : e.name;
          return { id: t, duration: r, name: At, target: Ae.toString(), data: Ae.toString() || At, url: Ae.toString() || At, dependencyTypeName: ke.DependencyTypeName.Grpc, resultCode: String(e.status.code || 0), success: e.status.code === 0, properties: Vp(e.attributes) };
        } else {
          var tn = e.name, yi = e.links && e.links.map(function(rn) {
            return { operation_Id: rn.context.traceId, id: rn.context.spanId };
          });
          return { id: t, duration: r, name: tn, target: n, data: n || tn, url: n || tn, dependencyTypeName: e.kind === uw.SpanKind.INTERNAL ? ke.DependencyTypeName.InProc : i || e.name, resultCode: String(e.status.code || 0), success: e.status.code === 0, properties: ya(ya({}, Vp(e.attributes)), { "_MS.links": yi || void 0 }) };
        }
      }
      ai.spanToTelemetryContract = cw;
    });
    var Iy = l((lr) => {
      "use strict";
      Object.defineProperty(lr, "__esModule", { value: true });
      lr.enable = lr.subscriber = void 0;
      var $p = z(), Sy = ue(), Ay = Wi(), lw = Ty(), pw = mu(), si = [], fw = function(e) {
        var t = e.data, r = lw.spanToTelemetryContract(t), n = t.spanContext(), i = new Ay();
        i.traceId = n.traceId, i.spanId = n.spanId, i.traceFlag = Ay.formatOpenTelemetryTraceFlags(n.traceFlags), i.parentId = t.parentSpanId ? "|" + n.traceId + "." + t.parentSpanId + "." : null, pw.AsyncScopeManager.with(t, function() {
          si.forEach(function(a) {
            t.kind === $p.SpanKind.SERVER ? a.trackRequest(r) : (t.kind === $p.SpanKind.CLIENT || t.kind === $p.SpanKind.INTERNAL) && a.trackDependency(r);
          });
        });
      };
      lr.subscriber = fw;
      function dw(e, t) {
        e ? (si.length === 0 && Sy.channel.subscribe("azure-coretracing", lr.subscriber), si.push(t)) : (si = si.filter(function(r) {
          return r != t;
        }), si.length === 0 && Sy.channel.unsubscribe("azure-coretracing", lr.subscriber));
      }
      lr.enable = dw;
    });
    var Cy = l((pr) => {
      "use strict";
      Object.defineProperty(pr, "__esModule", { value: true });
      pr.enable = pr.subscriber = void 0;
      var by = ue(), oi = [], hw = function(e) {
        e.data.event.commandName !== "ismaster" && oi.forEach(function(t) {
          var r = e.data.startedData && e.data.startedData.databaseName || "Unknown database";
          t.trackDependency({ target: r, data: e.data.event.commandName, name: e.data.event.commandName, duration: e.data.event.duration, success: e.data.succeeded, resultCode: e.data.succeeded ? "0" : "1", time: e.data.startedData.time, dependencyTypeName: "mongodb" });
        });
      };
      pr.subscriber = hw;
      function _w(e, t) {
        e ? (oi.length === 0 && by.channel.subscribe("mongodb", pr.subscriber), oi.push(t)) : (oi = oi.filter(function(r) {
          return r != t;
        }), oi.length === 0 && by.channel.unsubscribe("mongodb", pr.subscriber));
      }
      pr.enable = _w;
    });
    var Py = l((fr) => {
      "use strict";
      Object.defineProperty(fr, "__esModule", { value: true });
      fr.enable = fr.subscriber = void 0;
      var Oy = ue(), ui = [], vw = function(e) {
        ui.forEach(function(t) {
          var r = e.data.query || {}, n = r.sql || "Unknown query", i = !e.data.err, a = r._connection || {}, s = a.config || {}, o = s.socketPath ? s.socketPath : (s.host || "localhost") + ":" + s.port;
          t.trackDependency({ target: o, data: n, name: n, duration: e.data.duration, success: i, resultCode: i ? "0" : "1", time: e.data.time, dependencyTypeName: "mysql" });
        });
      };
      fr.subscriber = vw;
      function gw(e, t) {
        e ? (ui.length === 0 && Oy.channel.subscribe("mysql", fr.subscriber), ui.push(t)) : (ui = ui.filter(function(r) {
          return r != t;
        }), ui.length === 0 && Oy.channel.unsubscribe("mysql", fr.subscriber));
      }
      fr.enable = gw;
    });
    var Ny = l((dr) => {
      "use strict";
      Object.defineProperty(dr, "__esModule", { value: true });
      dr.enable = dr.subscriber = void 0;
      var Ry = ue(), ci = [], mw = function(e) {
        ci.forEach(function(t) {
          e.data.commandObj.command !== "info" && t.trackDependency({ target: e.data.address, name: e.data.commandObj.command, data: e.data.commandObj.command, duration: e.data.duration, success: !e.data.err, resultCode: e.data.err ? "1" : "0", time: e.data.time, dependencyTypeName: "redis" });
        });
      };
      dr.subscriber = mw;
      function Ew(e, t) {
        e ? (ci.length === 0 && Ry.channel.subscribe("redis", dr.subscriber), ci.push(t)) : (ci = ci.filter(function(r) {
          return r != t;
        }), ci.length === 0 && Ry.channel.unsubscribe("redis", dr.subscriber));
      }
      dr.enable = Ew;
    });
    var wy = l((hr) => {
      "use strict";
      Object.defineProperty(hr, "__esModule", { value: true });
      hr.enable = hr.subscriber = void 0;
      var Dy = ue(), li = [], yw = function(e) {
        li.forEach(function(t) {
          var r = e.data.query, n = r.preparable && r.preparable.text || r.plan || r.text || "unknown query", i = !e.data.error, a = e.data.database.host + ":" + e.data.database.port;
          t.trackDependency({ target: a, data: n, name: n, duration: e.data.duration, success: i, resultCode: i ? "0" : "1", time: e.data.time, dependencyTypeName: "postgres" });
        });
      };
      hr.subscriber = yw;
      function Tw(e, t) {
        e ? (li.length === 0 && Dy.channel.subscribe("postgres", hr.subscriber), li.push(t)) : (li = li.filter(function(r) {
          return r != t;
        }), li.length === 0 && Dy.channel.unsubscribe("postgres", hr.subscriber));
      }
      hr.enable = Tw;
    });
    var di = l((Xp, qy) => {
      "use strict";
      var iu = Xp && Xp.__spreadArrays || function() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), i = 0, t = 0; t < r; t++)
          for (var a = arguments[t], s = 0, o = a.length; s < o; s++, i++)
            n[i] = a[s];
        return n;
      }, pi = require("http"), fi = require("https"), zp = ve(), xy = Be(), _r = jn(), Sw = yy(), My = gr(), Ly = Gr(), Kp = Wi(), Aw = fo(), Iw = function() {
        function e(t) {
          if (e.INSTANCE)
            throw new Error("Client request tracking should be configured from the applicationInsights object");
          e.INSTANCE = this, this._client = t;
        }
        return e.prototype.enable = function(t) {
          this._isEnabled = t, this._isEnabled && !this._isInitialized && this._initialize(), Aw.IsInitialized && (Iy().enable(true, this._client), Cy().enable(t, this._client), Py().enable(t, this._client), Ny().enable(t, this._client), wy().enable(t, this._client));
        }, e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.prototype._initialize = function() {
          var t = this;
          this._isInitialized = true;
          var r = pi.request, n = fi.request, i = function(a, s) {
            var o = !s[e.disableCollectionRequestOption] && !a[e.alreadyAutoCollectedFlag];
            s.headers && s.headers["user-agent"] && s.headers["user-agent"].toString().indexOf("azsdk-js") !== -1 && (o = false), a[e.alreadyAutoCollectedFlag] = true, a && s && o && (My.CorrelationContextManager.wrapEmitter(a), e.trackRequest(t._client, { options: s, request: a }));
          };
          pi.request = function(a) {
            for (var s = [], o = 1; o < arguments.length; o++)
              s[o - 1] = arguments[o];
            var u = r.call.apply(r, iu([pi, a], s));
            return i(u, a), u;
          }, fi.request = function(a) {
            for (var s = [], o = 1; o < arguments.length; o++)
              s[o - 1] = arguments[o];
            var u = n.call.apply(n, iu([fi, a], s));
            return i(u, a), u;
          }, pi.get = function(a) {
            for (var s, o = [], u = 1; u < arguments.length; u++)
              o[u - 1] = arguments[u];
            var c = (s = pi.request).call.apply(s, iu([pi, a], o));
            return c.end(), c;
          }, fi.get = function(a) {
            for (var s, o = [], u = 1; u < arguments.length; u++)
              o[u - 1] = arguments[u];
            var c = (s = fi.request).call.apply(s, iu([fi, a], o));
            return c.end(), c;
          };
        }, e.trackRequest = function(t, r) {
          if (!r.options || !r.request || !t) {
            zp.info("AutoCollectHttpDependencies.trackRequest was called with invalid parameters: ", !r.options, !r.request, !t);
            return;
          }
          var n = new Sw(r.options, r.request), i = My.CorrelationContextManager.getCurrentContext(), a, s;
          if (i && i.operation && i.operation.traceparent && Kp.isValidTraceId(i.operation.traceparent.traceId))
            i.operation.traceparent.updateSpanId(), a = i.operation.traceparent.getBackCompatRequestId();
          else if (Ly.w3cEnabled) {
            var o = new Kp();
            s = o.toString(), a = o.getBackCompatRequestId();
          } else
            a = i && i.operation && i.operation.parentId + e.requestNumber++ + ".";
          if (xy.canIncludeCorrelationHeader(t, n.getUrl()) && r.request.getHeader && r.request.setHeader && t.config && t.config.correlationId) {
            var u = r.request.getHeader(_r.requestContextHeader);
            try {
              xy.safeIncludeCorrelationHeader(t, r.request, u);
            } catch (f) {
              zp.warn("Request-Context header could not be set. Correlation of requests may be lost", f);
            }
            if (i && i.operation)
              try {
                if (r.request.setHeader(_r.requestIdHeader, a), t.config.ignoreLegacyHeaders || (r.request.setHeader(_r.parentIdHeader, i.operation.id), r.request.setHeader(_r.rootIdHeader, a)), s || i.operation.traceparent)
                  r.request.setHeader(_r.traceparentHeader, s || i.operation.traceparent.toString());
                else if (Ly.w3cEnabled) {
                  var o = new Kp().toString();
                  r.request.setHeader(_r.traceparentHeader, o);
                }
                if (i.operation.tracestate) {
                  var c = i.operation.tracestate.toString();
                  c && r.request.setHeader(_r.traceStateHeader, c);
                }
                var p = i.customProperties.serializeToHeader();
                p && r.request.setHeader(_r.correlationContextHeader, p);
              } catch (f) {
                zp.warn("Correlation headers could not be set. Correlation of requests may be lost.", f);
              }
          }
          r.request.on && (r.request.on("response", function(f) {
            n.onResponse(f);
            var d = n.getDependencyTelemetry(r, a);
            d.contextObjects = d.contextObjects || {}, d.contextObjects["http.RequestOptions"] = r.options, d.contextObjects["http.ClientRequest"] = r.request, d.contextObjects["http.ClientResponse"] = f, t.trackDependency(d);
          }), r.request.on("error", function(f) {
            n.onError(f);
            var d = n.getDependencyTelemetry(r, a);
            d.contextObjects = d.contextObjects || {}, d.contextObjects["http.RequestOptions"] = r.options, d.contextObjects["http.ClientRequest"] = r.request, d.contextObjects.Error = f, t.trackDependency(d);
          }), r.request.on("abort", function() {
            n.onError(new Error());
            var f = n.getDependencyTelemetry(r, a);
            f.contextObjects = f.contextObjects || {}, f.contextObjects["http.RequestOptions"] = r.options, f.contextObjects["http.ClientRequest"] = r.request, t.trackDependency(f);
          }));
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false), this._isInitialized = false;
        }, e.disableCollectionRequestOption = "disableAppInsightsAutoCollection", e.requestNumber = 1, e.alreadyAutoCollectedFlag = "_appInsightsAutoCollected", e;
      }();
      qy.exports = Iw;
    });
    var Hy = l((K1, ky) => {
      "use strict";
      var bw = require("os"), jy = kt(), Cw = Be(), Ow = Ea(), Pw = di(), Rw = "http://169.254.169.254/metadata/instance/compute", Nw = "api-version=2017-12-01", Dw = "format=json", ww = "ENETUNREACH", xw = function() {
        function e(t) {
          this._collectionInterval = 9e5, this._vmData = {}, this._azInst_vmId = "", this._azInst_subscriptionId = "", this._azInst_osType = "", e.INSTANCE || (e.INSTANCE = this), this._isInitialized = false, this._client = t;
        }
        return e.prototype.enable = function(t, r) {
          var n = this;
          this._isEnabled = t, this._isEnabled && !this._isInitialized && (this._isInitialized = true), t ? this._handle || (this._handle = setInterval(function() {
            return n.trackHeartBeat(r, function() {
            });
          }, this._collectionInterval), this._handle.unref()) : this._handle && (clearInterval(this._handle), this._handle = null);
        }, e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.isEnabled = function() {
          return e.INSTANCE && e.INSTANCE._isEnabled;
        }, e.prototype.trackHeartBeat = function(t, r) {
          var n = this, i = false, a = {}, s = Ow.sdkVersion;
          a.sdk = s, a.osType = bw.type(), process.env.WEBSITE_SITE_NAME ? (a.appSrv_SiteName = process.env.WEBSITE_SITE_NAME || "", a.appSrv_wsStamp = process.env.WEBSITE_HOME_STAMPNAME || "", a.appSrv_wsHost = process.env.WEBSITE_HOSTNAME || "") : process.env.FUNCTIONS_WORKER_RUNTIME ? a.azfunction_appId = process.env.WEBSITE_HOSTNAME : t && (this._isVM === void 0 ? (i = true, this._getAzureComputeMetadata(t, function() {
            n._isVM && Object.keys(n._vmData).length > 0 && (a.azInst_vmId = n._vmData.vmId || "", a.azInst_subscriptionId = n._vmData.subscriptionId || "", a.azInst_osType = n._vmData.osType || "", n._azInst_vmId = n._vmData.vmId || "", n._azInst_subscriptionId = n._vmData.subscriptionId || "", n._azInst_osType = n._vmData.osType || ""), n._client.trackMetric({ name: jy.HeartBeatMetricName, value: 0, properties: a }), r();
          })) : this._isVM && (a.azInst_vmId = this._azInst_vmId, a.azInst_subscriptionId = this._azInst_subscriptionId, a.azInst_osType = this._azInst_osType)), i || (this._client.trackMetric({ name: jy.HeartBeatMetricName, value: 0, properties: a }), r());
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false), this._isInitialized = false;
        }, e.prototype._getAzureComputeMetadata = function(t, r) {
          var n, i = this, a = Rw + "?" + Nw + "&" + Dw, s = (n = { method: "GET" }, n[Pw.disableCollectionRequestOption] = true, n.headers = { Metadata: "True" }, n), o = Cw.makeRequest(t, a, s, function(u) {
            if (u.statusCode === 200) {
              i._isVM = true;
              var c = "";
              u.on("data", function(p) {
                c += p;
              }), u.on("end", function() {
                i._vmData = i._isJSON(c) ? JSON.parse(c) : {}, r();
              });
            } else
              r();
          });
          o && (o.on("error", function(u) {
            u && u.message && u.message.indexOf(ww) > -1 && (i._isVM = false), r();
          }), o.end());
        }, e.prototype._isJSON = function(t) {
          try {
            return JSON.parse(t) && !!t;
          } catch (r) {
            return false;
          }
        }, e;
      }();
      ky.exports = xw;
    });
    var Qp = l((X1, Vy) => {
      "use strict";
      var Uy = require("http"), By = require("https"), Gy = ve(), Fy = Be(), Mw = jn(), Yp = Il(), Ut = gr(), Lw = Jo(), qw = function() {
        function e(t) {
          if (e.INSTANCE)
            throw new Error("Server request tracking should be configured from the applicationInsights object");
          e.INSTANCE = this, this._client = t;
        }
        return e.prototype.enable = function(t) {
          this._isEnabled = t, (this._isAutoCorrelating || this._isEnabled || Lw.isEnabled()) && !this._isInitialized && (this.useAutoCorrelation(this._isAutoCorrelating), this._initialize());
        }, e.prototype.useAutoCorrelation = function(t, r) {
          t && !this._isAutoCorrelating ? Ut.CorrelationContextManager.enable(r) : !t && this._isAutoCorrelating && Ut.CorrelationContextManager.disable(), this._isAutoCorrelating = t;
        }, e.prototype.isInitialized = function() {
          return this._isInitialized;
        }, e.prototype.isAutoCorrelating = function() {
          return this._isAutoCorrelating;
        }, e.prototype._generateCorrelationContext = function(t) {
          if (!!this._isAutoCorrelating)
            return Ut.CorrelationContextManager.generateContextObject(t.getOperationId(this._client.context.tags), t.getRequestId(), t.getOperationName(this._client.context.tags), t.getCorrelationContextHeader(), t.getTraceparent(), t.getTracestate());
        }, e.prototype._initialize = function() {
          var t = this;
          this._isInitialized = true;
          var r = function(s) {
            if (!!s) {
              if (typeof s != "function")
                throw new Error("onRequest handler must be a function");
              return function(o, u) {
                Ut.CorrelationContextManager.wrapEmitter(o), Ut.CorrelationContextManager.wrapEmitter(u);
                var c = o && !o[e.alreadyAutoCollectedFlag];
                if (o && c) {
                  var p = new Yp(o), f = t._generateCorrelationContext(p);
                  Ut.CorrelationContextManager.runWithContext(f, function() {
                    t._isEnabled && (o[e.alreadyAutoCollectedFlag] = true, e.trackRequest(t._client, { request: o, response: u }, p)), typeof s == "function" && s(o, u);
                  });
                } else
                  typeof s == "function" && s(o, u);
              };
            }
          }, n = function(s) {
            var o = s.addListener.bind(s);
            s.addListener = function(u, c) {
              switch (u) {
                case "request":
                case "checkContinue":
                  return o(u, r(c));
                default:
                  return o(u, c);
              }
            }, s.on = s.addListener;
          }, i = Uy.createServer;
          Uy.createServer = function(s, o) {
            if (o && typeof o == "function") {
              var u = i(s, r(o));
              return n(u), u;
            } else {
              var u = i(r(s));
              return n(u), u;
            }
          };
          var a = By.createServer;
          By.createServer = function(s, o) {
            var u = a(s, r(o));
            return n(u), u;
          };
        }, e.trackRequestSync = function(t, r) {
          if (!r.request || !r.response || !t) {
            Gy.info("AutoCollectHttpRequests.trackRequestSync was called with invalid parameters: ", !r.request, !r.response, !t);
            return;
          }
          e.addResponseCorrelationIdHeader(t, r.response);
          var n = Ut.CorrelationContextManager.getCurrentContext(), i = new Yp(r.request, n && n.operation.parentId);
          n && (n.operation.id = i.getOperationId(t.context.tags) || n.operation.id, n.operation.name = i.getOperationName(t.context.tags) || n.operation.name, n.operation.parentId = i.getRequestId() || n.operation.parentId, n.customProperties.addHeaderData(i.getCorrelationContextHeader())), e.endRequest(t, i, r, r.duration, r.error);
        }, e.trackRequest = function(t, r, n) {
          if (!r.request || !r.response || !t) {
            Gy.info("AutoCollectHttpRequests.trackRequest was called with invalid parameters: ", !r.request, !r.response, !t);
            return;
          }
          var i = Ut.CorrelationContextManager.getCurrentContext(), a = n || new Yp(r.request, i && i.operation.parentId);
          Fy.canIncludeCorrelationHeader(t, a.getUrl()) && e.addResponseCorrelationIdHeader(t, r.response), i && !n && (i.operation.id = a.getOperationId(t.context.tags) || i.operation.id, i.operation.name = a.getOperationName(t.context.tags) || i.operation.name, i.operation.parentId = a.getOperationParentId(t.context.tags) || i.operation.parentId, i.customProperties.addHeaderData(a.getCorrelationContextHeader())), r.response.once && r.response.once("finish", function() {
            e.endRequest(t, a, r, null, null);
          }), r.request.on && r.request.on("error", function(s) {
            e.endRequest(t, a, r, null, s);
          }), r.request.on && r.request.on("aborted", function() {
            var s = "The request has been aborted and the network socket has closed.";
            e.endRequest(t, a, r, null, s);
          });
        }, e.addResponseCorrelationIdHeader = function(t, r) {
          if (t.config && t.config.correlationId && r.getHeader && r.setHeader && !r.headersSent) {
            var n = r.getHeader(Mw.requestContextHeader);
            Fy.safeIncludeCorrelationHeader(t, r, n);
          }
        }, e.endRequest = function(t, r, n, i, a) {
          a ? r.onError(a, i) : r.onResponse(n.response, i);
          var s = r.getRequestTelemetry(n);
          if (s.tagOverrides = r.getRequestTags(t.context.tags), n.tagOverrides)
            for (var o in n.tagOverrides)
              s.tagOverrides[o] = n.tagOverrides[o];
          var u = r.getLegacyRootId();
          u && (s.properties.ai_legacyRootId = u), s.contextObjects = s.contextObjects || {}, s.contextObjects["http.ServerRequest"] = n.request, s.contextObjects["http.ServerResponse"] = n.response, t.trackRequest(s);
        }, e.prototype.dispose = function() {
          e.INSTANCE = null, this.enable(false), this._isInitialized = false, Ut.CorrelationContextManager.disable(), this._isAutoCorrelating = false;
        }, e.alreadyAutoCollectedFlag = "_appInsightsAutoCollected", e;
      }();
      Vy.exports = qw;
    });
    var Ky = l((Zp, zy) => {
      "use strict";
      var et = Zp && Zp.__assign || function() {
        return et = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, et.apply(this, arguments);
      }, Wp = require("os"), Jr = De(), $y = kt(), jw = Be(), kw = ve(), Hw = jw.w3cTraceId(), Uw = function() {
        function e() {
        }
        return e.createQuickPulseEnvelope = function(t, r, n, i) {
          var a = Wp && typeof Wp.hostname == "function" && Wp.hostname() || "Unknown", s = i.tags && i.keys && i.keys.cloudRoleInstance && i.tags[i.keys.cloudRoleInstance] || a, o = i.tags && i.keys && i.keys.cloudRole && i.tags[i.keys.cloudRole] || null, u = { Documents: r.length > 0 ? r : null, InstrumentationKey: n.instrumentationKey || "", Metrics: t.length > 0 ? t : null, InvariantVersion: 1, Timestamp: "/Date(" + Date.now() + ")/", Version: i.tags[i.keys.internalSdkVersion], StreamId: Hw, MachineName: a, Instance: s, RoleName: o };
          return u;
        }, e.createQuickPulseMetric = function(t) {
          var r;
          return r = { Name: t.name, Value: t.value, Weight: t.count || 1 }, r;
        }, e.telemetryEnvelopeToQuickPulseDocument = function(t) {
          switch (t.data.baseType) {
            case Jr.TelemetryTypeString.Event:
              return e.createQuickPulseEventDocument(t);
            case Jr.TelemetryTypeString.Exception:
              return e.createQuickPulseExceptionDocument(t);
            case Jr.TelemetryTypeString.Trace:
              return e.createQuickPulseTraceDocument(t);
            case Jr.TelemetryTypeString.Dependency:
              return e.createQuickPulseDependencyDocument(t);
            case Jr.TelemetryTypeString.Request:
              return e.createQuickPulseRequestDocument(t);
          }
          return null;
        }, e.createQuickPulseEventDocument = function(t) {
          var r = e.createQuickPulseDocument(t), n = t.data.baseData.name, i = et(et({}, r), { Name: n });
          return i;
        }, e.createQuickPulseTraceDocument = function(t) {
          var r = e.createQuickPulseDocument(t), n = t.data.baseData.severityLevel || 0, i = et(et({}, r), { Message: t.data.baseData.message, SeverityLevel: Jr.SeverityLevel[n] });
          return i;
        }, e.createQuickPulseExceptionDocument = function(t) {
          var r = e.createQuickPulseDocument(t), n = t.data.baseData.exceptions, i = "", a = "", s = "";
          n && n.length > 0 && (n[0].parsedStack && n[0].parsedStack.length > 0 ? n[0].parsedStack.forEach(function(u) {
            i += u.assembly + `
`;
          }) : n[0].stack && n[0].stack.length > 0 && (i = n[0].stack), a = n[0].message, s = n[0].typeName);
          var o = et(et({}, r), { Exception: i, ExceptionMessage: a, ExceptionType: s });
          return o;
        }, e.createQuickPulseRequestDocument = function(t) {
          var r = e.createQuickPulseDocument(t), n = t.data.baseData, i = et(et({}, r), { Name: n.name, Success: n.success, Duration: n.duration, ResponseCode: n.responseCode, OperationName: n.name });
          return i;
        }, e.createQuickPulseDependencyDocument = function(t) {
          var r = e.createQuickPulseDocument(t), n = t.data.baseData, i = et(et({}, r), { Name: n.name, Target: n.target, Success: n.success, Duration: n.duration, ResultCode: n.resultCode, CommandName: n.data, OperationName: r.OperationId, DependencyTypeName: n.type });
          return i;
        }, e.createQuickPulseDocument = function(t) {
          var r, n, i, a;
          t.data.baseType ? (n = $y.TelemetryTypeStringToQuickPulseType[t.data.baseType], r = $y.TelemetryTypeStringToQuickPulseDocumentType[t.data.baseType]) : kw.warn("Document type invalid; not sending live metric document", t.data.baseType), i = t.tags[e.keys.operationId], a = e.aggregateProperties(t);
          var s = { DocumentType: r, __type: n, OperationId: i, Version: "1.0", Properties: a };
          return s;
        }, e.aggregateProperties = function(t) {
          var r = [], n = t.data.baseData.measurements || {};
          for (var i in n)
            if (n.hasOwnProperty(i)) {
              var a = n[i], s = { key: i, value: a };
              r.push(s);
            }
          var o = t.data.baseData.properties || {};
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i], s = { key: i, value: a };
              r.push(s);
            }
          return r;
        }, e.keys = new Jr.ContextTagKeys(), e;
      }();
      zy.exports = Uw;
    });
    var Yy = l((Y1, Xy) => {
      "use strict";
      var Bw = function() {
        return (Date.now() + 621355968e5) * 1e4;
      };
      Xy.exports = { getTransmissionTime: Bw };
    });
    var eT = l((Ta, Jy) => {
      "use strict";
      var Qy = Ta && Ta.__awaiter || function(e, t, r, n) {
        function i(a) {
          return a instanceof r ? a : new r(function(s) {
            s(a);
          });
        }
        return new (r || (r = Promise))(function(a, s) {
          function o(p) {
            try {
              c(n.next(p));
            } catch (f) {
              s(f);
            }
          }
          function u(p) {
            try {
              c(n.throw(p));
            } catch (f) {
              s(f);
            }
          }
          function c(p) {
            p.done ? a(p.value) : i(p.value).then(o, u);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }, Wy = Ta && Ta.__generator || function(e, t) {
        var r = { label: 0, sent: function() {
          if (a[0] & 1)
            throw a[1];
          return a[1];
        }, trys: [], ops: [] }, n, i, a, s;
        return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
          return this;
        }), s;
        function o(c) {
          return function(p) {
            return u([c, p]);
          };
        }
        function u(c) {
          if (n)
            throw new TypeError("Generator is already executing.");
          for (; r; )
            try {
              if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
                return a;
              switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
                case 0:
                case 1:
                  a = c;
                  break;
                case 4:
                  return r.label++, { value: c[1], done: false };
                case 5:
                  r.label++, i = c[1], c = [0];
                  continue;
                case 7:
                  c = r.ops.pop(), r.trys.pop();
                  continue;
                default:
                  if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    r = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                    r.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && r.label < a[1]) {
                    r.label = a[1], a = c;
                    break;
                  }
                  if (a && r.label < a[2]) {
                    r.label = a[2], r.ops.push(c);
                    break;
                  }
                  a[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              c = t.call(e, r);
            } catch (p) {
              c = [6, p], i = 0;
            } finally {
              n = a = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return { value: c[0] ? c[1] : void 0, done: true };
        }
      }, Gw = require("https"), Fw = di(), Zy = ve(), Vw = Yy(), $w = Be(), tt = { method: "POST", time: "x-ms-qps-transmission-time", pollingIntervalHint: "x-ms-qps-service-polling-interval-hint", endpointRedirect: "x-ms-qps-service-endpoint-redirect", instanceName: "x-ms-qps-instance-name", streamId: "x-ms-qps-stream-id", machineName: "x-ms-qps-machine-name", roleName: "x-ms-qps-role-name", streamid: "x-ms-qps-stream-id", invariantVersion: "x-ms-qps-invariant-version", subscribed: "x-ms-qps-subscribed" }, zw = function() {
        function e(t) {
          this._config = t, this._consecutiveErrors = 0;
        }
        return e.prototype.ping = function(t, r, n) {
          var i = [{ name: tt.streamId, value: t.StreamId }, { name: tt.machineName, value: t.MachineName }, { name: tt.roleName, value: t.RoleName }, { name: tt.instanceName, value: t.Instance }, { name: tt.invariantVersion, value: t.InvariantVersion.toString() }];
          this._submitData(t, r, n, "ping", i);
        }, e.prototype.post = function(t, r, n) {
          return Qy(this, void 0, void 0, function() {
            return Wy(this, function(i) {
              switch (i.label) {
                case 0:
                  return [4, this._submitData([t], r, n, "post")];
                case 1:
                  return i.sent(), [2];
              }
            });
          });
        }, e.prototype._submitData = function(t, r, n, i, a) {
          return Qy(this, void 0, void 0, function() {
            var s, o, u, c, p, f = this;
            return Wy(this, function(d) {
              return s = JSON.stringify(t), o = (c = {}, c[Fw.disableCollectionRequestOption] = true, c.host = r && r.length > 0 ? r : this._config.quickPulseHost, c.method = tt.method, c.path = "/QuickPulseService.svc/" + i + "?ikey=" + this._config.instrumentationKey, c.headers = (p = { Expect: "100-continue" }, p[tt.time] = Vw.getTransmissionTime(), p["Content-Type"] = "application/json", p["Content-Length"] = Buffer.byteLength(s), p), c), a && a.length > 0 && a.forEach(function(h) {
                return o.headers[h.name] = h.value;
              }), this._config.httpsAgent ? o.agent = this._config.httpsAgent : o.agent = $w.tlsRestrictedAgent, u = Gw.request(o, function(h) {
                if (h.statusCode == 200) {
                  var m = h.headers[tt.subscribed] === "true", S = h.headers[tt.endpointRedirect] ? h.headers[tt.endpointRedirect].toString() : null, j = h.headers[tt.pollingIntervalHint] ? parseInt(h.headers[tt.pollingIntervalHint].toString()) : null;
                  f._consecutiveErrors = 0, n(m, h, S, j);
                } else
                  f._onError("StatusCode:" + h.statusCode + " StatusMessage:" + h.statusMessage), n();
              }), u.on("error", function(h) {
                f._onError(h), n();
              }), u.write(s), u.end(), [2];
            });
          });
        }, e.prototype._onError = function(t) {
          this._consecutiveErrors++;
          var r = "Transient error connecting to the Live Metrics endpoint. This packet will not appear in your Live Metrics Stream. Error:";
          this._consecutiveErrors % e.MAX_QPS_FAILURES_BEFORE_WARN == 0 ? (r = "Live Metrics endpoint could not be reached " + this._consecutiveErrors + " consecutive times. Most recent error:", Zy.warn(e.TAG, r, t)) : Zy.info(e.TAG, r, t);
        }, e.TAG = "QuickPulseSender", e.MAX_QPS_FAILURES_BEFORE_WARN = 25, e;
      }();
      Jy.exports = zw;
    });
    var aT = l((Sa, iT) => {
      "use strict";
      var tT = Sa && Sa.__awaiter || function(e, t, r, n) {
        function i(a) {
          return a instanceof r ? a : new r(function(s) {
            s(a);
          });
        }
        return new (r || (r = Promise))(function(a, s) {
          function o(p) {
            try {
              c(n.next(p));
            } catch (f) {
              s(f);
            }
          }
          function u(p) {
            try {
              c(n.throw(p));
            } catch (f) {
              s(f);
            }
          }
          function c(p) {
            p.done ? a(p.value) : i(p.value).then(o, u);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }, rT = Sa && Sa.__generator || function(e, t) {
        var r = { label: 0, sent: function() {
          if (a[0] & 1)
            throw a[1];
          return a[1];
        }, trys: [], ops: [] }, n, i, a, s;
        return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
          return this;
        }), s;
        function o(c) {
          return function(p) {
            return u([c, p]);
          };
        }
        function u(c) {
          if (n)
            throw new TypeError("Generator is already executing.");
          for (; r; )
            try {
              if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
                return a;
              switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
                case 0:
                case 1:
                  a = c;
                  break;
                case 4:
                  return r.label++, { value: c[1], done: false };
                case 5:
                  r.label++, i = c[1], c = [0];
                  continue;
                case 7:
                  c = r.ops.pop(), r.trys.pop();
                  continue;
                default:
                  if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    r = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                    r.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && r.label < a[1]) {
                    r.label = a[1], a = c;
                    break;
                  }
                  if (a && r.label < a[2]) {
                    r.label = a[2], r.ops.push(c);
                    break;
                  }
                  a[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              c = t.call(e, r);
            } catch (p) {
              c = [6, p], i = 0;
            } finally {
              n = a = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return { value: c[0] ? c[1] : void 0, done: true };
        }
      }, nT = ve(), Jp = Ky(), Kw = eT(), Xw = kt(), Yw = Ea(), Qw = function() {
        function e(t, r) {
          this._isCollectingData = false, this._lastSuccessTime = Date.now(), this._lastSendSucceeded = true, this._metrics = {}, this._documents = [], this._collectors = [], this._redirectedHost = null, this._pollingIntervalHint = -1, this.config = t, this.context = r || new Yw(), this._sender = new Kw(this.config), this._isEnabled = false;
        }
        return e.prototype.addCollector = function(t) {
          this._collectors.push(t);
        }, e.prototype.trackMetric = function(t) {
          this._addMetric(t);
        }, e.prototype.addDocument = function(t) {
          var r = Jp.telemetryEnvelopeToQuickPulseDocument(t);
          r && this._documents.push(r);
        }, e.prototype.enable = function(t) {
          t && !this._isEnabled ? (this._isEnabled = true, this._goQuickPulse()) : !t && this._isEnabled && (this._isEnabled = false, clearTimeout(this._handle), this._handle = void 0);
        }, e.prototype.enableCollectors = function(t) {
          this._collectors.forEach(function(r) {
            r.enable(t);
          });
        }, e.prototype._addMetric = function(t) {
          var r = t.value, n = t.count || 1, i = Xw.PerformanceToQuickPulseCounter[t.name];
          i && (this._metrics[i] ? (this._metrics[i].Value = (this._metrics[i].Value * this._metrics[i].Weight + r * n) / (this._metrics[i].Weight + n), this._metrics[i].Weight += n) : (this._metrics[i] = Jp.createQuickPulseMetric(t), this._metrics[i].Name = i, this._metrics[i].Weight = 1));
        }, e.prototype._resetQuickPulseBuffer = function() {
          delete this._metrics, this._metrics = {}, this._documents.length = 0;
        }, e.prototype._goQuickPulse = function() {
          return tT(this, void 0, void 0, function() {
            var t, r, n, i, a = this;
            return rT(this, function(s) {
              switch (s.label) {
                case 0:
                  return t = Object.keys(this._metrics).map(function(o) {
                    return a._metrics[o];
                  }), r = Jp.createQuickPulseEnvelope(t, this._documents.slice(), this.config, this.context), this._resetQuickPulseBuffer(), this._isCollectingData ? [4, this._post(r)] : [3, 2];
                case 1:
                  return s.sent(), [3, 3];
                case 2:
                  this._ping(r), s.label = 3;
                case 3:
                  return n = this._pollingIntervalHint > 0 ? this._pollingIntervalHint : e.PING_INTERVAL, i = this._isCollectingData ? e.POST_INTERVAL : n, this._isCollectingData && Date.now() - this._lastSuccessTime >= e.MAX_POST_WAIT_TIME && !this._lastSendSucceeded ? (this._isCollectingData = false, i = e.FALLBACK_INTERVAL) : !this._isCollectingData && Date.now() - this._lastSuccessTime >= e.MAX_PING_WAIT_TIME && !this._lastSendSucceeded && (i = e.FALLBACK_INTERVAL), this._lastSendSucceeded = null, this._handle = setTimeout(this._goQuickPulse.bind(this), i), this._handle.unref(), [2];
              }
            });
          });
        }, e.prototype._ping = function(t) {
          this._sender.ping(t, this._redirectedHost, this._quickPulseDone.bind(this));
        }, e.prototype._post = function(t) {
          return tT(this, void 0, void 0, function() {
            return rT(this, function(r) {
              switch (r.label) {
                case 0:
                  return [4, this._sender.post(t, this._redirectedHost, this._quickPulseDone.bind(this))];
                case 1:
                  return r.sent(), [2];
              }
            });
          });
        }, e.prototype._quickPulseDone = function(t, r, n, i) {
          t != null ? (this._isCollectingData !== t && (nT.info("Live Metrics sending data", t), this.enableCollectors(t)), this._isCollectingData = t, n && n.length > 0 && (this._redirectedHost = n, nT.info("Redirecting endpoint to: ", n)), i && i > 0 && (this._pollingIntervalHint = i), r && r.statusCode < 300 && r.statusCode >= 200 ? (this._lastSuccessTime = Date.now(), this._lastSendSucceeded = true) : this._lastSendSucceeded = false) : this._lastSendSucceeded = false;
        }, e.MAX_POST_WAIT_TIME = 2e4, e.MAX_PING_WAIT_TIME = 6e4, e.FALLBACK_INTERVAL = 6e4, e.PING_INTERVAL = 5e3, e.POST_INTERVAL = 1e3, e;
      }();
      iT.exports = Qw;
    });
    var uT = l((Q1, oT) => {
      "use strict";
      var sT = kt(), Ww = function() {
        function e() {
        }
        return e.parse = function(t) {
          if (!t)
            return {};
          var r = t.split(e._FIELDS_SEPARATOR), n = r.reduce(function(a, s) {
            var o = s.split(e._FIELD_KEY_VALUE_SEPARATOR);
            if (o.length === 2) {
              var u = o[0].toLowerCase(), c = o[1];
              a[u] = c;
            }
            return a;
          }, {});
          if (Object.keys(n).length > 0) {
            if (n.endpointsuffix) {
              var i = n.location ? n.location + "." : "";
              n.ingestionendpoint = n.ingestionendpoint || "https://" + i + "dc." + n.endpointsuffix, n.liveendpoint = n.liveendpoint || "https://" + i + "live." + n.endpointsuffix;
            }
            n.ingestionendpoint = n.ingestionendpoint || sT.DEFAULT_BREEZE_ENDPOINT, n.liveendpoint = n.liveendpoint || sT.DEFAULT_LIVEMETRICS_ENDPOINT;
          }
          return n;
        }, e._FIELDS_SEPARATOR = ";", e._FIELD_KEY_VALUE_SEPARATOR = "=", e;
      }();
      oT.exports = Ww;
    });
    var tf = l((Z1, pT) => {
      "use strict";
      var ef = Gr(), cT = uT(), W1 = ve(), lT = kt(), Zw = require("url"), Jw = function() {
        function e(t) {
          var r = this;
          this.endpointBase = lT.DEFAULT_BREEZE_ENDPOINT;
          var n = process.env[e.ENV_connectionString], i = cT.parse(t), a = cT.parse(n), s = !i.instrumentationkey && Object.keys(i).length > 0 ? null : t;
          this.instrumentationKey = i.instrumentationkey || s || a.instrumentationkey || e._getInstrumentationKey(), !e._validateInstrumentationKey(this.instrumentationKey), this.endpointUrl = (i.ingestionendpoint || a.ingestionendpoint || this.endpointBase) + "/v2.1/track", this.maxBatchSize = 250, this.maxBatchIntervalMs = 15e3, this.disableAppInsights = false, this.samplingPercentage = 100, this.correlationIdRetryIntervalMs = 30 * 1e3, this.correlationHeaderExcludedDomains = ["*.core.windows.net", "*.core.chinacloudapi.cn", "*.core.cloudapi.de", "*.core.usgovcloudapi.net", "*.core.microsoft.scloud", "*.core.eaglex.ic.gov"], this.setCorrelationId = function(o) {
            return r.correlationId = o;
          }, this.proxyHttpUrl = process.env[e.ENV_http_proxy] || void 0, this.proxyHttpsUrl = process.env[e.ENV_https_proxy] || void 0, this.httpAgent = void 0, this.httpsAgent = void 0, this.profileQueryEndpoint = i.ingestionendpoint || a.ingestionendpoint || process.env[e.ENV_profileQueryEndpoint] || this.endpointBase, this._quickPulseHost = i.liveendpoint || a.liveendpoint || process.env[e.ENV_quickPulseHost] || lT.DEFAULT_LIVEMETRICS_HOST, this._quickPulseHost.match(/^https?:\/\//) && (this._quickPulseHost = Zw.parse(this._quickPulseHost).host);
        }
        return Object.defineProperty(e.prototype, "profileQueryEndpoint", { get: function() {
          return this._profileQueryEndpoint;
        }, set: function(t) {
          ef.cancelCorrelationIdQuery(this, this.setCorrelationId), this._profileQueryEndpoint = t, this.correlationId = ef.correlationIdPrefix, ef.queryCorrelationId(this, this.setCorrelationId);
        }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "quickPulseHost", { get: function() {
          return this._quickPulseHost;
        }, set: function(t) {
          this._quickPulseHost = t;
        }, enumerable: false, configurable: true }), e._getInstrumentationKey = function() {
          var t = process.env[e.ENV_iKey] || process.env[e.ENV_azurePrefix + e.ENV_iKey] || process.env[e.legacy_ENV_iKey] || process.env[e.ENV_azurePrefix + e.legacy_ENV_iKey];
          if (!t || t == "")
            throw new Error("Instrumentation key not found, pass the key in the config to this method or set the key in the environment variable APPINSIGHTS_INSTRUMENTATIONKEY before starting the server");
          return t;
        }, e._validateInstrumentationKey = function(t) {
          var r = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", n = new RegExp(r);
          return n.test(t);
        }, e.ENV_azurePrefix = "APPSETTING_", e.ENV_iKey = "APPINSIGHTS_INSTRUMENTATIONKEY", e.legacy_ENV_iKey = "APPINSIGHTS_INSTRUMENTATION_KEY", e.ENV_profileQueryEndpoint = "APPINSIGHTS_PROFILE_QUERY_ENDPOINT", e.ENV_quickPulseHost = "APPINSIGHTS_QUICKPULSE_HOST", e.ENV_connectionString = "APPLICATIONINSIGHTS_CONNECTION_STRING", e.ENV_nativeMetricsDisablers = "APPLICATION_INSIGHTS_DISABLE_EXTENDED_METRIC", e.ENV_nativeMetricsDisableAll = "APPLICATION_INSIGHTS_DISABLE_ALL_EXTENDED_METRICS", e.ENV_http_proxy = "http_proxy", e.ENV_https_proxy = "https_proxy", e;
      }();
      pT.exports = Jw;
    });
    var dT = l((hi) => {
      "use strict";
      var au = hi && hi.__assign || function() {
        return au = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, au.apply(this, arguments);
      };
      Object.defineProperty(hi, "__esModule", { value: true });
      hi.AutoCollectNativePerformance = void 0;
      var fT = tf(), Aa = Ea(), ex = ve(), tx = function() {
        function e(t) {
          this._disabledMetrics = {}, e.INSTANCE && e.INSTANCE.dispose(), e.INSTANCE = this, this._client = t;
        }
        return e.isNodeVersionCompatible = function() {
          var t = process.versions.node.split(".");
          return parseInt(t[0]) >= 6;
        }, e.prototype.enable = function(t, r, n) {
          var i = this;
          if (r === void 0 && (r = {}), n === void 0 && (n = 6e4), !!e.isNodeVersionCompatible()) {
            if (e._metricsAvailable == null && t && !this._isInitialized)
              try {
                var a = require("applicationinsights-native-metrics");
                e._emitter = new a(), e._metricsAvailable = true, ex.info("Native metrics module successfully loaded!");
              } catch (s) {
                e._metricsAvailable = false;
                return;
              }
            this._isEnabled = t, this._disabledMetrics = r, this._isEnabled && !this._isInitialized && (this._isInitialized = true), this._isEnabled && e._emitter ? (e._emitter.enable(true, n), this._handle || (this._handle = setInterval(function() {
              return i._trackNativeMetrics();
            }, n), this._handle.unref())) : e._emitter && (e._emitter.enable(false), this._handle && (clearInterval(this._handle), this._handle = void 0));
          }
        }, e.prototype.dispose = function() {
          this.enable(false);
        }, e.parseEnabled = function(t) {
          var r = process.env[fT.ENV_nativeMetricsDisableAll], n = process.env[fT.ENV_nativeMetricsDisablers];
          if (r)
            return { isEnabled: false, disabledMetrics: {} };
          if (n) {
            var i = n.split(","), a = {};
            if (i.length > 0)
              for (var s = 0, o = i; s < o.length; s++) {
                var u = o[s];
                a[u] = true;
              }
            return typeof t == "object" ? { isEnabled: true, disabledMetrics: au(au({}, t), a) } : { isEnabled: t, disabledMetrics: a };
          }
          return typeof t == "boolean" ? { isEnabled: t, disabledMetrics: {} } : { isEnabled: true, disabledMetrics: t };
        }, e.prototype._trackNativeMetrics = function() {
          var t = true;
          typeof this._isEnabled != "object" && (t = this._isEnabled), t && (this._trackGarbageCollection(), this._trackEventLoop(), this._trackHeapUsage());
        }, e.prototype._trackGarbageCollection = function() {
          var t;
          if (!this._disabledMetrics.gc) {
            var r = e._emitter.getGCData();
            for (var n in r) {
              var i = r[n].metrics, a = n + " Garbage Collection Duration", s = Math.sqrt(i.sumSquares / i.count - Math.pow(i.total / i.count, 2)) || 0;
              this._client.trackMetric({ name: a, value: i.total, count: i.count, max: i.max, min: i.min, stdDev: s, tagOverrides: (t = {}, t[this._client.context.keys.internalSdkVersion] = "node-nativeperf:" + Aa.sdkVersion, t) });
            }
          }
        }, e.prototype._trackEventLoop = function() {
          var t;
          if (!this._disabledMetrics.loop) {
            var r = e._emitter.getLoopData(), n = r.loopUsage;
            if (n.count != 0) {
              var i = "Event Loop CPU Time", a = Math.sqrt(n.sumSquares / n.count - Math.pow(n.total / n.count, 2)) || 0;
              this._client.trackMetric({ name: i, value: n.total, count: n.count, min: n.min, max: n.max, stdDev: a, tagOverrides: (t = {}, t[this._client.context.keys.internalSdkVersion] = "node-nativeperf:" + Aa.sdkVersion, t) });
            }
          }
        }, e.prototype._trackHeapUsage = function() {
          var t, r, n;
          if (!this._disabledMetrics.heap) {
            var i = process.memoryUsage(), a = i.heapUsed, s = i.heapTotal, o = i.rss;
            this._client.trackMetric({ name: "Memory Usage (Heap)", value: a, count: 1, tagOverrides: (t = {}, t[this._client.context.keys.internalSdkVersion] = "node-nativeperf:" + Aa.sdkVersion, t) }), this._client.trackMetric({ name: "Memory Total (Heap)", value: s, count: 1, tagOverrides: (r = {}, r[this._client.context.keys.internalSdkVersion] = "node-nativeperf:" + Aa.sdkVersion, r) }), this._client.trackMetric({ name: "Memory Usage (Non-Heap)", value: o - s, count: 1, tagOverrides: (n = {}, n[this._client.context.keys.internalSdkVersion] = "node-nativeperf:" + Aa.sdkVersion, n) });
          }
        }, e;
      }();
      hi.AutoCollectNativePerformance = tx;
    });
    var _T = l((ej, hT) => {
      "use strict";
      var rx = ve(), nx = function() {
        function e(t, r, n, i) {
          this._buffer = [], this._lastSend = 0, this._isDisabled = t, this._getBatchSize = r, this._getBatchIntervalMs = n, this._sender = i;
        }
        return e.prototype.setUseDiskRetryCaching = function(t, r, n) {
          this._sender.setDiskRetryMode(t, r, n);
        }, e.prototype.send = function(t) {
          var r = this;
          if (!this._isDisabled()) {
            if (!t) {
              rx.warn("Cannot send null/undefined telemetry");
              return;
            }
            if (this._buffer.push(t), this._buffer.length >= this._getBatchSize()) {
              this.triggerSend(false);
              return;
            }
            !this._timeoutHandle && this._buffer.length > 0 && (this._timeoutHandle = setTimeout(function() {
              r._timeoutHandle = null, r.triggerSend(false);
            }, this._getBatchIntervalMs()));
          }
        }, e.prototype.triggerSend = function(t, r) {
          var n = this._buffer.length < 1;
          n || (t ? (this._sender.saveOnCrash(this._buffer), typeof r == "function" && r("data saved on crash")) : this._sender.send(this._buffer, r)), this._lastSend = +new Date(), this._buffer = [], clearTimeout(this._timeoutHandle), this._timeoutHandle = null, n && typeof r == "function" && r("no data to send");
        }, e;
      }();
      hT.exports = nx;
    });
    var vT = l((su) => {
      "use strict";
      Object.defineProperty(su, "__esModule", { value: true });
      su.azureRoleEnvironmentTelemetryProcessor = void 0;
      function ix(e, t) {
        process.env.WEBSITE_SITE_NAME && (e.tags[t.keys.cloudRole] = process.env.WEBSITE_SITE_NAME);
      }
      su.azureRoleEnvironmentTelemetryProcessor = ix;
    });
    var ET = l((_i) => {
      "use strict";
      Object.defineProperty(_i, "__esModule", { value: true });
      _i.getSamplingHashCode = _i.samplingTelemetryProcessor = void 0;
      var gT = De();
      function ax(e, t) {
        var r = e.sampleRate, n = false;
        return r == null || r >= 100 || e.data && gT.TelemetryType.Metric === gT.baseTypeToTelemetryType(e.data.baseType) ? true : (t.correlationContext && t.correlationContext.operation ? n = mT(t.correlationContext.operation.id) < r : n = Math.random() * 100 < r, n);
      }
      _i.samplingTelemetryProcessor = ax;
      function mT(e) {
        var t = -2147483648, r = 2147483647, n = 5381;
        if (!e)
          return 0;
        for (; e.length < 8; )
          e = e + e;
        for (var i = 0; i < e.length; i++)
          n = ((n << 5) + n | 0) + e.charCodeAt(i) | 0;
        return n = n <= t ? r : Math.abs(n), n / r * 100;
      }
      _i.getSamplingHashCode = mT;
    });
    var yT = l((ou) => {
      "use strict";
      Object.defineProperty(ou, "__esModule", { value: true });
      ou.performanceMetricsTelemetryProcessor = void 0;
      var rf = Jo(), nf = De();
      function sx(e, t) {
        switch (t && t.addDocument(e), e.data.baseType) {
          case nf.TelemetryTypeString.Exception:
            rf.countException();
            break;
          case nf.TelemetryTypeString.Request:
            var r = e.data.baseData;
            rf.countRequest(r.duration, r.success);
            break;
          case nf.TelemetryTypeString.Dependency:
            var n = e.data.baseData;
            rf.countDependency(n.duration, n.success);
            break;
        }
        return true;
      }
      ou.performanceMetricsTelemetryProcessor = sx;
    });
    var TT = l((vi) => {
      "use strict";
      var yt = vi && vi.__assign || function() {
        return yt = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }, yt.apply(this, arguments);
      };
      Object.defineProperty(vi, "__esModule", { value: true });
      vi.preAggregatedMetricsTelemetryProcessor = void 0;
      var ox = De(), Ia = Bp(), uu = De();
      function ux(e, t) {
        if (Ia.isEnabled())
          switch (e.data.baseType) {
            case uu.TelemetryTypeString.Exception:
              var r = e.data.baseData;
              r.properties = yt(yt({}, r.properties), { "_MS.ProcessedByMetricExtractors": "(Name:'Exceptions', Ver:'1.1')" });
              var n = { cloudRoleInstance: e.tags[t.keys.cloudRoleInstance], cloudRoleName: e.tags[t.keys.cloudRole] };
              Ia.countException(n);
              break;
            case uu.TelemetryTypeString.Trace:
              var i = e.data.baseData;
              i.properties = yt(yt({}, i.properties), { "_MS.ProcessedByMetricExtractors": "(Name:'Traces', Ver:'1.1')" });
              var a = { cloudRoleInstance: e.tags[t.keys.cloudRoleInstance], cloudRoleName: e.tags[t.keys.cloudRole], traceSeverityLevel: ox.SeverityLevel[i.severity] };
              Ia.countTrace(a);
              break;
            case uu.TelemetryTypeString.Request:
              var s = e.data.baseData;
              s.properties = yt(yt({}, s.properties), { "_MS.ProcessedByMetricExtractors": "(Name:'Requests', Ver:'1.1')" });
              var o = { cloudRoleInstance: e.tags[t.keys.cloudRoleInstance], cloudRoleName: e.tags[t.keys.cloudRole], operationSynthetic: e.tags[t.keys.operationSyntheticSource], requestSuccess: s.success, requestResultCode: s.responseCode };
              Ia.countRequest(s.duration, o);
              break;
            case uu.TelemetryTypeString.Dependency:
              var u = e.data.baseData;
              u.properties = yt(yt({}, u.properties), { "_MS.ProcessedByMetricExtractors": "(Name:'Dependencies', Ver:'1.1')" });
              var c = { cloudRoleInstance: e.tags[t.keys.cloudRoleInstance], cloudRoleName: e.tags[t.keys.cloudRole], operationSynthetic: e.tags[t.keys.operationSyntheticSource], dependencySuccess: u.success, dependencyType: u.type, dependencyTarget: u.target, dependencyResultCode: u.resultCode };
              Ia.countDependency(u.duration, c);
              break;
          }
        return true;
      }
      vi.preAggregatedMetricsTelemetryProcessor = ux;
    });
    var ST = l((Tt) => {
      "use strict";
      var cx = Tt && Tt.__createBinding || (Object.create ? function(e, t, r, n) {
        n === void 0 && (n = r), Object.defineProperty(e, n, { enumerable: true, get: function() {
          return t[r];
        } });
      } : function(e, t, r, n) {
        n === void 0 && (n = r), e[n] = t[r];
      }), cu = Tt && Tt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && cx(t, e, r);
      };
      Object.defineProperty(Tt, "__esModule", { value: true });
      cu(vT(), Tt);
      cu(ET(), Tt);
      cu(yT(), Tt);
      cu(TT(), Tt);
    });
    var bT = l((ba, IT) => {
      "use strict";
      var lx = ba && ba.__awaiter || function(e, t, r, n) {
        function i(a) {
          return a instanceof r ? a : new r(function(s) {
            s(a);
          });
        }
        return new (r || (r = Promise))(function(a, s) {
          function o(p) {
            try {
              c(n.next(p));
            } catch (f) {
              s(f);
            }
          }
          function u(p) {
            try {
              c(n.throw(p));
            } catch (f) {
              s(f);
            }
          }
          function c(p) {
            p.done ? a(p.value) : i(p.value).then(o, u);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }, px = ba && ba.__generator || function(e, t) {
        var r = { label: 0, sent: function() {
          if (a[0] & 1)
            throw a[1];
          return a[1];
        }, trys: [], ops: [] }, n, i, a, s;
        return s = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
          return this;
        }), s;
        function o(c) {
          return function(p) {
            return u([c, p]);
          };
        }
        function u(c) {
          if (n)
            throw new TypeError("Generator is already executing.");
          for (; r; )
            try {
              if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
                return a;
              switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
                case 0:
                case 1:
                  a = c;
                  break;
                case 4:
                  return r.label++, { value: c[1], done: false };
                case 5:
                  r.label++, i = c[1], c = [0];
                  continue;
                case 7:
                  c = r.ops.pop(), r.trys.pop();
                  continue;
                default:
                  if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                    r = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                    r.label = c[1];
                    break;
                  }
                  if (c[0] === 6 && r.label < a[1]) {
                    r.label = a[1], a = c;
                    break;
                  }
                  if (a && r.label < a[2]) {
                    r.label = a[2], r.ops.push(c);
                    break;
                  }
                  a[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              c = t.call(e, r);
            } catch (p) {
              c = [6, p], i = 0;
            } finally {
              n = a = 0;
            }
          if (c[0] & 5)
            throw c[1];
          return { value: c[0] ? c[1] : void 0, done: true };
        }
      }, me = require("fs"), AT = require("os"), Bt = require("path"), fx = require("zlib"), gi = require("child_process"), Ee = ve(), dx = di(), lu = Be(), hx = function() {
        function e(t, r, n) {
          if (this._redirectedHost = null, this._config = t, this._onSuccess = r, this._onError = n, this._enableDiskRetryMode = false, this._resendInterval = e.WAIT_BETWEEN_RESEND, this._maxBytesOnDisk = e.MAX_BYTES_ON_DISK, this._numConsecutiveFailures = 0, this._numConsecutiveRedirects = 0, this._resendTimer = null, this._fileCleanupTimer = null, this._tempDir = Bt.join(AT.tmpdir(), e.TEMPDIR_PREFIX + this._config.instrumentationKey), !e.OS_PROVIDES_FILE_PROTECTION)
            if (e.USE_ICACLS) {
              try {
                e.OS_PROVIDES_FILE_PROTECTION = me.existsSync(e.ICACLS_PATH);
              } catch (i) {
              }
              e.OS_PROVIDES_FILE_PROTECTION || Ee.warn(e.TAG, "Could not find ICACLS in expected location! This is necessary to use disk retry mode on Windows.");
            } else
              e.OS_PROVIDES_FILE_PROTECTION = true;
        }
        return e.prototype.setDiskRetryMode = function(t, r, n) {
          var i = this;
          this._enableDiskRetryMode = e.OS_PROVIDES_FILE_PROTECTION && t, typeof r == "number" && r >= 0 && (this._resendInterval = Math.floor(r)), typeof n == "number" && n >= 0 && (this._maxBytesOnDisk = Math.floor(n)), t && !e.OS_PROVIDES_FILE_PROTECTION && (this._enableDiskRetryMode = false, Ee.warn(e.TAG, "Ignoring request to enable disk retry mode. Sufficient file protection capabilities were not detected.")), this._enableDiskRetryMode ? this._fileCleanupTimer || (this._fileCleanupTimer = setTimeout(function() {
            i._fileCleanupTask();
          }, e.CLEANUP_TIMEOUT), this._fileCleanupTimer.unref()) : this._fileCleanupTimer && clearTimeout(this._fileCleanupTimer);
        }, e.prototype.send = function(t, r) {
          return lx(this, void 0, void 0, function() {
            var n, i, a, s, o = this;
            return px(this, function(u) {
              return t && (n = this._redirectedHost || this._config.endpointUrl, i = { method: "POST", withCredentials: false, headers: { "Content-Type": "application/x-json-stream" } }, a = "", t.forEach(function(c) {
                var p = o._stringify(c);
                typeof p == "string" && (a += p + `
`);
              }), a.length > 0 && (a = a.substring(0, a.length - 1)), s = Buffer.from ? Buffer.from(a) : new Buffer(a), fx.gzip(s, function(c, p) {
                var f = p;
                c ? (Ee.warn(c), f = s, i.headers["Content-Length"] = s.length.toString()) : (i.headers["Content-Encoding"] = "gzip", i.headers["Content-Length"] = p.length.toString()), Ee.info(e.TAG, i), i[dx.disableCollectionRequestOption] = true;
                var d = function(m) {
                  m.setEncoding("utf-8");
                  var S = "";
                  m.on("data", function(j) {
                    S += j;
                  }), m.on("end", function() {
                    if (o._numConsecutiveFailures = 0, o._enableDiskRetryMode) {
                      if (m.statusCode === 200)
                        o._resendTimer || (o._resendTimer = setTimeout(function() {
                          o._resendTimer = null, o._sendFirstFileOnDisk();
                        }, o._resendInterval), o._resendTimer.unref());
                      else if (o._isRetriable(m.statusCode))
                        try {
                          var j = JSON.parse(S), oe = [];
                          j.errors.forEach(function(At) {
                            o._isRetriable(At.statusCode) && oe.push(t[At.index]);
                          }), oe.length > 0 && o._storeToDisk(oe);
                        } catch (At) {
                          o._storeToDisk(t);
                        }
                    }
                    if (m.statusCode === 307 || m.statusCode === 308)
                      if (o._numConsecutiveRedirects++, o._numConsecutiveRedirects < 10) {
                        var Ae = m.headers.location ? m.headers.location.toString() : null;
                        Ae && (o._redirectedHost = Ae, o.send(t, r));
                      } else
                        typeof r == "function" && r("Error sending telemetry because of circular redirects.");
                    else
                      o._numConsecutiveRedirects = 0, typeof r == "function" && r(S), Ee.info(e.TAG, S), typeof o._onSuccess == "function" && o._onSuccess(S);
                  });
                }, h = lu.makeRequest(o._config, n, i, d);
                h.on("error", function(m) {
                  if (o._numConsecutiveFailures++, !o._enableDiskRetryMode || o._numConsecutiveFailures > 0 && o._numConsecutiveFailures % e.MAX_CONNECTION_FAILURES_BEFORE_WARN == 0) {
                    var S = "Ingestion endpoint could not be reached. This batch of telemetry items has been lost. Use Disk Retry Caching to enable resending of failed telemetry. Error:";
                    o._enableDiskRetryMode && (S = "Ingestion endpoint could not be reached " + o._numConsecutiveFailures + " consecutive times. There may be resulting telemetry loss. Most recent error:"), Ee.warn(e.TAG, S, lu.dumpObj(m));
                  } else {
                    var S = "Transient failure to reach ingestion endpoint. This batch of telemetry items will be retried. Error:";
                    Ee.info(e.TAG, S, lu.dumpObj(m));
                  }
                  o._onErrorHelper(m), typeof r == "function" && (m && r(lu.dumpObj(m)), r("Error sending telemetry")), o._enableDiskRetryMode && o._storeToDisk(t);
                }), h.write(f), h.end();
              })), [2];
            });
          });
        }, e.prototype.saveOnCrash = function(t) {
          this._enableDiskRetryMode && this._storeToDiskSync(this._stringify(t));
        }, e.prototype._isRetriable = function(t) {
          return t === 206 || t === 408 || t === 429 || t === 439 || t === 500 || t === 503;
        }, e.prototype._runICACLS = function(t, r) {
          var n = gi.spawn(e.ICACLS_PATH, t, { windowsHide: true });
          n.on("error", function(i) {
            return r(i);
          }), n.on("close", function(i, a) {
            return r(i === 0 ? null : new Error("Setting ACL restrictions did not succeed (ICACLS returned code " + i + ")"));
          });
        }, e.prototype._runICACLSSync = function(t) {
          if (gi.spawnSync) {
            var r = gi.spawnSync(e.ICACLS_PATH, t, { windowsHide: true });
            if (r.error)
              throw r.error;
            if (r.status !== 0)
              throw new Error("Setting ACL restrictions did not succeed (ICACLS returned code " + r.status + ")");
          } else
            throw new Error("Could not synchronously call ICACLS under current version of Node.js");
        }, e.prototype._getACLIdentity = function(t) {
          if (e.ACL_IDENTITY)
            return t(null, e.ACL_IDENTITY);
          var r = gi.spawn(e.POWERSHELL_PATH, ["-Command", "[System.Security.Principal.WindowsIdentity]::GetCurrent().Name"], { windowsHide: true, stdio: ["ignore", "pipe", "pipe"] }), n = "";
          r.stdout.on("data", function(i) {
            return n += i;
          }), r.on("error", function(i) {
            return t(i, null);
          }), r.on("close", function(i, a) {
            return e.ACL_IDENTITY = n && n.trim(), t(i === 0 ? null : new Error("Getting ACL identity did not succeed (PS returned code " + i + ")"), e.ACL_IDENTITY);
          });
        }, e.prototype._getACLIdentitySync = function() {
          if (e.ACL_IDENTITY)
            return e.ACL_IDENTITY;
          if (gi.spawnSync) {
            var t = gi.spawnSync(e.POWERSHELL_PATH, ["-Command", "[System.Security.Principal.WindowsIdentity]::GetCurrent().Name"], { windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
            if (t.error)
              throw t.error;
            if (t.status !== 0)
              throw new Error("Getting ACL identity did not succeed (PS returned code " + t.status + ")");
            return e.ACL_IDENTITY = t.stdout && t.stdout.toString().trim(), e.ACL_IDENTITY;
          } else
            throw new Error("Could not synchronously get ACL identity under current version of Node.js");
        }, e.prototype._getACLArguments = function(t, r) {
          return [t, "/grant", "*S-1-5-32-544:(OI)(CI)F", "/grant", r + ":(OI)(CI)F", "/inheritance:r"];
        }, e.prototype._applyACLRules = function(t, r) {
          var n = this;
          if (!e.USE_ICACLS)
            return r(null);
          if (e.ACLED_DIRECTORIES[t] === void 0)
            e.ACLED_DIRECTORIES[t] = false, this._getACLIdentity(function(i, a) {
              if (i)
                return e.ACLED_DIRECTORIES[t] = false, r(i);
              n._runICACLS(n._getACLArguments(t, a), function(s) {
                return e.ACLED_DIRECTORIES[t] = !s, r(s);
              });
            });
          else
            return r(e.ACLED_DIRECTORIES[t] ? null : new Error("Setting ACL restrictions did not succeed (cached result)"));
        }, e.prototype._applyACLRulesSync = function(t) {
          if (e.USE_ICACLS) {
            if (e.ACLED_DIRECTORIES[t] === void 0) {
              this._runICACLSSync(this._getACLArguments(t, this._getACLIdentitySync())), e.ACLED_DIRECTORIES[t] = true;
              return;
            } else if (!e.ACLED_DIRECTORIES[t])
              throw new Error("Setting ACL restrictions did not succeed (cached result)");
          }
        }, e.prototype._confirmDirExists = function(t, r) {
          var n = this;
          me.lstat(t, function(i, a) {
            i && i.code === "ENOENT" ? me.mkdir(t, function(s) {
              s && s.code !== "EEXIST" ? r(s) : n._applyACLRules(t, r);
            }) : !i && a.isDirectory() ? n._applyACLRules(t, r) : r(i || new Error("Path existed but was not a directory"));
          });
        }, e.prototype._getShallowDirectorySize = function(t, r) {
          me.readdir(t, function(n, i) {
            if (n)
              return r(n, -1);
            var a = null, s = 0, o = 0;
            if (i.length === 0) {
              r(null, 0);
              return;
            }
            for (var u = 0; u < i.length; u++)
              me.stat(Bt.join(t, i[u]), function(c, p) {
                o++, c ? a = c : p.isFile() && (s += p.size), o === i.length && (a ? r(a, -1) : r(a, s));
              });
          });
        }, e.prototype._getShallowDirectorySizeSync = function(t) {
          for (var r = me.readdirSync(t), n = 0, i = 0; i < r.length; i++)
            n += me.statSync(Bt.join(t, r[i])).size;
          return n;
        }, e.prototype._storeToDisk = function(t) {
          var r = this;
          Ee.info(e.TAG, "Checking existence of data storage directory: " + this._tempDir), this._confirmDirExists(this._tempDir, function(n) {
            if (n) {
              Ee.warn(e.TAG, "Error while checking/creating directory: " + (n && n.message)), r._onErrorHelper(n);
              return;
            }
            r._getShallowDirectorySize(r._tempDir, function(i, a) {
              if (i || a < 0) {
                Ee.warn(e.TAG, "Error while checking directory size: " + (i && i.message)), r._onErrorHelper(i);
                return;
              } else if (a > r._maxBytesOnDisk) {
                Ee.warn(e.TAG, "Not saving data due to max size limit being met. Directory size in bytes is: " + a);
                return;
              }
              var s = new Date().getTime() + ".ai.json", o = Bt.join(r._tempDir, s);
              Ee.info(e.TAG, "saving data to disk at: " + o), me.writeFile(o, r._stringify(t), { mode: 384 }, function(u) {
                return r._onErrorHelper(u);
              });
            });
          });
        }, e.prototype._storeToDiskSync = function(t) {
          try {
            Ee.info(e.TAG, "Checking existence of data storage directory: " + this._tempDir), me.existsSync(this._tempDir) || me.mkdirSync(this._tempDir), this._applyACLRulesSync(this._tempDir);
            var r = this._getShallowDirectorySizeSync(this._tempDir);
            if (r > this._maxBytesOnDisk) {
              Ee.info(e.TAG, "Not saving data due to max size limit being met. Directory size in bytes is: " + r);
              return;
            }
            var n = new Date().getTime() + ".ai.json", i = Bt.join(this._tempDir, n);
            Ee.info(e.TAG, "saving data before crash to disk at: " + i), me.writeFileSync(i, t, { mode: 384 });
          } catch (a) {
            Ee.warn(e.TAG, "Error while saving data to disk: " + (a && a.message)), this._onErrorHelper(a);
          }
        }, e.prototype._sendFirstFileOnDisk = function() {
          var t = this;
          me.exists(this._tempDir, function(r) {
            r && me.readdir(t._tempDir, function(n, i) {
              if (n)
                t._onErrorHelper(n);
              else if (i = i.filter(function(o) {
                return Bt.basename(o).indexOf(".ai.json") > -1;
              }), i.length > 0) {
                var a = i[0], s = Bt.join(t._tempDir, a);
                me.readFile(s, function(o, u) {
                  o ? t._onErrorHelper(o) : me.unlink(s, function(c) {
                    if (c)
                      t._onErrorHelper(c);
                    else
                      try {
                        var p = JSON.parse(u.toString());
                        t.send(p);
                      } catch (f) {
                        Ee.warn("Failed to read persisted file", f);
                      }
                  });
                });
              }
            });
          });
        }, e.prototype._onErrorHelper = function(t) {
          typeof this._onError == "function" && this._onError(t);
        }, e.prototype._stringify = function(t) {
          try {
            return JSON.stringify(t);
          } catch (r) {
            Ee.warn("Failed to serialize payload", r, t);
          }
        }, e.prototype._fileCleanupTask = function() {
          var t = this;
          me.exists(this._tempDir, function(r) {
            r && me.readdir(t._tempDir, function(n, i) {
              n ? t._onErrorHelper(n) : (i = i.filter(function(a) {
                return Bt.basename(a).indexOf(".ai.json") > -1;
              }), i.length > 0 && i.forEach(function(a) {
                var s = new Date(parseInt(a.split(".ai.json")[0])), o = new Date(+new Date() - e.FILE_RETEMPTION_PERIOD) > s;
                if (o) {
                  var u = Bt.join(t._tempDir, a);
                  me.unlink(u, function(c) {
                    c && t._onErrorHelper(c);
                  });
                }
              }));
            });
          });
        }, e.TAG = "Sender", e.ICACLS_PATH = process.env.systemdrive + "/windows/system32/icacls.exe", e.POWERSHELL_PATH = process.env.systemdrive + "/windows/system32/windowspowershell/v1.0/powershell.exe", e.ACLED_DIRECTORIES = {}, e.ACL_IDENTITY = null, e.WAIT_BETWEEN_RESEND = 60 * 1e3, e.MAX_BYTES_ON_DISK = 50 * 1024 * 1024, e.MAX_CONNECTION_FAILURES_BEFORE_WARN = 5, e.CLEANUP_TIMEOUT = 60 * 60 * 1e3, e.FILE_RETEMPTION_PERIOD = 7 * 24 * 60 * 60 * 1e3, e.TEMPDIR_PREFIX = "appInsights-node", e.OS_PROVIDES_FILE_PROTECTION = false, e.USE_ICACLS = AT.type() === "Windows_NT", e;
      }();
      IT.exports = hx;
    });
    var PT = l((sj, OT) => {
      "use strict";
      var A = De(), rt = Be(), _x = gr(), vx = function() {
        function e() {
        }
        return e.createEnvelope = function(t, r, n, i, a) {
          var s = null;
          switch (r) {
            case A.TelemetryType.Trace:
              s = e.createTraceData(t);
              break;
            case A.TelemetryType.Dependency:
              s = e.createDependencyData(t);
              break;
            case A.TelemetryType.Event:
              s = e.createEventData(t);
              break;
            case A.TelemetryType.Exception:
              s = e.createExceptionData(t);
              break;
            case A.TelemetryType.Request:
              s = e.createRequestData(t);
              break;
            case A.TelemetryType.Metric:
              s = e.createMetricData(t);
              break;
            case A.TelemetryType.Availability:
              s = e.createAvailabilityData(t);
              break;
            case A.TelemetryType.PageView:
              s = e.createPageViewData(t);
              break;
          }
          if (n && A.domainSupportsProperties(s.baseData)) {
            if (s && s.baseData)
              if (!s.baseData.properties)
                s.baseData.properties = n;
              else
                for (var o in n)
                  s.baseData.properties[o] || (s.baseData.properties[o] = n[o]);
            s.baseData.properties = rt.validateStringMap(s.baseData.properties);
          }
          var u = a && a.instrumentationKey || "", c = new A.Envelope();
          return c.data = s, c.iKey = u, c.name = "Microsoft.ApplicationInsights." + u.replace(/-/g, "") + "." + s.baseType.substr(0, s.baseType.length - 4), c.tags = this.getTags(i, t.tagOverrides), c.time = new Date().toISOString(), c.ver = 1, c.sampleRate = a ? a.samplingPercentage : 100, r === A.TelemetryType.Metric && (c.sampleRate = 100), c;
        }, e.createTraceData = function(t) {
          var r = new A.MessageData();
          r.message = t.message, r.properties = t.properties, isNaN(t.severity) ? r.severityLevel = A.SeverityLevel.Information : r.severityLevel = t.severity;
          var n = new A.Data();
          return n.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Trace), n.baseData = r, n;
        }, e.createDependencyData = function(t) {
          var r = new A.RemoteDependencyData();
          typeof t.name == "string" && (r.name = t.name.length > 1024 ? t.name.slice(0, 1021) + "..." : t.name), r.data = t.data, r.target = t.target, r.duration = rt.msToTimeSpan(t.duration), r.success = t.success, r.type = t.dependencyTypeName, r.properties = t.properties, r.resultCode = t.resultCode ? t.resultCode + "" : "", t.id ? r.id = t.id : r.id = rt.w3cTraceId();
          var n = new A.Data();
          return n.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Dependency), n.baseData = r, n;
        }, e.createEventData = function(t) {
          var r = new A.EventData();
          r.name = t.name, r.properties = t.properties, r.measurements = t.measurements;
          var n = new A.Data();
          return n.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Event), n.baseData = r, n;
        }, e.createExceptionData = function(t) {
          var r = new A.ExceptionData();
          r.properties = t.properties, isNaN(t.severity) ? r.severityLevel = A.SeverityLevel.Error : r.severityLevel = t.severity, r.measurements = t.measurements, r.exceptions = [];
          var n = t.exception.stack, i = new A.ExceptionDetails();
          i.message = t.exception.message, i.typeName = t.exception.name, i.parsedStack = this.parseStack(n), i.hasFullStack = rt.isArray(i.parsedStack) && i.parsedStack.length > 0, r.exceptions.push(i);
          var a = new A.Data();
          return a.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Exception), a.baseData = r, a;
        }, e.createRequestData = function(t) {
          var r = new A.RequestData();
          t.id ? r.id = t.id : r.id = rt.w3cTraceId(), r.name = t.name, r.url = t.url, r.source = t.source, r.duration = rt.msToTimeSpan(t.duration), r.responseCode = t.resultCode ? t.resultCode + "" : "", r.success = t.success, r.properties = t.properties;
          var n = new A.Data();
          return n.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Request), n.baseData = r, n;
        }, e.createMetricData = function(t) {
          var r = new A.MetricData();
          r.metrics = [];
          var n = new A.DataPoint();
          n.count = isNaN(t.count) ? 1 : t.count, n.kind = A.DataPointType.Aggregation, n.max = isNaN(t.max) ? t.value : t.max, n.min = isNaN(t.min) ? t.value : t.min, n.name = t.name, n.stdDev = isNaN(t.stdDev) ? 0 : t.stdDev, n.value = t.value, r.metrics.push(n), r.properties = t.properties;
          var i = new A.Data();
          return i.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Metric), i.baseData = r, i;
        }, e.createAvailabilityData = function(t) {
          var r = new A.AvailabilityData();
          t.id ? r.id = t.id : r.id = rt.w3cTraceId(), r.name = t.name, r.duration = rt.msToTimeSpan(t.duration), r.success = t.success, r.runLocation = t.runLocation, r.message = t.message, r.measurements = t.measurements, r.properties = t.properties;
          var n = new A.Data();
          return n.baseType = A.telemetryTypeToBaseType(A.TelemetryType.Availability), n.baseData = r, n;
        }, e.createPageViewData = function(t) {
          var r = new A.PageViewData();
          r.name = t.name, r.duration = rt.msToTimeSpan(t.duration), r.url = t.url, r.measurements = t.measurements, r.properties = t.properties;
          var n = new A.Data();
          return n.baseType = A.telemetryTypeToBaseType(A.TelemetryType.PageView), n.baseData = r, n;
        }, e.getTags = function(t, r) {
          var n = _x.CorrelationContextManager.getCurrentContext(), i = {};
          if (t && t.tags)
            for (var a in t.tags)
              i[a] = t.tags[a];
          if (r)
            for (var a in r)
              i[a] = r[a];
          return n && (i[t.keys.operationId] = i[t.keys.operationId] || n.operation.id, i[t.keys.operationName] = i[t.keys.operationName] || n.operation.name, i[t.keys.operationParentId] = i[t.keys.operationParentId] || n.operation.parentId), i;
        }, e.parseStack = function(t) {
          var r = void 0;
          if (typeof t == "string") {
            var n = t.split(`
`);
            r = [];
            for (var i = 0, a = 0, s = 0; s <= n.length; s++) {
              var o = n[s];
              if (CT.regex.test(o)) {
                var u = new CT(n[s], i++);
                a += u.sizeInBytes, r.push(u);
              }
            }
            var c = 32 * 1024;
            if (a > c)
              for (var p = 0, f = r.length - 1, d = 0, h = p, m = f; p < f; ) {
                var S = r[p].sizeInBytes, j = r[f].sizeInBytes;
                if (d += S + j, d > c) {
                  var oe = m - h + 1;
                  r.splice(h, oe);
                  break;
                }
                h = p, m = f, p++, f--;
              }
          }
          return r;
        }, e;
      }(), CT = function() {
        function e(t, r) {
          this.sizeInBytes = 0, this.level = r, this.method = "<no_method>", this.assembly = rt.trim(t);
          var n = t.match(e.regex);
          n && n.length >= 5 && (this.method = rt.trim(n[2]) || this.method, this.fileName = rt.trim(n[4]) || "<no_filename>", this.line = parseInt(n[5]) || 0), this.sizeInBytes += this.method.length, this.sizeInBytes += this.fileName.length, this.sizeInBytes += this.assembly.length, this.sizeInBytes += e.baseSize, this.sizeInBytes += this.level.toString().length, this.sizeInBytes += this.line.toString().length;
        }
        return e.regex = /^(\s+at)?(.*?)(\@|\s\(|\s)([^\(\n]+):(\d+):(\d+)(\)?)$/, e.baseSize = 58, e;
      }();
      OT.exports = vx;
    });
    var wT = l((oj, DT) => {
      "use strict";
      var gx = require("url"), mx = tf(), Ex = Ea(), Gt = De(), yx = _T(), pu = ST(), RT = gr(), Tx = bT(), af = Be(), NT = ve(), Sx = PT(), Ax = function() {
        function e(t) {
          this._telemetryProcessors = [], this._enableAzureProperties = false;
          var r = new mx(t);
          this.config = r, this.context = new Ex(), this.commonProperties = {};
          var n = new Tx(this.config);
          this.channel = new yx(function() {
            return r.disableAppInsights;
          }, function() {
            return r.maxBatchSize;
          }, function() {
            return r.maxBatchIntervalMs;
          }, n);
        }
        return e.prototype.trackAvailability = function(t) {
          this.track(t, Gt.TelemetryType.Availability);
        }, e.prototype.trackPageView = function(t) {
          this.track(t, Gt.TelemetryType.PageView);
        }, e.prototype.trackTrace = function(t) {
          this.track(t, Gt.TelemetryType.Trace);
        }, e.prototype.trackMetric = function(t) {
          this.track(t, Gt.TelemetryType.Metric);
        }, e.prototype.trackException = function(t) {
          t && t.exception && !af.isError(t.exception) && (t.exception = new Error(t.exception.toString())), this.track(t, Gt.TelemetryType.Exception);
        }, e.prototype.trackEvent = function(t) {
          this.track(t, Gt.TelemetryType.Event);
        }, e.prototype.trackRequest = function(t) {
          this.track(t, Gt.TelemetryType.Request);
        }, e.prototype.trackDependency = function(t) {
          t && !t.target && t.data && (t.target = gx.parse(t.data).host), this.track(t, Gt.TelemetryType.Dependency);
        }, e.prototype.flush = function(t) {
          this.channel.triggerSend(t ? !!t.isAppCrashing : false, t ? t.callback : void 0);
        }, e.prototype.track = function(t, r) {
          if (t && Gt.telemetryTypeToBaseType(r)) {
            var n = Sx.createEnvelope(t, r, this.commonProperties, this.context, this.config);
            t.time && (n.time = t.time.toISOString()), this._enableAzureProperties && pu.azureRoleEnvironmentTelemetryProcessor(n, this.context);
            var i = this.runTelemetryProcessors(n, t.contextObjects);
            i = i && pu.samplingTelemetryProcessor(n, { correlationContext: RT.CorrelationContextManager.getCurrentContext() }), pu.preAggregatedMetricsTelemetryProcessor(n, this.context), i && (pu.performanceMetricsTelemetryProcessor(n, this.quickPulseClient), this.channel.send(n));
          } else
            NT.warn("track() requires telemetry object and telemetryType to be specified.");
        }, e.prototype.setAutoPopulateAzureProperties = function(t) {
          this._enableAzureProperties = t;
        }, e.prototype.addTelemetryProcessor = function(t) {
          this._telemetryProcessors.push(t);
        }, e.prototype.clearTelemetryProcessors = function() {
          this._telemetryProcessors = [];
        }, e.prototype.runTelemetryProcessors = function(t, r) {
          var n = true, i = this._telemetryProcessors.length;
          if (i === 0)
            return n;
          r = r || {}, r.correlationContext = RT.CorrelationContextManager.getCurrentContext();
          for (var a = 0; a < i; ++a)
            try {
              var s = this._telemetryProcessors[a];
              if (s && s.apply(null, [t, r]) === false) {
                n = false;
                break;
              }
            } catch (o) {
              n = true, NT.warn("One of telemetry processors failed, telemetry item will be sent.", o, t);
            }
          return n && (t && t.tags && (t.tags = af.validateStringMap(t.tags)), t && t.data && t.data.baseData && t.data.baseData.properties && (t.data.baseData.properties = af.validateStringMap(t.data.baseData.properties))), n;
        }, e;
      }();
      DT.exports = Ax;
    });
    var LT = l((sf, MT) => {
      "use strict";
      var Ix = sf && sf.__extends || function() {
        var e = function(t, r) {
          return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
            n.__proto__ = i;
          } || function(n, i) {
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }, e(t, r);
        };
        return function(t, r) {
          e(t, r);
          function n() {
            this.constructor = t;
          }
          t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
        };
      }(), bx = wT(), xT = Qp(), Cx = di(), fu = ve(), Ox = function(e) {
        Ix(t, e);
        function t() {
          return e !== null && e.apply(this, arguments) || this;
        }
        return t.prototype.trackNodeHttpRequestSync = function(r) {
          r && r.request && r.response && r.duration ? xT.trackRequestSync(this, r) : fu.warn("trackNodeHttpRequestSync requires NodeHttpRequestTelemetry object with request, response and duration specified.");
        }, t.prototype.trackNodeHttpRequest = function(r) {
          (r.duration || r.error) && fu.warn("trackNodeHttpRequest will ignore supplied duration and error parameters. These values are collected from the request and response objects."), r && r.request && r.response ? xT.trackRequest(this, r) : fu.warn("trackNodeHttpRequest requires NodeHttpRequestTelemetry object with request and response specified.");
        }, t.prototype.trackNodeHttpDependency = function(r) {
          r && r.request ? Cx.trackRequest(this, r) : fu.warn("trackNodeHttpDependency requires NodeHttpDependencyTelemetry object with request specified.");
        }, t;
      }(bx);
      MT.exports = Ox;
    });
    var jT = l((qT) => {
      "use strict";
      Object.defineProperty(qT, "__esModule", { value: true });
    });
    var iS = l((E) => {
      "use strict";
      Object.defineProperty(E, "__esModule", { value: true });
      E.dispose = E.Configuration = E.wrapWithCorrelationContext = E.startOperation = E.getCorrelationContext = E.start = E.setup = E.liveMetricsClient = E.defaultClient = E.DistributedTracingModes = void 0;
      var of = gr(), Px = uy(), Rx = ly(), kT = Jo(), Nx = Bp(), Dx = Hy(), wx = di(), xx = Qp(), HT = Gr(), Ca = ve(), Mx = aT(), UT = dT();
      E.TelemetryClient = LT();
      E.Contracts = De();
      E.azureFunctionsTypes = jT();
      var BT;
      (function(e) {
        e[e.AI = 0] = "AI", e[e.AI_AND_W3C = 1] = "AI_AND_W3C";
      })(BT = E.DistributedTracingModes || (E.DistributedTracingModes = {}));
      var GT = true, FT = false, VT = true, $T = true, zT = true, KT = false, XT = true, YT = true, QT = true, uf = true, WT, du = false, ZT = true, JT, eS = void 0, tS = void 0, Oa, Pa, Ra, Na, Da, mi, en, wa, St = false, rS;
      function Lx(e) {
        return E.defaultClient ? Ca.info("The default client is already setup") : (E.defaultClient = new E.TelemetryClient(e), Oa = new Px(E.defaultClient), Pa = new Rx(E.defaultClient), Ra = new kT(E.defaultClient), Na = new Nx(E.defaultClient), Da = new Dx(E.defaultClient), en = new xx(E.defaultClient), wa = new wx(E.defaultClient), mi || (mi = new UT.AutoCollectNativePerformance(E.defaultClient))), E.defaultClient && E.defaultClient.channel && E.defaultClient.channel.setUseDiskRetryCaching(QT, eS, tS), cf;
      }
      E.setup = Lx;
      function nS() {
        return E.defaultClient ? (St = true, Oa.enable(GT, FT), Pa.enable(VT), Ra.enable($T), Na.enable(zT), Da.enable(KT, E.defaultClient.config), mi.enable(ZT, JT), en.useAutoCorrelation(uf, WT), en.enable(XT), wa.enable(YT), E.liveMetricsClient && du && E.liveMetricsClient.enable(du)) : Ca.warn("Start cannot be called before setup"), cf;
      }
      E.start = nS;
      function qx() {
        return uf ? of.CorrelationContextManager.getCurrentContext() : null;
      }
      E.getCorrelationContext = qx;
      function jx(e, t) {
        return of.CorrelationContextManager.startOperation(e, t);
      }
      E.startOperation = jx;
      function kx(e, t) {
        return of.CorrelationContextManager.wrapCallback(e, t);
      }
      E.wrapWithCorrelationContext = kx;
      var cf = function() {
        function e() {
        }
        return e.setDistributedTracingMode = function(t) {
          return HT.w3cEnabled = t === BT.AI_AND_W3C, e;
        }, e.setAutoCollectConsole = function(t, r) {
          return r === void 0 && (r = false), GT = t, FT = r, St && Oa.enable(t, r), e;
        }, e.setAutoCollectExceptions = function(t) {
          return VT = t, St && Pa.enable(t), e;
        }, e.setAutoCollectPerformance = function(t, r) {
          r === void 0 && (r = true), $T = t;
          var n = UT.AutoCollectNativePerformance.parseEnabled(r);
          return ZT = n.isEnabled, JT = n.disabledMetrics, St && (Ra.enable(t), mi.enable(n.isEnabled, n.disabledMetrics)), e;
        }, e.setAutoCollectPreAggregatedMetrics = function(t) {
          return zT = t, St && Na.enable(t), e;
        }, e.setAutoCollectHeartbeat = function(t) {
          return KT = t, St && Da.enable(t, E.defaultClient.config), e;
        }, e.setAutoCollectRequests = function(t) {
          return XT = t, St && en.enable(t), e;
        }, e.setAutoCollectDependencies = function(t) {
          return YT = t, St && wa.enable(t), e;
        }, e.setAutoDependencyCorrelation = function(t, r) {
          return uf = t, WT = r, St && en.useAutoCorrelation(t, r), e;
        }, e.setUseDiskRetryCaching = function(t, r, n) {
          return QT = t, eS = r, tS = n, E.defaultClient && E.defaultClient.channel && E.defaultClient.channel.setUseDiskRetryCaching(t, r, n), e;
        }, e.setInternalLogging = function(t, r) {
          return t === void 0 && (t = false), r === void 0 && (r = true), Ca.enableDebug = t, Ca.disableWarnings = !r, e;
        }, e.setSendLiveMetrics = function(t) {
          return t === void 0 && (t = false), E.defaultClient ? (!E.liveMetricsClient && t ? (E.liveMetricsClient = new Mx(E.defaultClient.config, null), rS = new kT(E.liveMetricsClient, 1e3, true), E.liveMetricsClient.addCollector(rS), E.defaultClient.quickPulseClient = E.liveMetricsClient) : E.liveMetricsClient && E.liveMetricsClient.enable(t), du = t, e) : (Ca.warn("Live metrics client cannot be setup without the default client"), e);
        }, e.start = nS, e;
      }();
      E.Configuration = cf;
      function Hx() {
        HT.w3cEnabled = true, E.defaultClient = null, St = false, Oa && Oa.dispose(), Pa && Pa.dispose(), Ra && Ra.dispose(), Na && Na.dispose(), Da && Da.dispose(), mi && mi.dispose(), en && en.dispose(), wa && wa.dispose(), E.liveMetricsClient && (E.liveMetricsClient.enable(false), du = false, E.liveMetricsClient = void 0);
      }
      E.dispose = Hx;
    });
    fS(exports, { default: () => lf });
    var hu = Si(require("os"));
    var Ei = Si(require("vscode"));
    var W = Si(require("vscode"));
    var Ai = Si(require("vscode"));
    var He;
    (function(r) {
      r.ON = "on", r.OFF = "off";
    })(He || (He = {}));
    function nn() {
      let e = "telemetry", t = "enableTelemetry";
      return Ai.env.isTelemetryEnabled !== void 0 ? Ai.env.isTelemetryEnabled ? He.ON : He.OFF : Ai.workspace.getConfiguration(e).get(t) ? He.ON : He.OFF;
    }
    var vu = class {
      constructor(t, r, n, i, a) {
        this.extensionId = t;
        this.extensionVersion = r;
        this.telemetryAppender = n;
        this.osShim = i;
        this.firstParty = false;
        this.userOptIn = false;
        this.errorOptIn = false;
        this.disposables = [];
        this.firstParty = !!a, this.updateUserOptStatus(), W.env.onDidChangeTelemetryEnabled !== void 0 ? (this.disposables.push(W.env.onDidChangeTelemetryEnabled(() => this.updateUserOptStatus())), this.disposables.push(W.workspace.onDidChangeConfiguration(() => this.updateUserOptStatus()))) : this.disposables.push(W.workspace.onDidChangeConfiguration(() => this.updateUserOptStatus()));
      }
      updateUserOptStatus() {
        let t = nn();
        this.userOptIn = t === He.ON, this.errorOptIn = t === He.ON, (this.userOptIn || this.errorOptIn) && this.telemetryAppender.instantiateAppender();
      }
      cleanRemoteName(t) {
        if (!t)
          return "none";
        let r = "other";
        return ["ssh-remote", "dev-container", "attached-container", "wsl", "codespaces"].forEach((n) => {
          t.indexOf(`${n}+`) === 0 && (r = n);
        }), r;
      }
      get extension() {
        return this._extension === void 0 && (this._extension = W.extensions.getExtension(this.extensionId)), this._extension;
      }
      cloneAndChange(t, r) {
        if (t === null || typeof t != "object" || typeof r != "function")
          return t;
        let n = {};
        for (let i in t)
          n[i] = r(i, t[i]);
        return n;
      }
      shouldSendErrorTelemetry() {
        return this.errorOptIn === false ? false : this.firstParty ? this.cleanRemoteName(W.env.remoteName) !== "other" ? true : !(this.extension === void 0 || this.extension.extensionKind === W.ExtensionKind.Workspace || W.env.uiKind === W.UIKind.Web) : true;
      }
      getCommonProperties() {
        let t = Object.create(null);
        if (t["common.os"] = this.osShim.platform, t["common.platformversion"] = (this.osShim.release || "").replace(/^(\d+)(\.\d+)?(\.\d+)?(.*)/, "$1$2$3"), t["common.extname"] = this.extensionId, t["common.extversion"] = this.extensionVersion, W && W.env) {
          switch (t["common.vscodemachineid"] = W.env.machineId, t["common.vscodesessionid"] = W.env.sessionId, t["common.vscodeversion"] = W.version, t["common.isnewappinstall"] = W.env.isNewAppInstall ? W.env.isNewAppInstall.toString() : "false", t["common.product"] = W.env.appHost, W.env.uiKind) {
            case W.UIKind.Web:
              t["common.uikind"] = "web";
              break;
            case W.UIKind.Desktop:
              t["common.uikind"] = "desktop";
              break;
            default:
              t["common.uikind"] = "unknown";
          }
          t["common.remotename"] = this.cleanRemoteName(W.env.remoteName);
        }
        return t;
      }
      anonymizeFilePaths(t, r) {
        let n;
        if (t == null)
          return "";
        let i = [];
        W.env.appRoot !== "" && i.push(new RegExp(W.env.appRoot.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")), this.extension && i.push(new RegExp(this.extension.extensionPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"));
        let a = t;
        if (r) {
          let s = [];
          for (let p of i)
            for (; (n = p.exec(t)) && n; )
              s.push([n.index, p.lastIndex]);
          let o = /^[\\/]?(node_modules|node_modules\.asar)[\\/]/, u = /(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-._]+(\\\\|\\|\/))+[\w-._]*/g, c = 0;
          for (a = ""; (n = u.exec(t)) && n; )
            n[0] && !o.test(n[0]) && s.every(([p, f]) => n.index < p || n.index >= f) && (a += t.substring(c, n.index) + "<REDACTED: user-file-path>", c = u.lastIndex);
          c < t.length && (a += t.substr(c));
        }
        for (let s of i)
          a = a.replace(s, "");
        return a;
      }
      removePropertiesWithPossibleUserInfo(t) {
        if (typeof t != "object")
          return;
        let r = Object.create(null);
        for (let n of Object.keys(t)) {
          let i = t[n];
          if (!i)
            continue;
          let a = /@[a-zA-Z0-9-.]+/;
          /\S*(key|token|sig|password|passwd|pwd)[="':\s]+\S*/.test(i.toLowerCase()) ? r[n] = "<REDACTED: secret>" : a.test(i) ? r[n] = "<REDACTED: email>" : r[n] = i;
        }
        return r;
      }
      sendTelemetryEvent(t, r, n) {
        if (this.userOptIn && t !== "") {
          r = It(It({}, r), this.getCommonProperties());
          let i = this.cloneAndChange(r, (a, s) => this.anonymizeFilePaths(s, this.firstParty));
          this.telemetryAppender.logEvent(`${this.extensionId}/${t}`, { properties: this.removePropertiesWithPossibleUserInfo(i), measurements: n });
        }
      }
      sendRawTelemetryEvent(t, r, n) {
        this.userOptIn && t !== "" && (r = It(It({}, r), this.getCommonProperties()), this.telemetryAppender.logEvent(`${this.extensionId}/${t}`, { properties: r, measurements: n }));
      }
      sendTelemetryErrorEvent(t, r, n, i) {
        if (this.errorOptIn && t !== "") {
          r = It(It({}, r), this.getCommonProperties());
          let a = this.cloneAndChange(r, (s, o) => this.shouldSendErrorTelemetry() ? this.anonymizeFilePaths(o, this.firstParty) : i === void 0 || i.indexOf(s) !== -1 ? "REDACTED" : this.anonymizeFilePaths(o, this.firstParty));
          this.telemetryAppender.logEvent(`${this.extensionId}/${t}`, { properties: this.removePropertiesWithPossibleUserInfo(a), measurements: n });
        }
      }
      sendTelemetryException(t, r, n) {
        if (this.shouldSendErrorTelemetry() && this.errorOptIn && t) {
          r = It(It({}, r), this.getCommonProperties());
          let i = this.cloneAndChange(r, (a, s) => this.anonymizeFilePaths(s, this.firstParty));
          t.stack && (t.stack = this.anonymizeFilePaths(t.stack, this.firstParty)), this.telemetryAppender.logException(t, { properties: this.removePropertiesWithPossibleUserInfo(i), measurements: n });
        }
      }
      dispose() {
        return this.telemetryAppender.flush(), Promise.all(this.disposables.map((t) => t.dispose()));
      }
    };
    var gu = class {
      constructor(t, r) {
        this._isInstantiated = false;
        this._eventQueue = [];
        this._exceptionQueue = [];
        this._clientFactory = r, this._key = t, nn() !== He.OFF && this.instantiateAppender();
      }
      logEvent(t, r) {
        if (!this._telemetryClient) {
          !this._isInstantiated && nn() === He.ON && this._eventQueue.push({ eventName: t, data: r });
          return;
        }
        this._telemetryClient.logEvent(t, r);
      }
      logException(t, r) {
        if (!this._telemetryClient) {
          !this._isInstantiated && nn() !== He.OFF && this._exceptionQueue.push({ exception: t, data: r });
          return;
        }
        this._telemetryClient.logException(t, r);
      }
      async flush() {
        this._telemetryClient && (await this._telemetryClient.flush(), this._telemetryClient = void 0);
      }
      _flushQueues() {
        this._eventQueue.forEach(({ eventName: t, data: r }) => this.logEvent(t, r)), this._eventQueue = [], this._exceptionQueue.forEach(({ exception: t, data: r }) => this.logException(t, r)), this._exceptionQueue = [];
      }
      instantiateAppender() {
        this._isInstantiated || this._clientFactory(this._key).then((t) => {
          this._telemetryClient = t, this._isInstantiated = true, this._flushQueues();
        }).catch((t) => {
          console.error(t);
        });
      }
    };
    var Ux = async (e) => {
      let t;
      try {
        let n = await Promise.resolve().then(() => Si(iS()));
        n.defaultClient ? (t = new n.TelemetryClient(e), t.channel.setUseDiskRetryCaching(true)) : (n.setup(e).setAutoCollectRequests(false).setAutoCollectPerformance(false).setAutoCollectExceptions(false).setAutoCollectDependencies(false).setAutoDependencyCorrelation(false).setAutoCollectConsole(false).setUseDiskRetryCaching(true).start(), t = n.defaultClient), Ei && Ei.env && (t.context.tags[t.context.keys.userId] = Ei.env.machineId, t.context.tags[t.context.keys.sessionId] = Ei.env.sessionId, t.context.tags[t.context.keys.cloudRole] = Ei.env.appName, t.context.tags[t.context.keys.cloudRoleInstance] = Ei.env.appName), e && e.indexOf("AIF-") === 0 && (t.config.endpointUrl = "https://vortex.data.microsoft.com/collect/v1");
      } catch (n) {
        return Promise.reject(n);
      }
      return { logEvent: (n, i) => {
        t == null || t.trackEvent({ name: n, properties: i == null ? void 0 : i.properties, measurements: i == null ? void 0 : i.measurements });
      }, logException: (n, i) => {
        t == null || t.trackException({ exception: n, properties: i == null ? void 0 : i.properties, measurements: i == null ? void 0 : i.measurements });
      }, flush: async () => {
        t == null || t.flush();
      } };
    };
    var lf = class extends vu {
      constructor(t, r, n, i) {
        let a = new gu(n, Ux);
        n && n.indexOf("AIF-") === 0 && (i = true);
        super(t, r, a, { release: hu.release(), platform: hu.platform() }, i);
      }
    };
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module2) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          "escape": reEscape,
          "evaluate": reEvaluate,
          "interpolate": reInterpolate,
          "variable": "",
          "imports": {
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path10) {
          path10 = castPath(path10, object);
          var index = 0, length = path10.length;
          while (object != null && index < length) {
            object = object[toKey(path10[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path10, args) {
          path10 = castPath(path10, object);
          object = parent(object, path10);
          var func = object == null ? object : object[toKey(last(path10))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path10, srcValue) {
          if (isKey(path10) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path10), srcValue);
          }
          return function(object) {
            var objValue = get(object, path10);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path10) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path10) {
            return hasIn(object, path10);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path10 = paths[index], value = baseGet(object, path10);
            if (predicate(value, path10)) {
              baseSet(result2, castPath(path10, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path10) {
          return function(object) {
            return baseGet(object, path10);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path10, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path10 = castPath(path10, object);
          var index = -1, length = path10.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path10[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path10[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path10) {
          path10 = castPath(path10, object);
          object = parent(object, path10);
          return object == null || delete object[toKey(last(path10))];
        }
        function baseUpdate(object, path10, updater, customizer) {
          return baseSet(object, path10, updater(baseGet(object, path10)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path10, hasFunc) {
          path10 = castPath(path10, object);
          var index = -1, length = path10.length, result2 = false;
          while (++index < length) {
            var key = toKey(path10[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path10) {
          return path10.length < 2 ? object : baseGet(object, baseSlice(path10, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path10, args) {
          var index = -1, isFunc = typeof path10 == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path10, value, args) : baseInvoke(value, path10, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path10, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path10);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path10) {
          return object != null && hasPath(object, path10, baseHas);
        }
        function hasIn(object, path10) {
          return object != null && hasPath(object, path10, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path10) {
            path10 = castPath(path10, object);
            isDeep || (isDeep = path10.length > 1);
            return path10;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path10) {
            return predicate(value, path10[0]);
          });
        }
        function result(object, path10, defaultValue) {
          path10 = castPath(path10, object);
          var index = -1, length = path10.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path10[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path10, value) {
          return object == null ? object : baseSet(object, path10, value);
        }
        function setWith(object, path10, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path10, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path10) {
          return object == null ? true : baseUnset(object, path10);
        }
        function update(object, path10, updater) {
          return object == null ? object : baseUpdate(object, path10, castFunction(updater));
        }
        function updateWith(object, path10, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path10, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path10, srcValue) {
          return baseMatchesProperty(path10, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path10, args) {
          return function(object) {
            return baseInvoke(object, path10, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path10) {
            return baseInvoke(object, path10, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path10) {
          return isKey(path10) ? baseProperty(toKey(path10)) : basePropertyDeep(path10);
        }
        function propertyOf(object) {
          return function(path10) {
            return object == null ? undefined2 : baseGet(object, path10);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path10, args) {
          if (typeof path10 == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path10, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _2 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _2;
        define(function() {
          return _2;
        });
      } else if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root._ = _2;
      }
    }).call(exports);
  }
});

// src/goMain.ts
__export(exports, {
  activate: () => activate,
  deactivate: () => deactivate
});

// src/goRunTestCodelens.ts
var import_vscode = __toModule(require("vscode"));

// src/goPath.ts
"use strict";
var fs = require("fs");
var path = require("path");
var os = require("os");
var binPathCache = {};
var runtimePathCache = "";
var envPath = process.env["PATH"] || (process.platform === "win32" ? process.env["Path"] : null);
function getBinPathFromEnvVar(toolName, envVarValue, appendBinToPath) {
  toolName = correctBinname(toolName);
  if (envVarValue) {
    let paths = envVarValue.split(path.delimiter);
    for (let i = 0; i < paths.length; i++) {
      let binpath = path.join(paths[i], appendBinToPath ? "bin" : "", toolName);
      if (fileExists(binpath)) {
        binPathCache[toolName] = binpath;
        return binpath;
      }
    }
  }
  return null;
}
function getBinPathWithPreferredGopath(binname, ...preferredGopaths) {
  if (binPathCache[correctBinname(binname)])
    return binPathCache[correctBinname(binname)];
  for (let i = 0; i < preferredGopaths.length; i++) {
    if (typeof preferredGopaths[i] === "string") {
      let pathFrompreferredGoPath = getBinPathFromEnvVar(binname, preferredGopaths[i], true);
      if (pathFrompreferredGoPath) {
        return pathFrompreferredGoPath;
      }
    }
  }
  let pathFromPath = getBinPathFromEnvVar(binname, envPath, false);
  if (pathFromPath) {
    return pathFromPath;
  }
  let pathFromGoRoot = getBinPathFromEnvVar(binname, process.env["GOROOT"], true);
  if (pathFromGoRoot) {
    return pathFromGoRoot;
  }
  return binname;
}
function correctBinname(binname) {
  if (process.platform === "win32")
    return binname + ".exe";
  else
    return binname;
}
function getGoRuntimePath() {
  if (runtimePathCache)
    return runtimePathCache;
  let correctBinNameGo = correctBinname("go");
  if (process.env["GOROOT"]) {
    let runtimePathFromGoRoot = path.join(process.env["GOROOT"], "bin", correctBinNameGo);
    if (fileExists(runtimePathFromGoRoot)) {
      runtimePathCache = runtimePathFromGoRoot;
      return runtimePathCache;
    }
  }
  if (envPath) {
    let pathparts = envPath.split(path.delimiter);
    runtimePathCache = pathparts.map((dir) => path.join(dir, correctBinNameGo)).filter((candidate) => fileExists(candidate))[0];
  }
  if (!runtimePathCache) {
    let defaultPathForGo = process.platform === "win32" ? "C:\\Go\\bin\\go.exe" : "/usr/local/go/bin/go";
    if (fileExists(defaultPathForGo)) {
      runtimePathCache = defaultPathForGo;
    }
  }
  return runtimePathCache;
}
function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (e) {
    return false;
  }
}
function clearCacheForTools() {
  binPathCache = {};
}
function resolveHomeDir(inputPath) {
  if (!inputPath || !inputPath.trim())
    return inputPath;
  return inputPath.startsWith("~") ? path.join(os.homedir(), inputPath.substr(1)) : inputPath;
}
function stripBOM(s) {
  if (s && s[0] === "\uFEFF") {
    s = s.substr(1);
  }
  return s;
}
function parseEnvFile(path10) {
  const env = {};
  if (!path10) {
    return env;
  }
  try {
    const buffer = stripBOM(fs.readFileSync(path10, "utf8"));
    buffer.split("\n").forEach((line) => {
      const r = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
      if (r !== null) {
        let value = r[2] || "";
        if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.replace(/\\n/gm, "\n");
        }
        env[r[1]] = value.replace(/(^['"]|['"]$)/g, "");
      }
    });
    return env;
  } catch (e) {
    throw `Cannot load environment variables from file ${path10}`;
  }
}
function getInferredGopath(folderPath) {
  if (!folderPath) {
    return;
  }
  let dirs = folderPath.toLowerCase().split(path.sep);
  let srcIdx = dirs.lastIndexOf("src");
  if (srcIdx > 0) {
    return folderPath.substr(0, dirs.slice(0, srcIdx).join(path.sep).length);
  }
}
function getCurrentGoWorkspaceFromGOPATH(gopath, currentFileDirPath) {
  if (!gopath) {
    return;
  }
  let workspaces = gopath.split(path.delimiter);
  let currentWorkspace = "";
  currentFileDirPath = fixDriveCasingInWindows(currentFileDirPath);
  for (let i = 0; i < workspaces.length; i++) {
    const possibleCurrentWorkspace = path.join(workspaces[i], "src");
    if (currentFileDirPath.startsWith(possibleCurrentWorkspace) || process.platform === "win32" && currentFileDirPath.toLowerCase().startsWith(possibleCurrentWorkspace.toLowerCase())) {
      if (possibleCurrentWorkspace.length > currentWorkspace.length) {
        currentWorkspace = currentFileDirPath.substr(0, possibleCurrentWorkspace.length);
      }
    }
  }
  return currentWorkspace;
}
function fixDriveCasingInWindows(pathToFix) {
  return process.platform === "win32" && pathToFix ? pathToFix.substr(0, 1).toUpperCase() + pathToFix.substr(1) : pathToFix;
}

// src/util.ts
var import_vscode_extension_telemetry = __toModule(require_telemetryReporter_node_min());

// src/goMode.ts
"use strict";
var vscode = require("vscode");
var GO_MODE = { language: "go", scheme: "file" };

// src/goStatus.ts
"use strict";
var vscode2 = require("vscode");
var outputChannel = vscode2.window.createOutputChannel("Go");
var diagnosticsStatusBarItem = vscode2.window.createStatusBarItem(vscode2.StatusBarAlignment.Left);
var statusBarEntry;
function hideGoStatus() {
  if (statusBarEntry) {
    statusBarEntry.dispose();
  }
}

// src/util.ts
var vscode3 = require("vscode");
var path2 = require("path");
var cp = require("child_process");
var fs2 = require("fs");
var os2 = require("os");
var extensionId = "windmilleng.vscode-go-autotest";
var extensionVersion = vscode3.extensions.getExtension(extensionId).packageJSON.version;
var aiKey = "c490a00e-fb9a-4ee5-b30c-dd5ed51518aa";
var goBuiltinTypes = new Set([
  "bool",
  "byte",
  "complex128",
  "complex64",
  "error",
  "float32",
  "float64",
  "int",
  "int16",
  "int32",
  "int64",
  "int8",
  "rune",
  "string",
  "uint",
  "uint16",
  "uint32",
  "uint64",
  "uint8",
  "uintptr"
]);
var goVersion = null;
var telemtryReporter;
var toolsGopath;
function getGoVersion() {
  let goRuntimePath = getGoRuntimePath();
  if (!goRuntimePath) {
    vscode3.window.showInformationMessage('Cannot find "go" binary. Update PATH or GOROOT appropriately');
    return Promise.resolve(null);
  }
  if (goVersion) {
    return Promise.resolve(goVersion);
  }
  return new Promise((resolve, reject) => {
    cp.execFile(goRuntimePath, ["version"], {}, (err, stdout, stderr) => {
      let matches = /go version go(\d).(\d+).*/.exec(stdout);
      if (matches) {
        goVersion = {
          major: parseInt(matches[1]),
          minor: parseInt(matches[2])
        };
      }
      return resolve(goVersion);
    });
  });
}
function sendTelemetryEvent(eventName, properties, measures) {
  telemtryReporter = telemtryReporter ? telemtryReporter : new import_vscode_extension_telemetry.default(extensionId, extensionVersion, aiKey);
  telemtryReporter.sendTelemetryEvent(eventName, properties, measures);
}
function disposeTelemetryReporter() {
  if (telemtryReporter) {
    return telemtryReporter.dispose();
  }
  return Promise.resolve(null);
}
function getToolsGopath(useCache = true) {
  if (!useCache || !toolsGopath) {
    toolsGopath = resolveToolsGopath();
  }
  return toolsGopath;
}
function resolveToolsGopath() {
  let toolsGopathForWorkspace = vscode3.workspace.getConfiguration("go")["toolsGopath"] || "";
  if (!vscode3.workspace.workspaceFolders || vscode3.workspace.workspaceFolders.length <= 1) {
    return resolvePath(toolsGopathForWorkspace);
  }
  if (toolsGopathForWorkspace.startsWith("~")) {
    toolsGopathForWorkspace = path2.join(os2.homedir(), toolsGopathForWorkspace.substr(1));
  }
  if (toolsGopathForWorkspace && toolsGopathForWorkspace.trim() && !/\${workspaceRoot}/.test(toolsGopathForWorkspace)) {
    return toolsGopathForWorkspace;
  }
  for (let i = 0; i < vscode3.workspace.workspaceFolders.length; i++) {
    let toolsGopath2 = vscode3.workspace.getConfiguration("go", vscode3.workspace.workspaceFolders[i].uri).inspect("toolsGopath").workspaceFolderValue;
    toolsGopath2 = resolvePath(toolsGopath2, vscode3.workspace.workspaceFolders[i].uri.fsPath);
    if (toolsGopath2) {
      return toolsGopath2;
    }
  }
}
function getBinPath(tool) {
  return getBinPathWithPreferredGopath(tool, getToolsGopath(), getCurrentGoPath());
}
function getFileArchive(document) {
  let fileContents = document.getText();
  return document.fileName + "\n" + Buffer.byteLength(fileContents, "utf8") + "\n" + fileContents;
}
function getToolsEnvVars() {
  const config = vscode3.workspace.getConfiguration("go", vscode3.window.activeTextEditor ? vscode3.window.activeTextEditor.document.uri : null);
  const toolsEnvVars = config["toolsEnvVars"];
  const gopath = getCurrentGoPath();
  const envVars = Object.assign({}, process.env, gopath ? { GOPATH: gopath } : {});
  if (toolsEnvVars && typeof toolsEnvVars === "object") {
    Object.keys(toolsEnvVars).forEach((key) => envVars[key] = typeof toolsEnvVars[key] === "string" ? resolvePath(toolsEnvVars[key]) : toolsEnvVars[key]);
  }
  const goroot = envVars["GOROOT"];
  let pathEnvVar;
  if (envVars.hasOwnProperty("PATH")) {
    pathEnvVar = "PATH";
  } else if (process.platform === "win32" && envVars.hasOwnProperty("Path")) {
    pathEnvVar = "Path";
  }
  if (goroot && pathEnvVar && envVars[pathEnvVar] && envVars[pathEnvVar].split(path2.delimiter).indexOf(goroot) === -1) {
    envVars[pathEnvVar] += path2.delimiter + path2.join(goroot, "bin");
  }
  return envVars;
}
function getCurrentGoPath(workspaceUri) {
  let currentFilePath;
  if (vscode3.window.activeTextEditor && vscode3.workspace.getWorkspaceFolder(vscode3.window.activeTextEditor.document.uri)) {
    workspaceUri = workspaceUri || vscode3.workspace.getWorkspaceFolder(vscode3.window.activeTextEditor.document.uri).uri;
    currentFilePath = vscode3.window.activeTextEditor.document.uri.fsPath;
  }
  const config = vscode3.workspace.getConfiguration("go", workspaceUri);
  let currentRoot = workspaceUri ? workspaceUri.fsPath : vscode3.workspace.rootPath;
  if (process.platform === "win32") {
    currentRoot = fixDriveCasingInWindows(currentRoot) || "";
    currentFilePath = fixDriveCasingInWindows(currentFilePath) || "";
  }
  let inferredGopath;
  if (config["inferGopath"] === true) {
    inferredGopath = getInferredGopath(currentRoot) || getInferredGopath(currentFilePath);
    if (!inferredGopath) {
      try {
        if (fs2.statSync(path2.join(currentRoot, "src")).isDirectory()) {
          inferredGopath = currentRoot;
        }
      } catch (e) {
      }
    }
  }
  const configGopath = config["gopath"] ? resolvePath(config["gopath"], currentRoot) : "";
  return inferredGopath ? inferredGopath : configGopath || process.env["GOPATH"];
}
var LineBuffer = class {
  constructor() {
    this.buf = "";
    this.lineListeners = [];
    this.lastListeners = [];
  }
  append(chunk) {
    this.buf += chunk;
    do {
      const idx = this.buf.indexOf("\n");
      if (idx === -1) {
        break;
      }
      this.fireLine(this.buf.substring(0, idx));
      this.buf = this.buf.substring(idx + 1);
    } while (true);
  }
  done() {
    this.fireDone(this.buf !== "" ? this.buf : null);
  }
  fireLine(line) {
    this.lineListeners.forEach((listener) => listener(line));
  }
  fireDone(last) {
    this.lastListeners.forEach((listener) => listener(last));
  }
  onLine(listener) {
    this.lineListeners.push(listener);
  }
  onDone(listener) {
    this.lastListeners.push(listener);
  }
};
function resolvePath(inputPath, workspaceRoot) {
  if (!inputPath || !inputPath.trim())
    return inputPath;
  if (!workspaceRoot && vscode3.workspace.workspaceFolders) {
    if (vscode3.workspace.workspaceFolders.length === 1) {
      workspaceRoot = vscode3.workspace.rootPath;
    } else if (vscode3.window.activeTextEditor && vscode3.workspace.getWorkspaceFolder(vscode3.window.activeTextEditor.document.uri)) {
      workspaceRoot = vscode3.workspace.getWorkspaceFolder(vscode3.window.activeTextEditor.document.uri).uri.fsPath;
    }
  }
  if (workspaceRoot) {
    inputPath = inputPath.replace(/\${workspaceRoot}/g, workspaceRoot).replace(/\${workspaceFolder}/g, workspaceRoot);
  }
  return resolveHomeDir(inputPath);
}
function killProcess(p) {
  if (p) {
    try {
      p.kill();
    } catch (e) {
      console.log("Error killing process: " + e);
      if (e && e.message && e.stack) {
        let matches = e.stack.match(/(src.go[a-z,A-Z]+\.js)/g);
        if (matches) {
          sendTelemetryEvent("errorKillingProcess", { message: e.message, stack: matches });
        }
      }
    }
  }
}

// src/goInstallTools.ts
"use strict";
var vscode4 = require("vscode");
var fs3 = require("fs");
var path3 = require("path");
var cp2 = require("child_process");
var updatesDeclinedTools = [];
var installsDeclinedTools = [];
var allTools = {
  "gocode": "github.com/nsf/gocode",
  "gopkgs": "github.com/uudashr/gopkgs/cmd/gopkgs",
  "go-outline": "github.com/ramya-rao-a/go-outline",
  "go-symbols": "github.com/acroca/go-symbols",
  "guru": "golang.org/x/tools/cmd/guru",
  "gorename": "golang.org/x/tools/cmd/gorename",
  "gomodifytags": "github.com/fatih/gomodifytags",
  "goplay": "github.com/haya14busa/goplay/cmd/goplay",
  "impl": "github.com/josharian/impl",
  "gotype-live": "github.com/tylerb/gotype-live",
  "godef": "github.com/rogpeppe/godef",
  "godoc": "golang.org/x/tools/cmd/godoc",
  "gogetdoc": "github.com/zmb3/gogetdoc",
  "goimports": "golang.org/x/tools/cmd/goimports",
  "goreturns": "github.com/sqs/goreturns",
  "goformat": "winterdrache.de/goformat/goformat",
  "golint": "github.com/golang/lint/golint",
  "gotests": "github.com/cweill/gotests/...",
  "gometalinter": "github.com/alecthomas/gometalinter",
  "megacheck": "honnef.co/go/tools/...",
  "go-langserver": "github.com/sourcegraph/go-langserver",
  "dlv": "github.com/derekparker/delve/cmd/dlv",
  "fillstruct": "github.com/davidrjenni/reftools/cmd/fillstruct"
};
var importantTools = [
  "gocode",
  "gopkgs",
  "go-outline",
  "go-symbols",
  "guru",
  "gorename",
  "godef",
  "godoc",
  "gogetdoc",
  "goreturns",
  "goimports",
  "golint",
  "gometalinter",
  "megacheck",
  "dlv"
];
function getTools(goVersion2) {
  let goConfig = vscode4.workspace.getConfiguration("go", vscode4.window.activeTextEditor ? vscode4.window.activeTextEditor.document.uri : null);
  let tools = [
    "gocode",
    "gopkgs",
    "go-outline",
    "go-symbols",
    "guru",
    "gorename",
    "gomodifytags",
    "goplay",
    "impl",
    "fillstruct"
  ];
  if (goConfig["docsTool"] === "godoc") {
    tools.push("godef");
    tools.push("godoc");
  } else if (goConfig["docsTool"] === "gogetdoc") {
    tools.push("gogetdoc");
  }
  if (goConfig["formatTool"] === "goimports") {
    tools.push("goimports");
  } else if (goConfig["formatTool"] === "goformat") {
    tools.push("goformat");
  } else if (goConfig["formatTool"] === "goreturns") {
    tools.push("goreturns");
  }
  if (!goVersion2 || (goVersion2.major > 1 || goVersion2.major === 1 && goVersion2.minor > 5)) {
    tools.push("golint");
    tools.push("gotests");
  }
  if (goConfig["lintTool"] === "gometalinter") {
    tools.push("gometalinter");
  }
  if (goConfig["lintTool"] === "megacheck") {
    tools.push("megacheck");
  }
  if (goConfig["useLanguageServer"] && process.platform !== "win32") {
    tools.push("go-langserver");
  }
  if (process.platform !== "darwin") {
    tools.push("dlv");
  }
  return tools;
}
function promptForMissingTool(tool) {
  if (installsDeclinedTools.indexOf(tool) > -1) {
    return;
  }
  getGoVersion().then((goVersion2) => {
    if (goVersion2 && goVersion2.major === 1 && goVersion2.minor < 6) {
      if (tool === "golint") {
        vscode4.window.showInformationMessage("golint no longer supports go1.5, update your settings to use gometalinter as go.lintTool and install gometalinter");
        return;
      }
      if (tool === "gotests") {
        vscode4.window.showInformationMessage("Generate unit tests feature is not supported as gotests tool needs go1.6 or higher.");
        return;
      }
    }
    const items = ["Install"];
    getMissingTools(goVersion2).then((missing) => {
      if (missing.indexOf(tool) === -1) {
        return;
      }
      missing = missing.filter((x) => x === tool || importantTools.indexOf(x) > -1);
      if (missing.length > 1) {
        items.push("Install All");
      }
      vscode4.window.showInformationMessage(`The "${tool}" command is not available.  Use "go get -v ${allTools[tool]}" to install.`, ...items).then((selected) => {
        if (selected === "Install") {
          installTools(goVersion2, [tool]);
        } else if (selected === "Install All") {
          installTools(goVersion2, missing);
          hideGoStatus();
        } else {
          installsDeclinedTools.push(tool);
        }
      });
    });
  });
}
function promptForUpdatingTool(tool) {
  if (updatesDeclinedTools.indexOf(tool) > -1) {
    return;
  }
  getGoVersion().then((goVersion2) => {
    vscode4.window.showInformationMessage(`The Go extension is better with the latest version of "${tool}". Use "go get -u -v ${allTools[tool]}" to update`, "Update").then((selected) => {
      if (selected === "Update") {
        installTools(goVersion2, [tool]);
      } else {
        updatesDeclinedTools.push(tool);
      }
    });
  });
}
function installTools(goVersion2, missing) {
  let goRuntimePath = getGoRuntimePath();
  if (!goRuntimePath) {
    vscode4.window.showInformationMessage('Cannot find "go" binary. Update PATH or GOROOT appropriately');
    return;
  }
  if (!missing) {
    missing = getTools(goVersion2);
  }
  let httpProxy = vscode4.workspace.getConfiguration("http").get("proxy");
  let envForTools = Object.assign({}, process.env);
  if (httpProxy) {
    envForTools = Object.assign({}, process.env, {
      http_proxy: httpProxy,
      HTTP_PROXY: httpProxy,
      https_proxy: httpProxy,
      HTTPS_PROXY: httpProxy
    });
  }
  let toolsGopath2 = getToolsGopath() || getCurrentGoPath();
  if (toolsGopath2) {
    envForTools["GOPATH"] = toolsGopath2;
  } else {
    vscode4.window.showInformationMessage("Cannot install Go tools. Set either go.gopath or go.toolsGopath in settings.", "Open User Settings", "Open Workspace Settings").then((selected) => {
      if (selected === "Open User Settings") {
        vscode4.commands.executeCommand("workbench.action.openGlobalSettings");
      } else if (selected === "Open Workspace Settings") {
        vscode4.commands.executeCommand("workbench.action.openWorkspaceSettings");
      }
    });
    return;
  }
  outputChannel.show();
  outputChannel.clear();
  outputChannel.appendLine(`Installing ${missing.length} ${missing.length > 1 ? "tools" : "tool"} at ${toolsGopath2}${path3.sep}bin`);
  missing.forEach((missingTool, index, missing2) => {
    outputChannel.appendLine("  " + missingTool);
  });
  outputChannel.appendLine("");
  missing.reduce((res, tool) => {
    return res.then((sofar) => new Promise((resolve, reject) => {
      cp2.execFile(goRuntimePath, ["get", "-u", "-v", allTools[tool]], { env: envForTools }, (err, stdout, stderr) => {
        if (err) {
          outputChannel.appendLine("Installing " + allTools[tool] + " FAILED");
          let failureReason = tool + ";;" + err + stdout.toString() + stderr.toString();
          resolve([...sofar, failureReason]);
        } else {
          outputChannel.appendLine("Installing " + allTools[tool] + " SUCCEEDED");
          if (tool === "gometalinter") {
            outputChannel.appendLine("Installing all linters used by gometalinter....");
            let gometalinterBinPath = getBinPath("gometalinter");
            cp2.execFile(gometalinterBinPath, ["--install"], { env: envForTools }, (err2, stdout2, stderr2) => {
              if (!err2) {
                outputChannel.appendLine("Installing all linters used by gometalinter SUCCEEDED.");
                resolve([...sofar, null]);
              } else {
                let failureReason = `Error while running gometalinter --install;; ${stderr2}`;
                resolve([...sofar, failureReason]);
              }
            });
          } else {
            resolve([...sofar, null]);
          }
        }
      });
    }));
  }, Promise.resolve([])).then((res) => {
    outputChannel.appendLine("");
    let failures = res.filter((x) => x != null);
    if (failures.length === 0) {
      if (missing.indexOf("langserver-go") > -1) {
        outputChannel.appendLine("Reload VS Code window to use the Go language server");
      }
      outputChannel.appendLine("All tools successfully installed. You're ready to Go :).");
      return;
    }
    outputChannel.appendLine(failures.length + " tools failed to install.\n");
    failures.forEach((failure, index, failures2) => {
      let reason = failure.split(";;");
      outputChannel.appendLine(reason[0] + ":");
      outputChannel.appendLine(reason[1]);
    });
  });
}
function updateGoPathGoRootFromConfig() {
  let goroot = vscode4.workspace.getConfiguration("go", vscode4.window.activeTextEditor ? vscode4.window.activeTextEditor.document.uri : null)["goroot"];
  if (goroot) {
    process.env["GOROOT"] = resolvePath(goroot);
  }
  if (process.env["GOPATH"] && process.env["GOROOT"]) {
    return Promise.resolve();
  }
  let goRuntimePath = getGoRuntimePath();
  if (!goRuntimePath) {
    return Promise.reject(new Error('Cannot find "go" binary. Update PATH or GOROOT appropriately'));
  }
  return new Promise((resolve, reject) => {
    cp2.execFile(goRuntimePath, ["env", "GOPATH", "GOROOT"], (err, stdout, stderr) => {
      if (err) {
        return reject();
      }
      let envOutput = stdout.split("\n");
      if (!process.env["GOPATH"] && envOutput[0].trim()) {
        process.env["GOPATH"] = envOutput[0].trim();
      }
      if (!process.env["GOROOT"] && envOutput[1] && envOutput[1].trim()) {
        process.env["GOROOT"] = envOutput[1].trim();
      }
      return resolve();
    });
  });
}
function getMissingTools(goVersion2) {
  let keys = getTools(goVersion2);
  return Promise.all(keys.map((tool) => new Promise((resolve, reject) => {
    let toolPath = getBinPath(tool);
    fs3.exists(toolPath, (exists) => {
      resolve(exists ? null : tool);
    });
  }))).then((res) => {
    return res.filter((x) => x != null);
  });
}

// src/goOutline.ts
"use strict";
var vscode5 = require("vscode");
var cp3 = require("child_process");
function documentSymbols(options, token) {
  return new Promise((resolve, reject) => {
    let gooutline = getBinPath("go-outline");
    let gooutlineFlags = ["-f", options.fileName];
    if (options.importsOnly) {
      gooutlineFlags.push("-imports-only");
    }
    if (options.document) {
      gooutlineFlags.push("-modified");
    }
    let p;
    if (token) {
      token.onCancellationRequested(() => killProcess(p));
    }
    p = cp3.execFile(gooutline, gooutlineFlags, { env: getToolsEnvVars() }, (err, stdout, stderr) => {
      try {
        if (err && err.code === "ENOENT") {
          promptForMissingTool("go-outline");
        }
        if (stderr && stderr.startsWith("flag provided but not defined: ")) {
          promptForUpdatingTool("go-outline");
          if (stderr.startsWith("flag provided but not defined: -imports-only")) {
            options.importsOnly = false;
          }
          if (stderr.startsWith("flag provided but not defined: -modified")) {
            options.document = null;
          }
          p = null;
          return documentSymbols(options, token).then((results) => {
            return resolve(results);
          });
        }
        if (err)
          return resolve(null);
        let result = stdout.toString();
        let decls = JSON.parse(result);
        return resolve(decls);
      } catch (e) {
        reject(e);
      }
    });
    if (options.document) {
      p.stdin.end(getFileArchive(options.document));
    }
  });
}
var GoDocumentSymbolProvider = class {
  constructor() {
    this.goKindToCodeKind = {
      "package": vscode5.SymbolKind.Package,
      "import": vscode5.SymbolKind.Namespace,
      "variable": vscode5.SymbolKind.Variable,
      "type": vscode5.SymbolKind.Interface,
      "function": vscode5.SymbolKind.Function
    };
  }
  convertToCodeSymbols(document, decls, symbols, containerName) {
    let gotoSymbolConfig = vscode5.workspace.getConfiguration("go", document.uri)["gotoSymbol"];
    let includeImports = gotoSymbolConfig ? gotoSymbolConfig["includeImports"] : false;
    (decls || []).forEach((decl) => {
      if (!includeImports && decl.type === "import")
        return;
      let label = decl.label;
      if (decl.receiverType) {
        label = "(" + decl.receiverType + ")." + label;
      }
      let codeBuf = new Buffer(document.getText());
      let start = codeBuf.slice(0, decl.start - 1).toString().length;
      let end = codeBuf.slice(0, decl.end - 1).toString().length;
      let symbolInfo = new vscode5.SymbolInformation(label, this.goKindToCodeKind[decl.type], new vscode5.Range(document.positionAt(start), document.positionAt(end)), document.uri, containerName);
      symbols.push(symbolInfo);
      if (decl.children) {
        this.convertToCodeSymbols(document, decl.children, symbols, decl.label);
      }
    });
  }
  provideDocumentSymbols(document, token) {
    let options = { fileName: document.fileName, document };
    return documentSymbols(options, token).then((decls) => {
      let symbols = [];
      this.convertToCodeSymbols(document, decls, symbols, "");
      return symbols;
    });
  }
};

// src/goPackages.ts
var vscode6 = require("vscode");
var cp4 = require("child_process");
var path4 = require("path");
function getNonVendorPackages(folderPath) {
  let goRuntimePath = getGoRuntimePath();
  if (!goRuntimePath) {
    vscode6.window.showInformationMessage('Cannot find "go" binary. Update PATH or GOROOT appropriately');
    return Promise.resolve(null);
  }
  return new Promise((resolve, reject) => {
    let childProcess = cp4.spawn(goRuntimePath, ["list", "./..."], { cwd: folderPath, env: getToolsEnvVars() });
    let chunks = [];
    childProcess.stdout.on("data", (stdout) => {
      chunks.push(stdout);
    });
    childProcess.on("close", (status) => {
      let pkgs = chunks.join("").toString().split("\n");
      if (!pkgs[pkgs.length - 1]) {
        pkgs.splice(pkgs.length - 1);
      }
      getGoVersion().then((ver) => {
        if (ver && (ver.major > 1 || ver.major === 1 && ver.minor >= 9)) {
          resolve(pkgs);
        } else {
          resolve(pkgs.filter((pkgPath) => pkgPath && !pkgPath.includes("/vendor/")));
        }
      });
    });
  });
}

// src/testUtils.ts
var cp5 = require("child_process");
var path5 = require("path");
var vscode7 = require("vscode");
var util = require("util");
var defaultOutputChannel = vscode7.window.createOutputChannel("Go Tests");
function getTestEnvVars(config) {
  const envVars = getToolsEnvVars();
  const testEnvConfig = config["testEnvVars"] || {};
  let fileEnv = {};
  let testEnvFile = config["testEnvFile"];
  if (testEnvFile) {
    testEnvFile = resolvePath(testEnvFile);
    try {
      fileEnv = parseEnvFile(testEnvFile);
    } catch (e) {
      console.log(e);
    }
  }
  Object.keys(testEnvConfig).forEach((key) => envVars[key] = typeof testEnvConfig[key] === "string" ? resolvePath(testEnvConfig[key]) : testEnvConfig[key]);
  Object.keys(fileEnv).forEach((key) => envVars[key] = typeof fileEnv[key] === "string" ? resolvePath(fileEnv[key]) : fileEnv[key]);
  return envVars;
}
function getTestFlags(goConfig, args) {
  let testFlags = goConfig["testFlags"] ? goConfig["testFlags"] : goConfig["buildFlags"];
  testFlags = [...testFlags];
  return args && args.hasOwnProperty("flags") && Array.isArray(args["flags"]) ? args["flags"] : testFlags;
}
function getTestFunctions(doc, token) {
  let documentSymbolProvider = new GoDocumentSymbolProvider();
  return documentSymbolProvider.provideDocumentSymbols(doc, token).then((symbols) => symbols.filter((sym) => sym.kind === vscode7.SymbolKind.Function && (sym.name.startsWith("Test") || sym.name.startsWith("Example"))));
}
function getBenchmarkFunctions(doc, token) {
  let documentSymbolProvider = new GoDocumentSymbolProvider();
  return documentSymbolProvider.provideDocumentSymbols(doc, token).then((symbols) => symbols.filter((sym) => sym.kind === vscode7.SymbolKind.Function && sym.name.startsWith("Benchmark")));
}
function goTest(testconfig) {
  let outputChannel2 = testconfig.output || defaultOutputChannel;
  return new Promise((resolve, reject) => {
    let result = {
      success: false,
      buildFailed: false,
      tests: {}
    };
    outputChannel2.clear();
    if (!testconfig.background) {
      outputChannel2.show(true);
    }
    let buildTags = testconfig.goConfig["buildTags"];
    let args = ["test", ...testconfig.flags];
    let testType = testconfig.isBenchmark ? "Benchmarks" : "Tests";
    if (testconfig.isBenchmark) {
      args.push("-benchmem", "-run=^$");
    } else {
      args.push("-timeout", testconfig.goConfig["testTimeout"]);
    }
    if (buildTags && testconfig.flags.indexOf("-tags") === -1) {
      args.push("-tags", buildTags);
    }
    let testEnvVars = getTestEnvVars(testconfig.goConfig);
    let goRuntimePath = getGoRuntimePath();
    if (!goRuntimePath) {
      vscode7.window.showInformationMessage('Cannot find "go" binary. Update PATH or GOROOT appropriately');
      return resolve(result);
    }
    let currentGoWorkspace = getCurrentGoWorkspaceFromGOPATH(getCurrentGoPath(), testconfig.dir);
    if (currentGoWorkspace && !testconfig.includeSubDirectories) {
      args.push(testconfig.dir.substr(currentGoWorkspace.length + 1));
    }
    targetArgs(testconfig).then((targets) => {
      let outTargets = args.slice(0);
      if (targets.length > 2) {
        outTargets.push("<long arguments omitted>");
      } else {
        outTargets.push(...targets);
      }
      outputChannel2.appendLine(["Running tool:", goRuntimePath, ...outTargets].join(" "));
      outputChannel2.appendLine("");
      args.push(...targets);
      let proc = cp5.spawn(goRuntimePath, args, { env: testEnvVars, cwd: testconfig.dir });
      const outBuf = new LineBuffer();
      const errBuf = new LineBuffer();
      const testResultLineRE = /^[ \t\-]+(ok|FAIL)[ \t\:]+([^ ]+) /;
      const packageResultLineRE = /^(ok|FAIL)[ \t]+(.+?)[ \t]+([0-9\.]+s|\(cached\))/;
      const buildFailedLineRE = /^FAIL[ \t]+.+? \[build failed\]/;
      const testResultLines = [];
      const processTestResultLine = (line) => {
        testResultLines.push(line);
        const testResult = line.match(testResultLineRE);
        if (testResult) {
          result.tests[testResult[2]] = testResult[1] === "ok";
        }
        const packageResult = line.match(packageResultLineRE);
        if (packageResult && currentGoWorkspace) {
          const packageNameArr = packageResult[2].split("/");
          const baseDir = path5.join(currentGoWorkspace, ...packageNameArr);
          testResultLines.forEach((line2) => outputChannel2.appendLine(expandFilePathInOutput(line2, baseDir)));
          testResultLines.splice(0);
        }
        const buildFailedLine = line.match(buildFailedLineRE);
        if (buildFailedLine) {
          result.buildFailed = true;
        }
      };
      outBuf.onLine((line) => processTestResultLine(line));
      outBuf.onDone((last) => {
        if (last)
          processTestResultLine(last);
        if (testResultLines.length > 0) {
          testResultLines.forEach((line) => outputChannel2.appendLine(line));
        }
      });
      errBuf.onLine((line) => outputChannel2.appendLine(expandFilePathInOutput(line, testconfig.dir)));
      errBuf.onDone((last) => last && outputChannel2.appendLine(expandFilePathInOutput(last, testconfig.dir)));
      proc.stdout.on("data", (chunk) => outBuf.append(chunk.toString()));
      proc.stderr.on("data", (chunk) => errBuf.append(chunk.toString()));
      proc.on("close", (code) => {
        outBuf.done();
        errBuf.done();
        if (code) {
          outputChannel2.appendLine(`Error: ${testType} failed.`);
        } else {
          outputChannel2.appendLine(`Success: ${testType} passed.`);
        }
        result.success = code === 0;
        if (result.success && testconfig.functions) {
          for (let fn of testconfig.functions) {
            result.tests[fn.name] = true;
          }
        } else if (result.buildFailed && testconfig.functions) {
          for (let fn of testconfig.functions) {
            result.tests[fn.name] = false;
          }
        }
        resolve(result);
      });
    }, (err) => {
      outputChannel2.appendLine(`Error: ${testType} failed.`);
      outputChannel2.appendLine(err);
      resolve(result);
    });
  });
}
function expandFilePathInOutput(output, cwd) {
  let lines = output.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let matches = lines[i].match(/^\s*(.+.go):(\d+):/);
    if (matches && matches[1] && !path5.isAbsolute(matches[1])) {
      lines[i] = lines[i].replace(matches[1], path5.join(cwd, matches[1]));
    }
  }
  return lines.join("\n");
}
function targetArgs(testconfig) {
  if (testconfig.functions) {
    let names = testconfig.functions.map((f) => f.name);
    return Promise.resolve([testconfig.isBenchmark ? "-bench" : "-run", util.format("^%s$", names.join("|"))]);
  } else if (testconfig.includeSubDirectories && !testconfig.isBenchmark) {
    return getGoVersion().then((ver) => {
      if (ver && (ver.major > 1 || ver.major === 1 && ver.minor >= 9)) {
        return ["./..."];
      }
      return getNonVendorPackages(testconfig.dir);
    });
  }
  return Promise.resolve([]);
}

// src/goBaseCodelens.ts
var vscode8 = require("vscode");
var GoBaseCodeLensProvider = class {
  constructor() {
    this.enabled = true;
    this.onDidChangeCodeLensesEmitter = new vscode8.EventEmitter();
  }
  get onDidChangeCodeLenses() {
    return this.onDidChangeCodeLensesEmitter.event;
  }
  setEnabled(enabled) {
    if (this.enabled !== enabled) {
      this.enabled = enabled;
      this.onDidChangeCodeLensesEmitter.fire();
    }
  }
  rerenderCodeLenses() {
    this.onDidChangeCodeLensesEmitter.fire();
  }
  provideCodeLenses(document, token) {
    return [];
  }
};
var codeLens;
function setDefaultCodeLens(cl) {
  codeLens = cl;
}
function rerenderCodeLenses() {
  if (codeLens) {
    codeLens.rerenderCodeLenses();
  }
}

// src/diags.ts
"use strict";
var vscode9 = require("vscode");
var TestResultDisplay = class {
  constructor(ctx, source) {
    this.source = source;
    this.collection = vscode9.languages.createDiagnosticCollection(source);
    ctx.subscriptions.push(this.collection);
  }
  clear() {
    this.collection.clear();
  }
  displaySuccess(fn) {
    this.display(fn, "ok: " + fn.name, vscode9.DiagnosticSeverity.Information);
  }
  displayFailure(fn) {
    this.display(fn, "FAIL: " + fn.name, vscode9.DiagnosticSeverity.Error);
  }
  displayUnknown(fn) {
    this.display(fn, "unknown: " + fn.name, vscode9.DiagnosticSeverity.Error);
  }
  displayWaiting(fn) {
    this.display(fn, "waiting: " + fn.name, vscode9.DiagnosticSeverity.Information);
  }
  display(fn, message, severity) {
    let uri = fn.location.uri;
    let range = new vscode9.Range(fn.location.range.start, new vscode9.Position(fn.location.range.start.line, 1e3));
    let d = new vscode9.Diagnostic(range, message, severity);
    d.source = this.source;
    let oldDiags = this.collection.get(uri) || [];
    let newDiags = [].concat(oldDiags);
    newDiags.push(d);
    this.collection.set(uri, newDiags);
  }
};
var pinDisplay;
var autotestDisplay;
function initDiagnosticCollection(ctx) {
  pinDisplay = new TestResultDisplay(ctx, "pinned");
  autotestDisplay = new TestResultDisplay(ctx, "wm-autotest");
}

// src/goCover.ts
"use strict";
var vscode10 = require("vscode");
var path6 = require("path");
var os3 = require("os");
var fs4 = require("fs");
var rl = require("readline");
var coveredGutter;
var uncoveredGutter;
var coverProfilePath = "";
var coverageFiles = {};
function clearCoverage() {
  applyCoverage(true);
  coverageFiles = {};
}
function initGoCover(ctx) {
  coveredGutter = vscode10.window.createTextEditorDecorationType({
    gutterIconPath: ctx.asAbsolutePath("images/gutter-green.svg")
  });
  uncoveredGutter = vscode10.window.createTextEditorDecorationType({
    gutterIconPath: ctx.asAbsolutePath("images/gutter-red.svg")
  });
}
function removeCodeCoverage(e) {
  let editor = vscode10.window.visibleTextEditors.find((value, index, obj) => {
    return value.document === e.document;
  });
  if (!editor) {
    return;
  }
  for (let filename in coverageFiles) {
    let found = editor.document.uri.fsPath.endsWith(filename);
    if (!found && filename.startsWith("_")) {
      found = editor.document.uri.fsPath.endsWith(filename.slice(1));
    }
    if (found) {
      highlightCoverage(editor, coverageFiles[filename], true);
      delete coverageFiles[filename];
    }
  }
}
function getCodeCoverage(editor) {
  if (!editor) {
    return;
  }
  for (let filename in coverageFiles) {
    if (editor.document.uri.fsPath.endsWith(filename)) {
      highlightCoverage(editor, coverageFiles[filename], false);
    }
  }
}
function applyCoverage(remove = false) {
  Object.keys(coverageFiles).forEach((filename) => {
    let file = coverageFiles[filename];
    vscode10.window.visibleTextEditors.forEach((value, index, obj) => {
      let found = value.document.fileName.endsWith(filename);
      if (!found && filename.startsWith("_")) {
        found = value.document.fileName.endsWith(filename.slice(1));
      }
      if (found) {
        highlightCoverage(value, file, remove);
      }
      return found;
    });
  });
}
function highlightCoverage(editor, file, remove) {
  editor.setDecorations(coveredGutter, []);
  editor.setDecorations(uncoveredGutter, []);
  if (remove) {
    return;
  }
  editor.setDecorations(coveredGutter, file.coveredRange);
  editor.setDecorations(uncoveredGutter, file.uncoveredRange);
}
function clearCoverProfilePath() {
  coverProfilePath = "";
}
function setCoverProfilePath(path10) {
  coverProfilePath = path10;
}
function reanalyzeCoverage(showErrOutput = false) {
  return new Promise((resolve, reject) => {
    try {
      clearCoverage();
      if (!coverProfilePath) {
        resolve([]);
        return;
      }
      let lines = rl.createInterface({
        input: fs4.createReadStream(coverProfilePath),
        output: void 0
      });
      lines.on("line", function(data) {
        let fileRange = data.match(/([^:]+)\:([\d]+)\.([\d]+)\,([\d]+)\.([\d]+)\s([\d]+)\s([\d]+)/);
        if (!fileRange)
          return;
        let coverage = coverageFiles[fileRange[1]] || { coveredRange: [], uncoveredRange: [] };
        let range = new vscode10.Range(parseInt(fileRange[2]) - 1, parseInt(fileRange[3]) - 1, parseInt(fileRange[4]) - 1, parseInt(fileRange[5]) - 1);
        if (parseInt(fileRange[7]) === 1) {
          coverage.coveredRange.push({ range });
        } else {
          coverage.uncoveredRange.push({ range });
        }
        coverageFiles[fileRange[1]] = coverage;
      });
      lines.on("close", function(data) {
        applyCoverage();
        resolve([]);
      });
    } catch (e) {
      reject(e);
    }
  });
}

// src/goTest.ts
"use strict";
var path7 = require("path");
var vscode11 = require("vscode");
var os4 = require("os");
var autorunTestConfig;
var lastAutorunTestResult;
var autorunTestStart;
var autotestFileConfig;
var lastAutotestFileResult;
function pinTestAtCursor(goConfig, isBenchmark, args) {
  let editor = vscode11.window.activeTextEditor;
  if (!editor) {
    vscode11.window.showInformationMessage("No editor is active.");
    return Promise.resolve(true);
  }
  if (!editor.document.fileName.endsWith("_test.go")) {
    vscode11.window.showInformationMessage("No tests found. Current file is not a test file.");
    return Promise.resolve(true);
  }
  cleanUpOldAutotestFileOutput();
  autotestDisplay.clear();
  clearPinnedTest();
  sendTelemetryEvent("autotest-pin", { args }, {});
  const getFunctions = isBenchmark ? getBenchmarkFunctions : getTestFunctions;
  const testFlags = getTestFlags(goConfig, args) || [];
  let coverPath = path7.normalize(path7.join(os4.tmpdir(), "go-code-cover"));
  testFlags.push("-coverprofile=" + coverPath);
  setCoverProfilePath(coverPath);
  return editor.document.save().then(() => {
    return getFunctions(editor.document, null);
  }).then((testFunctions) => {
    let testFunction;
    if (args && args.symbol) {
      testFunction = args.symbol;
    } else {
      for (let func of testFunctions) {
        let selection = editor.selection;
        if (selection && func.location.range.contains(selection.start)) {
          testFunction = func;
          break;
        }
      }
      ;
    }
    if (!testFunction) {
      vscode11.window.showInformationMessage("No test function found at cursor.");
      return;
    }
    const testConfig = {
      goConfig,
      dir: path7.dirname(editor.document.fileName),
      fileName: editor.document.fileName,
      flags: testFlags,
      functions: [testFunction],
      isBenchmark,
      showTestCoverage: true,
      background: true,
      output: vscode11.window.createOutputChannel("Go Test " + testFunction.name)
    };
    autorunTestConfig = testConfig;
    updatePinStatus();
    pinDisplay.displayWaiting(testFunction);
    vscode11.commands.executeCommand("workbench.action.problems.focus");
    rerenderCodeLenses();
    runPinnedTest();
  });
}
var pinStatus = vscode11.window.createStatusBarItem(vscode11.StatusBarAlignment.Left, 0);
function updatePinStatus() {
  if (autorunTestConfig) {
    let result = getLastAutorunTestResult();
    let fnName = autorunTestConfig.functions[0].name;
    if (result) {
      pinStatus.text = "Autotest (" + (result.success ? "ok" : "FAIL") + "): " + fnName;
      if (result.success) {
        pinStatus.color = "";
      } else {
        pinStatus.color = new vscode11.ThemeColor("errorForeground");
      }
    } else {
      pinStatus.text = "Autotest: " + fnName;
      pinStatus.color = "";
    }
    pinStatus.command = "go.autotest.show";
    pinStatus.show();
  } else {
    pinStatus.hide();
  }
}
function maybeAutorunTestsOnChange() {
  if (autorunTestConfig) {
    return runPinnedTest();
  }
  cleanUpOldAutotestFileOutput();
  autotestDisplay.clear();
  return Promise.resolve();
}
function log(msg) {
  console.log(new Date().toLocaleTimeString() + " " + msg);
}
function runPinnedTest() {
  if (!autorunTestConfig) {
    return Promise.resolve();
  }
  let fnName = autorunTestConfig.functions[0].name;
  log("Running pinned test " + fnName);
  return goTest(autorunTestConfig).then((result) => {
    log("[done] running pinned test " + fnName);
    lastAutorunTestResult = result;
    pinDisplay.clear();
    for (let fn of autorunTestConfig.functions) {
      if (!(fn.name in result.tests)) {
        pinDisplay.displayUnknown(fn);
      } else if (result.tests[fn.name]) {
        pinDisplay.displaySuccess(fn);
      } else {
        pinDisplay.displayFailure(fn);
      }
    }
    updatePinStatus();
  }).then(() => {
    rerenderCodeLenses();
    reanalyzeCoverage();
  }, (err) => {
    console.error(err);
  });
}
function showAutorunTest(args) {
  if (!autorunTestConfig) {
    return;
  }
  let success = args && args.success;
  sendTelemetryEvent("autotest-showPin", { success }, {});
  autorunTestConfig.output.show(true);
}
function clearPinnedTest() {
  if (!autorunTestConfig) {
    return;
  }
  let timeTaken = Date.now() - autorunTestStart;
  sendTelemetryEvent("autotest-clearPin", {}, { timeTaken });
  autorunTestStart = 0;
  autorunTestConfig.output.dispose();
  autorunTestConfig = null;
  lastAutorunTestResult = null;
  updatePinStatus();
  pinDisplay.clear();
  rerenderCodeLenses();
  clearCoverage();
  clearCoverProfilePath();
}
function currentAutorunTestConfig() {
  return autorunTestConfig;
}
function getLastAutorunTestResult() {
  return lastAutorunTestResult;
}
function getLastAutotestFileResult() {
  return lastAutotestFileResult;
}
function showAutotestFileOutput(args) {
  if (!autotestFileConfig) {
    return;
  }
  sendTelemetryEvent("autotestFileOutput-show", { success: args.success }, {});
  autotestFileConfig.output.show(true);
}
function isTestFileActive() {
  let editor = vscode11.window.activeTextEditor;
  if (!editor) {
    return false;
  }
  return editor.document.fileName.endsWith("_test.go");
}
function maybeAutotestCurrentFile() {
  let oldFileName = autotestFileConfig && autotestFileConfig.fileName;
  cleanUpOldAutotestFileOutput();
  if (autorunTestConfig) {
    autotestDisplay.clear();
    return Promise.resolve();
  }
  if (!isTestFileActive()) {
    autotestDisplay.clear();
    return Promise.resolve();
  }
  let editor = vscode11.window.activeTextEditor;
  let goConfig = vscode11.workspace.getConfiguration("go", editor ? editor.document.uri : null);
  let output = vscode11.window.createOutputChannel("Go Test " + editor.document.fileName);
  let fileName = editor.document.fileName;
  let dir = path7.dirname(fileName);
  if (oldFileName !== fileName) {
    autotestDisplay.clear();
  }
  return getTestFunctions(editor.document, null).then((testFunctions) => {
    const testConfig = {
      goConfig,
      dir,
      fileName,
      flags: getTestFlags(goConfig, []),
      functions: testFunctions,
      background: true,
      output
    };
    autotestFileConfig = testConfig;
    log("Autotesting file " + fileName);
    return Promise.all([goTest(testConfig), testFunctions]);
  }).then((resultArray) => {
    log("[done] autotesting file " + fileName);
    autotestDisplay.clear();
    let [result, testFunctions] = resultArray;
    lastAutotestFileResult = result;
    if (result.buildFailed) {
      return;
    }
    for (let fn of testFunctions) {
      if (result.tests[fn.name] === false) {
        autotestDisplay.displayFailure(fn);
      }
    }
  }).then(() => {
    rerenderCodeLenses();
  }, (err) => {
    console.error(err);
    return Promise.resolve(false);
  });
}
function cleanUpOldAutotestFileOutput() {
  if (autotestFileConfig && autotestFileConfig.output) {
    autotestFileConfig.output.dispose();
    autotestFileConfig = null;
    lastAutotestFileResult = null;
  }
}
function updatePinnedTestLocation(u) {
  if (autorunTestConfig && autorunTestConfig.fileName === u.path) {
    vscode11.workspace.openTextDocument(autorunTestConfig.fileName).then((document) => {
      return getTestFunctions(document, null);
    }).then((testFunctions) => {
      for (let func of testFunctions) {
        if (func.name === autorunTestConfig.functions[0].name) {
          autorunTestConfig.functions[0].location = func.location;
          return;
        }
      }
      clearPinnedTest();
    });
    rerenderCodeLenses();
  }
}

// src/goRunTestCodelens.ts
"use strict";
var vscode12 = require("vscode");
var path8 = require("path");
var GoRunTestCodeLensProvider = class extends GoBaseCodeLensProvider {
  provideCodeLenses(document, token) {
    if (!this.enabled) {
      return [];
    }
    let config = vscode12.workspace.getConfiguration("go", document.uri);
    let codeLensConfig = config.get("enableCodeLens");
    let codelensEnabled = codeLensConfig ? codeLensConfig["runtest"] : false;
    if (!codelensEnabled || !document.fileName.endsWith("_test.go")) {
      return [];
    }
    return this.getCodeLensForFunctions(config, document, token);
  }
  getCodeLensForFunctions(vsConfig, document, token) {
    const codelens = [];
    const testPromise = getTestFunctions(document, token).then((testFunctions) => {
      let pinTestResult = getLastAutorunTestResult();
      let fileTestResult = getLastAutotestFileResult();
      testFunctions.forEach((func) => {
        let autorun = currentAutorunTestConfig();
        if (autorun && autorun.functions && autorun.functions.findIndex((f) => f.name === func.name) !== -1) {
          codelens.push(new import_vscode.CodeLens(func.location.range, {
            title: "remove pin",
            command: "go.autotest.clear"
          }));
          if (pinTestResult && func.name in pinTestResult.tests) {
            let success = pinTestResult.tests[func.name];
            let title = success ? "output (ok)" : "output (FAIL)";
            codelens.push(new import_vscode.CodeLens(func.location.range, {
              title,
              command: "go.autotest.show",
              arguments: [{ success }]
            }));
          }
        } else {
          codelens.push(new import_vscode.CodeLens(func.location.range, {
            title: "pin test",
            command: "go.autotest.pin",
            arguments: [{ symbol: func }]
          }));
          if (fileTestResult && func.name in fileTestResult.tests) {
            let success = fileTestResult.tests[func.name];
            let title = success ? "output (ok)" : "output (FAIL)";
            codelens.push(new import_vscode.CodeLens(func.location.range, {
              title,
              command: "go.autotest.showFile",
              arguments: [{ success }]
            }));
          }
        }
      });
    });
    return testPromise.then(() => codelens);
  }
};

// src/goMain.ts
"use strict";
var vscode13 = require("vscode");
var path9 = require("path");
var _ = require_lodash();
var DEBOUNCE_WAIT_TIME_MS = 200;
function activate(ctx) {
  initGoCover(ctx);
  initDiagnosticCollection(ctx);
  let testCodeLensProvider = new GoRunTestCodeLensProvider();
  ctx.subscriptions.push(vscode13.languages.registerCodeLensProvider(GO_MODE, testCodeLensProvider));
  setDefaultCodeLens(testCodeLensProvider);
  ctx.subscriptions.push(vscode13.workspace.onDidChangeConfiguration(() => {
    let updatedGoConfig = vscode13.workspace.getConfiguration("go", vscode13.window.activeTextEditor ? vscode13.window.activeTextEditor.document.uri : null);
    updateGoPathGoRootFromConfig();
    if (getToolsGopath() !== getToolsGopath(false)) {
      clearCacheForTools();
    }
    if (updatedGoConfig["enableCodeLens"]) {
      testCodeLensProvider.setEnabled(updatedGoConfig["enableCodeLens"]["autoruntest"]);
    }
  }));
  vscode13.languages.setLanguageConfiguration(GO_MODE.language, {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
  });
  let watcher = vscode13.workspace.createFileSystemWatcher(path9.join(vscode13.workspace.rootPath, "**", "*.go"));
  let onChange = _.debounce(maybeAutorunTestsOnChange, DEBOUNCE_WAIT_TIME_MS);
  watcher.onDidChange(onChange);
  watcher.onDidChange(_.debounce(updatePinnedTestLocation, DEBOUNCE_WAIT_TIME_MS));
  watcher.onDidCreate(onChange);
  watcher.onDidDelete(onChange);
  ctx.subscriptions.push(watcher);
  ctx.subscriptions.push(vscode13.commands.registerCommand("go.autotest.pin", (args) => {
    let goConfig = vscode13.workspace.getConfiguration("go", vscode13.window.activeTextEditor ? vscode13.window.activeTextEditor.document.uri : null);
    pinTestAtCursor(goConfig, false, args);
  }));
  ctx.subscriptions.push(vscode13.commands.registerCommand("go.autotest.clear", clearPinnedTest));
  ctx.subscriptions.push(vscode13.commands.registerCommand("go.autotest.show", showAutorunTest));
  ctx.subscriptions.push(vscode13.commands.registerCommand("go.autotest.showFile", showAutotestFileOutput));
  ctx.subscriptions.push(vscode13.window.onDidChangeActiveTextEditor(maybeAutotestCurrentFile));
  maybeAutotestCurrentFile();
  vscode13.workspace.onDidChangeTextDocument(removeCodeCoverage, null, ctx.subscriptions);
  vscode13.window.onDidChangeActiveTextEditor(getCodeCoverage, null, ctx.subscriptions);
}
function deactivate() {
  return disposeTelemetryReporter();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
