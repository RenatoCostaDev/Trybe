//callbeck hell
// setTimeout(function () {
//     console.log('Executando CBK...')

//     setTimeout(function () {
//         console.log('Executando CBK...')

//         setTimeout(function () {
//             console.log('Executando CBK...')
//         },2000)
//     },2000)
// },2000)

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...');
            // resolve('Vishhhh');            
            resolve();            
        },tempo)
    })
}
// esperarPor(3000).then(texto => console.log(texto));
esperarPor()
        .then(() => esperarPor())
        .then(esperarPor);