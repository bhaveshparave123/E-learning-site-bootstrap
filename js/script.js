


function data(){

var a=document.getElementById("n1").value;
if(a==""){

    document.getElementById("n1").style="border-color:1px solid red;";
    return false;

}
else{
    true;
}

}


// function valid(){
//     document.getElementById("show").style="border-color:1px solid red";
// }



// swiper testimonial

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });