# 📌 Documentação de Requisitos - Plano de Estudos Interativo

## 📍 1. Introdução

### 🔹 1.1 Objetivo
O objetivo do sistema é fornecer um **plano de estudos interativo** para vestibulandos, permitindo a **seleção de semanas**, **visualização de cronogramas**, **acesso a materiais didáticos** e **realização de simulados**.

### 🔹 1.2 Escopo
O sistema será uma aplicação **web responsiva**, permitindo que o usuário:
- Acompanhe um **cronograma semanal de estudos**.
- Acesse **materiais didáticos** organizados por dia da semana.
- Realize **simulados interativos** com correção automática.
- Visualize **resultados** e armazene seu progresso.

---

## 📍 2. Requisitos Funcionais (RF)

| **ID**  | **Requisito**              | **Descrição**  |
|--------|--------------------------|--------------------------|
| **RF01** | Seleção de Semana  | O usuário deve conseguir escolher uma semana no seletor de datas. |
| **RF02** | Exibição do Cronograma  | O sistema deve exibir um cronograma de estudos dinâmico, conforme a semana selecionada. |
| **RF03** | Acesso aos Materiais  | O usuário deve conseguir acessar os materiais de estudo clicando nos links da tabela do cronograma. |
| **RF04** | Exibição de Materiais  | O sistema deve carregar os materiais de estudo a partir de um arquivo CSV. |
| **RF05** | Simulado Interativo  | O usuário deve conseguir realizar simulados baseados no conteúdo estudado. |
| **RF06** | Correção do Simulado  | O sistema deve corrigir automaticamente as respostas e exibir o desempenho do usuário. |
| **RF07** | Persistência de Dados  | O sistema deve armazenar a última semana selecionada pelo usuário no LocalStorage. |

---

## 📍 3. Requisitos Não Funcionais (RNF)

| **ID**  | **Requisito**              | **Descrição**  |
|--------|--------------------------|--------------------------|
| **RNF01** | Responsividade  | O sistema deve ser compatível com **desktop e mobile**. |
| **RNF02** | Tempo de Resposta  | O carregamento das páginas e dados não deve ultrapassar **2 segundos**. |
| **RNF03** | Segurança  | O sistema deve restringir a execução de scripts maliciosos (**CSP**). |
| **RNF04** | Usabilidade  | O sistema deve seguir boas práticas de **UI/UX** para facilitar o uso. |
| **RNF05** | Armazenamento  | O sistema utilizará **arquivos CSV** como base de dados, manipulados pelo **Fetch API**. |

---

## 📍 4. Casos de Uso

### 🔹 **Caso de Uso 01 - Seleção de Semana**
**Ator:** Usuário  
**Descrição:** O usuário seleciona uma semana e o cronograma de estudos correspondente é carregado.  
**Fluxo Principal:**  
1. O usuário acessa a página inicial.
2. O sistema exibe um seletor de semanas.
3. O usuário escolhe uma semana.
4. O cronograma correspondente é carregado na tela.

### 🔹 **Caso de Uso 02 - Acesso aos Materiais**
**Ator:** Usuário  
**Descrição:** O usuário clica em um link do cronograma para acessar materiais de estudo.  
**Fluxo Principal:**  
1. O usuário seleciona uma semana.
2. O sistema exibe a grade de matérias da semana.
3. O usuário clica em um link de material de estudo.
4. O sistema redireciona para a página de materiais.

### 🔹 **Caso de Uso 03 - Simulado Interativo**
**Ator:** Usuário  
**Descrição:** O usuário acessa um simulado e responde às perguntas.  
**Fluxo Principal:**  
1. O usuário acessa um simulado pela página de materiais.
2. O sistema carrega as perguntas aleatórias do banco de questões.
3. O usuário responde às questões e submete o simulado.
4. O sistema exibe a correção e o desempenho.

---

## 📍 5. Modelo de Dados

### 🔹 **5.1 Estrutura do Arquivo CSV (cronograma.csv)**
| Semana | Segunda | Terça | Quarta | Quinta | Sexta |
|--------|--------|------|------|------|------|
| 01/02/2024 | Matemática | Física | História | Redação | Revisão |

### 🔹 **5.2 Estrutura do Arquivo CSV (materiais.csv)**
| Semana | Conteúdo | Link |
|--------|----------|------|
| 01/02/2024 | Matemática | https://aula-matematica.com |

### 🔹 **5.3 Estrutura do Arquivo CSV (questoes.csv)**
| Semana | Conteúdo | ID Questão | Enunciado | Alternativa A | Alternativa B | Alternativa C | Alternativa D |
|--------|----------|-----------|------------|-------------|-------------|-------------|-------------|
| 01/02/2024 | Matemática | Q001 | Quanto é 2+2? | 3 | 4 | 5 | 6 |

---

## 📍 6. Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|------|
| **HTML5** | Estrutura da aplicação |
| **CSS3** | Estilização da interface |
| **JavaScript (Vanilla JS)** | Manipulação dinâmica da DOM |
| **Fetch API** | Carregamento dinâmico dos dados via CSV |
| **LocalStorage** | Persistência da seleção de semana |

---

## 📍 7. Conclusão
Essa documentação detalha **os requisitos essenciais** para o funcionamento do sistema. O projeto foca em uma experiência fluida para o usuário, facilitando a **organização dos estudos** e a **realização de simulados**.