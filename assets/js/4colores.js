const cajas = document.querySelectorAll('[id^="caja"]');

cajas.forEach((caja) => {
    caja.addEventListener("click", () => {
        caja.style.backgroundColor = "black";
    });
});
