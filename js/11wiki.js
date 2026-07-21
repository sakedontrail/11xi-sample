// 화면비 따른 줄바꿈

let a = document.querySelector(".categoryBr1");
let b = document.querySelector(".categoryBr2");
let c = document.querySelector(".categoryBr3");
let d = document.querySelector(".categoryBr4");


window.onresize = function(event){
    var innerWidth = window.innerWidth;
    innerWidth <= "992" ? a.innerHTML = "<br>" : a.innerHTML = "&nbsp;";
    innerWidth <= "992" ? b.innerHTML = "<br>" : b.innerHTML = "&nbsp;";
    innerWidth <= "992" ? c.innerHTML = "<br>" : c.innerHTML = "&nbsp;";
    innerWidth <= "992" ? d.innerHTML = "<br>" : d.innerHTML = "&nbsp;";
}

// 자주 쓰는 용어들 검색

document.addEventListener("DOMContentLoaded", function(){

    const searchInput = document.getElementById("searchInput");
    const ffxiWord = document.querySelectorAll(".ffxi-word");

    searchInput.addEventListener("input", function() {

        const searchTerm = this.value.toLowerCase();
        ffxiWord.forEach((item) =>{
            const title = item.querySelector("span").textContent.toLowerCase();
            if(title.includes(searchTerm)) {
                item.style.display = "block" ;
            } else {
                item.style.display = "none";
            }
        })


    })
})