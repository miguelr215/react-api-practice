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

doTask('A');
doTask('B');
doTask('C');
doTask('D');
doTask('E');
doTask('F');