//Sat Jul 13 2024 10:42:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x35e494 = new Env("ip替换");
const _0x45c607 = "Eric1069";
const _0xc4dedc = _0x35e494.getdata("EricPassword");
function _0x213edc(_0x22a434) {
  return _0x22a434 === _0x45c607;
}
if (!_0xc4dedc) {
  _0x35e494.setdata(_0x45c607, "EricPassword");
}
if (!_0x213edc(_0xc4dedc)) {
  console.error("密码验证失败");
  _0x35e494.msg("密码验证失败", "请检查 BoxJS 配置中的密码", "");
  $done({});
} else {
  (async () => {
    try {
      const _0x19722e = _0x35e494.getdata("sortBy") || "online";
      let _0x298db7 = $request.url;
      console.log("Original URL:", _0x298db7);
      _0x298db7 = _0x298db7.replace(/sort_by=[^&]*/, "sort_by=" + _0x19722e);
      console.log("Modified URL:", _0x298db7);
      const _0x458b89 = _0x35e494.getdata("customCity") || "";
      const _0x43c7b = _0x35e494.getdata("customLatitude") || "";
      const _0x17db06 = _0x35e494.getdata("customLongitude") || "";
      let _0x350e1f = _0x43c7b;
      let _0x5854c7 = _0x17db06;
      if (!_0x43c7b || !_0x17db06) {
        const _0x3becc1 = encodeURIComponent(_0x458b89);
        const _0x2ee54d = {
          "url": "https://jingweidu.bmcx.com/web_system/bmcx_com_www/system/file/map/sou_suo/?ajaxtimestamp=" + Date.now(),
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Origin": "https://jingweidu.bmcx.com",
            "Referer": "https://jingweidu.bmcx.com/web_system/bmcx_com_www/system/file/jingweidu/api/?v=125b5a3c78f141a0_1754",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Accept-Encoding": "gzip, deflate, br"
          },
          "body": "keyword=" + _0x3becc1,
          "method": "POST"
        };
        let _0x169eb0 = await _0x35e494.http.post(_0x2ee54d).then(_0x445994 => JSON.parse(_0x445994.body));
        _0x350e1f = _0x169eb0.lat;
        _0x5854c7 = _0x169eb0.lng;
      }
      const _0x2dcf40 = _0x298db7.replace(/(lot|longitude|lon)=\d+\.\d+|(lat|latitude)=\d+\.\d+/g, function (_0x2e8381, _0x50c8e7, _0x58baf8) {
        if (_0x50c8e7 === "lot" || _0x50c8e7 === "longitude" || _0x50c8e7 === "lon") return _0x50c8e7 + "=" + _0x5854c7;
        if (_0x58baf8 === "lat" || _0x58baf8 === "latitude") return _0x58baf8 + "=" + _0x350e1f;
        return _0x2e8381;
      });
      console.log("Final Modified URL:", _0x2dcf40);
      $done({
        "url": _0x2dcf40
      });
    } catch (_0x816177) {
      console.error(_0x816177);
      $done({});
    }
  })();
}
encode_version = "jsjiami.com.v5";