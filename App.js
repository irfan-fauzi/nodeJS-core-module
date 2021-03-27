// node js core module
// 1. File sistem

//const fs = require('fs');

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

// cara 1. pakai async await
// const asyncFs = require('fs').promises;

// async function loadFile() {
//   const myData = await asyncFs.readFile('data/hello.txt');
//   return myData.toString()
// }
// loadFile().then(res => console.log(res));


// cara 2

// fs.readFile('data/hello.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// readline single question

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('siapa nama anda ?', (jawaban) => {
//   // TODO : log the jawaban ke database
//   console.log(`terimakasih  ${jawaban}, selamat menikmati`);
//   rl.close()
// })

// readline multiple question :
// cara callback hell ------------------------------------------------------------------------

// menuliskan string ke file sync
// try {
//   fs.writeFileSync('data/hello.txt', 'yayayya');
//   console.log('successfully');
// } catch (err) {
//   // handle the error
//   console.log("gagal")
// }
const fs = require('fs');
const readline = require('readline');


// let arrObj = [
//   {
//     name: "irfan",
//     email: "rfan@yahoo.com"
//   },
//   {
//     name: "asdasd",
//     email: "rfanasd@yahoo.com"
//   },
//   {
//     name: "irfasdc",
//     email: "rfansad@yahoo.com"
//   },

// ]

// let data = JSON.stringify(arrObj);
// fs.writeFileSync('data/dataBaru.json', data);







const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`silahkan masukan nama anda : `, (nama) => {
  rl.question(`masukan nomor telp anda : `, (noHp) => {
    const dataObj = { nama, noHp };
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    // console.log(contacts)
    contacts.push(dataObj)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
  // console.log(contacts)
    rl.close();
  });
});


















//------------------------------------------------------------------------------------------

// cara 2, dengan promise 
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const question1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question(`masukan nama anda : `, (nama) => {
//       console.log(`terimakasih tuan ${nama}`)
//       resolve()
//     });
//   });
// }

// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question(`masukan hp anda : `, (hp) => {
//       console.log(`terimakasih, nomor hp anda : ${hp}`)
//       resolve()
//     });
//   });
// }

// const main = async () => {
//   await question1()
//   await question2()
//   rl.close()
// }

// main();





