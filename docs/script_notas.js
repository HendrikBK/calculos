class Stored_input {
    total = "";
    produtos = "";
    frete = "";
    seguro = "";
    despesas_acessorias = "";
    desconto = "";
    pedagio = "";
    ipi = "";
    icms_st = "";
    constructor(total, produtos, frete, seguro, despesas_acessorias, desconto, pedagio, ipi, icms_st) {
        this.total = total;
        this.produtos = produtos;
        this.frete = frete;
        this.seguro = seguro;
        this.despesas_acessorias = despesas_acessorias;
        this.desconto = desconto;
        this.pedagio = pedagio;
        this.ipi = ipi;
        this.icms_st = icms_st;
    }
}

function store_input() {
    let dados = new Stored_input(
        Number(document.getElementById("total").value),
        Number(document.getElementById("produtos").value),
        Number(document.getElementById("frete").value),
        Number(document.getElementById("seguro").value),
        Number(document.getElementById("despesas-acessorias").value),
        Number(document.getElementById("desconto").value),
        Number(document.getElementById("pedagio").value),
        Number(document.getElementById("ipi").value),
        Number(document.getElementById("icms-st").value)
    );
    return dados;
}

/* Definir objeto Segmento */
class Segmento {
    total = "";
    produtos = "";
    frete = "";
    seguro = "";
    despesas_acessorias = "";
    desconto = "";
    pedagio = "";
    ipi = "";
    icms_st = "";
    constructor(total, produtos, frete, seguro, despesas_acessorias, desconto, pedagio, ipi, icms_st) {
        this.total = total;
        this.produtos = produtos;
        this.frete = frete;
        this.seguro = seguro;
        this.despesas_acessorias = despesas_acessorias;
        this.desconto = desconto;
        this.pedagio = pedagio;
        this.ipi = ipi;
        this.icms_st = icms_st;
    }
}

let segmentos = [];

/* Guardar segmento */
function novo_segmento(event) {
    event.preventDefault();
    let dados = store_input();
    let segmento = new Segmento(
        dados.total,
        dados.produtos,
        dados.frete,
        dados.seguro,
        dados.despesas_acessorias,
        dados.desconto,
        dados.pedagio,
        dados.ipi,
        dados.icms_st
    );
    segmentos.push(segmento);
    document.getElementById("dados").reset();
    document.getElementById("resultado-calculo-simples").innerHTML = "";
    exibir_segmentos()
}

/* Definir funções para cálculos */
/* Total */
function calcular_total(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.produtos + dados.frete + dados.seguro + dados.despesas_acessorias - dados.desconto + dados.pedagio + dados.ipi + dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Produtos */
function calcular_produtos(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.frete - dados.seguro - dados.despesas_acessorias + dados.desconto - dados.pedagio - dados.ipi - dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Frete */
function calcular_frete(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.produtos - dados.seguro - dados.despesas_acessorias + dados.desconto - dados.pedagio - dados.ipi - dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Seguro */
function calcular_seguro(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.produtos - dados.frete - dados.despesas_acessorias + dados.desconto - dados.pedagio - dados.ipi - dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Despesas acessórias */
function calcular_despesas_acessorias(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.produtos - dados.frete - dados.seguro + dados.desconto - dados.pedagio - dados.ipi - dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Desconto */
function calcular_desconto(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = (dados.total - dados.produtos - dados.frete - dados.seguro - dados.despesas_acessorias - dados.pedagio - dados.ipi - dados.icms_st) * -1;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Pedágio */
function calcular_pedagio(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.produtos - dados.frete - dados.seguro - dados.despesas_acessorias + dados.desconto - dados.ipi - dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* IPI */
function calcular_ipi(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.produtos - dados.frete - dados.seguro - dados.despesas_acessorias + dados.desconto - dados.pedagio - dados.icms_st;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* ICMS-ST */
function calcular_icms_st(event) {
    event.preventDefault();
    let dados = store_input();
    resultado = dados.total - dados.produtos - dados.frete - dados.seguro - dados.despesas_acessorias + dados.desconto - dados.pedagio - dados.ipi;
    document.getElementById("resultado-calculo-simples").innerHTML = "R$ " + resultado.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return resultado;
}

/* Exibir tabela com os segmentos */

function exibir_segmentos() {
    let i;
    let j;
    let segmentos_exibidos = document.getElementsByClassName("segmento_th");
    if (segmentos.length > 0 && segmentos.length >= segmentos_exibidos.length ) {
        document.getElementById("lista-segmentos").style.display = 'block';

        let start = segmentos_exibidos.length;

        for (i=start; i < segmentos.length; i++) {
            let row_th = document.getElementById("row-th");
            let rows = document.getElementsByClassName("row");
            let item_th = document.createElement('th');
            item_th.className = 'segmento_th';
            item_th.innerHTML = i + 1;
            row_th.appendChild(item_th);
            j = 0;
            for (const [key, value] of Object.entries(segmentos[i])) {
                let item = document.createElement('td');
                if (`${value}` != 0) {
                    item.innerHTML = "R$ " + `${value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
                } else {
                    item.innerHTML = "";                    
                }
                rows[j].appendChild(item);
                j++;
            }

        }
    }
}

/* Event listeners */
document.getElementById("calcular-total").addEventListener('click',calcular_total);

document.getElementById("calcular-produtos").addEventListener('click',calcular_produtos);

document.getElementById("calcular-frete").addEventListener('click',calcular_frete);

document.getElementById("calcular-seguro").addEventListener('click',calcular_seguro);

document.getElementById("calcular-despesas-acessorias").addEventListener('click',calcular_despesas_acessorias);

document.getElementById("calcular-desconto").addEventListener('click',calcular_desconto);

document.getElementById("calcular-pedagio").addEventListener('click',calcular_pedagio);

document.getElementById("calcular-ipi").addEventListener('click',calcular_ipi);

document.getElementById("calcular-icms-st").addEventListener('click',calcular_icms_st);

document.getElementById("novo-segmento").addEventListener('click',novo_segmento);

