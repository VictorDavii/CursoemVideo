/*
Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade
A sequência de Fibonacci é composta por uma sucessão de números descrita pelo famoso
matemático italiano Leonardo de Pisa (1170-1250), mais conhecido como Fibonacci, no final do
século 12. O matemático percebeu uma regularidade matemática a partir de um problema
criado por ele mesmo. Além disso, quando esses números são transformados em quadrados e
dispostos de maneira geométrica, é possível traçar uma espiral, que curiosamente também
pode ser vista em muitos fenómenos naturais.
A fórmula usada para calcular a sequência de Fibonacci é a seguinte:
Fn = Fn - 1 + Fn - 2
(Fn = Fator numeral)
Neste caso, repetimos o número 1 e somamos os dois, ou seja, 1 + 1 = 2. Em seguida, somamos
o resultado com o número antecessor, ou seja, 2 + 1 = 3, e assim continuamente, em uma
sequência infinita 
*/

var f0 = 0 
var f1 = 1
console.log(f0)
console.log(f1)

for(var i = 0; i < 10; i++){

  var fi = f0 + f1 
  f0 = f1 
  f1 = fi
  console.log(fi)
}
