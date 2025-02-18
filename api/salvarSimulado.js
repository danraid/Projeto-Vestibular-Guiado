export default function handler(req, res) {
    // Adiciona cabeçalhos CORS para permitir requisições de qualquer origem
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Trata requisições OPTIONS (preflight request do CORS)
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Validação do método da requisição
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    // Obtendo os dados enviados pelo simulado
    const { usuario, conteudo, data, acertos, total } = req.body;

    if (!usuario || !conteudo || !data || acertos === undefined || total === undefined) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        // URL do Google Sheets para armazenar os resultados
        const SHEET_URL = "https://script.google.com/macros/s/AKfycbz_EnyxHQQw0P8cl_GCVs5FgaZLyxCTpT7-oiRGamZOL45DeQ5i0qaFOHSx9VQedT8hOQ/exec";

        // Enviar os dados para o Google Sheets
        fetch(SHEET_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, conteudo, data, acertos, total })
        });

        return res.status(200).json({ message: "Resultado salvo com sucesso!" });
    } catch (error) {
        console.error("Erro ao salvar resultado:", error);
        return res.status(500).json({ error: "Erro ao salvar o resultado" });
    }
}
