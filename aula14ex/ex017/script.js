function gerarTabuada() {
    let res = window.document.querySelector('#res');
    let num = window.document.querySelector('#num');
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let numero = Number(num.value);
        res.innerHTML = '';
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${numero} x ${c} = ${numero * c}`;
            item.value = `res${c}`
            res.appendChild(item);
        }
    }
}