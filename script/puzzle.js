function getRnd(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
function get(id) {
    return document.getElementById(id);
}
function Rndnum(){
    a.ans=getRnd(1,9);
    b.ans=getRnd(1,9);
    c.ans=getRnd(1,9);
}
function guess(){
    a = parseInt(get("a").value);
    b = parseInt(get("b").value);
    c = parseInt(get("c").value);
    if(a>a.ans){
        get("ans1").style.borderColor="red";
    }else if(a<a.ans){
        get("ans1").style.borderColor="yellow";
    }else if(a=a.ans){
        get("ans1").style.borderColor="green";
    }
    if(b>b.ans){
        get("ans2").style.borderColor="red";
    }else if(b<b.ans){
        get("ans2").style.borderColor="yellow";
    }else if(b=b.ans){
        get("ans2").style.borderColor="green";
    }
    if(c>c.ans){
        get("ans3").style.borderColor="red";
    }else if(c<c.ans){
        get("ans3").style.borderColor="yellow";
    }else if(c=c.ans){
        get("ans3").style.borderColor="green";
    }
    if(a=="a.ans" && b=="b.ans" && c=="c.ans"){
        get("button").style.visibility="hidden"
        get("unlock").style.visibility="visible"
    }    
}