
var color = document.getElementById("colors");
var theColor = color.value;
var size;
function sizes(){
    size = document.getElementById('size').value;
}
var ms = false;
var canvas = document.getElementById('c');
canvas.addEventListener('mousedown', down);
canvas.addEventListener('mouseup', mosup);
canvas.addEventListener('mousemove',
function(evt){
    var mousePos = getMousePos(canvas, evt);
    var posx = mousePos.x;
    var posy = mousePos.y;
    draw(canvas, posx, posy);
});
function down(){
    ms = true;
}
function mosup(){
    ms = false;
    canvas.style.cursor = 'default';
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    };
}
function draw(canvas, posx, posy){
    var cxt = canvas.getContext('2d');
    if(ms){
        canvas.style.cursor = 'pointer';
        cxt.fillStyle = color.value;
        cxt.fillRect(posx, posy, size, size);
    }
}
