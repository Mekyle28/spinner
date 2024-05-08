

const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];

    let count = 100
    for (let element of spinnerArr) {
    setTimeout(() => {
        process.stdout.write(element);
    }, count);
    count += 200;
}


// // spinner as a function 
// const spinner = function(array){
//     let count = 100
//     for (let element of array) {
//     setTimeout(() => {
//         process.stdout.write(element);
//     }, count);
//     count += 200;
// }
// };
// spinner(spinnerArr);