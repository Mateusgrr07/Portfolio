let total = 0;
let itensSelecionados = [];

function toggleItem(element) {
    const valor = parseFloat(element.getAttribute('data-valor'));
    const nome = element.querySelector('h3').innerText;

    if (element.classList.contains('active')) {
        // Remover
        element.classList.remove('active');
        total -= valor;
        itensSelecionados = itensSelecionados.filter(item => item !== nome);
    } else {
        // Adicionar
        element.classList.add('active');
        total += valor;
        itensSelecionados.push(nome);
    }

    // Atualiza o display
    document.getElementById('total-display').innerText = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function enviarOrcamento() {
    if (total === 0) {
        alert("Por favor, selecione pelo menos um item.");
        return;
    }

    const numeroWhats = "5500000000000"; // COLOQUE SEU NUMERO AQUI
    const mensagem = encodeURIComponent(
        `Olá! Fiz uma simulação no seu site.\n\n` +
        `*Itens:* ${itensSelecionados.join(", ")}\n` +
        `*Total Estimado:* R$ ${total.toFixed(2)}\n\n` +
        `Gostaria de conversar sobre esse projeto.`
    );

    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, '_blank');
}