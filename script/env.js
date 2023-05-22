var elem = document.getElementById("main");

function get(id) {
    return document.getElementById(id);
}
function getRnd(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}