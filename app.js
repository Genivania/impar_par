/**********************************************************************************************************************
 * Objetivo: Saber diferenciar numeros impares de pares
 * Data: 17/02/2023
 * Autor: Genivania Macedo
 * Versão: 1.0
 * *********************************************************************************************************************/



var readline = require('readline')
var separacao = require('./Modulo/imparPar')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero inicial [ENTRE 0 E 500]:\n', function(valorInicio) {

    let valorMin = parseInt(valorInicio)

    if (valorMin < 0 || valorMin > 500 || isNaN(valorMin) || valorMin === '') {
        console.log('ERRO: Digite apenas NÚMEROS entre 0 e 500')
        entradaDados.close()

    } else {
        entradaDados.question('Digite o valor final [ENTRE 100 E 1000]:\n', function(valorFim) {

            let valorMax = parseInt(valorFim)

            if (valorMax < 100 || valorMax > 1000 || valorMax == '' || isNaN(valorMax)) {
                console.log('ERRO: Digite apenas NÚMEROS entre 100 e 1000')
                entradaDados.close()

            } else if (valorMin == valorMax) {
                console.log('ERRO: O núumero inicial não pode ser igual ao final')
                entradaDados.close()

            } else if (valorMin > valorMax) {
                console.log('ERRO: O número inicial não pode ser maior que o final')
                entradaDados.close()

            } else {
                entradaDados.question('Qual você deseja calcular??\n' + '1) Pares\n' + '2) Impares\n' + '3) Ambos\n', function(value) {

                    separacao.parImpar(valorMin, valorMax, value)
                    entradaDados.close()

                })
            }

        })
    }


})