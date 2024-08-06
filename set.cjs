// GIFTED TECH //
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "SUHAIL_09_12_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieEZOdXVmYnNRYWJicFprY3VodStQU1FFVkhSb21TWWRpZzhFYjJXZlVyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM3MDE0MDE3MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGQTQ1RkY3MzA3MEU2NEU3MDc5RTU2MzM1NUY1Qjg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjkzNTUyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRdE5yb2RfVlItbTRtX3pZSVd1dV9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5NDA1ZmQ4LWVmNTctNDJlYS04YjA4LTEwYTFiOTMyZGM1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDEyLFxuICAgICAgMTM3LFxuICAgICAgNzUsXG4gICAgICAxMzcsXG4gICAgICA4MixcbiAgICAgIDEyNixcbiAgICAgIDExMixcbiAgICAgIDIxNixcbiAgICAgIDEyMyxcbiAgICAgIDg5LFxuICAgICAgMTY2LFxuICAgICAgMTc5LFxuICAgICAgNTYsXG4gICAgICAyMSxcbiAgICAgIDE2MyxcbiAgICAgIDEyMixcbiAgICAgIDE1NixcbiAgICAgIDIwNyxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgOSxcbiAgICAgIDQ5LFxuICAgICAgMTA2LFxuICAgICAgMzQsXG4gICAgICA4NixcbiAgICAgIDU5LFxuICAgICAgODIsXG4gICAgICAxMDAsXG4gICAgICAyMjAsXG4gICAgICAzOCxcbiAgICAgIDI0MSxcbiAgICAgIDE1NixcbiAgICAgIDIzOSxcbiAgICAgIDEyMCxcbiAgICAgIDE5LFxuICAgICAgNjEsXG4gICAgICAxODEsXG4gICAgICAzLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFh4MXVzRUVOdlJ4N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTTUhMVkRsU0s4dkI4ZDA4YURZMU5ORE1XYWdBOEFOS0RNT0lCTG91UTFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5VcmFRUXBKM2FsY0ZFeWorK1BENDlpdGxML2dBNDF2Q3IzeUFZUlQvZHNwOUN5aFJkOTVQU1RvbzM4R2VaYnB2OXBiL05TbDJkcDZFa21nR1A3Y0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjh3ZDErU0FKK25pbUZraUx4a1BHUEs1WkwrRFh1OHNtSUJabVl5MlBNN2ZYTEZyZDJpcE5sbUhOSlZwTnV2ZEtGNXlnMFNkTUtpaHFuRzUvVXVEL0JBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNzAxNDAxNzE3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiY2hhcmFjdGVyIGxlc3NcIixcbiAgICBcImxpZFwiOiBcIjU1NDk1MDA0MjQyNjA6MzBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM3MDE0MDE3MTc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5MzU1MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLcEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtwRy5qc29uIjogIntcImtleURhdGFcIjpcIklUbnpXWnhHOVU0MUN0bFk4UHphSmpJQk1SVTZwUS9YcVN3UEw1UnhmVkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5OTU2MDY5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTM1NTIzMTA5XCJ9Igp9",
  HEROKU_API_TOKEN: process.env.HEROKU_API_TOKEN || "HRKU-0a1fe665-8a35-42e8-b7ad-761f25ffe195",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  KOYEB_API_TOKEN: process.env.KOYEB_API_TOKEN || "",
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || "",
  DEPLOYMENT_PLATFORM: process.env.DEPLOYMENT_PLATFORM || "",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS !== undefined ? process.env.AUTO_READ_STATUS === 'true' : true, 
  AUTO_STICKER: process.env.AUTO_STICKER !== undefined ? process.env.AUTO_STICKER === 'false' : false,
  AUTO_DOWNLOAD: process.env.AUTO_DOWNLOAD !== undefined ? process.env.AUTO_DOWNLOAD === 'false' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  AUTO_REJECT_CALLS: process.env.AUTO_REJECT_CALLS !== undefined ? process.env.AUTO_REJECT_CALLS === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || 'public',
  PREFIX: process.env.PREFIX || '.',
  PORT: process.env.PORT || "5000", /* Where App Will Listen On */
  OWNER_NAME: process.env.OWNER_NAME || "𝕄ℝ   𝕋   𝕆   ℍ   𝕀   𝔻",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "917849917350",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,
};


module.exports = config;
