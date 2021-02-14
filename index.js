
var canvas = document.getElementById("canvas")
var context = canvas.getContext('2d')
function drawline(x,y,x1,y1){
    context.beginPath();
    context.moveTo(x,y)
    context.lineTo(x1,y1)
    context.stroke()
}
function tree(x,y,l,angle, iteration){
    var x1 = x+l*Math.sin(angle)
    var y1 = y+l*Math.cos(angle)
    drawline(x,y,x1,y1)
    if(iteration > 0){
        tree(x1,y1,l*0.7, angle - Math.PI/8, iteration-1)
        tree(x1,y1,l*0.7, angle + Math.PI/8, iteration-1)
    }
}
tree(300,100,100,0,7)
