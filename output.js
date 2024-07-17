//Wed Jul 17 2024 11:13:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function _0x3b4d5a(_0x1644a3) {
  return btoa(_0x1644a3);
}
function _0x2f5663(_0x3d87cb) {
  return atob(_0x3d87cb);
}
const _0x1887e = "RXJpYzEwNjk=",
  _0x786a0e = $persistentStore.read("EricPassword");
function _0x504075(_0xede0e9) {
  const _0x2d2a61 = _0x3b4d5a(_0xede0e9);
  return _0x2d2a61 === _0x1887e;
}
!_0x786a0e && $persistentStore.write(_0x1887e, "EricPassword");
let _0x4feafb = $response.body,
  _0x2c72ce = JSON.parse(_0x4feafb);
console.log("Original response body:", JSON.stringify(_0x2c72ce, null, 2));
const _0x2e1946 = /users\/(\d+)/,
  _0x51b6d1 = $request.url.match(_0x2e1946);
if (!_0x504075(_0x786a0e)) console.error("密码验证失败"), $done({
  "body": JSON.stringify({
    "error": "密码验证失败，请检查 BoxJS 配置"
  })
});else {
  if (_0x51b6d1) {
    const _0x1a5c42 = _0x51b6d1[1],
      _0x7c40c = "https://argo.blued.cn/users/" + _0x1a5c42 + "/basic";
    console.log("User ID:", _0x1a5c42);
    console.log("Fetching URL:", _0x7c40c);
    const _0x5b3176 = $request.headers.authorization;
    console.log("Authorization header:", _0x5b3176);
    const _0x2d008b = {
      "authority": "argo.blued.cn",
      "accept": "*/*",
      "x-client-color": "light",
      "content-type": "application/json",
      "accept-encoding": "gzip, deflate, br",
      "user-agent": "Mozilla/5.0 (iPhone; iOS 16.1.1; Scale/3.00) iOS/300907_0.9.7_6972_0921 (Asia/Shanghai) app/1",
      "accept-language": "zh-CN",
      "authorization": _0x5b3176
    };
    $httpClient.get({
      "url": _0x7c40c,
      "headers": _0x2d008b
    }, function (_0x30762d, _0x556e6c, _0x29fbd0) {
      if (_0x30762d) console.error("Error fetching data:", _0x30762d), _0x2372b(_0x2c72ce);else try {
        let _0x4772dd = JSON.parse(_0x29fbd0);
        console.log("Fetched data:", JSON.stringify(_0x4772dd, null, 2));
        if (_0x4772dd && _0x4772dd.data && _0x4772dd.data.length > 0) {
          const _0x1730d7 = _0x4772dd.data[0];
          if (_0x1730d7.last_operate !== undefined && _0x1730d7.distance !== undefined) {
            console.log("Fetched data contains required fields");
            const _0x5317be = _0x1730d7.last_operate,
              _0x443003 = parseFloat(_0x1730d7.distance).toFixed(2) + "km";
            if (_0x2c72ce.data && _0x2c72ce.data.length > 0) {
              const _0x3584f4 = _0x2c72ce.data[0];
              console.log("Original last_operate:", _0x3584f4.last_operate);
              console.log("Original distance:", _0x3584f4.distance);
              _0x3584f4.last_operate = _0x5317be;
              _0x3584f4.location = _0x443003;
              _0x3584f4.is_hide_distance = 0;
              _0x3584f4.is_hide_last_operate = 0;
              _0x3584f4.is_global_view_secretly = 1;
              _0x3584f4.is_invisible_all = 1;
              _0x3584f4.presonal_private_switch = 1;
              _0x3584f4.is_role_stealth = 1;
              _0x3584f4.black_allowed_count = 999;
              _0x3584f4.is_traceless_access = 1;
              _0x3584f4.avatar = _0x3584f4.latest_avatar;
              console.log("Updated last_operate:", _0x3584f4.last_operate);
              console.log("Updated distance:", _0x3584f4.location);
              console.log("Updated avatar:", _0x3584f4.avatar);
            } else {
              console.error("Original response does not contain required data fields");
            }
            _0x1730d7.is_hide_distance = 0;
            _0x1730d7.is_hide_last_operate = 0;
            console.log("Modified fetched data:", JSON.stringify(_0x1730d7, null, 2));
          } else {
            console.error("Fetched data does not contain required fields");
          }
          console.log("Modified response body:", JSON.stringify(_0x2c72ce, null, 2));
          $done({
            "body": JSON.stringify(_0x2c72ce)
          });
        } else console.error("Fetched data does not contain required fields"), _0x2372b(_0x2c72ce);
      } catch (_0x414648) {
        console.error("Error parsing data:", _0x414648);
        _0x2372b(_0x2c72ce);
      }
    });
  } else $done({
    "body": JSON.stringify(_0x2c72ce)
  });
  function _0x2372b(_0x4b6940) {
    if (_0x4b6940.data && _0x4b6940.data.length > 0) {
      _0x4b6940.data[0].is_hide_distance = 0;
      _0x4b6940.data[0].is_hide_last_operate = 0;
      _0x4b6940.data[0].is_global_view_secretly = 1;
      _0x4b6940.data[0].is_invisible_all = 1;
      _0x4b6940.data[0].presonal_private_switch = 1;
      _0x4b6940.data[0].is_role_stealth = 1;
      _0x4b6940.data[0].black_allowed_count = 999;
      _0x4b6940.data[0].is_traceless_access = 1;
      _0x4b6940.data[0].avatar = _0x4b6940.data[0].latest_avatar;
      delete _0x4b6940.data[0].distance;
    }
    $done({
      "body": JSON.stringify(_0x4b6940)
    });
  }
}