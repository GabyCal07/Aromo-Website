const $icon = document.querySelectorAll(".plus-icon");
const $reviews = document.querySelectorAll(".reviews");

for (let i=0; i<$icon.length; i++){
    $icon[i].addEventListener("click", function(){
        $reviews[i].classList.toggle("hide-reviews");  
    });
}

