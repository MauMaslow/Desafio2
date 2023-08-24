// Función para hacer una solicitud GET al servidor para banner normal
function fetchBannerExtreno() {
    fetch('../php/bnFiltrosExtreno.php')
      .then(response => {
        console.log('Response from server:', response);
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        displayBannerExterno(data);
      })
      .catch(error => console.error('Error al obtener el banner:', error));
  }
  
  // Función para mostrar los banner en el HTML
  function displayBannerExterno(bannerExtreno) {
    let listaBanners = document.querySelector('[data-group-banner-extreno]');
  
    listaBanners.innerHTML = ''; // Limpiamos la lista antes de agregar el banner extreno
  
    bannerExtreno.forEach(banner => {
      let titulo = banner.titulo ? banner.titulo : "Título desconocido";
      let director = banner.director ? banner.director : "Director desconocido";
      let genero = banner.genero ? banner.genero : "Género desconocido";
      let anio = banner.anio ? banner.anio : "Año desconocido";
      let id = banner.id ? banner.id : "Año desconocido";
      let img = banner.img ? banner.img : "imagen-no-disponible.jpg"; // Si no hay imagen, usa una imagen por defecto
  
      // Calcula el SHA-256 del ID
      let sha256Id = sha256(id);
  
      let bannerDiv = document.createElement("div");
      bannerDiv.className = "banner-complete";
      let content = `
          <a href="../pages/resena.php?pages=${sha256Id}">
              <img src="../assets/imgPeliculas/${img}" alt="${titulo}">
              <div class="banner-info">                            
                  <h3 class="banner-text1">${titulo}</h3>
                  <span class="text2">${director}</span>    
              </div>
          </a>   
      `;
      bannerDiv.innerHTML = content;
      listaBanners.appendChild(bannerDiv);
    });
  }



  // Llamar a la función fetchMovies al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    fetchBannerExtreno();
    fetchBanner();
    fetchMovies();
  });
  