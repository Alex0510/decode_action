//Thu Sep 05 2024 15:31:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let {
    headers,
    url
  } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined",
  playURL = url.replace(/^https?:\/\/.*\.qohzni\.cn\//, "https://long.qohzni.cn/");
headers.hasOwnProperty("X-Playback-Session-Id") && (console.log("通杀Crack~"), isQX && $notify("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", {
  "open-url": playURL
}), isSurge && $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", {
  "url": playURL
}), isLoon && $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", {
  "openUrl": playURL
}));
$done({
  "response": {
    "headers": headers
  }
});