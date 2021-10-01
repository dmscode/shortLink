const fs = require('fs')
const filedir = process.cwd()+'/'

const urlsSource = JSON.parse(fs.readFileSync(filedir+'source/urls.json'))
const urls = {}

let markCounter = 0
for(const u of urlsSource){
  for(const m of u.mark){
    if(urls[m]){
      console.warn('\t- 遇到重复标记: '+m+', url: '+u.url)
      continue
    }
    urls[m] = u.url
    markCounter++
  }
}
const webpage = fs.readFileSync(filedir+'source/index.html').toString().replace(/```urls```/, JSON.stringify(urls))
fs.writeFile(filedir+'index.html',
  webpage,
  (err) => {
    if (err) {
      return console.error(err);
    }
  })
  console.log('Success: 共计生成 '+urlsSource.length+' 个地址，'+markCounter+' 个标记。')