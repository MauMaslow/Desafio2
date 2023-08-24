//importamos la constante del GET
import { productServices } from "./cliente_servidor.js"

function crearCard(imgUrl,categorias,nombre,precio,descripcion,id) {
    
    const productoCard = document.createElement("div");
    productoCard.className = "card";
    const content = `                     
                    <img src="${imgUrl}" alt="imagen">
                    <span>${nombre}</span>
                    <span class="precio">$ ${precio}</span>
                    <a href="../pages/productos.html">Ver producto</a>                   
                `;
    productoCard.innerHTML = content;
    return productoCard;
}

const card_star = document.querySelector('[data_star-wars]');

//Para emplear la constante agregamos la que importamos + .lafunción
productServices
.listaproductos()
    .then((data) =>{
        //destructurar es {} anteriormente {producto.imgUrl,producto.categorias,producto.nombre,producto.precio,producto.descripcion,producto.id} por ->
        data.forEach( ({imgUrl,categorias,nombre,precio,descripcion,id}) => {
            if (categorias === "Star Wars") {
                const nuevaCard = crearCard(imgUrl,categorias,nombre,precio,descripcion,id)    
                card_star.appendChild(nuevaCard);
            }            
            });  
    }).catch((error) => alert (error));


    const card_consola = document.querySelector('[data_consolas]');

    //Para emplear la constante agregamos la que importamos + .lafunción
    productServices
    .listaproductos()
        .then((data) =>{
            //destructurar es {} anteriormente {producto.imgUrl,producto.categorias,producto.nombre,producto.precio,producto.descripcion,producto.id} por ->
            data.forEach( ({imgUrl,categorias,nombre,precio,descripcion,id}) => {
                if (categorias === "Consolas") {
                    const nuevaCard = crearCard(imgUrl,categorias,nombre,precio,descripcion,id)    
                    card_consola.appendChild(nuevaCard);
                }            
                });  
        }).catch((error) => alert (error));
    
    

        const card_diverso = document.querySelector('[data_diversos]');

        //Para emplear la constante agregamos la que importamos + .lafunción
        productServices
        .listaproductos()
            .then((data) =>{
                //destructurar es {} anteriormente {producto.imgUrl,producto.categorias,producto.nombre,producto.precio,producto.descripcion,producto.id} por ->
                data.forEach( ({imgUrl,categorias,nombre,precio,descripcion,id}) => {
                    if (categorias === "Diversos") {
                        const nuevaCard = crearCard(imgUrl,categorias,nombre,precio,descripcion,id)    
                        card_diverso.appendChild(nuevaCard);
                    }            
                    });  
            }).catch((error) => alert (error));
        
        






