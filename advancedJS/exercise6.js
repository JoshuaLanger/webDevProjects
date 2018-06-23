//Evaluate these:
//#1
[2] === [2] // false (not true)
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // a.value = 4 (not 5)
const object2 = object1; // a.value = 4 (not 5)
const object3 = object2; // a.value = 4 (not 5)
const object4 = { a: 5}; // a.value = 5
object1.a = 4; // a.value = 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
	sound() {
		console.log(`moooOOOOooo! I'm ${this.name} the ${this.type}, and mooooy color is ${this.color}.`);
	}
}

class Mammal extends Animal {
	constructor(name, type, color) {
		super(name, type, color);
	}
	layEggs() {
		if (this.type === 'platypus') {
			let rand = Math.floor(Math.random() * 6);
			console.log(`You laid ${rand} eggs`);
		} else console.log(`Unless you're a platypus, you can't lay eggs.`);
	}
}

let cow = new Mammal('Beth', 'cow', 'red');
let perry = new Mammal('Perry', 'platypus', 'turquois');

cow.sound();
cow.layEggs();
perry.layEggs();