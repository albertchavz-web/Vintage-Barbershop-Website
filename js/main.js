// ========================
// File: js/main.js
// Vintage Barbershop Project
//=========================
// -----DOM Elements ----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");

// --- Services Data (Array of Objects) ---
const services = [
  {
    title: "Classic Haircut",
    text: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/images/feature-1.jpg",
  },
  {
    title: "Beard Trim",
    text: "Shape and line-up your beard for a clean, sharp finish.",
    image: "assets/images/feature-2.jpg",
  },
  {
    title: "Straight Razor Shave",
    text: "Hot towel treatment with a smooth traditional shave.",
    image: "assets/images/feature-3.jpg",
  },
];
// --- Navigation Data (Array of Objects) ----
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#features" },
  { label: "Book", href: "#cta" },
  { label: "Contact", href: "#footer" },
];
// --- Helpers / Functions ----- //
// update footer year automatically
const setCurrentYear = () => {
  //will update year in footer
  const now = new Date(); // pre-built constructor that pulls real-time date info.
  yearEl.textContent = now.getFullYear(); // changing the text content of the span element to get the new date info specifically the year
};
//Toggel mobile menu open/close
let isMenuOpen = false; // this variable keeps track wether the mobile menu is open or closed
const toggleMobileMenu = () => {
  if (!mobileMenu) return;
  if (isMenuOpen === false) {
    // check out tracker variable to see if the menu is currently closed
    mobileMenu.classList.add("is-open"); // add the CSS class that makes the menu visable
    isMenuOpen = true; //ipdate our tracker so we know the menu is open
  } else {
    mobileMenu.classList.remove("is-open"); // remove the CSS class so the menu becomes hidden again
    isMenuOpen = false;
  }
}; // Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};
const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};
// Makes Nav bar stick on scroll (sticky navbar)
const handleHeaderOnScroll = () => {
  if (!siteHeader) return;
  if (window.scrollY > 10) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
};
//-----Event Listeners ------
// 1) set year on page load
setCurrentYear();
// 2) hamburger menu toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMobileMenu();
  });
}
// 3) close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}
// 4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    updateHeadingText("booking coming next - great choice!");
  });
}
// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
  callBtn.addEventListener("click", () => {
    if (phoneLink) {
      updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
      updateHeadingText("Call feature coming next!");
    }
  });
}
// 6) rounds corners of navbar on scroll
window.addEventListener("scroll", handleHeaderOnScroll);
if (callBtn) {
  callBtn.addEventListener("click", () => {
    window.location.href = `tel:${shopInfo.phoneRaw}`;
  });
}

// ---- Render Features Using forEach() ----
const renderFeatures = () => {
  if (!featureGrid) return;
  services.forEach((service) => {
    const card = document.createElement("article");
    card.classList.add("feature-card");
    card.innerHTML = `
    <img src="${service.image}" alt="${service.title}" class="feature-img"
    />
    <h3 class="feature-title">${service.title}</h3>
    <p class="feature-text">${service.text}</p>
    `;
    featureGrid.appendChild(card);
  });
};
// ---- Render Features Using Map() ----
const renderFeaturesMap = () => {
  const cardsHTML = services
    .map((service) => {
      return `
    <article class="feature-card">
    <img src="${service.image}" alt="${service.title}" class="feature-img" />
    <h3 class="feature-title">${service.title}</h3>
    <p class="feature-text">${service.text}</p>
    </article>
    `;
    })
    .join("");
  featureGrid.innerHTML = cardsHTML;
};
//---- Render Navigation Using map () ----
const renderNavigation = () => {
  //Desktop Nav
  if (nav) {
    const navHTML = navLinks
      .map((link) => {
        return `
      <a href="${link.href}" class="nav-link">${link.label}</a>
    `;
      })
      .join("");
    nav.innerHTML = navHTML;
  }
  // Mobile Nav
  if (mobileMenu) {
    const mobileHTML = navLinks
      .map((link) => {
        return `
      <a href="${link.href}" class="mobile-link">${link.label}</a>
    `;
      })
      .join("");
    mobileMenu.innerHTML = mobileHTML;
  }
};
// ----Function Calls ----
renderFeatures();
//renderFeaturesMap();
renderNavigation();
handleHeaderOnScroll()
