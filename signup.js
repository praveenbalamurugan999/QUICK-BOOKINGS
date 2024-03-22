function addData()
	{
		var name = document.getElementById("name").value;
		var email = document.getElementById("emailid").value;
		var pass = document.getElementById("passwd").value;

		localStorage.setItem('username', name);
		localStorage.setItem('useremail', email);
		localStorage.setItem('userpwd', pass);
	}