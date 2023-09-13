function showMenu(){
    let navLinks = document.querySelector('.navigation-links-mobile');
    let verLinks = navLinks.classList.contains('open');
    let iconMenu = document.querySelector('.menu');

    if(verLinks){
        navLinks.classList.remove('open');
        iconMenu.src = "/assets/close_white_36dp.svg"
    }else{
        navLinks.classList.add('open')
        iconMenu.src = "/assets/menu_white_36dp.svg"
    }
}