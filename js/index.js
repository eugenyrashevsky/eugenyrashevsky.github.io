// Изменение фона <header> при скролле страницы

let header = document.getElementById("header")

const changeBackground = () => {
    let opacity = pageYOffset / document.documentElement.clientHeight / 0.354

    if (opacity < 1) {
        header.style.backgroundColor = `rgba(34, 34, 34, ${opacity})`
    } else {
        header.style.backgroundColor = 'rgba(34, 34, 34, 1)'
    }
}

window.addEventListener("scroll", changeBackground)

// Еду в магазин Gucci в Санкт-Петербурге. Грррррря! Она жрёт мой хуй как-будто это БУРГЕР

let burger = document.getElementById("burger")

const menuToggle = () => {
    let mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.toggle("mystyle")
    burger.classList.toggle("mystyle2")

    if (mobileMenu.classList.contains("mystyle")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflowX = "visible";
        document.body.style.overflowY = "scroll";
    }
}

burger.addEventListener("click", menuToggle)

// Скролл из мобильного меню

let toHome = document.getElementById('toHome');
let toPages = document.getElementById('toPages');
let toFeatures = document.getElementById('toFeatures');
let toExtensions = document.getElementById('toExtensions');
let toTutorials = document.getElementById('toTutorials');
let toContact = document.getElementById('toContact');

let intro = document.getElementById("intro");
let bluebox = document.getElementById("bluebox");
let akitakuva = document.getElementById("akitakuva"); // 
let whitebox = document.getElementById("whitebox");
let tutorials = document.getElementById("tutorials"); //
let contactUs = document.getElementById("contact_us"); //

const handleButtonClick = (elem) => {
    const yOffset = -50; 
    const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;

    menuToggle();
    window.scrollTo({top: y, behavior: 'smooth'});
}

toHome.addEventListener('click', () => handleButtonClick(intro));
toPages.addEventListener('click', () => handleButtonClick(bluebox));
toFeatures.addEventListener('click', () => handleButtonClick(akitakuva));
toExtensions.addEventListener('click', () => handleButtonClick(whitebox));
toTutorials.addEventListener('click', () => handleButtonClick(tutorials));
toContact.addEventListener('click', () => handleButtonClick(contactUs));