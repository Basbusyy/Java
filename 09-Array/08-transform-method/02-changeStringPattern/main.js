// let dash = 'background-colour'
// let text = dash.split('-');
// console.log(text)
// let text2 = text[1][0].toUpperCase();
// text[0] + text2 + text[1].slice(1); 


function camelCase(text) {
    let text2 = text.split('-'); //?
    text2[1][0].toUpperCase(); //?
    text5 = text2[0] + text2[1][0].toUpperCase() + text2[1].slice(1); //?

    return text5; //?
}

camelCase('Pasit - Jeamrattanasakul'); //?