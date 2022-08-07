let ask = (question) => {
    if (question == 'yes') {
        alert('You agreed.');
    } else {
        alert('You canceled the execution');
    }
};
console.log(ask('yes'));