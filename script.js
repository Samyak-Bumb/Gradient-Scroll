let bar=document.getElementById('bar');
let th=document.body.scrollHeight - window.innerHeight;

window.onscroll=function(){
   let barHeight=(window.pageYOffset / th)*100;
   bar.style.height=barHeight+'%';
}