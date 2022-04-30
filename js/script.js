//set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

//make mobile navigation work
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEL.addEventListener("click", () => {
  headerEL.classList.toggle("nav-open");
});

///////////////////////////////////////////
/////////smooth scrolling animation///////
//////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEL.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////
/////////Sticky navigation///////
//////////////////////////////////////////

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver((entries) => {
    const ent = entries[0]
    if(!ent.isIntersecting){
        document.body.classList.add("sticky");
    }else{
        document.body.classList.remove("sticky");
    }
    console.log(ent)
}, {
  root: null,
  threshold: 0,
  rootMargin : '-80px'
});
obs.observe(sectionHeroEL);
