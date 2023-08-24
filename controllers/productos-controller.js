//importamos la constante del GET
import { productServices } from "./cliente_servidor.js"

function crearProductoCard(imgUrl,categorias,nombre,precio,descripcion,id) {
    
    const productoCard = document.createElement("div");
    productoCard.className = "card";
    const content = `        
                    <div class="img-card">
                    <img src=".${imgUrl}" alt="">
                    <a class="a1" id="${id}" href="#" data-delete ><i class="fa-solid fa-trash"></i></a>
                    <a class="a2" id="${id}" href="#" ><i class="fa-solid fa-pencil"></i></a>
                    </div>
                    <div class="info-card">
                    <span>${nombre}</span>                    
                    <span class="precio">$ ${precio}</span>                    
                    <span class="serial">${id}</span>
                    </div>
                `;
    productoCard.innerHTML = content;

    const btn = productoCard.querySelector("[data-delete]");    
    btn.addEventListener("click", () => {
    const id = btn.id
    productServices.eliminarproducto(id).then (respuesta => {
        console.log(respuesta)
    }).catch((err) => alert ("ocurrio un error"));

    });

    return productoCard;
}

const card = document.querySelector('[data-productos]');

//Para emplear la constante agregamos la que importamos + .lafunción
productServices
.listaproductos()
    .then((data) =>{
        //destructurar es {} anteriormente {producto.imgUrl,producto.categorias,producto.nombre,producto.precio,producto.descripcion,producto.id} por ->
        data.forEach( ({imgUrl,categorias,nombre,precio,descripcion,id}) => {
            const nuevaCard = crearProductoCard(imgUrl,categorias,nombre,precio,descripcion,id)    
            card.appendChild(nuevaCard);
            });  
    }).catch((error) => alert (error));










