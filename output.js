//Mon Jul 15 2024 15:07:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const _0x1c9cc9 = "Eric1069";
const _0x280b74 = $persistentStore.read("EricPassword");
function _0x486173(_0x10f427) {
  var _0x56eb66 = function () {
    var _0x134271 = true;
    return function (_0x20623c, _0x40921d) {
      var _0x847c3f = _0x134271 ? function () {
        if (_0x40921d) {
          var _0x1e6b8 = _0x40921d.apply(_0x20623c, arguments);
          _0x40921d = null;
          return _0x1e6b8;
        }
      } : function () {};
      _0x134271 = false;
      return _0x847c3f;
    };
  }();
  var _0x21f490 = _0x56eb66(this, function () {
    var _0x231fd0 = function () {
        return "dev";
      },
      _0x4f680a = function () {
        return "window";
      };
    var _0x5dd881 = function () {
      var _0x550fbc = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x550fbc.test(_0x231fd0.toString());
    };
    var _0x18d5c9 = function () {
      var _0x4ce2f1 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x4ce2f1.test(_0x4f680a.toString());
    };
    var _0x333808 = function (_0x432180) {
      var _0x2ab90b = ~-1 >> NaN;
      if (_0x432180.indexOf("i" === _0x2ab90b)) {
        _0x991246(_0x432180);
      }
    };
    var _0x991246 = function (_0x981158) {
      var _0x57b080 = ~-4 >> NaN;
      if (_0x981158.indexOf((true + "")[3]) !== _0x57b080) {
        _0x333808(_0x981158);
      }
    };
    if (!_0x5dd881()) {
      if (!_0x18d5c9()) {
        _0x333808("indеxOf");
      } else {
        _0x333808("indexOf");
      }
    } else {
      _0x333808("indеxOf");
    }
  });
  _0x21f490();
  return _0x10f427 === _0x1c9cc9;
}
if (!_0x280b74) {
  $persistentStore.write(_0x1c9cc9, "EricPassword");
}
let _0x23c678 = $response.body;
let _0x5e4ab7 = JSON.parse(_0x23c678);
console.log("Original response body:", JSON.stringify(_0x5e4ab7, null, 2));
const _0xe36ef0 = /users\/(\d+)/;
const _0x2f36e8 = $request.url.match(_0xe36ef0);
const _0x515257 = /users\/shadow/;
const _0x288ba1 = /users\?extra_info=.*/;
if (!_0x486173(_0x280b74)) {
  console.error("密码验证失败");
  $done({
    body: JSON.stringify({
      error: "密码验证失败，请检查 BoxJS 配置"
    })
  });
} else {
  if (_0x2f36e8) {
    const _0x2e0294 = _0x2f36e8[1];
    const _0x3df0aa = "https://argo.blued.cn/users/" + _0x2e0294 + "/basic";
    console.log("User ID:", _0x2e0294);
    console.log("Fetching URL:", _0x3df0aa);
    const _0xc0b69c = $request.headers.authorization;
    console.log("Authorization header:", _0xc0b69c);
    const _0x377551 = {
      authority: "argo.blued.cn",
      accept: "*/*",
      "x-client-color": "light",
      "content-type": "application/json",
      "accept-encoding": "gzip, deflate, br",
      "user-agent": "Mozilla/5.0 (iPhone; iOS 16.1.1; Scale/3.00) iOS/300907_0.9.7_6972_0921 (Asia/Shanghai) app/1",
      "accept-language": "zh-CN",
      authorization: _0xc0b69c
    };
    $httpClient.get({
      url: _0x3df0aa,
      headers: _0x377551
    }, function (_0x5b9692, _0x3cefef, _0x14beff) {
      if (_0x5b9692) {
        console.error("Error fetching data:", _0x5b9692);
        _0x32a9b2(_0x5e4ab7);
      } else {
        try {
          let _0x165685 = JSON.parse(_0x14beff);
          console.log("Fetched data:", JSON.stringify(_0x165685, null, 2));
          if (_0x165685 && _0x165685.data && _0x165685.data.length > 0) {
            const _0x25cd0a = _0x165685.data[0];
            if (_0x25cd0a.last_operate !== undefined && _0x25cd0a.distance !== undefined) {
              console.log("Fetched data contains required fields");
              const _0x41c501 = _0x25cd0a.last_operate;
              const _0x4ff0df = parseFloat(_0x25cd0a.distance).toFixed(2) + "km";
              if (_0x5e4ab7.data && _0x5e4ab7.data.length > 0) {
                const _0x58845e = _0x5e4ab7.data[0];
                console.log("Original last_operate:", _0x58845e.last_operate);
                console.log("Original distance:", _0x58845e.distance);
                _0x58845e.last_operate = _0x41c501;
                _0x58845e.location = _0x4ff0df;
                _0x58845e.is_hide_distance = 0;
                _0x58845e.is_hide_last_operate = 0;
                _0x58845e.avatar = _0x58845e.latest_avatar;
                console.log("Updated last_operate:", _0x58845e.last_operate);
                console.log("Updated distance:", _0x58845e.location);
                console.log("Updated avatar:", _0x58845e.avatar);
              } else {
                console.error("Original response does not contain required data fields");
              }
              _0x25cd0a.is_hide_distance = 0;
              _0x25cd0a.is_hide_last_operate = 0;
              console.log("Modified fetched data:", JSON.stringify(_0x25cd0a, null, 2));
            } else {
              console.error("Fetched data does not contain required fields");
            }
            console.log("Modified response body:", JSON.stringify(_0x5e4ab7, null, 2));
            $done({
              body: JSON.stringify(_0x5e4ab7)
            });
          } else {
            console.error("Fetched data does not contain required fields");
            _0x32a9b2(_0x5e4ab7);
          }
        } catch (_0x381dd0) {
          console.error("Error parsing data:", _0x381dd0);
          _0x32a9b2(_0x5e4ab7);
        }
      }
    });
  } else {
    if (_0x515257.test($request.url) && _0x5e4ab7.data && _0x5e4ab7.data.length > 0) {
      _0x5e4ab7.data[0].is_open_shadow = 1;
      _0x5e4ab7.data[0].has_right = 1;
    }
    if (_0x288ba1.test($request.url) && _0x5e4ab7.data && _0x5e4ab7.data.length > 0) {
      _0x5e4ab7.data[0].code = 200;
    } else {
      $done({
        body: JSON.stringify(_0x5e4ab7)
      });
    }
  }
  function _0x32a9b2(_0x510dfa) {
    if (_0x510dfa.data && _0x510dfa.data.length > 0) {
      _0x510dfa.data[0].is_hide_distance = 0;
      _0x510dfa.data[0].is_hide_last_operate = 0;
      _0x510dfa.data[0].avatar = _0x510dfa.data[0].latest_avatar;
      delete _0x510dfa.data[0].distance;
    }
    $done({
      body: JSON.stringify(_0x510dfa)
    });
  }
}
(function (_0x2d8b9d, _0x3e0c90, _0x3eb9f3) {
  var _0x5b1d38 = function () {
    var _0x3181c7 = true;
    return function (_0x5c47f2, _0x31567b) {
      var _0x4df487 = _0x3181c7 ? function () {
        if (_0x31567b) {
          var _0x5c677d = _0x31567b.apply(_0x5c47f2, arguments);
          _0x31567b = null;
          return _0x5c677d;
        }
      } : function () {};
      _0x3181c7 = false;
      return _0x4df487;
    };
  }();
  var _0x129a85 = _0x5b1d38(this, function () {
    var _0x4dce07 = function () {};
    var _0x3f4677 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x3f4677.console) {
      _0x3f4677.console = function (_0xdfa6f8) {
        var _0x3eb9f3 = {};
        _0x3eb9f3.log = _0xdfa6f8;
        _0x3eb9f3.warn = _0xdfa6f8;
        _0x3eb9f3.debug = _0xdfa6f8;
        _0x3eb9f3.info = _0xdfa6f8;
        _0x3eb9f3.error = _0xdfa6f8;
        _0x3eb9f3.exception = _0xdfa6f8;
        _0x3eb9f3.trace = _0xdfa6f8;
        return _0x3eb9f3;
      }(_0x4dce07);
    } else {
      _0x3f4677.console.log = _0x4dce07;
      _0x3f4677.console.warn = _0x4dce07;
      _0x3f4677.console.debug = _0x4dce07;
      _0x3f4677.console.info = _0x4dce07;
      _0x3f4677.console.error = _0x4dce07;
      _0x3f4677.console.exception = _0x4dce07;
      _0x3f4677.console.trace = _0x4dce07;
    }
  });
  _0x129a85();
  _0x3eb9f3 = "al";
  try {
    _0x3eb9f3 += "ert";
    _0x3e0c90 = encode_version;
    if (!(typeof _0x3e0c90 !== "undefined" && _0x3e0c90 === "jsjiami.com.v5")) {
      _0x2d8b9d[_0x3eb9f3]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x1fe292) {
    _0x2d8b9d[_0x3eb9f3]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";