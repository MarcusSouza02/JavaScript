//document.getElementById("texto").innerHTML = " Isso é um txt usando document.getElementById com <b>JS</b>";
//console.log("Isso é um console.log");

/*
 Aula 3 - Declarações 
let a,b,c;
a=5;
b=6;
c=7;
 
//JS ignora espaços em branco
let pessoa = "Marcus"; //let pessoa="Marcus" é a mesma coisa

Pode quebrar linhas sem problemas se tiver o ; ao final da linha mas não é bom quebrar a linha
document.getElementById("texto").innerHTML = 
    "Isso é um txt usando document.getElementById com <b>JS</b>";
*/

/*
Aula 4 - Sintaxe
var a = 1;
var b = 6;
var c = a + b;
console.log(c);

//JS é Case sensitive 
var PESSOA =  "Maria";
var Pessoa = "Vitoria";
//Pessoa != pessoa != PESSOA   
//Todas as variaveis devem ser minusculas
//Para fazer uma varivel com dois nomes não se deve usar - mas sim letra maiuscula ou _
var primeiroNome;
*/

//Aula 5 - Comentários

/*
Aula 6 - Variaveis
Variaveis servem para armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor
No JavaScript temos 3 palavras-chave para declarar variaveis
-> var 
-> let
-> const


var pote = "Chocolate";
//alert(pote);

var a,b,c; //variaveis indefinidas

a = 2;
b = 3;
c = a + b;

alert(c);


var nome, sobrenome, nomeCompleto;

nome = "Marcus";
sobrenome = "Souza";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto; //jogando o nome completo no elemento id do html

Diferença entre LET, CONST e VAR
VAR -> permite que uma variavel seja declarada mais de uma vez, ficando o valor final o último declarado
LET -> não permite mais de uma declaração
let x = 10; // aqui é 10

{
    let x = 2; //aqui é dois
}

document.getElementById("texto").innerHTML = x; // aqui vai ser 10 pois let pega o valor do scopo geral, 2 vai ser dentro do scopo 

no caso do var, é universal

CONST -> Não muda o valor em momento nenhum
*/


/*
Aula 7 - Operadores

//++ -> incrementador
let x = 2;
let y = ++x
alert(y); // igual 3

//Decremento -> --
let x = 2;
let y = --x
alert(y); // igual 1

let x = 5;
let y = 2;

x += y; // mesma coisa de x = x + y e também funciona com outros operadores

//== -> sinal de comparação
let x = 2;
let y = 2
let total = (x == y)
alert(total); // igual true

// comparação de tipos -> === (Verifica se int é igual a char)//== -> sinal de comparação
let x = 2;
let y = "2"; // passou a ser texto
let total = (x == y)
alert(total); // igual false

// diferente -> != para valores 
//diferente para tipo -> !==

// condicional -> ?
var idade, eleitor;
idade = 15;
eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor"; //Funciona como um if, verifica se a idade é maior ou menor
//if true : if false

alert("A resposta é: " + eleitor + ' ; A idade dele é de: ' + idade);

//operadores lógicos
// && (e) || (ou)
*/

/* 
Aula 8 - funções 

function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10) // chamei a função soma e mostrei o resultado

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);
alert("O valor em real é R$: " + valorReal + " o valor em dolar U$ é: " + total);

function alertaHello(){
    alert(Olá);
}

*/

/*
Aula 9 - Objetos
delcarar objetos com const

//objeto
const carro = {
    marca: "ford",
    modelo: "Ka",
    ano: 2015,
    placa: "ABC-1234",
    
    buzina: function () { alert('Biiiiiii')}, //metodo do objeto

    completo: function(){
        return "A marca é " + this.marca + " e o modelo é " + this.modelo
    }
};

console.log(carro);
carro.buzina();
console.log(carro.completo());
*/


/* 
Aula 10 - Eventos

function eventoClick() {
    alert('Acionou o botão');
}

function eventoDbClick() {
    alert("Evento de clique duplo");
}

function viraVerde(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "green";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue;"
}

function limpaTexto() {
    document.getElementById("Campotexto").value = "";
}

function mudou() {
    console.log("mudou")
}

function teclaPressionada() {
    let input = document.getElementById("Campotexto").value;
    console.log(input);
}

//Eventos de tela 
onload - quando se tem uma pagina longa, ele mostra quando terminou de carregar
onresize -  quando a tela muda de tamanho, redimensionamento da tela
*/

/* 
Aula 11 - matrizes


const lista = ["arroz", "feijão", "macarrão", "leite"];
let x = lista[3]; // buscando um elemento da lista
//alert(x);

lista[0] = "café";
//alert(lista[0]); // alterando um elemento da lista

console.log(lista); //mostrando todos os elementos da lista

//alert(lista.length); // qual o tamanho do array

alert(lista[lista.length -1]); //Mostra qual o ultimo item

lista.push("carne"); // adicionando um item a ultima posição
console.log(lista);
*/

/*
Aula 12 - Metodos para Matriz

//document.getElementById("teste").innerHTML = lista.join(" - "); // troca os separadores que eram , por -

lista.pop(); // tira o ultimo elemento da lista com esse metodo
lista.shift(); // remove o primeiro elemento da lista e altera a posição de todos os outros elementos
lista.unshift("toddy"); // add um iem a primeira posição da lista

//lista.splice(1,0,"Item add 1", "Item add 2"); //slpice serve para add itens em uma posição especifica (posição, quantos remover ou não, itens)


const lista2 = ["Chocolate", "Refri", "Pipoca"];
const superLista = lista.concat(lista2); // concatenação das listas, pode concatenar varias listas

//document.getElementById("teste").innerHTML = superLista;

const cinema = superLista.slice(4);// fatia a lista na posição desejada pode colocar um ponto inicial e um final (2, 5)
//document.getElementById("teste").innerHTML = cinema;

const listaOrdem =  lista.sort(); // ordem alfabetica somente pra texto
const listaNordem =  lista.reverse(); // ordem contrária
//document.getElementById("teste").innerHTML = listaNordem;

const numeros = [1, 40, 3, 8, 89, 100];
numeros.sort(function (a, b) {return a - b}); //ordenar numeros [para decrescente só trocar b - a]
//document.getElementById("teste").innerHTML =  numeros;

function MaiorNumero(array) {
    return Math.max.apply(null, array); //pega o maior numero
}
//document.getElementById("teste").innerHTML =  MaiorNumero(numeros); 

function MenorrNumero(array) {
    return Math.min.apply(null, array);//pega o menorr numero
}
document.getElementById("teste").innerHTML =  MenorrNumero(numeros);

*/

/**
 Aula 13 - if e else

var interruptor = "off";
if(interruptor == "on"){
    alert("A lampada está ligada")
}else {
    alert('A lampada está desligada')
}
 */

var hora = new Date().getHours; // pega a hora atual do sistema

if (hora < 12){
    alert('Bom dia');
} else if (hora < 18){
    alert('Boa tarde');
}else {
    alert("Boa noite");
}

//3:29:44

