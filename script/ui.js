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
            console.log("[debug]Enter map1")
        }
    }
    if(ev.key=="d"&&char.x>=border.xMin){
        char.x-=5
    }
    /*console.log(char.x,char.y)*/
    get(map).style.left=char.x + "px"
    get(map).style.top=char.y + "px"
}