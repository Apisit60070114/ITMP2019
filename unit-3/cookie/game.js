fortuneBank = [
    "กระเชอก้นรั่ว",
    "เกลือเป็นหนอน",
    "ไกลปืนเที่ยง",
    "ขว้างงูไม่พ้นคอ",
    "คลุมถุงชน",
    "จับแพะชนแกะ",
    "ชั่วช่างชี ดีช่างสงฆ์",
    "ตกกะไดพลอยโจน",
    "ติเรือทั้งโกลน",
    "ตีปลาหน้าไซ"
]

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function() {
        getFortune();
    }, 3000);
}

function play2(){
    cookie2.classList.remove("cookie-hide");
    cookie2.classList.remove("cookie-show");
    fortune.style.opacity = 0;
    setTimeout(() => {
        cookie2.classList.add("cookie-hide");
        cookie2.classList.add("cookie-show");
    }, 10);
    setTimeout(function() {
        getFortune();
    }, 3000);
}


function getFortune(){
    rand = Math.floor(Math.random()*fortuneBank.length);
    fortune.innerText = fortuneBank[rand];
fortune.style.opacity = 1;
fortune.style.top = "96px";
}