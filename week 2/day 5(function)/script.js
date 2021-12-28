// Event
// adalah kondisi kapan baris code akan dijalankan

// onload
// ketika javascript berhasil dibaca maka jalankan event onload

// onclick
// ketika ada suatu elemen yg di click

// onchange
// ketika ada inputan yang diketik
// saat ngetik email di form login

// onfocus
// ketika masuk ke dalam suatu inputan 

// onblur
// ketika keluar dari suatu inputan

// function
// adalah kumpulan baris code yang dijalankan berdasarkan event tertentu
// function tidak akan dijalankan selama tidak dipanggil pada event tertentu
// membungkus baris code untuk dijalankan berdasarkan event tertentu

console.log("day 5");

// kenapa sih paka function
// konsep 1. DRY (Don't repeat Yourself), tidak perlu mengulang baris code
    // karna function dapat menerima banyak paramater / argumen

// suatu variabel yang menerima value
// return meberikan nilai tambahan pada variabel

// function wthout return
let listAngka = []
function addToList(angka) {
    for (let index = 0; index < angka +1; index++) {
            listAngka.push(index)
    }
}

    addToList(8)
    console.log(listAngka);

// function with return
    function add(number1, number2, haha) {
        return number1 * haha + number2
    }

    const hasil = add (45, 60, 70)
    console.log(hasil, "hasil");
    // const number = prompt ("masukkan angka anda")
    // console.log(number);
    // add(46, 63, 90);
    // add(46, 63, 90);
    // add(46, 63, 90);

// 3 cara membuat function
// 1. 
//function name(params) {
    
// }

// 2
// const namaFunction = function () {
    // do a function stuff
// }

// 3
const namaFunction = (params1, params2) => {
     //do a function stuff
     return params1 + params2
}

const arrowfunction1parameter = params => {

}

// jika arrow hanya mereturn sesuatu
const arrowfunctionHanyaMereturn = (number1, number2, haha) => {
    return number1 * haha + number2
}

const arrowfunctionHanyaMereturnShortcut = (number1, number2, haha) => number1 * haha + number2

// callback
// adalah suatu function yang memiliki function lain sebagai parameternya
const calculate = (add, number1, number2) => {
    const total = add(number1, number2)

    return total * 2
}
const hasilCalculate = calculate((number1, number2) => {
    return number1 + number2
}, 52, 40)

console.log(hasilCalculate)

// method
const students = [
    {name : "audy", age : 18},
    {name : "wildan", age: 17},
    {name : "kelvin", age: 17},

]
 // read

 const students1 = students.forEach((student, index) => {
     return"dasdsa"
 })

 const students2 = students.map((student, index) => {
    student.age *=2
    student.maritalStatus = false 
    return student
 })

 console.log(students1, students2)


// 2. Mudah untuk refactor coding
    // karna baris code dibuat centralize
    // jika ada perubahan pada algoritmanya, cukup rubah functionnya

// 3. best performance, karna yang harusnya banyak jadi sedikit dengan function

// function testing() {
//     console.log("ini didalam function");
// }

// testing();

