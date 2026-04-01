const palabra = "Hola Diosmira❤";
const contenedor = document.getElementById("texto");

palabra.split("").forEach((letra,i)=>{
    const span = document.createElement("span");
    span.textContent = letra;
    span.style.animationDelay = i * 0.2 + "s";
    contenedor.appendChild(span);
});

function crearParticula(){
    const p = document.createElement("div");
    p.classList.add("particula");

    p.style.left = Math.random()*100 + "vw";
    p.style.animationDuration = (Math.random()*5+3)+"s";

    document.body.appendChild(p);

    setTimeout(()=>p.remove(),8000);
}

setInterval(crearParticula,200);