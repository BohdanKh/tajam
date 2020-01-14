/////////// header fixed
let intro = document.querySelector(".intro");
let header = document.querySelector(".header");


let relIntroCords = intro.getBoundingClientRect().y;
let absolIntroCords = relIntroCords + pageYOffset;
let absolBottomIntroCords = absolIntroCords + intro.offsetHeight;

let nav = document.querySelector(".header_nav");
let headerCounter = 0;


window.onscroll = toggleFixHeader;
window.addEventListener("load", toggleFixHeader);
function toggleFixHeader(){
    if(pageYOffset >= absolBottomIntroCords){
        header.classList.add("positionFixed");
    }
    else{
        header.classList.remove("positionFixed");
    }

    if(document.body.clientWidth < 768){
        nav.style.display = "none";
        if(headerCounter % 2 == 1){
            //що б на наступний клік по бургеру меню відкрилося
            ++headerCounter; 
        }
    }
}



///////////// intro slider
let areaOfDots = document.getElementsByClassName("intro_slider_dots");
let arrDots = document.getElementsByClassName("intro_slider_dot");
let scrollLine = document.querySelector(".intro_slider_scrollLine");

areaOfDots[0].onclick = function(event){
    if(event.target.className == "intro_slider_dot"){
        let numOfSlide = event.target.getAttribute("data-slide");
        
        let reverseMarg = -(numOfSlide * 320);
        // let numOfSlide = Number(numOfSlide);
        scrollLine.style.marginLeft = reverseMarg + "px";
    }
}



/////////////////   burger
let burger = document.getElementById("header_burger");
burger.addEventListener("click", toggleNav);
function toggleNav(){
    
    if(headerCounter % 2 == 0){
        nav.style.display = "flex";
        headerCounter++;
    }
    else{
        nav.style.display = "none";
        headerCounter++;
    }
}



//////////////////  nav scroll to
let nameTargetBlock;
let targetBlock;
let absCordYou;
let absCordBlock;
nav.addEventListener("click", function(event){
    if(event.target.className == "nav_item"){
        nameTargetBlock = event.target.getAttribute("data-block");
        targetBlock = document.getElementById(nameTargetBlock);
        absCordBlock = targetBlock.getBoundingClientRect().y + pageYOffset;
        
        window.scrollTo(0, (absCordBlock - 90));
    }
});



///////////////////     slick slider
$(".reviews_slider_items").slick({
    arrows: false,
    swipe: false
});

$(".reviews_slider_nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    asNavFor: ".reviews_slider_items",
    responsive: [
        {
            breakpoint: 425,
            settings: {
                arrows: false
            }
        }
    ]
});


