const titulo = document.querySelector("h1");

titulo.className = "animacion-titulo";

setTimeout(() => {
    titulo.className = "";
}, 1000);

let formulario = document.querySelector("#contacto form")
console.log("formulario", formulario);

formulario.addEventListener("submit", (e) => {
    console.log("confirmar envio", e);
})



const habilidades = document.querySelectorAll("#habilidades ol li");
console.log("habilidades",habilidades);

habilidades.forEach((habilidad) => {
    console.log("habilidad",habilidad);

    const porcentajeInicio = habilidad.getAttribute("data-porcentaje");
    const porcentajeFinal = 100 - parseInt(porcentajeInicio);
    const colorInicio = "green";
    const colorFinal = "white";
    habilidad.style.background = `linear-gradient(to right, ${colorInicio} ${porcentajeInicio}%, ${colorFinal} ${porcentajeFinal}%`;
    console.log(habilidad.style.background);
});

