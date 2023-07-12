
// 1: Leo title y lo imprimo por consola
let title = document.querySelector("title");
console.log(title.innerHTML);

// 3: 

let listaDl = document.querySelector("dd");
console.log(listaDl.textContent);


var listaDescriptiva = document.querySelectorAll("dl");console.log(listaDescriptiva);




/*
document.addEventListener("DOMContentLoaded", function() {
    var listaDescriptiva = document.querySelectorAll("dl");
  
    listaDescriptiva.forEach(function(dl, index) {
      var etiquetasDT = dl.querySelectorAll("dt");
      var etiquetasDD = dl.querySelectorAll("dd");
      
      var valores = [];
      
      for (var i = 0; i < etiquetasDT.length; i++) {
        var dd = etiquetasDD[i].textContent;
        
        if (dd.trim() !== "") {
          valores.push(dd);
        }
      }
      
      console.log("Integrante " + (index + 1) + ": " + valores.join(" "));
    });
  });
  
  */