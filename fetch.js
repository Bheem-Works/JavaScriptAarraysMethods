

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
