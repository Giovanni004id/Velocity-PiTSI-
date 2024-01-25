// TABS

const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs_item");

//  Ф-ия скрывает табы и убирает active у кнопок

function hideTabs()  {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// Ф-я показывает преданный номер таба и делает соответсвующую ему кнопку активной.
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));


// Anchors
const anchors = document.querySelectorAll(".header_nav a");
anchors.forEach(anc => {
   anc.addEventListener("click", function(event) {
    event.preventDefault();
     
    const id = anc.getAttribute("href");

   const elem = document.querySelector(id);
   console.log(id,elem);

   window.scroll({
      top: elem.offsetTop,
      behavior: 'smooth'
   });
     
   });
});