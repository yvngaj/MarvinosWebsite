showSchoolInfoButton.addEventListener("click", () => {
  container.style.transform = "translateX(150%)";
  container.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "uae_school_info.html"; // Redirect to the UAE School Info page
  }, 1000); // Delay before redirecting (in milliseconds)
});
const schoolContainer = document.getElementById("school-container");
const infoBoxes = document.querySelectorAll(".info-box");
const scrollTarget = document.getElementById("scroll-target");
const windowHeight = window.innerHeight;

const scrollToBoxes = () => {
  scrollTarget.scrollIntoView({ behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  const containerBottom = schoolContainer.getBoundingClientRect().bottom;

  if (containerBottom < windowHeight) {
    infoBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.style.opacity = 1;
      }, index * 500);
    });
  }
});
