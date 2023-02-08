ScrollReveal({ reset: true });


ScrollReveal().reveal('#sobreMim', {duration: 3000});
ScrollReveal().reveal('#projetos', {duration: 2500});
ScrollReveal().reveal('#contatos', {duration: 2500});

function copyAndPaste(){
    const email = document.querySelector("#email");
    const text = document.querySelector("#pText")

    email.select()
    navigator.clipboard.writeText(email.value)

    document.innerHTML(`Texto copiado: ${email.value}`)
    
} 

window.onscroll = function() {
    const target = document.querySelector(".rodape");
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