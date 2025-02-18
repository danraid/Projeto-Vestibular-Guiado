document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const conteudo = urlParams.get("conteudo");
    const data = urlParams.get("data");

    document.getElementById("conteudo").textContent = conteudo;
    document.getElementById("data").textContent = data;

    async function carregarDadosCSV(arquivo) {
        try {
            const response = await fetch(`simulados/${arquivo}`);
            const texto = await response.text();
            const linhas = texto.trim().split("\n").map(linha => linha.split(";"));
            return linhas;
        } catch (error) {
            console.error(`Erro ao carregar ${arquivo}:`, error);
            return [];
        }
    }

    async function carregarQuestoes() {
        const questoesLinhas = await carregarDadosCSV("questoes.csv");
        const respostasLinhas = await carregarDadosCSV("respostas.csv");

        if (questoesLinhas.length === 0 || respostasLinhas.length === 0) {
            document.getElementById("questoes").innerHTML = "<p>Erro ao carregar questões e respostas.</p>";
            return;
        }

        const questoesFiltradas = questoesLinhas.filter(linha => linha[1] === conteudo && linha[0] === data);

        if (questoesFiltradas.length < 5) {
            document.getElementById("questoes").innerHTML = "<p>Não há questões suficientes para este conteúdo.</p>";
            return;
        }

        const questoesSelecionadas = questoesFiltradas.sort(() => 0.5 - Math.random()).slice(0, 5);
        const questoesDiv = document.getElementById("questoes");

        questoesSelecionadas.forEach((questao, index) => {
            const codQuestao = questao[3];
            const enunciado = questao[4];
            let respostas = respostasLinhas.filter(resp => resp[0] === codQuestao);

            // Embaralhar respostas antes de exibir
            respostas = respostas.sort(() => 0.5 - Math.random());

            let htmlRespostas = "";
            respostas.forEach(resp => {
                htmlRespostas += `
                    <label>
                        <input type="radio" name="questao${index}" value="${resp[1]}" required> ${resp[1]}
                    </label><br>
                `;
            });

            questoesDiv.innerHTML += `
                <fieldset class="questao" id="questao-${index}">
                    <legend><strong>${index + 1}. ${enunciado}</strong></legend>
                    ${htmlRespostas}
                    <div id="gabarito-${index}" class="gabarito" style="display: none; font-weight: bold; margin-top: 10px;"></div>
                </fieldset>
            `;
        });

        document.getElementById("form-simulado").addEventListener("submit", function (event) {
            event.preventDefault();
            verificarRespostas(questoesSelecionadas, respostasLinhas);
        });
    }

    async function salvarResultado(usuario, conteudo, data, acertos, total) {
        try {
            const response = await fetch("https://seu-projeto.vercel.app/api/salvarSimulado", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, conteudo, data, acertos, total })
            });

            const result = await response.json();
            console.log("Resposta do servidor:", result);
        } catch (error) {
            console.error("Erro ao salvar resultado:", error);
        }
    }

    function verificarRespostas(questoes, respostas) {
        let acertos = 0;
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<h2>Resultado</h2>";

        questoes.forEach((questao, index) => {
            const codQuestao = questao[3];
            const respostaSelecionada = document.querySelector(`input[name="questao${index}"]:checked`);
            const gabaritoDiv = document.getElementById(`gabarito-${index}`);

            if (!respostaSelecionada) {
                gabaritoDiv.innerHTML = `<p style="color:red;">❌ Não respondida</p>`;
                gabaritoDiv.style.display = "block";
                return;
            }

            const respostaCorreta = respostas.find(resp => resp[0] === codQuestao && resp[2] === "C");

            if (respostaSelecionada.value === respostaCorreta[1]) {
                acertos++;
                gabaritoDiv.innerHTML = `<p style="color:green;">✅ Correta</p>`;
            } else {
                gabaritoDiv.innerHTML = `<p style="color:red;">❌ Errada (Resposta correta: ${respostaCorreta[1]})</p>`;
            }

            gabaritoDiv.style.display = "block";
        });

        resultadoDiv.innerHTML += `<h3>Você acertou ${acertos} de 5 questões!</h3>`;

        // Enviar os resultados para a API
        const usuario = "anonimo"; // Caso haja login, substitua pelo ID/nome do usuário
        salvarResultado(usuario, conteudo, data, acertos, 5);
    }

    carregarQuestoes();
});
