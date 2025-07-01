function issqn(valor_bruto) {
    let valores = [valor_bruto]; // 0 Valor bruto
    valores[1] = valor_bruto * (0.4); // 1 Dedução
    valores[2] = (valor_bruto - valores[1]) * (0.11); // 2 INSS
    valores[3] = valor_bruto * 0.05; // 3 ISSQN
    valores[4] = valor_bruto * 0.7; // 4 Material
    valores[5] = valor_bruto * 0.3; // 5 Mão de obra
    valores[6] = valor_bruto - valores[2] - valores[3]; // 6 Valor líquido
    valores[0] = parseFloat(valores[0]);

    return valores;
}

function escreve_issqn(event) {
    event.preventDefault();
    let lista = document.getElementById("lista-issqn");
    valores = issqn(document.getElementById("valor").value);
    console.log(valores);
    let i;
    for (i=0; i < 7; i++) {    
        let item = document.createElement('li');
        item.innerHTML = "R$ " + valores[i].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        lista.appendChild(item);
    }
}

document.getElementById("calcular").addEventListener('click', escreve_issqn);