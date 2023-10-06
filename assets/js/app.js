let a = document.getElementById("nav-bar");
let flow = document.querySelector(".sec-flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuIcon = document.querySelector("#menuIcon");
let home = document.querySelector(".home");
let snakers = document.querySelector(".snakers");
let interviews = document.querySelector(".interviews");
let sale = document.querySelector(".sale");
let snakerVan = document.querySelector(".snakerVan");
let snakerForum = document.querySelector(".snakerForum");
let blog = document.querySelector(".blog");
let count = 1
let sub = document.getElementById("sub")
let showNo = document.getElementById("showNo")
let add = document.getElementById("add")
let btn = document.getElementById("btn");



menuIcon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

home.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
snakers.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
interviews.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
sale.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

snakerVan.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
snakerForum.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
blog.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

add.addEventListener("click", function(){
    count++;
    showNo.innerHTML = count;
})
sub.addEventListener("click", function(){
    if(count > 1) count--;
    showNo.innerHTML = count;
})


function openTab(evt, Id) {
    let i = null;
    let tabContent = document.querySelectorAll(".tab-Content");
    let tabLabel = document.querySelectorAll(".tablabel");
    tabContent.forEach(function(item) {
        item.style.display = 'none';
    });
    tabLabel.forEach(function(item2) {
        item2.classList.remove("tabopen");
    });
    document.getElementById(Id).style.display = "block";
    evt.currentTarget.className += " tabopen";
}
document.getElementById("tab-btn").click();


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
