module.exports = function getZerosCount(number) {
	let i = 0;
 for(;number >=5 ;)
 {
 i += Math.trunc( number/5 );
 number = Math.trunc( number/5 );
 
}
return i;
}