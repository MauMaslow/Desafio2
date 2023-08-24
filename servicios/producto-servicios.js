//GET

const listaProductos = () =>{
    fetch("http://localhost:3000/productos")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const crearProductos = (name, imageURL, price) =>{
fetch('http://localhost:3000/productos', {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify ({
        name,
        imageURL, 
        price
    })
}).then(respuesta => {
    if(respuesta.ok){
        return respuesta.body
    }
})
throw new  Error ("No se pudo crear tu producto")
}

export const productosServicios = {
   listaProductos,
   crearProductos
}
