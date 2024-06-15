//map events
function events(map,ev){
    if(map=="djland"){
        if(ev=="dirtpic"&&dirtpic==0){
            console.log("[debug]event-" + map + "-" + ev)
            dirtpic=1
            get("dialog").style.visibility="visible"
            get("text").style.visibility="visible"
            script=['你來到了陳姐姐的家','他拿起了以往你們一起玩的照片','想當年，你們生活貧困，踩踩泥巴、玩玩水成了生活中的小確幸']
            onType(2)
            get("box").innerHTML="獲得物品：照片"
            get("box").classList.add('box');
            setTimeout(function(){get("dialog").style.visibility="hidden";get("text").style.visibility="hidden";get("box").classList.remove('box');},13000)
        }
        if(ev=="ring"&&ring==0){
            console.log("[debug]event-" + map + "-" + ev)
            ring=1
            get("dialog").style.visibility="visible"
            get("text").style.visibility="visible"
            script=['你來到了王哥哥的家','當年你與丈夫舉辦一場風風光光的婚禮時，他是你們的伴郎','他拿起了你們的戒指，還記得當年你臨走時把他狠狠地摔在了地上','“你們當年可謂門當戶對，可惜了...”王哥哥說道']
            onType(3)
            get("box").innerHTML="獲得物品：戒指"
            get("box").classList.add('box');
            setTimeout(function(){get("dialog").style.visibility="hidden";get("text").style.visibility="hidden";get("box").classList.remove('box');},17000)
        }
        if(ev=="deadnote"&&puzzle0status==0){
            puzzle0status=1
            console.log("[debug]event-" + map + "-" + ev)
            get("dialog").style.visibility="visible"
            get("text").style.visibility="visible"
            script=['你來到了張阿姨的家','你爸媽當年把遺書託付給他，是時候交給你了','阿姨給你了一個箱子，密碼相信只有你知道吧','']
            onType(3)
            Rndnum()
            setTimeout(function(){get("puzzle0").style.visibility="visible";get("caption").style.visibility="visible";},13000)
        }
        if(ev=="scene3"&&cooldown==0&&scene3status==0){
            if(dirtpic&&ring&&deadnote){
                scene3status=1
                console.log("[debug]scene3")
                scene3()
            }else{
            cooldown=1
            get("dialog").style.visibility="visible"
            get("text").style.visibility="visible"
            script=['你情不自禁的觸摸曾住過的——那只剩一片牆的古厝。','不知當下究竟想了什麼？']
            onType(1)
            setTimeout(function(){get("dialog").style.visibility="hidden";get("text").style.visibility="hidden";get("box").classList.remove('box');},9000)
            setTimeout(function(){cooldown=0},20000)
            }
        }
    }
}
//from puzzle0.js
function Rndnum(){
    aans=getRnd(1,9);
    bans=getRnd(1,9);
    cans=getRnd(1,9);
}
function guess(){
    var a = parseInt(get("a").value,10);
    var b = parseInt(get("b").value,10);
    var c = parseInt(get("c").value,10);
    if(a>aans){
        get("ans1").style.borderColor="red";
    }else if(a<aans){
        get("ans1").style.borderColor="yellow";
    }else if(a==aans){
        get("ans1").style.borderColor="green";
    }
    if(b>bans){
        get("ans2").style.borderColor="red";
    }else if(b<bans){
        get("ans2").style.borderColor="yellow";
    }else if(b==bans){
        get("ans2").style.borderColor="green";
    }
    if(c>cans){
        get("ans3").style.borderColor="red";
    }else if(c<cans){
        get("ans3").style.borderColor="yellow";
    }else if(c==cans){
        get("ans3").style.borderColor="green";
    }
    if(a==aans && b==bans && c==cans){
        get("button").style.visibility="hidden"
        get("unlock").style.visibility="visible"
        deadnote=1
        get("box").innerHTML="獲得物品：爸媽的遺書"
        get("box").classList.add('box');
        get("text").style.visibility="hidden";
        setTimeout(function(){get("box").classList.remove('box');get("puzzle0").style.visibility="hidden";get("caption").style.visibility="hidden";get("ans1").style.visibility="hidden";get("ans2").style.visibility="hidden";get("ans3").style.visibility="hidden";get("unlock").style.visibility="hidden";get("dialog").style.visibility="hidden";},3000)
    }    
}

//map initialization
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
function scene2(){
    map="djland"
    console.log("[debug]Enter map1")
    get("box").classList.remove('box');
    get("font").classList.remove('fontani');
    get("tutorial").style.visibility="hidden"
    get("char").style.visibility="hidden"
    get("font").innerHTML="第一章：回家"
    get("font").classList.add('fontani');
    setTimeout(function(){
        get("djland").style.visibility="visible";
        get("char").style.visibility="visible";
        get("font").classList.remove('fontani');
        get("djland").style.left="0px"
        get("djland").style.top="65px"
        char.x=0
        char.y=65
    },2900)
    border.xMax=295
    border.xMin=-800
    border.yMax=350
    border.yMin=-165
}
function scene3(){
    /* Work in progress */
    console.log("[debug]Enter map2")
    get("box").classList.remove('box');
    get("djland").style.visibility="hidden"
    get("char").style.visibility="hidden"
    get("font").innerHTML="第二章：往事"
    get("font").classList.add('fontani');
    setTimeout(function(){
        get("WIP").style.visibility="visible";
        get("char").style.visibility="visible";
        get("font").classList.remove('fontani');
    },2900)
}

//basicfunction
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
    console.log(char.x,char.y)
    get(map).style.left=char.x + "px"
    get(map).style.top=char.y + "px"

    //listener
    if(map=="tutorial"){
        if(char.y<=-300){
            scene2()
        }
    }
    if(map=="djland"){
       if(char.x<-95&&char.x>-270&&char.y>255&&char.y<350){
            events("djland","dirtpic")
       }
       if(char.x<-415&&char.x>-525&&char.y>155&&char.y<210){
            events("djland","ring")
       }
       if(char.x<-80&&char.x>-200&&char.y<-90){
            events("djland","deadnote")
        }
       if(char.y<110&&char.y>35&&char.x<-700) {
            events("djland","scene3")
       }
    }
}
const valueHandler = () => {
    let value=location.href.split('=')[1].split('&');
    sceneSelector(value[0])
    if(value) return 1;
}
const sceneSelector = (scene) => {
    if (scene == 2 || scene == 'djland'){
        scene2()
    }
    if (scene == 3){
        scene3()
    }
}
