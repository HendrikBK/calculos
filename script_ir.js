function ir(valor=0, despesa_dedutivel=0) {
    let valores = [
        [2259.20, 0, 0], // 0
        [2826.66, 0.075, 169.44], // 1
        [3751.05, 0.15, 381.44], // 2
        [4664.68, 0.225, 662.77], // 3
        [4664.68, 0.275, 896.00] // 4
    ];
    let resultado;
    let bc = valor - despesa_dedutivel;
    if (bc < valores[0][0]) {
        resultado = 0;
    } else if (bc < valores[1][0]) {
        resultado = (bc * valores[1][1]) - valores[1][2];
    } else if (bc < valores[2][0]) {
        resultado = (bc * valores[2][1]) - valores[2][2];
    } else if (bc < valores[3][0]) {
        resultado = (bc * valores[3][1]) - valores[3][2];
    } else {
        resultado = (bc * valores[4][1]) - valores[4][2];
    }
    return "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function escreve_ir(event) {
    event.preventDefault();
    let receita = document.getElementById("receita").value;
    let deducao = document.getElementById("deducao").value;
    document.getElementById("resultado").innerHTML = ir(receita, deducao);
}

document.getElementById("calcular_ir").addEventListener('click', escreve_ir);