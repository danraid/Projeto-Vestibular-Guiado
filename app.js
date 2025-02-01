document.addEventListener("DOMContentLoaded", async function () {
    const tabelaEstudos = document.getElementById("tabela-estudos");
    const seletorData = document.getElementById("seletor-data");

    // Ajustar a cor do seletor de datas
    seletorData.style.color = "black";
    seletorData.style.backgroundColor = "white";

    // Carregar o arquivo CSV e converter para JSON
    async function carregarDados() {
        try {
            const response = await fetch("cronograma.csv");
            const texto = await response.text();
            const linhas = texto.split("\n").map(linha => linha.split(";")); // Ajuste para ponto e vírgula

            if (linhas.length < 2) {
                console.error("Arquivo CSV vazio ou mal formatado");
                return [];
            }

            const cabecalhos = linhas[0].map(header => header.trim());
            const dados = linhas.slice(1).map(linha => {
                let objeto = {};
                cabecalhos.forEach((cabecalho, index) => {
                    objeto[cabecalho] = linha[index] ? linha[index].trim() : "";
                });
                return objeto;
            });
            return dados;
        } catch (error) {
            console.error("Erro ao carregar os dados:", error);
            return [];
        }
    }

    // Atualizar a tabela conforme a seleção da data
    async function atualizarTabela(dataSelecionada) {
        const dados = await carregarDados();
        tabelaEstudos.innerHTML = "";

        const dadosFiltrados = dados.find(item => item["Semana"] === dataSelecionada);
        if (!dadosFiltrados) {
            tabelaEstudos.innerHTML = "<tr><td colspan='7'>Nenhum dado disponível para esta data</td></tr>";
            return;
        }

        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${dadosFiltrados["Semana"] || "-"}</td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Segunda (Matemática)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Segunda (Matemática)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Terça (Ciências da Natureza)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Terça (Ciências da Natureza)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Quarta (Ciências Humanas)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Quarta (Ciências Humanas)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Quinta (Linguagens)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Quinta (Linguagens)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Sexta (Revisão/Aprofundamento)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Sexta (Revisão/Aprofundamento)"] || "-"}</a></td>
        `;
        tabelaEstudos.appendChild(linha);
    }

    // Preencher o seletor de data
    async function preencherSeletor() {
        const dados = await carregarDados();
        const datasUnicas = [...new Set(dados.map(item => item["Semana"]))];

        datasUnicas.forEach(data => {
            const option = document.createElement("option");
            option.value = data;
            option.textContent = data;
            seletorData.appendChild(option);
        });

        // Atualizar a tabela com a primeira data
        if (datasUnicas.length > 0) {
            atualizarTabela(datasUnicas[0]);
        }
    }

    seletorData.addEventListener("change", function () {
        atualizarTabela(seletorData.value);
    });

    preencherSeletor();
});
