import { login } from './functions.js';

function compra(){
    const juegosDisponibles = ['Hollow Knight', 'The Legend of Zelda: Breath of the Wild', 'path of exile', 'God of War', 'half life 2'];
    const carrito = [];
    if(login(3)){
        while (juegosDisponibles.length > 0) {
            let mensaje = 'Elige un juego ingresando el número correspondiente:\n';

            for (let i = 0; i < juegosDisponibles.length; i++) {
                mensaje += `${i + 1}. ${juegosDisponibles[i]}\n`;
            }
            mensaje += '0. Terminar de comprar';
            const opcion = parseInt(prompt(mensaje));
            if (opcion == 0) {
                break;
            } else if (opcion >= 1 && opcion <= juegosDisponibles.length) {
                const juegoElegido = juegosDisponibles[opcion - 1];
                carrito.push(juegoElegido);
                juegosDisponibles.splice(opcion - 1, 1);
                alert(`Has agregado "${juegoElegido}" al carrito.`);
            } else {
                alert('Opción inválida. Por favor, ingresa un número válido.');
            }
        }
        if(carrito.length > 0 ){
            alert(`Juegos en el carrito:\n${carrito.join('\n')}`);
        } else {
          alert('Proximamente agregaremos mas juegos a nuestra lista, Vuelve pronto');
        } 
    }
    window.close();
}

compra();