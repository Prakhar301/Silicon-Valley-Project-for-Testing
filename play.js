function back(){
    window.location="games.html";
}
var game=localStorage.getItem("game");
if(game=="11-11"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://gamesnacks.com/embed/games/11-11'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing 11-11";
}
if(game=="2048"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://play2048.co/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing 2048";
}
if(game=="archery"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://gamesnacks.com/embed/games/archery/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing archery";
}
if(game=="99 balls"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://gamesnacks.com/embed/games/99balls'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing 99 balls";
}
if(game=="hole.io"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://hole-io.com/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing hole.io";
}
if(game=="2048 giant"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://gamesnacks.com/embed/games/2048giant'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing 2048 giant";
}
if(game=="paper.io"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://paper-io.com/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing paper.io";
}
if(game=="slither.io"){
    document.getElementById("lmoh").innerHTML="<iframe src='http://slither.io/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing slither.io";
}
if(game=="subway surfers"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://subwaysurf.co/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing subway surfers";
}
if(game=="temple run 2"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://kbhgames.com/game/temple-run-2-online'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing Temple Run 2";
}
if(game=="dominoes"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://dominoes.playdrift.com/'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing dominoes";
}
if(game=="draw joust"){
    document.getElementById("lmoh").innerHTML="<iframe src='https://www.yad.com/Draw-Joust'></iframe>";
    document.getElementById("game_playing").innerHTML="You are playing draw joust";
}