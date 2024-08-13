//Tue Aug 13 2024 03:10:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x169d7c = new Env("bluedvip");
function _0x522678(_0x19da6a) {
  return btoa(_0x19da6a);
}
function _0x246fb9(_0x2033a3) {
  return atob(_0x2033a3);
}
async function _0x478c14() {
  const _0xdd58fe = await fetch("https://gist.githubusercontent.com/Alex0510/2f220cbae58f770e572c688594d52393/raw/password.js"),
    _0x5f52df = await _0xdd58fe.text();
  return _0x5f52df.trim();
}
function _0x27e4d6(_0x240423, _0x2b1946) {
  const _0x4623df = _0x522678(_0x240423);
  return _0x4623df === _0x2b1946;
}
function _0xd26d5d(_0x103e12) {
  _0x103e12 = _0x103e12.replace(/"live_card_style":\d+/g, "\"live_card_style\":1").replace(/"is_have_chatroom":\d+/g, "\"is_have_chatroom\":0").replace(/"is_filter_ads":\d+/g, "\"is_filter_ads\":1").replace(/"size":\d+/g, "\"size\":0").replace(/"is_ads":\d+/g, "\"is_ads\":0").replace(/"live":\d+/g, "\"live\":0");
  let _0x3a280d = JSON.parse(_0x103e12);
  if (_0x3a280d && Array.isArray(_0x3a280d.data)) {
    _0x3a280d.data.forEach(_0x1b6697 => {
      _0x1b6697 && typeof _0x1b6697 === "object" && (delete _0x1b6697.adx, !_0x1b6697.data && (delete _0x1b6697.adms_operating, delete _0x1b6697.nearby_dating, delete _0x1b6697.extra));
    });
  }
  return JSON.stringify(_0x3a280d);
}
(async () => {
  try {
    const _0x535b3b = _0x169d7c.getdata("EricPassword"),
      _0x22555a = _0x169d7c.getdata("scriptvip"),
      _0x31881c = await _0x478c14();
    if (!_0x27e4d6(_0x535b3b, _0x31881c)) {
      console.error("密码验证失败");
      $done({
        "body": JSON.stringify({
          "error": "密码验证失败，请检查 BoxJS 配置"
        })
      });
      return;
    }
    if (!_0x535b3b) {
      _0x169d7c.setdata("TG联系咨询", "EricPassword");
    }
    if (_0x22555a !== "true") {
      console.log("Script is disabled via BoxJS.");
      $done({});
      return;
    }
    let _0x4d7daf = $response.body;
    _0x4d7daf = _0xd26d5d(_0x4d7daf);
    let _0x2d13e2 = JSON.parse(_0x4d7daf);
    if ($request.url === "https://social.blued.cn/users/map") {
      if ($response.status === 403) {
        $response.status = 200;
        _0x2d13e2.code = 200;
        _0x2d13e2.message = "";
        _0x2d13e2.data = [{
          "status": 1
        }];
        $done({
          "body": JSON.stringify(_0x2d13e2)
        });
        return;
      }
    }
    const _0x2b552a = /users\/(\d+)/,
      _0x4f528f = $request.url.match(_0x2b552a);
    if (_0x4f528f) {
      const _0x59e936 = _0x4f528f[1],
        _0x48cb9d = "https://argo.blued.cn/users/" + _0x59e936 + "/basic",
        _0x32bf06 = $request.headers.authorization,
        _0x2dd505 = {
          "authority": "argo.blued.cn",
          "accept": "*/*",
          "x-client-color": "light",
          "content-type": "application/json",
          "accept-encoding": "gzip, deflate, br",
          "user-agent": "Mozilla/5.0 (iPhone; iOS 16.1.1; Scale/3.00) iOS/300907_0.9.7_6972_0921 (Asia/Shanghai) app/1",
          "accept-language": "zh-CN",
          "authorization": _0x32bf06
        };
      $httpClient.get({
        "url": _0x48cb9d,
        "headers": _0x2dd505
      }, function (_0x465424, _0x262585, _0x36f954) {
        if (_0x465424) console.error("Error fetching data:", _0x465424), _0x456691(_0x2d13e2);else try {
          let _0x3de800 = JSON.parse(_0x36f954);
          if (_0x3de800 && _0x3de800.data && _0x3de800.data.length > 0) {
            const _0x9c1e6b = _0x3de800.data[0];
            if (_0x9c1e6b.last_operate !== undefined && _0x9c1e6b.distance !== undefined) {
              const _0x3b4c7f = _0x9c1e6b.last_operate,
                _0xf78b16 = parseFloat(_0x9c1e6b.distance).toFixed(2) + "km",
                _0x17adfe = Math.floor(Math.random() * 45) + 1;
              _0x9c1e6b.theme = _0x9c1e6b.theme || {};
              _0x9c1e6b.theme.bubble = _0x17adfe;
              if (_0x2d13e2.data && _0x2d13e2.data.length > 0) {
                const _0x2899ef = _0x2d13e2.data[0];
                _0x2899ef.last_operate = _0x3b4c7f;
                _0x2899ef.location = _0xf78b16;
                _0x2899ef.theme = _0x9c1e6b.theme;
                _0x2899ef.is_hide_distance = 0;
                _0x2899ef.is_hide_last_operate = 0;
                _0x2899ef.flash_prompt = "(99)";
                _0x2899ef.is_vip = 1;
                _0x2899ef.is_global_view_secretly = 1;
                _0x2899ef.is_invisible_all = 1;
                _0x2899ef.presonal_private_switch = 1;
                _0x2899ef.is_role_stealth = 1;
                _0x2899ef.black_allowed_count = 999;
                _0x2899ef.is_traceless_access = 1;
                _0x2899ef.avatar = _0x2899ef.latest_avatar;
              }
              _0x9c1e6b.is_hide_distance = 0;
              _0x9c1e6b.is_hide_last_operate = 0;
            } else _0x456691(_0x2d13e2);
            _0x2d13e2.code = 200;
            _0x2d13e2.data[0].is_open_shadow = 1;
            _0x2d13e2.data[0].has_right = 1;
            $done({
              "body": JSON.stringify(_0x2d13e2)
            });
          } else _0x456691(_0x2d13e2);
        } catch (_0x345e0f) {
          console.error("Error parsing data:", _0x345e0f);
          _0x456691(_0x2d13e2);
        }
      });
    } else _0x2d13e2.code = 200, _0x2d13e2.data[0].is_open_shadow = 1, _0x2d13e2.data[0].has_right = 1, $done({
      "body": JSON.stringify(_0x2d13e2)
    });
  } catch (_0x43a855) {
    console.error(_0x43a855);
    $done({});
  }
  function _0x456691(_0x2d3272) {
    if (_0x2d3272.data && _0x2d3272.data.length > 0) {
      _0x2d3272.data[0].is_hide_distance = 0;
      _0x2d3272.data[0].is_hide_last_operate = 0;
      _0x2d3272.data[0].is_global_view_secretly = 1;
      _0x2d3272.data[0].is_invisible_all = 1;
      _0x2d3272.data[0].presonal_private_switch = 1;
      _0x2d3272.data[0].is_role_stealth = 1;
      _0x2d3272.data[0].black_allowed_count = 999;
      _0x2d3272.data[0].is_traceless_access = 1;
      _0x2d3272.data[0].flash_prompt = "(99)";
      _0x2d3272.data[0].is_vip = 1;
      _0x2d3272.data[0].avatar = _0x2d3272.data[0].latest_avatar;
      delete _0x2d3272.data[0].distance;
    }
    _0x2d3272.code = 200;
    _0x2d3272.data[0].is_open_shadow = 1;
    _0x2d3272.data[0].has_right = 1;
    $done({
      "body": JSON.stringify(_0x2d3272)
    });
  }
})();