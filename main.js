let reviews = [{ img: "assets/images/reviewer-1.jpg", name: "Ishita Singh", city: "Ahmedabad", review: "“The cakes were really fresh and tasty, and the staff was very polite. Overall, I had a very nice experience here.”" }, { img: "assets/images/reviewer-2.jpg", name: "Karan Gokhale", city: "Mumbai", review: "“Loved the ambience and the quality of bakery items. Everything was fresh, nicely presented, and the service was also very good.”" }, { img: "assets/images/reviewer-3.jpg", name: "Prashant Dubey", city: "Cochin", review: "“I ordered a cake for my family and everyone loved it. Taste was excellent, delivery was on time, and the staff was very helpful.”" }, { img: "assets/images/reviewer-4.jpg", name: "Preeti Prajapati", city: "Srinagar", review: "“Really happy with my visit. The pastries were fresh, the place was clean and peaceful, and the overall experience was totally worth it.”" }]

let menuButton = document.querySelector(".navbar__mobile__icon");
let sidebar = document.querySelector(".sidebar");
let sidebarOverlay = document.querySelector(".sidebar__overlay");
let orderOnlineButton1 = document.querySelector(".order__online__button__1")
let reviewLeftButton = document.querySelector(".what__they__say__arrow__left")
let reviewImg = document.querySelector(".what__they__say__profile__img");
let review = document.querySelector(".review");
let username = document.querySelector(".what__they__say__username");
let city = document.querySelector(".what__they__say__city");
let reviewRightButton = document.querySelector(".what__they__say__arrow__right")

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

orderOnlineButton1.addEventListener('click', () => {
    window.open('https://wa.me/+918085679315')
})

reviewLeftButton.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    console.log(currentReviewIndex);
    renderReviewCards()
})

function renderReviewCards() {
    reviewImg.src = reviews[currentReviewIndex].img
    review.innerText = reviews[currentReviewIndex].review
    username.innerText = reviews[currentReviewIndex].name
    city.innerText = reviews[currentReviewIndex].city
}

reviewRightButton.addEventListener('click', () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    console.log(currentReviewIndex)
    renderReviewCards()
})

renderReviewCards()