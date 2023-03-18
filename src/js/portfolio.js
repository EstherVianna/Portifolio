//const reveal = () => {ScrollReveal({ reset: true});


//ScrollReveal().reveal('#aboutMe', {duration:1000});
//ScrollReveal().reveal('#projects', {duration: 2500});
//ScrollReveal().reveal('#contact', {duration: 2500});
//}

//reveal()

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

