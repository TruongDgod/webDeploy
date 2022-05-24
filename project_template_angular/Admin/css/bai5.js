function validateForm()  {
    var u = document.getElementById("Username").value;
    var p = document.getElementById("Password").value;

    if(u== "") {
        alert("Please enter your Username");
        return false;
    }
    if(p == "") {
        alert("Please enter you Password");
        return false;
    }

    alert("All datas are valid!, send it to the server!")
    u.style.label.top = "-25px"
    p.style.label.top = "-25px"
    return true;
}