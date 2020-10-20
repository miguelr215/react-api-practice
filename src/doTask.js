// FUNCTION WITHOUT A PROMISE
// function doTask(name){
//     console.log(`${name} has started`);
//     const duration = Math.floor(Math.random() * 5000);
//     setTimeout(() => {
//         console.log(`${name} has ended after ${duration} milliseconds`)}, duration);
// }


// FUNCTION WRAPPED IN A PROMISE
function doTask(name){
    const p = new Promise((resolve, reject) => {
        console.log(`${name} has started`);
        const duration = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve(`${name} has ended after ${duration} milliseconds`)
        }, duration);
    });
    return p;
}

// doTask('A');
// doTask('B');
// doTask('C');
// doTask('D');
// doTask('E');
// doTask('F');

doTask('A')
    .then(result => {
        console.log(result);
    });

// Chain 2 functions together - C will execute when B is complete
doTask('B')
    .then(result => {
    console.log(result);
    return doTask('C');
    })
    .then(result => {
        console.log(result);
    });

// Chain multiple functions together - G will execute will all others are complete
Promise
    .all([
        doTask('D'),
        doTask('E'),
        doTask('F')
    ])
    .then(results => {
        results.forEach(result => console.log(result));
        return doTask('G');
    })
    .then(result => {
        console.log(result);
    });

