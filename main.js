let menuButton = document.querySelector(".navbar__mobile__icon");
let sidebar = document.querySelector(".sidebar");
let sidebarOverlay = document.querySelector(".sidebar__overlay");
let orderOnlineButton1 = document.querySelector(".order__online__button__1")


let currentReviewIndex = 0;

function openSidebar() {
    sidebar.classList.add("sidebar--isopen");
    sidebarOverlay.classList.add("sidebar--isopen");

    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar.classList.remove("sidebar--isopen");
    sidebarOverlay.classList.remove("sidebar--isopen");

    document.body.style.overflow = "";
}

menuButton.addEventListener("click", () => {
    if (sidebar.classList.contains("sidebar--isopen")) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

sidebarOverlay.addEventListener("click", closeSidebar);

let navbarOrderButton = document.querySelectorAll(".navbar__order");

navbarOrderButton.forEach((button) => {
    button.addEventListener('click', () => {
        window.open('https://wa.me/+918085679315');
        closeSidebar();
    })
});

let navLinks = document.querySelectorAll(".navbar__products, .navbar__about, .navbar__reviews, .navbar__contact");

navLinks.forEach((button) => {
    button.addEventListener('click', () => {
        closeSidebar();
    })
})

orderOnlineButton1.addEventListener('click', () => {
    window.open('https://wa.me/+918085679315');
})

let heroButton = document.querySelector(".hero__button");

heroButton.addEventListener('click', () => {
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" })
})

let reviews = [{ img: "assets/images/reviewer-1.jpg", name: "Ishita Singh", city: "Ahmedabad", review: "“The cakes were really fresh and tasty, and the staff was very polite. Overall, I had a very nice experience here.”", alt: "Reviewer 1" }, { img: "assets/images/reviewer-2.jpg", name: "Karan Gokhale", city: "Mumbai", review: "“Loved the ambience and the quality of bakery items. Everything was fresh, nicely presented, and the service was also very good.”", alt: "Reviewer 2" }, { img: "assets/images/reviewer-3.jpg", name: "Prashant Dubey", city: "Cochin", review: "“I ordered a cake for my family and everyone loved it. Taste was excellent, delivery was on time, and the staff was very helpful.”", alt: "Reviewer 3" }, { img: "assets/images/reviewer-4.jpg", name: "Preeti Prajapati", city: "Srinagar", review: "“Really happy with my visit. The pastries were fresh, the place was clean and peaceful, and the overall experience was totally worth it.”", alt: "Reviewer 4" }]

let reviewImg = document.querySelector(".what__they__say__profile__img");
let review = document.querySelector(".review");
let username = document.querySelector(".what__they__say__username");
let city = document.querySelector(".what__they__say__city");

function renderReviewCards() {
    reviewImg.src = reviews[currentReviewIndex].img
    reviewImg.alt = reviews[currentReviewIndex].alt
    review.innerText = reviews[currentReviewIndex].review
    username.innerText = reviews[currentReviewIndex].name
    city.innerText = reviews[currentReviewIndex].city
}

renderReviewCards()

function animateReviewCard() {
    let commentCard = document.querySelector(".what__they__say__comment__card");
    commentCard.style.filter = "opacity(0)";

    setTimeout(() => {
        commentCard.style.filter = "opacity(1)";
    }, 500);
}


let dot1 = document.querySelector(".dot__1");

dot1.addEventListener('click', () => {
    currentReviewIndex = 0;
    dot1.classList.add("active--dot")
    dot2.classList.remove("active--dot")
    dot3.classList.remove("active--dot")
    dot4.classList.remove("active--dot")
    animateReviewCard()
    renderReviewCards()
})

let dot2 = document.querySelector(".dot__2");

dot2.addEventListener('click', () => {
    currentReviewIndex = 1;
    dot2.classList.add("active--dot")
    dot1.classList.remove("active--dot")
    dot3.classList.remove("active--dot")
    dot4.classList.remove("active--dot")
    animateReviewCard()
    renderReviewCards()
})

let dot3 = document.querySelector(".dot__3");

dot3.addEventListener('click', () => {
    currentReviewIndex = 2;
    dot3.classList.add("active--dot")
    dot1.classList.remove("active--dot")
    dot2.classList.remove("active--dot")
    dot4.classList.remove("active--dot")
    animateReviewCard()
    renderReviewCards()
})

let dot4 = document.querySelector(".dot__4");

dot4.addEventListener('click', () => {
    currentReviewIndex = 3;
    dot4.classList.add("active--dot")
    dot1.classList.remove("active--dot")
    dot2.classList.remove("active--dot")
    dot3.classList.remove("active--dot")
    animateReviewCard()
    renderReviewCards()
})

let ctaOrderButtonMobile = document.querySelector(".cta__order__button__ofcontent");
let ctaOrderButtonPc = document.querySelector(".cta__order__button");

ctaOrderButtonMobile.addEventListener('click', () => {
    window.open('https://wa.me/+918085679315');
})

ctaOrderButtonPc.addEventListener('click', () => {
    window.open('https://wa.me/+918085679315');
})

