function contar() {
    let res = document.querySelector('#res');
    let inicio = document.querySelector('#inicio');
    let fim = document.querySelector('#fim');
    let passo = document.querySelector('#passo');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
        res.innerHTML = `Impossível contar!`;
        // window.alert('[ERRO] Faltam dados!');    
    } else {
        res.innerHTML = `Contando: </br>`;
        if (Number(passo.value) <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1');
            passo = 1;
        }
        if (inicio.value < fim.value) {
        // Contagem crescente
            for ( c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
        // Contagem regressiva
            for ( c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}