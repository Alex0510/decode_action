//Thu Jul 11 2024 03:03:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x5df2d4 = new Env("Eric捕获");
const _0x404fc6 = $request.url;
const _0xfa2157 = $request.headers;
if (_0xfa2157["user-agent"] && (_0xfa2157["user-agent"].indexOf("Blued") !== -1 || _0xfa2157["user-agent"].indexOf("Blued") !== -1)) {
  try {
    const _0x1f0adf = _0x5df2d4.getdata("pngUrl");
    if (!_0x1f0adf || _0x1f0adf !== _0x404fc6) {
      _0x5df2d4.setdata(_0x404fc6, "pngUrl");
      _0x5df2d4.msg("Eric已成功捕获baby密照", "点击此通知查看PNG", "", {
        "open-url": _0x404fc6,
        "media-url": _0x404fc6
      });
    }
  } catch (_0x42a76b) {
    _0x5df2d4.logErr(_0x42a76b);
    _0x5df2d4.msg("代码执行出错", "", _0x42a76b.message);
  }
}
_0x5df2d4.done({});
encode_version = "jsjiami.com.v5";