var xmlhttp;
var api_key = "9c2c75d9d67c3f98cc98bb29450115c5";
var url_movieDB = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key;

function callback() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
         console.log(data.results);
        lista_movie = "";
        for (i = 0; i < data.results.length; i++) {
            lista_movie += "<h1>" + data.results[i].title + "</h1> <br>"  
            +"<div class='d-flex box'>"
            +"<img src="+ "https://image.tmdb.org/t/p/w500" + data.results[i]["poster_path"] +" width='130' height='200' />" 
            +"<p class='pl-1'>" + data.results[i].overview + "</p>"
            +"</div>"
        }
        document.getElementById("saida").innerHTML = lista_movie;
    }
}

function searchMovie() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callback;

    query = document.getElementById("busca").value;
    xmlhttp.open("GET", url_movieDB + "&query=" + query, true);
    xmlhttp.send();
}