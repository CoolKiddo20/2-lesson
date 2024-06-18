let user = {
    userName: prompt(`enter your name`),
    usersSpaceId: +prompt(`enter your space ID`),
    usersSpacePassword: +prompt(`enter your space password`),
}





for (let key in user) {
    console.log(`свойства значении ${key} равна ${user[key]}`);
}