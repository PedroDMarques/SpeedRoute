export default function reducer(state={
	"rate": 0,
}, action){

	switch(action.type){
		case "INC": return inc(state, action);
		case "DEC": return dec(state, action);
	}

	return {...state};

}

function inc(state, action){
	let newRate = state.rate + 1;
	if(newRate > 5)
		newRate = 5;

	return {...state, "rate": newRate}
}

function dec(state, action){
	let newRate = state.rate - 1;
	if(newRate < 0)
		newRate = 0;

	console.log("new rate: " + newRate);
	return {...state, "rate": newRate}
}