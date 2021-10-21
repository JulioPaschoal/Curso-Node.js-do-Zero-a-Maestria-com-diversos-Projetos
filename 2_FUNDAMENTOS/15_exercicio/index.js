const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([{
    name: 'nome', message: 'Qual seu nome completo?'
}, {
    name: 'idade', message: 'Qual a sua idade?'
},
]).then((answers) => {
    const response = `O nome dele é ${answers.nome} e sua idade é ${answers.idade} anos`
    console.log(chalk.bgYellow.black(response))
}

).catch(err => console.log(err))