

const nuevoProducto = (name, imageURL, price,id) =>{
    const card = document.createElement("div")
    const contenido = `<div>
    ${name}
    ${imageURL}
    ${price}
    ${id}
    </div>`

card.innerHTML=contenido
card.dataset.id = id

return card
}




const productos = document.querySelector('[data-product]') 