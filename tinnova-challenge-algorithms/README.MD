# desafio TINNOVA

### 1. Votos em relação ao total de eleitores

Considerando a tabela abaixo

total de eleitores = 1000
válidos = 800
votos brancos = 150
votos nulos = 50

Faça uma classe com 3 métodos que calculam:

* [x] o percentual de votos válidos em relação ao total de eleitores
* [x] o percentual de votos brancos em relação ao percentual de eleitores
* [x] o percentual de votos nulos em relação ao total de eleitores

Dica: "em relação ao total" significa que você deve dividir, por exemplo, "nulos" pelo total de eleitores, etc.

Utilize programação orientada a objeto

### 2. Algoritmo de ordenação Bubble Sort

Imagine o seguinte vetor:

> v = [5, 3, 2, 4, 7, 1, 0]

Faça um algoritmo que ordene o vetor acima utilizando o Bubble Sort.

O Bubble Sort ordena de par em par. Ele pega os dois primeiros elementos e pergunta se o primeiro é maior que o segundo. Se sim, os elementos são trocados (swap), se não, são mantidos. Vai repetindo o processo até o final do vetor. 

De maneira formal podemos destacar:

1. Percorra o vetor inteiro comparando elementos adjacentes (dois a dois)
2. Troque a posição dos elementos se eles estiverem fora de ordem
3. Repita os dois passos acima (n-1) vezes, onde n é igual o tamnaho do vetor

### 3. Fatorial

Faça um programa que calcule o fatorial de um número qualquer.

Vamos lembrar o que é fatorial?
Seja n um número natural, tal que n > 2, chama-se fatorial de n o produto de todos os números naturais consecutivos de n até 1.

Por exemplo:

> 5! = 1 x 2 x 3 x 4 x 5 = 120

Atente que 0! = 1 porque o produto vazio (produto de nenhum número) é 1

### 4. Soma dos múltiplos de 3 ou 5

Fazer uma implementação que faça a soma de todos os números que sejam múltiplos de 3 ou 5.

Se listar todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6, 9. A soma desses múltiplos é de 23.

A implementação deve ser capaz de receber por parâmetro um número x se já retornado a soma de todos o números múltiplos de 3 ou 5.