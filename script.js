// Efeito de rolagem suave (Smooth Scroll) para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Função ativada pelos botões de agendamento
function agendar(servico) {
    // Aqui você pode substituir pelo link da API do WhatsApp no futuro
    alert(`Você selecionou a ${servico}. Em um sistema real, isso te levaria direto para o WhatsApp do lava-rápido!`);
    
    /* Exemplo de integração com WhatsApp:
    const numero = "5511999999999"; 
    const mensagem = `Olá! Gostaria de agendar a ${servico}.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
    */
}
