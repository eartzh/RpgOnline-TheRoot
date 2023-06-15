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
    }
    if(ev.key=="d"&&char.x>border.xMin){
        char.x-=5
    }
    //plugins
    if(map=="tutorial"){
        if(char.y<=-300){   /**  plugin for tutorial **/
            scene2()
        }
    }
    if(map=="djland"){
       if(char.x<-95&&char.x>-270&&char.y>255&&char.y<350){
            console.log("event1")
       }
       if(char.y<110&&char.y>35&&char.x<-700&&scene3status==0) {
            scene3status=1
            console.log("[debug]scene3")
            scene3()
       }
    }
    //plugins end
    console.log(char.x,char.y)
    get(map).style.left=char.x + "px"
    get(map).style.top=char.y + "px"
}
function scene3(){
    /* Work in progress */
    console.log("[debug]Enter map2")
    get("box").classList.remove('box');
    get("font").classList.remove('fontani');
    get("djland").style.visibility="hidden"
    get("char").style.visibility="hidden"
    get("font").innerHTML="第二章：往事"
    get("font").classList.add('fontani');
    get("WIP").style.visibility="visible"
}
function scene2(){
    map="djland"
    console.log("[debug]Enter map1")
    get("box").classList.remove('box');
    get("font").classList.remove('fontani');
    get("tutorial").style.visibility="hidden"
    get("char").style.visibility="hidden"
    get("font").innerHTML="第一章：回家"
    get("font").classList.add('fontani');
    setTimeout(function(){get("djland").style.visibility="visible";get("char").style.visibility="visible"},2900)
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
