var password="r5A!@h6#";
function login(){
    var user_pass=document.getElementById("inputest").value;
    var name=document.getElementById("namer").value;
    document.getElementById("warning").innerHTML="";
    if(user_pass==""){
        if(name==""){
            document.getElementById("warning").innerHTML="Type your name and the password ";
        }
        else{
            document.getElementById("warning").innerHTML="Type the password";
        }
    }
    else{
        if(name==""){
            document.getElementById("warning").innerHTML="Type your name";
        }
        else{
            if(password==user_pass){
                window.location="select.html";
                localStorage.setItem("User_name",name);
            }
            else{
                document.getElementById("warning").innerHTML="Wrong Password";
            }
        }
    }
}