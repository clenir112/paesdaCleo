document.querySelector('button').addEventListener('click', () => {
    alert('Pedido realizado com sucesso!');
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

const produtos = document.querySelectorAll('.produto');
produtos.forEach((produto, index) => {
    setTimeout(() => {
        produto.classList.add('visible');
    }, index * 200);
});

// Abre o modal com a imagem clicada
function abrirModal(img) {
    document.getElementById('pedidoForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode adicionar a lógica para processar o pedido, se necessário

        // Exibe a mensagem de sucesso
        document.getElementById('mensagem').innerText = 'Pedido realizado com sucesso!';
        document.getElementById('mensagem').style.display = 'block';

        // Limpa o formulário
        this.reset();
    });
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Fecha o modal
function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
