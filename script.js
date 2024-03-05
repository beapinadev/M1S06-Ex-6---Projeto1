async function buscarEndereco() {
    const cep = prompt("Por favor, insira o CEP (apenas números):");
    const url = `https://viacep.com.br/ws/${cep}/json`;

    try {
        const response = await fetch(url);
        const data = await response.json();

    if (response.ok) {
        const { logradouro, complemento, bairro, localidade, uf } = data;
        const enderecoFormatado = `${logradouro}, ${complemento ? complemento + ' - ' : ''}${bairro} - ${localidade}/${uf}`;
        alert(enderecoFormatado);
    } 
    else {
        alert(`Erro ao buscar endereço: ${data.message}`);
    }
    
    } 
    catch (error) {
        console.error('Erro ao buscar endereço:', error);
        alert('Ocorreu um erro ao buscar o endereço. Por favor, tente novamente.');
    }
}

buscarEndereco();
