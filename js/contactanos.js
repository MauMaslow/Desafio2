const contactanos = () => {
    const contactanos = document.querySelector('[data-contactanos]');
    contactanos.innerHTML = '';

    const sectioncontactanos = document.createElement("section");
    sectioncontactanos.className = "contactanos";
    const content = `        
                <div class="contactanos_enlaces">
                <div class="contenedor__logo">
                    <img src="/assets/Inicio/control.png" alt="">
                    <h1><span>Alura</span>Geek</h1>
                </div>   
                <ul class="lista">
                    <li>Quienes somos</li>
                    <li>Política de privacidad</li>
                    <li>Programa de fidelidad</li>
                    <li>Nuestras tiendas</li>
                    <li>Quiero ser franquiciado</li>
                    <li>Anuncie aqui</li>
                </ul>
                </div> 

            <div class="formulario_contacto">
                <h3>Hable con nosotros</h3>
                <form action="#">
                    <div class="form__input">
                    <label>Nombre</label>
                    <input type="text" name="" id="" placeholder="Nombre">
                    </div>
                    <div class="form__textarea">
                    <textarea type="text" name="" id="" placeholder="Escribe tu mensaje"></textarea>            
                    </div>
                    <button type="submit">Enviar mensaje</button>    
                </form>
            </div>         
                `;
    sectioncontactanos.innerHTML = content;
    contactanos.appendChild(sectioncontactanos);
}



