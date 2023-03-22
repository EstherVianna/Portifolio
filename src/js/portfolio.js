const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
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
    origin: "right",
    distance: "100px",
    duration: 500,
});

sr2.reveal('.menu', {delay: 500 })


function copyAndPaste(){
    const email = document.querySelector("#email");
    const text = document.querySelector("#pText")

    email.select()
    navigator.clipboard.writeText(email.value)

    document.innerHTML(`Texto copiado: ${email.value}`)
    
} 

window.onscroll = function() {
    const target = document.querySelector(".footer");
    const targetPosition = target.getBoundingClientRect().top;
    const height = window.innerHeight;
    const float = document.querySelector(".float");

    if(targetPosition < height){
        float.style.display = "none"
    }
    else if(targetPosition > height){
        float.style.display = "flex";
    }
}

