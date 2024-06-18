let Arnold = {
    name: 'Arnold Schwarzenegger',
    country: 'United States',
    dateofbirth: "30/7/1947"
}

// console.log(Arnold);
// console.log(Arnold.name);
// console.log(Arnold.name, Arnold.country);
// console.log(Arnold.name, Arnold.country, Arnold.dateofbirth);
// console.log(Arnold.name, Arnold.country);
// console.log(Arnold.name);
// console.log(Arnold);


for (let key in Arnold) {
    console.log(`свойства значении ${key} равна ${Arnold[key]}`);
}