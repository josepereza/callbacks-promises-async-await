/**
 * Async Await
 */

let getName = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Débora');
        }, 3000);
    });
}

let salute = async() => {

    let name = await getName();

    return `Hi ${name}`;
}


salute().then(msg => {
    console.log(msg);        
})
.catch(e => {
    console.log('Async error', e);    
});
