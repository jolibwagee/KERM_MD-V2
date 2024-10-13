//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "525569354950";
global.owner = process.env.OWNER_NUMBER || "525569354950";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lTUW9qS1RVOHMwU05nODVvZHdpU21ITU5jTlB5V00yWjkzR0ZjUWowND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBUSGsvTzZyaGNDc0dVcTRGamZrT2hmR3ZqZ0RSM3ZPYXg2S1RXaWIzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTTA1WVI4K3NSeTNaNitRYndvRUtCa0g2SitkeTVkZHB3eitMWjZHZWxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuNkhBaDc1OXNubEN5MVNKRVUyekxSMWE2Ni9TaHhNd1Mxc3FZcm9wMVFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDa3pkMnhYTFJ1em9RQm9kRXJVc0huSkNmc2hNV1ljZHdpeE14Zm01VWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3a2w1bG5lLzZtT3JzaUc2OTdvMTQ1TUQ5bGVHS0wyRllhSUJqZy9SazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlwcjBTY1lHaW9CSEV4c2xZdDFPekp5ZmZSUldEaW5lOEMwMko0Z0wyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU92VmNRcmNkQXpGTjFTVzhmZFdyRk1najRGQkNoSXV0MGFnU240WENrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ3NXZVcjR3SXFoQ2NPRWpGZ3QwLzhoYlg5bjdUb3ladmk5NUNobVhsd3o3WWg0UGp3Y253QUEwTGxQZ1gwUU9WSFNENHVEQk41QzZCaWxUU0ZmYmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6IkNxcjNGUXFGYVNuZnpINjRxR0tSRVBDUVRyNWcyampFVnY4NFpuZEdJOXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTIxNTU2OTM1NDk1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMDBEREFENjk5MjRBRTA0NDE5OTkzNkU5REVBRDdEMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4ODYyMzY3fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1dEM4ODVBM1FCT1Q1Q240OFRYTk1BIiwicGhvbmVJZCI6IjcyNDhjMTA0LThkYjMtNDc0MS1iNzQ5LTcwY2YxN2UwZWQ4MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYmxTNjA1amRXWXB0UzZiMklkRjNVMjVyNDQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkrYUFEbzBNZEZrczZuTllrc0U0NGt5RlkvOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIVXJvVURFSTZ4c2JnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik0vdExJcFRsQy9IbmU3SDR5QS9rSk9xTFptOWFHZ0FyNWlOL3QzOURLaHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik10TDRoNG9XWEFuc0xCaXBmZURkWVUrT3FDWk81WDJGQVphcWZaNXcxMGFOTVNsT3B2Y2xoTk1YV2RkaEp4Z3N1Yk1UeXpJNVV3TlVFZjRJR1dPakJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhQmVQdW93czQ2Rk85OU5zdXhCMzdOZldscC9YdFE0WWVWbGxoZW1RRVZkdDhHWCtodFdrclRmbEI4akx2Nk5mTENzcUE2ZFN0YURvWTdRVzdqN1podz09In0sIm1lIjp7ImlkIjoiNTIxNTU2OTM1NDk1MDo2M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIyODE1MzAyNTQxNDk2OjYzQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MjE1NTY5MzU0OTUwOjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRQN1N5S1U1UXZ4NTN1eCtNZ1A1Q1RxaTJadldob0FLK1lqZjdkL1F5b2IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODg2MjM2MywibGFzdFByb3BIYXNoIjoiNGVVTkRuIiwibXlBcHBTdGF0ZUtleUlkIjoiQUQ0QUFMN3cifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵•✮⃝",
  author: process.env.PACK_AUTHER || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵•✮⃝",
  packname: process.env.PACK_NAME || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵•✮⃝",
  botname: process.env.BOT_NAME || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵•✮⃝",
  ownername: process.env.OWNER_NAME || "✮͢≛❂𝔾ℝ𝕆𝕆𝕍𝕐•𓃵•✮⃝",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
