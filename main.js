$(criarEvento);

function criarEvento(){
  $("button").click(function(){
    var valueSearch = $('#txt_name').val();
    var searchOlx = valueSearch.replace(" ","+");
    var searchMl  = valueSearch.replace(" ","-");
    sendReqOlx("https://sp.olx.com.br/baixada-santista-e-litoral-sul?q="+searchOlx+"");
    sendReqMl("https://lista.mercadolivre.com.br/"+searchMl+"_ITEM*CONDITION_2230581");
  })
}




function rasparPaginaOlx(documento){
  var price = documento.querySelectorAll(".OLXad-list-price");
  var name  = documento.querySelectorAll(".OLXad-list-title");
  var image = documento.querySelectorAll(".image")
  var divteste = document.querySelectorAll(".teste")
  var imagess = document.querySelectorAll(".imagess")
  var vamo = document.querySelectorAll(".vamo")
  for(var i=0; i<5; i++){
    var divNova = document.createElement("div");
    divNova.innerHTML = price[i].innerHTML;
		divteste[i].appendChild(divNova);
 };
   /* price.forEach(function(div){
    var divNova = document.createElement("div");
    divNova.innerHTML = div.innerHTML;
		document.body.appendChild(divNova);
  }); */
  for(var i=0; i<5; i++){
    var divNova = document.createElement("div");
    divNova.innerHTML = name[i].innerHTML;
		vamo[i].appendChild(divNova);
 };
 /*  name.forEach(function(div){
    var divNova = document.createElement("div");
    divNova.innerHTML = div.innerHTML;
		document.body.appendChild(divNova);
  }); */
  for(var i=0; i<5; i++){
    var divNova = document.createElement("IMG");
    imagess[i].src = image[i].src;
		//imagess[i].appendChild(divNova);
 };
 /*  image.forEach(function(div){
    var divNova = document.createElement("IMG");
    divNova.src = div.src;
		document.body.appendChild(divNova);
  }) */
}

function rasparPaginaMl(documento){
  var price = documento.querySelectorAll(".price__fraction");
  var name  = documento.querySelectorAll(".main-title");
  var image = documento.querySelectorAll(".lazy-load")
  console.log(name);
   for(var i=0; i<7; i++){
    var divNova = document.createElement("div");
    divNova.innerHTML = price[i].innerHTML;
		document.body.appendChild(divNova);
 };
  for(var i=0; i<7; i++){
    var divNova = document.createElement("div");
    divNova.innerHTML = name[i].innerHTML;
		document.body.appendChild(divNova);
 };
  for(var i=0; i<7; i++){
    var divNova = document.createElement("IMG");
    divNova.src = image[i].src;
		document.body.appendChild(divNova);
 }; 
}

function sendReqOlx(url){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200) {
        var parser = new DOMParser();
        var documento = parser.parseFromString(this.responseText,"text/html");
        rasparPaginaOlx(documento);
      }
    };
  xhttp.open("GET","https://cors-anywhere.herokuapp.com/"+url,true);
  xhttp.send();
}

function sendReqMl(url){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200) {
        var parser = new DOMParser();
        var documento = parser.parseFromString(this.responseText,"text/html");
        rasparPaginaMl(documento);
      }
    };
  xhttp.open("GET","https://cors-anywhere.herokuapp.com/"+url,true);
  xhttp.send();
}

/* function sendReqOlx(url){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200) {
        var parser = new DOMParser();
        var documento = parser.parseFromString(this.responseText,"text/html");
        rasparPaginaOlx(documento);
      }
    };
  xhttp.open("GET","https://cors-anywhere.herokuapp.com/"+url,true);
  xhttp.send();
} */