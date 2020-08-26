const array = [1, 2, 3, 4, 5];

function forEach(CBK) {
    for (let index = 0; index < array.length; index++) {
        CBK(array[index])        ;
    }
}

forEach((elment) => {
    console.log(elment + 3);
})