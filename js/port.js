
let showIcon = document.getElementById("showIcon");
let list = document.getElementById("list");
let item = document.querySelectorAll(".list li")



showIcon.addEventListener("click", function() {
    list.classList.toggle("show");
    showIcon.classList.toggle("fa-xmark");

}); 


item.forEach((it) => {
    it.addEventListener("click", function() {
        list.classList.remove("show");
        showIcon.classList.remove("fa-xmark");
    },3000);
});