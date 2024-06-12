document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray(".image-sequence");
  const container = document.querySelector(".image-sequence-container");

  // Hide all images initially except the first one
  gsap.set(images, { display: "none" });
  gsap.set(images[0], { display: "block" });

  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "+=2000", // Adjust this value based on how many images and scroll distance you want
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const index = Math.floor(progress * (images.length - 1));
      images.forEach((img, i) => {
        gsap.set(img, { display: i === index ? "block" : "none" });
      });
    },
  });
});


// 

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
const images2 = gsap.utils.toArray(".image-sequence2");
  const container2 = document.querySelector(".image-sequence-container2");

  // Hide all images initially except the first one
  gsap.set(images2, { display: "none" });
  gsap.set(images2[0], { display: "block" });

  ScrollTrigger.create({
    trigger: container2,
    start: "top top",
    end: "+=2000", // Adjust this value based on how many images and scroll distance you want
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const index = Math.floor(progress * (images2.length - 1));
      images2.forEach((img, i) => {
        gsap.set(img, { display: i === index ? "block" : "none" });
      });
    },
  });
});