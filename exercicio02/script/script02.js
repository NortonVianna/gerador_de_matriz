const linha = parseInt(prompt(`Digite o número de linhas da matriz`));
const coluna = parseInt(prompt(`Digite o número de colunas da matriz`));
const matriz = []

for (i=0; i<=linha-1; i++){
    matriz.push([],)
}

for (let L = 0; L <= linha-1; L++){
    for (let C = 0; C <= coluna-1; C++){
        matriz[L][C] = (`${L+1}${C+1} `)
    }
}

for (let L = 0; L <= linha-1; L++){
    document.write(`|`)
    for (let C = 0; C <= coluna-1; C++){
        document.write(`${matriz[L][C]}`)
    }
    document.write(`|<br>`)
}