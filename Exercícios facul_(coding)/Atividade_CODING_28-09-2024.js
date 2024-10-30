//  Atividade fixação - tipos primitivos

// Criação de um programa que declare uma variável: número1, número2 e realização das quatros operações.(+, -, *, /.)

const numero1 = 30;
const numero2 = 12;

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

console.log("O resultado da soma é: " + soma);
console.log("O resultado da subtração é: " + subtracao);
console.log("O resultado da multiplicação é: " + multiplicacao);
console.log("O resultado da divisão é: " + divisao);

// Criação de um programa que declare uma variável: nome, cidade e imprima um texto.
// Criação de programa que declare uma variável: nome, idade e imprima um texto.

const idade = 18;
const nome = "Vítor";
const cidade = "Olinda";
console.log("Olá, meu nome é " + (nome) + ", tenho " + (idade) + " de idade e moro em " + (cidade));

// Cálculo da área (Triângulo)

const base = 4;
const altura = 3;
const area = base * altura / 2;
console.log (" área do triangulo é " + area);

// Média Aritmética

const nota1 = 10.0;
const nota2 = 7.5;
const nota3 = 5.0;
const nota4 = 2.5;
const media = (nota1 + nota2 + nota3 + nota4)/4;

console.log("A sua média é: " + media);

// (Promoção) Desconto no valor de um produto

const preco_original = 140;
const desconto = 10;
const preco_final = preco_original * (1 - desconto / 100);

console.log("O preço final é: " + "R$ " + preco_final.toFixed(2));

// Conversor de temperatura (C° para F°)

const celsius = 35;
const fahrenheit = (celsius * 9/5) + 32;

console.log("Agora está fazendo " + fahrenheit + " F°");

// Imposto de Renda (IR)

const salario_bruto =  6624.00;
const aliquota = 0.275;
const valor_fiscal = salario_bruto - (salario_bruto * aliquota);

console.log ("O valor após a cobrança do ímposto sobre a renda é: " + "R$ " + valor_fiscal.toFixed(2));

// Conversor de moeda

var reais = 100.50;
var dolar = 5.54;
conversao = reais / dolar ;
console.log("A conversão é: " + conversao.toFixed(2) + " USD");

// Calculadora de IMC

const massa = 60.00;
const estatura = 1.76;
imc = massa/(estatura*estatura);

if (imc <18.5){console.log("Seu Índice de massa corporal é: "+ imc.toFixed(2) + ", Você está abaixo do peso");
}else if (imc <24.9){console.log("Seu Índice de massa corporal é: "+ imc.toFixed(2) + ", Você está com o peso ideal");
}else if (imc <29.9){console.log("Seu Índice de massa corporal é: "+ imc.toFixed(2) + ", Você está acima do peso");
}else {console.log("Seu Índice de massa corporal é: "+ imc.toFixed(2) + ", Você está com obesidade Morbida");
}

// Vítor Vieira de Souza - ADS040/1T