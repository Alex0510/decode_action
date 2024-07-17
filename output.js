//Wed Jul 17 2024 04:49:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let _0x397588 = $response.body,
  _0x413e26 = JSON.parse(_0x397588),
  _0x2dc6f6 = Array.from({
    "length": 45
  }, (_0x13d93d, _0x151d91) => _0x151d91 + 1),
  _0x5ed8b2 = Math.floor(Math.random() * _0x2dc6f6.length),
  _0x5383d4 = _0x2dc6f6[_0x5ed8b2];
_0x413e26.data && _0x413e26.data[0] && _0x413e26.data[0].theme && (_0x413e26.data[0].theme.bubble = _0x5383d4);
$done({
  "body": JSON.stringify(_0x413e26)
});