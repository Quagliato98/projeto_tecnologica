// Verifica se o DOM está completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Pega a URL da página atual (ex: /index.html, /jogos.html, etc.)
    const currentPage = window.location.pathname
        .split("/")
        .filter(Boolean)
        .pop();

    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll("#menu a");

    // Para cada link do menu, verifica se o href é igual à página atual
    menuLinks.forEach((link) => {
        const isActive =
            link.getAttribute("href") === currentPage ||
            (currentPage === "" && link.getAttribute("href") === "index.html");
        // Toggle 'active' class based on current page
        link.classList.toggle("active", isActive);
    });
});
