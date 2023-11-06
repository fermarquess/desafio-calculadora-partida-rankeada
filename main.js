
// declaração de variáveis

let vitorias = 100
let derrotas = 30
let saldoVitorias = vitorias - derrotas
let resultado = calculadoraPartidas(saldoVitorias)

// declarando a função

function calculadoraPartidas(vitorias, derrotas) {
    
    return saldoVitorias

}

// condicionais

if(saldoVitorias < 10){
    nivel = "Ferro"
    //console.log("Ferro")
} else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
    //console.log("Bronze")
} else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
    //console.log("Prata")
} else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
    //console.log("Ouro")
} else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
    //console.log("Diamante")
} else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"
    //console.log("Lendário")
} else if (saldoVitorias >= 101){
    nivel = "Imortal"
    //console.log("Imortal")
}

// mensagem de saída
console.log("O herói tem saldo de " + saldoVitorias + " e está no nível de " + nivel)