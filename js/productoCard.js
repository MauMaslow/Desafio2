function crearProductoCard(nombre, precio, serial) {
    const card = document.querySelector('[data-productos]');

    const productoCard = document.createElement("div");
    productoCard.className = "card";
    const content = `        
                    <div class="img-card">
                    <img src="../assets/productos/img1.png" alt="">
                    <a id="a1" href=""><i class="fa-solid fa-trash"></i></a>
                    <a id="a2" href=""><i class="fa-solid fa-pencil"></i></a>
                    </div>
                    <div class="info-card">
                    <span>${nombre}</span>
                    <span class="precio">${precio}</span>                    
                    <span class="serial">${serial}</span>
                    </div>
                `;
    productoCard.innerHTML = content;
    card.appendChild(productoCard);
}

crearProductoCard(1,2,3)
crearProductoCard("a",2,"4")
