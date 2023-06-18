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
    }    
}