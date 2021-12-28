// const CrystalMaiden = {
//     name : "Crystal Maiden",
//     attack : 57,
//     health : 520,
//     energy : 5,
// };

// const Rubick = {
//     name : "Rubick",
//     attack : 57,
//     health : 520,
//     energy : 5,
// };

// const Viper = {
//     name : "Viper",
//     attack : 57,
//     health : 520,
//     energy : 5,
// };

// const Invoker = {
//     name : "Invoker",
//     attack : 57,
//     health : 520,
//     energy : 5,
// };

// const Puck = {
//     name : "Puck",
//     attack : 57,
//     health : 520,
//     energy : 5,
// };

// // OOP
// // Untuk membuat boiler platenya

// // bentuk function normal

// function Hero(name, attack, health, energy) {
//     return {
//         name : name,
//         attack : attack,
//         health : health,
//         energy : energy,
//     }
// };

// // bentuk function arrow
// const Hero = (name, attack, health, energy) => ({name : name, attack : attack, health : health , energy : energy});

// const CrystalMaiden = Hero('Crystal Maiden', 57, 520, 5);
// const Rubick = Hero('Rubick', 57, 520, 5);

// OOP
// untuk membuat boiler plate

// default skills yg dimiliki semua hero
class HeroCreation {
  constructor(name, attack, hp, mp, defense) {
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.mp = mp;
    this.defense = defense;
  }
}

// class untuk skilllnya dinamis / bisa menambahkan skill lainnya dgn parameter props
class DetailHero {
  constructor(props) {
    this.props = props;
  }
  // method menyerang
  doAttack() {
    if (this.mp > 0) {
      this.mp = this.mp - 1;
      return this.attack;
    } else {
      alert('energi habis');
      return 0;
    }
  }
  // method terserang
  attacked(damage) {
    if (this.hp > damage) {
      this.hp = this.hp - damage;
    } else {
      this.hp = 0;
    }
  }
}

// cara menginheritance / mengambil nilai dari paretnya yaitu class DetailHero
class Hero extends DetailHero {
  constructor(props) {
    super(props);
  }
}

let CrystalMaiden = new HeroCreation('Crystal Maiden', 57, 520, 5, 10);
CrystalMaiden = new DetailHero({ ...CrystalMaiden });

let Invoker = new HeroCreation('Invoker', 52, 520, 5, 10);
Invoker = new DetailHero({ ...Invoker, listSkills: { qwe: '', eee: 'sunstrike' } });

console.log(Invoker.props.hp);
console.log(CrystalMaiden);

// polymorphism
// suatu method yang dibuat untuk merubah method dari parentnya

// encapsulation
// untukm deklarasi suatu property atau method itu private atau public.

// abstraction
//
// const CrystalMaiden = new Hero('crystal maiden', 57, 520, 5);
// const Rubick = new Hero('Rubick', 240, 520, 5);

// CrystalMaiden.doAttack();
// CrystalMaiden.doAttack();
// CrystalMaiden.doAttack();

// CrystalMaiden.attacked(Rubick.doAttack());
// CrystalMaiden.attacked(Rubick.doAttack());
// CrystalMaiden.attacked(Rubick.doAttack());
// CrystalMaiden.attacked(Rubick.doAttack());
// CrystalMaiden.attacked(Rubick.doAttack());
// CrystalMaiden.attacked(Rubick.doAttack());
// CrystalMaiden.attacked(Rubick.doAttack());
// console.log(CrystalMaiden);
