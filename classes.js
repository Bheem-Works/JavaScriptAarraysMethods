		
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

		*getSlides(){
	 	yield this.height;
		yield this.width;
		yield this.height;
		yield this.width;
		}
	}

	const square = new Rectangle(10,10); // new : create a new objects based on the constructor functions or the class.
	console.log(square.area());

