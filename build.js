const fs = require('fs')
const filedir = process.cwd()+'/'

/** @type {Object} 读取配置文件 */
const config = JSON.parse(fs.readFileSync(filedir+'/config.json'))
/** @type {Object} 短地址映射关系对象 */
const urls = {}

/** @type {Number} 标记数量 */
let markCounter = 0
/** @type {Number} 设定中短地址总数 */
const urlsLength = config.urls.length
/** @type {String} 短地址表格的表头 */
let urlsList = `| Name | Mark | Target link |\n|------|-------|------------|\n`
/** 遍历配置中所有地址 */
for(const u of config.urls){
  for(const m of u.mark){
    if(urls[m]){
      console.warn('\t- 遇到重复标记: '+m+', url: '+u.url)
      continue
    }
    urls[m] = u.url
    markCounter++
  }
  urlsList += '| '+u.name+' | '+u.mark.map(m=>`[${m}](${config.baseUrl+'#'+m})`).join('<br>')+' | '+u.url+' |\n'
}
config.urls = JSON.stringify(urls)
let webpage = fs.readFileSync(filedir+'source/index.html').toString()
for(const key in config){
  const reg = new RegExp('```'+key+'```', 'g')
  webpage = webpage.replace(reg, config[key])
}
fs.writeFile(filedir+'docs/index.html',
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