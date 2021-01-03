var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;
var circle = { 
     el:$('#circle'),
     x:window.innerWidth/2, 
     y:window.innerHeight/2, 
     w:60, 
     h:60, 
     update:function(){
    l = this.x-this.w/2; 
    t = this.y-this.h/2; 
    this.el.css({ 'transform':'translate3d('+l+'px,'+t+'px, 0)' }); }
}
$(window).mousemove(function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
})
setInterval (move,1000/60)
function move(){
  circle.x = lerp (circle.x, mouseX, 0.1);
  circle.y = lerp (circle.y, mouseY, 0.1);
  circle.update() 
}
function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}
console.log("Made by Amirtha Krishnan.");
console.log("Reach out to me at @amirthaz on Instagram.")