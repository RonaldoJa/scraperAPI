const mensaje1 = 'Request req_mSgRJEvoC3evga: Your card was declined.';
const declined = 'declined.';
const incorrectNumber = 'incorrect.';
const expired = 'expired.';
const live = 'successfully';

let posicion = mensaje1.indexOf(declined);
let posicion2 = mensaje1.indexOf(incorrectNumber);
let posicion3 = mensaje1.indexOf(expired);
let posicion4 = mensaje1.indexOf(live);

if(posicion !== -1){
    console.log('Card declined');
}else if(posicion2 !== -1){
    console.log('Numero incorrecto');
}else if(posicion3 !== -1){
    console.log('Tarjeta expirada');
}else if(posicion4 !== -1){
    console.log('Liveeeeee!!!');
}

console.log('probando')