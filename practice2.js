// JavaScript coding practice exercises

function obtenerMayor(x, y) {
    if (x === y || x > y) {
        return x;
    }
    return y;
}
obtenerMayor(2, 3);

function mayoriaDeEdad(edad) {
    if(edad >= 18) {
        return 'Allowed';
    }
    else {
        return 'Not allowed'
    }
}
mayoriaDeEdad(21);

function conection(status) {
    if (status === 1) {
        return 'Online';
    }
    else if (status === 2) {
        return 'Away';
    }
    else {
        return 'Offline';
    }
}
conection(2);

function saludo(idioma) {
    if (idioma === 'aleman') {
        return 'Guten Tag!';
    }
      else if (idioma === 'mandarin') {
        return 'Ni Hao!';
    }
      else if (idioma === 'ingles') {
        return 'Hello!';
    }
      else {
        return 'Hola!';
    }
}
saludo('aleman');


