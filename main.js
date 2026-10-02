let menuButton = document.querySelector(".navbar__mobile__icon");
let sidebar = document.querySelector(".sidebar");
let sidebarOverlay = document.querySelector(".sidebar__overlay");
let orderOnlineButton1 = document.querySelector(".order__online__button__1")

let currentReviewIndex = 0;

let searchButton = document.querySelector(".navbar__search__img");
let searchInput = document.querySelector(".navbar__search__input")

searchButton.addEventListener('click', () => {
    searchButton.style.display = "none"
    searchInput.style.display = "block"
    searchInput.focus()
})

// Adding autocomplete
// Dono inputs ko ek saath pakdo (PC aur mobile)
const searchInputs = document.querySelectorAll(
    ".navbar__search__input, .sidebar__search__input"
);

// Har input ke liye same function chalega, isliye code ek hi baar likhna pada
function setupAutocomplete(input) {
    // Input ke around ek wrapper banao (dropdown isi ke hisaab se position hoga)
    const wrap = document.createElement("div");
    wrap.className = "search-wrap";
    input.before(wrap);   // wrapper ko input ki jagah pe rakho
    wrap.appendChild(input); // input ko wrapper ke andar le jao

    // Suggestions ki list ab wrapper ke andar, input ke baad
    const list = document.createElement("ul");
    list.className = "suggestions";
    input.after(list);

    // Jab bhi user kuch type kare (har key pe chalta hai)
    input.addEventListener("input", () => {
        // Jo likha hai usko lowercase kar do, taaki "CAKE" aur "cake" same maane jayein
        const query = input.value.trim().toLowerCase();

        // Purani suggestions saaf karo
        list.innerHTML = "";

        // Agar input khali hai to yahin ruk jao, kuch dikhane ki zaroorat nahi
        if (!query) return;

        // products array mein se wahi rakho jinke naam mein query aati hai
        const matches = products.filter((p) =>
            p.name.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            const li = document.createElement("li")
            li.textContent = "No Products Found"
            li.className = "no-result"
            list.appendChild(li)
            return;
        }

        // Har match ke liye ek <li> banao aur list mein daalo
        matches.forEach((p) => {
            const li = document.createElement("li");
            li.className = "suggestion-item";
            li.textContent = `${p.name}`;

            // Click karne pe: naam input mein daalo aur list band karo
            li.addEventListener("click", () => {
                input.value = p.name;
                list.innerHTML = "";
            });

            list.appendChild(li);
        });
    });

    // Hide search bar when clicked outside
    document.addEventListener("click", (e) => {
        if (e.target === searchButton) return;

        if (!wrap.contains(e.target)) {
            list.innerHTML = "";
        }
    });
}

// Dono inputs pe autocomplete lagao
searchInputs.forEach((input) => {
    setupAutocomplete(input);
});


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

// Adding animations to hero elements
document.addEventListener('DOMContentLoaded', () => {
    let elements = document.querySelectorAll(".hero__title, .hero__desc, .hero__button");
    elements.forEach((element) => {
        element.style.transform = "translateX(0px)";
    });
})

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

// Scrolling page to products section
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

// Changes year automatically of copyright
document.getElementById("year").textContent = new Date().getFullYear();

