	

	// This is the toString() Methods of the arrays;
	// toString methods is used for to conver an array object to the 

	// The examples of the toString() methods in the arrays are. 
	let cat = ['miso','jiso','tiso'];
	let catString = cat.toString();
	console.log(catString);

	// time show by using the toString Methods;
	let time = new Date();
	console.log(time.toString());


	// Concat 
	let copyCat = ['miso','jiso','limo'];
	let copyCatOne = ['rone','prone','prob'];
	let copyCatTwo = ['jesicca','miro','shifini'];
	const concat = copyCat.concat(copyCatOne,copyCatTwo);
	console.log(concat);

	// join 
	const bora  = ['bhim','miso'];
	console.log(bora.join('and'));

	// splice : splice is used to extrac the value from the arrays. !Note it : splice change the original value of the arrays;
	const spliceName = ['john','danel','savin'];
	const copyName = [...spliceName] // copying the name by using the spread operator...;
	copyName.slice(1,1);
	console.log(copyName);

	// slice : slice is used to extract the value from the arrays it doesn;t change the actuall value or the objects.
	const sliceName = ['vim','man','turu'];
	const changeSlice = sliceName.slice(1,3);
	console.log(changeSlice);


	// index of : to find the index of the arrays.
	let indexArr = ['chasma','bolna','mildaina'];
	const indexFind = indexArr.lastIndexOf('chasma');
	console.log(indexFind);

	// flat : flat method is used int the js to get the value of the nested arrays;
	// fun fact : (this is the new thing's that i learned in this - hahahah)
	let flat = [1,2,3,[4,5,[8,9]],6];
	const flaTed = flat.flat(2);
	console.log(flaTed);

	// Higher order function is a function that helps to operate to the another functions.
	// for Each methods is used to loop through from the value of the every index of the of the arrays; 
	let eachNumber = [1,2,3,4,5];
	eachNumber.forEach((n)=>{
	console.log(n);
	})
