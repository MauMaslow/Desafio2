//comnucarnos con el servidor metodo GET

const listaproductos = () =>
    fetch ("http://localhost:3000/productos").then(respuesta => 
    respuesta.json());

//crearproducto

const crearproducto = (imgUrl,categorias,nombre,precio,descripcion) => {
    return fetch ("http://localhost:3000/productos",
        //objeto {}
        {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        //JSON.stringify tranforma el objeto lejible para JSON y agrega al contructor la libreria uuid para el id 
        body: JSON.stringify({imgUrl,categorias,nombre,precio,descripcion, id: uuid.v4()}),
        });
};

const eliminarproducto = (id) =>{    
    return fetch (`http://localhost:3000/productos/${id}`,{
    method: "DELETE"
    });
};


//exportamos una constante que incluya la consante del GET
export const productServices = {
    listaproductos,
    crearproducto,
    eliminarproducto,
};


