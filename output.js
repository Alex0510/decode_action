//Thu Jul 11 2024 10:25:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function r(n) {
    return "@babel/helpers - typeof", r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (w) {
      return typeof w;
    } : function (w) {
      return w && "function" == typeof Symbol && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, r(n);
  }
  function n() {
    n = function () {
      return e;
    };
    var c,
      e = {},
      o = Object.prototype,
      i = o.hasOwnProperty,
      u = Object.defineProperty || function (w, r, n) {
        w[r] = n.value;
      },
      C = "function" == typeof Symbol ? Symbol : {},
      D = C.iterator || "@@iterator",
      f = C.asyncIterator || "@@asyncIterator",
      s = C.toStringTag || "@@toStringTag";
    function K(w, r, n) {
      return Object.defineProperty(w, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), w[r];
    }
    try {
      K({}, "");
    } catch (w) {
      K = function (w, r, n) {
        return w[r] = n;
      };
    }
    function p(w, r, n, c) {
      var e = r && r.prototype instanceof Q ? r : Q,
        o = Object.create(e.prototype),
        i = new L(c || []);
      return u(o, "_invoke", {
        value: P(w, n, i)
      }), o;
    }
    function a(w, r, n) {
      try {
        return {
          type: "normal",
          arg: w.call(r, n)
        };
      } catch (w) {
        return {
          type: "throw",
          arg: w
        };
      }
    }
    e.wrap = p;
    var O = "suspendedStart",
      h = "suspendedYield",
      M = "executing",
      l = "completed",
      g = {};
    function Q() {}
    function b() {}
    function v() {}
    var d = {};
    K(d, D, function () {
      return this;
    });
    var q = Object.getPrototypeOf,
      A = q && q(q(j([])));
    A && A !== o && i.call(A, D) && (d = A);
    var X = v.prototype = Q.prototype = Object.create(d);
    function U(r) {
      ["next", "throw", "return"].forEach(function (w) {
        K(r, w, function (r) {
          return this._invoke(w, r);
        });
      });
    }
    function k(n, c) {
      var e;
      function C(w, x, e, u) {
        var D = a(n[w], n, x);
        if ("throw" !== D.type) {
          var f = D.arg,
            s = f.value;
          return s && "object" == r(s) && i.call(s, "__await") ? c.resolve(s.__await).then(function (w) {
            C("next", w, e, u);
          }, function (w) {
            C("throw", w, e, u);
          }) : c.resolve(s).then(function (w) {
            f.value = w;
            e(f);
          }, function (w) {
            return C("throw", w, e, u);
          });
        }
        u(D.arg);
      }
      u(this, "_invoke", {
        value: function (w, r) {
          function o() {
            var x = function (w, r, x, c, e) {
              return w(r, x, c, e);
            };
            return new c(function (n, t) {
              x(C, w, r, n, t);
            });
          }
          return e = e ? e.then(o, o) : o();
        }
      });
    }
    function P(w, r, n) {
      var e = O;
      return function (o, i) {
        if (e === M) throw Error("Generator is already running");
        if (e === l) {
          if ("throw" === o) throw i;
          return {
            value: c,
            done: !0
          };
        }
        for (n.method = o, n.arg = i;;) {
          var u = n.delegate;
          if (u) {
            var C = Z(u, n);
            if (C) {
              if (C === g) continue;
              return C;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (e === O) throw e = l, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          e = M;
          var D = a(w, r, n);
          if ("normal" === D.type) {
            if (e = n.done ? l : h, D.arg === g) continue;
            return {
              value: D.arg,
              done: n.done
            };
          }
          "throw" === D.type && (e = l, n.method = "throw", n.arg = D.arg);
        }
      };
    }
    function Z(w, r) {
      for (var n = "0|3|5|4|1|2".split("|"), e = 0;;) {
        switch (n[e++]) {
          case "0":
            var o = r.method,
              i = w.iterator[o];
            continue;
          case "1":
            var u = C.arg;
            continue;
          case "2":
            return u ? u.done ? (r[w.resultName] = u.value, r.next = w.nextLoc, "return" !== r.method && (r.method = "next", r.arg = c), r.delegate = null, g) : u : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
          case "3":
            if (i === c) return r.delegate = null, "throw" === o && w.iterator.return && (r.method = "return", r.arg = c, Z(w, r), "throw" === r.method) || "return" !== o && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + o + "' method")), g;
            continue;
          case "4":
            if ("throw" === C.type) return r.method = "throw", r.arg = C.arg, r.delegate = null, g;
            continue;
          case "5":
            var C = a(i, w.iterator, r.arg);
            continue;
        }
        break;
      }
    }
    function W(r) {
      var n = {
        tryLoc: r[0]
      };
      1 in r && (n.catchLoc = r[1]);
      2 in r && (n.finallyLoc = r[2], n.afterLoc = r[3]);
      this.tryEntries.push(n);
    }
    function T(w) {
      var r = w.completion || {};
      r.type = "normal";
      delete r.arg;
      w.completion = r;
    }
    function L(r) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      r.forEach(W, this);
      this.reset(!0);
    }
    function j(w) {
      var n = function (w, r) {
        return w < r;
      };
      if (w || "" === w) {
        var e = w[D];
        if (e) return e.call(w);
        if ("function" == typeof w.next) return w;
        if (!isNaN(w.length)) {
          var o = -1,
            u = function r() {
              for (; n(++o, w.length);) if (i.call(w, o)) return r.value = w[o], r.done = !1, r;
              return r.value = c, r.done = !0, r;
            };
          return u.next = u;
        }
      }
      throw new TypeError(r(w) + " is not iterable");
    }
    return b.prototype = v, u(X, "constructor", {
      value: v,
      configurable: !0
    }), u(v, "constructor", {
      value: b,
      configurable: !0
    }), b.displayName = K(v, s, "GeneratorFunction"), e.isGeneratorFunction = function (w) {
      var r = "function" == typeof w && w.constructor;
      return !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name));
    }, e.mark = function (r) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(r, v) : (r.__proto__ = v, K(r, s, "GeneratorFunction")), r.prototype = Object.create(X), r;
    }, e.awrap = function (w) {
      return {
        __await: w
      };
    }, U(k.prototype), K(k.prototype, f, function () {
      return this;
    }), e.AsyncIterator = k, e.async = function (r, n, x, c, o) {
      void 0 === o && (o = Promise);
      var i = new k(p(r, n, x, c), o);
      return e.isGeneratorFunction(n) ? i : i.next().then(function (w) {
        return w.done ? w.value : i.next();
      });
    }, U(X), K(X, s, "Generator"), K(X, D, function () {
      return this;
    }), K(X, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (w) {
      var n = Object(w),
        c = [];
      for (var e in n) c.push(e);
      return c.reverse(), function w() {
        for (; c.length;) {
          var x = c.pop();
          if (x in n) return w.value = x, w.done = !1, w;
        }
        return w.done = !0, w;
      };
    }, e.values = j, L.prototype = {
      constructor: L,
      reset: function (w) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(T), !w) for (var r in this) "t" === r.charAt(0) && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = c);
      },
      stop: function () {
        this.done = !0;
        var w = this.tryEntries[0].completion;
        if ("throw" === w.type) throw w.arg;
        return this.rval;
      },
      dispatchException: function (r) {
        if (this.done) throw r;
        var x = this;
        function e(w, e) {
          return C.type = "throw", C.arg = r, x.next = w, e && (x.method = "next", x.arg = c), !!e;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var u = this.tryEntries[o],
            C = u.completion;
          if ("root" === u.tryLoc) return e("end");
          if (u.tryLoc <= this.prev) {
            var D = i.call(u, "catchLoc"),
              f = i.call(u, "finallyLoc");
            if (D && f) {
              if (this.prev < u.catchLoc) return e(u.catchLoc, !0);
              if (this.prev < u.finallyLoc) return e(u.finallyLoc);
            } else if (D) {
              if (this.prev < u.catchLoc) return e(u.catchLoc, !0);
            } else {
              if (!f) throw Error("try statement without catch or finally");
              if (this.prev < u.finallyLoc) return e(u.finallyLoc);
            }
          }
        }
      },
      abrupt: function (r, n) {
        for (var x = this.tryEntries.length - 1; x >= 0; --x) {
          var c = this.tryEntries[x];
          if (c.tryLoc <= this.prev && i.call(c, "finallyLoc") && this.prev < c.finallyLoc) {
            var e = c;
            break;
          }
        }
        e && ("break" === r || "continue" === r) && e.tryLoc <= n && n <= e.finallyLoc && (e = null);
        var o = e ? e.completion : {};
        return o.type = r, o.arg = n, e ? (this.method = "next", this.next = e.finallyLoc, g) : this.complete(o);
      },
      complete: function (w, r) {
        if ("throw" === w.type) throw w.arg;
        return "break" === w.type || "continue" === w.type ? this.next = w.arg : "return" === w.type ? (this.rval = this.arg = w.arg, this.method = "return", this.next = "end") : "normal" === w.type && r && (this.next = r), g;
      },
      finish: function (r) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var x = this.tryEntries[n];
          if (x.finallyLoc === r) return this.complete(x.completion, x.afterLoc), T(x), g;
        }
      },
      catch: function (w) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var n = this.tryEntries[r];
          if (n.tryLoc === w) {
            var c = n.completion;
            if ("throw" === c.type) {
              var e = c.arg;
              T(n);
            }
            return e;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (r, n, x) {
        return this.delegate = {
          iterator: j(r),
          resultName: n,
          nextLoc: x
        }, "next" === this.method && (this.arg = c), g;
      }
    }, e;
  }
  function x(r, n, x, c, e, o, i) {
    try {
      var u = r[o](i),
        C = u.value;
    } catch (r) {
      return void x(r);
    }
    u.done ? n(C) : Promise.resolve(C).then(c, e);
  }
  function c(r) {
    return function () {
      var c = this,
        e = arguments;
      return new Promise(function (o, i) {
        var C = r.apply(c, e);
        function D(w) {
          x(C, o, i, D, f, "next", w);
        }
        function f(r) {
          x(C, o, i, D, f, "throw", r);
        }
        D(void 0);
      });
    };
  }
  var e = Env("酷我音乐"),
    o = "kuwo_".concat(e.time("yyyyMM"), "_notified"),
    i = e.toObj($response.body) || {};
  function u() {
    return C.apply(this, arguments);
  }
  function C() {
    return (C = c(n().mark(function w() {
      var x, c, i, u, C;
      return n().wrap(function (w) {
        for (;;) switch (w.prev = w.next) {
          case 0:
            return x = ["本脚本仅用于技术学习，禁止非法使用。", "不得将本脚本用于任何商业或违法用途，违者后果自负。", "在中国大陆地区，严禁传播本脚本。", "开发者不对脚本的滥用承担任何责任。", "违规使用导致的后果由使用者自行承担。", "如有违反相关法规，将立即删除本脚本。", "使用者若违反声明规定，将自动视为放弃使用权。", "本声明的最终解释权归开发者所有。"], c = "https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/notice.json", w.prev = 2, w.next = 5, e.http.get(c);
          case 5:
            i = w.sent;
            u = i.body;
            x = e.toObj(u);
            e.log("获取远程生命成功");
            w.next = 15;
            break;
          case 12:
            w.prev = 12;
            w.t0 = w.catch(2);
            e.log("获取远程生命失败, 使用本地声明");
          case 15:
            return e.setdata("true", o), C = e.time("yyyyMM", new Date(new Date().setMonth(new Date().getMonth() - 1))), e.setdata(null, "kuwo_".concat(C, "_notified")), w.abrupt("return", x.join("\n"));
          case 19:
          case "end":
            return w.stop();
        }
      }, w, null, [[2, 12]]);
    }))).apply(this, arguments);
  }
  c(n().mark(function r() {
    var x, c, C, D, f, s, K, p, a, O, h, M, l, g, Q;
    return n().wrap(function (w) {
      for (;;) switch (w.prev = w.next) {
        case 0:
          if (!(e.getdata(o) == "true")) {
            w.next = 4;
            break;
          }
          e.debug("本月已通知过，本次不再通知");
          w.next = 11;
          break;
        case 4:
          return w.t0 = e, w.t1 = e.name, w.next = 8, u();
        case 8:
          w.t2 = w.sent;
          w.t3 = {
            $open: "https://t.me/yqc_123/",
            $media: "https://p5.itc.cn/q_70/images03/20211108/8d0e0dc3c971431797b62371b0874c7a.png"
          };
          w.t0.msg.call(w.t0, w.t1, "脚本声明", w.t2, w.t3);
        case 11:
          if (!/mobi\.s\?f=kwxs/.test($request.url)) {
            w.next = 28;
            break;
          }
          if (c = e.getval("kuwo_free_current_id") || "", C = (x = i.data) === null || x === void 0 ? void 0 : x.rid, D = e.toStr(i), !(c !== C)) {
            w.next = 26;
            break;
          }
          return w.prev = 16, w.next = 19, e.http.get("https://mobi.kuwo.cn/mobi.s?f=web&source=kwplayer_ar_1.1.9_jiakong_118980_320.apk&type=convert_url_with_sign&rid=".concat(c, "&priority=bitrate&network=3G&mode=download&br=320kmp3"));
        case 19:
          f = w.sent;
          D = f.body;
          w.next = 26;
          break;
        case 23:
          w.prev = 23;
          w.t4 = w.catch(16);
          e.logErr("解锁失败~", w.t4);
        case 26:
          e.setval("", "kuwo_free_current_id");
          e.done({
            body: D
          });
        case 28:
          if ($request.url.indexOf("music.pay?newver=3") > -1) for (var r = "3|7|2|8|5|9|0|6|1|10|4".split("|"), n = 0;;) {
            switch (r[n++]) {
              case "0":
                h = i.songs[0].audio.length;
                continue;
              case "1":
                l = i.songs[0];
                continue;
              case "2":
                K = i.songs[0].audio[0].pid;
                continue;
              case "3":
                s = i.songs[0].id;
                continue;
              case "4":
                e.done({
                  body: e.toStr(i)
                });
                continue;
              case "5":
                a = i.songs[0].audio[0].policy;
                continue;
              case "6":
                for (M = 0; M < h; M++) i.songs[0].audio[M].st = 0;
                continue;
              case "7":
                "number" == typeof s && e.setval(s + "", "kuwo_free_current_id");
                continue;
              case "8":
                p = i.songs[0].audio[0].price;
                continue;
              case "9":
                O = a + "_1";
                continue;
              case "10":
                i.user = [{
                  pid: K,
                  type: a,
                  name: O,
                  categray: O,
                  id: s,
                  order: 375787919,
                  final: [],
                  buy: 1657425321,
                  begin: 1657425321,
                  end: 4180305321,
                  CurEnd: 0,
                  playCnt: 0,
                  playUpper: 300,
                  downCnt: 0,
                  downUpper: 300,
                  playVideoCnt: 0,
                  playVideoUpper: 3000,
                  downVideoCnt: 0,
                  downVideoUpper: 3000,
                  price: p,
                  period: 1000,
                  feetype: 0,
                  info: l
                }];
                continue;
            }
            break;
          }
          if (/vip\/enc/.test($request.url) && e.done({
            body: "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ=="
          }), /vip\/v2\/theme/.test($request.url) && (i.data.needBieds = null, e.done({
            body: e.toStr(i)
          })), $request.url.includes("/a.p")) for (var v = "1|3|4|2|0".split("|"), d = 0;;) {
            switch (v[d++]) {
              case "0":
                e.done({
                  body: D
                });
                continue;
              case "1":
                D = e.toStr(i);
                continue;
              case "2":
                $request.url.includes("getvip") && (i.packs = {
                  end: 32495443200,
                  bought_vip: 1,
                  type: 1,
                  period: 31,
                  bought_vip_end: 32495443200
                }, D = e.toStr(i));
                continue;
              case "3":
                i.hasOwnProperty("songs") && Object.keys(i.songs).length > 0 && (Q = i.songs[Object.keys(i.songs)[0]].id, e.setval(Q + "", "kuwo_free_current_id"));
                continue;
              case "4":
                ((g = $request) === null || g === void 0 ? void 0 : g.method.toUpperCase()) === "POST" && (D = $response.body.replace(/"playright":\d+/g, "\"playright\":1").replace(/"downright":\d+/g, "\"downright\":1").replace(/"policytype":\d+/g, "\"policytype\":3").replace(/"policy":\d+/g, "\"policy\":5"));
                continue;
            }
            break;
          }
          /pay\/user\/info/.test($request.url) && (i.data.vipExpires = 4077187200, i.data.vipType = 1, i.data.adImgUrl = "", e.done({
            body: e.toStr(i)
          }));
        case 33:
        case "end":
          return w.stop();
      }
    }, r, null, [[16, 23]]);
  }))().catch(function (w) {
    return e.logErr(w);
  }).finally(function () {
    return e.done({});
  });
})();