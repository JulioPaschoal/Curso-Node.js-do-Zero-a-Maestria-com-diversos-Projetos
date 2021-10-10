// IMPRIMINDO MAIS DE UM VALOR \\

const x = 10;
const y = 'JulioPaschoal';
const z = [1, 2];


console.log(x, y, z);

// CONTAGEM DE IMPRESSÃO \\

console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// VARIAVEL ENTRE STRING \\

console.log('O nome é %s, ele é programador', y);

// LIMPAR O CONSOLE

setTimeout(() => {
    console.clear();
}, 2000);