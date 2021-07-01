function saveToFirebase(){
	const data = document.getElementById('emailForm').elements[0].value;
  if(ValidateEmail(data)){
		document.getElementsByName('email_add')[0].value="";
		document.getElementsByName('email_add')[0].placeholder = '...';
		database.ref('emails').push({ email: data}).then(function(snapshot){pass();}, function(error){console.log('error' + error);fail();});
  }
}

function ValidateEmail(mail)
{
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
      return (true);
    }
    else{
	    return (false);
    }
}


function fail(){
	document.getElementsByName('email_add')[0].value="";
	document.getElementsByName('email_add')[0].placeholder = 'Invalid email!';
}

function pass(){
	document.getElementsByName('email_add')[0].value="";
	document.getElementsByName('email_add')[0].placeholder = 'Thank you!';
}
