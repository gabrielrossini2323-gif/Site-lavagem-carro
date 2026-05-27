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
    // Seu número de telefone no formato internacional (55 + DDD + Número)
    const numero = "5511930613446"; 
    
    // Mensagem pré-programada que puxa o nome do serviço escolhido
    const mensagem = `Olá! Gostaria de agendar a ${servico}.`;
    
    // Cria o link da API do WhatsApp com o texto formatado para URLs
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    // Redireciona o cliente para o WhatsApp em uma nova aba
    window.open(url, '_blank');
}
