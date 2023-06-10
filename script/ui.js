function move(ev){
    ev.preventDefault();
    if(ev.key=="w"&&char.y<=border.yMax){
        char.y+=5
    }
    if(ev.key=="a"&&char.x<=border.xMax){
        char.x+=5
    }
    if(ev.key=="s"&&char.y>=border.yMin){
        char.y-=5
        if(char.y<=-300&&map=="tutorial"){   /* plugin for tutorial */
            scene2()
        }
    }
    if(ev.key=="d"&&char.x>=border.xMin){
        char.x-=5
    }
    /*console.log(char.x,char.y)*/
    get(map).style.left=char.x + "px"
    get(map).style.top=char.y + "px"
}
function scene2(){
    console.log("[debug]Enter map1")
}
function tutorial(){
    get("box").classList.remove('box');
    border.xMax=45
    border.xMin=-35
    border.yMax=425
    border.yMin=-300
    map="tutorial"
    get("box").innerHTML="接受任務：前往碼頭"
    get("box").classList.add('box');
    get("tutorial").style.visibility="visible"
}