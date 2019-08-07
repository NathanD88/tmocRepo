
function onPageLoad(adm) {
    if(adm === 1) {
        document.getElementsByClassName("controller")[0].style.display = "block";
    }
}

const defaultStyle = {
    top: "10px",
    left: "10px",
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    border: "1px solid black",
    boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
    background: "grey"
};
const clickedStyle = {
    /*borderRadius: "none",
    height: "100px",
    width: "80px"*/
};

function admMenu (){
    var am = document.getElementsByClassName("controller")[0];
    if(am.style.borderRadius !== "0px") {
        animateIcon(0);
        am.style.transition = "width 1s, height 1s, borderRadius 1s";
        am.style.display = "block";
        am.style.borderRadius = "0px";
        am.style.height = "240px";
        am.style.width = "160px";
        am.style.paddingRight = "5px";
        document.getElementById("icon").style.float = "right";
        setTimeout(showContent, 1000);
    } else {
        animateIcon(1);
        am.style.transition = "width 0s, height 0s, borderRadius 0s";
        am.style.borderRadius = "50%";
        am.style.height = "35px";
        am.style.width = "35px";
        am.style.paddingRight = "0px";
        document.getElementById("icon").style.float = "left";
        document.getElementsByClassName("menu-content")[0].style.display = "none";
    }
}

function animateIcon(set){
    var top = document.getElementsByClassName("hamburger-top")[0];
    var mid = document.getElementsByClassName("hamburger-mid")[0];
    var bot = document.getElementsByClassName("hamburger-bot")[0];
    if(set == 0){
        mid.style.transition = "background 1s";
        mid.style.background = "rgba(0,0,0,0)";
        top.style.transition = "top 1s, background 1s, transform 1s";
        top.style.transform = "rotate(45deg)";
        top.style.background = "red";
        top.style.top = "10px";
        bot.style.transition = "top 1s, background 1s, transform 1s";
        bot.style.transform = "rotate(-45deg)";
        bot.style.background = "red";
        bot.style.top = "0px";
    } else {
        mid.style.transition = "background 0s";
        mid.style.background = "rgba(0, 0, 0, 0.75)";
        top.style.transition = "top 0s, background 0s, transform 0s";
        top.style.transform = "rotate(0deg)";
        top.style.background = "rgba(0, 0, 0, 0.75)";
        top.style.top = "7px";
        bot.style.transition = "top 0s, background 0s, transform 0s";
        bot.style.transform = "rotate(0deg)";
        bot.style.background = "rgba(0, 0, 0, 0.75)";
        bot.style.top = "13px";
    }
}
function showContent() {
    document.getElementsByClassName("menu-content")[0].style.display = "block";
}