/**
 *  Async Await
 */

/* Old way using promises
let getName = () => {
    return new Promise((resolve, reject) => {
        resolve('Débora');
    })
}
*/

// Using async await es7

let getName = async() => {

    throw new Error('Do not exist a name for this user');

    return 'Débora';
}

getName().then(name => {
    console.log(name);        
})
.catch(e => {
    console.log('Async error', e);    
});
