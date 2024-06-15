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
const chapterSelect = () => {
  for(var i=0;i<document.getElementsByClassName('button').length;i++){
      document.getElementsByClassName('button')[i].style.visibility='hidden'
  }
  get('label').innerHTML='章節選擇'
  get('chapterFrame').style.visibility='visible'
}
const chapterSelected = (chapter) => {
  get("home").classList.add('offLoad');
  console.log("[debug]Jumping into scene" + chapter);
  setTimeout(() => get("home").innerHTML='<object id="jumped" type="text/html" data="ui.html?chapter='+ chapter + '"  width="100%" height="100%"></object>',1950)
}