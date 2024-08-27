//Tue Aug 27 2024 15:13:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let {
    headers,
    url
  } = $request,
  isQX = typeof $task != "undefined",
  isSurge = typeof $httpClient != "undefined" && !isQX,
  isLoon = typeof $loon != "undefined",
  playURL = url.replace(/http[s]?:\/\/.*?\//, "https://long.riyufanyi.wang/");
headers.hasOwnProperty("X-Playback-Session-Id") && (console.log("通杀Crack~"), isQX && $notify("彭于晏提示❗️视频链接捕获成功", ">_ 点击一下此通知可跳转观看 🔞", "", {
  "open-url": playURL
}), isSurge && $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击一下此通知可跳转观看 🔞", "", {
  "url": playURL
}), isLoon && $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击一下此通知可跳转观看 🔞", "", {
  "openUrl": playURL
}));
$done({
  "headers": headers
});
function Env(_0xd787dc, _0x32838f) {
  class _0x20f19a {
    constructor(_0x3ba3e3) {
      this.env = _0x3ba3e3;
    }
    ["send"](_0x2743fa, _0x101011 = "GET") {
      _0x2743fa = "string" == typeof _0x2743fa ? {
        "url": _0x2743fa
      } : _0x2743fa;
      let _0x2dbcb6 = this.get;
      return "POST" === _0x101011 && (_0x2dbcb6 = this.post), new Promise((_0xe3644a, _0xecf855) => {
        _0x2dbcb6.call(this, _0x2743fa, (_0x18861d, _0x5884db, _0x49e90f) => {
          _0x18861d ? _0xecf855(_0x18861d) : _0xe3644a(_0x5884db);
        });
      });
    }
    ["get"](_0xcc2d0b) {
      return this.send.call(this.env, _0xcc2d0b);
    }
    ["post"](_0x5a5f84) {
      return this.send.call(this.env, _0x5a5f84, "POST");
    }
  }
  return new class {
    constructor(_0x38d072, _0x8e9d9e) {
      this.name = _0x38d072;
      this.http = new _0x20f19a(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x8e9d9e);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x14e1f1, _0x43ff51 = null) {
      try {
        return JSON.parse(_0x14e1f1);
      } catch {
        return _0x43ff51;
      }
    }
    ["toStr"](_0x5c4ae8, _0x5560c0 = null) {
      try {
        return JSON.stringify(_0x5c4ae8);
      } catch {
        return _0x5560c0;
      }
    }
    ["getjson"](_0x42b3fd, _0x117ab2) {
      let _0x336f36 = _0x117ab2;
      const _0x21e122 = this.getdata(_0x42b3fd);
      if (_0x21e122) try {
        _0x336f36 = JSON.parse(this.getdata(_0x42b3fd));
      } catch {}
      return _0x336f36;
    }
    ["setjson"](_0x12ed49, _0x10b830) {
      try {
        return this.setdata(JSON.stringify(_0x12ed49), _0x10b830);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0xdaaf8e) {
      return new Promise(_0x2f32c8 => {
        this.get({
          "url": _0xdaaf8e
        }, (_0xc67147, _0x5481ce, _0xde60df) => _0x2f32c8(_0xde60df));
      });
    }
    ["runScript"](_0x3a4b9d, _0x35b364) {
      return new Promise(_0x5092cf => {
        let _0x18d2fb = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x18d2fb = _0x18d2fb ? _0x18d2fb.replace(/\n/g, "").trim() : _0x18d2fb;
        let _0x1a6291 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x1a6291 = _0x1a6291 ? 1 * _0x1a6291 : 20;
        _0x1a6291 = _0x35b364 && _0x35b364.timeout ? _0x35b364.timeout : _0x1a6291;
        const [_0x11f251, _0x4b7c46] = _0x18d2fb.split("@"),
          _0x292a2f = {
            "url": "http://" + _0x4b7c46 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x3a4b9d,
              "mock_type": "cron",
              "timeout": _0x1a6291
            },
            "headers": {
              "X-Key": _0x11f251,
              "Accept": "*/*"
            },
            "timeout": _0x1a6291
          };
        this.post(_0x292a2f, (_0x51949e, _0x29eaa7, _0x364c91) => _0x5092cf(_0x364c91));
      }).catch(_0x50f275 => this.logErr(_0x50f275));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x51121b = this.path.resolve(this.dataFile),
          _0x2c130e = this.path.resolve(process.cwd(), this.dataFile),
          _0x2c59c0 = this.fs.existsSync(_0x51121b),
          _0x1af203 = !_0x2c59c0 && this.fs.existsSync(_0x2c130e);
        if (!_0x2c59c0 && !_0x1af203) return {};
        {
          const _0x28118d = _0x2c59c0 ? _0x51121b : _0x2c130e;
          try {
            return JSON.parse(this.fs.readFileSync(_0x28118d));
          } catch (_0x338744) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x39940c = this.path.resolve(this.dataFile),
          _0x1c40f8 = this.path.resolve(process.cwd(), this.dataFile),
          _0x24f5a7 = this.fs.existsSync(_0x39940c),
          _0x1050ee = !_0x24f5a7 && this.fs.existsSync(_0x1c40f8),
          _0x722a23 = JSON.stringify(this.data);
        _0x24f5a7 ? this.fs.writeFileSync(_0x39940c, _0x722a23) : _0x1050ee ? this.fs.writeFileSync(_0x1c40f8, _0x722a23) : this.fs.writeFileSync(_0x39940c, _0x722a23);
      }
    }
    ["lodash_get"](_0x463510, _0xb19cb3, _0x585b2b) {
      const _0x22d306 = _0xb19cb3.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x4a7068 = _0x463510;
      for (const _0x319c86 of _0x22d306) if (_0x4a7068 = Object(_0x4a7068)[_0x319c86], void 0 === _0x4a7068) return _0x585b2b;
      return _0x4a7068;
    }
    ["lodash_set"](_0x2b29fe, _0x5f1281, _0x8fafde) {
      return Object(_0x2b29fe) !== _0x2b29fe ? _0x2b29fe : (Array.isArray(_0x5f1281) || (_0x5f1281 = _0x5f1281.toString().match(/[^.[\]]+/g) || []), _0x5f1281.slice(0, -1).reduce((_0xd1811f, _0x7e1822, _0x3db97f) => Object(_0xd1811f[_0x7e1822]) === _0xd1811f[_0x7e1822] ? _0xd1811f[_0x7e1822] : _0xd1811f[_0x7e1822] = Math.abs(_0x5f1281[_0x3db97f + 1]) >> 0 == +_0x5f1281[_0x3db97f + 1] ? [] : {}, _0x2b29fe)[_0x5f1281[_0x5f1281.length - 1]] = _0x8fafde, _0x2b29fe);
    }
    ["getdata"](_0x754c55) {
      let _0x5418c1 = this.getval(_0x754c55);
      if (/^@/.test(_0x754c55)) {
        const [, _0x266245, _0x4601a2] = /^@(.*?)\.(.*?)$/.exec(_0x754c55),
          _0x32254c = _0x266245 ? this.getval(_0x266245) : "";
        if (_0x32254c) try {
          const _0x19784b = JSON.parse(_0x32254c);
          _0x5418c1 = _0x19784b ? this.lodash_get(_0x19784b, _0x4601a2, "") : _0x5418c1;
        } catch (_0x48c5a9) {
          _0x5418c1 = "";
        }
      }
      return _0x5418c1;
    }
    ["setdata"](_0x1199ee, _0x4f52a) {
      let _0x4dc4b1 = false;
      if (/^@/.test(_0x4f52a)) {
        const [, _0x483ed1, _0x322ffd] = /^@(.*?)\.(.*?)$/.exec(_0x4f52a),
          _0x5b0785 = this.getval(_0x483ed1),
          _0x570e8d = _0x483ed1 ? "null" === _0x5b0785 ? null : _0x5b0785 || "{}" : "{}";
        try {
          const _0x4fd5dd = JSON.parse(_0x570e8d);
          this.lodash_set(_0x4fd5dd, _0x322ffd, _0x1199ee);
          _0x4dc4b1 = this.setval(JSON.stringify(_0x4fd5dd), _0x483ed1);
        } catch (_0x549df4) {
          const _0x384194 = {};
          this.lodash_set(_0x384194, _0x322ffd, _0x1199ee);
          _0x4dc4b1 = this.setval(JSON.stringify(_0x384194), _0x483ed1);
        }
      } else _0x4dc4b1 = this.setval(_0x1199ee, _0x4f52a);
      return _0x4dc4b1;
    }
    ["getval"](_0x3a437c) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x3a437c);
        case "Quantumult X":
          return $prefs.valueForKey(_0x3a437c);
        case "Node.js":
          return this.data = this.loaddata(), this.data[_0x3a437c];
        default:
          return this.data && this.data[_0x3a437c] || null;
      }
    }
    ["setval"](_0x98a03b, _0x473144) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x98a03b, _0x473144);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x98a03b, _0x473144);
        case "Node.js":
          return this.data = this.loaddata(), this.data[_0x473144] = _0x98a03b, this.writedata(), !0;
        default:
          return this.data && this.data[_0x473144] || null;
      }
    }
    ["initGotEnv"](_0x47b028) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x47b028 && (_0x47b028.headers = _0x47b028.headers ? _0x47b028.headers : {}, void 0 === _0x47b028.headers.Cookie && void 0 === _0x47b028.cookieJar && (_0x47b028.cookieJar = this.ckjar));
    }
    ["get"](_0x15317e, _0x5d71a5 = () => {}) {
      switch (_0x15317e.headers && (delete _0x15317e.headers["Content-Type"], delete _0x15317e.headers["Content-Length"], delete _0x15317e.headers["content-type"], delete _0x15317e.headers["content-length"]), _0x15317e.params && (_0x15317e.url += "?" + this.queryStr(_0x15317e.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x15317e.headers = _0x15317e.headers || {}, Object.assign(_0x15317e.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(_0x15317e, (_0x5e9bef, _0x5f4913, _0x1fdc41) => {
            !_0x5e9bef && _0x5f4913 && (_0x5f4913.body = _0x1fdc41, _0x5f4913.statusCode = _0x5f4913.status ? _0x5f4913.status : _0x5f4913.statusCode, _0x5f4913.status = _0x5f4913.statusCode);
            _0x5d71a5(_0x5e9bef, _0x5f4913, _0x1fdc41);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x15317e.opts = _0x15317e.opts || {}, Object.assign(_0x15317e.opts, {
            "hints": !1
          })), $task.fetch(_0x15317e).then(_0x1d1ecb => {
            const {
              statusCode: _0x40f551,
              statusCode: _0x21b190,
              headers: _0x1a4d01,
              body: _0x125cd2,
              bodyBytes: _0x452730
            } = _0x1d1ecb;
            _0x5d71a5(null, {
              "status": _0x40f551,
              "statusCode": _0x21b190,
              "headers": _0x1a4d01,
              "body": _0x125cd2,
              "bodyBytes": _0x452730
            }, _0x125cd2, _0x452730);
          }, _0x4f7a53 => _0x5d71a5(_0x4f7a53 && _0x4f7a53.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x1507f1 = require("iconv-lite");
          this.initGotEnv(_0x15317e), this.got(_0x15317e).on("redirect", (_0x5586ea, _0xf0b537) => {
            try {
              if (_0x5586ea.headers["set-cookie"]) {
                const _0x2ca47e = _0x5586ea.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x2ca47e && this.ckjar.setCookieSync(_0x2ca47e, null);
                _0xf0b537.cookieJar = this.ckjar;
              }
            } catch (_0x951cec) {
              this.logErr(_0x951cec);
            }
          }).then(_0x46a821 => {
            const {
                statusCode: _0x40fe54,
                statusCode: _0x5aa663,
                headers: _0x565940,
                rawBody: _0x205a10
              } = _0x46a821,
              _0x5a2822 = _0x1507f1.decode(_0x205a10, this.encoding);
            _0x5d71a5(null, {
              "status": _0x40fe54,
              "statusCode": _0x5aa663,
              "headers": _0x565940,
              "rawBody": _0x205a10,
              "body": _0x5a2822
            }, _0x5a2822);
          }, _0x605285 => {
            const {
              message: _0x4f9eda,
              response: _0x5636ce
            } = _0x605285;
            _0x5d71a5(_0x4f9eda, _0x5636ce, _0x5636ce && _0x1507f1.decode(_0x5636ce.rawBody, this.encoding));
          });
      }
    }
    ["post"](_0x56b8b4, _0x1a77ac = () => {}) {
      const _0x5e4e6c = _0x56b8b4.method ? _0x56b8b4.method.toLocaleLowerCase() : "post";
      switch (_0x56b8b4.body && _0x56b8b4.headers && !_0x56b8b4.headers["Content-Type"] && !_0x56b8b4.headers["content-type"] && (_0x56b8b4.headers["content-type"] = "application/x-www-form-urlencoded"), _0x56b8b4.headers && (delete _0x56b8b4.headers["Content-Length"], delete _0x56b8b4.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x56b8b4.headers = _0x56b8b4.headers || {}, Object.assign(_0x56b8b4.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[_0x5e4e6c](_0x56b8b4, (_0x20f1da, _0x6ea88, _0x6f8705) => {
            !_0x20f1da && _0x6ea88 && (_0x6ea88.body = _0x6f8705, _0x6ea88.statusCode = _0x6ea88.status ? _0x6ea88.status : _0x6ea88.statusCode, _0x6ea88.status = _0x6ea88.statusCode);
            _0x1a77ac(_0x20f1da, _0x6ea88, _0x6f8705);
          });
          break;
        case "Quantumult X":
          _0x56b8b4.method = _0x5e4e6c, this.isNeedRewrite && (_0x56b8b4.opts = _0x56b8b4.opts || {}, Object.assign(_0x56b8b4.opts, {
            "hints": !1
          })), $task.fetch(_0x56b8b4).then(_0x5cc32d => {
            const {
              statusCode: _0x469fad,
              statusCode: _0x236b18,
              headers: _0x401438,
              body: _0x412fed,
              bodyBytes: _0x1e97e4
            } = _0x5cc32d;
            _0x1a77ac(null, {
              "status": _0x469fad,
              "statusCode": _0x236b18,
              "headers": _0x401438,
              "body": _0x412fed,
              "bodyBytes": _0x1e97e4
            }, _0x412fed, _0x1e97e4);
          }, _0x3a8ce2 => _0x1a77ac(_0x3a8ce2 && _0x3a8ce2.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x27f59d = require("iconv-lite");
          this.initGotEnv(_0x56b8b4);
          const {
            url: _0x508627,
            ..._0x2304b7
          } = _0x56b8b4;
          this.got[_0x5e4e6c](_0x508627, _0x2304b7).then(_0xdff32c => {
            const {
                statusCode: _0x1b93e4,
                statusCode: _0x1c2e6a,
                headers: _0x5bb6b1,
                rawBody: _0x425291
              } = _0xdff32c,
              _0x2603e9 = _0x27f59d.decode(_0x425291, this.encoding);
            _0x1a77ac(null, {
              "status": _0x1b93e4,
              "statusCode": _0x1c2e6a,
              "headers": _0x5bb6b1,
              "rawBody": _0x425291,
              "body": _0x2603e9
            }, _0x2603e9);
          }, _0x4e7a60 => {
            const {
              message: _0x43ad03,
              response: _0xf86b9f
            } = _0x4e7a60;
            _0x1a77ac(_0x43ad03, _0xf86b9f, _0xf86b9f && _0x27f59d.decode(_0xf86b9f.rawBody, this.encoding));
          });
      }
    }
    ["time"](_0x45ec5f, _0x1e2e95 = null) {
      const _0x27a0dd = _0x1e2e95 ? new Date(_0x1e2e95) : new Date();
      let _0xba9ad0 = {
        "M+": _0x27a0dd.getMonth() + 1,
        "d+": _0x27a0dd.getDate(),
        "H+": _0x27a0dd.getHours(),
        "m+": _0x27a0dd.getMinutes(),
        "s+": _0x27a0dd.getSeconds(),
        "q+": Math.floor((_0x27a0dd.getMonth() + 3) / 3),
        "S": _0x27a0dd.getMilliseconds()
      };
      /(y+)/.test(_0x45ec5f) && (_0x45ec5f = _0x45ec5f.replace(RegExp.$1, (_0x27a0dd.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3cbc6a in _0xba9ad0) new RegExp("(" + _0x3cbc6a + ")").test(_0x45ec5f) && (_0x45ec5f = _0x45ec5f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xba9ad0[_0x3cbc6a] : ("00" + _0xba9ad0[_0x3cbc6a]).substr(("" + _0xba9ad0[_0x3cbc6a]).length)));
      return _0x45ec5f;
    }
    ["queryStr"](_0x207998) {
      let _0x4dd171 = "";
      for (const _0x51979c in _0x207998) {
        let _0x425b1e = _0x207998[_0x51979c];
        null != _0x425b1e && "" !== _0x425b1e && ("object" == typeof _0x425b1e && (_0x425b1e = JSON.stringify(_0x425b1e)), _0x4dd171 += _0x51979c + "=" + _0x425b1e + "&");
      }
      return _0x4dd171 = _0x4dd171.substring(0, _0x4dd171.length - 1), _0x4dd171;
    }
    ["msg"](_0x19e6e8 = _0xd787dc, _0x3c9e4d = "", _0x2d29b5 = "", _0x1e8baa) {
      const _0x58de16 = _0xb21340 => {
        switch (typeof _0xb21340) {
          case void 0:
            return _0xb21340;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0xb21340
                };
              case "Loon":
              case "Shadowrocket":
                return _0xb21340;
              case "Quantumult X":
                return {
                  "open-url": _0xb21340
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x24023f = _0xb21340.url || _0xb21340.openUrl || _0xb21340["open-url"];
                  return {
                    "url": _0x24023f
                  };
                }
              case "Loon":
                {
                  let _0x56facf = _0xb21340.openUrl || _0xb21340.url || _0xb21340["open-url"],
                    _0x1429db = _0xb21340.mediaUrl || _0xb21340["media-url"];
                  return {
                    "openUrl": _0x56facf,
                    "mediaUrl": _0x1429db
                  };
                }
              case "Quantumult X":
                {
                  let _0x4084b7 = _0xb21340["open-url"] || _0xb21340.url || _0xb21340.openUrl,
                    _0x4fdbb1 = _0xb21340["media-url"] || _0xb21340.mediaUrl,
                    _0xd1c3c8 = _0xb21340["update-pasteboard"] || _0xb21340.updatePasteboard;
                  return {
                    "open-url": _0x4084b7,
                    "media-url": _0x4fdbb1,
                    "update-pasteboard": _0xd1c3c8
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0x19e6e8, _0x3c9e4d, _0x2d29b5, _0x58de16(_0x1e8baa));
          break;
        case "Quantumult X":
          $notify(_0x19e6e8, _0x3c9e4d, _0x2d29b5, _0x58de16(_0x1e8baa));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let _0x4162c9 = ["", "==============📣系统通知📣=============="];
        _0x4162c9.push(_0x19e6e8);
        _0x3c9e4d && _0x4162c9.push(_0x3c9e4d);
        _0x2d29b5 && _0x4162c9.push(_0x2d29b5);
        console.log(_0x4162c9.join("\n"));
        this.logs = this.logs.concat(_0x4162c9);
      }
    }
    ["log"](..._0x2a476a) {
      _0x2a476a.length > 0 && (this.logs = [...this.logs, ..._0x2a476a]);
      console.log(_0x2a476a.join(this.logSeparator));
    }
    ["logErr"](_0x3aad22, _0x502379) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x3aad22);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x3aad22.stack);
      }
    }
    ["wait"](_0xd2d17b) {
      return new Promise(_0x40b350 => setTimeout(_0x40b350, _0xd2d17b));
    }
    ["done"](_0x266799 = {}) {
      const _0x5c2c96 = new Date().getTime(),
        _0x215656 = (_0x5c2c96 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x215656 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x266799);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0xd787dc, _0x32838f);
}