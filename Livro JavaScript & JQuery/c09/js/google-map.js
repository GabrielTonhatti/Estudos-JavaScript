function init() {
    var mapOptions = {  // Configura as opções de naoa
        center: new google.maps.LatLng(40.782710,-73.965310),
        mapTypeID: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
    var venueMap;   // Map() desenha um mapa
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');  // Cria o element <script>
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);  // Adiciona elemento á página
}

window.onload = loadScript; // Chama a Onload