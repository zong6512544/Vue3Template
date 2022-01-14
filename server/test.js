const FS = require('fs')

const files = FS.readdirSync(__dirname)

let filesStr = "[ \n"
files.forEach((item, index) => {
  filesStr += `"${item}",\n`
})
filesStr += "]"

FS.writeFile('z.txt', filesStr, 'utf-8', () => {
  console.log('')
})