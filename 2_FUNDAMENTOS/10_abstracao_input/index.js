const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
    name: 'Nome', message: 'Qual a primeira nota?'}, {
    name: 'idede', message: 'Qual a segunda nota?'},
]).then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.nome) + parseInt(answers.idade)) / 2

    console.log(`A média é: ${media}`);
}

).catch(err => console.log(err))