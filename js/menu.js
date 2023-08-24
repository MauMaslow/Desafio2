
const menu = () => {
    const menu = document.querySelector('[data-menu]');
    menu.innerHTML = '';

    const sectionmenu = document.createElement("section");
    sectionmenu.className = "menu";
    const content = `        
                    <div class="contenedor__logo">
                    <img src="/assets/Inicio/control.png" alt="">
                    <h1><span>Alura</span>Geek</h1>
                    </div>
                    <div class="buscador">
                    <input class="input_buscador" type="text" placeholder="¿Qué deseas buscar?">    
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>            
                    <img class="lupa" src="/assets/Inicio/lupa.png" alt="">       
                `;
    sectionmenu.innerHTML = content;
    menu.appendChild(sectionmenu);
}

