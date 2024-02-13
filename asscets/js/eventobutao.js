document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' para abrir ou fechar o menu
        var isOpen = menu.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isOpen); // Atualiza o atributo aria-expanded para indicar o estado do menu
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu'); // Atualiza o rótulo acessível do botão do menu
    });
});
