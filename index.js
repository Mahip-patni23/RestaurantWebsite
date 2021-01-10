window.addEventListener('scroll',function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


function reservation(){
    prompt("Hey! Your Reservation has been initiated! Enter the OTP you received on your mobile number to confirm Booking");
}