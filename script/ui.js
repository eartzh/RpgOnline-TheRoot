function move(ev){
    ev.preventDefault();
    if(ev.key=="w"&&char.y<border.yMax){
        char.y+=5
    }
    if(ev.key=="a"&&char.x<border.xMax){
        char.x+=5
    }
    if(ev.key=="s"&&char.y>border.yMin){
        char.y-=5
        if(char.y<=-300&&map=="tutorial"){   /* plugin for tutorial */
            scene2()
        }
    }
    if(ev.key=="d"&&char.x>border.xMin){
        char.x-=5
    }
    console.log(char.x,char.y)
    get(map).style.left=char.x + "px"
    get(map).style.top=char.y + "px"
}
function scene2(){
    map="djland"
    console.log("[debug]Enter map1")
    get("tutorial").style.visibility="hidden"
    get("djland").style.visibility="visible"
    border.xMax=295
    border.xMin=-800
    border.yMax=350
    border.yMin=-165
    char.x=0
    char.y=65
    get("djland").style.left="0"
    get("djland").style.top="65"
}
function tutorial(){
    get("box").classList.remove('box');
    border.xMax=50
    border.xMin=-40
    border.yMax=430
    border.yMin=-305
    map="tutorial"
    get("box").innerHTML="接受任務：前往碼頭"
    get("box").classList.add('box');
    get("tutorial").style.visibility="visible"
}