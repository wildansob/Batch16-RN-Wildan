//comparison hanya akan mengembalikan nilai boolean

const angka18 = 18
const angka15 = 15
const angka21 = 21
const nama = "Wildan"
const myFriendName = "mas audy"



// <
const  isLessThan1 = angka18 < angka20
// >
const  isLessThan1 = angka18 > angka20

// >=
const  isLessThan1 = angka18 >= angka20

// <=
const  isLessThan1 = angka18 <= angka20

// ==
const isTrue = 18 == "18"
console.log(isTrue, "ini yang sama dengan 2");
// == 
//tidak perduli tipe datanya sama atau beda hasilnya akan true

// ===
//untuk membandingkan dengan tipe data yang sama lebih baik pake ===
//array di bandingkan dengan array akan false

// ||
    const isTrue3 = 18 === "18" || 24 < 20 || angka18 >= angka15
// &&