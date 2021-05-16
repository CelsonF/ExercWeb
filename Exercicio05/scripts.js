function getPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "A funcionalidade de Geolocation não é suportada neste browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    texto = "Minha posição é dada pela latitude <strong>" + lat 
             + "</strong> e longitude <strong>" + long + "</strong>.";
    document.getElementById('saida').innerHTML = texto;
}