const fs = require('fs')
const filedir = process.cwd()+'/'

const config = JSON.parse(fs.readFileSync(filedir+'source/config.json'))
const urls = {}

let markCounter = 0
const urlsLength = config.urls.length
let urlsList = `| Name | Target link | Mark link |\n|------|------------|------------|\n`
for(const u of config.urls){
  for(const m of u.mark){
    if(urls[m]){
      console.warn('\t- 遇到重复标记: '+m+', url: '+u.url)
      continue
    }
    urls[m] = u.url
    markCounter++
  }
  urlsList += '| '+u.name+' | '+u.url+' | '+u.mark.map(m=>config.baseUrl+'#'+m).join(' |\n|  |  | ')+' |\n'
}
config.urls = JSON.stringify(urls)
let webpage = fs.readFileSync(filedir+'source/index.html').toString()
for(const key in config){
  const reg = new RegExp('```'+key+'```', 'g')
  webpage = webpage.replace(reg, config[key])
}
fs.writeFile(filedir+'index.html',
  webpage,
  (err) => {
    if (err) {
      return console.error(err);
    }
  })
fs.writeFile(filedir+'urlsList.md',
  urlsList,
  (err) => {
    if (err) {
      return console.error(err);
    }
  })
console.log('Success: 共计生成 '+urlsLength+' 个地址，'+markCounter+' 个标记。')