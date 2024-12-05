let titulo = document.getElementById('titulo');

titulo.innerHTML = "BIENVENIDOS AL SITIO OFICIAL DE COMPRA DE ENTRADAS PARA TU EQUIPO FAVORITO"

let botonclick = document.querySelectorAll('.boton')[0]

botonclick.addEventListener('click', () => {
    alert("usted obtuvo con exito su entrada, complete sus datos para finalizar")
})

botonclick = document.querySelectorAll('.boton')[1]

botonclick.addEventListener('click', () => {
    alert("usted obtuvo con exito su entrada, complete sus datos para finalizar")
})


botonclick = document.querySelectorAll('.boton')[2]


botonclick.addEventListener('click', () => {
    alert("usted obtuvo con exito su entrada, complete sus datos para finalizar")
})

botonclick = document.querySelectorAll('.boton')[3]

botonclick.addEventListener('click', () => {
    alert("usted obtuvo con exito su entrada, complete sus datos para finalizar")
})

let equipos = [];

const cargarequipos = () => {
    equipos = [
        {
            club: "Boca",
            estadio: "Bombonera"
        },
        {
            club: "River",
            estadio: "Monumental"
        },
        {
            club: "Racing",
            estadio: "Cilindro"
        },
        {
            club: "SanLorenzo",
            estadio: "NuevoGasometro"
        },
        {
            club: "Independiente",
            estadio: "libertadoresDeAmerica"
        },
        {
            club: "Estudiantes",
            estadio: "UnicoDeLaPlata"
        }
    ];

     let main = document.querySelector('#main');
     let sectiondelmain = document.createElement('section');

      let lista = document.createElement('ul');

      equipos.forEach(objeto => {
          let item = document.createElement('li');
          item.textContent = `club: ${objeto.club}, estadio: ${objeto.estadio}`;

      lista.appendChild(item);
      });

      sectiondelmain.appendChild(lista);
    
     main.appendChild(sectiondelmain);
}
cargarequipos();

localStorage.setItem("equipos", JSON.stringify(equipos))
