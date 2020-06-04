var toggle=document.getElementById("toggle");
toggle.addEventListener("click",clck);

function clck(){
    // console.log(toggle);
    var ul=document.querySelector("#ul");
    var nvBar=document.querySelector("#nvBar");
    var demo1=document.querySelector("#demo1");
    var demo2=document.querySelector("#demo2");

    if(ul.style.display=="flex"){
        ul.style.display="none";
        demo1.style.display="none";
        demo2.style.display="none";
    }
  else{
    ul.style.display="flex";
    demo1.style.display="flex";
    demo2.style.display="flex";
  }
}

var inptsubmit=document.querySelector('#select');
var inpttxt=document.querySelector('#subs');
inptsubmit.addEventListener('click',function(){
  if(inpttxt.value==""){
    alert("Please write something here");
  }else{
  alert(inpttxt.value);
  inpttxt.value="";}
})
///console.log(inpttxt.value);