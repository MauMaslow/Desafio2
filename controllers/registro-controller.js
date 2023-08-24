import { productServices } from "./cliente_servidor.js"

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",  (evento) => {
evento.preventDefault();
const imgUrl = document.querySelector("[data-imgUrl]").value;
const categorias = document.querySelector("[data-categorias]").value;
const nombre = document.querySelector("[data-nombre]").value;
const precio = document.querySelector("[data-precio]").value;
const descripcion = document.querySelector("[data-descripcion]").value;

console.log(imgUrl, "-", categorias);

productServices
    .crearproducto(imgUrl,categorias,nombre,precio,descripcion)
    .then(() => {
       window.location.href = "../pages/registro_completado.html"
    })
    .catch(err => console.log(err));    
});