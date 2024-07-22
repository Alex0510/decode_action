//Mon Jul 22 2024 08:19:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("18k漫画", {
  "logLevel": "info"
});
var body = $response.body;
$.debug(body);
const code = /"code":(\d+)/.exec(body)?.[1] || 0;
$.debug("code: " + code);
code != 200 ? ($.error("接口报错: " + (body.msg || "未知错误")), $.done({})) : (async () => {
  try {
    const _0x55836b = await loadUtils();
    $.debug("Utils loaded");
    $.debug("Utils Object: " + JSON.stringify(_0x55836b));
    if (!_0x55836b || typeof _0x55836b.createCryptoJS !== "function") throw new ReferenceError("Utils 或 createCryptoJS 方法未正确加载");
    const _0x1f1b77 = _0x55836b.createCryptoJS();
    $.debug("CryptoJS created");
    if (!_0x1f1b77) {
      throw new ReferenceError("CryptoJS 变量未定义");
    }
    if (/memberDetails/.test($request.url)) {
      body = $.toObj(body);
      const _0x3d98a1 = body.data.suffix,
        _0x1b5c8f = _0x1f1b77.enc.Utf8.parse("9a62e6977b" + _0x3d98a1),
        _0xa29ee1 = _0x1f1b77.enc.Utf8.parse("9a2d65b4a693ad0e40e5b156df25e406"),
        _0x188906 = AES_Decrypt(body.data.data, _0xa29ee1, _0x1b5c8f, _0x1f1b77);
      $.debug("Decrypted Data: " + _0x188906);
      const _0x512ccb = _0x188906.replace(/"username":"[^"]+"/g, "\"username\":\"lovebabyforever\"").replace(/"password":"[^"]+"/g, "\"password\":\"TG@ios151\"").replace(/"is_vip":0/g, "\"is_vip\":1").replace(/"vip_time":null/g, "\"vip_time\":\"2099-09-09\"").replace(/"book_coin":\d+/g, "\"book_coin\":9999").replace(/"identity_id":\d+/g, "\"identity_id\":9999").replace(/"vip_hour":\d+/g, "\"vip_hour\":9999");
      $.debug("Modified Data: " + _0x512ccb);
      body.data.data = AES_Encrypt(_0x512ccb, _0xa29ee1, _0x1b5c8f, _0x1f1b77);
      body = JSON.stringify(body);
    }
    if (/https:\/\/18akmanhua08\.top\/api\/chaptersDetails/.test($request.url)) {
      body = $.toObj(body);
      const _0x394d16 = body.data.suffix,
        _0x45e4c6 = _0x1f1b77.enc.Utf8.parse("9a62e6977b" + _0x394d16),
        _0xdd2e00 = _0x1f1b77.enc.Utf8.parse("9a2d65b4a693ad0e40e5b156df25e406"),
        _0x57857f = AES_Decrypt(body.data.data, _0xdd2e00, _0x45e4c6, _0x1f1b77);
      $.debug("Decrypted Data: " + _0x57857f);
      const _0x7b9e9b = _0x57857f.replace(/"is_buy":0/g, "\"is_buy\":1").replace(/"is_free":0/g, "\"is_free\":1");
      $.debug("Modified Data: " + _0x7b9e9b);
      body.data.data = AES_Encrypt(_0x7b9e9b, _0xdd2e00, _0x45e4c6, _0x1f1b77);
      body = JSON.stringify(body);
    }
  } catch (_0x217427) {
    $.logErr(_0x217427);
  } finally {
    $.done({
      "body": body
    });
  }
})();
function AES_Encrypt(_0x4b52ba, _0x5e3d4f, _0x232263, _0x3db020) {
  var _0x30bb5f = _0x3db020.AES.encrypt(_0x4b52ba, _0x5e3d4f, {
    "iv": _0x232263,
    "mode": _0x3db020.mode.CBC,
    "padding": _0x3db020.pad.Pkcs7
  });
  return _0x30bb5f.toString();
}
function AES_Decrypt(_0xec2cfd, _0x23aa5b, _0x422c94, _0x400add) {
  var _0x1a1cf5 = _0x400add.AES.decrypt(_0xec2cfd, _0x23aa5b, {
    "iv": _0x422c94,
    "mode": _0x400add.mode.CBC,
    "padding": _0x400add.pad.Pkcs7
  });
  return _0x1a1cf5.toString(_0x400add.enc.Utf8);
}
async function loadUtils() {
  let _0x3d09d4 = $.getdata("Utils_Code") || "";
  if (_0x3d09d4 && _0x3d09d4.length) return console.log("✅ " + $.name + ": 缓存中存在Utils代码, 跳过下载"), eval(_0x3d09d4), creatUtils();
  return console.log("🚀 " + $.name + ": 开始下载Utils代码"), new Promise(_0x167cf6 => {
    $.getScript("https://cdn.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Utils.js").then(_0x5e2c81 => {
      $.setdata(_0x5e2c81, "Utils_Code");
      eval(_0x5e2c81);
      console.log("✅ Utils加载成功, 请继续");
      _0x167cf6(creatUtils());
    });
  });
}