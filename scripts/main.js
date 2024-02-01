//Toggle & Responsive
const NavSlide = () => {
    const burger = document.querySelector(".burger")
    const navList = document.querySelector("nav")

    burger.addEventListener("click" , () =>{
        navList.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    });
};

NavSlide();

// Clear Form Before Unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
    form.reset
    }
};