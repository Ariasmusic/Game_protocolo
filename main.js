function play() {
    document.getElementById('container-play').style.display = 'none';

}


// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene la referencia a la imagen por su ID
    const img1 = document.getElementById("movingImg-1");
    const img2 = document.getElementById("movingImg-2");
    let punt_player_1 = 0
    let punt_player_2 = 0

    // Define la posición máxima hasta la cual puede moverse la imagen
    const maxTopPosition = 300;

    // Agrega un event listener para escuchar cuando se presiona una tecla
    document.addEventListener("keydown", (event) => {
        // Obtiene la tecla que fue presionada
        const keyPressed = event.key;
        // Obtiene la posición actual de la imagen desde arriba (en píxeles)
        const currentPosition1 = parseInt(getComputedStyle(img1).top);
        const currentPosition2 = parseInt(getComputedStyle(img2).top);



        // Verifica si la tecla presionada es la flecha hacia arriba y no ha alcanzado la posición máxima
        if (keyPressed === " " && currentPosition1 > maxTopPosition) {
            // Calcula la nueva posición restando 10 píxeles a la posición actual
            const newPosition = currentPosition1 - 60;
            // Aplica la nueva posición a la imagen actualizando el estilo top en CSS
            img1.style.top = `${newPosition}px`;
            punt_player_1 = punt_player_1 + 1;
            document.getElementById("punt_player_1").innerHTML = punt_player_1;
        }
        if (keyPressed === "s") {
            // Calcula la nueva posición restando 10 píxeles a la posición actual
            const newPosition = currentPosition1 + 60;
            // Aplica la nueva posición a la imagen actualizando el estilo top en CSS
            img1.style.top = `${newPosition}px`;
            punt_player_1 = punt_player_1 - 1
            document.getElementById("punt_player_1").innerHTML = punt_player_1;
        }
        if (keyPressed === "ArrowUp" && currentPosition2 > maxTopPosition) {
            // Calcula la nueva posición restando 10 píxeles a la posición actual
            const newPosition2 = currentPosition2 - 60;
            // Aplica la nueva posición a la imagen actualizando el estilo top en CSS
            img2.style.top = `${newPosition2}px`;
            punt_player_2 = punt_player_2 + 1
            document.getElementById("punt_player_2").innerHTML = punt_player_2;

        }
        if (keyPressed === "ArrowDown") {
            // Calcula la nueva posición restando 10 píxeles a la posición actual
            const newPosition2 = currentPosition2 + 60;
            // Aplica la nueva posición a la imagen actualizando el estilo top en CSS
            img2.style.top = `${newPosition2}px`;
            punt_player_2 = punt_player_2 - 1
            document.getElementById("punt_player_2").innerHTML = punt_player_2;
        }
        if (currentPosition1 <= maxTopPosition || currentPosition2 <= maxTopPosition) {
            // alert('Ganaste');
            document.getElementById('winner').classList.remove('hidden');
            img1.style.display = 'none';
            img2.style.display = 'none';
            if (currentPosition1 <= maxTopPosition) {
                document.getElementById('personaje-1').src = "img/browserwinner.webp";
                document.getElementById('personaje-1').style.width = '180px';
                document.getElementById('personaje-2').src = "img/personaje2.png";
            }
            if (currentPosition2 <= maxTopPosition) {
                document.getElementById('personaje-1').src = "img/personaje2.png";
                document.getElementById('personaje-2').src = "img/browserwinner.webp";
                document.getElementById('personaje-2').style.width = '180px';
            }
        }
    });

});


function reload() {
    window.location.reload();

}



