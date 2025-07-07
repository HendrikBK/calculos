function issqn_completo(valor_bruto=0) {
    let valores = [valor_bruto]; // 0 Valor bruto
    if (document.getElementById("aliquota-issqn").value) {
        var aliquota_issqn = document.getElementById("aliquota-issqn").value / 100;
    } else {
        var aliquota_issqn = 0.035;
    }
    valores[1] = valor_bruto * (0.4); // 1 Dedução
    valores[2] = (valor_bruto - valores[1]) * (0.11); // 2 INSS
    valores[3] = valor_bruto * aliquota_issqn; // 3 ISSQN
    valores[4] = valor_bruto * 0.7; // 4 Material
    valores[5] = valor_bruto * 0.3; // 5 Mão de obra
    valores[6] = valor_bruto * 0.0065; // 6 PIS
    valores[7] = valor_bruto * 0.03; // 7 COFINS
    valores[8] = valor_bruto * 0.012; // 8 IR
    valores[9] = valor_bruto * 0.01; // 9 CSSL 
    valores[10] = valor_bruto - valores[2] - valores[3] - valores[6] - valores[7] - valores[8] - valores[9]; // 10 Valor líquido
    valores[0] = parseFloat(valores[0]);

    return valores;
}

function issqn_simples(valor_bruto=0) {
    let valores = [valor_bruto]; // 0 Valor bruto
    if (document.getElementById("aliquota-issqn").value) {
        var aliquota_issqn = document.getElementById("aliquota-issqn").value / 100;
    } else {
        var aliquota_issqn = 0.035;
    }
    valores[1] = valor_bruto * (0.4); // 1 Dedução
    valores[2] = (valor_bruto - valores[1]) * (0.11); // 2 INSS
    valores[3] = valor_bruto * aliquota_issqn; // 3 ISSQN
    valores[4] = valor_bruto * 0.7; // 4 Material
    valores[5] = valor_bruto * 0.3; // 5 Mão de obra
    valores[6] = valor_bruto - valores[2] - valores[3]; // 6 Valor líquido
    valores[0] = parseFloat(valores[0]);

    return valores;
}

function limpar() {
    let itens = document.getElementsByClassName("resultado-issqn");
    while(itens.length > 0) {
        itens[0].parentNode.removeChild(itens[0]);
    }
}

function change_visibility(){
    if  (document.getElementById("checkbox").checked) {
        document.getElementById("lista-issqn-simples").style.display = 'block';
        document.getElementById("lista-issqn-completo").style.display = 'none';
    } else {
        document.getElementById("lista-issqn-completo").style.display = 'block';
        document.getElementById("lista-issqn-simples").style.display = 'none';
    }
}

function escreve_issqn(event) {
    change_visibility();
    event.preventDefault();
    limpar();
    if (document.getElementById("checkbox").checked){
        valores = issqn_simples(document.getElementById("valor").value);
        let i;
        for (i=0; i < 7; i++) {
            let lista = document.getElementById("lista-issqn-simples").rows[i];
            let item = document.createElement('td');
            item.className = "resultado-issqn";
            item.innerHTML = valores[i].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            lista.appendChild(item);
        }
    } else {
            valores = issqn_completo(document.getElementById("valor").value);
            let i;
            for (i=0; i < 11; i++) {
                let lista = document.getElementById("lista-issqn-completo").rows[i];
                let item = document.createElement('td');
                item.className = "resultado-issqn";
                item.innerHTML = valores[i].toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                lista.appendChild(item);
            }
    }
}

document.getElementById("calcular").addEventListener('click', escreve_issqn);