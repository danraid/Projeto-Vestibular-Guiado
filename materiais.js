document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const conteudo = urlParams.get("conteudo");
    const data = urlParams.get("data");
    document.getElementById("conteudo").textContent = conteudo;
    document.getElementById("data").textContent = data;

    async function carregarMateriais() {
        try {
            const response = await fetch("materiais.csv");
            const texto = await response.text();
            const linhas = texto.split("\n").map(linha => linha.split(";"));
            const materiaisFiltrados = linhas.filter(linha => linha[0] === data && linha[1] === conteudo);
            const listaMateriais = document.getElementById("lista-materiais");
            const linkSimulado = document.getElementById("link-simulado");

            if (materiaisFiltrados.length === 0) {
                listaMateriais.innerHTML = "<li>Nenhum material disponível</li>";
            } else {
                materiaisFiltrados[0].slice(2).forEach((link, index) => {
                    if (link.trim()) {
                        const item = document.createElement("li");
                        item.innerHTML = `<a href="${link}" target="_blank">Vídeo ${index + 1}</a>`;
                        listaMateriais.appendChild(item);
                    }
                });

                linkSimulado.href = `simulado.html?conteudo=${encodeURIComponent(conteudo)}&data=${encodeURIComponent(data)}`;
                linkSimulado.style.display = "inline-block";
            }
        } catch (error) {
            console.error("Erro ao carregar os materiais:", error);
        }
    }

    carregarMateriais();
});
