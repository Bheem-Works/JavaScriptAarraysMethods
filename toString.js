	

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
