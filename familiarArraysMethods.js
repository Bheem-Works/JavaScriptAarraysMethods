
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

	// Mapping : map is the methods to get the value from the arrays and change the whole vlaue. 
	let mapNum = [1,2,3];
	let mapSum = mapNum.map((n)=> n + 1);
	console.log(mapSum);

	// reduce : Reduce methods is use to calculate the number with the accumlator
	let digitNumber = [1,2,3];
	let digitTotal = digitNumber.reduce((total,currentVal) => total + currentVal); // we can also set the intial value by using the ,0 > value; 
	console.log(digitTotal);

	// Math.Max by using the reduce Methods 
	let digitMax = [1,2,4,5];
	let digitMaxTotal = digitMax.reduce((a,b) => Math.max(a,b), -Infinity);
	console.log(digitMaxTotal);

	// Find the max number by using the loops no shortcuts. 
	// Store the numbers and the values
	let store = [1,2,3,4,5]; 
	let assumeMax = store[0]; // taking the first index to compare with the big number at the start and later change it; 

	for(let i = 0; i < store.length; i++) {
	if(store[i] > assumeMax) { // comparing the store value to the assumeMax.
	assumeMax = store[i]; // the value change each time so, we will assing value and  when it's change then compare with the big numbers again. 
	}
	}

	console.log(assumeMax); // output should be the 5; 

	// some > it is used to find the some of the numbers and match it to the conditions; looks for single match if it is match then return true;
	let someArr = [1,2,3,4,5,6];
	let findSome = someArr.some((n)=> n > 5);
	console.log(findSome);

	// every > it is used to loop through from the every match of the arrays if it is not valid or equal then return the false;
	let everyArr = [1,2,3,4,5];
	let findEveryArr = everyArr.every((n) => n % 2 === 0);
	console.log(findEveryArr);

	// find > find is used to find the value between of the arrays;
	let findMan = [
	{name:'vim',quality:10},
	{name :'bhim',quality:100},
	]
	let find = findMan.find((s) => s.name === 'vim');
	console.log(find);

	// fill Methods : fills methods is used for fill the value inside of the arrays;
	let fillArrays = [1,2,3,4,5];
	fillArrays.fill('vim');
	console.log(fillArrays);
	
	// increasing number from the fill methods;
	function findNumber(n){
	return Array(n)
		.fill(0)
		.map((_,idx)=>idx + 1)
	}
	console.log(findNumber(11));
 	

	// Arrays from is a methods which is used to convert the object or the value to the an arrays objects;
	const str = '1,2,3,3,4,5,6,7';
	const strArr = Array.from(str,Number); // converting to the array first and after that converting them to Numbers;
	console.log(strArr);

	// Set Methods : Set methods is used for remove the duplicate by default; 
	const duplicateValue = [1,2,3,4,1,2,3,];
	const removeDuplicate = Array.from(new Set(duplicateValue));
	console.log(removeDuplicate);

	// isArray : isArray methods is used for check that the objects or the value is arrays or not? if it is then true or false; 
	let isaArray = [1,2,3,4];
	let validArray = Array.isArray(isaArray); // checking if it is array or not.
	console.log(validArray);

	// copyWithin : copWithin methods is used for copy the value from and arrays it doesn't change the arays value it just copy
	// (targetValue)
	// (tartgetValue,startIndex);
	// (targetValue,startIndex,endIndex);
	let noneCopy = ['banana','orange','pinapple'];
	let copied = noneCopy.copyWithin(0,1);
	console.log(copied);
	
	// copyin the value or swappig inisde to the elements;
	let number = [1,2,3,4,5,6];
	let copiedNumber = number.copyWithin(0,2,4);
	console.log(copiedNumber);

	// reverse : reverse methods is used for reverse the value of the arrays;
	let reverseNum = [1,2,3,4];
	console.log(reverseNum.reverse());
	
	// value of : value of returns the primitive value of an objects like a string boolean,numbers and other's data types;
	let strValueOf = new String('vim');
	console.log(strValueOf);
	console.log(strValueOf.valueOf());

	// Entries : entries doesn't take any parameter.Return a new arrays irritates the objects.
	const foodEntires = ['apple','juice','mango'];
	const foodNameEntries = foodEntires.entries();
	for(let foodData of foodEntires){
	console.log(foodData);
	}

	// keys : keys methods are also same like a entries it also loop through and irritates the objects but give the key index value.
	let key = ['house','bike','car','helicopter'];
	let keyMethods = key.keys();
	for(let keysStore of keyMethods) {
		console.log(keysStore);
	}
	
	// values : values methods is used to give the directs value of an objects or an arrays;
	let weather = ['hot','cold','medium'];
	const valueWeather = weather.values();
	console.log(...valueWeather);

	// reduce left and the reduce right. it is the same as the reduce but it reduce from the right or the left
	let numReduceRight = [1,2,3,4,5];
	let reducingRight = numReduceRight.reduce((a,b) => a + b);
	console.log(reducingRight);

	// flat map : flat is used to remove the nested arrays. by using the flat map methods we don't have to used the flat after the map; 
	// for examples :
	const flating = [[1,2,],[3,4]];
	const flatMapping = flating.flatMap((array)=>{
	return [array[0] + array[1]];	
	})
	console.log(flatMapping);

	// nested falted examples;
	let flatArr = [1,2,3];
	let arrFlat = flatArr.flatMap(x => [[x * 2]]);
	console.log(arrFlat);

	// at() methods In arrays : at methods is the relativing index like a arrray.length;
	let everest = ['mountFuji','mountKali','mountReti'];
	const atEverest = everest.at(-1);
	console.log(atEverest);
        
        // .length is the property of the arrays; 
        // the Difference between the property and the arrays is that : 
        // Properties:
        // A property is a value associated with an object or array. It describes a characteristic or data of the object.
        // For arrays, .length is a property that indicates the number of elements in the array.
        // Properties are accessed with a dot notation (e.g., array.length) and do not require parentheses.
        // They can be read (and sometimes modified), but they don’t perform actions.
        // Methods:
        // A method is a function associated with an object or array. It performs an action or computation on the object.
        // For arrays, examples include .push() (adds an element), .pop() (removes the last element), or .map() (transforms elements).
        // Methods are called with parentheses (e.g., array.push(4)), often with arguments, and they execute a specific task.

