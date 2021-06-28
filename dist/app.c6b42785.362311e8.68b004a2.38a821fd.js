// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({30:[function(require,module,exports) {
var define;
var global = arguments[3];
var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
}({ 22: [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
    };

    // modules are defined as an array
    // [ module function, map of requires ]
    //
    // map of requires is short require name -> numeric require
    //
    // anything defined in a previous bundle is accessed via the
    // orig method which is the require for previous bundles

    // eslint-disable-next-line no-global-assign
    parcelRequire = function (modules, cache, entry, globalName) {
      // Save the require from previous bundle to this closure if any
      var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
      var nodeRequire = typeof require === 'function' && require;

      function newRequire(name, jumped) {
        if (!cache[name]) {
          if (!modules[name]) {
            // if we cannot find the module within our internal map or
            // cache jump to the current global require ie. the last bundle
            // that was added to the page.
            var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
            if (!jumped && currentRequire) {
              return currentRequire(name, true);
            }

            // If there are other bundles on this page the require from the
            // previous one is saved to 'previousRequire'. Repeat this as
            // many times as there are bundles until the module is found or
            // we exhaust the require chain.
            if (previousRequire) {
              return previousRequire(name, true);
            }

            // Try the node require function if it exists.
            if (nodeRequire && typeof name === 'string') {
              return nodeRequire(name);
            }

            var err = new Error('Cannot find module \'' + name + '\'');
            err.code = 'MODULE_NOT_FOUND';
            throw err;
          }

          localRequire.resolve = resolve;

          var module = cache[name] = new newRequire.Module(name);

          modules[name][0].call(module.exports, localRequire, module, module.exports, this);
        }

        return cache[name].exports;

        function localRequire(x) {
          return newRequire(localRequire.resolve(x));
        }

        function resolve(x) {
          return modules[name][1][x] || x;
        }
      }

      function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
      }

      newRequire.isParcelRequire = true;
      newRequire.Module = Module;
      newRequire.modules = modules;
      newRequire.cache = cache;
      newRequire.parent = previousRequire;
      newRequire.register = function (id, exports) {
        modules[id] = [function (require, module) {
          module.exports = exports;
        }, {}];
      };

      for (var i = 0; i < entry.length; i++) {
        newRequire(entry[i]);
      }

      if (entry.length) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(entry[entry.length - 1]);

        // CommonJS
        if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === "object" && typeof module !== "undefined") {
          module.exports = mainExports;

          // RequireJS
        } else if (typeof define === "function" && define.amd) {
          define(function () {
            return mainExports;
          });

          // <script>
        } else if (globalName) {
          this[globalName] = mainExports;
        }
      }

      // Override the current require with this new one
      return newRequire;
    }({ 6: [function (require, module, exports) {
        var define;
        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
        };

        parcelRequire = function (e, r, n, t) {
          var i = "function" == typeof parcelRequire && parcelRequire,
              o = "function" == typeof require && require;function u(n, t) {
            if (!r[n]) {
              if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;if (!t && f) return f(n, !0);if (i) return i(n, !0);if (o && "string" == typeof n) return o(n);var c = new Error("Cannot find module '" + n + "'");throw c.code = "MODULE_NOT_FOUND", c;
              }p.resolve = function (r) {
                return e[n][1][r] || r;
              };var l = r[n] = new u.Module(n);e[n][0].call(l.exports, p, l, l.exports, this);
            }return r[n].exports;function p(e) {
              return u(p.resolve(e));
            }
          }u.isParcelRequire = !0, u.Module = function (e) {
            this.id = e, this.bundle = u, this.exports = {};
          }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
            e[r] = [function (e, r) {
              r.exports = n;
            }, {}];
          };for (var f = 0; f < n.length; f++) {
            u(n[f]);
          }if (n.length) {
            var c = u(n[n.length - 1]);"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
              return c;
            }) : t && (this[t] = c);
          }return u;
        }({ 14: [function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", { value: !0 });var t = function () {
              return function (t, r) {
                if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, r) {
                  var e = [],
                      n = !0,
                      o = !1,
                      a = void 0;try {
                    for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (e.push(i.value), !r || e.length !== r); n = !0) {}
                  } catch (t) {
                    o = !0, a = t;
                  } finally {
                    try {
                      !n && u.return && u.return();
                    } finally {
                      if (o) throw a;
                    }
                  }return e;
                }(t, r);throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }();function r(t, r) {
              var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  n = new Date(t);return r ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n.getDay()] + ", " + e[n.getMonth()] + " " + n.getDate() : e[n.getMonth()] + " " + n.getDate();
            }function e(t, r, e, n) {
              if (!t) return !1;var o = n / e;return Math.abs(r - t.x) < o / 2;
            }function n(r, e, n) {
              var o = n.color;r.beginPath(), r.lineWidth = 4, r.strokeStyle = o;var a = !0,
                  i = !1,
                  u = void 0;try {
                for (var l, f = e[Symbol.iterator](); !(a = (l = f.next()).done); a = !0) {
                  var c = l.value,
                      s = t(c, 2),
                      v = s[0],
                      y = s[1];r.lineTo(v, y);
                }
              } catch (t) {
                i = !0, u = t;
              } finally {
                try {
                  !a && f.return && f.return();
                } finally {
                  if (i) throw u;
                }
              }r.stroke(), r.closePath();
            }function o(r, e, n) {
              var o = t(e, 2),
                  a = o[0],
                  i = o[1];r.beginPath(), r.strokeStyle = n, r.fillStyle = "#fff", r.arc(a, i, 8, 0, 2 * Math.PI), r.fill(), r.stroke(), r.closePath();
            }function a(t) {
              var r = t.columns,
                  e = t.types,
                  n = void 0,
                  o = void 0;return r.forEach(function (t) {
                if ("line" === e[t[0]]) {
                  "number" != typeof n && (n = t[1]), "number" != typeof o && (o = t[1]), n > t[1] && (n = t[1]), o < t[1] && (o = t[1]);for (var r = 2; r < t.length; r++) {
                    n > t[r] && (n = t[r]), o < t[r] && (o = t[r]);
                  }
                }
              }), [n, o];
            }function i(t) {
              var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};Object.assign(t.style, r);
            }function u(t, r, e, n) {
              return function (o) {
                return o.map(function (o, a) {
                  return [Math.floor(t * (a - 1)), Math.floor(e - n - o * r)];
                });
              };
            }exports.toDate = r, exports.isOver = e, exports.line = n, exports.circle = o, exports.boundaries = a, exports.css = i, exports.toCoords = u;
          }, {}], 15: [function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", { value: !0 }), exports.tooltip = i;var t = require("./utils"),
                e = function e(t) {
              return '\n    <div class="tooltip-title">' + t.title + '</div>\n    <ul class="tooltip-list">\n    ' + t.items.map(function (t) {
                return '<li class="tooltip-list-item">\n                <div class="value" style="color: ' + t.color + '">' + t.value + '</div>\n                <div class="name" style="color: ' + t.color + '">' + t.name + "</div>\n                </li>";
              }).join("\n") + "\n    </ul>\n";
            };function i(i) {
              return { show: function show(n, l) {
                  var o = n.left,
                      s = n.top,
                      r = i.getBoundingClientRect(),
                      c = r.height,
                      u = r.width;i.innerHTML = "", (0, t.css)(i, { display: "block", top: s - c + "px", left: o + u / 2 + "px" }), i.insertAdjacentHTML("afterbegin", e(l));
                }, hide: function hide() {
                  (0, t.css)(i, { display: "none" });
                } };
            }
          }, { "./utils": 14 }], 16: [function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", { value: !0 });var r = function () {
              return function (r, t) {
                if (Array.isArray(r)) return r;if (Symbol.iterator in Object(r)) return function (r, t) {
                  var e = [],
                      n = !0,
                      o = !1,
                      i = void 0;try {
                    for (var a, u = r[Symbol.iterator](); !(n = (a = u.next()).done) && (e.push(a.value), !t || e.length !== t); n = !0) {}
                  } catch (r) {
                    o = !0, i = r;
                  } finally {
                    try {
                      !n && u.return && u.return();
                    } finally {
                      if (o) throw i;
                    }
                  }return e;
                }(r, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }();exports.sliderChart = o;var t = require("./utils"),
                e = 40,
                n = 2 * e;function o(o, i, a) {
              var u = a / 2,
                  l = o.querySelector("canvas"),
                  c = l.getContext("2d");l.width = a, l.height = n, (0, t.css)(l, { width: u + "px", height: e + "px" });var s = (0, t.boundaries)(i),
                  f = r(s, 2),
                  h = f[0],
                  d = f[1],
                  v = n / (d - h),
                  y = a / (i.columns[0].length - 2),
                  p = i.columns.filter(function (r) {
                return "line" === i.types[r[0]];
              });p.map((0, t.toCoords)(y, v, n, -5)).forEach(function (r, e) {
                var n = i.colors[p[e][0]];(0, t.line)(c, r, { color: n });
              });
            }
          }, { "./utils": 14 }], 7: [function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", { value: !0 });var e = function () {
              return function (e, t) {
                if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
                  var r = [],
                      n = !0,
                      o = !1,
                      i = void 0;try {
                    for (var l, a = e[Symbol.iterator](); !(n = (l = a.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0) {}
                  } catch (e) {
                    o = !0, i = e;
                  } finally {
                    try {
                      !n && a.return && a.return();
                    } finally {
                      if (o) throw i;
                    }
                  }return r;
                }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
              };
            }();exports.chart = v;var t = require("./utils"),
                r = require("./tooltip"),
                n = require("./slider"),
                o = 600,
                i = 200,
                l = 40,
                a = 2 * o,
                u = 2 * i,
                s = u - 2 * l,
                c = a,
                f = 5;function v(v, m) {
              var d = v.querySelector('[data-el="main"]'),
                  h = (0, r.tooltip)(v.querySelector('[data-el="tooltip"]')),
                  y = ((0, n.sliderChart)(v.querySelector('[data-el="slider"]'), m, a), d.getContext("2d")),
                  p = void 0;d.width = a, d.height = u, (0, t.css)(d, { width: o + "px", height: i + "px" }), d.addEventListener("mousemove", b), d.addEventListener("mouseleave", x);var g = new Proxy({}, { set: function set() {
                  var e = Reflect.set.apply(Reflect, arguments);return p = requestAnimationFrame(S), e;
                } });function b(e) {
                var t = e.clientX,
                    r = e.clientY,
                    n = d.getBoundingClientRect(),
                    o = n.left,
                    i = n.top;g.mouse = { x: 2 * (t - o), tooltip: { left: t - o, top: r - i } };
              }function x() {
                g.mouse = null, h.hide();
              }function S() {
                y.clearRect(0, 0, a, u);var r = (0, t.boundaries)(m),
                    n = e(r, 2),
                    o = n[0],
                    i = n[1],
                    v = s / (i - o),
                    d = c / (m.columns[0].length - 2),
                    p = m.columns.filter(function (e) {
                  return "line" === m.types[e[0]];
                }),
                    b = m.columns.filter(function (e) {
                  return "line" !== m.types[e[0]];
                })[0];!function (e, t) {
                  var r = s / f,
                      n = (t - e) / f;y.beginPath(), y.lineWidth = 1, y.strokeStyle = "#bbb", y.font = "normal 20px Helvetica, sanse-serif", y.fillStyle = "#96a2aa";for (var o = 1; o <= f; o++) {
                    var i = r * o,
                        u = Math.round(t - n * o);y.fillText(u.toString(), 5, i + l - 10), y.moveTo(0, i + l), y.lineTo(a, i + l);
                  }y.stroke(), y.closePath();
                }(o, i), function (e, r, n) {
                  var o = Math.round((e.length - 1) / 6);y.beginPath();for (var i = function i(_i) {
                    var s = _i * n;if ((_i - 1) % o == 0) {
                      var c = (0, t.toDate)(e[_i]);y.fillText(c, s, u - 10);
                    }(0, t.isOver)(g.mouse, s, e.length, a) && (y.save(), y.moveTo(s, l / 2), y.lineTo(s, u - l), y.restore(), h.show(g.mouse.tooltip, { title: (0, t.toDate)(e[_i]), items: r.map(function (e) {
                        return { color: m.colors[e[0]], name: m.names[e[0]], value: e[_i + 1] };
                      }) }));
                  }, s = 1; s < e.length; s++) {
                    i(s);
                  }y.stroke(), y.closePath();
                }(b, p, d), p.map((0, t.toCoords)(d, v, u, l)).forEach(function (r, n) {
                  var o = m.colors[p[n][0]];(0, t.line)(y, r, { color: o });var i = !0,
                      l = !1,
                      u = void 0;try {
                    for (var s, c = r[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                      var f = s.value,
                          v = e(f, 2),
                          d = v[0],
                          h = v[1];if ((0, t.isOver)(g.mouse, d, r.length, a)) {
                        (0, t.circle)(y, [d, h], o);break;
                      }
                    }
                  } catch (e) {
                    l = !0, u = e;
                  } finally {
                    try {
                      !i && c.return && c.return();
                    } finally {
                      if (l) throw u;
                    }
                  }
                });
              }return { init: function init() {
                  S();
                }, destroy: function destroy() {
                  cancelAnimationFrame(p), d.removeEventListener("mousemove", b), d.removeEventListener("mouseleave", x);
                } };
            }
          }, { "./utils": 14, "./tooltip": 15, "./slider": 16 }], 6: [function (require, module, exports) {}, {}], 8: [function (require, module, exports) {
            "use strict";

            function e() {
              return { columns: [["x", 15424128e5, 15424992e5, 15425856e5, 1542672e6, 15427584e5, 15428448e5, 15429312e5, 15430176e5, 1543104e6, 15431904e5, 15432768e5, 15433632e5, 15434496e5, 1543536e6, 15436224e5, 15437088e5, 15437952e5, 15438816e5, 1543968e6, 15440544e5, 15441408e5, 15442272e5, 15443136e5, 15444e8, 15444864e5, 15445728e5, 15446592e5, 15447456e5, 1544832e6, 15449184e5, 15450048e5, 15450912e5, 15451776e5, 1545264e6, 15453504e5, 15454368e5, 15455232e5, 15456096e5, 1545696e6, 15457824e5, 15458688e5, 15459552e5, 15460416e5, 1546128e6, 15462144e5, 15463008e5, 15463872e5, 15464736e5, 154656e7, 15466464e5, 15467328e5, 15468192e5, 15469056e5, 1546992e6, 15470784e5, 15471648e5, 15472512e5, 15473376e5, 1547424e6, 15475104e5, 15475968e5, 15476832e5, 15477696e5, 1547856e6, 15479424e5, 15480288e5, 15481152e5, 15482016e5, 1548288e6, 15483744e5, 15484608e5, 15485472e5, 15486336e5, 154872e7, 15488064e5, 15488928e5, 15489792e5, 15490656e5, 1549152e6, 15492384e5, 15493248e5, 15494112e5, 15494976e5, 1549584e6, 15496704e5, 15497568e5, 15498432e5, 15499296e5, 1550016e6, 15501024e5, 15501888e5, 15502752e5, 15503616e5, 1550448e6, 15505344e5, 15506208e5, 15507072e5, 15507936e5, 155088e7, 15509664e5, 15510528e5, 15511392e5, 15512256e5, 1551312e6, 15513984e5, 15514848e5, 15515712e5, 15516576e5, 1551744e6, 15518304e5, 15519168e5, 15520032e5], ["y0", 37, 20, 32, 39, 32, 35, 19, 65, 36, 62, 113, 69, 120, 60, 51, 49, 71, 122, 149, 69, 57, 21, 33, 55, 92, 62, 47, 50, 56, 116, 63, 60, 55, 65, 76, 33, 45, 64, 54, 81, 180, 123, 106, 37, 60, 70, 46, 68, 46, 51, 33, 57, 75, 70, 95, 70, 50, 68, 63, 66, 53, 38, 52, 109, 121, 53, 36, 71, 96, 55, 58, 29, 31, 55, 52, 44, 126, 191, 73, 87, 255, 278, 219, 170, 129, 125, 126, 84, 65, 53, 154, 57, 71, 64, 75, 72, 39, 47, 52, 73, 89, 156, 86, 105, 88, 45, 33, 56, 142, 124, 114, 64], ["y1", 22, 12, 30, 40, 33, 23, 18, 41, 45, 69, 57, 61, 70, 47, 31, 34, 40, 55, 27, 57, 48, 32, 40, 49, 54, 49, 34, 51, 51, 51, 66, 51, 94, 60, 64, 28, 44, 96, 49, 73, 30, 88, 63, 42, 56, 67, 52, 67, 35, 61, 40, 55, 63, 61, 105, 59, 51, 76, 63, 57, 47, 56, 51, 98, 103, 62, 54, 104, 48, 41, 41, 37, 30, 28, 26, 37, 65, 86, 70, 81, 54, 74, 70, 50, 74, 79, 85, 62, 36, 46, 68, 43, 66, 50, 28, 66, 39, 23, 63, 74, 83, 66, 40, 60, 29, 36, 27, 54, 89, 50, 73, 52]], types: { y0: "line", y1: "line", x: "x" }, names: { y0: "#0", y1: "#1" }, colors: { y0: "#3DC23F", y1: "#F34C44" } };
            }Object.defineProperty(exports, "__esModule", { value: !0 }), exports.getChartData = e;
          }, {}], 4: [function (require, module, exports) {
            "use strict";

            var t = require("./chart");require("./styles.scss");var e = require("./data"),
                r = (0, t.chart)(document.getElementById("chart"), (0, e.getChartData)());r.init();
          }, { "./chart": 7, "./styles.scss": 6, "./data": 8 }] }, {}, [4], null);
        //# sourceMappingURL=/app.c6b42785.map
      }, {}], 14: [function (require, module, exports) {
        var global = arguments[3];
        var OVERLAY_ID = '__parcel__error__overlay__';

        var OldModule = module.bundle.Module;

        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function accept(fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function dispose(fn) {
              this._disposeCallbacks.push(fn);
            }
          };

          module.bundle.hotData = null;
        }

        module.bundle.Module = Module;

        var parent = module.bundle.parent;
        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
          var hostname = '' || location.hostname;
          var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
          var ws = new WebSocket(protocol + '://' + hostname + ':' + '55364' + '/');
          ws.onmessage = function (event) {
            var data = JSON.parse(event.data);

            if (data.type === 'update') {
              console.clear();

              data.assets.forEach(function (asset) {
                hmrApply(global.parcelRequire, asset);
              });

              data.assets.forEach(function (asset) {
                if (!asset.isNew) {
                  hmrAccept(global.parcelRequire, asset.id);
                }
              });
            }

            if (data.type === 'reload') {
              ws.close();
              ws.onclose = function () {
                location.reload();
              };
            }

            if (data.type === 'error-resolved') {
              console.log('[parcel] ✨ Error resolved');

              removeErrorOverlay();
            }

            if (data.type === 'error') {
              console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

              removeErrorOverlay();

              var overlay = createErrorOverlay(data);
              document.body.appendChild(overlay);
            }
          };
        }

        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);
          if (overlay) {
            overlay.remove();
          }
        }

        function createErrorOverlay(data) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID;

          // html encode message and stack trace
          var message = document.createElement('div');
          var stackTrace = document.createElement('pre');
          message.innerText = data.error.message;
          stackTrace.innerText = data.error.stack;

          overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

          return overlay;
        }

        function getParents(bundle, id) {
          var modules = bundle.modules;
          if (!modules) {
            return [];
          }

          var parents = [];
          var k, d, dep;

          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d];
              if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                parents.push(+k);
              }
            }
          }

          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
          }

          return parents;
        }

        function hmrApply(bundle, asset) {
          var modules = bundle.modules;
          if (!modules) {
            return;
          }

          if (modules[asset.id] || !bundle.parent) {
            var fn = new Function('require', 'module', 'exports', asset.generated.js);
            asset.isNew = !modules[asset.id];
            modules[asset.id] = [fn, asset.deps];
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
          }
        }

        function hmrAccept(bundle, id) {
          var modules = bundle.modules;
          if (!modules) {
            return;
          }

          if (!modules[id] && bundle.parent) {
            return hmrAccept(bundle.parent, id);
          }

          var cached = bundle.cache[id];
          bundle.hotData = {};
          if (cached) {
            cached.hot.data = bundle.hotData;
          }

          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          }

          delete bundle.cache[id];
          bundle(id);

          cached = bundle.cache[id];
          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function (cb) {
              cb();
            });
            return true;
          }

          return getParents(global.parcelRequire, id).some(function (id) {
            return hmrAccept(global.parcelRequire, id);
          });
        }
      }, {}] }, {}, [14, 6], null);
    //# sourceMappingURL=/app.c6b42785.362311e8.map
  }, {}], 14: [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';

    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };

      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;

    var parent = module.bundle.parent;
    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = '' || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + '55364' + '/');
      ws.onmessage = function (event) {
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          console.clear();

          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });

          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              hmrAccept(global.parcelRequire, asset.id);
            }
          });
        }

        if (data.type === 'reload') {
          ws.close();
          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');

          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

          removeErrorOverlay();

          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);
      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID;

      // html encode message and stack trace
      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;

      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;
      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];
          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(+k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;
      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAccept(bundle, id) {
      var modules = bundle.modules;
      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAccept(bundle.parent, id);
      }

      var cached = bundle.cache[id];
      bundle.hotData = {};
      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);

      cached = bundle.cache[id];
      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAccept(global.parcelRequire, id);
      });
    }
  }, {}] }, {}, [14, 22], null);
//# sourceMappingURL=/app.c6b42785.362311e8.68b004a2.map
},{}],14:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55364' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[14,30], null)
//# sourceMappingURL=/app.c6b42785.362311e8.68b004a2.38a821fd.map