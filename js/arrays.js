// ARRAYS //

const areaResidencia = [
  " ",
  "Area Urbana",
  "Conurbano",
  "Pequenia ciudad/Pueblo",
  "Barrio Privado",
];

const paises = [
  " ",
  "Argentina",
  "Uruguay",
  "Chile",
  "Mexico",
  "Colombia",
  "Mexico",
  "Venezuela",
  "Brasil",
];

console.table(areaResidencia); //Visualizar todos los elementos de un array en la consola JS

console.log(areaResidencia.length); // Propiedad que nos devuelve el total numerico de un array

function recorrerPaises() {
  for (i = 0; i <= paises.length; i++) {
    console.log(paises[i]);
  }
}

function agregarOtroPais(nuevoPais) {
  if (nuevoPais.trim() > "") {
    paises.push(nuevoPais); // .push agrega valores al final de array
    console.table(paises);
  }
}

function agregarOtroPaisInicio(nuevoPais) {
  if (nuevoPais.trim() > "") {
    paises.unshift(nuevoPais); // .unshift agrega valores al inicio de array
    console.table(paises);
  }
}

function eliminarUltimoPais() {
  let elementoEliminado = paises.pop(); // .pop elimina el ultimo elemento del array
  console.warn("Se ha eliminado correctamente el pais: ", elementoEliminado);
}

function fusionarArrays() {
  const perros = ["Salchicha", "Doberman", "Labrador"];
  const gatos = ["Siames", "Sieteleches", "Malvato"];
  const mascotas = perros.concat(gatos); // .concat junta dos arrays
  console.table(mascotas);
}

let posicionDePais = paises.indexOf("Venezuela"); //.indexOf nos dice el numero en el array de un valor

const existe = paises.includes("Brasil"); // .includes nos devuelve si un valor esta o no en una array a traves de true o false

function eliminarPaisBuscado() {
  const buscarPais = prompt("Ingrese nombre de pais que desea eliminar:");
  const indice = paises.indexOf(buscarPais);
  if (indice > -1) {
    paises.splice(indice, 1); //.splice elimina un elemento en el medio de la array
  } else {
    console.warn(
      "El pais que ingresó no se encuentra en la lista: ",
      buscarPais
    );
  }
  console.table(paises);
}

//Idea para desafio: agregar array a cuotas para que sea hasta 12
