function splash() {
    get("form").innerHTML='<object type="text/html" data="splash.html"  width="100%" height="100%"></object>'
    setTimeout(function(){home();},2950)
}
function home() {
  get("form").innerHTML='<object type="text/html" data="home.html"  width="100%" height="100%"></object>'
}
function gameStart(){
  get("home").classList.add('offLoad');
  console.log("[debug]GameStart");
  setTimeout(function(){get("home").innerHTML='<object type="text/html" data="scene1.html"  width="100%" height="100%"></object>'},1950)
  setTimeout(function(){get("home").innerHTML='<object type="text/html" data="ui.html"  width="100%" height="100%"></object>'},24000)
}