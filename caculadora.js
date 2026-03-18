function calcularDesconto(){
    //Entrada de dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;
    //Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;
    //Saida
    document.getElementById("valordesconto").textContent = "Desconto em reais: " + valorDesconto;
    document.getElementById("resultado").textContent = "Preço final com desconto: " + valorFinal;
}