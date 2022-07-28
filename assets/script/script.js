const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "https://static2.abc.es/media/summum/2022/01/09/casa-adele-1-k6WD--620x349@abc.jpg",
      rooms: 5,
      m: 500
    }
  ];


// Seccion Variables Iniciales

const boton = document.getElementById('buscar');
const numPiezas = document.getElementById('piezas');
const mtsMinimo = document.getElementById('desde');
const mtsMaximo = document.getElementById('hasta');
const contadorDptos = document.getElementById('contadorDptos');
const propiedadesTotales = document.querySelector('.propiedades');

cuenta = 0
// Funcion verificación de datos filtros vacios //





 boton.addEventListener("click", () => {
    if (mtsMinimo.value == "" || mtsMaximo.value == "" || numPiezas.value == "") {
        alert("Faltan Campos Por Llenar");
        return;
    }
});

console.log


const baseTemplate = (dpto) => {
    return `
       <div class="propiedad">
         <div class="img"
             style="background-image: url(${dpto.src})">
         </div>
         <section>
           <h5>${dpto.name}</h5>
           <div class="d-flex justify-content-between">
             <p>Cuartos:${dpto.rooms}</p>
             <p>Metros: ${dpto.m}</p>
           </div>
           <p class="my-3">${dpto.description}</p>
           <button class="btn btn-info ">Ver más</button>
         </section>
       </div>
     `;
   }

   console.log(baseTemplate)
   
   const cargaInicial = () => {
    let cantidad = "";
     for (const dpto of propiedadesJSON) {
       let htmlDptos = baseTemplate(dpto);
       cantidad ++
       propiedadesTotales.innerHTML += htmlDptos;

     }
     
     contadorDptos.innerHTML = cantidad;
   }

   console.log(cargaInicial)


   /* Seccion Filtro */


const filtroDptos = function () {
    const numPiezas = document.getElementById('piezas');
    const mtsMinimo = document.getElementById('desde');
    const mtsMaximo = document.getElementById('hasta');
    
    
    propiedadesTotales.innerHTML = "";
    contadorDptos.innerHTML = "";
    let cantidad = "";
    let htmlDptos = "";
    
    for (let depaFilt of propiedadesJSON) {
        if (numPiezas.value <= depaFilt.rooms && mtsMinimo.value <= depaFilt.m && mtsMaximo.value >= depaFilt.m) {
          cantidad ++
          htmlDptos += baseTemplate(depaFilt)
        }
        
        propiedadesTotales.innerHTML = htmlDptos;
        contadorDptos.innerHTML = cantidad
        
    }
};




boton.addEventListener('click', filtroDptos);
console.log(boton);
console.log(filtroDptos);




   /* Comando para cargar contenido (usado para verificar que cargara sin filtro) */

document.addEventListener("DOMContentLoaded", cargaInicial);







