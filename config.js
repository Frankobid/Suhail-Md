const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349135524653";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_26_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRDBseTl4MEh4Z211Q0hEc2c1S0xSdWF6WjQvNkpDQ256MkhJcHgrd0dFOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM1NTI0NjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNjE0NkUyNjg3ODczMURENUFCODVBNTA0QjhDMUQ1Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNzc1NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEZSN3RQcUVUM0dfREU4Rko5c2NoZ1wiLFxuICBcInBob25lSWRcIjogXCI2MjhiMjIyOS02YmM3LTQ2ZWEtOGY0YS00OTU0ZmZkYTdjZjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAyMixcbiAgICAgIDI0LFxuICAgICAgMTI4LFxuICAgICAgMTI3LFxuICAgICAgNTUsXG4gICAgICAxNDYsXG4gICAgICAxNjYsXG4gICAgICAxMDUsXG4gICAgICAxNTcsXG4gICAgICAxODYsXG4gICAgICAyNDcsXG4gICAgICAyMzQsXG4gICAgICA3MCxcbiAgICAgIDI0MyxcbiAgICAgIDE3NyxcbiAgICAgIDE1NCxcbiAgICAgIDE5LFxuICAgICAgMTE0LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE1NyxcbiAgICAgIDE3MCxcbiAgICAgIDI0OCxcbiAgICAgIDQ5LFxuICAgICAgMTc3LFxuICAgICAgMjMzLFxuICAgICAgNzUsXG4gICAgICAyMDEsXG4gICAgICAxOTEsXG4gICAgICAzNyxcbiAgICAgIDEyLFxuICAgICAgMTY1LFxuICAgICAgMTg5LFxuICAgICAgMTM0LFxuICAgICAgMTksXG4gICAgICA1LFxuICAgICAgMTkzLFxuICAgICAgMTc2LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJSMVY1SlREXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM1NTI0NjUzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDM2MjU0OTM4NzM0NTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lYRGhZUUdFTU85bjdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXJiQWJYb3dvbkpUaTVra0RvbFZoQzQ4enN1YVlVTHROUEwrU3VsS00xbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmVkpHTnQxWUpncDVDZXJpcHRxMXV5S3RaMHJOOGNIV1FqYzBlVHY1VU9jckRjVUJsV0xlSjhXMllIWUxJVnZ1Z3lydEkyRTlKbU1kQmNjeUc2RlVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaUHREdTFacTh2RlhLOG9xaENyZGxjYjhFd0xqZFpuRDVkU2Vienh0STFGbkJUMlQ3Wmd5eHIrditHK1QvTTVPZE1PQnBJQTdOWUl3QTl0eVl2UXNBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM1NTI0NjUzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjc3NTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkthXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKS2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqTTlmYmhNMFFqZEx0RDI4V3lVUi9LTmU0TmpyNVhrU2ZJU1RzUkxndEdFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTkwOTE4NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNzc0OTU5NDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
