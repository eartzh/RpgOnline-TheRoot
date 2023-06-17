function getRnd(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
function guess(){
    a = parseInt(get("a").value);
    b = parseInt(get("b").value);
    c = parseInt(get("c").value);
    a.ans=getRnd(1,9);
    b.ans=getRnd(1,9);
    c.ans=getRnd(1,9);
}