function checkData()
{
    var enteremail = document.getElementById('email').value;
    var enterpwd = document.getElementById('pwd').value;

    var getemail = localStorage.getItem('useremail');
    var getpwd = localStorage.getItem('userpwd');

    if (enteremail == getemail)
    {
        if (enterpwd  == getpwd)
        {
            window.location.assign("Home.html");
            alert("Login Successful");
        }
        else
        {
            alert("Wrong Password")
        }
    }
    else
    {
        alert("Invalid Details");
    }
}