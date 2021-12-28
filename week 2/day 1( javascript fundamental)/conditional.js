// conditional
// adalah cara menjalankan suatu program berdasarkan true / falsenya

// blocking
// adalah pembatas suatu baris code

// if
const myName = 'wildan';

if (myName === 'wildan') {
  console.log('hallo wildan');
} else if (myName === 'mas audy') {
  console.log('halo mas audy');
} else {
  console.log('Anda Hantu kali ya');
}

// switch case
switch (myName) {
  case "audy": 
      console.log("audy");
      break;
  case "kelvin":    
      console.log("Hallo Kelvin")
      break;
  default:
      console.log("siapa lu")
    break;
}

const angka: 8;

switch (true) {
  case angka % 2 === 0:
    console.log("ini angka genap");
    break;
    case angka % 2 === 1;
    console.log("ini angka ganjil");
    break;

  default:
    console.log("masukan angka dong");
    break;
}
// ternary operator
