let array = [1,3,2,3,4];

array.forEach( i => {
    console.log(i);
});

console.log("-------");

let set = new Set(array);

set.forEach( i => {
    console.log(i);
});