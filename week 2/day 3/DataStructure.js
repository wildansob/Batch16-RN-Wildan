//datastructure terbagi menjadi

//array / list
// const students = ["wildan", "Audy", "kelvin", ]
// const students = [];
// // CRUD
//     // create
//         // unshift adalah menambahkan value pada awal array
//             students.unshift("audy");
//             console.log(students);

//         // push
//             // menambahkan value pada akhir array
//             students.push("kelvin")

//             console.log(students)

//         // spread operator
//             // students = [...students,"angga"]

//             // console.log(students)
//     // read
// //         console.log(students[0]);

//         //Latihan
//         // const students = ["audy", "wildan", "kelvin", [185, [["audy yang ini"]],[[[], ["angga", "hanna", ["nauval", "dany", [["dewi"]]]]]], 987, "hallo"] , {}, 456, false, undefined, null]
//        //daaptkan nilai hana
//         // console.log([3][2][0][1][1]);
//        // dapatkan nilai dany
//         // console.log([3][2][0][2][1]);
//        // dapatkan nilai dewi
//         // console.log([3][2][0][1][2][2][0][0]);

//     // update
//         students[2] = "audy pratama"

//     // delete
//     // shift untuk yang di awal
//         students.shift()

//         console.log(students)

//     // pop untuk yang teralhir
//         students.pop()
//         console.log(students)

//         const numbers = [1,2,3,4,5,6]

//         // for
//         for (let index = 0; index<6; index++ ){
//             console.log(numbers[index])
//         }

//         for (let index = 0; index < students.length; index++){
//             console.log(students[index]);
//         }

// object
// adalah pasangan key & value
let student = {
  name: 'audy',
  age: 18,
  kriteria: { height: '170cm', weight: '68 lbs' },
  hobbies: ['tidur', 'makan', 'scrolling tiktok', 'repeat'],
};
students = ['wildan', 'audy pratama', 'kelvin', 'hanna', student];

//CRUD
// Read
// dot notation
console.log(student.name);
console.log(student.age);
console.log(student.kriteria.weight);
console.log(student.hobbies[2]);
console.log(students[4].age);
console.log(students[4].hobbies[2]);
// bracket square notation
console.log(student['name']);
console.log(student['age']);
console.log(student['kriteria']['weight']);
console.log(student['hobbies'][2]);
console.log(students[4]['age']);
console.log(students[4]['hobbies'][2]);

// Create
// append
student.address = 'jalan kemayoran';

console.log(students);

// spread operator
student = { ...student, maritalStatus: true };

console.log(student);

// update
student.address = 'jalan jalan';

console.log(student);

// spread operator
student = { ...student, maritalStatus: false };

console.log(student);

// delete
delete student.name; //variabel name yg ke delete
delete student.kriteria;

console.log(student);

// buat lah satu object tentang biodata teman-teman,
// semua tipe data harus ada kecuali falsy value yg bukan 0 dan false
const wildan = {
  name: 'Wildan',
  age: '17',
  maritalStatus: false,
  specBadan: { height: '178 cm', weight: '78kg' },
  hobbies: ['makan lebih dari 3 kali porsi sedikit', 'futsal', 'badminton', 'photography'],
  citacita: 'dulu sih dokter cuma ga terwujud wkwkwk',
};
console.log('hallo nama saya ' + wildan.name);
console.log('umur bohong ' + wildan.age);
console.log('tinggi badanku ' + wildan.specBadan.height), console.log('berat badanku ' + wildan.specBadan.weight);
console.log('Salah satu hobiku ' + wildan.hobbies[0]);
console.log('cita-citaku ' + wildan.citacita);
