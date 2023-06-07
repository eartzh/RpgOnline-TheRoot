function splash() {
    get("form").innerHTML='<object type="text/html" data="/resource/scenes/splash.html"  width="100%" height="100%"></object>'
    setTimeout(function(){home();},3000)
}
function home() {
  get("form").innerHTML='<object type="text/html" data="/resource/scenes/home.html"  width="100%" height="100%"></object>'
}
function gameStart(){
  get("home").classList.add('offLoad');
  setTimeout(function(){get("home").innerHTML='<object type="text/html" data="/resource/scenes/scene1.html"  width="100%" height="100%"></object>';},1950)
}