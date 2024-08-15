//Thu Aug 15 2024 11:07:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("GOGOGOGO");
let url = $request.url,
  headers = $request.headers;
url = url.replace(/\/\/(?!long)[^\.]+\./, "//long.").replace(/\.m3u8/, ".m3u8");
if (headers.hasOwnProperty("x-playback-session-id") || headers.hasOwnProperty("X-Playback-Session-Id")) try {
  const notify = $.getdata("m3u8");
  if (!notify || notify != url) {
    $.setdata(url, "m3u8");
    const senPlayerUrl = "alohabrowser://open?link=" + encodeURIComponent(url),
      mediaUrl = "https://raw.githubusercontent.com/Yu9191/-/main/dingdangmao.jpg";
    $.msg("av获取成功", "请安装Aloha浏览器 ", "只适配此软件请前往频道安装", {
      "open-url": senPlayerUrl,
      "media-url": mediaUrl
    });
  }
} catch (_0x4fb4f9) {
  console.error("An error occurred:", _0x4fb4f9);
}
$.done({});