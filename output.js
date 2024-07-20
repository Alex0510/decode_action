//Sat Jul 20 2024 04:54:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x36ff5a = new Env("Eric捕获pic");
(async () => {
  try {
    function _0x3ed50d(_0x58cf26) {
      return btoa(_0x58cf26);
    }
    function _0xff2713(_0x49b71a) {
      return atob(_0x49b71a);
    }
    async function _0x45f9d2() {
      const _0x21aa92 = await fetch("https://gist.githubusercontent.com/Alex0510/2f220cbae58f770e572c688594d52393/raw/password.js"),
        _0x18b9ea = await _0x21aa92.text();
      return _0x18b9ea.trim();
    }
    const _0x27d1e1 = _0x36ff5a.getdata("EricPassword"),
      _0x1b2495 = _0x36ff5a.getdata("scriptpic");
    function _0x3585d1(_0x270e53, _0x31e2c3) {
      const _0x2d44ae = _0x3ed50d(_0x270e53);
      return _0x2d44ae === _0x31e2c3;
    }
    !_0x27d1e1 && _0x36ff5a.setdata("TG联系咨询", "EricPassword");
    if (_0x1b2495 !== "true") {
      console.log("Script is disabled via BoxJS.");
      _0x36ff5a.done({});
      return;
    }
    const _0x1b38e6 = await _0x45f9d2();
    if (!_0x3585d1(_0x27d1e1, _0x1b38e6)) {
      console.error("密码验证失败");
      _0x36ff5a.msg("密码验证失败", "请检查 BoxJS 配置中的密码", "");
      _0x36ff5a.done({});
      return;
    }
    const _0x492c85 = $request.url,
      _0x2bd1bd = $request.headers;
    if (_0x2bd1bd["user-agent"] && (_0x2bd1bd["user-agent"].indexOf("Blued") !== -1 || _0x2bd1bd["user-agent"].indexOf("Blued") !== -1)) {
      try {
        const _0xccddc3 = _0x36ff5a.getdata("pngUrl");
        if (!_0xccddc3 || _0xccddc3 !== _0x492c85) {
          _0x36ff5a.setdata(_0x492c85, "pngUrl");
          _0x36ff5a.msg("Eric已成功捕获baby密照", "点击此通知查看PNG", "", {
            "open-url": _0x492c85,
            "media-url": _0x492c85
          });
        }
      } catch (_0x23a881) {
        _0x36ff5a.logErr(_0x23a881);
        _0x36ff5a.msg("代码执行出错", "", _0x23a881.message);
      }
    }
    _0x36ff5a.done({});
  } catch (_0x23eeff) {
    console.error(_0x23eeff);
    _0x36ff5a.done({});
  }
})();