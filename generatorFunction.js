	
	// generator function is the special types of the function that can be the pause and the resume, allowing it generated sequence 
	// of value over times rather than computing that at once. 
	// In roman nepali : generataed function vaneko auta special function jasma chai hami value lai pause ra resume grnu skchu.  
	// yesma chai sequence line by line code run hunca ekai choti hunu bhnda. Sequence anushar code run hunca.

	// Quick recap :
	// syntax : function*
	// .next() : to move to he next yeild 
	// yeild : to pause or resume
	// Basics Examples :
	function* myGenerator(){
		yield 1;
		yield 2;
		yield 3;
	}
	
	const gen = myGenerator();
	console.log(gen.next());
	console.log(gen.next());

	// trying to the real examples: 
	function* mySum(){
		yield 1 + 2;
		yield 2 + 3;
	}
	const sumGen = mySum();
	console.log(sumGen.next());
	console.log(sumGen.next());
