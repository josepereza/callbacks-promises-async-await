/*
setTimeout(() => {
    console.log('Olá Mundo!');
}, 5000);  //5 segundos
*/

let getUserById = (id, callback) => {

    let user = {
        name: 'Débora',
        id
    }

    if(id === 20) {
        callback(`The user with id ${ id }, do not exist in the Database`)
    } else {
        callback(null, user);
    }
}

getUserById(10, (err, user) => {

    if(err) {
        return console.log(err);        
    }

    console.log('Database user:', user);
    
});