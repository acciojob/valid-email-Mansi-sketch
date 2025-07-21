function validEmail(str) {
  //your JS code here.
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(str);
}



const str = prompt("Enter an email address.");
alert(validEmail(str));
