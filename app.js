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
            const linhas = texto.split("\n").map(linha => linha.split(";"));

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
        localStorage.setItem("semanaSelecionada", dataSelecionada); // Salva a semana escolhida

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
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Segunda (Português)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Segunda (Português)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Terça (Matemática)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Terça (Matemática)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Quarta (Ciências)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Quarta (Ciências)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Quinta (História)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Quinta (História)"] || "-"}</a></td>
            <td><a href="materiais.html?conteudo=${encodeURIComponent(dadosFiltrados["Sexta (Geografia)"])}&data=${encodeURIComponent(dadosFiltrados["Semana"])}">${dadosFiltrados["Sexta (Geografia)"] || "-"}</a></td>
        `;
        tabelaEstudos.appendChild(linha);
    }

    // Preencher o seletor de data e restaurar a última escolha
    async function preencherSeletor() {
        const dados = await carregarDados();
        const datasUnicas = [...new Set(dados.map(item => item["Semana"]))];

        datasUnicas.forEach(data => {
            const option = document.createElement("option");
            option.value = data;
            option.textContent = data;
            seletorData.appendChild(option);
        });

        // Restaurar a última seleção salva
        const ultimaSemana = localStorage.getItem("semanaSelecionada");
        if (ultimaSemana && datasUnicas.includes(ultimaSemana)) {
            seletorData.value = ultimaSemana;
            atualizarTabela(ultimaSemana);
        } else if (datasUnicas.length > 0) {
            atualizarTabela(datasUnicas[0]);
        }
    }

    seletorData.addEventListener("change", function () {
        atualizarTabela(seletorData.value);
    });

    preencherSeletor();
});
