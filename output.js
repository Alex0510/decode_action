//Tue Aug 13 2024 05:17:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let obj = JSON.parse($response.body);
obj.data.anchor["userHas"] = 1;
$done({
  body: JSON.stringify(obj)
});