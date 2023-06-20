export function verificarCredenciales(usuario, contraseña) {
    const usuarios = {
      'yoel': '1234',
      'juan': '2222',
      'lusi': 'Guallaba123'
    };
    console.log(usuarios.hasOwnProperty(usuario) && usuarios[usuario] === contraseña, 12313);
    return usuarios.hasOwnProperty(usuario) && usuarios[usuario] === contraseña;
}

export function login(cantIntentos){
    alert('Viendenido a Steam Verde');
    alert(`Tienes ${cantIntentos} restantes`);
    for (let i = 0; i < cantIntentos; i++) {
        let usuario = prompt("Ingrese su nick").toLocaleLowerCase();
        let contrasenia = prompt("Ingrese su contraseña")
        if(verificarCredenciales(usuario, contrasenia) ){
            return true;
        }else{
            alert(`Usuario o contraseña incorrecta, Te quedan ${cantIntentos - i -1} intentos restantes restantes`);
        }
    }
    alert('no se pudo iniciar secion, intente nuevamente mas tarde');
    return false;
}