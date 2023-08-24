
const footer = () => {
    const footer = document.querySelector('[data-footer]');
    footer.innerHTML = '';

    const sectionfooter = document.createElement("section");
    sectionfooter.className = "footer";
    const content = `        
            <div class="footer__rodape">
                <p>Desarrollado por Mauricio Martínez</p>
                <p>2023</p>
            </div>         
                `;
    sectionfooter.innerHTML = content;
    footer.appendChild(sectionfooter);
}
