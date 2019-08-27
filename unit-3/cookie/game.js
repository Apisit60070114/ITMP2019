fortuneBank = [
    "Jennie Kim เจนนี่ คิม",
    "Rose โรเซ่",
    "Kim Jisoo คิม จีซู",
    "Lisa ลิซ่า"
]

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function() {
        getFortune();
    }, 3000);
}

function replay(){
    cookie2.classList.remove("cookie-hide");
    cookie2.classList.remove("cookie-show");
    fortune.style.opacity = 0;
    setTimeout(() => {
        cookie2.classList.add("cookie-hide");
        cookie2.classList.add("cookie-show");
    }, 10);
    setTimeout(function() {
        getFortune();
    }, 2000);
}


function getFortune(){
    rand = Math.floor(Math.random()*fortuneBank.length);
    fortune.innerText = fortuneBank[rand];
fortune.style.opacity = 1;
fortune.style.top = "96px";
}