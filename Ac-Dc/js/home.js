const hamburguer = document.querySelector("hamburguer");

hamburguer.onclick = function(){
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}