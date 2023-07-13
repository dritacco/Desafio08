// 1: Leo title y lo imprimo por consola
let title = document.querySelector("title");
console.log(title.innerHTML);

// 3: Mostrar el nombre completo de cada integrante:

//Cargo en variable los valores de dl
let listaIntegrantes = document.querySelectorAll("dl");

//itero en for para los dos integrantes
for (let indice = 0; indice < listaIntegrantes.length; indice++) {
  let dl = listaIntegrantes[indice];
  let etiDD = dl.querySelectorAll("dd");
  //array vacio para ir almacenando nombre/apellido
  let valores = [];

  //itero los cuatro valores de los dd
  for (let i = 0; i < etiDD.length; i++) {
    //guardo el nombre en cada iteracion
    let dd = etiDD[i].textContent;
    //pusheo los valores que no están nulos en el array
    if (dd.trim() !== "") {
      valores.push(dd);
    }
  }
  //logueo los integrantes separando con espacio
  console.log("Integrante "+(indice+1)+": "+valores.join(" "));
}