# 📚 Plano de Estudos Interativo para Vestibular  

Este é um projeto web interativo que exibe um **plano de estudos dinâmico** para vestibulandos. O sistema permite selecionar datas, acessar materiais de estudo e visualizar um cronograma semanal.  

## 🚀 Demonstração  
🔗 [Acesse a demonstração aqui](https://projeto-vestibular-guiado.vercel.app/)  

## 🛠 Tecnologias Utilizadas  
Este projeto foi desenvolvido utilizando as seguintes tecnologias:  

### **Frontend**  
- **HTML5** → Estrutura da aplicação  
- **CSS3** → Estilização da interface  
- **JavaScript (Vanilla JS)** → Manipulação dinâmica da DOM  

### **Manipulação de Dados**  
- **CSV** → O cronograma e os materiais são carregados a partir de arquivos CSV  
- **Fetch API** → Carregamento dinâmico dos dados no frontend  

### **Hospedagem e Deploy**  
- **Vercel** → Plataforma utilizada para deploy e hospedagem do projeto  

## 📌 Funcionalidades  
✅ Exibição de um **cronograma semanal** interativo  
✅ Seletor de datas para **navegar pelas semanas de estudo**  
✅ Hiperlinks para materiais de estudo, incluindo **vídeos e exercícios**  
✅ Design responsivo, adaptado para **desktop e mobile**  
✅ **Simulados interativos** com questões aleatórias e correção automática  
✅ **Salvamento do desempenho dos usuários** diretamente na API  

## 📊 Feedback e Atualizações dos Simulados  
Após a implementação dos simulados, foram coletados feedbacks dos usuários, e diversas melhorias foram realizadas:

- **Correção na exibição de questões:** Agora, o sistema filtra corretamente as questões por conteúdo e data.
- **Adição de respostas aleatorizadas:** Para evitar previsibilidade, as alternativas são embaralhadas dinamicamente.
- **Validação de submissão:** O sistema impede que usuários enviem respostas sem selecionar uma alternativa.
- **Feedback de correção:** Agora, após o envio, os usuários podem visualizar quais respostas estavam corretas e erradas.
- **Salvamento de resultados:** A API `salvarSimulado.js` foi integrada para armazenar os resultados dos simulados em um Google Sheet via Webhook.
- **Tratamento de erros e falhas na API:** Foram adicionados handlers para lidar com falhas na comunicação com o servidor.

Os detalhes de implementação estão nos arquivos:
- [`simulado.js`](simulado.js) → Lógica para carregar, exibir e corrigir as questões.
- [`salvarSimulado.js`](api/salvarSimulado.js) → API para salvar os resultados.

## 📄 Documentação  
Toda a documentação do projeto está disponível na pasta [`/docs`](docs/).  

- 📖 **[Documentação SCRUM](docs/SCRUM_Documentacao.md)** → Processo ágil, backlog, sprints e entregáveis.  
- 📖 **[Requisitos do Sistema](docs/Requisitos.md)** → Descrição detalhada dos requisitos funcionais e não funcionais.  
- 📊 **Diagramas UML**:  
  - 📌 **[Diagrama de Casos de Uso](docs/UML/diagrama_casos_uso.png)**  
  - 📌 **[Diagrama de Classes](docs/UML/diagrama_classes.png)**  
  - 📌 **[Diagrama de UX Flow](docs/UML/diagrama_ux.png)**  

## 🎯 Como Rodar o Projeto  
1. **Clone o repositório:**  
   ```bash  
   git clone https://github.com/danraid/Projeto-Vestibular-Guiado.git  
   cd Projeto-Vestibular-Guiado  
