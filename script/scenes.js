function splash() {
    get("form").innerHTML='<object type="text/html" data="splash.html"  width="100%" height="100%"></object>'
    setTimeout(function(){home();},3000)
}
function home() {
  get("form").innerHTML='<object type="text/html" data="home.html"  width="100%" height="100%"></object>'
}
function gameStart(){
  get("home").innerHTML='<object type="text/html" data="scene1.html"  width="100%" height="100%"></object>'
}