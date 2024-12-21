
const imageGrid = document.querySelector('.ImagesGrid');
const menuBtn = document.querySelector('.js-menubtn');
let menuElement = document.querySelector('.navLinks--items--Menu');
let menuVisibility = menuElement.getAttribute('visiblility');

//  for header only
menuBtn.addEventListener('click', () => {

    if (menuVisibility === 'false') {
        console.log('seeting ture');
        menuVisibility = "true";
        menuElement.setAttribute('visibility', menuVisibility);
    } else {
        console.log('seeting false');
        menuVisibility = "false";
        menuElement.setAttribute('visibility', menuVisibility);
    }

})
 
const SecHeading = document.querySelector('.SectionHeading');
let attributeValue = SecHeading.getAttribute("visibility");
const navbarOffsetTop = SecHeading.offsetTop;
let navbarOffsetTopCurrent = SecHeading.offsetTop;

document.addEventListener('scroll',()=>{
    
    
    
    if(window.scrollY > navbarOffsetTop){
        SecHeading.setAttribute("visibility","true");
        
    } else{
        SecHeading.setAttribute("visibility","false");
    }

})