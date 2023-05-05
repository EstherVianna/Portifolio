const sr = ScrollReveal({
    origin: "top",
    duration: 2000,
  });

  sr.reveal('#aboutMe', { delay: 300 });
  sr.reveal('#projects', { delay: 300 });
  sr.reveal('.projects', { delay: 400 });
  sr.reveal('#contact', { delay: 400 });
  sr.reveal('#name', { delay: 200 });
  sr.reveal('#occ', { delay: 200 });
  sr.reveal('#slogan', { delay: 200 });

const sr2 = ScrollReveal({
    origin: "left",
    distance: "10px",
    duration: 1000,
});

sr2.reveal('#img', {delay: 1000 }
)

// hide floating medias

const hideMedia = ()=> {

    const target = document.querySelector(".footer");
    const targetPosition = target.getBoundingClientRect().top;
    const height = window.innerHeight;
    const float = document.querySelector(".float");

        if (targetPosition < height) {
            float.style.display = "none";
        }
        else if (targetPosition > height) {
            float.style.display = "flex";
        }
};

window.onscroll = hideMedia;

const angleUp = document.querySelector("#scrollUp-btn");

    angleUp.addEventListener("click", ()=>{
        window.scrollTo(0, 0)
    });




