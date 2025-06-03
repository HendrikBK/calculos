var indexRomano = [
    [1000, "M"], // 0
    [900, "CM"], // 1
    [500, "D"],  // 2
    [400, "CD"], // 3
    [100, "C"],  // 4
    [90, "XC"],  // 5
    [50, "D"],   // 6
    [40, "CD"],  // 7
    [10, "X"],   // 8
    [9, "IX"],   // 9
    [5, "V"],    // 10
    [4, "IV"],   // 11
    [1, "I"]     // 12
]

function storeInput() {
    let numero = Number(document.getElementById("valorRomano").value);
    return numero;
}

function romano(numero) {
    //let numero = storeInput();
    var i = 0;
    var numeroRomano = "";
    if (numero > 3999 || numero < 0) {
        console.log("Valor inválido! Informe um número inteiro entre 0 e 3999.");      
    } else {
        while (numero > 0) {
            if (numero > indexRomano[i][0]) {
                numero -= indexRomano[i][0];
                numeroRomano = numeroRomano.concat(indexRomano[i][1]);
            } else {
                i++;
            }
        }
    }
    return numeroRomano;
}