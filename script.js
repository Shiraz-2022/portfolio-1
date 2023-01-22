var width1=window.matchMedia("(max-width: 744px)");

if(width1.matches){
    
    document.querySelector(".collapse_button_container").classList.remove("hidden");
    document.querySelector(".nav_bar").classList.add("hidden");
}

var width2=window.matchMedia("(max-width: 506px)");

// if(width2.matches){

//     document.querySelector(".java p").classList.add("hidden");
//     document.querySelector(".webd p").classList.add("hidden");
//     document.querySelector(".dsa p").classList.add("hidden");
// }