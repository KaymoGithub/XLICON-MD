const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "27653224519"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'molebatsikamohelo0@gmail.com 
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '27653224519' 
global.devs = '27653224519';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/8ce1c8904608f255d23f6.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9IWVRWd1Frbjk5ajZ1eW52TjI4RUZFcjBBb3FRSXNZNlJYdW9oVG9rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTM3SVVnbXNrMy9qdUIrcnIzL05zd3B6VTZxZit6YkNoY3RxZnJSMWxWaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRHhmUGdjbHVBait3OG1DaFIzUHhuWGNOUTFSaEgvaXg2ZWN4ZFZvTkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOay94cDNUODZtY0JDL0lTRFA3RzhiUUlCNzhGMnN5TGcxRHFaM0dSUkFBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNOThITHR5M0RMNzdIZ1BGWk5pa1BqZFY3VjFya2E3MVlJS1dNd0ZHbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFqa082SG8rWDl6RXE0d0IxWE1CbGJBc2ttK00raWduV2orc01iTlJ2QmM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWHAzRUUxU3RWRFpwdzJCZ2RIQTRVejhFYzE2OTBCWHlLRGxabm1RL004TEN3cnMyeEgxSDcrWXh2dzBoSDVFQmNpREJMTC9kbnZ6UW5xWjhORnJoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjc4LCJhZHZTZWNyZXRLZXkiOiJsWmlma1Q2WUd3REhjUmxmTzJ5MVl3bU0yOHlPdDFmVmJ5N3dIMVAxTzRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRakdQMkllZlQ2ZTkyUFEzZExqanZnIiwicGhvbmVJZCI6Ijg0YzBlMjgwLTFkM2ItNDcxMS04MGQxLTIxMTg3N2YwMjFlNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQitOQ1hmS1RpVWdUTzU3VEl2V2FWekpNSFE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9HczZlMTdubnl6WDhGS2tOeTJLRi9hS0tPTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orU3U3a0hFTXk4emEwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNxQTNMMTVlbmoveEZFSStla2xkZW05WTZucVhqcWxDd29tcVNxTW80MFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVKQXJRWlNDa0t5L1RwNWx4d1ZrZ3FyVlI0L1Z3M3ZVdzJYRmF5THpKWlJIVmR1QXdFODU2cWhielIyWTNzWFhjOEtEWHRDNXNCY3VDYkRuY05CaEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlUDRRU0VyRXkxR2dEd0VFV3ZNWkNpdEMya3hCRk1xR2RCQjhaUzAzcnhuMEQ3ZWhrU29oTnVCS1Iya2Q2VHpVamFpK1Qrb2RDOEdPcGltdW9hVmlpQT09In0sIm1lIjp7ImlkIjoiMjc2NTMyMjQ1MTk6MTFAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NTMyMjQ1MTk6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDZnTnk5ZVhwNC84UlJDUG5wSlhYcHZXT3A2bDQ2cFFzS0pxa3FqS09ORiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNjI1MzkwM30=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ',
  packname:  process.env.PACK_NAME || '「Ø₮Ⱡ」Legend',
   
  botname:   process.env.BOT_NAME === undefined ? "Kay💯-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Kay' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
