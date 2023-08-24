//comnucarnos con el servidor metodo GET
const listaproductos = () =>
    fetch("https://maumaslow.github.io/Desafio2/db.json")
    .then(respuesta => respuesta.json())
    .then(data => data.productos);
    

//crearproducto

const crearproducto = (imgUrl,categorias,nombre,precio,descripcion) => {
    return fetch ("https://maumaslow.github.io/Desafio2/db.json",
        //objeto {}
        {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        //JSON.stringify tranforma el objeto lejible para JSON y agrega al contructor la libreria uuid para el id 
        body: JSON.stringify({imgUrl,categorias,nombre,precio,descripcion, id: uuid.v4()}),
        })
        .then(respuesta => respuesta.json())
        .then(data => data.productos);
};

const eliminarproducto = (id) =>{    
    return fetch (`https://maumaslow.github.io/Desafio2/db.json/${id}`,{
    method: "DELETE"
    })
    .then(respuesta => respuesta.json())
    .then(data => data.productos);
};


//exportamos una constante que incluya la consante del GET
export const productServices = {
    listaproductos,
    crearproducto,
    eliminarproducto,
};
