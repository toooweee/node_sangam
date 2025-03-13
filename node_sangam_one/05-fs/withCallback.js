const fs = require('fs');
const path = require('path');

const fileName = 'callback.txt'

fs.writeFile(path.join(__dirname, fileName), 'writed file async but with callbacks',(err) => {
  if (err) console.log(err)

  fs.readFile(path.join(__dirname, fileName), { encoding: 'utf-8'}, (err, data) => {
    if (err) console.log(err)
    console.log(data)
  })
})