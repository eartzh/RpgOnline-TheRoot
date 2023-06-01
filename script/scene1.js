function remove(){
       
}
function typing(){         
    var mydiv=document.getElementById("text");
    mydiv.innerHTML+=str.charAt(i);
    i++;
    var id=setTimeout(typing,80);
    if(i==str.length){
        clearTimeout(id);    
        }
    }