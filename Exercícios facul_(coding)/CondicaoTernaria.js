// Teste de condição ternária

let nota1 = 10.0;
let nota2 = 5.5;
let nota3 = 8.0;

function Media(nota1, nota2, nota3) {
  let Calculo = (nota1 + nota2 + nota3) / 3;
  return (Calculo >= 7) ? `Aprovado com média ${Calculo.toFixed(1)}` : `Reprovado com média ${Calculo.toFixed(1)}`;
}
const Resultado = Media(nota1, nota2, nota3);
console.log(`Seu resultado é: ${Resultado}`);