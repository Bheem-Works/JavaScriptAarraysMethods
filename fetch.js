

	// This Code will be going to be An fetching asyncs and the promises methods with the basics examples. and defination;
	
	// Resolve : Resolve means when the data and value is sucessfully transfered; 
	// Error : Error means when the value or the data cannot be fetched then the errors occurs;
	// Promise : Promise is used to get the data value when the fetching is sucess. In other's words.
	// Chained promise methods : .then() , .catch(), .finally()
	const momPhone = new Promise((resolve,reject) =>{
	const vim = 'vim is not having fun today';
	if(0<vim.length) 
	setTimeout(()=>{
	reject('sorry man')
	}
	,1000)
	}
	)
	.then((result) => console.log(result))
	.catch((error) => console.log('Sorry we can not fetch the data'))


	// Asyncs Functions: Used to create a asyncFunction object. each time when asyncs functions is called, it returns 
	// a new promise which value will be return by the asyncs functions or rejected with an expections uncaught with it async functions. 
	// a function can contain zero or more await experssisons;
	// Asyncs functions make's a function that always return the promises.
	// Await helps to unpack and hold,pause the value until it resolve.

	// Try it!
	function resolveAfter2Seconds () {
	return new Promise ((resolve)=>{
	setTimeout(()=>{
	resolve("resolve")
	},2000)
	})
	} // it should return after the 2 seconds;

	async function asyncCall(){
	console.log('calling');
	const result = await resolveAfter2Seconds(); // Calling the resolveAfter2Seconds function.
	console.log(result);
	}

	asyncCall(); // Calling functions 

	// 🛠️ try
	//👉 try le risky code lai run garna try garcha.
	//👉 Yedi try vitra ko code ma kune error aayo bhane, tesko control catch ma jump garcha.
	//👉 Yedi try vitra error aayena bhane, catch run hudaina.

	//🚨 catch
	//👉 catch le try vitra aako error lai handle garna help garcha.
	//👉 Yo error object ho jasle error ko message, stack trace, etc. dincha.
	//👉 Yedi try vitra error aayena bhane catch run hudaina.

	//🎯 finally
	//👉 finally le chai try ra catch vitra error ayo ya aayena — dono case ma run huncha.
	//👉 Yo mostly cleanup ko lagi use huncha (e.g. closing connection, clearing timers).
	//👉 Euta example: Suppose try vitra file open gareko cha, tyo close garna finally use garincha.


	// Examples ones: 
	
	try{
	try{
	throw new Error("Yesh i have ac");
	} catch (hot){
		console.log(hot.message)
	} finally {
		console.log("Finally we have Ac");
	}
	} catch (hotErr) {
		console.log(hotErr.message)
	}


	// Examples two with the anyomous functions; 
	
	// Examples two with the anyomous functions;

	/// Use the anyomouse function for the single calls and fast and protoype prupose.
	(()=>{ // Immedaitely involked function 
	try{
	try{
		throw new Error("I am at roof");
	}
		catch(roof){
			console.log(roof.message);
		}
		finally{
			console.log("finally i am at the roof");
			}
	} catch (err){
		console.log(err.message)
	}
	})();
