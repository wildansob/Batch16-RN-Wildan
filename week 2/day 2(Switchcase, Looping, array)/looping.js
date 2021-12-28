// Looping
// Looping adalah Perulangan

const totalStudent = 22;

//for
//for (let index =0; index <= totalStudent; index++) {
 //   console.log('nilai dari ' + index);
//}

// for (let index =50; index >= totalStudent; index--) {
//     console.log('nilai dari ' + index);
// }

//while
// let index = 0
// while (index <= totalStudent) {
//     console.log("hallo");

//     index += 1;
// }

//Do while
// let index = 23
// do {
//     console.log('do while' + index);
//     index--;
// } while (index > totalStudent);

//

// for (let i= 5; i >= 1; i--) {
//     let bintang =""

//     for ( let j = 0; j < i; j++) {
//         bintang = bintang + "*"
//     }
//     console.log(bintang)
// }

// for (let i= 5; i >= 1; i--) {
//     let bintang =""

//     for ( let j = 0; j < i; j++) {
//         bintang = bintang + "*"
//     }
//     console.log(bintang)
//}

//
const totalColumn = 10
// for (let i= totalColumn; i >= 1; i--) {
//     let bintang =""

//     for ( let j = 0; j < i; j++) {
//         bintang = bintang + " "
//     }
//     for (let k = 0; k < totalColumn; k++) {
//         bintang = bintang + "*"
//     }
//     console.log(bintang)
// }

// const y = 6;
// for (int i = 1; i<=6; i++) {
//     for (int j = y-1; j>=1; j--){
//     console.log("");
//     }
//     for (int d = i; d>0; d--){
//     console.log(d);
//     }
//     console.log();
//     y-=1;
    
// }

// bintang persegi panjang
function persegiPanjang(jumlah) {
    let hasil = '';
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= jumlah; j++) {
            hasil += '*';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(persegiPanjang(27));