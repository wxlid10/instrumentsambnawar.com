document.addEventListener("DOMContentLoaded", function () {
    var instrumentos = document.querySelectorAll('.instrumento');
    instrumentos.forEach(function (instrumento) {
        instrumento.addEventListener('click', function () {
            var id = this.getAttribute('id');
            var audio = document.getElementById('audio' + id.charAt(0).toUpperCase() + id.slice(1));
            audio.play();
        });
    });
});
