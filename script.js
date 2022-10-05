
 var tocheck=false;
function colorToggle() {
    var footer = document.querySelector('#footer_part');
var footer_a = document.querySelector('.container2');
var anchor_tag_footer=document.querySelectorAll('.anchor_tag_footer');
   
    const element = document.body;
    element.classList.toggle("dark-mode");
    document.querySelector(".fa-solid").classList.toggle("fa-moon");
    document.querySelector(".account").classList.toggle("black");
    document.querySelector(".heading1").classList.toggle("black");
    document.querySelector(".heading2").classList.toggle("black");
    document.querySelector(".logo").classList.toggle("invert");
    // footer part
    if(!tocheck){

footer.style.borderColor='black';
footer_a.style.backgroundColor='white';
// anchor_tag_footer.style.color= 'black';
for (let i = 0; i < anchor_tag_footer.length; i++) {
    anchor_tag_footer[i].style.color = "black";
  }

        tocheck=true;
    }else{

        footer.style.borderColor='white';
footer_a.style.backgroundColor='black';
// anchor_tag_footer.style.color= 'white';
for (let i = 0; i < anchor_tag_footer.length; i++) {
    anchor_tag_footer[i].style.color = "white";
  }
        tocheck=false;
    }



}
  
