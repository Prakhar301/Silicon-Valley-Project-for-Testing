var user=localStorage.getItem("User_name");
document.getElementById("Welcome").innerHTML="Hi, "+user;
function book(){
    window.location="books.html";
}
function movie(){
    window.location="movies.html";
}
function game(){
    window.location="games.html";
}