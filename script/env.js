function get(id) {
    return document.getElementById(id);
}
function getRnd(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
function typing(){         
    document.getElementById("text").innerHTML+=str.charAt(i);
    i++;
    var id=setTimeout(typing,80);
    if(i==str.length){
        clearTimeout(id);    
    }
}
function onType(times){
    t=0;
    t1=setInterval(function(){
        i=0;
        document.getElementById("text").innerHTML=""
        str=script[t]
        console.log("[debug]printScript:"+t)
        typing()
        t=t+1
        if(t>times) clearInterval(t1)
    },4000)
}