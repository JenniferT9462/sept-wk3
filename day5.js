// Day 5: Constructor vs. Factory Functions, Prototype methods and 
// simple inheritance chain

//1. Constructor Function
function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;

}

//Create a new Animal
const dog = new Animal("Rufus", "Dog", 2);
console.log(dog);

//Add a color property to dog Animal object
dog.color = "Black";
console.log(dog);

//Universal constant property added to the prototype
Animal.prototype.isMammal = true;
console.log(dog.isMammal);

// 2. Factory Function to create pets
function createPet(name, species, age) {
    return {
        name: name,
        species: species,
        age: age,
    }
}

//Call the createPet() and save it to a variable
const cat = createPet("Fluffy", "Cat", 2);
console.log(cat);


// 3. Prototype Method
Animal.prototype.speak = function() {
    return `${this.name} wants to say hello!`;
}
console.log(dog.speak());

// 4. Inheritance 
function Cat(name, species, age) {
    Animal.call(this, name, species, age)
}

//Inherit methods from Animal
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

//Adding new method to Cat
Cat.prototype.meow = function() {
    return `${this.name} meows: "Meow!"`;
}

// Create an instance 
const myCat = new Cat("Fluffy", "feline", 2);

console.log(myCat)
console.log(myCat.meow());





