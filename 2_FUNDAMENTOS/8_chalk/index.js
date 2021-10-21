const chalk = require('chalk');

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green('Parabéns! Voçê está aparovado!'));
}else{
    console.log(chalk.bgRed('Voçê precisa fazer a prova de  recuperação!'));
}