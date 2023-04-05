function someFunction(){
    const profileInfo = document.getElementsByClassName('profile-info')[0];
    const card = document.getElementsByClassName('card')[0];
    const bottomSection= document.getElementsByClassName('bottom-section')[0];
    if(window.innerWidth < 576){
        profileInfo.classList.toggle('mobile-hidden');
        card.classList.toggle('mobile-block');
        bottomSection.classList.toggle('mobile-active');
    } else{
        card.getElementsByClassName('card-top')[0].classList.toggle('desktop-active');
    }
    console.log(window.innerWidth);
}