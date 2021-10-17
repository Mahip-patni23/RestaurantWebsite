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


/* Menu page code */

const menu = [
    {
        id:1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        image: "https://www.browneyedbaker.com/wp-content/uploads/2011/02/buttermilk-pancakes-8-1200.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",

    },
    {
        id:2,
        title: "dinner double",
        category: "lunch",
        price: 13.55,
        image: "https://img.theculturetrip.com/wp-content/uploads/2017/05/21086285849_d157375109_k.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.", 
    },
    {
        id:3,
        title: "godzilla milkshake",
        category: "shakes",
        price:  14.5,
        image: "https://sf1.mariefranceasia.com/wp-content/uploads/sites/7/2015/11/Robert-Timms-490x410.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",
    },
    {
        id:4,
        title: "country delight",
        category: "shakes",
        price:  19.5,
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/36/d8/8e/hill-country-delight.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",
    },
    {
        id:5,
        title: "egg attack",
        category: "lunch",
        price:  20.5,
        image: "http://cdn.cnn.com/cnnnext/dam/assets/170206144443-taters.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",
    },
    {
        id:6,
        title: "oreo dream",
        category: "shakes",
        price: 17.65,
        image: "https://www.traveller.com.au/content/dam/images/g/q/p/6/7/5/image.related.socialLead.620x349.gqbjjm.png/1550469799141.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",
    },
    {
        id:7,
        title: "bacon overflow",
        category: "breakfast",
        price: 12.425,
        image: "http://www.rightthisminute.com/sites/default/files/videos/images/bacon_2.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",
    },
    {
        id:8,
        title: "american classic",
        category: "lunch",
        price: 25.98,
        image: "https://cdn.theculturetrip.com/wp-content/uploads/2017/05/nathans.jpg",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo facere maiores dolor quo perferendis impedit est modi doloremque unde uptate numquam similique volptatum.",
    }
];

const sectionCenter = document.querySelector(".section-center");

const filterBtn = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
});

filterBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if (category == "all"){
                return menuItem;
            }
            else if(menuItem.category == category)
            {
                return menuItem;
            }
        });
        displayMenuItems(menuCategory);
    });
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){  
        return `<article class="menu1-item">
                    <img src= ${item.image} alt= ${item.title} class="item-img">
                    <div class="item-info">
                        <header class="heading">
                            <h3>${item.title}</h3>
                            <h4>$ ${item.price}</h4>
                        </header> 
                        <p>
                           ${item.info}
                        </p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    // console.log(displayMenu);

}