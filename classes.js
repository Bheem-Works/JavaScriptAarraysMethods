		
	// Classes in javascript (js) > Clasess are a template for creating and objects. They encapsule data code to work on the data. 
	// In fact : classes are special functions and just as you can define functions expressions and function declarations, a class can
	// can be defined in a two ways : class expresion and declarations.
	
	// Declarations : class calssName {}
	// Expressions : The class is anyomous const rectangle = class {}
	// Expressions : The class has it's own name > const rectangle = class rectangleTwo {}

	// A class elements characterized by the three aspects
	// Kind : Gitter,setter,methods or field
	// Location : Static or instance
	// Visibilty : public or private


	// #Constructor > Constructor is a special methods for creating and intializing an object created with a class.
	// Erros Throw if there is more thent the one constructors 

	// Methods 
	// Methods are defined on the prototype of each class instance and are shared by all instances.
	// Methods can be plain functions, async functions, generator functions, or async generator functions

	// !Note : we don't use the write the function inside the class because it is method's not a regular functions declarations; (Dry) 
	class Rectangle {
	constructor(height,width){
		this.height = height;
		this.width = width;
	}
		// Geter > Class elements aspects
		area(){
		return this.calcArea();
		}

		// Methods
		calcArea(){ 
			return this.height * this.width
		}

		*getSlides(){ // functions generators; 
	 	yield this.height;
		yield this.width;
		yield this.height;
		yield this.width;
		}
	}

	const square = new Rectangle(10,10); // new : create a new objects based on the constructor functions or the class.
	console.log(square.area());
		
	// Statics Methods Fields;
	// Statics Methods belongs to it's Self.
	// You can not tell them on an object Created  with new, but only on the class itself;

	class car {
	 static honk(){
	 console.log('beeep');
	 }
	}

	car.honk();


	//Field declerations : 	well, the Class fields are the similar to the objects. So, we don't use any let const varaibles declaration 
	// or a special keywords
	class fieldDeclerations {
	height = 0;
	width;
	constructor(height,width){
		this.height = height;
		this.width = width;
	}


	// Private Properties : it is not seen from the outside. it must be written and readen inside the class fields;
	

	// Inheritance;
	// Inhertiance means one class can reuse the properties and methods from the other's classes.
	

	// Simple examples in the javascript of the classes
	class Vehicle {
	    constructor(brand) {
		this.brand = brand;
    }

    start() {
        console.log(`this is a ${this.brand} is Startinggg....`);
		    }
		}

	class Car extends Vehicle { // Corrected from 'vechie' to 'Vehicle'
	    constructor(brand, model) {
		super(brand);
		this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} id driving...`);
    }
}

	const myCar = new Car('honda', 'shine');
	console.log(myCar.start());
	console.log(myCar.drive());
