// node js core module
// 1. File sistem

const fs = require('fs');

// menuliskan string ke file sync
// try {
//   fs.writeFileSync('data/hello.txt', 'yayayya');
//   console.log('successfully');
// } catch (err) {
//   // handle the error
//   console.log("gagal")
// }

// menulis secara Async

// fs.writeFile('data/async.js', console.log('okdd'), (err) => {
//   if (err) throw err;
//   console.log('berhasil')
// });


// membaca file secara sync
//fs.readFileSync('data/hello.txt');

// membaca file secara Async
const asyncFs = require('fs').promises;

async function loadFile() {
  const myData = await asyncFs.readFile('data/hello.txt');
  return myData.toString()
}
loadFile().then(res => console.log(res));
